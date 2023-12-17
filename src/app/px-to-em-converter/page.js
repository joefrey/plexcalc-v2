import PxToEm from "@/components/PxToEm";
import Share from "@/components/Share";
import React from "react";

export const metadata = {
  title: "PX to REM converter",
  description: "Fast and Accurate PX to REM Converter for Web Developers",
  openGraph: {
    title: "PX to REM converter",
    description: "Fast and Accurate PX to REM Converter for Web Developers",
    url: "https://plexcac.com/px-to-em-converter",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Fast and Accurate PX to REM Converter for Web Developers",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Fast and Accurate PX to REM Converter for Web Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <PxToEm />
      <div className="max-w-sm w-full mx-auto text-center mt-0 mb-16 ">
        <h3 className="text-sm mb-5 text-gray-70">Share:</h3>
        <Share
          description={metadata.openGraph.description}
          subject={metadata.description}
          body={metadata.openGraph.description}
        />
      </div>
    </>
  );
};

export default page;
