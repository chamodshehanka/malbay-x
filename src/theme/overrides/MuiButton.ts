import { colors } from "@material-ui/core";

export default {
  contained: {
    boxShadow: "none",
    backgroundColor: colors.grey[100],
    "&:hover": {
      backgroundColor: colors.grey[300],
      boxShadow: "none",
    },
  },
};
