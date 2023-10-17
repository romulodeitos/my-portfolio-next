export default function Header() {
  return (
    <header className="bg-black text-gray-50 p-4 flex justify-between items-center fixed top-0 left-0 w-full">
      <div className="flex items-center">
        <h1 className="font-mono... text-2xl">Rômulo Deitos</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 text-white justify-center">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              About Me
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
