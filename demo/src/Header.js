import {Link} from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Contact</li>
            <li>Cart</li>
        </div>
        </>
    )
}

export default Header;