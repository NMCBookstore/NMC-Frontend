import React, { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const page_id = 1
  const page_size = 24

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          borderRadius: 10,
          border: "1px solid #e3e3e3",
          pl: 1,
          boxShadow: "none",
          mr: { sm: 10 },
        }}
        component="form"
        onSubmit={() => { }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search google maps" }}
          defaultValue={searchParams.get("text") ? searchParams.get("text") : text}
          onChange={(e) => { setText(e.target.value) }}
        />
        <IconButton
          onClick={() => window.location.replace(`/search-filter?page_id=${page_id}&page_size=${page_size}${text ? "&text=" + text : ""}&min_price=0&max_price=10000000`)}
          sx={{ p: "5px", color: "black" }}>
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
