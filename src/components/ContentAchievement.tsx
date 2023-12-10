import Image from "next/image";

import React from "react";

const ContentAchievement = ({
  profile,
  tanggal,
  judul,
  penerbit,
  keahlian,
  foto,
}: {
  profile: string;
  tanggal: String;
  judul: String;
  penerbit: String;
  keahlian: any;
  foto: any;
}) => {
  return (
    <div className="flex flex-row w-full gap-3">
      <div className="flex flex-col gap-3 items-center">
        <Image
          src={profile}
          alt="foto"
          width={39}
          height={39}
          className="rounded-full flex"
        />
        <div className="w-[2px] flex flex-1 bg-slate-300 dark:bg-slate-700"></div>
      </div>
      <div className="flex flex-col w-full pb-12">
        <div className="flex flex-col">
          <p>Bintang</p>
          <p className="text-xs">{tanggal}</p>
        </div>

        <h1 className="font-poppins-semibold mt-4">{judul}</h1>
        <p className="">{penerbit}</p>
        <div className="flex flex-row gap-2 flex-wrap mt-4">
          {keahlian.map((item: any) => (
            <div className="border-2 px-2 py-1 text-xs rounded-md dark:border-slate-700">{item}</div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          {foto.map((item: any) => (
            <Image
              src={item}
              alt="sertif"
              width={500}
              height={500}
              className="mt-4 w-fit max-h-[340px] left-0 items-start object-contain border-2"
            />
          ))}
        </div>
        {/* <img className="mt-4 w-64 object-fill bg-red-500" src="https://media.licdn.com/dms/image/D562DAQEY63LS5r62kA/profile-treasury-image-shrink_1280_1280/0/1701407342742?e=1702778400&v=beta&t=DtDWztCF3qlt_oS6Zl0sK0tea2hv6CUx2Y4C9hwkUNc" alt="" /> */}
      </div>
    </div>
  );
};

export default ContentAchievement;
