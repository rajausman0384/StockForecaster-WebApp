const data = require("./data");
const { pageURL } = data;
const webscraping = require("./webscraping");
const compareAndSaveResults = require("./result");

webscraping(pageURL)
  .then(dataObj => {
    compareAndSaveResults(dataObj);
  })
  .catch(console.error);

