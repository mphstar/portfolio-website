import React from "react";
import Main from "@/components/Template";
import Image from "next/image";
import Education from "@/components/Education";

const about = () => {
  return (
    <Main selectedNav="About" title="About | Mphstar">
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
              <p className="font-bold text-3xl">About Me</p>
              {/* <p className="poppins-semibold text-2xl bg-gradient-to-br from-blue-400 via-fuchsia-600 to-cyan-200 text-transparent bg-clip-text md:text-left">
                Bintang Malindo Eka Putra
              </p> */}
              <p className="mt-0">
                I am Bintang Malindo Eka Putra, a 5th semester Informatics
                Engineering student from Jember State Polytechnic. I have a
                strong interest in Website and Mobile application development. I
                have work experience and am active in various activities. Able
                to work individually and in a team, have good analysis and
                planning, communicative, easy to adapt, enthusiastic to develop,
                and interested in learning new things.
              </p>
            </div>
          </div>

          <br />
          <p className="font-bold text-3xl mb-3">Education</p>
          <div className="flex flex-col gap-2">
            <Education
              school={"Politeknik Negeri Jember"}
              date={"2021 - Current"}
              position={
                "Informatics Engineering (Current GPA: 3.92 out of 4.0)"
              }
            />
            <Education
              school={"SMKN 2 Jember"}
              date={"2019 - 2021"}
              position={"Computer and Network Engineering"}
            />
          </div>

          <div className="mt-8">
            <p>
              Also, you can{" "}
              <a
                href="/resume"
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                read my resume here
              </a>
              . Anyway, thanks for visiting my profile :)
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default about;
