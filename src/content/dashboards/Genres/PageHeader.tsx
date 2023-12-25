import { Typography, Button, Grid, TextField, Autocomplete, FormControl, Box, Modal } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import React, { useState } from 'react';
import shortid from "shortid";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
  overflow: "auto",
  position: 'absolute' as 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100vw",
  maxWidth: "800px",
  maxHeight: "90vh",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const top100Films = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    'Schindlers List',
    'Pulp Fiction'
  ]
  const [selectedfile, SetSelectedFile] = useState([]);


  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push((e.target.files[i]));
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              id: shortid.generate(),
              filename: e.target.files[i].name,
              filetype: e.target.files[i].type,
              fileimage: reader.result,
              datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
              filesize: filesizes(e.target.files[i].size)
            }
          ]
        });
      }
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  }


  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }

  }

  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit 
    e.target.reset();
    if (selectedfile.length > 0) {
      SetSelectedFile([]);
    } else {
      alert('Please select file')
    }
  }
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Genres List
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your Genres
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleOpenAdd}
        >
          Create books
        </Button>
      </Grid>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Add Genres
          </Typography>
          <form onSubmit={FileUploadSubmit}>
            <FormControl fullWidth>
              <div className="fileupload-view">
                <div className="row justify-content-center m-0">
                  <div className="w-100">
                    <div className="card mt-5">
                      <div className="card-body">
                        <div className="kb-data-box">
                          <div className="kb-modal-data-title">
                            <div className="kb-data-title">
                              <h6>Multiple File Upload With Preview</h6>
                            </div>
                          </div>
                          <div className="kb-file-upload">
                            <div className="file-upload-box">
                              <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                              <span>Drag and drop or <span className="file-link">Choose your files</span></span>
                            </div>
                          </div>
                          <div className="kb-attach-box mb-3">
                            {
                              selectedfile.map((data, index) => {
                                const { id, filename, filetype, fileimage, datetime, filesize } = data;
                                return (
                                  <div className="file-atc-box" key={id}>
                                    {
                                      filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                        <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                        <div className="file-image"><i className="far fa-file-alt"></i></div>
                                    }
                                    <div className="file-detail">
                                      <h6>{filename}</h6>
                                      <p></p>
                                      <p><span>Size : {filesize}</span><span className="ml-2">Modified Time : {datetime}</span></p>
                                      <div className="file-actions">
                                        <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Delete</button>
                                        <a href={fileimage} className="file-action-btn" download={filename}>Download</a>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Book Name"
                    defaultValue=""
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Author"
                    defaultValue=""
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    renderInput={(params) => <TextField {...params} label="Genres" />}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Total"
                    type="number"
                    defaultValue={0}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Price"
                    type="number"
                    defaultValue={0}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Sale Percent"
                    type="number"
                    defaultValue={0}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Intro"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button variant="contained" size="large" endIcon={<AddCircleOutlineIcon />} type="submit">Create Book</Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
}

export default PageHeader;
