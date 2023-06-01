import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Card/Card";
import AddButton from "./Components/AddButton/AddButton";


function App() { 

  const [data,setData]=useState([]);

  return (
    <div className="App">
      <Navbar/>
      <Card data={data} setData={setData}/>
      <AddButton setData={setData}/>
    </div>
  );
}

export default App;
