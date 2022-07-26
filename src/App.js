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

  return (
    <div className="App">
      <NavBar showSection={setSection} />
      <div className="container">
      {section === "about" ? (
        <About />
      ) : section === "exp" ? (
        <Experience />
      ) : section === "contactInfo" ? (
        <ContactInfo toggle={setSection} />
      ) : section === "skills" ? (
        <Skills />
      ) : null}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
