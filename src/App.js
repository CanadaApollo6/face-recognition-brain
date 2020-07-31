import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import SignIn from "./components/sign-in/SignIn";
import Register from "./components/register/Register";

const app = new Clarifai.App({
  apiKey: "5d338cb878cc4ee2baa614d0c1a4b159",
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 750,
      },
    },
  },
};

export default function App() {
  const [input, setInput] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");
  const [imageBox, setBox] = React.useState({});
  const [route, setRoute] = React.useState("SignIn");

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageURL(input);
    console.log(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) =>
        displayFaceBox(calculateFaceLocation(response)).catch((err) =>
          console.log(err)
        )
      );
  };

  const onSignIn = () => {
    setRoute("Home");
  };

  const onSignOut = () => {
    setRoute("SignIn");
  };

  const onRegister = () => {
    setRoute("Register");
  };

  return (
    <div className="App">
      <Particles params={particlesOptions} className="particles" />
      {route === "SignIn" ? (
        <SignIn onSignIn={onSignIn} onRegister={onRegister} />
      ) : route === "Register" ? (
        <Register onSubmit={onSignIn} onCancel={onSignOut} />
      ) : (
        <div>
          <Navigation onClick={onSignOut} />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition imageURL={imageURL} box={imageBox} />
        </div>
      )}
    </div>
  );
}
