import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  prod: [],
  loading: false,
  error: null,
};

export const product = createAsyncThunk("product", async (body) => {
  let res = await fetch("http://localhost:8080/books/:id", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const prodDetailSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.prod = sessionStorage.setItem("prod");
    },
  },
  extraReducers: {
    [product.pending]: (state, action) => {
      state.loading = true;
    },
    [product.fulfilled]: (
      state,
      { payload: { id, name, price, image, description, author, publisher, quantity } }
    ) => {
      state.loading = false;
      state.id = id;
      state.name = name;
      state.price = price;
      state.image = image;
      state.description = description;
      state.author = author;
      state.publisher = publisher;
      state.quantity = quantity;

      sessionStorage.setItem("id", JSON.stringify(id));
      sessionStorage.setItem("name", JSON.stringify(name));
      sessionStorage.setItem("price", JSON.stringify(price));
      sessionStorage.setItem("image", JSON.stringify(image));
      sessionStorage.setItem("description", JSON.stringify(description));
      sessionStorage.setItem("author", JSON.stringify(author));
      sessionStorage.setItem("publisher", JSON.stringify(publisher));
      sessionStorage.setItem("quantity", JSON.stringify(quantity));

    },
    [product.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { getProduct } = prodDetailSlice.actions;
export default prodDetailSlice.reducer;
