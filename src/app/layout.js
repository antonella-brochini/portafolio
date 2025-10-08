import { Geist, Geist_Mono } from "next/font/google";
import Header from "./header"
import Footer from "./footer"


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

import 'bootstrap/dist/css/bootstrap.min.css';



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
        <Header/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
