import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [text, setText] = useState("");
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
          onChange={(e) => {setText(e.target.value)}}
        />
        <Link to={`/search-filter?page_id=${page_id}&page_size=${page_size}${text ? '&text='+text:''}&min_price=1000&max_price=10000000&rating=0`} style={{ textDecoration: "none", marginTop: 8 }}>
          <IconButton type="submit" sx={{ p: "5px", color: "black" }}>
            <Search />
          </IconButton>
        </Link>
      </Paper>
    </div>
  );
};

export default SearchBar;
