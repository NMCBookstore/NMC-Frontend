import {
  Typography,
  Button,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  Box,
  Modal,
  IconButton
} from '@mui/material';
import { debounce } from 'lodash';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import React, { FC, useEffect, useState } from 'react';
import shortid from 'shortid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { useGetGenresQuery } from 'src/services/genres/genresAPI';
import { Genres } from 'src/models/Genres';
import {
  useCreateProductMutation,
  useGetProductDetailsQuery,
  useUpdateProductMutation
} from 'src/services/product/productAPI';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/features/auth/authSlice';
import { Edit } from '@mui/icons-material';
import { Product } from 'src/models/Product';

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

interface EditBook {
  bookId: number;
}

const EditBooks: FC<EditBook> = ({ bookId }) => {
  const user = useSelector(selectCurrentUser);
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => {
    console.log(bookId);
    setOpenAdd(true);
  };
  const handleCloseAdd = () => setOpenAdd(false);
  const [selectedFile, setSelectedFiles] = useState([]);
  const { data: genresData = [], isLoading } = useGetGenresQuery();
  const [genres, setGenres] = useState<Genres[]>([]);
  const [imageFile, setImageFile] = useState<File[]>([]);
  const [genresID, setGenresID] = useState<number[]>([]);

  const [editorState, setEditorState] = useState('');
  const [selectedImage, setSelectedImage] = useState([]);

  const { data, isLoading: bookLoading } = useGetProductDetailsQuery(bookId);
  const [bookInfo, setBookInfo] = useState(data);

  useEffect(() => {
    if (!isLoading && !bookLoading) {
      setGenres(genresData);
    }

    setGenresID(data?.genres.map((item) => item.id));
    setBookInfo(data);
    setSelectedImage(data?.image);
    const des = data?.description.replace(/\\n/g, '<br/>').replace(/\\/g, '');
    setEditorState(des);
  }, [bookLoading, isLoading, data, genresData]);

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

  const FileUploadSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    if (selectedFile.length > 0) {
      setSelectedFiles([]);
    } else {
      alert('Please select file');
    }
  };

  const handleDeleteLocalImage = (e, index, image) => {
    if (window.confirm('Are you sure you want to delete this Image?')) {
      setSelectedImage(selectedImage.filter((e) => e !== image));
      const imageCloud = bookInfo?.image.filter((e) => e !== image);
      setBookInfo({
        ...bookInfo,
        image: imageCloud
      });
      if (JSON.stringify(bookInfo?.image) == JSON.stringify(imageCloud)) {
        setSelectedFiles(
          selectedFile &&
            selectedFile.filter(
              (item) => item !== selectedFile[index - imageCloud.length]
            )
        );
      }
    } else {
      // alert('No');
    }
  };

  const handleEditorChange = (content) => {
    setEditorState(content);
  };

  const handleGenresChange = (event, option: Genres[]) => {
    if (option.length > 0) {
      setGenresID(option.map((item) => item?.id));
      setBookInfo({ ...bookInfo, genres: option });
    } else {
      setGenresID([]);
      setBookInfo({ ...bookInfo, genres: option });
    }
  };

  //Update book
  const [updateBook] = useUpdateProductMutation();

  const handleUpdateBook = async () => {
    const formData = new FormData();
    if(!(imageFile.length > 0)){
      toast.error("Image is required!");
      return;
    }
    if(!bookInfo.name){
      toast.error("Name is required!");
      return;
    }
    if(!bookInfo.author){
      toast.error("Author is required!");
      return;
    }
    if(!bookInfo.publisher){
      toast.error("Publisher is required!");
      return;
    }
    if(!bookInfo.quantity){
      toast.error("Quantity is required!");
      return;
    }
    if(!bookInfo.price){
      toast.error("Price is required!");
      return;
    }
    if(!(genresID.length > 0)){
      toast.error("Genres is required!");
      return;
    }
    if(!editorState){
      toast.error("Description is required!");
      return;
    }
    formData.append('id', String(bookId));
    formData.append('name', bookInfo?.name);
    formData.append('price', String(bookInfo?.price));
    bookInfo?.image.forEach((element) => {
      formData.append('image', element);
    });
    imageFile.forEach((element) => {
      formData.append('files', element);
    });
    formData.append('description', editorState);
    formData.append('author', bookInfo?.author);
    formData.append('publisher', bookInfo?.publisher);
    formData.append('sale', String(bookInfo?.sale));
    formData.append('quantity', String(bookInfo?.quantity));

    genresID?.forEach((item) => {
      formData.append('genres_id', String(item));
    });

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    console.log('genresID', genresID);
    const v = await updateBook(formData);
    if ('data' in v) {
      toast.success('Book updated !');
      handleCloseAdd()
    } else if ('error' in v) {
      toast.error('Cannot update book');
    }
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={handleOpenAdd}>
          <Edit fontSize="small" />
        </IconButton>
      </Grid>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Edit book
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
                            {selectedFile.map((item, index) => {
                              const {
                                id,
                                filename,
                                filetype,
                                fileimage,
                                datetime,
                                filesize
                              } = item;
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
                            {selectedImage?.map((item, index) => {
                              return (
                                <div className="file-atc-box" key={item}>
                                  {
                                    <div className="file-image">
                                      <img src={item} alt="" />
                                    </div>
                                  }
                                  <div className="file-detail">
                                    <div className="file-actions">
                                      <button
                                        type="button"
                                        className="file-action-btn"
                                        onClick={(e) =>
                                          handleDeleteLocalImage(e, index, item)
                                        }
                                      >
                                        Delete
                                      </button>
                                      <a
                                        href={item}
                                        className="file-action-btn"
                                        download={item}
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
                    InputLabelProps={{ shrink: true }}
                    label="Book Name"
                    placeholder="Name of the book"
                    fullWidth
                    defaultValue={bookInfo?.name}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, name: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Author"
                    placeholder="Author"
                    fullWidth
                    value={bookInfo?.author}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, author: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Publisher"
                    placeholder="Publisher"
                    fullWidth
                    value={bookInfo?.publisher}
                    onChange={(e) =>
                      setBookInfo({ ...bookInfo, publisher: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Total amount"
                    type="number"
                    placeholder="Amount of book"
                    fullWidth
                    inputProps={{ min: 1 }}
                    defaultValue={bookInfo?.quantity}
                    onChange={(e) =>
                      setBookInfo({
                        ...bookInfo,
                        quantity: Number(e.target.value)
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
                      <TextField
                        InputLabelProps={{ shrink: true }}
                        {...params}
                        label="Genres"
                      />
                    )}
                    value={
                      bookInfo?.genres && genres
                        ? bookInfo.genres.map((item) => genres[item.id - 1])
                        : []
                    }
                    onChange={(event, option: Genres[]) =>
                      handleGenresChange(event, option)
                    }
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Price"
                    inputProps={{ min: 1 }}
                    type="number"
                    placeholder="Price of book"
                    fullWidth
                    defaultValue={bookInfo?.price}
                    onChange={(e) =>
                      setBookInfo({
                        ...bookInfo,
                        price: Number(e.target.value)
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Sale Percent"
                    type="number"
                    placeholder="Sale percent"
                    fullWidth
                    inputProps={{ min: 1, max: 100 }}
                    defaultValue={bookInfo?.sale}
                    onChange={(e) =>
                      setBookInfo({
                        ...bookInfo,
                        sale: Number(e.target.value)
                      })
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
                    initialValue={editorState}
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
                  //   type="submit"
                  onClick={handleUpdateBook}
                >
                  Update Book
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
};

export default EditBooks;
