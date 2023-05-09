import React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import { Container } from "@mui/material";

export default function UserOrder() {
  return (
    <Container>
      <Tabs aria-label="tabs" defaultValue={0}>
        <TabList
          variant="plain"
          sx={{
            "--List-padding": "0px",
            "--List-radius": "0px",
            "--ListItem-minHeight": "48px",
            [`& .${tabClasses.root}`]: {
              boxShadow: "none",
              fontWeight: "md",
              [`&.${tabClasses.selected}::before`]: {
                content: '""',
                display: "block",
                position: "absolute",
                left: "var(--ListItem-paddingLeft)", // change to `0` to stretch to the edge.
                right: "var(--ListItem-paddingRight)", // change to `0` to stretch to the edge.
                bottom: 0,
                height: 3,
                bgcolor: "primary.400",
              },
            },
          }}
        >
          <Tab>Ordered</Tab>
          <Tab>Shipping</Tab>
          <Tab>Completed</Tab>
        </TabList>
      </Tabs>
    </Container>
  );
}
