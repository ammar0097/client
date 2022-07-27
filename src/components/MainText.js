import React from "react";
import Contacts from "./Contacts";
import "./MainText.css";

const MainText = () => {
  return (
    <div className="MainText ">
      <h1 className="Hi">
        Hi, I'm <span className="name">Ammar</span>
        <span className="wave">🤚</span>
      </h1>
      <h2 className="Im">I'm a Full Stack Javascript Developer.</h2>
      <ul className="miniBio">
        <li>
          <h5>☕ fueled by coffee</h5>
        </li>
        <li>
          <h5>🇹🇳&nbsp; based in Tunisia</h5>
        </li>
        <li>
          <h5>👨🏻‍🎓 studied at ESEN Manouba</h5>
        </li>
        <li>
          <h5>📧 ammarferchichi7@gmail.com</h5>
        </li>
        <li>
          <h5>
            <Contacts />
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default MainText;
