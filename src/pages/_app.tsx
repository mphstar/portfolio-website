import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DefaultSeo, NextSeo } from "next-seo";
import useSWR from "swr";
import SpotifyContext from "@/utils/SpotifyContext";

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

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
