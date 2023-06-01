import React, { useEffect, useState } from 'react';
import CardDesign from '../CardDesign/CardDesign';
import './Card.css'
import getCard from '../../Utils/AppUtils';

const Card = ({data:data,setData:setData}) => {
    useEffect(()=>{
      getCard(setData, '/getUserInfo')
    },[]);

  return (
    <div className='container'>
        {
        data.map((item)=>{
            return(
                <>
                <div>
                    <CardDesign image_url ={item.image_url} name={item.name} age={item.age} gender={item.gender} />
                </div>
                </>
            )
        })
        }
    </div>
  )
}

export default Card