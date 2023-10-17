export default function Header() {
  return (
    <header className="bg-zinc-800 text-gray-50 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="flex items-center">
        <h1 className="font-mono... text-2xl">Rômulo Deitos</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 text-white justify-center">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
