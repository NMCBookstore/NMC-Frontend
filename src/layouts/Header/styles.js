import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainStack: {
    zIndex: 2,
    position: "sticky",
    background: "#0F1730",
    top: 0,
  },

  mainLogo: {
    display: "flex",
    alignItems: "center",
    marginLeft: "-22%",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },
}));
