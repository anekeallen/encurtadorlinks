import {FiLink} from "react-icons/fi";

import  { useState } from 'react';


import "./home.css"
import "../../styles.less"
import Menu from "../../components/Menu";


function Home() {

  const [link, setLink] = useState("");

  function handleClick(params) {
    alert("clicou");
    
  }

  return(

    
    <div className="container">
      <Menu></Menu>
      <div className="logo">
        <img src="/logo.png" alt="" />
        <h1>AnekeLink</h1>
        <p>Cole seu link para encurtar</p>
      </div>

      <div className="footer">
      <div className="container-input">
        <FiLink size={24} color="#fff" />
        <input 
        placeholder="Cole seu link aqui..." 
        type="text"
        value={link} 
        onChange={({target})=> setLink(target.value) }/>
      </div>
      {link}
      <button onClick={handleClick} className="gerar_link">Gerar link</button>

      </div>

    </div>
  )
  
}

export default Home;
