import Main from "@/components/Template";
import React from "react";
import CardPortfolio from "@/components/CardPortfolio";
import data from "@/models/data_portfolio";
import { motion } from "framer-motion";
import { LettersPullUp } from "@/components/LettersPullUp";

const port = data.reverse();

export default function portofolio() {
  return (
    <Main selectedNav="Portfolio" title="Portfolio | @Mphstar">
      <div className="flex flex-col w-full flex-1 h-full mt-24 justify-start px-4 md:px-8 items-center overflow-hidden mb-4">
        <div className="w-full flex flex-col justify-center">
          <LettersPullUp className="font-semibold text-3xl" text="Portfolio" />
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            Some collection of my past works.
          </motion.p>

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
