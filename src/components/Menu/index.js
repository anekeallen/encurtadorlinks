import "./menu.css";
import {FaInstagram, FaYoutube} from 'react-icons/fa';

import {Link} from "react-router-dom";



const Menu = () => {
  return (
  <div className="menu">
    <a href="">
    <FaInstagram size={24} color="white"></FaInstagram>

    </a>
    <a href="">
    <FaYoutube size={24} color="white"></FaYoutube>

    </a>
    <Link className="meus_links" to={"/links"}>
     Meus links
    </Link>
  </div>);
};

export default Menu;

