import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Popup.css";
import getCard from "../Utils/AppUtils";
import { AiOutlineClose } from "react-icons/ai";
import {Dialog} from '@material-ui/core';

const Popup = ({
  setData: setData,
  showPopup: showPopup,
  setShowPopup: setShowPopup,
  edit: edit,
  id: id,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [image_url, setImage_url] = useState("");

  useEffect(() => {
    if (edit == true) {
      (async function () {
        console.log(edit);
        let response = await axios.get(
          `http://192.168.1.53:4000/getUserInfoById/${id}`
        );
        setName(response.data[0].name);
        setAge(response.data[0].age);
        setGender(response.data[0].gender);
        setImage_url(response.data[0].image_url);
      })();
    }
  }, [edit]);

  const handleSubmit = async (e) => {
    const formData = {
      name,
      age,
      gender,
      image_url,
    };

    try {
      if (edit == true) {
        const response = await axios.put(
          `http://192.168.1.53:4000/updateUserInfo/${id}`,
          formData
        );
        console.log("Response from Edit ", response.data);
      } else {
        const response = await axios.post(
          "http://192.168.1.53:4000/postUserInfo",
          formData
        );
        console.log("Response from post:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setName("");
    setAge("");
    setGender("");
    setImage_url("");
    getCard(setData, "/getUserInfo");
  };
  return (
    <>
      {showPopup && (
    <Dialog open="true" id="dialog">
        <div className="popup-overlay">
          <div className="popup">
            <div className="close-icon">
              <AiOutlineClose onClick={()=>setShowPopup(!showPopup)} />
            </div>

            <div className="table-outer">
              <table className="popup-table">
                <tr>
                  <td>
                    <label htmlFor="name">Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="age">Age </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="gender">Gender </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="image_url">File</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="image_url"
                      value={image_url}
                      onChange={(e) => setImage_url(e.target.value)}
                    />
                  </td>
                </tr>
              </table>
              <div className="button-outer">
              <button
              className="popup-submit"
              type="submit"
              onClick={() => {
                handleSubmit();
                setShowPopup(!showPopup);
              }}
            >
              Submit
            </button>
              </div>
            </div>
            
          </div>
        </div>
    </Dialog>
      )
      }
      {showPopup && <div className="blur-background" />}
    </>
  );
};

export default Popup;
