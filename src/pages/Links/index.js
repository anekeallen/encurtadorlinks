
// import {  } from "react-icons";
import { HiArrowLeft } from "react-icons/hi";
import {Link} from 'react-router-dom';
import "./links.css"
import {FiLink, FiTrash} from "react-icons/fi";
;

function Links() {

  return(
    <div className="container-links">
      <div className="titulo">
       
        <Link to={"/"}>
         <HiArrowLeft size={71} color="white" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="links-item">
      
        <button className="botao-link">
          <FiLink size={18} color="#fff" />
          https://www.instagram.com/
        </button>

        <button className="delete">

        <FiTrash size={24} color="#FF5454"></FiTrash>
        </button>
        
      </div>
      <div className="links-item">
      
        <button className="botao-link">
          <FiLink size={18} color="#fff" />
          https://www.instagram.com/
        </button>

        <button className="delete">

        <FiTrash size={24} color="#FF5454"></FiTrash>
        </button>
        
      </div>
      
    </div>
  )
  
}

export default Links;
