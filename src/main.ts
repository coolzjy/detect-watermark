import isWatermarkElement from "./is-watermark-element";
import getText from "./text";

async function detect() {
  return new Promise<Element | void>((resolve) => {
    const elements = document.querySelectorAll("*");
    let cursor = 0;

    const run: IdleRequestCallback = ({ didTimeout }) => {
      for (; cursor < elements.length; cursor++) {
        const element = elements[cursor];
        if (isWatermarkElement(element)) {
          resolve(element);
          return;
        }
        if (didTimeout) {
          requestIdleCallback(run);
          return;
        }
      }
      resolve();
    };

    requestIdleCallback(run);
  });
}

function report(el: Element) {
  const shadowHost = document.createElement("div");
  const shadowRoot = shadowHost.attachShadow({ mode: "closed" });
  document.body.appendChild(shadowHost);

  const notice = document.createElement("div");
  notice.setAttribute(
    "style",
    [
      "position: fixed",
      "z-index: 99999",
      "top: 10px",
      "right: 10px",
      "left: 10px",
      "display: flex",
      "justify-content: space-between",
      "align-items: center",
      "color: white",
      "background: red",
      "border-radius: 8px",
      "padding: 8px",
    ].join(";")
  );
  notice.innerText = getText("warn");
  const button = document.createElement("button");
  button.innerText = getText("dismiss");
  button.addEventListener("click", () => {
    document.body.removeChild(shadowHost);
  });
  notice.appendChild(button);
  shadowRoot.appendChild(notice);
}

setTimeout(async () => {
  const watermarkEl = await detect();
  if (watermarkEl == null) return;
  report(watermarkEl);
}, 5000);
