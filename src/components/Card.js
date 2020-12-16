import React from "react";
import ReactHtmlParser from "react-html-parser";
import sanitizeHtml from "sanitize-html";
import "../styles/components/card.scss";

import cardImg from "../img/card_img.jpg";

const Card = ({ title, detail, desc }) => (
  <div className="card">
    <img src={cardImg} alt="" className="card-img" />
    <div className="card-body">
      <h2 className="card-title">{title || "Title"}</h2>
      <h3 className="card-detail">{detail || ""}</h3>
      <p className="card-desc">{ReactHtmlParser(sanitizeHtml(desc || "Description"))}</p>
    </div>
  </div>
);

export default Card;
