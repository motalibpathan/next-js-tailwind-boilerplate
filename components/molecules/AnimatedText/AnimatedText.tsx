"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  lines: string[]; // Array of text lines to animate
  delay?: number; // Delay before the animation starts
  className?: string; // Additional classes for styling
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  lines,
  delay = 0, // Global delay for the entire animation
  className = "",
}) => {
  return (
    <div>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className={`overflow-hidden ${className}`}>
          <div className="line" style={{ perspective: "14px" }}>
            {line.split(" ").map((word, wordIdx) => (
              <motion.div
                key={wordIdx}
                style={{
                  display: "inline-block",
                  transformOrigin: "50% 50%",
                }}
                initial={{
                  opacity: 0,
                  filter: "blur(20px)",
                  translateY: "-100%",
                  rotateX: "1deg",
                  rotateZ: "-14deg",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0)",
                  translateY: "0",
                  rotateX: "0",
                  rotateZ: "0",
                }}
                transition={{
                  delay: delay + 0 * 0.6, // Add global delay
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {word.split("").map((char, charIdx) => (
                  <motion.div
                    key={charIdx}
                    style={{ display: "inline-block" }}
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: delay + 0 * 0.6 + charIdx * 0.05, // Include global delay
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.div>
                ))}
                &nbsp;
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
