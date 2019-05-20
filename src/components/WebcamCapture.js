import React from "react";
import Webcam from "react-webcam";
import '../App.css';
import camera from '../camera.svg';

class WebcamCapture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState(prevState => ({
      photos: [...prevState.photos, { src: imageSrc, item: 'Book' }]
    }))
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
      <div className="container">
        <div className="photobooth">
          <Webcam
            audio={false}
            height={600}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={600}
            videoConstraints={videoConstraints}
          />
          <div className="button">
            <img src={camera} onClick={this.capture} />
          </div>
        </div>
      </div>
        <div className="container">
        <div className="list">
          {this.state.photos.map((photo, index) => {
            return (
              <div className="photo">
                <img src={photo.src} width={350} />
                <h2>{photo.item}</h2>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default WebcamCapture;
