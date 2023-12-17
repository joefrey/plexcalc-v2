import { JSDOM } from "jsdom";

const getCountry = async (req, res) => {
  const response = await fetch("https://ipinfo.io/");
  const html = await response.text();

  console.log("html", html);
  const dom = new JSDOM(html);
  // console.log(dom);
  const document = dom.window.document;
  // const country = document.querySelector(
  //   "#country-string > div > span > span:nth-child(2) > span"
  // )?.textContent;
  const country = document.querySelector("#country-string")?.innerHTML;
  console.log("Country is: ", country);

  res.status(200).json({ country });
};

export default getCountry;
