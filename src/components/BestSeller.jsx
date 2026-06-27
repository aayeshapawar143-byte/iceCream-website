function BestSeller() {
  const products = [
    {
      name: "Chocolate Bliss",
      price: "₹99",
      image:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500",
    },
    {
      name: "Strawberry Crush",
      price: "₹109",
      image:
        "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500",
    },
    {
      name: "Vanilla Dream",
      price: "₹89",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    },
  ];

  return (
    <section className="bestseller">
      <h2>🍨 Best Sellers</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSeller;