import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Landingpage from "./components/view/pages/landingpage";
import AboutMe from "./components/view/pages/AboutMe";
import Services from "./components/view/pages/services";
import Projects from "./components/view/pages/Projects";
import MidSection from "./components/view/pages/midSection";
import ContactForm from "./components/view/auth/contact-form/contactForm";
import Footer from "./components/footer/footer";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const showAlert = (message) => toast.success(message);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    showAlert(!isDarkMode ? "Dark mode enabled!" : "Light mode enabled!");
  };

  return (
    <>
      <Toaster />
      <div className="relative z-0 min-h-screen w-full overflow-x-hidden bg-white dark:bg-black">
        <div className="relative z-10">
          <Navbar toggleDarkMode={toggleDarkMode} />
          <Landingpage id="home" isDarkMode={isDarkMode} />
          <div className="container mx-auto">
            <AboutMe id="about" />
            <Services id="services" />
            <Projects id="projects" />
          </div>
          <MidSection />
          <div className="container mx-auto">
            <ContactForm id="contactForm" />
            <hr className="my-10 border-t-2 border-gray-300 w-3/4 mx-auto" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
