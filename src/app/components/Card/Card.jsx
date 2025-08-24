import { motion } from "framer-motion";
import "./Card.css";

export default function Card({
  bgColor = "#EADAF8",
  image,
  text,
  rotation = 0,
}) {
  return (
    <motion.div
      className="card"
      
      // 'animate' defines the component's default, non-hovered state.
      animate={{
        rotate: rotation,
        zIndex: 0,
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.15)",
      }}

      // 'whileHover' defines the state to animate to during a hover.
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
        // We include 'rotate' here to ensure it's maintained during the hover animation.
        rotate: 0,
        zIndex: 100
      }}
      
      // A single transition prop controls the animation's timing and feel.
      transition={{ duration: 0.2, ease: "easeInOut" }}

      // The conflicting 'transform' property has been removed from the style prop.
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div
        className="card-image"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!image && "IMAGE"}
      </div>
      <p className="card-text">{text}</p>
    </motion.div>
  );
}