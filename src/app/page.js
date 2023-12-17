// "use client";
import Image from "next/image";
import { FacebookShareButton, FacebookIcon } from "next-share";

import CalcList from "@/components/CalcList";
import Share from "@/components/Share";
const shareMeta = {
  description: "Fast and Accurate Online Calculator and Converter - plexcalc",
  subject: "Fast and Accurate Online Calculator and Converter - plexcalc",
  body: "Your Go-To Resource for Fast and Accurate Calculations",
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-center mb-2">
        <div>
          <h1 className="text-2xl font-semibold max-w-md mb-7 mx-auto">
            Fast and Accurate Online Calculator and Converter
          </h1>
          <CalcList />
        </div>
      </div>
      <div className="max-w-sm w-full mx-auto text-center mt-0">
        <h3 className="text-sm mb-5 text-gray-70">Share:</h3>
        <Share
          url="https://plexcalc.com/"
          description={shareMeta.description}
          subject={shareMeta.description}
          body={shareMeta.description}
        />
      </div>
    </>
  );
}
