import SelectionTech from "@/utils/SelectionTech";
import { redirect } from "next/dist/server/api-utils";

const data = [
  {
    image: "/assets/projects/tokosa.png",
    title: "Toko SA",
    deskripsi:
      "Desktop-based Point of Sale application to make it easier to manage the sale of goods.",
    github: "https://github.com/mphstar/toko-sa.git",
    build: [SelectionTech.Netbeans, SelectionTech.Mysql, SelectionTech.Java],
    redirect: null,
  },
  {
    image: "/assets/projects/sigandrung.png",
    title: "Sistem Informasi Gandrung",
    deskripsi:
      "Design and develop a desktop-based Mie Gandrung restaurant Point of Sale system.",
    github: null,
    build: [SelectionTech.Netbeans, SelectionTech.Mysql, SelectionTech.Java],
    redirect: "https://youtu.be/AMyqNpLCHOQ",
  },
  {
    image: "/assets/projects/wgoptical.png",
    title: "WG Optical",
    deskripsi:
      "ERP system for optics with a home service system equipped with transaction, inventory, finance, personnel and distribution modules.",
    github: "https://github.com/mphstar/wg-optical.git",
    build: [
      SelectionTech.Flutter,
      SelectionTech.PHP,
      SelectionTech.Mysql,
      SelectionTech.Tailwindcss,
    ],
    redirect: "https://wgoptical.mphstar.my.id/",
  },
  {
    image: "/assets/projects/tijara.png",
    title: "Tijara Store",
    deskripsi:
      "Website and mobile based Point of Sales application for Tijara boutique in Banyuwangi.",
    github: "https://github.com/mphstar/tijara-store-website.git",
    build: [
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.Tailwindcss,
      SelectionTech.Java,
    ],
    redirect: "https://tijara.mphstar.my.id/",
  },
  {
    image: "/assets/projects/gacha.png",
    title: "Gacha Anime",
    deskripsi: "Simple app for anime character gacha.",
    github: "https://github.com/mphstar/xrlsnime.git",
    build: [SelectionTech.Nextjs, SelectionTech.Tailwindcss],
    redirect: "https://xrlsnime.vercel.app/",
  },
  {
    image: "/assets/projects/ehealth.png",
    title: "E-Health",
    deskripsi:
      "The E-Health system is a health facility owned by the Jember Regency Government which has several features including online queue registration specifically for outpatient care at Puskesmas and Hospitals owned by the Jember Regency government, information on the distribution of Health Facility locations, complaint services, queue monitoring, and information. ",
    github: null,
    build: [
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.Tailwindcss,
    ],
    redirect: "https://ehealth.mphstar.my.id/",
  },
  {
    image: "/assets/projects/kiosk.png",
    title: "Gesture Recognition Technology based Kiosk",
    deskripsi:
      "Point of Sale website with the addition of Gesture Recognition to be able to control just by moving your hand on the camera sensor. After making a transaction, the transaction note will be printed automatically. Has admin access rights that can add, change, delete items displayed, as well as view the entire transaction history.",
    github: "https://github.com/mphstar/gesture-recognition-kiosk.git",
    build: [SelectionTech.React, SelectionTech.Mysql, SelectionTech.Python],
    redirect: null,
  },
  {
    image: "/assets/projects/realtime-chat.png",
    title: "Realtime Group Chatting",
    deskripsi: "Simple app for Group Chatting",
    github: "https://github.com/mphstar/realtime-chat.git",
    build: [SelectionTech.Python, SelectionTech.Tailwindcss],
    redirect: null,
  },
  {
    image: "/assets/projects/pdp.png",
    title: "PDP Jember",
    deskripsi:
      "Decision support system for selecting plants based on soil content based on a Geographic Information System using the Learning Vector Quantization method.",
    github: "https://github.com/mphstar/pdp-gis.git",
    build: [
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.Tailwindcss,
    ],
    redirect: "https://pdp-jember.com",
  },
  {
    image: "/assets/projects/cf.png",
    title: "CF Warehouse Polije",
    deskripsi:
      "Dataset storage platform that allows users to upload, view, and download datasets in various formats.",
    github: "https://github.com/mphstar/cf-warehouse-polije.git",
    build: [
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.Tailwindcss,
    ],
    redirect: "https://cfwarehouse.wsmif.id/",
  },
  {
    image: "/assets/projects/toxic.webp",
    title: "Toxic Classification",
    deskripsi: "Detect comments that contain elements of abusive language",
    github: "https://github.com/mphstar/toxic-classification-naive-bayes.git",
    build: [SelectionTech.Python, SelectionTech.ExpressJS],
    redirect: null,
  },
  {
    image: "/assets/projects/mbkm.png",
    title: "Sistem MBKM Polije",
    deskripsi: "MBKM information system for Jember State Polytechnic Students",
    github: null,
    build: [SelectionTech.Laravel, SelectionTech.Mysql],
    redirect: "https://mbkm.polije.ac.id/",
  },
  {
    image: "/assets/projects/jetnime.jpeg",
    title: "Jetnime",
    deskripsi:
      "Simple app for list Anime. This project created for Submission course in dicoding.com",
    github: "https://github.com/mphstar/jetnime-app.git",
    build: [SelectionTech.Kotlin],
    redirect: null,
  },
  {
    image: "/assets/projects/note.png",
    title: "Notepad React",
    deskripsi:
      "Simple app notepad in Website. This project created for Submission course in dicoding.com",
    github: "https://github.com/mphstar/note-react-app.git",
    build: [SelectionTech.React, SelectionTech.Tailwindcss],
    redirect: "https://note-react-app-eosin.vercel.app/",
  },
  {
    image: "/assets/projects/lapor.png",
    title: "Lapor App FKIP Universitas Jember",
    deskripsi:
      "Website and Mobile Application faculty Report Universitas Jember",
    github: null,
    build: [
      SelectionTech.Flutter,
      SelectionTech.Inertia,
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.React,
      SelectionTech.Tailwindcss,
    ],
    redirect: "https://lapor.fkipunej.my.id/",
  },
  {
    image: "/assets/projects/ssc.png",
    title: "SSC SMASA 2024",
    deskripsi: "Science School Competition 2024 SMA Negeri 1 Jember",
    github: null,
    build: [
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.Bootstrap,
    ],
    redirect: "https://sscxxiv.com",
  },
  {
    image: "/assets/projects/sarpras.png",
    title: "E-Sarpras FKIP Universitas Jember",
    deskripsi:
      "Aplikasi website untuk peminjaman barang ataupun ruangan pada Fakultas Keguruan dan Keilmuan Universitas Jember.",
    github: null,
    build: [
      SelectionTech.Tailwindcss,
      SelectionTech.Mysql,
      SelectionTech.Laravel,
      SelectionTech.Inertia,
    ],
    redirect: "https://sarpras.fkipunej.my.id/",
  },
  {
    image: "/assets/projects/howa.png",
    title: "Howardle Dsy",
    deskripsi: "Implementasi UI Design Howardle Dsy to Website.",
    github: "https://github.com/mphstar/howardle-dsy.git",
    build: [SelectionTech.React, SelectionTech.Tailwindcss],
    redirect: "https://howardle-dsy.vercel.app/",
  },
  {
    image: "/assets/projects/ai.png",
    title: "Mphstar AI",
    deskripsi: "Integrate with Gemini AI API.",
    github: "https://github.com/mphstar/mphstar-ai.git",
    build: [SelectionTech.React, SelectionTech.Tailwindcss],
    redirect: "https://mphstar-ai.vercel.app/",
  },
  {
    image: "/assets/projects/sck.png",
    title: "SCK-CO",
    deskripsi:
      "Website Marketplace  & product documentation with payment getway and dashboard admin develop by diprojectin",
    github: null,
    build: [
      SelectionTech.React,
      SelectionTech.Tailwindcss,
      SelectionTech.Laravel,
      SelectionTech.Mysql,
    ],
    redirect: "https://sckco.mphstar.my.id/",
  },
  {
    image: "/assets/projects/esystem.png",
    title: "E-System",
    deskripsi:
      "Website Marketplace  & product documentation with payment getway and dashboard admin develop by diprojectin",
    github: null,
    build: [SelectionTech.Nextjs, SelectionTech.Tailwindcss],
    redirect: "https://e-system-website.vercel.app/",
  },
  {
    image: "/assets/projects/ksuli.png",
    title: "K-Suli SIBI",
    deskripsi:
      "Learning SIBI with K-Suli. Detection Hand Sign using Deep Learning.",
    github: null,
    build: [
      SelectionTech.React,
      SelectionTech.Tailwindcss,
      SelectionTech.Python,
    ],
    redirect: "https://ksuli-sibi.vercel.app/",
  },
  {
    image: "/assets/projects/safepath.png",
    title: "Safepath",
    deskripsi:
      "Mapping of crime and accidents in Jember city. This project created for competition Hackaton & Smart City Gemastik",
    github: "https://github.com/mphstar/safepath",
    build: [
      SelectionTech.React,
      SelectionTech.Tailwindcss,
      SelectionTech.Python,
    ],
    redirect: "https://safepath.mphstar.my.id/",
  },
  {
    image: "/assets/projects/jvims.png",
    title: "J-ViMS",
    deskripsi:
      "Website and mobile application for managing tourist tickets in Jember city",
    github: null,
    build: [
      SelectionTech.React,
      SelectionTech.Tailwindcss,
      SelectionTech.Laravel,
      SelectionTech.Mysql,
    ],
    redirect: "https://j-vims.com/",
  },
  {
    image: "/assets/projects/diteras.png",
    title: "D-Teras",
    deskripsi: "Point of Sale Website for D-Teras",
    github: null,
    build: [SelectionTech.Laravel, SelectionTech.Mysql],
    redirect: null,
  },
  {
    image: "/assets/projects/ncv.png",
    title: "NCV Studio",
    deskripsi:
      "Official website of NCV Studio, NCV is a creative agency specializing in branding, animation, and design. We transform ideas into meaningful visual creations. With a dedicated team, we deliver innovative solutions in motion graphics, illustration, 3D motion, Live2D, mixing mastering, MV, and video production.",
    github: null,
    build: [
      SelectionTech.Laravel,
      SelectionTech.Mysql,
      SelectionTech.React,
      SelectionTech.Nextjs,
      SelectionTech.Tailwindcss,
    ],
    redirect: "https://ncv-studio.vercel.app/",
  },
  {
    image: "/assets/projects/jtimerch.png",
    title: "JTI Merch",
    deskripsi: "Point of Sale Website for JTI Merch.",
    github: null,
    build: [SelectionTech.Laravel, SelectionTech.Mysql],
    redirect: null,
  },
  {
    image: "/assets/projects/jpims.png",
    title: "J-PiMS",
    deskripsi:
      "Personalized tourism management system for Jember to curate destinations and experiences.",
    github: null,
    build: [SelectionTech.React, SelectionTech.Laravel],
    redirect: "https://j-pims.com/",
  },
  {
    image: "/assets/projects/jdims.png",
    title: "J-DiMS",
    deskripsi:
      "Digital museum platform for Jember to showcase collections and stories online.",
    github: null,
    build: [SelectionTech.React, SelectionTech.Laravel],
    redirect: "https://j-dims.com/",
  },
  {
    image: "/assets/projects/gocpns.png",
    title: "Go-CPNS",
    deskripsi:
      "Tryout website for CPNS preparation similar to ayocpns with practice tests and progress tracking.",
    github: null,
    build: [SelectionTech.Laravel, SelectionTech.React],
    redirect: null,
  },
  {
    image: "/assets/projects/nch.png",
    title: "NCH Project",
    deskripsi:
      "Pesantren school information system (SD/SMP/SMA); contributed to master data, academic, reporting, and finance modules.",
    github: null,
    build: [SelectionTech.Laravel, SelectionTech.React],
    redirect: "https://www.nurulchotib.com/",
  },
  {
    image: "/assets/projects/padisda.png",
    title: "Padisda",
    deskripsi:
      "Membership management platform complete with digital member cards and directory features.",
    github: null,
    build: [SelectionTech.Laravel, SelectionTech.React],
    redirect: "https://padisda.or.id/",
  },
];

export default data;
