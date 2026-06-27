import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar(){

const {cart}=useContext(CartContext);

return(

<nav className="navbar">

<div className="logo">
🍦 IceCream
</div>

<ul className="nav-links">

<li><Link to="/">Home</Link></li>

<li><Link to="/about">About</Link></li>

<li><Link to="/menu">Menu</Link></li>

<li><Link to="/offers">Offers</Link></li>

<li><Link to="/gallery">Gallery</Link></li>

<li><Link to="/contact">Contact</Link></li>

<li>

<Link to="/cart">

🛒 ({cart.length})

</Link>

</li>

</ul>

</nav>

)

}

export default Navbar;