import {FiLink} from "react-icons/fi";
import  { useState } from 'react';
import "./home.css"
import "../../styles.less"
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
// import api from "../../services/fetch";

import {getLinksSave, saveLink} from "../../services/storeLinks"


function Home() {

  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

 async function handleClick(params) {
   try {
    //  const response = await api.post('/shorten', {
    //    long_url: link
    //  });
    const key = "2f1d60ea77663839f7101449f1f51d807b9b9eb0";  

    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": link })
});
const json = await response.json();

  console.log(response);

  if(response.ok){

    setData(json);
    setShowModal(true);
    saveLink("@encurtadoLink", json);
    
    setLink("");
  }else{
    alert("ops, algo deu errado!!");
    setLink("");
  }

   
   } catch (error) {
     alert("ops, algo deu errado!!");
     setLink("");
   }
   
    
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
      
      <button onClick={handleClick} className="gerar_link">Gerar link</button>

      </div>
      {showModal && <LinkItem data={data}  closeModal = {()=> setShowModal(false)}></LinkItem>}

      
    
    </div>
  )
  
}

export default Home;
