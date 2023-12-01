import Main from "@/components/Template";
import Lottie from "lottie-react";
import React from "react";
import animationData from "../components/lottie/maintenance.json";
import Image from "next/image";
import CardPortfolio from "@/components/CardPortfolio";
import data from "../models/data_portfolio.json";

export default function portofolio() {
  return (
    <Main selectedNav="Portofolio" title="Mphstar | Portofolio">
      <div className="flex flex-col w-full flex-1 h-full mt-24 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center">
          <p className="font-semibold text-3xl">Portfolio</p>
          <p>List project yang saya buat.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-4 lg:grid-cols-3 mt-4 gap-4">
            {data.map((item, index) => {
              return <CardPortfolio data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Main>
  );
}
