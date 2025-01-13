/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Teal_blue: {
          30: '#F9E49145',
          50: '#007B83',
          90: '#006B76',
          100: '#005F69',
          200: '#005A63',
        },
        teal_light: {
          5: "#2A9D8F40",
          10: "#2A9D8F2E",
          50: "#2A9D8F"

        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          5: "#333333",
          10: '#EEEEEE',
          15: '#484C52',
          20: '#A2A2A2',
          25: '#EAEAEA',
          30: '#7B7B7B',
          35: "#C7C9D9A3",
          50: '#585858',
          90: '#141414',
          100: '#e1e0dd',
        },
        drop_shadow:{
          10: '#00000040' 
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          10:"#DBB20E54",
          20: "#F9CF4F4D",
          50: '#FEC601'
          ,
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/home/home1.svg')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
