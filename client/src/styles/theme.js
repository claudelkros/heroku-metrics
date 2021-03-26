import { createMuiTheme } from "@material-ui/core";
import { frFR } from "@material-ui/core/locale";

export const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#0288d1",
      },
    },

    typography: {
      fontFamily: ["Montserrat"],
    },

    radio: {
      "&$checked": {
        color: "#4B8DF8",
      },
    },

    overrides: {
      MuiInput: {
        underline: {
          "&:hover:not($disabled):not($focused):not($error):before": {
            borderColor: "#ffffff",
          },
        },
      },
    },
  },
  frFR
);
