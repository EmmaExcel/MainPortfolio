import "./components.css";

export const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <div className="navText">
          <a href="#home">EXCEL®</a>
          <p>PORTFOLIO 2023</p>
        </div>
        <div className="navLink">
          <a href="">RESUME</a>
          <a href="">WORKS</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT</a>
        </div>
      </div>
    </>
  );
};
