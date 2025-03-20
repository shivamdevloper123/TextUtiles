

import React, {useState } from 'react'
import './App.css';
import About from './componants/About'
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm'
import Alert from './componants/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert , setAlert] = useState(null);


 const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1000);
 }

  const toggleMode =()=>{
    if (mode === 'light'){
      setmode('dark') 
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode has been enabled " ,"success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white' 
      showAlert("Light mode has been enabled ","success")
    }
  }
  return (
    <>
  <Router>
        <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
      {/* /users --> component 1
      /users/Home --> componant 2     it shows if we donot use "exact" */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try TextUtils - Word counter, Character counter, Remove extra spaces' mode={mode} />} /> 

            
           </Routes> 
        </div>
      </Router>
   </>

  );
}

export default App;
