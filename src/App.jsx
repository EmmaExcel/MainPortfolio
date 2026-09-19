import "./App.css";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Home } from "./pages/Home";

function App() {
  return (
    <main className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
      <Home />
      <Works />
      <About />
      <Services />
    </main>
  );
}

export default App;
