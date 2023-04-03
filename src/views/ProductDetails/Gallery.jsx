import React, { useState, useEffect } from "react";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const [infos, setInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/books/1")
            .then((res) => res.json())
            .then((infos) => {
                setInfo(infos);
            });
    }, []);

    const getAltImage = (image) => {
        const imageSplits = image.split("/")

        return imageSplits[imageSplits.length - 1]
    }

    const getLinkYoutube = (image) => {
        const link = {
            "source": [
                {
                    "src": image,
                    "type": "video/mp4"
                }
            ],
            "attributes":
            {
                "preload": false,
                "controls": true
            }
        }

        console.log(JSON.stringify(link))
        return JSON.stringify(link)
    }

    return (
        <div className="App">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {infos.image?.map((image) => (
                    image.includes("youtube") ? (
                        <a
                            key={image}
                            data-lg-size="1280-720"
                            data-src="https://youtu.be/C0Cd1K1cgCQ"
                        >
                            <img
                                className="img-responsive"
                                src={infos.image[0]}
                            />
                        </a>
                    ) : (
                        <a key={image} href={image}>
                            <img alt={getAltImage(image)} src={image} />
                        </a>
                    )
                ))}
            </LightGallery>
        </div>
    );
}

export default Gallery