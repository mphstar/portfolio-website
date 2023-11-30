import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <DefaultSeo
        description={"Personal Website Porfolio of Bintang Malindo Eka Putra"}
        defaultTitle="Bintang Malindo Eka Putra - Student and Junior Fullstack Developer"
        titleTemplate={`%s · Mphstar.tech`}
        openGraph={{
          title: "Bintang Malindo Eka Putra - Student and Junior Fullstack Developer",
          description: "Personal Website Porfolio of Bintang Malindo Eka Putra",
          images: [
            {
              url: `https://mphstar.tech/image_dashboard.jpg`,
            },
          ],
        }}
        twitter={{
          handle: "@mphstar._",
          cardType: "summary_large_image",
        }}
      />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
