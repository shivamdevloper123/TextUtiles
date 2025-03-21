// import React from 'react';
import React from 'react';

function About(props) {
  // const [myStyle, setmyStyle] = useState( {
  //   color: "black",
  //   backgroundColor: "white"
  // })
  let myStyle={
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor :props.mode === 'dark'? 'rgb(36,74,104)' : 'white'
  }

  // color: #000000;
  // background-color: #c6c7c8;

  return (
    <div className ='container' style={{ color : props.mode === 'dark'?'white':'#042743'}} >
      <h1 className =' my-3'>About us</h1>
    <div className ="accordion" id="accordionExample">
      <div className ="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze our Text</strong>
          </button>
        </h2> 
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            
              TextUtiles gives you way to analyze your text quickly and efficiently .  it word count , character count and also this website have various features
            
            </div>
        </div>
      </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className ="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong>Free To Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            
                TextUtiles is a free character counter tool that provides instant character count & word count statistics for a given text . TextUtiles reports the number of words and character .Thus it is suitable  for writing  text with/ character limit.
              
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
                This word counter software works in any Browsers such as Chrome , Firefox , Safari , Opera . I suits to count character facebook , blog , book , excel document ,pdf document , essays , etc .

              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;