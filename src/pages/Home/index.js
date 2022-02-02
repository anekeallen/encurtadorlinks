
import {FiLink} from "react-icons/fi";

import "./home.css"


function Home() {

  return(
    <div className="container">

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
