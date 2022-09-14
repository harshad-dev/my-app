import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
  };

  const handleExtraSpaces=()=>{
    let newSpace = text.split(/([ ])+/);
    setText(newSpace.join(""));
    props.showAlert("Extra Spaces Removes","success")
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container mt-3" style={{color: props.mode==='dark'?'#fff':'#000'}}>
      <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleOnChange}
        style={{backgroundColor: props.mode==='dark'?'#000':'#fff',color: props.mode==='dark'?'#fff':'#000'}}
          id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>
        Copy
      </button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container mt-5" style={{color: props.mode==='dark'?'#fff':'#000'}}>
      <h2>Your text Summary</h2>
      <p>"{text.split(" ").length} <b>Words</b>" and "{text.length} <b>Character</b>" </p>
      <p> {0.008 * text.split(" ").length} <b>Minutes</b> </p>
      <br /><br />
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something on text box"}</p>
    </div>
    </>
  );
}
