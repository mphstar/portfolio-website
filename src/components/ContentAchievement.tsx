import Image from "next/image";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LettersPullUp } from "./LettersPullUp";
import FullscreenImage from "./FullscreenImage";

const ContentAchievement = ({
  profile,
  tanggal,
  judul,
  penerbit,
  keahlian,
  foto,
}: {
  profile: string;
  tanggal: string;
  judul: string;
  penerbit: string;
  keahlian: string[];
  foto: string[];
}) => {
  return (
    <motion.div className="flex flex-row w-full gap-3">
      <div className="flex flex-col gap-3 items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            src={profile}
            alt="foto"
            width={39}
            height={39}
            fetchPriority="high"
            className="rounded-full flex"
          />
        </motion.div>
        <div className="w-[2px] flex flex-1 bg-slate-300 dark:bg-slate-700"></div>
      </div>
      <div className="flex flex-col w-full pb-12">
        <div className="flex flex-col">
          <LettersPullUp className="font-semibold" text="Bintang" />
          <LettersPullUp className="text-xs" text={tanggal.toString()} />
        </div>

        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-poppins-semibold mt-4"
        >
          {judul}
        </motion.h1>
        <p className="">{penerbit}</p>
        <div className="flex flex-row gap-2 flex-wrap mt-4">
          {keahlian.map((item: any, index: number) => (
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              key={index}
              className="border-2 px-2 py-1 text-xs rounded-md dark:border-slate-700"
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {foto.map((item: any, index: number) => (
            <FullscreenImage
              key={`${item}-${index}`}
              src={item}
              alt="sertif"
              className="mt-4 w-fit max-h-[340px] left-0 items-start object-contain border-2"
            />
          ))}
        </div>
        {/* <img className="mt-4 w-64 object-fill bg-red-500" src="https://media.licdn.com/dms/image/D562DAQEY63LS5r62kA/profile-treasury-image-shrink_1280_1280/0/1701407342742?e=1702778400&v=beta&t=DtDWztCF3qlt_oS6Zl0sK0tea2hv6CUx2Y4C9hwkUNc" alt="" /> */}
      </div>
    </motion.div>
  );
};

export default ContentAchievement;
