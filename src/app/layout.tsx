import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import { Oxanium } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";


export const metadata = {
  title: 'Anto | TechLover',
  description: 'Personal Antonella Brochini\'s portfolio',
}

  const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {


  return (

    <html lang="en" className={oxanium.className} suppressHydrationWarning>
     
      <body>
  <ThemeProvider>
  <Header />
  {children}
 </ThemeProvider>
      </body>
         
    </html>


  );
}
