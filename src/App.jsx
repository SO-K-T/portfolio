import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./global.css";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Connect />
      <Footer/>
    </div>
  );
}

export default App;
