export type AchievementItem = {
  profile: string;
  tanggal: string;
  judul: string;
  penerbit: string;
  keahlian: string[];
  foto: string[];
};

const achievements: AchievementItem[] = [
  {
    profile: "/assets/foto.jpg",
    tanggal: "February 2024 - February 2027",
    judul: "Belajar Membuat Front-End Web untuk Pemula",
    penerbit: "Dicoding Indonesia",
    keahlian: ["Front-End Development"],
    foto: ["/assets/sertif/sertif_frontend_pemula.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "February 2024 - February 2027",
    judul: "Belajar Dasar Pemrograman JavaScript",
    penerbit: "Dicoding Indonesia",
    keahlian: ["Pemrograman Dasar"],
    foto: ["/assets/sertif/belajar_dasar_pemrograman_javascript.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "February 2024 - February 2027",
    judul: "Belajar Dasar Pemrograman Web",
    penerbit: "Dicoding Indonesia",
    keahlian: ["HTML Dasar"],
    foto: ["/assets/sertif/belajar_dasar_pemrograman_web.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "January 2024 - January 2026",
    judul: "Alibaba Cloud Certified Developers",
    penerbit: "Alibaba Cloud",
    keahlian: ["Front-End Development", "Back-End Development"],
    foto: ["/assets/sertif/alibaba.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "October 2023",
    judul: "Certificate of Completion 2023 World Friends Korea IT Volunteer Program",
    penerbit: "NIA (National Information Society Agency)",
    keahlian: [
      "Front-End Development",
      "Back-End Development",
      "Database Administration",
      "User Interface Design",
    ],
    foto: ["/assets/sertif/knu.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "August 2023",
    judul:
      "Finalis Kompetisi Mahasiswa Bidang Informatika Politeknik Nasional V Kategori E-Government",
    penerbit: "Politeknik Elektronika Negeri Surabaya",
    keahlian: [
      "Leader Team",
      "Front-End Development",
      "Back-End Development",
      "Database Administration",
      "User Interface Design",
    ],
    foto: ["/assets/sertif/ehealth.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "November 2022 - November 2025",
    judul: "Junior Mobile Programmer",
    penerbit: "Badan Nasional Sertifikasi Profesi (BNSP)",
    keahlian: ["Mobile Application Development", "Flutter"],
    foto: ["/assets/sertif/junior_mobile.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "June 2022",
    judul: "Juara 1 Aplikasi Terbaik dalam Acara TIF Exhibition Semester Genap 2021/2022",
    penerbit: "Politeknik Negeri Jember",
    keahlian: ["Desktop Application Development", "Database Administration"],
    foto: ["/assets/sertif/gandrung1.jpg", "/assets/sertif/gandrung2.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "January 2022",
    judul: "Juara 2 Aplikasi Terbaik dalam Acara TIF Exhibition Semester Ganjil 2021/2022",
    penerbit: "Politeknik Negeri Jember",
    keahlian: [
      "Leader Team",
      "Desktop Application Development",
      "Database Administration",
      "User Interface Design",
    ],
    foto: ["/assets/sertif/tokosa.jpg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "June 2021",
    judul:
      "Peserta IT Network System Administration Lomba Kompetensi Siswa (LKS) SMK Tingkat Provinsi Jawa Timur",
    penerbit: "Dinas Pendidikan Provinsi Jawa Timur",
    keahlian: ["Server Administration", "Network Administration"],
    foto: ["/assets/sertif/lksprov.jpeg"],
  },
  {
    profile: "/assets/foto.jpg",
    tanggal: "November 2020",
    judul: "Juara 3 Lomba IT (Jaringan) Tingkat SMK Se-Jawa Timur",
    penerbit: "Politeknik Negeri Jember",
    keahlian: ["Server Administration", "Network Administration"],
    foto: ["/assets/sertif/lombait.jpeg"],
  },
];

export default achievements;
