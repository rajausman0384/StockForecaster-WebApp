const puppeteer = require('puppeteer');

const webscraping = async (pageURL) => {

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  let dataObj = {};

  try {
    
  await page.goto(pageURL, {
    waitUntil: 'load',
    // Remove the timeout
    timeout: 0});

  const currency = await page.evaluate(
    () => [...document.querySelectorAll("#dollar_rate_world td a")].map(elem => elem.innerText)
  );
  console.log({currency})


  const symbol = await page.evaluate(
    () => [...document.querySelectorAll("#dollar_rate_world tr td:not(:first-child):not([class])")].map(elem => elem.innerText)
  );
  console.log({symbol})
 
  
  const buying = await page.evaluate(
    () => [...document.querySelectorAll("#dollar_rate_world tr td.text-success")].map(elem => elem.innerText)
  );
  console.log({buying})

  const selling = await page.evaluate(
    () => [...document.querySelectorAll("#dollar_rate_world tr td.text-blue")].map(elem => elem.innerText)
  );
  console.log({selling})

  dataObj = {
    currency,
    symbol,
    buying,
    selling
  };

  }catch (e) {
    console.log(e);
  }

   await browser.close();
   return(dataObj)
};

module.exports = webscraping;