import "./Contact.css";

export default function Contact() {
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

      <div className="contact-layout contact-layout--centered">
        <div className="contact-info contact-info--grid">
          <a href="mailto:emaanfatimaa04@gmail.com" className="contact-info__item contact-info__item--link">
            <span className="contact-info__icon">📧</span>
            <span className="contact-info__label">Email</span>
            <span className="contact-info__value">emaanfatimaa04@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/emaan-fatima28" target="_blank" rel="noreferrer" className="contact-info__item contact-info__item--link">
            <span className="contact-info__icon">💼</span>
            <span className="contact-info__label">LinkedIn</span>
            <span className="contact-info__value">/emaan-fatima28</span>
          </a>

          <a href="https://github.com/emaanfatima28" target="_blank" rel="noreferrer" className="contact-info__item contact-info__item--link">
            <span className="contact-info__icon">🐱</span>
            <span className="contact-info__label">GitHub</span>
            <span className="contact-info__value">emaanfatima28</span>
          </a>

          <div className="contact-info__item">
            <span className="contact-info__icon">📍</span>
            <span className="contact-info__label">Location</span>
            <span className="contact-info__value">Faisalabad, Pakistan 🇵🇰</span>
          </div>

          <a href="mailto:emaanfatimaa04@gmail.com" className="contact-cta">
            Send me an email ✉️
          </a>
        </div>
      </div>
    </main>
  );
}
