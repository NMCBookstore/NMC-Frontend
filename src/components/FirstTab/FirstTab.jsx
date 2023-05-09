import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "react-multi-carousel/lib/styles.css";
import MiniCarousel from "../MiniCarousel/MiniCarousel";
import {
  useGetTopNewProductQuery,
  useGetTopBestProductQuery,
} from "../../services/productAPIs";

const FirstTab = () => {
  const [value, setValue] = React.useState("1");

  const { data: topNewBook } = useGetTopNewProductQuery();
  const { data: topBestBook } = useGetTopBestProductQuery();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", position: "relative" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} sx={{ color: "#c92127" }}>
            <Tab label="Top Newest books" value="1" />
            <Tab label="Top 10 Best books" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MiniCarousel value={topNewBook} />
        </TabPanel>
        <TabPanel value="2">
          <MiniCarousel value={topBestBook} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FirstTab;
