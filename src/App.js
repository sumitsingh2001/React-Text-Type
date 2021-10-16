
import './App.css';
import React, { useState } from 'react'
// IMport nav
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';

// Import Router to switch the Commands..
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";




function App() {


  const [mode, setMode] = useState('light');//whether dark mode is enabled or not..
  const [alert, setAlert] = useState(null);  


  const showAlert = (message, type)=>{
    setAlert(
      {msg: message,
      type: type}
    )
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }


   const toggleMode =()=>{
     if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       document.title = "Text || Type - DARK";
       showAlert("DarkMode has been enabled", "success");

      //  setInterval(() => {
      //   document.title = "INSTALL - Text || Type";
      //  }, 2000);
      //  setInterval(() => {
      //   document.title = "Text || Type  is Amazing";
      //  }, 1500);

     }else{
       setMode('light');
       document.body.style.backgroundColor = '#fff';
       document.title = "Text || Type - HOME";
       showAlert("LightMode has been enabled", "success");


     }
   }
   
  return (
    <>
    {/* <Router> */}
          <Navbar title="Text || Type" mode={mode} toggleMode={toggleMode} /* toggleMode={toggleMode} */ />
          <Alert alert={alert}/>
          <div className="container my-3"> 

            {/*Here's how we use Switch To change the content of a web  */}

            {/* <Switch>

              <Route exact path="/"> */}
                    <TextForm showAlert= {showAlert} heading="Enter Your Text below" mode={mode}/>
                  {/* </Route>


                <Route exact path="/about">
                  <About />
                </Route>

                
            </Switch> */}

          </div>
      {/* </Router> */}
    </>
  );
}

export default App;
