import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import useSWR from "swr";
import SpotifyContext from "@/utils/SpotifyContext";

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <DefaultSeo
        title="Bintang Malindo Eka Putra - Junior Fullstack Developer"
        description={
          "I am Bintang Malindo Eka Putra, a 5th semester Informatics Engineering student from Jember State Polytechnic. I have a strong interest in Website and Mobile application development."
        }
        defaultTitle="Bintang Malindo Eka Putra - Junior Fullstack Developer"
        titleTemplate={`%s · mphstar.tech`}
        openGraph={{
          title: "Bintang Malindo Eka Putra - Junior Fullstack Developer",
          description:
            "I am Bintang Malindo Eka Putra, a 5th semester Informatics Engineering student from Jember State Polytechnic. I have a strong interest in Website and Mobile application development.",
          images: [
            {
              url: `https://mphstar.tech/assets/foto.jpg`,
            },
          ],
        }}
      />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <SpotifyContext.Provider value={{ data }}>
          <Component {...pageProps} />
        </SpotifyContext.Provider>
      </AnimatePresence>
    </ThemeProvider>
  );
}
