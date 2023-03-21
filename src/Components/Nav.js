import { Link
 } from "react-router-dom";
import logo from "../logo.png";

function Nav() {
    return (
      <div className="nav">
        <img src={logo} width="200px" />
        <ul>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/partnerships">Partnerships</Link>
        </ul>
        <div className="nav-button">
            <Link to="/contact" className="button white">Get Started</Link>
        </div>
      </div>
    );
  }
  
  export default Nav;
  