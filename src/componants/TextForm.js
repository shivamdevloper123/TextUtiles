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
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
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



  
const [text, setText] = useState("");
  // text = 'jfnknewjfbo';  //this is wrong way to change text 
  // setText ('next Text');  //this is right way to change text 
  return (
    <>
<div className='container'style={{color:props.mode ==='dark'?'white':'#042743'}}>
<h1 className="mb-3">{props.heading}</h1>

<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white' , color:props.mode ==='dark'?'white':'#042743'}} id="my-box" rows="8" placeholder='Enter text here'></textarea>
</div>
<button disabled = {text.length === 0} className='btn btn-primary  mx-1 my-1'onClick={handleupClick}>Convert to UpperCase</button>

<button  disabled = {text.length === 0} className='btn btn-primary mx-1 my-1'onClick={handleLowerClick}>Convert to LowerCase</button>

<button  disabled = {text.length === 0} className='btn btn-primary mx-1 my-1'onClick={handleclearClick}>Clear</button>

<button  disabled = {text.length === 0} className='btn btn-primary mx-1 my-1'onClick={handletextSpace}>Remove Extra Space</button>

<button  disabled = {text.length === 0} className='btn btn-primary mx-1 my-1'onClick={handleCopy}>Copy text</button>
<button   disabled = {text.length === 0} className="btn btn-warning mx-1 my-1 " type="submit" onClick={speak} >Speak</button>


</div>

<div className='container my-3'style={{color:props.mode ==='dark'?'white':'#042743'}}> 
  <h2>Your text summery</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}word and {text.length} character</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
<h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview"} </p>
</div>
</>
  )
}
