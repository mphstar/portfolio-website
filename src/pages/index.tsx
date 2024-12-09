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
import Head from "next/head";

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
      <Head>
        {/* add canonical */}
        <link rel="canonical" href="https://www.mphstar.me" />
      </Head>
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ zIndex: 5 }}
        canvasColor="transparent"
        className="bg-transparent absolute top-0 left-0 w-full cursor-pencil dark:cursor-pencil-dark"
        strokeWidth={5}
        strokeColor={color}
      />
      <div className="flex flex-col w-full h-full flex-1 mt-24 md:items-center items-center justify-center md:justify-start md:flex-row md:gap-12 select-none">
        <Image
          className="h-fit w-96 order-1 fixed bottom-0 z-[0] dark:opacity-70 md:hidden pointer-events-none"
          height={800}
          width={800}
          src="/assets/girl.png"
          alt="profile"
        />
        <div className="hidden md:flex px-8 md:pl-12 relative">
          <div className="h-full flex justify-center absolute left-0 -translate-y-20 md:left-4 z-[2] items-center">
            <img
              className="h-20 rotate-[-6deg] drop-shadow-2xl"
              src="/assets/kamera.png"
              alt="Kamera"
            />
          </div>
          <div className="bg-red-400 hidden md:flex rotate-[-4deg] text-white px-3 py-1 rounded-md absolute z-[3] right-0 translate-x-24 top-20">
            Front-End Developer
          </div>
          <div className="bg-blue-400 hidden md:flex rotate-[3deg] text-white px-3 py-1 rounded-md absolute z-[3] right-0 translate-x-24 top-36">
            Mobile Developer
          </div>
          <div className="flex z-[1]">
            <div className="md:flex bg-blue-300 absolute hidden md:left-12 top-0 p-6 rotate-[0deg] rounded-md drop-shadow md:drop-shadow-xl flex-col">
              <Image
                className="h-fit w-60 border-2"
                height={800}
                width={800}
                src="/assets/kaoruko.gif"
                alt="profile"
              />
              <p className="mt-3 font-poppins-regular">Mphstar.jpg</p>
            </div>
            <div className="flex bg-white p-6 rotate-[6deg] rounded-md drop-shadow md:drop-shadow-xl flex-col">
              <Image
                className="h-fit w-60 border-2 border-[#c8c6c6]"
                height={800}
                width={800}
                src="/assets/kaoruko.gif"
                alt="profile"
              />
              <p className="mt-3 font-poppins-regular dark:text-bg-dark">
                Mphstar.jpg
              </p>
            </div>
          </div>
        </div>
        <div className="order-2 flex flex-col justify-center rounded-md px-4 py-5 flex-1">
          <div className="mt-4 mb-3 z-[10]">
            <p className="text-start md:text-center font-semibold Virgil text-3xl md:text-5xl">
              <b>Hi.</b> I'm Bintang
            </p>
          </div>
          {/* <div>
            <p className="poppins-semibold text-center text-2xl bg-gradient-to-br from-blue-400 via-fuchsia-600 to-cyan-200 text-transparent bg-clip-text md:text-center">
              Bintang Malindo Eka Putra
            </p>
          </div> */}
          <div>
            <div className="md:text-center text-gray-700 relative dark:text-gray-300 w-full md:px-4 text-xs flex md:items-center md:text-base font-poppins-regular md:justify-center z-[10]">
              Website & Mobile Developer ✨
            </div>
            <div className="text-start md:text-center text-sm md:text-base relative z-10 max-w-[550px]">
              Checkout my{" "}
              <Link
                className="underline relative z-10 font-semibold"
                href="/portofolio"
              >
                past works
              </Link>{" "}
              or learn more{" "}
              <Link
                className="underline relative z-10 font-semibold"
                href="/about"
              >
                about me
              </Link>
              .
            </div>
            <div className="flex md:hidden mt-4 z-[10]">
              <CanvasControl
                clearCanvas={clearHandler}
                color={color}
                setColor={setColor}
              />
            </div>

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
      <div className="hidden md:flex">
        <CanvasControl
          clearCanvas={clearHandler}
          color={color}
          setColor={setColor}
        />
      </div>
    </Main>
  );
}
