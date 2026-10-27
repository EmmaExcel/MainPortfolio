import "./components.css";

export const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navText">
          <a href="/">EXCEL®</a>
          <p>PORTFOLIO 2026</p>
        </div>
        <div className="navLink">
          <a href="/Excel_Emma-Okerhe_CV.pdf" target="_blank" rel="noreferrer">RESUME</a>
          <a href="/#works">WORKS</a>
          <a href="/#about">ABOUT</a>
          <a href="/#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};
