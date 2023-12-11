import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";
import SpotifyContext from "@/utils/SpotifyContext";

interface typeTitle {
  title: string;
  selectedNav: string;
}

export default function Navbar(props: typeTitle) {
  const { data } = useContext<any>(SpotifyContext);

  const { title, selectedNav } = props;
  const { theme, setTheme } = useTheme();

  const [statusDrawer, setStatus] = useState(false);
  const [icon, setIcon] = useState("/assets/icons/menu-white.png");
  const [mode, setMode] = useState("/assets/icons/sun.png");

  useEffect(() => {
    window.addEventListener("resize", function () {
      setStatus(false);
    });

    if (theme === "dark") {
      setIcon("/assets/icons/menu-white.png");
      setMode("/assets/icons/sun.png");
    } else {
      setIcon("/assets/icons/menu-black.png");
      setMode("/assets/icons/dark.svg");
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <>
      <div
        onClick={(prev) => setStatus(!prev)}
        className={`bg-black transition  z-[101] h-screen w-screen fixed bottom-0 ${
          statusDrawer
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`flex justify-between fixed duration-300 w-full ${
          !statusDrawer ? "bg-bg-light dark:bg-bg-dark" : ""
        } items-center z-[101] py-1`}
      >
        {/* burger */}
        <div
          onClick={() => {
            setStatus(!statusDrawer);
          }}
          className="px-4 ml-4 py-2 order-1 md:hidden rounded-md md:hover:bg-slate-200 cursor-default md:dark:hover:bg-slate-700"
        >
          <Image src={icon} className="" width={18} height={18} alt="burger" />
        </div>
        <div
          className={`${
            statusDrawer
              ? "duration-700 translate-x-0 px-4"
              : "-translate-x-[250px] md:translate-x-0 duration-700"
          } w-60 md:duration-[0ms]  fixed top-0 h-screen z-[200] md:h-fit md:static md:order-2 md:flex md:w-fit bg-bg-light dark:bg-bg-dark md:bg-transparent dark:md:bg-transparent overflow-x-hidden`}
        >
          <div className="flex flex-col justify-between h-full overflow-y-auto">
            <ul className={`flex flex-col mt-2 md:mt-0 md:flex-row md:gap-4`}>
              <div className="flex flex-col h-fit w-full mt-8   md:hidden">
                <div className="flex flex-col h-fit justify-start items-start overflow-hidden w-40">
                  <Image
                    src={"/assets/foto.jpg"}
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full w-24 overflow-hidden h-24"
                  />
                  {/* <p className='poppins-semibold text-blue-900 text-sm mt-2 dark:text-white'>@Mphstar._</p> */}
                </div>
              </div>
              <p className="font-poppins-semibold text-sm overflow-hidden md:hidden w-full mt-4 text-gray-800 dark:text-gray-50">
                Bintang Malindo Eka Putra
              </p>
              <p className="font-poppins-regular text-xs overflow-hidden md:hidden w-full mb-3 text-gray-400">
                Website & Mobile Developer
              </p>
              {/* <div className='h-[1px] w-full bg-gray-300 dark:bg-gray-600 mb-4 md:hidden'></div> */}
              <li
                className={
                  selectedNav == "Home"
                    ? "text-blue-700 font-semibold border-b-2 border-b-blue-700 py-2  dark:text-blue-400 dark:border-b-blue-400"
                    : " rounded-md py-2 w-full "
                }
              >
                <Link className="w-full flex h-full" key="home" href="/">
                  Home
                </Link>
              </li>
              <li
                className={
                  selectedNav == "Portfolio"
                    ? "text-blue-700 font-semibold  border-b-2 border-b-blue-700 py-2  dark:text-blue-400 dark:border-b-blue-400"
                    : " rounded-md py-2 w-full "
                }
              >
                <Link
                  className="w-ful flex h-full"
                  key="portofolio"
                  href="/portofolio"
                >
                  Portofolio
                </Link>
              </li>
              <li
                className={
                  selectedNav == "Achievements"
                    ? "text-blue-700 font-semibold  border-b-2 border-b-blue-700 py-2  dark:text-blue-400 dark:border-b-blue-400"
                    : " rounded-md py-2 w-full "
                }
              >
                <Link
                  className="w-full flex h-full"
                  key="achievements"
                  href="/achievements"
                >
                  Achievements
                </Link>
              </li>
              <li
                className={
                  selectedNav == "About"
                    ? "text-blue-700 font-semibold  border-b-2 border-b-blue-700 py-2  dark:text-blue-400 dark:border-b-blue-400"
                    : " rounded-md py-2 w-full "
                }
              >
                <Link className="w-full flex h-full" key="about" href="/about">
                  About
                </Link>
              </li>
              <li
                className={
                  selectedNav == "Contact"
                    ? "text-blue-700 font-semibold  border-b-2 border-b-blue-700 py-2  dark:text-blue-400 dark:border-b-blue-400"
                    : " rounded-md py-2 w-full "
                }
              >
                <Link
                  className="w-full flex h-full"
                  key="contact"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {data?.isPlaying ? (
              <div className="flex flex-col mb-8 w-full md:hidden">
                <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-600 mb-4"></div>
                <p className="poppins-regular text-sm overflow-hidden text-gray-400 flex flex-row h-fit w-40">
                  {data?.isPlaying
                    ? "Listening To Spotify"
                    : "Recently Played Songs"}
                </p>
                <div className="flex flex-row gap-2 mt-2 w-40">
                  <img
                    src={data?.albumImageUrl}
                    alt={data?.album}
                    className="object-cover w-10 rounded-sm"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="poppins-semibold text-xs overflow-hidden flex flex-row h-fit w-40">
                      {data?.artist}
                    </p>
                    <p className="poppins-regular text-xs overflow-hidden flex flex-row h-fit w-40">
                      {data?.title}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className=" md:ml-8 px-4 py-2 order-2 md:order-1 h-full relative rounded-md cursor-default dark:hover:bg-slate-700">
          <p className="Virgil">{title}</p>
          <div className="absolute w-12 bg-blue-200 dark:bg-blue-900 rounded-md top-2 -rotate-6 left-10 h-6 -z-10"></div>
        </div>
        {/* set theme */}
        <div
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="mr-4 md:mr-8 px-4 py-2 order-3 md:hover:bg-slate-200 rounded-md cursor-default md:dark:hover:bg-slate-700"
        >
          <Image
            className="dark:fill-white"
            width={18}
            height={18}
            src={mode}
            alt="burger"
          />
        </div>
      </div>
    </>
  );
}
