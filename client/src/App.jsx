import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Cards/Card/Card";
import AddButton from "./Components/AddButton/AddButton";
import Popup from "./Components/Popup/Popup";


function App() { 

  const [data,setData]=useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
// console.log(data);
  return (
    <div className="App">
      <Navbar/>
      <Card data={data} setData={setData} setId={setId} edit={edit} setEdit={setEdit} showPopup ={showPopup} setShowPopup={setShowPopup}/>
      <AddButton showPopup ={showPopup} setShowPopup={setShowPopup}/>
      <Popup setData={setData} id={id} showPopup ={showPopup} setShowPopup={setShowPopup} edit={edit}/>
    </div>
  );
}

export default App;
