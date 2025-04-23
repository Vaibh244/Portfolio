import { useState } from "react";
import "./App.css";
import IMAGES from "./assets/Images/Image";
import Navbar from "./components/header/navbar";
import Landingpage from "./components/view/pages/landingpage";
import AboutMe from "./components/view/pages/aboutMe";
import Services from "./components/view/pages/services";
import Projects from "./components/view/pages/projects";
import MidSection from "./components/view/pages/midSection";
import ContactForm from "./components/view/auth/contact-form/contactForm";
import Footer from "./components/footer/footer";

function App() {
  const [count, setCount] = useState(0);
  const backGround = {
    backgroundImage: `linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%), url(${IMAGES.bgImg})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div
        className="h-screen bg-cover bg-center min-h-screen w-full "
        style={backGround}
      >
        <div className="container mx-auto">
          <Navbar />
          <Landingpage />
          <AboutMe />
          <Services />
          <Projects />

        </div>
          <MidSection />
          <div className="container mx-auto">
          <ContactForm />
          <hr className="my-10 border-t-2 border-gray-300 w-3/4 mx-auto" />
          <Footer />
          </div>
      </div>
    </>
  );
}

export default App;
