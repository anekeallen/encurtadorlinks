import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import "./link_item.css";

const LinkItem = ({closeModal, data}) => {

  async function copyLink() {
    await navigator.clipboard.writeText(data.link);
  }
  return <div className='container-modal'>
    <div className="titulo">
      <h2>Link encurtado:</h2>
      <button onClick={closeModal}>

      <AiOutlineClose  size={20} color='#000'></AiOutlineClose>
      </button>
    </div>

    <p className="link_total">{data.long_url}</p>
    <button onClick={copyLink} className="link_encurtado">
      <p>{data.link}</p>
      <FiCopy size={24} color='#fff'></FiCopy>
    </button>
  </div>;
};

export default LinkItem;
