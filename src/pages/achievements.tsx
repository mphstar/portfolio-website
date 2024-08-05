"use client";

import React, { useState } from "react";
import Main from "@/components/Template";
import Lottie from "lottie-react";
import animationData from "../components/lottie/maintenance.json";
import Image from "next/image";
import ContentAchievement from "@/components/ContentAchievement";

export default function Achievements() {
  const [page, setPage] = useState(1);

  return (
    <Main selectedNav="Achievements" title="Achievements | @Mphstar">
      <div className="flex flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center mb-8">
          <p className="font-semibold text-3xl">Achievements</p>
          <p>Here is a list of achievements that I have obtained:</p>
        </div>
        <div className="flex flex-col h-full w-full gap-3">
          
          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"February 2024 - February 2027"}
            judul={"Belajar Membuat Front-End Web untuk Pemula"}
            penerbit={"Dicoding Indonesia"}
            keahlian={["Front-End Development"]}
            foto={["/assets/sertif/sertif_frontend_pemula.jpg"]}
          />

          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"February 2024 - February 2027"}
            judul={"Belajar Dasar Pemrograman JavaScript"}
            penerbit={"Dicoding Indonesia"}
            keahlian={["Pemrograman Dasar"]}
            foto={["/assets/sertif/belajar_dasar_pemrograman_javascript.jpg"]}
          />

          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"February 2024 - February 2027"}
            judul={"Belajar Dasar Pemrograman Web"}
            penerbit={"Dicoding Indonesia"}
            keahlian={["HTML Dasar"]}
            foto={["/assets/sertif/belajar_dasar_pemrograman_web.jpg"]}
          />

          <ContentAchievement
            profile="/assets/foto.jpg"
            tanggal={"January 2024 - January 2026"}
            judul={"Alibaba Cloud Certified Developers"}
            penerbit={"Alibaba Cloud"}
            keahlian={["Front-End Development", "Back-End Development"]}
            foto={["/assets/sertif/alibaba.jfif"]}
          />
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

          {page > 1 && (
            <>
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
                judul={"Junior Mobile Programmer"}
                penerbit={"Badan Nasional Sertifikasi Profesi (BNSP)"}
                keahlian={["Mobile Application Development", "Flutter"]}
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
                  "Database Administration",
                ]}
                foto={[
                  "/assets/sertif/gandrung1.jpg",
                  "/assets/sertif/gandrung2.jpg",
                ]}
              />

              <ContentAchievement
                profile="/assets/foto.jpg"
                tanggal={"January 2022"}
                judul={
                  "Juara 2 Aplikasi Terbaik dalam Acara TIF Exhibition Semester Ganjil 2021/2022"
                }
                penerbit={"Politeknik Negeri Jember"}
                keahlian={[
                  "Leader Team",
                  "Desktop Application Development",
                  "Database Administration",
                  "User Interface Design",
                ]}
                foto={["/assets/sertif/tokosa.jpg"]}
              />
              <ContentAchievement
                profile="/assets/foto.jpg"
                tanggal={"June 2021"}
                judul={
                  "Peserta IT Network System Administration Lomba Kompetensi Siswa (LKS) SMK Tingkat Provinsi Jawa Timur"
                }
                penerbit={"Dinas Pendidikan Provinsi Jawa Timur"}
                keahlian={["Server Administration", "Network Administration"]}
                foto={["/assets/sertif/lksprov.jpeg"]}
              />
            </>
          )}

          {page > 2 && (
            <ContentAchievement
              profile="/assets/foto.jpg"
              tanggal={"November 2020"}
              judul={"Juara 3 Lomba IT (Jaringan) Tingkat SMK Se-Jawa Timur"}
              penerbit={"Politeknik Negeri Jember"}
              keahlian={["Server Administration", "Network Administration"]}
              foto={["/assets/sertif/lombait.jpeg"]}
            />
          )}
        </div>
        {page <= 2 && (
          <button
            onClick={() => setPage(page + 1)}
            className="flex px-3 py-2 border-2 dark:border-gray-600 mt-6 rounded-md hover:bg-slate-900 hover:text-white duration-300 ease-in-out"
          >
            Load More
          </button>
        )}
      </div>
    </Main>
  );
}
