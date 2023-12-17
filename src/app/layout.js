import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CalcList from "@/components/CalcList";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast and Accurate Online Calculator and Converter - plexcalc",
  description: "Your Go-To Resource for Fast and Accurate Calculations",

  openGraph: {
    title: "Fast and Accurate Online Calculator and Converter - plexcalc",
    description: "Your Go-To Resource for Fast and Accurate Calculations",
    url: "https://plexcac.com",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Fast and Accurate Online Calculator and Converter - plexcalc",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Fast and Accurate Online Calculator and Converter - plexcalc",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// const shareMeta = {
//   description: "Fast and Accurate Online Calculator and Converter - plexcalc",
//   subject: "Fast and Accurate Online Calculator and Converter - plexcalc",
//   body: "Your Go-To Resource for Fast and Accurate Calculations",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* bg-[#F8F8F8] */}
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        {/* <CalcList /> */}
        <main className="container px-4 mx-auto pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
