export default function isWatermarkElement(el: Element) {
  const style = getComputedStyle(el);
  return (
    style.pointerEvents === "none" &&
    style.position === "fixed" &&
    style.backgroundImage.toLowerCase().includes("data:")
  );
}
