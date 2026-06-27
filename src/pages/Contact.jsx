import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! 🍦");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📞 Contact Us</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          required
        />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;