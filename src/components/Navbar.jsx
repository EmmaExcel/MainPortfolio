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
          <a href="https://docs.google.com/document/d/1seVPcpl7XCzwfP76ukQOKnNWt15Q2q9_/edit?usp=sharing&ouid=116193675770949546523&rtpof=true&sd=true">RESUME</a>
          <a href="/#works">WORKS</a>
          <a href="/#about">ABOUT</a>
          <a href="/#contact">CONTACT</a>
        </div>
      </div>
    </>
  );
};
