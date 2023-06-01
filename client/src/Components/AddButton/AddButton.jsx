import React, { useEffect, useState } from 'react';
import { BsPatchPlusFill } from 'react-icons/bs';

import './AddButton.css';

const AddButton = ({showPopup:showPopup, setShowPopup:setShowPopup}) => {
  
  return (
    <div className="add-button" onClick={()=>{setShowPopup(!showPopup)}}>
      <BsPatchPlusFill  />
    </div>
    
  );
};

export default AddButton;
