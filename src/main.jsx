import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./pages/ProjectDetail.jsx";
import { Contact } from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <section className="mainSection">
      <div className="main">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />
        </Routes>
        <Contact />
      </div>
    </section>
  </BrowserRouter>
);
