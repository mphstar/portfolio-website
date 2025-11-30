import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const layoutId = `fullscreen-${src}`;

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullscreen]);

  const handleOpenFullscreen = () => setIsFullscreen(true);

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      {/* Thumbnail Image */}
      <motion.div
        layoutId={layoutId}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
        transition={{ layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
        className="w-full h-full"
        onClick={handleOpenFullscreen}
      >
        <Image
          width={2048}
          height={2048}
          src={src}
          fetchPriority="high"
          alt={alt}
          className={`cursor-pointer ${className}`}
        />
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-[1px]"
            onClick={handleCloseFullscreen}
          >
            <motion.div
              layoutId={layoutId}
              transition={{ layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
              className="max-w-[70%] max-h-[90%] w-full h-full flex items-center justify-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                src={src}
                alt={alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={handleCloseFullscreen}
            >
              X
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullscreenImage;
