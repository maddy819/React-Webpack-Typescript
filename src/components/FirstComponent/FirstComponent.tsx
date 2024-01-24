import React from "react";
import "./FirstComponent.scss";

const Logo =
  "https://www.vhv.rs/dpng/d/612-6126558_react-logo-png-react-js-logo-svg-transparent.png";

const FirstComponent: React.FC<{}> = () => {
  return (
    <div>
      <h3>A Simple React Component Example with Typescript</h3>
      <div>
        <img height="250" src={Logo} alt="Logo" />
      </div>
      <p>This component shows the React logo.</p>
    </div>
  );
};

export default FirstComponent;
