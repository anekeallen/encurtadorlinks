import {FiLink} from "react-icons/fi";

import "./home.css"
import "../../styles.less"
import Menu from "../../components/Menu";


function Home() {

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
        <input placeholder="Cole seu link aqui..." type="text" />
      </div>
      <button className="gerar_link">Gerar link</button>

      </div>

    </div>
  )
  
}

export default Home;
