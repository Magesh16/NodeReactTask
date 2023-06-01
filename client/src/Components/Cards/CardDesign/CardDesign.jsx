import React from "react";
import axios from "axios";
import getCard from '../../Utils/AppUtils';
import "./CardDesign.css";

const CardDesign = ({
    data: data,
    setData:setData,
    index:index,
    id,
    image_url,
    name,
    age,
    gender,
    showPopup: showPopup,
    setShowPopup: setShowPopup,
    edit: edit,
    setEdit: setEdit,
    setId: setId,
}) => {

    async function handleDelete(id){
        let response = await axios.delete(`http://localhost:4000/deleteUserInfo/${id}`);
        if(response.status == 200){
            getCard(setData, '/getUserInfo');
        }
    }

  return (
    <div className="container-div">
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <div className="card-profile">
              <img src={image_url}></img>
            </div>
          </div>
          <div className="card-info">
            <p>
              <b>Name</b> :{name}
            </p>
            <p>
              <b>Age</b> :{age}
            </p>
            <p>
              <b>Gender</b>: {gender}
            </p>
          </div>
          <div className="card-button">
            <button
              className="button-card"
              onClick={() => {
                setShowPopup(!showPopup);
                setEdit(!edit);
                setId(id);
              }}
            >
              Edit
            </button>
            <button className="button-card" onClick={()=>handleDelete(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
