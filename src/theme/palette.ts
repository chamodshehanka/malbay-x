import { colors } from "@material-ui/core";

const white = "#FFFFFF";

export default {
  type: "light",
  primary: {
    contrastText: white,
    dark: colors.blue[900],
    main: "#7272f5",
    light: colors.blue[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.blueGrey[900],
    main: "#5f27cd",
    light: colors.blueGrey.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[800],
    secondary: colors.blueGrey[500],
    link: colors.blue[600],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  divider: colors.grey[200],
} as const;
