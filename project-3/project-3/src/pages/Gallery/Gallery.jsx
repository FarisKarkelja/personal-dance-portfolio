import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';

export default function Gallery() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{ width: 1400}}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: image2,
    title: 'Bed',
  },
  {
    img: image3,
    title: 'Books',
  },
  {
    img: image4,
    title: 'Sink',
  },
  {
    img: image5,
    title: 'Blinds',
  },
  {
    img: image6,
    title: 'Chairs',
  },
  {
    img: image7,
    title: 'Laptop',
  },
  {
    img: image8,
    title: 'Doors',
  },
];
