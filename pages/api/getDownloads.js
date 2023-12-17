import { JSDOM } from "jsdom";

const getDownloads = async (req, res) => {
  // const response = await fetch('https://www.npmjs.com/package/puppeteer')
  const body = JSON.parse(req.body);

  const { selectedOne, selectedTwo } = body;
  console.log("From:", selectedOne, "To:", selectedTwo);
  const response = await fetch(
    `https://www.google.com/finance/quote/${selectedOne}-${selectedTwo}`
  );
  const html = await response.text();

  
  const dom = new JSDOM(html);
  // console.log(dom);
  const document = dom.window.document;
  const fromNameOfCurrency = document.querySelector(".zzDege")?.textContent;
  const toNameOfCurrency =
    document.querySelector(".gjKCb:nth-child(1)")?.textContent;
  const quoteAmount = document.querySelector(".fxKbKc")?.textContent;
  const dateQuote = document
    .querySelector(".ygUjEc")
    ?.textContent.replace(" · Disclaimer", "");
  // console.log(downloads, 'downloads')

  res.status(200).json({ fromNameOfCurrency, toNameOfCurrency, quoteAmount, dateQuote });
  // console.log('description', quoteDescription);
  // console.log('downloads', downloads)
  // return '';
};

export default getDownloads;
