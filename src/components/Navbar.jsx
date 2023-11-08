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
          <a href="https://docs.google.com/document/d/1q-FxMgcOwzgUBmgmXOwO7O-3EJJZV9Y6cGPpyhtXecM/edit?usp=sharing">RESUME</a>
          <a href="#works">WORKS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};
