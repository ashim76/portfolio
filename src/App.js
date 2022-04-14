import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="main">
      <Header />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Footer />
      <Nav />
    </div>
  );
}

export default App;
