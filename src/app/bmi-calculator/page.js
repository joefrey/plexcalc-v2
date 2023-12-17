import React from "react";
import BMICalculator from "@/components/BMICalculator";
import Share from "@/components/Share";

export const metadata = {
  title: "BMI Calculator",
  description: "PLEXCalc online BMI calculator",
  openGraph: {
    title: "PLEXCalc online BMI calculator",
    description: "Easy to use online BMI calculator.",
    url: "https://plexcac.com/bmi-calculator",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Easy to use online BMI calculator.",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Easy to use online BMI calculator.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <BMICalculator />
      <div className="max-w-sm w-full mx-auto text-center mt-0 mb-16 ">
        <h3 className="text-sm mb-5 text-gray-70">Share:</h3>
        <Share
          description={metadata.openGraph.description}
          subject={metadata.description}
          body={metadata.openGraph.description}
        />
      </div>

      <div className="max-w-2xl mx-auto content-wrap">
        <h2>What is BMI?</h2>
        <p>
          BMI stands for Body Mass Index. It is a numerical value of a
          person&apos;s weight in relation to their height. BMI is a widely used
          screening tool to categorize individuals into different weight status
          categories, such as underweight, normal weight, overweight, and
          obesity.
        </p>
      </div>
    </>
  );
};

export default page;
