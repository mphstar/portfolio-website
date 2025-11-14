import React, { useContext, useEffect } from "react";
import Main from "@/components/Template";
import Image from "next/image";
import Education from "@/components/Education";
import SpotifyContext from "@/utils/SpotifyContext";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { LettersPullUp } from "@/components/LettersPullUp";
import DiscordPresenceCard from "@/components/DiscordActivity";

const About = () => {

  const language = [
    {
      tooltipId: "my-tooltip",
      tooltipContent: "HTML",
      src: "/assets/icons/html.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "CSS",
      src: "/assets/icons/css.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "JavaScript",
      src: "/assets/icons/js.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Java",
      src: "/assets/icons/java.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "PHP",
      src: "/assets/icons/php.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Python",
      src: "/assets/icons/python.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Dart",
      src: "/assets/icons/dart.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
  ];

  const library = [
    {
      tooltipId: "my-tooltip",
      tooltipContent: "React",
      src: "/assets/icons/react.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Next JS",
      src: "/assets/icons/nextjs.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Laravel",
      src: "/assets/icons/laravel.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Node JS",
      src: "/assets/icons/nodejs.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Flutter",
      src: "/assets/icons/flutter.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Tailwind CSS",
      src: "/assets/icons/tailwind.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
  ];

  const multimedia = [
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Figma",
      src: "/assets/icons/figmaa.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Adobe After Effects",
      src: "/assets/icons/ae.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
    {
      tooltipId: "my-tooltip",
      tooltipContent: "Canva",
      src: "/assets/icons/canva.png",
      alt: "icons",
      width: 200,
      className: "object-fill w-fit h-[30px]",
      height: 200,
    },
  ];

  // console.log(data);

  return (
    <Main selectedNav="About" title="About | Mphstar">
      <Tooltip id="my-tooltip" />
      <div className="flex font-poppins-regular flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row gap-5">
            <motion.div
              className="order-0 md:order-1 h-full w-80"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
            >
              <Image
                className="md:w-full md:h-full h-48 w-48 rounded-full"
                height={400}
                width={400}
                src="/assets/foto.jpg"
                alt="profile"
              />
            </motion.div>
            <div>
              <LettersPullUp
                className="font-semibold text-3xl"
                text="About Me"
              />
              {/* <p className="poppins-semibold text-2xl bg-gradient-to-br from-blue-400 via-fuchsia-600 to-cyan-200 text-transparent bg-clip-text md:text-left">
                Bintang Malindo Eka Putra
              </p> */}
              <motion.p
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="mt-0"
              >
                I am{" "}
                <span className="font-poppins-semibold">
                  Bintang Malindo Eka Putra
                </span>
                , a 8th semester Informatics Engineering student from Jember
                State Polytechnic. I have a strong interest in{" "}
                <span className="bg-slate-200 dark:bg-slate-700">
                  Website and Mobile application development
                </span>
                .
                <br /> <br />I have work experience and am active in various
                activities. Able to work individually and in a team, have good
                analysis and planning, communicative, easy to adapt,
                enthusiastic to develop, and interested in learning new things.
              </motion.p>
            </div>
          </div>
          <div>
            <LettersPullUp
              className="font-semibold text-3xl mb-4 mt-12"
              text="Education"
            />
            <div className="flex flex-col gap-2">
              <Education
                school={"Jember State Polytechnic"}
                date={"2021 - Present"}
                position={
                  "Informatics Engineering (Current GPA: 3.92 out of 4.0)"
                }
              />
              <Education
                school={"Vocational High School 2 Jember"}
                date={"2018 - 2021"}
                position={"Computer and Network Engineering"}
              />
            </div>
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="mt-8 mb-6"
            >
              <p>
                Also, you can{" "}
                <a
                  href="https://drive.google.com/drive/folders/1u6Kxyd2lYPdmtzbMCBp9fzd5HNbjuCEW?usp=drive_link"
                  className="underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  read my resume here
                </a>
                . Anyway, thanks for visiting my profile :)
              </p>
            </motion.div>
          </div>
          <div>
            <LettersPullUp
              className="font-bold text-3xl mb-3 mt-2"
              text="Skills"
            />
            <LettersPullUp className="w-fit pb-2" text="Language" />

            <motion.div
              className="h-[3px] bg-black dark:bg-white"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "150px",
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
            />

            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {language.map((item, index) => (
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  }}
                  key={index}
                >
                  <Image
                    key={index}
                    data-tooltip-id={item.tooltipId}
                    data-tooltip-content={item.tooltipContent}
                    {...item}
                  />
                </motion.div>
              ))}
            </div>

            <LettersPullUp
              className="w-fit pb-2 mt-6"
              text="Framework and Library"
            />

            <motion.div
              className="h-[3px] bg-black dark:bg-white"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "150px",
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
            />

            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {library.map((item, index) => (
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  }}
                  key={index}
                >
                  <Image
                    key={index}
                    data-tooltip-id={item.tooltipId}
                    data-tooltip-content={item.tooltipContent}
                    {...item}
                  />
                </motion.div>
              ))}
            </div>

            <LettersPullUp
              className="w-fit pb-2 mt-6"
              text="Design and Multimedia"
            />

            <motion.div
              className="h-[3px] bg-black dark:bg-white"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "150px",
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
            />
            <div className="flex flex-row flex-wrap gap-2 mt-4">
              {multimedia.map((item, index) => (
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    },
                  }}
                  key={index}
                >
                  <Image
                    key={index}
                    data-tooltip-id={item.tooltipId}
                    data-tooltip-content={item.tooltipContent}
                    {...item}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-12"></div>
          <LettersPullUp
              className="font-bold text-3xl mb-3 mt-2"
              text="Current Activities"
            />

          <DiscordPresenceCard />

          <div className="h-12"></div>

        </div>
      </div>
    </Main>
  );
};

export default About;
