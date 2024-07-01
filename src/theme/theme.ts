import { createTheme } from "@mui/material/styles";
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2781db",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-shrink": {
            transform: "translate(10px, -8px) scale(0.8)", // Custom transform when label has filled value
          },
          transform: "translate(10px, 10px) scale(1);",
        },
      },
    },
  },
});

export default defaultTheme;
