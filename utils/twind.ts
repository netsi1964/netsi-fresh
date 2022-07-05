import { Configuration, setup } from "twind";

import { IS_BROWSER } from "$fresh/runtime.ts";

export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontSize: {
      small: "1.2rem",
      medium: "1.4rem",
      large: "1.6rem",
    },
    colors: {
      primary: "#0070f3",
      secondary: "#ff4081",
      tertiary: "#ff4081",
      quaternary: "#ff4081",
      white: "#fff",
      black: "#000",
    },
    spacing: {
      2: ".5rem",
      4: "1rem",
      10: "2rem",
    },
  },
};
if (IS_BROWSER) setup(config);
