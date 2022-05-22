import React from "react";
import "./Card.css";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import cardTag1 from "../../assets/cardTag1.png";
import cardTag2 from "../../assets/cardTag2.png";

const Card = () => {
  return (
    <div class="container">
      <h3>THÊM</h3>
      <div className="card-container">
        <a className="card" href="#">
          <img src={Card1} className="card-main" alt="" />
          <h2 className="card-tagName">Student</h2>
          {/* <img src={cardTag1} className="card-tag" alt="" /> */}
          <div className="card-content">
            <h4>TIẾP NHẬN HỌC SINH</h4>
          </div>
        </a>
        <a className="card" href="#">
          <img src={Card2} className="card-main" alt="" />
          <h2 className="card-tagName">Class</h2>
          {/* <img src={cardTag2} className="card-tag" alt="" /> */}
          <div className="card-content">
            <h4>LẬP DANH SÁCH LỚP</h4>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
