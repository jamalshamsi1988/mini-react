import React,{useState} from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {

    const [toggle , setToggle] = useState(false);
   
    const handleMenu=()=>{
       setToggle(!toggle);
    }
    return (
      <header>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <FaBars onClick={handleMenu} />
          </button>
        </ul>
        {toggle ? <h1>WebSeit Menu </h1> : ""}
      </header>
    );
}
 
export default Header;