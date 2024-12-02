import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DefaultSeo, NextSeo } from "next-seo";
import useSWR from "swr";
import SpotifyContext from "@/utils/SpotifyContext";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  const router = useRouter();

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <NextSeo
        title="Bintang Malindo Eka Putra | Mphstar"
        description={
          "I am Bintang Malindo Eka Putra, I have a strong interest in Website and Mobile application development."
        }
        defaultTitle="Bintang Malindo Eka Putra | Mphstar"
        titleTemplate={`%s · Mphstar`}
        openGraph={{
          title: "Bintang Malindo Eka Putra | Mphstar",
          description:
            "I am Bintang Malindo Eka Putra, I have a strong interest in Website and Mobile application development.",
          images: [
            {
              url: `https://mphstar.tech/assets/foto.jpg`,
            },
          ],
        }}
      />
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={router.asPath}>
          <SpotifyContext.Provider value={{ data }}>
            <PageWrapper>
              <Component {...pageProps} />
            </PageWrapper>
          </SpotifyContext.Provider>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <motion.div
        initial={{
          translateY: "0%",
        }}
        animate={{
          translateY: "100%",
        }}
        exit={{
          translateY: "0%",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-800 z-[1000]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 justify-center">
          <Image
            width={500}
            height={500}
            src="https://media.tenor.com/YSHdPP-LR1cAAAAj/star-rail-kuru.gif"
            alt="Image"
            className="w-56"
          />
        </div>
      </motion.div>

      {/* <motion.div
        initial={{
          translateY: "-100%",
        }}
        animate={{
          translateY: "0%",
        }}
        exit={{
          translateY: "0%",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 w-full h-screen bg-black dark:bg-white z-[100] origin-top"
      >
        <img
          src="https://picsum.photos/200/300"
          alt="Image"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div> */}
    </>
  );
};
