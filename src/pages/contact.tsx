import React from "react";
import Main from "@/components/Template";
import { SocialIcon } from "react-social-icons";

export default function contact() {
  return (
    <Main selectedNav="Contact" title="Mphstar | Contact">
      <div className="flex flex-col w-full flex-1 h-full mt-24 mb-4 justify-start px-4 md:px-8 items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center">
          <p className="font-semibold text-3xl">Contact</p>
          <p>
            I'm excited to connect with everyone so please don’t hesitate to get
            in touch with me by following my social media bellow:
          </p>
          <div className="flex flex-row gap-2 items-center mt-4">
            <SocialIcon
              network="email"
              bgColor="red"
              style={{ width: 32, height: 32 }}
            />
            <a href="#" className="hover:text-blue-500 duration-300">
              <p>Bintang.simdig20@gmail.com</p>
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center mt-4">
            <SocialIcon network="github" style={{ width: 32, height: 32 }} />
            <a
              href="https://github.com/mphstar"
              className="hover:text-blue-500 duration-300"
            >
              <p>github.com/mphstar</p>
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center mt-4">
            <SocialIcon network="facebook" style={{ width: 32, height: 32 }} />
            <a href="#" className="hover:text-blue-500 duration-300">
              <p>Bintang</p>
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center mt-4">
            <SocialIcon network="instagram" style={{ width: 32, height: 32 }} />
            <a
              href="https://www.instagram.com/mphstar._/"
              className="hover:text-blue-500 duration-300"
            >
              <p>@mphstar._</p>
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center mt-4">
            <SocialIcon network="linkedin" style={{ width: 32, height: 32 }} />
            <a
              href="https://www.linkedin.com/in/mphstar/"
              className="hover:text-blue-500 duration-300"
            >
              <p>linkedin.com/in/mphstar</p>
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center mt-4">
            <SocialIcon
              network="youtube"
              bgColor="red"
              style={{ width: 32, height: 32 }}
            />
            <a
              href="https://youtube.com/@Mphstar_"
              className="hover:text-blue-500 duration-300"
            >
              <p>@Mphstar_</p>
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
