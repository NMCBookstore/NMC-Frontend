import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
  },

  secbox: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    width: "100%",
  },

  colorButton: {
    backgroundColor: "#db4444",
    "&:hover": {
      background: "#ffa071",
    },
  },

  divider: {
    backgroundColor: "black",
    marginBottom: "-20px",
  },
  colorTypo: {
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    fontSize: 20,
  },

  firstStack: {
    alignItems: "center" 
  },
}));
