import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  const character = "/images/onepiece hero.jpg";

  return (
    <div className="hero">
      <Navbar />

      <div className="character-container">
        <motion.div className="character-card">
          <img src={character} alt="Character" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
