import React, { useState } from 'react'

// state is situation of components
export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClear = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const RepeatText= () => {
        let newText = text.repeat(2);
        setText(newText);
        props.showAlert("Text has been repeated", "success");
    }


    const handleChange = (event) => {
        setText(event.target.value);
    }
    // text = "sdafasd" wrong way to change text
    // setText ("asdfad"); correct way to change text 

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white' :'black'}}>
                <div className="mb-3">
                    <h1 >{props.heading}</h1>
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white' :'dark'?'#343a40':'#e85d65',  color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode==='red'?'success':'danger'} m-2`} onClick={handleUpper}>Convert into Uppercase</button>
                <button className={`btn btn-${props.mode==='red'?'success':'danger'} m-2`} onClick={handleLower}>Convert into Lowercase</button>
                <button className={`btn btn-${props.mode==='red'?'success':'danger'} m-2`} onClick={handleClear}>Clear Text</button>
                <button className={`btn btn-${props.mode==='red'?'success':'danger'} m-2`} onClick={RepeatText}>Repeat text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white' :'black'}}>
                <h2>Your text summary</h2>
                <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview </h3>
                    <p> {text.length>0?text:"Enter something in text area to preview here"}</p>
            </div>
        </>
    )
}
