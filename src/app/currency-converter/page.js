import CurrencyConverter from "@/components/CurrencyConverter";
import Share from "@/components/Share";

import React from "react";


export const metadata = {
  title: "Currency converter",
  description: "Fast, Accurate, and up-to-the-minute conversion experience",
  openGraph: {
    title: "Currency converter",
    description: "Fast, Accurate, and up-to-the-minute conversion experience",
    url: "https://plexcac.com/em-to-px-converter",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Fast, Accurate, and up-to-the-minute conversion experience",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Fast, Accurate, and up-to-the-minute conversion experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const page = () => {
  return (
    <>
      <CurrencyConverter />
      <div className="max-w-sm w-full mx-auto text-center mt-0 mb-16 ">
        <h3 className="text-sm mb-5 text-gray-70">Share:</h3>
        <Share
          description={metadata.openGraph.description}
          subject={metadata.description}
          body={metadata.openGraph.description}
        />
      </div>

      <div className="max-w-2xl mx-auto mb-8 content-wrap">
        <h2 className="text-gray-900 text-sm mb-4 font-bold">
          Update-to-the-minute Currency Converter
        </h2>
        <h3 className="mb-3 font-semi-bold text-sm">
          Your Ultimate Currency Companion at PlexCalc.com – Real-Time Rates for
          Smart Decisions!
        </h3>
        <p className="text-gray-500 leading-loose text-sm">
          Discover the power of precision with PlexCalc.com, your go-to
          destination for an accurate and up-to-the-minute currency conversion
          experience. Our cutting-edge currency converter is designed to provide
          you with the latest exchange rates, ensuring that you make informed
          decisions in real-time. Whether you&apos;re a globetrotter, an
          international business professional, or simply managing your finances,
          PlexCalc.com offers a user-friendly interface that effortlessly
          navigates through the complexities of global currencies. Trust in the
          reliability of our tool to deliver precise results, reflecting the
          dynamic nature of the financial markets. Embrace the convenience of
          staying ahead with PlexCalc.com, where accuracy meets innovation in
          currency conversion. Your financial journey just got smarter – explore
          PlexCalc.com today for a seamless and reliable exchange rate
          experience.
        </p>
      </div>
    </>
  );
};

export default page;
