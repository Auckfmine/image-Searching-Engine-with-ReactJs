import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.ImageRef);
  }

  setSpans = () => {};
  render() {
    return (
      <img
        ref={this.imageRef}
        alt={this.props.image.alt_description}
        src={this.props.image.urls.regular}
      />
    );
  }
}

export default ImageCard;
