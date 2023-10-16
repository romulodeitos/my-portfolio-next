import Header from "./components/header";
import Inicio from "./components/Inicio";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Inicio />
    </div>
  );
}
