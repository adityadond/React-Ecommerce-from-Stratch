import React from 'react'
import {IoLocation} from 'react-icons/io5';
import "./Headerc.css"

function HeaderComponents({text1, text2, emoliFlag}) {
  return (
    <>
    {emoliFlag ?(
    <div className="location__text">
    <IoLocation color='white'/>
    </div>
    ):null}
    <div className="location_twoLine"> 
  <div>{text1}</div>
  <div className="select">{text2}</div>
  </div>
 
  </>
  )
}

export default HeaderComponents