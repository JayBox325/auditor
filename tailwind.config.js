const colors = require(`tailwindcss/colors`)

module.exports = {
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        './utils/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'fill-current'
    ],
    theme: {
        extend: {

            // Calculate REM sizes to match design: https://nekocalc.com/px-to-rem-converter
            fontSize: {
                xxs: '0.625rem',    // 10px
                xs: '0.75rem',      // 12px
                sm: '0.875rem',     // 14px
                base: '1rem',       // 16px
                lg: '1.125rem',     // 18px
                xl: '1.25rem',      // 20px
                '2xl': '1.5rem',    // 24px
                '3xl': '1.875rem',  // 30px
                '4xl': '2.25rem',   // 36px
                '5xl': '3rem',      // 48px
                '6xl': '3.375rem',  // 54px
                '7xl': '4.5rem',    // 72px
                '8xl': '6rem',      // 96px
                '9xl': '8rem',      // 128px
                '10xl': '9rem',     // 144px
                '11xl': '10rem',    // 160px
            },
            
            fontFamily: {
                body: ['helvetica neue', 'helvetica', 'arial', 'sans-serif']
            },
            
            zIndex: {
                '5': 5,
                '60': 60,
                '70': 70,
                '80': 80,
                '90': 90,
                '100': 100
            },

            lineHeight: {
                display: '0.85'
            },

            colors: {
                // Tailwind themes
                white: '#FFFFFF',
                black: '#000009',
                indigo: colors.indigo,
                yellow: colors.amber,
                pink: colors.pink,
                green: colors.emerald,
                gray: colors.zinc,

                // Social media where 500 is default brand color
                facebook: {
                    50: '#F5F7FA',
                    100: '#EBEEF5',
                    200: '#CED6E5',
                    300: '#B1BDD6',
                    400: '#768BB7',
                    500: '#3B5998',
                    600: '#355089',
                    700: '#23355B',
                    800: '#1B2844',
                    900: '#121B2E',
                },
                twitter: {
                    50: '#F4FAFE',
                    100: '#E8F6FE',
                    200: '#C7E8FC',
                    300: '#A5D9FA',
                    400: '#61BDF6',
                    500: '#1DA1F2',
                    600: '#1A91DA',
                    700: '#116191',
                    800: '#0D486D',
                    900: '#093049',
                },
                pinterest: {
                    50: '#FCF3F4',
                    100: '#F8E6E8',
                    200: '#EFC1C6',
                    300: '#E59CA4',
                    400: '#D15260',
                    500: '#BD081C',
                    600: '#AA0719',
                    700: '#710511',
                    800: '#55040D',
                    900: '#390208',
                },
                instagram: {
                    50: '#FCF5F9',
                    100: '#F9EBF3',
                    200: '#F0CDE0',
                    300: '#E6AECE',
                    400: '#D472A9',
                    500: '#C13584',
                    600: '#AE3077',
                    700: '#74204F',
                    800: '#57183B',
                    900: '#3A1028',
                },
                linkedin: {
                    50: '#F2F8FB',
                    100: '#E6F1F8',
                    200: '#BFDDED',
                    300: '#99C9E1',
                    400: '#4DA0CB',
                    500: '#0077B5',
                    600: '#006BA3',
                    700: '#00476D',
                    800: '#003651',
                    900: '#002436',
                },
            },

            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '1/2': '50%',
                '1/3': '33.33333%',
                '2/3': '66.66667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.66667%',
                '2/6': '33.33333%',
                '3/6': '50%',
                '4/6': '66.66667%',
                '5/6': '83.33333%',
                '1/12': '8.33333%',
                '2/12': '16.66667%',
                '3/12': '25%',
                '4/12': '33.33333%',
                '5/12': '41.66667%',
                '6/12': '50%',
                '7/12': '58.33333%',
                '8/12': '66.66667%',
                '9/12': '75%',
                '10/12': '83.33333%',
                '11/12': '91.66667%',
                '13/12': '108.33333%',
                '14/12': '116.66667%',

                '1/24': '4.166666666666667%',
                '2/24': '8.3333333333%',
                '3/24': '12.5%',
                '4/24': '16.6666666667%',
                '5/24': '20.8333333333%',
                '6/24': '25%',
                '7/24': '29.1666666667%',
                '8/24': '33.3333333333%',
                '9/24': '37.5%',
                '10/24': '41.6666666667%',
                '11/24': '45.8333333333%',
                '12/24': '50%',
                '13/24': '54.1666666667%',
                '14/24': '58.3333333333%',
                '15/24': '62.5%',
                '16/24': '66.6666666667%',
                '17/24': '70.8333333333%',
                '18/24': '75%',
                '19/24': '79.1666666667%',
                '20/24': '83.3333333333%',
                '21/24': '87.5%',
                '22/24': '91.6666666667%',
                '23/24': '95.8333333333%',
                '24/24': '100%',
                
                'full': '100%',
            },

            screens: {
                'sm': '420px',
                'md': '600px',
                'lg': '900px',
                'xl': '1200px',
                '2xl': '1728px',
            },

            minHeight: {
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh'
            },

            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)',
            },

            transitionProperty: {
                'width': 'width',
                'height': 'height',
            },

            gridTemplateColumns: {
                '24': 'repeat(24, minmax(0, 1fr))',
            },

            gridColumn: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
                'span-24': 'span 24 / span 24',
            },

            gridColumnStart: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
                '18': '18',
                '19': '19',
                '20': '20',
                '21': '21',
                '22': '22',
                '23': '23',
                '24': '24',
            },

            letterSpacing: {
                tightest: '-0.2rem',
                tighter: '-.05rem',
                tight: '-.025rem',
                normal: '0',
                wide: '.05rem',
                wider: '.1rem',
                widest: '.15rem',
            }

        }
    },
    plugins: [],
}