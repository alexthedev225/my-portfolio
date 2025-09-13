"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useStars = (count: number = 100) => {
  const [stars, setStars] = useState<null | Array<{
    size: number;
    left: number;
    top: number;
    opacity: number;
    delay: number;
    duration: number;
  }>>(null);

  useEffect(() => {
    setStars(
      Array.from({ length: count }).map(() => ({
        size: Math.random() * 3 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.4,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      }))
    );
  }, [count]);

  return stars;
};

const BackgroundWithStars = () => {
  const stars = useStars(100);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Fond noir */}
      <motion.div
        className="absolute"
        style={{
          width: "120vw",
          height: "120vh",
          top: "-10%",
          left: "-10%",
          backgroundColor: "rgba(0,0,0,1)",
          filter: "blur(120px)",
        }}
      />

      {/* Formes dégradé bleu nuit → violet */}
      <motion.div
        className="absolute"
        animate={{
          scale: [1.2, 0.95, 1.3, 1.05, 1.2],
          x: ["-12%", "20%", "-18%", "10%", "-12%"],
          y: ["10%", "5%", "25%", "15%", "10%"],
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
          width: "90vw",
          height: "90vh",
          top: "22%",
          left: "18%",
          background: "linear-gradient(135deg, #0a0f4b, #4b0082)", // bleu nuit → violet
          filter: "blur(120px)",
          opacity: 0.6,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Étoiles */}
      {stars &&
        stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
    </div>
  );
};

export default BackgroundWithStars;
