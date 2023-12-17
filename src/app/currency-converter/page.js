import CurrencyConverter from "@/components/CurrencyConverter";
import React from "react";


export const metadata = {
  title: "Currency converter",
  description: "Fast and Accurate Currency Converter",
  openGraph: {
    title: "Currency converter",
    description: "Fast and Accurate Currency Converter",
    url: "https://plexcac.com/em-to-px-converter",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Fast and Accurate Currency Converter",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Fast and Accurate Currency Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const page = () => {
  return (
    <div>
      <CurrencyConverter />
    </div>
  );
};

export default page;
