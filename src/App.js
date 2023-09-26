import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] =  useState(null);

  const showAlert= (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171825';
      showAlert("Dark mode has been activated","success");
      // document.title='TextUtils-Dark mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been activated","success");
      // document.title='TextUtils-Light mode';
    }
   
  }

  return (
    <Router>
      {/* <Navbar title="textUtils" aboutTitle="About"/> When we don't use default props then it is used */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        {/* /users -->component 1
        /users/home -->component 2  exact used to match complete location not partial */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
          <Route exact path="/TextUtils" element={<Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />}>
          </Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />}>
          </Route>
        </Routes>
        {/* <About/> */}
      </div>
      </Router>
  );
}

export default App;
