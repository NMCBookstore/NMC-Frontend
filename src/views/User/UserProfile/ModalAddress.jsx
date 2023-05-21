import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField, Autocomplete } from "@mui/material";

const city = ['test', 'hehe', 'kaka']

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalAddress() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
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
                    <Box mx={2}>
                        <TextField
                            margin="normal"
                            required
                            name="address"
                            label="Address"
                            placeholder="Enter your address"
                            type="text"
                            sx={{ width: "100%" }}
                        />
                        <Autocomplete
                            disablePortal
                            id="filter-demo"
                            options={city}
                            getOptionLabel={(option) => option}
                            sx={{ zIndex: 1, marginBottom: 2 }}
                            renderInput={(params) => <TextField {...params} label="District" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="filter-demo"
                            options={city}
                            getOptionLabel={(option) => option}
                            sx={{ zIndex: 1, marginBottom: 2 }}
                            renderInput={(params) => <TextField {...params} label="City" />}
                        />
                    </Box>
                    <Stack direction="row">
                        <Button
                            variant="outlined"
                            sx={{
                                mt: 2,
                                marginLeft: "20%",
                            }}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 2,
                                marginLeft: "20%",
                                backgroundColor: "#DB4444",
                                "&:hover": {
                                    backgroundColor: "#DB4444",
                                },
                            }}
                        >
                            Save changes
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}