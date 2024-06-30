import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom";
const Header = () => {
    const [btnLog, setBtnLog] = useState("Login");
    console.log("Header Rendered");

    // if no dependency array => useEffect is called on every render(Every time Header is called )
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // if dependency array is [btnLog] => called everytime btnLog is updated

    useEffect(()=>{
        console.log("Use Effect Rendered");
    },[btnLog ])


    return(
      <div className="header">
          <div className="logo-container">
              <img 
              className="logo"
              src={LOGO_URL}
              />
          </div>
          
         
          <div className="nav-items">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li>Cart</li>
                <button className="log" 
                onClick={() => {
                    btnLog === "Login"?
                    setBtnLog("Logout") 
                    : setBtnLog ("Login");
                }}>
                    {btnLog}
                </button>
              </ul>
          </div>
      </div>
      );
  };

  export default Header;