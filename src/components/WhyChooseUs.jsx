function WhyChooseUs() {
  const data = [
    {
      icon: "🥛",
      title: "Fresh Milk",
      text: "Made with 100% fresh dairy milk.",
    },
    {
      icon: "🍓",
      title: "Natural Fruits",
      text: "Real fruits with rich natural taste.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Get your favorite ice cream quickly.",
    },
  ];

  return (
    <section className="why">
      <h2>Why Choose Us</h2>

      <div className="why-grid">
        {data.map((item, index) => (
          <div className="why-card" key={index}>
            <h1>{item.icon}</h1>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;