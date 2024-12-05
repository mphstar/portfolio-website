import React from "react";
import Main from "@/components/Template";
import { SocialIcon } from "react-social-icons";
import { LettersPullUp } from "@/components/LettersPullUp";
import { motion } from "framer-motion";

export default function contact() {
  const contact = [
    {
      network: "email",
      bgColor: "red",
      style: { width: 32, height: 32 },
      href: "#",
      text: "Bintang.simdig20@gmail.com",
    },
    {
      network: "github",
      style: { width: 32, height: 32 },
      href: "https://github.com/mphstar",
      text: "github.com/mphstar",
    },
    {
      network: "facebook",
      style: { width: 32, height: 32 },
      href: "#",
      text: "Bintang",
    },
    {
      network: "instagram",
      style: { width: 32, height: 32 },
      href: "https://www.instagram.com/mphstar._/",
      text: "@mphstar._",
    },
    {
      network: "linkedin",
      style: { width: 32, height: 32 },
      href: "https://www.linkedin.com/in/mphstar/",
      text: "linkedin.com/in/mphstar",
    },
    {
      network: "youtube",
      bgColor: "red",
      style: { width: 32, height: 32 },
      href: "https://youtube.com/@Mphstar_",
      text: "@Mphstar_",
    },
  ];

  return (
    <Main selectedNav="Contact" title="Contact | @Mphstar">
      <div className="flex flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center">
          <LettersPullUp className="font-semibold text-3xl" text="Contact" />
          <motion.p
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            I'm excited to connect with everyone so please don’t hesitate to get
            in touch with me by following my social media bellow:
          </motion.p>
          {contact.map((item, index) => (
            <div key={index} className="flex flex-row gap-2 items-center mt-4">
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                  },
                }}
              >
                <SocialIcon
                  network={item.network}
                  bgColor={item.bgColor}
                  style={item.style}
                />
              </motion.div>
              <a href={item.href} className="hover:text-blue-500 duration-300">
                <LettersPullUp text={item.text} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}
