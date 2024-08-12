import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const TextSwitcher = () => {
  // Cycle between two states
  const [text, cycleText] = useCycle(
    "Web Developer",
    "QA Engineer",
    "Software Engineer",
  );

  useEffect(() => {
    // Automatically cycle the text every 3 seconds
    const interval = setInterval(() => {
      cycleText();
    }, 5000);

    return () => clearInterval(interval);
  }, [cycleText]);

  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.5 }}
    >
      <p>{text}</p>
    </motion.span>
  );
};

export default TextSwitcher;