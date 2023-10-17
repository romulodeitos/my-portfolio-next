import Header from "./components/Header";
import Inicio from "./components/Inicio";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <Inicio />
      </div>
      <About />
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
