import Header from "./components/Header";
import Inicio from "./components/Inicio";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-800 text-white min-h-screen">
        <Header />
        <Inicio />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
