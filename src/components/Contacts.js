import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

import "./Contacts.css";
const Contacts = () => {
  return (
    <>
      <div className="list-social">
        <ul>
          <li>
            <AiOutlineGithub size={40} />
          </li>
          <li>
            <FaLinkedinIn size={40} />
          </li>
          <li>
            <BsInstagram size={40} />
          </li>
          <li>
            <FiTwitter size={40} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;
