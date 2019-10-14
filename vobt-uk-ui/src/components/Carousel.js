import React from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import Carousel from "nuka-carousel";
import { withStyles } from "@material-ui/core";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = theme => ({
  chevron: {
    fontSize: "60px",
    color: theme.palette.secondary.main,
    "@media (max-width: 768px)": {
      fontSize: "30px"
    }
  },
  slideButton: {
    radius: 0,
    backgroundColor: "transparent",
    border: 0,
    position: "absolute"
  },
  buttonLeft: {
    left: 0
  },
  buttonRight: {
    right: 0
  }
});

const CarouselComponent = class extends React.Component {
  constructor(props) {
    super(props);
    const { imageArray } = props;
    this.state = {
      currentIndex: 1,
      images: imageArray
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <CloudinaryContext cloudName={CLOUDINARY_NAME}>
        <Carousel
          width="100vw"
          autoplay={true}
          autoplayInterval={5000}
          autoplayReverse={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className={`${classes.slideButton} ${classes.buttonleft}`}
            >
              <i className={`material-icons ${classes.chevron}`}>
                chevron_left
              </i>
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              className={`${classes.slideButton} ${classes.buttonRight}`}
            >
              <i className={`material-icons ${classes.chevron}`}>
                chevron_right
              </i>
            </button>
          )}
        >
          {this.state.images.map((s, i) => {
            return (
              <img
                src={this.state.images[i]}
                // className={classes.carouselImage}
              />
            );
          })}
        </Carousel>
      </CloudinaryContext>
    );
  }
};

export default withStyles(styles)(CarouselComponent);
