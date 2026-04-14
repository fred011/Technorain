import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/services" element={<ServicesPage />} />
    //   <Route path="/about" element={<AboutPage />} />
    //   <Route path="/projects" element={<ProjectsPage />} />
    //   <Route path="/contact" element={<ContactPage />} />
    // </Routes>
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="bg-slate-800 shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Temporarily Unavailable</h1>

        <p className="text-gray-300 mb-3">
          This website is currently unavailable due to a billing issue.
        </p>

        <p className="text-gray-400 text-sm">
          Please contact support for more information.
        </p>
      </div>
    </div>
  );
}

export default App;
