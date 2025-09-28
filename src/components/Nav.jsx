import { navLinks } from "../../constants";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2
     w-full max-w-4xl mx-auto h-20
      rounded-full z-30 flex items-center justify-between
       p-6 bg-transparent bg-opacity-20 backdrop-blur-md mt-4">
      <div className="flex items-center gap-2">
        <img
          src="/vecteezy_modern-phoenix-logo-monochrome-design_.png"
          alt="logo"
          className="w-12 h-auto"
        />
      </div>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-white px-3 py-2 text-black rounded-full">contact me</button>
    </nav>
  );
};

export default Nav;