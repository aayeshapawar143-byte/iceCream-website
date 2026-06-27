import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Menu() {

  const { addToCart } = useContext(CartContext);
const [search, setSearch] = useState("");
  
const [quantity, setQuantity] = useState({});

const items = [

    {
      name:"Chocolate Bliss",
      price:99,
      image:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500"
    },

    {
      name:"Vanilla Dream",
      price:89,
      image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"
    },

    {
      name:"Strawberry Crush",
      price:109,
      image:"https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500"
    },

    {
      name:"Mango Magic",
      price:119,
      image:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500"
    },

    {
      name:"Black Forest",
      price:129,
      image:"https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=500"
    },

    {
      name:"Cookies Cream",
      price:139,
      image:"https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=500"
    }

  ];

  return(

<section className="menu-page">

<h1>Our Ice Cream Menu 🍦</h1>

<input
  type="text"
  placeholder="🔍 Search Ice Cream..."
  className="search-box"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

<div className="menu-grid">

{

items
.filter((item)=>
item.name.toLowerCase().includes(search.toLowerCase())
)
.map((item,index)=>(


<div className="menu-card" key={index}>

<img src={item.image} alt={item.name}/>

  <h2>{item.name}</h2>

<h3>₹{item.price}</h3>

<div className="quantity">

  <button
    onClick={() =>
      setQuantity({
        ...quantity,
        [item.name]: Math.max((quantity[item.name] || 1) - 1, 1),
      })
    }
  >
    -
  </button>

  <span>{quantity[item.name] || 1}</span>

  <button
    onClick={() =>
      setQuantity({
        ...quantity,
        [item.name]: (quantity[item.name] || 1) + 1,
      })
    }
  >
    +
  </button>

</div>

<button
  onClick={() =>
    addToCart({
      ...item,
      qty: quantity[item.name] || 1,
    })
  }
>
  Add To Cart
</button>
</div>

))

}

</div>

</section>

)

}

export default Menu;