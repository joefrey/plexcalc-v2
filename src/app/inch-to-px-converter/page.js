import React from "react";
import InchToPxConverter from "@/components/InchToPxConverter";
import Share from "@/components/Share";
export const metadata = {
  title: "Inch to PX converter",
  description: "Fast and Accurate Inches to Pixels Converter",
  openGraph: {
    title: "Inch to PX converter",
    description: "Fast and Accurate Inches to Pixels Converter",
    url: "https://plexcac.com/inch-to-px-converter",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Fast and Accurate Inches to Pixels Converter",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Fast and Accurate Inches to Pixels Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <InchToPxConverter />
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
          Inches to Pixels Converter
        </h2>
        <p className="text-gray-500 leading-loose text-sm">
          The &ldquo;Inches to Pixels Converter&rdquo; is a handy tool designed
          to facilitate the seamless conversion between inches and pixels,
          crucial for precise and responsive design in the digital realm. With
          its user-friendly interface, users can input inches, and the converter
          instantly calculates the equivalent pixel value, adhering to the
          standard assumption of{" "}
          <span className="inline-block bg-gray-50 text-gray-600 rounded-md py-0 px-1.5">
            1 inch being equivalent to 96 pixels
          </span>
          .
        </p>
        <p>
          This tool proves invaluable for web developers and designers seeking
          accurate measurements and consistent layouts across diverse devices.
          Whether fine-tuning elements or ensuring responsive designs, the
          &ldquo;Inches to Pixels Converter&rdquo; streamlines the conversion
          process, contributing to a more efficient and visually cohesive web
          development experience.
        </p>
      </div>

      <div className="max-w-2xl mx-auto content-wrap">
        <h2>What is the difference between PPI and DPI</h2>
        <h3>PPI (Pixels Per Inch):</h3>

        <ul>
          <li>
            PPI refers to the number of pixels contained within one inch of a
            digital image.
          </li>
          <li>
            It is primarily associated with digital screens, such as computer
            monitors, smartphone displays, or cameras.
          </li>
          <li>
            A higher PPI indicates a higher resolution and usually results in a
            clearer and more detailed image.
          </li>
        </ul>
        <p>
          Example: If an image has a resolution of 300 PPI, it means there are
          300 pixels horizontally and 300 pixels vertically within one inch of
          the image.
        </p>

        <h3>DPI (Dots Per Inch):</h3>
        <ul>
          <li>
            DPI originally referred to the number of dots a printer could place
            in one inch on a printed document.
          </li>
          <li>
            In the context of digital images, DPI is sometimes used
            interchangeably with PPI, but it&apos;s important to note the
            difference.
          </li>
          <li>
            For print, a higher DPI setting generally results in a higher
            quality and more detailed printout.
          </li>
        </ul>

        <p>
          Example: If a printer has a resolution of 600 DPI, it means the
          printer can place 600 dots horizontally and 600 dots vertically within
          one inch on a printed page.
        </p>
      </div>
    </>
  );
};

export default page;
