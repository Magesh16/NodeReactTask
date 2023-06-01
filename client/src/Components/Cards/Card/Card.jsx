import React, { useEffect, useState } from "react";
import CardDesign from "../CardDesign/CardDesign";
import "./Card.css";
import getCard from "../../Utils/AppUtils";

const Card = ({
  data: data,
  setData: setData,
  showPopup: showPopup,
  setShowPopup: setShowPopup,
  edit: edit,
  setEdit: setEdit,
  setId: setId
}) => {
  useEffect(() => {
    getCard(setData, "/getUserInfo");
  }, []);

  return (
    <div className="container">
      {data.map((item) => {
        return (
          <>
            <div>
              <CardDesign
                id ={item.id}
                image_url={item.image_url}
                name={item.name}
                age={item.age}
                gender={item.gender}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                edit ={edit}
                setEdit ={setEdit}
                setId = {setId}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
