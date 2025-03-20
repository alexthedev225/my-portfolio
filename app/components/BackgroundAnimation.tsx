"use client";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Première forme - Violet profond */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1, 1.3, 0.8, 1.2, 1],
          x: ["0%", "10%", "25%", "15%", "0%"],
          y: ["0%", "15%", "20%", "10%", "0%"],
          rotate: [0, 15, -10, 5, 0],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        style={{
          backgroundColor: "#4A148C", // Deep Purple
          width: "100vw",
          height: "100vh",
          top: "-20%",
          left: "-10%",
          filter: "blur(100px)",
          opacity: 0.3,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Deuxième forme - Violet moyen */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1.2, 0.9, 1.3, 1],
          x: ["-10%", "20%", "-15%", "10%", "-10%"],
          y: ["10%", "5%", "25%", "15%", "10%"],
          rotate: [5, -10, 15, -5, 5],
          borderRadius: [
            "50% 50% 40% 60% / 50% 60% 40% 50%",
            "40% 60% 50% 50% / 60% 40% 50% 40%",
            "60% 40% 50% 40% / 40% 50% 60% 40%",
            "40% 60% 50% 50% / 60% 40% 50% 40%",
            "50% 50% 40% 60% / 50% 60% 40% 50%",
          ],
        }}
        style={{
          backgroundColor: "#7B1FA2", // Medium Purple
          width: "90vw",
          height: "90vh",
          top: "20%",
          left: "15%",
          filter: "blur(120px)",
          opacity: 0.2,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Troisième forme - Violet clair */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1, 1.5, 0.9, 1.1, 1],
          x: ["5%", "-15%", "20%", "10%", "5%"],
          y: ["30%", "20%", "10%", "15%", "30%"],
          rotate: [0, -15, 10, -5, 0],
          borderRadius: [
            "40% 60% 50% 50% / 50% 50% 40% 60%",
            "50% 50% 40% 60% / 60% 40% 50% 50%",
            "50% 40% 60% 50% / 50% 50% 40% 60%",
            "50% 50% 40% 60% / 60% 40% 50% 50%",
            "40% 60% 50% 50% / 50% 50% 40% 60%",
          ],
        }}
        style={{
          backgroundColor: "#9C27B0", // Light Purple
          width: "85vw",
          height: "85vh",
          bottom: "-15%",
          right: "-10%",
          filter: "blur(140px)",
          opacity: 0.15,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
