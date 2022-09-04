import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick= () =>
    {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase !", "success")
        
    }
    const handleLowClick= () =>
    {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase !", "success")
        
    }
    const handleClear= () =>
    {
        let newText = " ";
        setText(newText)
        props.showAlert("Text has been cleared !", "success")
        
    }
    const handleExtra= () =>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
        
    }

    const handlecopy= () =>
    {
        let text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success")
        
    }

    const handleOnchange = (event) =>
    {
        setText(event.target.value);
    }

    const[text, setText] = useState("");

   
  return (

    <>
    <div className="container" style={{color: props.mode=== 'dark' ? 'white' : 'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style= {{backgroundColor: props.mode === "dark" ? "#0F3460" : "white",
         color : props.mode === "dark" ? 'white' : "#0F3460" }} 
        onChange = {handleOnchange} id="MyBox" placeholder="Enter the text here" rows="8"></textarea>
      </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleExtra}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode=== "dark" ? "white" : "black"}}>
    <h2>Your text summary </h2>
    <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
    <p><b>{0.008 * text.split(" ").length}</b> Minutes can be read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : <b>Enter something in text box to preview it here</b> }</p>
        
    </div>

   </>
  );
}
