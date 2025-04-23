import { useState } from "react";
import "./App.css";
import IMAGES from "./assets/Images/Image";
import Navbar from "./components/header/navbar";
import Landingpage from "./components/header/pages/landingpage";
import AboutMe from "./components/header/pages/aboutMe";

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
        </div>
      </div>
    </>
  );
}

export default App;
