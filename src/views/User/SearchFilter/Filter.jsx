import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { useGetSearchQuery } from "../../../services/searchAPI";
import { Link } from "react-router-dom";

const minDistance = 10;

function valuetext(value) {
  return `${value} VND`;
}

export default function Filter({
  id,
  genres,
  setId,
  subGenres,
  setSearchInfo,
}) {
  const { data, isFetching } = useGetSearchQuery();

  const [value2, setValue2] = useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChangeGenreId = (_, val) => {
    setId(val?.id);
    // setSearchInfo((prev) => {
    //   return {

    //   }
    // })
  };

  return (
    <Stack>
      <Autocomplete
        disablePortal
        id="filter-demo"
        onChange={handleChangeGenreId}
        options={genres}
        getOptionLabel={(option) => option?.name}
        // genresOptions={genresOptions}
        sx={{ width: "90%", zIndex: 1, marginBottom: 2 }}
        renderInput={(params) => <TextField {...params} label="Genres" />}
      />

      <Autocomplete
        key={id}
        disablePortal
        id="filter-demo2"
        options={subGenres ? subGenres : []}
        getOptionLabel={(option) => option?.name}
        sx={{ width: "90%" }}
        renderInput={(params) => <TextField {...params} label="SubGenres" />}
      />

      <Box my={2} sx={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
        <Slider
          sx={{ color: "#000" }}
          getAriaLabel={() => "Minimum distance shift"}
          value={value2}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>

      <List
        dense
        sx={{ width: "100%", maxWidth: 240, bgcolor: "background.paper" }}
      >
        {[0, 1, 2, 3, 4].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={`${value + 1} star`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Link to={`/search-filter?page_id=${page_id}&page_size=${page_size}${text ? '&text=' + text : ''}&min_price=1000&max_price=10000000&rating=0`} style={{ textDecoration: "none", marginTop: 8 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#db4444",
            "&:hover": {
              background: "#ffa071",
            },
          }}
        >
          Apply Filter
        </Button>
      </Link>
    </Stack>
  );
}
