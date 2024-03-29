import CanvasControl from "@/components/CanvasControl";
import Main from "@/components/Template";
import clsx from "clsx";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
// import Typed from 'react-typed'

import animationData from "../components/lottie/loading.json";
import Link from "next/link";

export default function Index() {
  const canvasRef = useRef(null);

  const clearHandler = () => {
    // @ts-ignore
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };

  const [color, setColor] = useState("rgba(99, 102, 241, 0.6)");
  return (
    <Main selectedNav="Home" title="Hi, I'm Bintang | @Mphstar">
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ zIndex: 5 }}
        canvasColor="transparent"
        className="bg-transparent absolute top-0 left-0 w-full cursor-pencil dark:cursor-pencil-dark"
        strokeWidth={5}
        strokeColor={color}
      />
      <div className="flex flex-col h-full flex-1 mt-24 items-center justify-center md:flex-row md:gap-12 select-none">
          <Image
            className="h-fit w-52 order-1"
            height={400}
            width={400}
            src="/image_dashboard.png"
            alt="profile"
          />
        <div className="order-2  flex flex-col">
          <div className="mt-4">
            <p className="text-center md:text-left Virgil text-3xl md:text-5xl">
              <b>Hi.</b> I'm Bintang,👋
            </p>
          </div>
          {/* <div>
            <p className="poppins-semibold text-center text-2xl bg-gradient-to-br from-blue-400 via-fuchsia-600 to-cyan-200 text-transparent bg-clip-text md:text-left">
              Bintang Malindo Eka Putra
            </p>
          </div> */}
          <div>
            <p className="text-center text-gray-700 dark:text-gray-300 w-full px-4 md:px-0 flex items-center justify-center text-lg font-poppins-regular md:text-left md:justify-start">
              Website & Mobile Developer
            </p>
            <p className="text-center md:text-left max-w-[550px]">Checkout my <Link className="underline relative z-10 font-semibold" href="/portofolio">past works</Link> or learn more <Link className="underline relative z-10 font-semibold" href="/about">about me</Link>.</p>

            {/* <Typed
              className='text-center w-full px-4 md:px-0 flex items-center justify-center text-lg poppins-regular md:text-left md:justify-start'
              strings={[
                "An Informatics Engineering Student",
                "I Love Software Development",
                "Lets be Friend",
              ]}
              typeSpeed={50}
              backSpeed={70}
              loop
            /> */}
          </div>
        </div>
      </div>
      <CanvasControl
        clearCanvas={clearHandler}
        color={color}
        setColor={setColor}
      />
    </Main>
  );
}
