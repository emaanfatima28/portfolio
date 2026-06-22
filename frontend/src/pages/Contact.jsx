import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      await axios.post("/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-header">
        <div className="contact-header__tag">💌 Contact</div>
        <h1 className="contact-header__title">Let's talk!</h1>
        <p className="contact-header__sub">
          Got a project idea or an opportunity?<br />
          Feel free to reach out! 🌸
        </p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="What should I call you?"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="What's on your mind? ✨"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${status === "loading" ? "loading" : ""}`}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending... 🌿" : "Send Message 🍃"}
          </button>

          {status === "success" && (
            <p className="form-feedback form-feedback--success">
              🌸 Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-feedback--error">
              Something went wrong — try emailing me directly!
            </p>
          )}
        </form>

        <aside className="contact-aside">
          <div className="contact-info">
            <div className="contact-info__item">
              <span className="contact-info__label">📧 Email</span>
              <a href="mailto:emaanfatimaa04@gmail.com">emaanfatimaa04@gmail.com</a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">💼 LinkedIn</span>
              <a href="https://linkedin.com/in/emaan-fatima28" target="_blank" rel="noreferrer">
                /emaan-fatima28
              </a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">🐱 GitHub</span>
              <a href="https://github.com/emaanfatima28" target="_blank" rel="noreferrer">
                emaanfatima28
              </a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">📍 Location</span>
              <span>Faisalabad, Pakistan 🇵🇰</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
