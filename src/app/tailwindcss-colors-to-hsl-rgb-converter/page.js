import React from "react";
import HSLColorPicker from "@/components/HSLColorPicker";
import Share from "@/components/Share";
import TailwindCSSColorsHslRgb from "@/components/TailwindCSSColorsHslRgb";

export const metadata = {
  title: "TailwindCSS Colors to HSL, RGB Color Converter",
  description:
    "Fast and Accurate TailwindCSS Colors to HSL, RGB Color Converter",
  openGraph: {
    title: "TailwindCSS Colors to HSL, RGB Color Converter",
    description:
      "Fast and Accurate TailwindCSS Colors to HSL, RGB Color Converter",
    url: "https://plexcac.com/hex-hsl-rgb-color-converter",
    siteName: "PlexCalc",
    images: [
      {
        url: "https://plexcalc.com/img_opengraph_800x600-min.png",
        width: 800,
        height: 600,
        alt: "Fast and Accurate TailwindCSS Colors to HSL, RGB Color Converter",
      },
      {
        url: "https://plexcalc.com/img_opengraph_1800x1600-min.png",
        width: 1800,
        height: 1600,
        alt: "Fast and Accurate TailwindCSS Colors to HSL, RGB Color Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <TailwindCSSColorsHslRgb />
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
          HEX, HSL, and RGB Converter
        </h2>
        <p className="text-gray-500 leading-loose text-sm">
          In web development, colors can be represented in various formats, each
          serving different purposes.
        </p>
      </div>

      <div className="max-w-2xl mx-auto content-wrap">
        <h2>HEX Color:</h2>
        <p>
          One common representation is the HEX color code, a six-character
          hexadecimal value that defines a color based on its red, green, and
          blue components. For example,{" "}
          <span className="inline-block bg-gray-50 text-gray-900 rounded-md py-0 px-1.5">
            &apos;#FF5733&apos;
          </span>{" "}
          represents a shade of orange. The first two characters represent the
          red intensity, the next two represent green, and the last two
          represent blue.
        </p>
      </div>
      <div className="max-w-2xl mx-auto content-wrap">
        <h2>HSLA Color:</h2>
        <p>
          HSLA, which stands for Hue, Saturation, Lightness, and Alpha, is
          another way to express colors. HSLA uses values for hue (the type of
          color), saturation (intensity of color), lightness (brightness), and
          alpha (transparency). The alpha component allows you to control the
          color&apos;s opacity. For instance,{" "}
          <span className="inline-block bg-gray-50 text-gray-900 rounded-md py-0 px-1.5">
            hsla(30, 100%, 50%, 0.8)
          </span>{" "}
          represents a semi-transparent pure red.
        </p>
      </div>
      <div className="max-w-2xl mx-auto content-wrap">
        <h2>RGBA Color:</h2>
        <p>
          RGBA, or Red, Green, Blue, and Alpha, is similar to HSLA but is
          defined by specifying the intensity of each of the RGB components. An
          example would be{" "}
          <span className="inline-block bg-gray-50 text-gray-900 rounded-md py-0 px-1.5">
            rgba(255, 0, 0, 0.5)
          </span>
          , representing a translucent red. The alpha channel in RGBA determines
          the level of transparency.
        </p>
      </div>
    </div>
  );
};

export default page;
