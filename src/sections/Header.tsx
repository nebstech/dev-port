export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
    <div className="flex justify-center items-center relative top-3 left-0 right-0 mx-auto z-10">
      <nav className="flex gap-1 p-0.5 border border-black/15 rounded-full bg-black/10 backdrop-blur">
        <a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="mailto:adonis.casado@outlook.com" className="nav-item bg-slate-500 text-white hover:bg-slate-400 hover:text-gray-900 transition-colors duration-200">Contact</a>
      </nav>
      </div>
    </div>
  );
};
