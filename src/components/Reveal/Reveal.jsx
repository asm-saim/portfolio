import { motion } from "framer-motion";
import { staggerContainer } from "../../motion/variants";

// Scroll-triggered wrapper. Direct motion children using the shared
// "hidden"/"visible" variants will stagger inside it.
const Reveal = ({ children, className = "", variant = staggerContainer, amount = 0.15, ...props }) => {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
