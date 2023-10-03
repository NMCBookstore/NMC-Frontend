import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({

  indicator: {
    backgroundColor: 'black',
  },

  link: {
    textDecoration: "none",
    color: "black",
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },

}));
