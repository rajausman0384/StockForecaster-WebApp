require("dotenv").config();




const pageURL = "https://hamariweb.com/finance/forex/";

const mongoURI = process.env.MONGOURI;

module.exports = {
  pageURL,
  mongoURI
};
