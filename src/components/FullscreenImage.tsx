import Image from "next/image";
import React, { useState } from "react";

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
      <Image
        width={2048}
        height={2048}
        src={src}
        alt={alt}
        className={`cursor-pointer ${className}`}
        onClick={handleOpenFullscreen}
      />

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
