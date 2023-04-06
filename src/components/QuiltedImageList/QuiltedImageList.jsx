import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
import NewArrival4 from './images/NewArrival4.png'
import NewArrival2 from './images/NewArrival2.png'


const itemData = [
  {
    img: NewArrival4,
    title: 'Breakfast',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: NewArrival2,
    title: 'Burger',
    author: '@silverdalex',
  },
  {
    img: NewArrival4,
    title: 'Camera',
    author: '@silverdalex',
  },
  {
    img: NewArrival4,
    title: 'Coffee',
    author: '@silverdalex',
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  let src = `${image}`
  let width = size * cols;
  let height = size * rows;
  if (cols > 1) {
    width = size * cols + 5
  }
  if (rows > 1) {
    height = size * rows + 11
  }

  return {
    src: src,
    width: width,
    height: height,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight="auto"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
          <Link>
            <img
              {...srcset(item.img, 284, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} subtitle={item.author} position="top" />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}