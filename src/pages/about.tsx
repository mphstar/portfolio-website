import React, { useContext } from "react";
import Main from "@/components/Template";
import Image from "next/image";
import Education from "@/components/Education";
import { SpotifyContext, useSpotify } from "@/utils/SpotifyContext";
import { Tooltip } from "react-tooltip";

const about = () => {
  const spotify = useSpotify();
  const { data } = spotify;

  // console.log(data);

  return (
    <Main selectedNav="About" title="About | Mphstar">
      <Tooltip id="my-tooltip" />
      <div className="flex font-poppins-regular flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row gap-5">
            <Image
              className="h-fit w-32 order-0 md:order-1 rounded-full"
              height={400}
              width={400}
              src="/assets/foto.jpg"
              alt="profile"
            />
            <div>
              <p className="font-bold text-3xl mb-3">About Me</p>
              {/* <p className="poppins-semibold text-2xl bg-gradient-to-br from-blue-400 via-fuchsia-600 to-cyan-200 text-transparent bg-clip-text md:text-left">
                Bintang Malindo Eka Putra
              </p> */}
              <p className="mt-0">
                I am{" "}
                <span className="font-poppins-semibold">
                  Bintang Malindo Eka Putra
                </span>
                , a 5th semester Informatics Engineering student from Jember
                State Polytechnic. I have a strong interest in{" "}
                <span className="bg-slate-200 dark:bg-slate-700">
                  Website and Mobile application development
                </span>
                .
                <br /> <br />I have work experience and am active in various
                activities. Able to work individually and in a team, have good
                analysis and planning, communicative, easy to adapt,
                enthusiastic to develop, and interested in learning new things.
              </p>
            </div>
          </div>
          <p className="font-bold text-3xl mb-3 mt-4">Education</p>
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
          <div className="mt-8 mb-6">
            <p>
              Also, you can{" "}
              <a
                href="%"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                read my resume here
              </a>
              . Anyway, thanks for visiting my profile :)
            </p>
          </div>

          <p className="font-bold text-3xl mb-3 mt-2">Skills</p>
          <p className="border-b-[3px] pb-2 w-fit pr-12 border-b-slate-600 mb-4 dark:border-b-white">
            Language
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="HTML"
              src={"/assets/icons/html.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="CSS"
              src={"/assets/icons/css.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="JavaScript"
              src={"/assets/icons/js.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Java"
              src={"/assets/icons/java.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="PHP"
              src={"/assets/icons/php.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Python"
              src={"/assets/icons/python.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Dart"
              src={"/assets/icons/dart.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
          </div>

          <p className="border-b-[3px] pb-2 w-fit mt-6 pr-12 border-b-slate-600 mb-4 dark:border-b-white">
            Framework and Library
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="React"
              src={"/assets/icons/react.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Next JS"
              src={"/assets/icons/nextjs.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Laravel"
              src={"/assets/icons/laravel.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Node JS"
              src={"/assets/icons/nodejs.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Flutter"
              src={"/assets/icons/flutter.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Tailwind CSS"
              src={"/assets/icons/tailwind.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
          </div>
          <p className="border-b-[3px] pb-2 w-fit mt-6 pr-12 border-b-slate-600 mb-4 dark:border-b-white">
            Design and Multimedia
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Figma"
              src={"/assets/icons/figmaa.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Adobe After Effects"
              src={"/assets/icons/ae.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />

            <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Canva"
              src={"/assets/icons/canva.png"}
              alt="icons"
              width={200}
              className="object-fill w-fit h-[30px]"
              height={200}
            />
          </div>

          <p className="font-bold text-3xl mb-3 mt-12">Now Playing</p>
          <p>See what i'm currently listening on spotify</p>
          <div className="flex flex-row gap-4 p-2 mb-8 mt-4 rounded-lg border-dotted dark:border-slate-700 w-full border-2">
            {data?.isPlaying ? (
              <Image
                width={300}
                height={300}
                className="object-cover w-20 h-20 rounded-md"
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            ) : (
              <div className="bg-slate-300 w-20 h-20 rounded-md"></div>
            )}

            <div className="flex flex-col justify-center w-full">
              {data?.isPlaying ? (
                <>
                  <p className="poppins-semibold text-sm overflow-hidden flex flex-row h-fit w-full">
                    {data?.artist}
                  </p>
                  <p className="poppins-regular text-sm overflow-hidden flex flex-row h-fit w-full">
                    {data?.title}
                  </p>
                </>
              ) : (
                <p>Not Listening to anything</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default about;
