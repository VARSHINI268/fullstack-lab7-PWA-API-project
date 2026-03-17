import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");

  const getActivity = async () => {
    const res = await fetch("https://www.boredapi.com/api/activity");
    const data = await res.json();
    setActivity(data.activity);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Random Activity Generator</h1>
      <button onClick={getActivity}>Get Activity</button>
      <p>{activity}</p>
    </div>
  );
}

export default App;