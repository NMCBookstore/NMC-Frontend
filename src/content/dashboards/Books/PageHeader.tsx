import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  TextField,
  Typography
} from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { selectCurrentUser } from 'src/features/auth/authSlice';
import { Genres } from 'src/models/Genres';
import { useGetGenresQuery } from 'src/services/genres/genresAPI';
import { useCreateProductMutation } from 'src/services/product/productAPI';
import { IsValidImage } from 'src/utils/helper';

const style = {
  overflow: 'auto',
  position: 'absolute' as 'absolute',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  maxWidth: '800px',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};
function PageHeader() {
  const user = useSelector(selectCurrentUser);
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const [selectedFile, setSelectedFiles] = useState([]);
  const { data: genresData = [], isLoading } = useGetGenresQuery();
  const [genres, setGenres] = useState<Genres[]>([]);
  const [imageFile, setImageFile] = useState<File[]>([]);
  const [genresID, setGenresID] = useState<number[]>([]);

  useEffect(() => {
    if (!isLoading && genresData.length > 0) {
      setGenres(genresData);
    }
  }, [isLoading, genresData]);

  const [query, setQuery] = useState<string>('');

  const debouncedSetQuery = debounce((newQuery) => {
    setQuery(newQuery);
    if (newQuery === '') {
      setQuery('');
    }
  }, 100); // Khoảng thời gian debounce

  const handleInputChange = (event: any) => {
    const newQuery = event.target.value;
    debouncedSetQuery(newQuery);
  };

  const genresName = genres?.map((item) => item?.name);

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  let images = [];

  const InputChange = (e) => {
    // --For Multiple File Input
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        const fileData = {
          id: shortid.generate(),
          filename: file.name,
          filetype: file.type,
          fileimage: reader.result,
          datetime: file.lastModifiedDate.toLocaleString('en-IN'),
          filesize: filesizes(file.size)
        };

        setSelectedFiles((prevValue) => [...prevValue, fileData]);
        setImageFile(images);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm('Are you sure you want to delete this Image?')) {
      const result = selectedFile.filter((data) => data.id !== id);
      setSelectedFiles(result);
    } else {
      // alert('No');
    }
  };

  // const FileUploadSubmit = async (e) => {
  //   e.preventDefault();

  //   // form reset on submit
  //   e.target.reset();
  //   if (selectedFile.length > 0) {
  //     setSelectedFiles([]);
  //   } else {
  //     alert('Please select file');
  //   }
  // };

  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };

  const handleGenresChange = (event, option: Genres[]) => {
    if (option.length > 0) {
      setGenresID(option.map((item) => item?.id));
    } else {
      setGenresID([]);
    }
  };

  const [bookInfo, setBookInfo] = useState({
    name: '',
    price: '',
    author: '',
    publisher: '',
    sale: '',
    quantity: ''
  });

  //Create product

  const [createBook, { isLoading: isBookLoading }] = useCreateProductMutation();

  const handleCreateBook = async () => {
    const formData = new FormData();
    if (!(imageFile.length > 0)) {
      toast.error('Image is required!');
      return;
    }
    if (!bookInfo.name) {
      toast.error('Name is required!');
      return;
    }
    if (!bookInfo.author) {
      toast.error('Author is required!');
      return;
    }
    if (!bookInfo.publisher) {
      toast.error('Publisher is required!');
      return;
    }
    if (!bookInfo.quantity) {
      toast.error('Quantity is required!');
      return;
    }
    if (!bookInfo.price) {
      toast.error('Price is required!');
      return;
    }
    if (!bookInfo.sale) {
      toast.error('Sale is required!');
      return;
    }
    if (!(genresID.length > 0)) {
      toast.error('Genres is required!');
      return;
    }
    if (!editorContent) {
      toast.error('Description is required!');
      return;
    }

    formData.append('description', editorContent);
    formData.append('name', bookInfo.name);
    formData.append('author', bookInfo.author);
    formData.append('price', bookInfo.price);
    formData.append('publisher', bookInfo.publisher);
    formData.append('quantity', bookInfo.quantity);
    formData.append('sale', bookInfo.sale);
    genresID.forEach((item) => {
      formData.append('genres_id', String(item));
    });
    imageFile.forEach((file) => {
      if (!IsValidImage(file)) {
        toast.error('Only Png and Jpg accepted!');
        return;
      }
      formData.append('image', file);
    });

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    const v = await createBook(formData);
    if ('data' in v) {
      toast.success('New book created !');
      handleCloseAdd();
    } else if ('error' in v) {
      toast.error('Cannot create new book');
    }
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Books List
        </Typography>
        <Typography variant="subtitle2">
          {user?.username}, these are your books
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
            Add Book
          </Typography>
          <div>
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
                              <input
                                type="file"
                                id="fileupload"
                                className="file-upload-input"
                                onChange={InputChange}
                                multiple
                              />
                              <span>
                                Drag and drop or{' '}
                                <span className="file-link">
                                  Choose your files
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="kb-attach-box mb-3">
                            {selectedFile.map((data, index) => {
                              const {
                                id,
                                filename,
                                filetype,
                                fileimage,
                                datetime,
                                filesize
                              } = data;
                              return (
                                <div className="file-atc-box" key={id}>
                                  {filename.match(
                                    /.(jpg|jpeg|png|gif|svg)$/i
                                  ) ? (
                                    <div className="file-image">
                                      {' '}
                                      <img src={fileimage} alt="" />
                                    </div>
                                  ) : (
                                    <div className="file-image">
                                      <i className="far fa-file-alt"></i>
                                    </div>
                                  )}
                                  <div className="file-detail">
                                    <h6>{filename}</h6>
                                    <p></p>
                                    <p>
                                      <span>Size : {filesize}</span>
                                      <span className="ml-2">
                                        Modified Time : {datetime}
                                      </span>
                                    </p>
                                    <div className="file-actions">
                                      <button
                                        type="button"
                                        className="file-action-btn"
                                        onClick={() => DeleteSelectFile(id)}
                                      >
                                        Delete
                                      </button>
                                      <a
                                        href={fileimage}
                                        className="file-action-btn"
                                        download={filename}
                                      >
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
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
                    placeholder="Name of the book"
                    fullWidth
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, name: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Author"
                    placeholder="Author"
                    fullWidth
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, author: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Publisher"
                    placeholder="Publisher"
                    fullWidth
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, publisher: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Total amount"
                    type="number"
                    placeholder="Amount of book"
                    fullWidth
                    inputProps={{ min: 1 }}
                    onChange={(e) =>
                      setBookInfo({
                        ...bookInfo,
                        quantity: e.target.value
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Autocomplete
                    multiple
                    disablePortal
                    limitTags={10}
                    id="multiple-limit-tags"
                    options={genres ? genres : []}
                    getOptionLabel={(option) =>
                      typeof option === 'string' ? option : option.name
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="Genres" />
                    )}
                    onChange={(event, option: any[]) =>
                      handleGenresChange(event, option)
                    }
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Price"
                    type="number"
                    placeholder="Price of book"
                    fullWidth
                    inputProps={{ min: 1 }}
                    onChange={(e) =>
                      setBookInfo({
                        ...bookInfo,
                        price: e.target.value
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Sale Percent"
                    type="number"
                    inputProps={{ min: 1, max: 100 }}
                    placeholder="Sale percent"
                    fullWidth
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, sale: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Editor
                    apiKey="fjo87umyn28bhlog6ey9ym0j3av357syryjwrnyltl215r8u"
                    init={{
                      toolbar:
                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                      tinycomments_mode: 'embedded',
                      tinycomments_author: 'Author name',
                      mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' }
                      ],
                      placeholder: 'Enter the descriptions',
                      ai_request: (respondWith: any) =>
                        respondWith.string(() =>
                          Promise.reject('See docs to implement AI Assistant')
                        )
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </Grid>
              </Grid>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<AddCircleOutlineIcon />}
                  type="submit"
                  disabled={isBookLoading}
                  onClick={() => handleCreateBook()}
                >
                  {isBookLoading ? 'Creating...' : 'Create Book'}
                </Button>
              </Box>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
}

export default PageHeader;
