"use client";
import { SITE_SETTINGS } from "@/lib/data";
import { motion } from "framer-motion";

const NameAnimation = () => {
  const firstLineText = SITE_SETTINGS.firstTitleText.split("");
  const secondLineText = SITE_SETTINGS.secondTitleText.split("");

  const wordVariants = {
    initial: { opacity: 0, y: "-100%", filter: "blur(20px)" },
    animate: {
      opacity: 1,
      y: "0",
      filter: "blur(0)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#333",
        perspective: "14px",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "block",
            textAlign: "start",
            width: "100%",
            perspective: "14px",
          }}
        >
          <motion.div
            style={{
              display: "inline-block",
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
            }}
            variants={wordVariants}
            initial="initial"
            animate="animate"
          >
            {firstLineText.map((char, index) => (
              <motion.div
                key={index}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Line */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "block",
            textAlign: "start",
            width: "100%",
            perspective: "14px",
          }}
        >
          <motion.div
            style={{
              display: "inline-block",
              translate: "none",
              rotate: "none",
              scale: "none",
              transformOrigin: "50% 50%",
            }}
            variants={wordVariants}
            initial="initial"
            animate="animate"
          >
            {secondLineText.map((char, index) => (
              <motion.div
                key={index}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05 + 0.5,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </h1>
  );
};

export default NameAnimation;
