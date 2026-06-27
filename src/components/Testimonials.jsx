function Testimonials() {

const reviews=[
{
name:"Priya",
text:"Best Ice Cream ever! ❤️"
},
{
name:"Rahul",
text:"Amazing Taste & Fast Delivery 🍦"
},
{
name:"Sneha",
text:"My family loves this place 😍"
}
]

return(

<section className="testimonials">

<h2>Customer Reviews</h2>

<div className="review-grid">

{
reviews.map((item,index)=>(

<div className="review-card" key={index}>

<h3>{item.name}</h3>

<p>"{item.text}"</p>

⭐⭐⭐⭐⭐

</div>

))
}

</div>

</section>

)

}

export default Testimonials