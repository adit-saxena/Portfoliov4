import { motion } from "framer-motion";
import "./Card.css";

export default function Card({
  bgColor = "#EADAF8",
  image,
  text,
  rotation = 0,
}) {
  // Calculate x-offset based on rotation (so the shadow falls consistently straight down relative to the viewport)
  // Assuming the light source is directly above. If card is rotated left (negative), shadow goes slightly right (positive X).
  const angleInRadians = rotation * (Math.PI / 180);
  const depth = 8;
  const hoverDepth = 14;

  // Calculate relative X/Y offsets so the shadow always falls straight down
  const xOffset = -Math.sin(angleInRadians) * depth;
  const yOffset = Math.cos(angleInRadians) * depth;

  const hoverXOffset = -Math.sin(angleInRadians) * hoverDepth;
  const hoverYOffset = Math.cos(angleInRadians) * hoverDepth;

  return (
    <motion.div
      className="card"

      // 'animate' defines the component's default, non-hovered state.
      animate={{
        rotate: rotation,
        zIndex: 0,
        boxShadow: `${xOffset}px ${yOffset}px 0px rgba(0, 0, 0, 0.12), ${xOffset}px ${yOffset + 2}px 20px rgba(0, 0, 0, 0.08)`,
      }}

      // 'whileHover' defines the state to animate to during a hover.
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: `${hoverXOffset}px ${hoverYOffset}px 0px rgba(0, 0, 0, 0.12), ${hoverXOffset}px ${hoverYOffset + 4}px 30px rgba(0, 0, 0, 0.08)`,
        // We include 'rotate' here to ensure it's maintained during the hover animation.
        rotate: 0,
        zIndex: 100
      }}

      // A single transition prop controls the animation's timing and feel.
      transition={{ type: "spring", stiffness: 260, damping: 20 }}

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