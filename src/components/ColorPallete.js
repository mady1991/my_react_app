import React from "react";

export default function ColorPallete(props) {
  const onChangeColor = (event) => {
    
    props.showbgColor(event.target.value);
  };

  return (
    <div>
      <div className="container my-3">
        <input
          type="color"
          id="colorPicker"
          value={props.bgColor}
          onChange={onChangeColor}
        />
      </div>
    </div>
  );
}
