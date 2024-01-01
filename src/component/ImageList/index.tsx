import React, { memo } from "react";
import Carousel from "../Fancybox/Carousel";
import Fancybox from "../Fancybox/Fancy";
import { Product } from "../../interface/Product";
interface ImageListProps {
    books?: Product;
  }

  const ImageList: React.FunctionComponent<ImageListProps> = memo(({ books }) => {
    console.log(books);
  
    // Kiểm tra điều kiện books khác undefined
    if (books === undefined) {
      return null; // Hoặc có thể trả về một component placeholder tùy theo yêu cầu của bạn
    }
  
    return (
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
        imageLength={Number(books.image.length)}
      >
        {
          Number(books.image.length) > 1 ?
          <Carousel
            options={{
              infinite: false,
              Dots: false,
              Navigation: false,
              Thumbs: {
                type: "classic",
                Carousel: {
                  slidesPerPage: 1,
                  Navigation: false,
                  center: true,
                  fill: true,
                  dragFree: true,
                  axis: "y",
                  breakpoints: {
                    "(max-width: 576px)": {
                      axis: "x",
                    },
                  },
                },
              },
            }}
          >
            {books.image.map((item, index) => (
              <div
                key={index}
                className="f-carousel__slide"
                data-thumb-src={item}
                data-fancybox="gallery"
                data-src={item}
              >
                <img alt="" data-lazy-src={item} />
              </div>
            ))}
          </Carousel>
          :
          <div>
            {books.image.map((item, index) => (
              <div
                key={index}
                className="f-carousel__slide"
              >
                <img alt="" src={item} />
              </div>
            ))}
          </div>
        }
      </Fancybox>
    );
  });

export default ImageList;