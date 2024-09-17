import Layouts from "@/components/common/Layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Sora } from 'next/font/google'


const sora = Sora({
  variable: '--sora',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function App({ Component, pageProps }: AppProps) {
  return <section className={`${sora.variable} font-sora h-[100vh] w-full flex`}>
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  </section>
}
