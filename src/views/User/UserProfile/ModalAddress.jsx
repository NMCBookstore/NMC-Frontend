import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Stack, TextField, Tooltip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useListCitiesQuery } from "../../../services/citiesAPIs";
import { useListDistrictsQuery } from "../../../services/districtsAPIs";
import {
  useCreateAddressMutation,
  useGetAddressQuery,
  useUpdateAddressMutation,
} from "../../../services/addressAPIs";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalAddress({ mode, addressID }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState(0);
  const [address, setAddress] = useState({});
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const { data: cities } = useListCitiesQuery();
  const { data: districts } = useListDistrictsQuery(id, { skip: !id });
  const [createAddress] = useCreateAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  const { data: userAddress, isFetching } = useGetAddressQuery(addressID);

  useEffect(() => {
    setAddress(userAddress);
    setId(userAddress?.city_id);
  }, [isFetching]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setId(e.target.value);
    setAddress((prev) => ({ ...prev, city_id: e.target.value }));
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setAddress((prev) => ({ ...prev, district_id: e.target.value }));
  };

  const handleSubmit = () => {
    if (mode === "create") {
      const v = createAddress(address);
    } else {
      const v = updateAddress({
        id: addressID,
        address: address.address,
        district_id: address.district_id,
        city_id: address.city_id,
      });
    }
    setCity(null);
    setDistrict(null);
    setAddress(null);
    handleClose();
  };

  return (
    <div>
      {mode === "create" ? (
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#DB4444",
            "&:hover": {
              backgroundColor: "#DB4444",
            },
          }}
          onClick={handleOpen}
        >
          Add Address
        </Button>
      ) : (
        <Tooltip title="Update Address">
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Address
          </Typography>
          <Box mx={2} my={2}>
            <TextField
              margin="normal"
              required
              name="address"
              label="Address"
              placeholder="Enter your address"
              type="text"
              value={address?.address}
              onChange={(e, prev) =>
                setAddress({ ...prev, address: e.target.value })
              }
              sx={{ width: "100%", my: 2 }}
            />
            <FormControl sx={{ width: "100%", my: 2 }}>
              <InputLabel id="city-select-label">City</InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                label="City"
                value={
                  address?.city_id && mode === "update"
                    ? address?.city_id
                    : city
                }
                onChange={(e) => handleCityChange(e)}
              >
                {cities?.map((item, index) => (
                  <MenuItem key={item?.id} value={item?.id}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              sx={{ width: "100%", my: 2 }}
              disabled={id == 0 ? true : false}
            >
              <InputLabel id="districts-select-label">District</InputLabel>
              <Select
                labelId="districts-select-label"
                id="districts-select"
                value={
                  address?.district_id && mode === "update"
                    ? address?.district_id
                    : district
                }
                label="District"
                onChange={(e) => handleDistrictChange(e)}
              >
                {districts?.map((item, index) => (
                  <MenuItem key={item?.id} value={item?.id}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Stack direction="row">
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                marginLeft: "20%",
              }}
              onClick={() => {
                setCity(null);
                setDistrict(null);
                setAddress(null);
                handleClose();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                marginLeft: "20%",
                backgroundColor: "#DB4444",
                "&:hover": {
                  backgroundColor: "#DB4444",
                },
              }}
              onClick={handleSubmit}
            >
              Save changes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
