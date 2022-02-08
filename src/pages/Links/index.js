
import React from 'react';

import { HiArrowLeft } from "react-icons/hi";
import {Link} from 'react-router-dom';
import "./links.css"
import {FiLink, FiTrash} from "react-icons/fi";
import {getLinksSave, deleteLink} from '../../services/storeLinks';
import LinkItem from "../../components/LinkItem";

function Links() {

  const [myLinks , setMyLinks] = React.useState([]);
  const [data, setData] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [emptyList, setEmptyList] = React.useState(true);


  React.useEffect(()=>{

    async function getLinks() {
      const result = await getLinksSave("@encurtadoLink");

      if(result.length ===0){
        console.log("LISTA VAZIA");
      }else{
        setEmptyList(false);
        setMyLinks(result)
      }

    }

    getLinks();


  }, [])

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }
  function handleDelete(link) {
    // console.log(link);
    let result = deleteLink(myLinks, link);

    if (result.length === 0) {
      setEmptyList(true);
    }
    setMyLinks(result);
  }


  return(
    <div className="container-links">
      <div className="titulo">
       
        <Link to={"/"}>
         <HiArrowLeft size={71} color="white" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyList && <h2>Sua lista está vazia!</h2>}

     {myLinks.map((link)=> { 
       
       return (
        // console.log(link);
        <div key={link.id} className="links-item">
      
        <button onClick={()=> handleOpenLink(link)} className="botao-link">
          <FiLink size={18} color="#fff" />
          {link.long_url}
        </button>

        <button className="delete" onClick={()=> handleDelete(link.id)}>

        <FiTrash size={24} color="#FF5454"></FiTrash>
        </button>
        {showModal && <LinkItem data={data}  closeModal = {()=> setShowModal(false)}></LinkItem>}
      </div>)
})}
      
      
    </div>
  )
  
}

export default Links;
