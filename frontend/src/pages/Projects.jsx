import { useState, useRef, useEffect, useCallback } from "react";
import "./Projects.css";
import { home, messages, certificates } from "../assets/projects/hunar-bazaar";
import { pdf, ai } from "../assets/projects/ai-voice";

const PROJECTS = [
  {
    id: "1",
    title: "Hunar Bazaar",
    emoji: "🏪",
    subtitle: "Peer-to-peer Skill Exchange Platform",
    description:
      "A platform where users can teach and learn skills without monetary transactions. Features real-time video sessions, in-app messaging, and NFT-based certification to verify completed skill exchanges.",
    tags: ["MERN", "Firebase", "NFT", "Jitsi", "Stripe"],
    live: "https://hunar-bazaar-sigma.vercel.app/#/",
    media: [
      { type: "image", src: home,         alt: "Hunar Bazaar homepage" },
      { type: "image", src: certificates, alt: "Certificate page" },
      { type: "image", src: messages,     alt: "Messages screen" },
    ],
    color: "sage",
  },
  {
    id: "2",
    title: "Intellifit",
    emoji: "🏋️",
    subtitle: "AI-powered Fitness & Diet Planner",
    description:
      "Built backend for AI-powered fitness application, generates personalized meal and workout plans based on user inputs like weight targets, dietary needs, and food preferences. Built during my internship at Digital Genei.",
    tags: ["MERN", "AI"],
    github: "https://github.com/emaanfatima28",
    live: "",
    media: [],
    color: "peach",
  },
  {
    id: "3",
    title: "AI Voice Cloning",
    emoji: "🎙️",
    subtitle: "Document-to-Speech with Voice Cloning",
    description:
      "A generative AI platform that converts PDFs into natural-sounding audio. Integrates text extraction and TTS pipelines, with custom voice cloning via external APIs to personalize audio output.",
    tags: ["Python", "TTS", "Voice Cloning", "PDF Processing", "Generative AI"],
    github: "https://github.com/emaanfatima28/TTS_-_VoiceCloning.git",
    live: "",
    media: [
      { type: "image", src: ai,  alt: "AI Voice Cloning interface" },
      { type: "video", src: pdf, alt: "PDF processing screen" },
    ],
    color: "sky",
  },
  {
    id: "4",
    title: "Empathetic Chatbot",
    emoji: "💬",
    subtitle: "Emotionally Aware Dialogue System",
    description:
      "A transformer-based seq2seq model trained for emotionally aware dialogue generation. Produces human-like responses that understand emotional context and reply with empathy.",
    tags: ["Python", "Transformers", "NLP", "seq2seq", "Deep Learning"],
    github: "https://github.com/Malaika-tech/empathetic_chatbot.git",
    live: "",
    media: [],
    color: "lavender",
  },
];

/* ─────────────────────────────────────────
   Lightbox — no zoom trigger, just arrow nav
───────────────────────────────────────── */
function Lightbox({ media, index, onClose, onPrev, onNext }) {
  const item = media[index];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>

      {media.length > 1 && (
        <button
          className="lightbox__arrow lightbox__arrow--prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >‹</button>
      )}

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        {item.type === "video" ? (
          <video src={item.src} controls autoPlay className="lightbox__media" />
        ) : (
          <img src={item.src} alt={item.alt} className="lightbox__media" />
        )}
      </div>

      {media.length > 1 && (
        <button
          className="lightbox__arrow lightbox__arrow--next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >›</button>
      )}

      {media.length > 1 && (
        <div className="lightbox__counter">{index + 1} / {media.length}</div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MediaSlider — no zoom hint, no click-to-open
───────────────────────────────────────── */
const PLACEHOLDER_COLORS = {
  sage:     ["#d4ead9", "#7daa8b"],
  peach:    ["#fdecd8", "#f5c49a"],
  sky:      ["#ddf0ff", "#a8c8e8"],
  lavender: ["#ede4f5", "#c8aadc"],
};

function MediaSlider({ media, color }) {
  const [current, setCurrent] = useState(0);
  const touchStart            = useRef(null);
  const mediaLen              = media?.length ?? 0;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + mediaLen) % mediaLen), [mediaLen]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % mediaLen),             [mediaLen]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  const [bg, fg] = PLACEHOLDER_COLORS[color] ?? PLACEHOLDER_COLORS.sage;

  if (!mediaLen) return null; // no media = render nothing

  return (
    <div className="slider" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div
        className="slider__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {media.map((item, i) => (
          <div key={i} className="slider__slide">
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                playsInline
                className="slider__media"
              />
            ) : (
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="slider__media"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="slider__placeholder" style={{ background: bg, display: "none" }}>
                  <span style={{ fontSize: "2.5rem" }}>🖼️</span>
                  <span style={{ color: fg, fontWeight: 700, fontSize: "0.85rem" }}>
                    Screenshot coming soon
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {mediaLen > 1 && (
        <>
          <button className="slider__arrow slider__arrow--prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="slider__arrow slider__arrow--next" onClick={next} aria-label="Next">›</button>
          <div className="slider__dots">
            {media.map((_, i) => (
              <button
                key={i}
                className={`slider__dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   ProjectCard — description on top, media below
───────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const hasMedia = project.media?.length > 0;

  return (
    <article className={`project-card project-card--${project.color}`}>

      {/* ── TOP: full-width text info ── */}
      <div className="project-card__body">
        <div className="project-card__top">
          <span className="project-card__emoji">{project.emoji}</span>
          <h2 className="project-card__title">{project.title}</h2>
          <span className="project-card__num">0{index + 1}</span>
        </div>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn--gh">
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="proj-btn proj-btn--live">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* ── BOTTOM: media slider (only if media exists) ── */}
      {hasMedia && (
        <div className="project-card__media">
          <MediaSlider media={project.media} color={project.color} />
        </div>
      )}

    </article>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <div className="projects-header__tag">✨ Work</div>
        <h1 className="projects-header__title">Things I've Built</h1>
        <p className="projects-header__sub">
          Here are some of the projects that i worked on! 💭
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </main>
  );
}