function Flavors() {
  const flavors = [
    "🍫 Chocolate",
    "🍓 Strawberry",
    "🍦 Vanilla",
    "🥭 Mango",
    "🍪 Cookies & Cream",
    "🍒 Black Forest",
  ];

  return (
    <section className="flavors">
      <h2>Popular Flavors</h2>

      <div className="flavor-grid">
        {flavors.map((flavor, index) => (
          <div className="flavor-card" key={index}>
            {flavor}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flavors;