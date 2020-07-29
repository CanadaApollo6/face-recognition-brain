import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/image-link-form/image-link-form";
import Rank from "./components/rank/rank";
import Particles from "react-particles-js";

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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
