import { useEffect } from "react";
import "./App.css";

import { About } from "./components/About";

import { Services } from "./components/Services";
import { Works } from "./components/Works";
// import { Parallax } from "./components/parallax/parallax";
import { Home } from "./pages/Home";
import { AIOverlay } from '@emmaexcel/shakecursor'

function App() {
  useEffect(() => {
    AIOverlay.init({
      model: {
        provider: 'custom',
        endpoint: 'http://127.0.0.1:1234/v1/chat/completions',
        model: 'qwen/qwen3.5-9b',
        visionEnabled: true,
      },
      editEnabled: true,
    })
    return () => { if (AIOverlay.destroy) AIOverlay.destroy(); };
  }, []);

  return (
    <main className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24">
      <Home />
      <Works />
      {/* <Parallax /> */}
      <About />
      <Services />
    </main>
  );
}

export default App;
