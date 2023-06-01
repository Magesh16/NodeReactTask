import React from "react";
import "./CardDesign.css";

const CardDesign = ({
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
                setId(id)
              }}
            >
              Edit
            </button>
            <button className="button-card">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
