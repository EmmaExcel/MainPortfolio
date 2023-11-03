import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Parallax } from "./components/parallax/parallax";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <section className="mainSection">
        <div className="main">
          <Home />
          <Works/>
          <Parallax/>
          <About/>
          <Services/>
          <Contact/>
        </div>
      </section>
    </>
  );
}

export default App;
