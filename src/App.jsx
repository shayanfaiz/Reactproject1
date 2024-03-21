import React from "react"
import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import Contact from "./components/contact";

const App = () => {
  console.log(Contact);
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Contact/>
    </div>
  );
};

export default App;