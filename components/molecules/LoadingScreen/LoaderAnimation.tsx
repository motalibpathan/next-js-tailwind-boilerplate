"use client";
import { SITE_SETTINGS } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, SITE_SETTINGS.loadingDelaySec * 1000);
    return () => clearTimeout(timer);
  }, []);

  const loaderVariants = {
    initial: { height: "100%" },
    animate: {
      height: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      height: "0%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textWrapVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const mainTextVariants = {
    initial: {
      opacity: 1,
      filter: "blur(10px)",
      transform: "translateY(-100%) rotateX(-2deg)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: "translateY(0) rotateX(0)",
      transition: { delay: 0.2, duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 1,
      filter: "blur(10px)",
      transform: "translateY(100%) rotateX(2deg)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const bottomTextVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            zIndex: 1000,
            backgroundColor: "#000",
            color: "#666",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            display: "flex",
            position: "fixed",
            bottom: "0%",
            left: "0%",
            right: "0%",
            overflow: "hidden",
          }}
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            style={{
              perspective: "10px",
              paddingBottom: "5em",
              paddingLeft: "2em",
              paddingRight: "2em",
              position: "absolute",
              overflow: "hidden",
            }}
            variants={textWrapVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              style={{
                color: "#fff",
                letterSpacing: "0.01em",
                fontFamily: "Interdisplay, sans-serif",
                fontSize: "4em",
                transformStyle: "preserve-3d",
              }}
              variants={mainTextVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Assalamualikum 🙏🏽
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.5em",
              color: "#fff",
              display: "none",
            }}
            variants={bottomTextVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            You&apos;ve landed on Portfolio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
