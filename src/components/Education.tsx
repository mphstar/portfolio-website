import React from "react";

import { IoIosSchool } from "react-icons/io";
import { motion } from "framer-motion";
import { LettersPullUp } from "./LettersPullUp";

const Education = ({
  school,
  date,
  position,
}: {
  school: String;
  date: String;
  position: String;
}) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-center gap-1">
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="w-8 h-fit py-1  flex items-center flex-col justify-center rounded-md bg-blue-500"
        >
          <IoIosSchool color="white" />
        </motion.div>
        <motion.div initial={{
          height: 0,
        }} whileInView={{
          height: "100%",
          transition: {
            duration: 0.5,
            delay: 0.2,
          }
        }} className=" w-[2px] bg-black"></motion.div>
      </div>
      <div className="w-full flex flex-col flex-1 pb-4">
        <LettersPullUp
          text={school.toString()}
          className="font-poppins-semibold"
        />
        <motion.p
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="text-sm"
        >
          {date}
        </motion.p>
        <motion.p
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.2,
            },
          }}
          className="text-sm"
        >
          {position}
        </motion.p>
      </div>
    </div>
  );
};

export default Education;
