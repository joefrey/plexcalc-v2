import React from "react";
import Link from "next/link";
import Script from "next/script";
const Footer = () => {
  return (
    <>
      <footer
        role="contentinfo"
        className="container px-4 mx-auto py-3 text-[12px] mt-auto">
        <div className="block md:flex justify-between text-gray-400">
          <p>
            &copy; 2023. <Link href="/">plexcalc</Link> . All rights reserved.{" "}
          </p>
          <p>
            Proudly developed using{" "}
            <span className="inline-block bg-gray-50 text-gray-600 rounded-md py-0 px-1.5">
              TailwindCSS
            </span>{" "}
            <span className="inline-block bg-gray-50 text-gray-600 rounded-md py-0 px-1.5">
              NextJS 14.0.3
            </span>{" "}
            and deployed to{" "}
            <span className="inline-block bg-gray-50 text-gray-600 rounded-md py-0 px-1.5">
              Vercel
            </span>
          </p>
        </div>
      </footer>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DX5BDWBZLE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DX5BDWBZLE');
        `}
      </Script>
    </>
  );
};

export default Footer;
