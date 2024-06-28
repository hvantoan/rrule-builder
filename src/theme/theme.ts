import { createTheme} from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2781db",
    },

  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&$focused': {
          '&.Mui-focused': {
            borderWidth: 1,
          }
        }
      }
    }
  }}
});


