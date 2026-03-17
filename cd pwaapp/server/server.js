const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

const API_KEY = "YOUR_API_KEY";

app.get("/gold", async (req, res) => {

  try {

    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=XAUUSD&apikey=${API_KEY}`
    );

    const data = await response.json();

    const price = data["Global Quote"]["05. price"];

    res.json({
      goldPrice: price
    });

  } catch (error) {

    res.json({
      error: "Unable to fetch gold price"
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});