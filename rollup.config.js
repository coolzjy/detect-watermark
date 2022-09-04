import typescript from "@rollup/plugin-typescript";

export default {
  // 核心选项
  input: "src/main.ts",

  output: {
    file: 'bundle.js',
    format: 'iife'
  },

  plugins: [typescript()],
};
