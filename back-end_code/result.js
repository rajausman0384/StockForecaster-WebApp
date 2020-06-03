const data = require("./data");
const { mongoURI } = data;



const mongoose = require("mongoose");
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  const compareAndSaveResults = dataObj => {
    try {
      const Currencies = require("./models/currencies");
  
      Currencies.find({}, function(err, dataList) {
        return dataList;
      })
        .then(dataList => {
          if (dataList == "") {
            console.log(`A new data was created:\n${JSON.stringify(dataObj)}`);
            const newdata = new Currencies(dataObj);
            return newdata.save().catch(err => console.log(err));
          }
  
          const { currency, symbol, buying, selling  } = dataObj;
  
          const dbId = dataList[0]._id;
          const dbcurrency = dataList[0].currency;
          const dbsymbol = dataList[0].symbol;
          const dbbuying = dataList[0].buying;
          const dbselling = dataList[0].selling;

  
          let catchDifference = false;
  
            dbcurrency.forEach((cur, i) => {
              if (cur !== currency[i]) catchDifference = true;
            });

            dbsymbol.forEach((sym, i) => {
                if (sym !== symbol[i]) catchDifference = true;
              });

            dbbuying.forEach((buy, i) => {
              if (buy !== buying[i]) catchDifference = true;
            });

            dbselling.forEach((sell, i) => {
                if (sell !== selling[i]) catchDifference = true;
              });
        
          // if (dbcurrency !== currency) {
          //     catchDifference = true;
          //   }
          // if (dbsymbol !== symbol) {
          //     catchDifference = true;
          //   }

          // if (dbbuying !== buying) {
          //     catchDifference = true;
          //   }
          // if (dbselling !== selling) {
          //     catchDifference = true;
          //   }
  
          if (catchDifference) {
            console.log("A new evidence was found, updating database...");
            mongoose.set('useFindAndModify', false);
            return Currencies.findOneAndUpdate({ _id: dbId }, dataObj);
          }
  
        })
        .then(() => {
          mongoose.disconnect();
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };
  
  module.exports = compareAndSaveResults;
