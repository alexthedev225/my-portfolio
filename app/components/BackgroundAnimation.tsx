"use client";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Première forme - Rouge profond saturé */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1, 1.35, 0.85, 1.25, 1],
          x: ["0%", "12%", "28%", "18%", "0%"],
          y: ["0%", "18%", "22%", "12%", "0%"],
          rotate: [0, 20, -15, 10, 0],
          borderRadius: [
            "35% 65% 70% 30% / 30% 35% 65% 70%",
            "65% 35% 30% 70% / 65% 35% 70% 30%",
            "30% 65% 70% 35% / 55% 65% 35% 60%",
            "65% 35% 30% 70% / 65% 35% 70% 30%",
            "35% 65% 70% 30% / 30% 35% 65% 70%",
          ],
        }}
        style={{
          backgroundColor: "rgba(220, 20, 60, 0.4)", // Rouge profond + transparence
          width: "100vw",
          height: "100vh",
          top: "-25%",
          left: "-15%",
          filter: "blur(120px)",
          opacity: 0.35,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Deuxième forme - Rouge moyen lumineux */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1.25, 0.95, 1.35, 1.05, 1.25],
          x: ["-12%", "22%", "-18%", "12%", "-12%"],
          y: ["12%", "8%", "28%", "18%", "12%"],
          rotate: [8, -12, 18, -8, 8],
          borderRadius: [
            "52% 48% 42% 58% / 52% 58% 42% 52%",
            "42% 58% 52% 48% / 58% 42% 52% 48%",
            "58% 42% 52% 42% / 42% 52% 58% 42%",
            "42% 58% 52% 48% / 58% 42% 52% 48%",
            "52% 48% 42% 58% / 52% 58% 42% 52%",
          ],
        }}
        style={{
          backgroundColor: "rgba(255, 69, 58, 0.3)", // Rouge vif + transparence
          width: "90vw",
          height: "90vh",
          top: "22%",
          left: "18%",
          filter: "blur(140px)",
          opacity: 0.25,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Troisième forme - Rouge clair flamboyant */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1, 1.55, 0.95, 1.15, 1],
          x: ["6%", "-18%", "22%", "12%", "6%"],
          y: ["32%", "22%", "12%", "18%", "32%"],
          rotate: [0, -18, 12, -6, 0],
          borderRadius: [
            "42% 58% 52% 48% / 52% 48% 42% 58%",
            "52% 48% 42% 58% / 62% 38% 52% 48%",
            "52% 42% 62% 48% / 52% 52% 42% 58%",
            "52% 48% 42% 58% / 62% 38% 52% 48%",
            "42% 58% 52% 48% / 52% 48% 42% 58%",
          ],
        }}
        style={{
          backgroundColor: "rgba(255, 99, 71, 0.25)", // Rouge clair + transparence
          width: "85vw",
          height: "85vh",
          bottom: "-18%",
          right: "-12%",
          filter: "blur(160px)",
          opacity: 0.2,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
