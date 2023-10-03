import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';
import logoColorRevert from '../Header/images/logo-color-revert.png';
import { Link, useNavigate } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useGetGenresQuery } from "../../services/genresAPIs";
import { useGetSubGenresQuery } from "../../services/subGenresAPIs";
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { shadows } from "@mui/system";

const sidebar = [
  {
    id: 0,
    title: "Home",
    icon: <HomeIcon />,
    url: "",
  },
  {
    id: 1,
    title: "Category",
    icon: <CategoryIcon />,
    url: "category",
  },
  // {
  //   id: 2,
  //   title: "Contact",
  //   icon: <PermContactCalendarIcon />,
  //   url: "https://github.com/minhhcuongg-theonefour/NMC-Frontend",
  // },
  {
    id: 3,
    title: "About",
    icon: <InfoIcon />,
    url: "about",
  },
]

export default function SideBar() {
  const [state, setState] = useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const [id, setId] = useState(0);
  const { data: genres } = useGetGenresQuery();
  const { data: subGenres } = useGetSubGenresQuery(id, { skip: !id });

  const list = () => (
    <Box
      sx={{ auto: 250, width: "350px" }}
      role="presentation"
    >
      <List sx={{ paddingLeft: "5%" }} disablePadding>
        {sidebar.map((item, index) => (
          <>
            <ListItemButton key={item.id} onClick={index === 1 ?
              (() => setOpen(!open)) :
              (() => navigate(`/${item.url}`))}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {index === 1 && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {index === 1 && (<Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {genres?.map((genre, index) => (
                  <Accordion key={genre?.id}
                    expanded={expanded === index}
                    onClick={() => {
                      setSubOpen(!subOpen)
                      setId(genre?.id)
                    }}
                    sx={{ boxShadow: 0, pl: 4, position: "static" }}
                    disableGutters
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{genre?.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ py: 0 }}>
                      <List component="div" disablePadding>
                        {subGenres?.map((subgenre, index) => (
                          <ListItemButton key={subgenre?.id}
                            sx={{ px: 1, py: 0.5 }}
                            onClick={() => window.location.replace(`/search-filter?genres_id=${genre?.id}&subgenres_id=${subgenre?.id}`)}
                          >
                            <ListItemText primary={subgenre?.name} />
                          </ListItemButton>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>))}
              </List>
            </Collapse>
            )}
          </>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5%",
              paddingBottom: "10%",
              cursor: "pointer"
            }}
            onClick={() => window.location.replace("/")}
          >
            <img src={logoColorRevert} alt="logo" height={60} />
          </div>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
