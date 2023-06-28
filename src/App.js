import { useState } from "react";
import NavBar from "./components/NavBar";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [section, setSection] = useState("about");
  const [theme, setTheme]=useState(true)
  const [show, setShow]=useState(false)
 const  handleThemeChange=()=>{
  setTheme(!theme)
  console.log(theme);
  
 }
  return (
    <div className="App">
      <NavBar showSection={setSection} setShow={setShow} show={show} handleThemeChange={handleThemeChange}/>
      <div className="container">
      {section === "about" ? (
        <About />
      ) : section === "exp" ? (
        <Experience />
      ) : section === "skills" ? (
        <Skills />
      ) : null}
      </div>
      <Footer/>
      <ContactInfo hidden={show} show={show} setShow={setShow}/>
    </div>
  );
}

export default App;
