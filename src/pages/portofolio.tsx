import Main from "@/components/Template";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import animationData from "../components/lottie/maintenance.json";
import Image from "next/image";
import CardPortfolio from "@/components/CardPortfolio";
import data from "@/models/data_portfolio";

const port = data.reverse();

export default function portofolio() {

  
  return (
    <Main selectedNav="Portfolio" title="Portfolio | @Mphstar">
      <div className="flex flex-col w-full flex-1 h-full mt-24 justify-start px-4 md:px-8 items-center overflow-hidden mb-4">
        <div className="w-full flex flex-col justify-center">
          <p className="font-semibold text-3xl">Portfolio</p>
          <p>Some collection of my past works.</p>
          <div className="columns-1 md:columns-3 space-y-8 mt-4">
            {port.map((item, index) => {
              return <CardPortfolio data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Main>
  );
}
