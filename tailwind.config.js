module.exports = {
  purge: ['./src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            '> :first-child': { marginTop: '-' },
            '> :last-child': { marginBottom: '-'},
            '&:first-child > :first-child': {
              marginTop: '0',
            },
            '&:last-child > :last-child': {
              marginBottom: '0',
            },
            p: {
              lineHeight: '1.5rem',
              letterSpacing: '1px'
            },
            'h1, h2': {
              letterSpacing: '-0.05em',
              lineHeight: '3rem'
            },
            'h2, h3': {
              'scroll-margin-top': `${(70 + 40) /16}rem`,
            },
            'ul > li': {
              paddingLeft: '1.5em',
              lineHeight: '1.5rem'
            },
            'ul > li::before': {
              width: '0.75em',
              height: '0.125em',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: 0,
              backgroundColor: theme('color.gray.300'),
            },
          }
        }
      }),
      width: {
        xl: '36rem',
      },
      maxWidth: {
        '4.5xl': '60rem',
        '8xl': '90rem',
      },
      maxHeight: (theme) => ({
        sm: '30rem',
        '(screen-18)': `calc(100vh - ${theme('spacing.18')})`,
      }),
      minWidth: {
        sm: '30rem'
      },
      minHeight: {
        sm: '30rem'
      },
      boxShadow: {
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        link: 'inset 0 -0.125em 0 0 #ff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even', 'active'],
      cursor: ['active'],
      opacity: ['disabled'],
      textColor: ['group-focus'],
    },
  },
}
