import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute="class">

      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )

}
