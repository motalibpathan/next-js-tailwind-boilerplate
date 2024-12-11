"use client";
import { motion } from "framer-motion";

interface IProps {
  lines: string[];
  className?: string;
  animationDelay?: number;
}

const SubheaderText: React.FC<IProps> = ({
  lines,
  className,
  animationDelay,
}) => {
  return (
    <div className={`header_subtext ${className}`}>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="overflow-hidden">
          <motion.div
            initial={{
              transform: "translateY(-100%) rotateZ(-5deg)",
              opacity: 0,
              filter: "blur(14px)",
              transformOrigin: "0% 100%",
            }}
            animate={{
              transform: "translate(0px, 0%) scale(1.00001, 1.00001)",
              opacity: 1,
              filter: "blur(0)",
              transition: {
                delay: animationDelay,
                duration: 0.3,
                ease: "easeOut",
              },
            }}
          >
            {line.split(" ").map((word, wordIdx) => (
              <div key={wordIdx} className="word inline-block">
                {word.split("").map((char, charIdx) => (
                  <div key={charIdx} className="char inline-block">
                    {char}
                  </div>
                ))}
                &nbsp;
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SubheaderText;
