import { useState } from "react";

function App() {

  const [goldPrice, setGoldPrice] = useState("");

  const getGoldPrice = async () => {

    const response = await fetch(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=XAUUSD&apikey=K6W78SV0SKP5Y1AL"
    );

    const data = await response.json();

    setGoldPrice(data["Global Quote"]["05. price"]);
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>

      <h1>Gold Price Checker 🪙</h1>

      <button
        onClick={getGoldPrice}
        style={{
          padding:"10px 20px",
          fontSize:"18px",
          background:"gold",
          border:"none",
          borderRadius:"8px"
        }}
      >
        Get Gold Price
      </button>

      {goldPrice && (
        <h2 style={{marginTop:"20px"}}>
          Current Gold Price: ${goldPrice}
        </h2>
      )}

    </div>
  );
}

export default App;