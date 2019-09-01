import React from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { withStyles, SvgIcon, MobileStepper } from "@material-ui/core";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = theme => ({
  carouselContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // maxWidth: "1200px",
    margin: "0 auto"
  },
  chevron: {
    fontSize: "60px",
    color: theme.palette.secondary.main,
    "@media (max-width: 768px)": {
      fontSize: "30px"
    }
  },
  imageContainer: {
    // width: "80%"
  },
  slideButton: {
    radius: 0,
    backgroundColor: "transparent",
    border: 0
  },
  stepper: {
    justifyContent: "center",
    background: "#FFF"
  },
  carouselImage: {
    height: "85vh"
  }
});

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { imageArray } = props;

    this.state = {
      currentIndex: 1,
      images: imageArray
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.startSlideShow = this.startSlideShow.bind(this);
  }

  componentDidMount() {
    this.startSlideShow();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  startSlideShow() {
    console.log("starting slideshow");
    const interval = setInterval(() => {
      this.nextSlide();
    }, 5500);
    this.setState({ interval });
  }

  prevSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;

    // check if we need to start over from the last index again
    const resetIndex = this.state.currentIndex === 1;
    const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
    // assign the logical index to currentImageIndex that will use in render method
    this.setState({
      currentIndex: index
    });
  }
  nextSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;
    // check if we need to start over from the first index
    const resetIndex = this.state.currentIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentIndex + 1;
    // assign the logical index to currentIndex that will use in render method
    this.setState({
      currentIndex: index
    });
  }
  render() {
    const { classes, imageArray } = this.props;
    return (
      <CloudinaryContext cloudName={CLOUDINARY_NAME}>
        <div className={classes.carouselContainer}>
          <button onClick={this.prevSlide} className={classes.slideButton}>
            <i className={`material-icons ${classes.chevron}`}>chevron_left</i>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg> */}
          </button>
          <div className={classes.imageContainer}>
            <img
              src={imageArray[this.state.currentIndex]}
              className={classes.carouselImage}
            />
            <MobileStepper
              variant="dots"
              steps={imageArray.length}
              position="static"
              activeStep={this.state.currentIndex}
              className={classes.stepper}
            />
          </div>
          <button onClick={this.nextSlide} className={classes.slideButton}>
            <i className={`material-icons ${classes.chevron}`}>chevron_right</i>
          </button>
        </div>
      </CloudinaryContext>
    );
  }
}

export default withStyles(styles)(Carousel);
