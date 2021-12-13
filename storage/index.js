const brokers = require("./brokers");
const stocks = require("./stocks");
const stockExchangeSettings = require("./stock-exchange-settings");

const storage = {
    brokers,
    stocks,
    stockExchangeSettings
}

module.exports = storage;