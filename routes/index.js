const express = require("express");
const storage = require("../storage");
const fs = require("fs");
const path = require("path");

const router = express.Router();


router.get('/brokers', (request, response) => {
    response.json({ success: true, data: storage.brokers });
});

router.post('/brokers', ((request, response) => {
    storage.brokers = request.body;
    fs.writeFileSync(path.resolve(__dirname, "../storage/brokers.json"), JSON.stringify(storage.brokers, null, 2));
    response.json({ success: true });
}))


router.get('/stocks', (request, response) => {
    response.json({ success: true, data: storage.stocks });
});

router.post('/stocks', ((request, response) => {
    storage.stocks = request.body;
    fs.writeFileSync(path.resolve(__dirname, "../storage/stocks.json"), JSON.stringify(storage.stocks, null, 2));
    response.json({ success: true });
}))


router.get('/settings', (request, response) => {
    response.json({ success: true, data: storage.stockExchangeSettings });
});

router.post('/settings', (request, response) => {
    storage.stockExchangeSettings = request.body;
    fs.writeFileSync(path.resolve(__dirname, "../storage/stock-exchange-settings.json"), JSON.stringify(storage.stockExchangeSettings, null, 2));
    response.json({ success: true });
})


router.get("/*", (request, response) => {
    response.status(404);
    response.json({ success: false });
});


module.exports = router;