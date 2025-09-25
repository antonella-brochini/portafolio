import { Geist, Geist_Mono } from "next/font/google";

import Script from 'next/script'
import './styles/bootstrap.min.css'
import './styles/animate.css'
import './styles/owl.carousel.min.css'
import './styles/themify-icons.css'
import './styles/flaticon.css'
import './styles/magnific-popup.css'
import './styles/slick.css'
import './styles/gijgo.min.css'
import './styles/nice-select.css'
import './styles/all.css'
import './styles/style.css'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio profesional de Antonella Brochini',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body  >
       
        {children}
         {/* jQuery plugins */}
        <Script src="/js/jquery-1.12.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

        {/* Otros plugins */}
        <Script src="/js/jquery.magnific-popup.js" strategy="lazyOnload" />
        <Script src="/js/masonry.pkgd.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.nice-select.min.js" strategy="lazyOnload" />

        {/* Custom JS */}
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
