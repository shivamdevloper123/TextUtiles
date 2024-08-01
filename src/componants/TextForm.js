import React, {useState} from 'react'

export default function TextForm(props) {
  
  //Upper case
  const handleupClick =()=>{
    // console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase","success")
  }

  //Lowercase
  const handleLowerClick =()=>{
  
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }
 
/// Clear text
  const handleclearClick =()=>{
    let newText = ""
    setText(newText)
    
    props.showAlert("Clear text","success")
  }
 //Remove Extra space
  const handletextSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
    props.showAlert(" Extra Text spaces removed","success")
  }
  
  const handleCopy = () =>{
    var text = document.getElementById("my-box");
    text.select("");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }
  //event change
  const handleOnChange =(event)=>{
    // console.log("on Change");
    setText(event.target.value)
  }

  // Function to speak text

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    
    props.showAlert(" Below texts are speaking","success")
  }



  
const [text, setText] = useState("Enter text here");
  // text = 'jfnknewjfbo';  //this is wrong way to change text 
  // setText ('next Text');  //this is right way to change text 
  return (
    <>
<div className='container'style={{color:props.mode ==='dark'?'white':'#042743'}}>
<h1>{props.heading}</h1>

<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white' , color:props.mode ==='dark'?'white':'#042743'}} id="my-box" rows="8"></textarea>
</div>
<button className='btn btn-primary  mx-2'onClick={handleupClick}>Convert to UpperCase</button>

<button className='btn btn-primary mx-2'onClick={handleLowerClick}>Convert to LowerCase</button>

<button className='btn btn-primary mx-2'onClick={handleclearClick}>Clear</button>

<button className='btn btn-primary mx-2'onClick={handletextSpace}>Remove Extra Space</button>

<button className='btn btn-primary mx-2'onClick={handleCopy}>Copy text</button>

<button  className="btn btn-warning mx-2 " type="submit" onClick={speak} >Speak</button>

</div>

<div className='container my-3'style={{color:props.mode ==='dark'?'white':'#042743'}}> 
  <h1>Your text summery</h1>
  <p>{text.split(" ").length}word and {text.length} character</p>
  <p>{0.008 * text.split(" ").length} minutes to read</p>
<h2>Preview</h2>
  <p>{text.length>0?text:"Enter some text in above area"} </p>
</div>
</>
  )
}
