import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

const FALLBACK_PROJECTS = [
  {
    _id: "1",
    title: "Hunar Bazaar",
    description:
      "A peer-to-peer skill exchange platform where users can teach and learn skills without monetary transactions, with real-time video sessions, in-app messaging, and NFT-based certification to verify completed skill exchanges.",
    tags: ["MERN", "Firebase",  "NFT", "Jitsi", "Stripe"],
    live: "https://hunar-bazaar-sigma.vercel.app/#/",
    emoji: "🏪",
  },
  {
    _id: "2",
    title: "Intellifit — AI Fitness & Diet Planner",
    description:
      "Built backend for AI-powered fitness application, generates personalized meal and workout plans based on user inputs like weight targets, dietary needs, and food preferences. Built during my internship at Digital Genei.",
    tags: ["MERN","AI"],
    live: "",
    emoji: "🏋️",
  },
  {
    _id: "3",
    title: "AI Voice Cloning & Document-to-Speech",
    description:
      "A generative AI platform that converts PDFs into natural-sounding audio. Integrates text extraction and text-to-speech synthesis pipelines, with custom voice cloning via external APIs to personalize the audio output.",
    tags: ["Python", "TTS", "Voice Cloning", "PDF Processing", "Generative AI"],
    github: "https://github.com/emaanfatima28/TTS_-_VoiceCloning.git",
    live: "",
    emoji: "🎙️",
  },
  {
    _id: "4",
    title: "Empathetic Chatbot",
    description:
      "Designed and trained a transformer-based seq2seq model for dialogue generation, focused on producing emotionally aware, human-like responses. Built to understand emotional context and respond with empathy.",
    tags: ["Python", "Transformers", "NLP", "seq2seq", "Deep Learning"],
    github: "https://github.com/Malaika-tech/empathetic_chatbot.git",
    live: "",
    emoji: "💬",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        setProjects(res.data.length ? res.data : FALLBACK_PROJECTS);
      })
      .catch(() => {
        setProjects(FALLBACK_PROJECTS);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="projects-page">
      <div className="projects-header">
        <div className="projects-header__tag">✨ Work</div>
        <h1 className="projects-header__title">Things I've Built</h1>
        <p className="projects-header__sub">
          Here are some of the projects I've worked on 💭
        </p>
      </div>

      {loading ? (
        <div className="projects-loading">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton" />
          ))}
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={p._id} className="project-card">
              <div className="project-card__index">
                {p.emoji || String(i + 1).padStart(2, "0")}
              </div>
              <div className="project-card__body">
                <h2 className="project-card__title">{p.title}</h2>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
