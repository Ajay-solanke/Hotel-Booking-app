import React from 'react'
import "./searchitem.css";

const Searchitem = () => {
  return (
    <div className='searchItem'>
      <img src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1' alt='' className='siImg'/>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio * 1 bathroom * 21m 1 full bed</span>
        <span className="siCancleOp">Free cancellation</span>
        <span className="siCancleOpSubtitle">You can cancle later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <span className="siPrice">$123</span>
        <span className="siTaxOp">Includes taxes and frees</span>
        <button className="siCheckButton">See availability</button>
      </div>
    </div>
  )
}

export default Searchitem;
