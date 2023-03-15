import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductCard from "../ProductCard/ProductCard";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const FirstTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", position: "relative" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} sx={{ color: "#c92127" }}>
            <Tab label="Most favourite books" value="1" />
            <Tab label="Most sale books" value="2" />
            <Tab label="The book that no one need" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container sx={{ display: "flex", justifyContent: "center"}} spacing={2}>
            <Grid item   >
              <ProductCard />
            </Grid>
            <Grid item  >
              <ProductCard />
            </Grid>
            <Grid item  >
              <ProductCard />
            </Grid>
            <Grid item  >
              <ProductCard />
            </Grid>
            <Grid item >
              <ProductCard />
            </Grid>

          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <ProductCard />
        </TabPanel>
        <TabPanel value="3">
          <ProductCard />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FirstTab;
