import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";


const marks = [
  {
    value: 0,
    label: "0 VND",
  },
  {
    value: 150,
    label: "150.000 VND",
  },
  {
    value: 300,
    label: "300.000 VND",
  },
  {
    value: 500,
    label: "500.000 VND",
  },
  {
    value: 1000,
    label: "1.000.000 VND",
  },
];

function valuetext(value) {
  return `${value} VND`;
}

export default function Filter({ id, genres, setId, subGenres }) {
  const genresOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.genres,
  });

  const subGenresOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.genresTitles,
  });

  const handleChangeGenreId = (_, val) => {
    setId(val?.id);
  }

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
          sx={{ color: "black" }}
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
    </Stack>
  );
}
