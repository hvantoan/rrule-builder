import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-date-pickers/themeAugmentation";
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2781db",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "4px", // Adjust padding as needed
          backgroundColor: "white",
        },
      },
    },
    MuiDatePicker: {},
  },
});

export default defaultTheme;
