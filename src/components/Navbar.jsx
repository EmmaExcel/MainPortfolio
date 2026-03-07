import "./components.css";

export const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navText">
          <a href="/">EXCEL®</a>
          <p>PORTFOLIO 2023</p>
        </div>
        <div className="navLink">
          <a href="https://flowcv.com/resume/qjb61lq7p48j">RESUME</a>
          <a href="/#works">WORKS</a>
          <a href="/#about">ABOUT</a>
          <a href="/#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};
