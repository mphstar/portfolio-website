import React from "react";

import { IoIosSchool } from "react-icons/io";

const Education = ({school, date, position}: {school: String, date: String, position: String}) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 flex items-center flex-col justify-center rounded-full bg-blue-500">
          <IoIosSchool color="white" />
        </div>
        <div className="h-full flex-1 w-[2px] bg-black"></div>
      </div>
      <div className="w-full flex flex-col flex-1 pb-4">
        <p className="font-poppins-semibold">{school}</p>
        <p className="text-sm">{date}</p>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Education;
