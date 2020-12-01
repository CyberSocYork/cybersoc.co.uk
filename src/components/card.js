import React from "react";
import ReactHtmlParser from "react-html-parser";
import sanitizeHtml from "sanitize-html";
import "../styles/components/card.scss";

import cardImg from "../img/card_img.jpg";

export default (props) => (
  <div className="card">
    <img src={cardImg} alt="" className="card-img" />
    <div className="card-body">
      <h2 className="card-title">{props.title || "Title"}</h2>
      <h3 className="card-detail">{props.detail || ""}</h3>
      <p className="card-desc">{ReactHtmlParser(sanitizeHtml(props.desc || "Description"))}</p>
    </div>
  </div>
);
