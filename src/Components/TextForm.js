import React, {useState} from "react"


export default function TextForm(props){



    const handleUpClick = () => {
        console.log("Print"  + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success")
    }

    
    const handleLowClick = () => {
        console.log("Print"  + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleOnChange = (e) => {
        console.log("onChange");
        setText(e.target.value)
    };

    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed Extra Spaces", "success");

    }

    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");

    }


    const [text, setText] = useState('');
    // text= newText;  Wrong way to changr the state:
    // setText= newText; Correct way to change the state:

    return (
        <>
            <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div classname="mb-3">
                    <textarea className="form-control" style = {{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}}
                    id="myBox" value={text} onChange={handleOnChange} rows="10" cols="15"></textarea>
                </div>
                <button className="btn btn-outline-primary my-3 mx-3" onClick={handleUpClick}>Convert It to UpperCase</button>
                <button className="btn btn-outline-primary my-3 " onClick={handleLowClick}>Convert It to LowerCase</button>
                <button className="btn btn-outline-primary my-3 mx-3" onClick={handleCopy}>Copy It</button>
                <button className="btn btn-outline-primary my-3" onClick={removeSpaces}>remove Extra spaces</button>
                <button className="btn btn-outline-primary my-3 mx-3" onClick={clearText}>Clear</button>

            </div>
            <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
                <h2>your text summery</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Text Preview</h2>
                <p>{text.length>0?text:"Enter your text above in the textBox to preview"}</p>
            </div>  
            </>
    )
};