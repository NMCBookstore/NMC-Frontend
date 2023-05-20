import React from "react";
import { Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UserOrdered from "./UserOrdered";
import UserShipping from "./UserShipping";
import UserCompleted from "./UserCompleted";
import { useNavigate } from "react-router-dom";

export default function UserOrder({ idOrder }) {
  const navigate = useNavigate();
  const [activeTabOrder, setActiveTabOrder] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTabOrder(newValue);
  };

  const orderSidebar = [
    {
      id: 0,
      title: "Ordered",
      url: "",
      component: <UserOrdered />
    },
    {
      id: 1,
      title: "Shipping",
      url: "shipping",
      component: <UserShipping />
    },
    {
      id: 2,
      title: "Completed",
      url: "completed",
      component: <UserCompleted />
    },
  ];

  return (
    <Container>
      <Tabs
        orientation="horizontal"
        variant="fullWidth"
        value={idOrder ? idOrder : activeTabOrder}
        onChange={handleTabChange}
        aria-label="Horizontal tabs example"
      >
        {orderSidebar.map((item, index) => (
          <Tab label={item.title} key={item.id}
            onClick={() => navigate(`/user/profile/my-order/${item.url}`)}
          />
        ))}
      </Tabs>
      {orderSidebar[idOrder ? idOrder : activeTabOrder].component}
    </Container>
  );
}
