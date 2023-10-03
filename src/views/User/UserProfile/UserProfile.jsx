import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UserContentChangePassword from "./UserContentChangePassword";
import UserContentProfile from "./UserContentProfile"; "react-router-dom";
import { useGetUserQuery } from "../../../services/userAPI";
import UserOrder from "./UserOrder";
import { useNavigate } from "react-router-dom";
import UserAddress from "./UserAddress";
import UserReviews from "./UserReviews";
import { Container } from "@mui/joy";

export default function UserProfile({ id, idOrder }) {
  const { data } = useGetUserQuery();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const profileSidebar = [
    {
      id: 0,
      title: "Profile",
      url: "",
      component: <UserContentProfile data={data} />,
    },
    {
      id: 1,
      title: "Password",
      url: "change-password",
      component: <UserContentChangePassword data={data} />,
    },
    {
      id: 2,
      title: "address",
      url: "address",
      component: <UserAddress />,
    },
    {
      id: 3,
      title: "My order",
      url: "my-order",
      component: <UserOrder idOrder={idOrder} />
    },
  ];

  return (
    <Container >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container my={2} spacing={3}>
          {/* User Side bar  */}
          <Grid item spacing={2} xs={12} sm={12}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                minHeight: 800,
              }}
            >
              <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={id ? id : activeTab}
                onChange={handleTabChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider",alignItems: "end"}}
              >
                {profileSidebar.map((item, index) => (
                  <Tab label={item.title} key={item.id}
                    onClick={() => navigate(`/user/profile/${item.url}`)}
                  />
                ))}
              </Tabs>
              {profileSidebar[id ? id : activeTab].component}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
