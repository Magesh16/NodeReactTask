import React, { useEffect, useState } from 'react';
import { BsPatchPlusFill } from 'react-icons/bs';
import axios from 'axios';
import './AddButton.css';
import getCard from '../Utils/AppUtils';

const AddButton = ({setData: setData}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [file, setFile] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      name,age,gender
    }

    try {
      console.log(formData);
      const response = await axios.post('http://192.168.1.53:4000/postUserInfo', formData);
      console.log('Response from server:', response.data);
      // if(response.status === true){
      //   getCard();
      // }
    } catch (error) {
      console.error('Error:', error);
    }

    setName('');
    setAge('');
    setGender('');
    setFile(null);
    togglePopup();
  };

  return (
    <div className="add-button">
      <BsPatchPlusFill onClick={togglePopup} />

      {showPopup && (
        <div className='propup-overlay'>
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <table className='popup-table'>
              <tr className='popup-table'>
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
              <tr className='popup-table'>
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
              <tr className='popup-table'>
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
                <label htmlFor="file">File:</label>
                </td>
                <td>
                <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
                </td>
              </tr>
            </table>
            <button type="submit" onClick={getCard(setData, '/getUserInfo')}>Submit</button>
          </form>
        </div>
        </div>
      )}
       {showPopup && <div className="blur-background" />}
    </div>
    
  );
};

export default AddButton;
