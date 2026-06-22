import "./Home.css";
import pic from "../assets/pic.jpg";

const skills = [
  { category: "Languages", color: "sage",     emoji: "🌿", items: ["JavaScript", "Python", "Java", "C++"] },
  { category: "Databases", color: "sky",      emoji: "🛢", items: ["MongoDB", "MySQL"] },
  { category: "Frameworks",color: "peach",    emoji: "🍂", items: ["Node.js", "Express.js"] },
  { category: "Tools",     color: "lavender", emoji: "✨", items: ["Git", "Postman","Jenkins"] },
];

export default function Home() {
  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__left">
          <div className="hero__tag">🌱 Software Engineer</div>
          <h1 className="hero__headline">
            Hi, I'm <span className="hero__accent">Emaan</span> —<br />
            I build the cozy<br />
            <span className="hero__accent">backend</span> magic.
          </h1>
          <p className="hero__sub">
           
          </p>
          <div className="hero__actions">
            <a href="/projects" className="btn btn--primary">View Projects 🍃</a>
            <a href="/contact" className="btn btn--ghost">Say Hello ✉️</a>
          </div>
        </div>

        {/* ── PROFILE PICTURE —*/}
        <div className="hero__right">
          <div className="profile-pic-wrap">
            <img
              src={pic}
              alt="Emaan Fatima"
              className="profile-pic"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about">
        <div className="about__card">
          <div className="about__avatar">
            <svg viewBox="0 0 100 100" width="80" height="80">
              <circle cx="50" cy="50" r="50" fill="#d4ead9"/>
              <circle cx="50" cy="38" r="20" fill="#7daa8b"/>
              <ellipse cx="50" cy="80" rx="28" ry="24" fill="#7daa8b"/>
              <circle cx="43" cy="35" r="3" fill="white"/>
              <circle cx="57" cy="35" r="3" fill="white"/>
              <path d="M43 46 Q50 52 57 46" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="about__body">
            <h2 className="about__title">About me 🌸</h2>
            <p>
              I work in backend development and databases, building server side logic and keeping data structured.
              I'm currently exploring deeper into backend architecture and data science, looking for opportunities where I can contribute, grow, and build things that matter.
    Outside tech, I'm a reader, and someone who finds joy in learning languages.
 
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience">
        <div className="section-header">
          <span className="section-eyebrow">Where I've worked</span>
          <h2 className="section-title">Experience 🍃</h2>
        </div>
        <div className="exp-list">
          <div className="exp-card">
            <div className="exp-card__dot" />
            <div className="exp-card__body">
              <div className="exp-card__meta">
                <span className="exp-card__role">Backend Development Intern</span>
                <span className="exp-card__period">July 2025 – Aug 2025</span>
              </div>
              <div className="exp-card__company">Digital Genei</div>
              <ul className="exp-card__points">
                <li>Built and maintained RESTful APIs using Node.js and Express.js</li>
                <li>Contributed to Intellifit — a fitness web app with AI-powered features</li>
                <li>Collaborated on backend architecture supporting AI-driven functionality</li>
                <li>Tested and debugged API endpoints using Postman</li>
              </ul>
              <div className="exp-card__tags">
                {["Node.js", "Express.js", "MongoDB", "Postman", "REST API"].map(t => (
                  <span key={t} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills">
        <div className="section-header">
          <span className="section-eyebrow">What I work with</span>
          <h2 className="section-title">My Stack 🛠️</h2>
        </div>
        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className={`skill-card skill-card--${group.color}`}>
              <div className="skill-card__top">
                <span className="skill-card__emoji">{group.emoji}</span>
                <h3 className="skill-card__category">{group.category}</h3>
              </div>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li key={item} className="skill-pill">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
