import React from 'react'

export default function Image() {
    return (
        <div
            ref={index === 3 ? dynamicGallery : null}
            key={image}
            style={
                index === 3 ?
                    {
                        filter: "brightness(0.5)",
                        position: "relative",
                        cursor: "pointer",
                    } :
                    {
                        border: "solid 1px gray"
                            (((image.includes('youtube') &&
                                (ytS === "")) || (image === selectedImage)) ?
                                "solid 1px gray" : "solid 1px #eee"),
                        position: "relative",
                        cursor: "pointer",
                    }
            }
            onClick={index === 3 ?
                () => openGallery() :
                (() => {
                    onSelectImage(image.includes('youtube') ? images[0] : image)
                    onYtSrc(image.includes('youtube') ? image : "")
                })}
        >
            <img
                src={image.includes('youtube') ? images[0] : image}
                width="100%"
            />

            <Typography
                variant="h4"
                sx={{
                    position: "absolute",
                    top: "40%",
                    left: "35%",
                }}>
                {index === 3 ?
                    (`+${images.length - 3}`) :
                    (image.includes('youtube') &&
                        <PlayCircleFilledWhiteOutlinedIcon fontSize="large"
                            sx={{
                                color: "white"
                            }} />
                    )}
            </Typography>
        </div>
    )
}
