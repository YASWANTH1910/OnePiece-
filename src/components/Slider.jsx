import React, { useState } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const Character = [
    {
      name: "Monkey D.Luffy",
      img: "/images/Monkey.D.Luffy.png",
      description:
        "Monkey D. Luffy is the captain of the Straw Hat Pirates and a determined pirate whose dream is to become the King of the Pirates by finding the legendary treasure known as the One Piece. After eating a Devil Fruit that gave his body rubber-like abilities, Luffy developed a unique and unpredictable fighting style. He is a master of all three forms of Haki, including the rare Conqueror’s Haki, marking him as a natural leader. Known for his fearless spirit and unbreakable loyalty to his crew, Luffy fights for freedom and protects those he cares about at all costs.",
      background: "linear-gradient(135deg, #0B3C5D, #F59E0B)",
    },
    {
      name: "Figarland Shanks",
      img: "/images/Shanks 3D.png",
      description:
        "Figarland Shanks, widely known as Red-Haired Shanks, is one of the Four Emperors of the Sea and one of the most influential pirates in the world. A former member of Gol D. Roger’s crew, Shanks possesses immense power despite having no Devil Fruit, relying instead on his extraordinary mastery of Haki, especially Conqueror’s Haki. Calm, strategic, and authoritative, he commands respect from pirates, Marines, and even the World Government. Shanks values balance over chaos and plays a crucial role in shaping the era of piracy while quietly guiding the future of the new generation.",
      background: "linear-gradient(135deg, #5B0A0A, #1E293B)",
    },
    {
      name: "Gol D.Roger",
      img: "/images/Gol.D.Roger.png",
      description:
        "Gol D. Roger, famously known as the Pirate King, was the man who conquered the Grand Line and discovered the legendary treasure known as the One Piece. As the captain of the Roger Pirates, he stood at the pinnacle of the pirate era, possessing immense strength, unmatched willpower, and mastery over Haki. Roger’s final words before his execution ignited the Great Pirate Era, inspiring countless pirates to set sail in search of freedom and adventure. Even after his death, his legacy continues to shape the world and drive the ambitions of a new generation.",
      background: "linear-gradient(135deg, #D4AF37, #3A2A1A)",
    },
    {
      name: "Marshall D. Teach",
      img: "/images/BlackBeard 3D.png",
      description:
        "Marshall D. Teach, better known as Blackbeard, is one of the most dangerous and ambitious pirates in the world and a member of the Worst Generation. Unlike any other pirate, he possesses the rare ability to wield more than one Devil Fruit, granting him terrifying powers that combine darkness and destruction. Cunning, ruthless, and patient, Blackbeard believes that true freedom comes from power and chaos. His actions have significantly altered the balance of the world, making him one of the greatest threats in the current era of piracy.",
      background: "linear-gradient(135deg, #1a1a1a, #444444)",
    },
    {
      name: "Monkey D.Garp",
      img: "/images/Monkey.D.Garp.png",
      description:
        "Monkey D. Garp, known as the “Hero of the Marines,” is one of the most legendary figures in the world of One Piece. A former Marine Vice Admiral, Garp is renowned for his immense physical strength and mastery of Haki, allowing him to stand toe-to-toe with the strongest pirates without the use of a Devil Fruit. Despite his strict sense of justice, he often defies authority and follows his own moral code. As the grandfather of Monkey D. Luffy, Garp represents the old era of power and remains a symbol of true strength and unwavering resolve.",
      background: "linear-gradient(135deg, #220a2c, #6e1f7c)",
    },
    {
      name: "Rocks D.Xebec",
      img: "/images/rocks.d.xebec.png",
      description:
        "Rocks D. Xebec was one of the most dangerous and enigmatic pirates in history, whose ambition threatened the entire world. As the captain of the infamous Rocks Pirates, he commanded a crew that included future legends such as Whitebeard, Kaido, and Big Mom. Driven by a desire for absolute power rather than freedom, Xebec stood in direct opposition to the World Government and sought to become the ruler of the world itself. Though his name was erased from history after his defeat at God Valley, his influence continues to echo through the pirate era and shape the rise of powerful figures.",
      background: "linear-gradient(135deg, #120418, #450A0A)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + Character.length) % Character.length);
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % Character.length);
  };

  return (
    <div
      className="slider"
      style={{ background: Character[index].background }}>

      <div className="slider-content">
        <div className="slider-images">
          {Character.map((alien, i) => { 
            const offset = (i - index + Character.length) % Character.length;
            let x = 0,
              y = 0,
              scale = 1,
              opacity = 1,
              blur = "none",
              zIndex = 1;

            if (offset === 0) {
              x = 0;
              y = 0;
              scale = 1.1;
              opacity = 1;
              blur = "none";
              zIndex = 3;
            } else if (offset === 1) {
              x = 100;
              y = -30;
              scale = 0.7;
              opacity = 0.5;
              blur = "blur(2px)";
              zIndex = 2;
            } else if (offset === Character.length - 1) {
              x = -100;
              y = 30;
              scale = 0.5;
              opacity = 0.5;
              blur = "blur(2px)";
              zIndex = 2;
            } else {
              x = 0;
              y = 0;
              scale = 0.5;
              opacity = 0;
              blur = "blur(5px)";
              zIndex = 0;
            }

            return (
              <img
                key={i}
                src={alien.img}
                alt={alien.name}
                className="alien-img"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                  opacity,
                  filter: blur,
                  zIndex,
                }}
              />
            );
          })}
        </div>

        <div className="slider-info-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className="slider-info"
              custom={direction}
              initial={{ y: direction === "next" ? 50 : -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === "next" ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1>{Character[index].name}</h1>
              <div className="description-container">
                {Character[index].description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="slider-controls">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <FaChevronLeft size={24} />
        </button>
        <button className="arrow right-arrow" onClick={handleNext}>
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
