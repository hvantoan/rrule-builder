import { createTheme} from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2781db",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: '4px',  // Adjust padding as needed
          backgroundColor: 'white',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '4px',  // Adjust padding as needed
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            transform: 'translate(10px, -10px) scale(0.8)',  // Custom transform when label is focused or shrunk
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(10px, -10px) scale(0.8)',  // Custom transform when label has filled value
          },
          transform: 'translate(10px, 10px) scale(0.8);',
        },
      },
    },
  },
});


