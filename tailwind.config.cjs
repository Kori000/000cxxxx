/*
 * @Author: Kori
 * @Date: 2022-10-28 17:15:36
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-29 14:13:28
 * @FilePath: /portalverse_offcial/tailwind.config.cjs
 * @Description: 
 * 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "9641.24px": "9641.24px"
      },
      colors: {
        "black-0c": "#0c0c0c",
        "linear-text-end": "#BBBBFF",
        "linear-light-start": "#7623F5",
        "linear-light-mid": "#4553F2",
        "linear-light-end": "#75DAF3",
      }
    }
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
