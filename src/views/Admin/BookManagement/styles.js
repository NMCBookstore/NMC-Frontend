import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
  footerCell: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: "none",
  },
  stickyFooterCell: {
    position: "sticky",
    bottom: 0,
    zIndex: 100,
  },
}));
