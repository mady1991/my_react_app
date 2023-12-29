import React, { useState } from "react";

export default function TextForm(props) {
  const onUpperCase = (event) => {
    setText(text.toUpperCase());
    props.showAlert("Upper case is done","warning");
  };

  const onLowerCase = (event) => {
    setText(text.toLowerCase());
    props.showAlert("Lower case is done","danger");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const removeSpecialCharacters = (event) => {
    setText(text.replace(/[^a-zA-Z ]/g, ""));
    props.showAlert("Rmoved Special Charcters  done","success");
  };

  const clearText = (event) => {
    setText('');
    props.showAlert("Clearing Txt done","primary");
  };

  const [text, setText] = useState("");

  const removeExtraSpace=(word)=>{
    return word.split(/[ ]+/).join(" ");
  }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            placeholder="Please enter your comments"
            value={text}
            id="floatingTextarea"
            rows={8}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? props.bgColor : "white",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onUpperCase}>
          Covert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={onLowerCase}>
          Covert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={removeSpecialCharacters}
        >
          Remove Special Characters
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {removeExtraSpace(text).trim().split(" ").length} <b>Words</b> & {text.trim().replaceAll(' ','').length}
          <b> Characters</b>
        </p>
        <p>{0.08 * text.split(" ").length} Mintues for Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
