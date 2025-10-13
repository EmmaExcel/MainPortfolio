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
          <a href="https://drive.google.com/file/d/1aqIxhMl3whpZ0tw9ElewUr9RgJNj7fhp/view?usp=sharing">RESUME</a>
          <a href="/#works">WORKS</a>
          <a href="/#about">ABOUT</a>
          <a href="/#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};
