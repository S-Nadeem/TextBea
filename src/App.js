import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, {useState} from "react";
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toogleMode = () =>
  {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0F3460";
      showAlert("Dark mode has been Enabled", "success")
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success")
      
    }
  }
  return (
    <>
  
     <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toogleMode = {toogleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <TextForm heading = "Enter the text to analyze" mode={mode} showAlert = {showAlert}/>
     </div>
    
    </>
  );
}

export default App;
