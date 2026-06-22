import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__deco">
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
          <path d="M30 4 Q20 12 10 10 Q20 14 30 20 Q40 14 50 10 Q40 12 30 4Z" fill="#7daa8b" opacity="0.5"/>
          <circle cx="30" cy="12" r="3" fill="#7daa8b" opacity="0.8"/>
        </svg>
      </div>
      <span className="footer__copy">© {new Date().getFullYear()} Emaan Fatima</span>
      <div className="footer__links">
        <a href="https://github.com/emaanfatima28" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/emaan-fatima28" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
