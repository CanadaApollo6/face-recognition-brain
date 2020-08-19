import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center br2 bg-transparent hover-bg-black hover-white"
            type="tex"
            onChange={onInputChange}
          />
          <div className="w-5"></div>
          <button
            className="w-25 grow f4 link ph3 pv2 dib black bg-transparent hover-bg-black hover-white br2"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
