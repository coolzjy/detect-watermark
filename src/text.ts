interface Texts {
  warn: string;
  dismiss: string;
}

const LANG: Record<string, Texts> = {
  "zh-CN": {
    warn: "⚠️ 当前页面可能含有水印，请注意保护个人信息！",
    dismiss: "知道了",
  },
};

export default function getText(key: keyof Texts) {
  const text = LANG[navigator.language] ?? LANG["zh-CN"];
  return text[key];
}
