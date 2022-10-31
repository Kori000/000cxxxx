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
        'logo-container': "url('@/assets/nav-logo-container.png')",
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
        }
      },
      backgroundImage: {
        'Rectangle': "url('src/assets/Rectangle.png')",
        'Rectangle-hover': "url('src/assets/Rectangle-hover.png')",
        'Union': "url('src/assets/Union.png')"
      }
    }
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
