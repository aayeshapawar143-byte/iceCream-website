function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="hero-tag">🍦 Premium Ice Cream</span>

        <h1>Fresh & Tasty</h1>

        <h2>Ice Cream</h2>

        <p>
          Enjoy delicious handcrafted ice cream made with fresh milk,
          natural fruits and lots of love.
        </p>

        <div className="hero-buttons">
          <button className="btn1">Order Now</button>
          <button className="btn2">Explore Menu</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700"
          alt="Ice Cream"
        />
      </div>
    </section>
  );
}

export default Hero;