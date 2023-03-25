import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import logoColorRevert from '../Header/images/logo-color-revert.png';
import { Link } from "react-router-dom";
import { width } from "@mui/system";

export default function SideBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ auto: 250, width: "300px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ paddingLeft: "5%" }}>
        {["Home", "Category", "Contact", "About"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> :
                  (index === 1 ? <CategoryIcon /> :
                    (index === 2 ? <PermContactCalendarIcon /> :
                      <InfoIcon />
                    )
                  )
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <MenuIcon
          sx={{
            position: "relative",
            top: "0",
            zIndex: "5",
            marginLeft: "120px",
            marginTop: "2%",
            fontSize: "2em",
            color: "white",
            cursor: "pointer"
          }}
          onClick={toggleDrawer(true)}
        />

        <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
          <Link to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop:"5%",
              paddingBottom:"10%"
            }}>
            <img src={logoColorRevert} alt="logo" height={60} />
          </Link>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
