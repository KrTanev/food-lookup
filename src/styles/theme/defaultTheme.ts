import { Lora, Manrope } from 'next/font/google';

export const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

let rootElement;

if (typeof window !== 'undefined') {
  rootElement = document.getElementById('__next');
}

export const defaultTheme = {
  palette: {
    background: {
      default: '#FFFFFF',
    },
    // primary: {
    //   main: COLORS.MAIN,
    // },
    // secondary: {
    //   main: COLORS.SECONDARY,
    // },
    // error: {
    //   main: COLORS.ERROR,
    // },
  },
};

export const defaultThemeOptions = {
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-columnHeaderTitle': {
            color: 'grey',
            fontSize: 14,
            font: 'Manrope',
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: 'darkgreen',
            borderColor: 'black',
            borderLeft: 1,
            borderRight: 1,
            ':hover': {
              cursor: 'default',
            },
          },
          '& .MuiDataGrid-row': {
            ':hover': {
              cursor: 'default',
            },
          },
          '& .MuiDataGrid-cell': {
            color: 'grey',
            font: 'Manrope',
          },
          '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-withBorderColor': {
            borderColor: 'grey',
          },
          '& .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
  palette: defaultTheme.palette,
  typography: {
    fontFamily: manrope.style.fontFamily,
    fontLora: manrope.style.fontFamily,
    button: {
      textTransform: 'none' as const,
    },
  },
};
