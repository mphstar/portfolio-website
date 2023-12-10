import React from "react";
import Main from "@/components/Template";
import Lottie from "lottie-react";
import animationData from "../components/lottie/maintenance.json";
import Image from "next/image";
import ContentAchievement from "@/components/ContentAchievement";

export default function achievements() {
  return (
    <Main selectedNav="Achievements" title="Mphstar | Achievements">
      <div className="flex flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center mb-8">
          <p className="font-semibold text-3xl">Achievements</p>
          <p>Here is a list of achievements that I have obtained:</p>
        </div>
        <div className="flex flex-col h-full gap-3">
          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"October 2023"}
            judul={
              "Certificate of Completion 2023 World Friends Korea IT Volunteer Program"
            }
            penerbit={"NIA (National Information Society Agency)"}
            keahlian={[
              "Front-End Development",
              "Back-End Development",
              "Database Administration",
              "User Interface Design",
            ]}
            foto={["/assets/sertif/knu.jfif"]}
          />

          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"August 2023"}
            judul={
              "Finalis Kompetisi Mahasiswa Bidang Informatika Politeknik Nasional V Kategori E-Government"
            }
            penerbit={"Politeknik Elektronika Negeri Surabaya"}
            keahlian={[
              "Leader Team",
              "Front-End Development",
              "Back-End Development",
              "Database Administration",
              "User Interface Design",
            ]}
            foto={["/assets/sertif/ehealth.jpg"]}
          />

          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"November 2022 - November 2025"}
            judul={
              "Junior Mobile Programmer"
            }
            penerbit={"Badan Nasional Sertifikasi Profesi (BNSP)"}
            keahlian={[
              "Mobile Application Development",
              "Flutter"
            ]}
            foto={["/assets/sertif/junior_mobile.jfif"]}
          />

<ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"June 2022"}
            judul={
              "Juara 1 Aplikasi Terbaik dalam Acara TIF Exhibition Semester Genap 2021/2022"
            }
            penerbit={"Politeknik Negeri Jember"}
            keahlian={[
              "Desktop Application Development",
              "Database Administration"
            ]}
            foto={["/assets/sertif/gandrung1.jpg", "/assets/sertif/gandrung2.jpg"]}
          />
        </div>
      </div>
    </Main>
  );
}
