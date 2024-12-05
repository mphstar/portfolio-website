import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface FullscreenImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Thumbnail Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
      >
        <Image
          width={2048}
          height={2048}
          src={src}
          fetchPriority="high"
          alt={alt}
          className={`cursor-pointer ${className}`}
          onClick={handleOpenFullscreen}
        />
      </motion.div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleCloseFullscreen}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[70%] max-h-[90%] object-contain"
          />
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full"
            onClick={handleCloseFullscreen}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default FullscreenImage;
