import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import slider from "./slider/slider.jpg";
import slider1 from "./slider/slider1.jpg";
import slider2 from "./slider/slider2.jpg";
import slider3 from "./slider/slider3.jpg";
import { autoPlay } from "react-swipeable-views-utils";
import Carousel from "react-material-ui-carousel";
import useStyles from "./styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    // label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: slider,
  },
  {
    // label: "pic2",
    imgPath: slider1,
  },
  {
    // label: "pic3",
    imgPath: slider2,
  },
  {
    // label: "pic4",
    imgPath: slider3,
  },
];

function Slider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Carousel>
      {images.map((step, index) => (
        <div key={step}>
          {Math.abs(activeStep - index) <= 4 ? (
            <Box
              component="img"
              className={classes.box}
              src={step.imgPath}
              alt={step.label}
            />
          ) : null}
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
