/*
 * @Author: Kori
 * @Date: 2022-10-28 17:15:36
 * @LastEditors: Kori
 * @LastEditTime: 2022-10-31 14:02:16
 * @FilePath: /portalverse_offcial/tailwind.config.cjs
 * @Description: 
 * 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      '200%': '200%',
    },

    // screens: {
    //   'xl': '1440px'
    // },
    extend: {
      maxWidth: {
        "1440": "90rem"
      },
      height: {
        "9641.24px": "9641.24px"
      },
      colors: {
        "black-0c": "#0c0c0c",
        "linear-text-end": "#BBBBFF",
        "linear-light-start": "#7623F5",
        "linear-light-mid": "#4553F2",
        "linear-light-end": "#75DAF3",
      },
      backgroundImage: {
        'logo-container': "url('src/assets/nav-logo-container.png')",
        // 移动端背景logo
        'logo-container-md': "url('src/assets/nav-logo-container-md.png')",
        'Rectangle': "url('src/assets/Rectangle.png')",
        'Rectangle-hover': "url('src/assets/Rectangle-hover.png')",
        'Union': "url('src/assets/Union.png')",
        'Union-md': "url('src/assets/Union-md.png')",
        'Blog-btn-border': "url('src/assets/blog-btn-border.png')",
        'Mission-border-line': "url('src/assets/Mission-border-line.png')",
        'Mission-border-line-md': "url('src/assets/Mission-border-line-md.png')",
      },
      fontFamily: {
        "Inter": ["Inter", "sans-serif"],
        "Inter-400": ["Inter-400", "sans-serif"],
        "Inter-500": ["Inter-500", "sans-serif"],
        "Inter-700": ["Inter-700", "sans-serif"]
      },
      animation: {
        "linear-color-animat": "linearColor 5s linear infinite",
      },
      keyframes: {
        linearColor: {
          "0%": {
            backgroundPosition: "0"
          },
          "50%": {
            backgroundPosition: "100%"
          },
          "100%": {
            backgroundPosition: "0"
          }
        },
        // 小球动画
      },

    }
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
