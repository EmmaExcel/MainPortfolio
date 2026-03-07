import "./components.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
const SkillBadge = ({ label }) => {
  const [highlight, setHighlight] = useState(false);
  const [bursts, setBursts] = useState([]);
  const idRef = useRef(0);

  const handleActivate = (e) => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1000);

    const rect = e.currentTarget.getBoundingClientRect();
    const isMouse = typeof e.clientX === "number" && typeof e.clientY === "number";
    const x = isMouse ? e.clientX - rect.left : rect.width / 2;
    const y = isMouse ? e.clientY - rect.top : rect.height / 2;

    const particleCount = 12;
    const particles = Array.from({ length: particleCount }).map((_, i) => {
      const angle = Math.PI * 2 * (i / particleCount) + Math.random() * 0.5;
      const distance = 24 + Math.random() * 28;
      const size = 3 + Math.random() * 3;
      const duration = 0.6 + Math.random() * 0.4;
      return { id: i, angle, distance, size, duration };
    });

    const burstId = idRef.current++;
    setBursts((prev) => [...prev, { id: burstId, x, y, particles }]);

    // Cleanup burst after animation completes
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 1200);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleActivate(e);
    }
  };

  return (
    <motion.p
      className={`skillBadge ${highlight ? "skillBadgeActive" : ""}`}
      transition={{ duration: 0.7 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onClick={handleActivate}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Select skill ${label}`}
    >
      <span className="skillBadgeLabel">{label}</span>
      {bursts.map((b) =>
        b.particles.map((p) => {
          const dx = Math.cos(p.angle) * p.distance;
          const dy = Math.sin(p.angle) * p.distance;
          return (
            <motion.span
              key={`b-${b.id}-p-${p.id}`}
              className="particle"
              style={{ left: b.x, top: b.y, width: p.size, height: p.size }}
              initial={{ x: 0, y: 0, opacity: 0.95, scale: 0.8 }}
              animate={{ x: dx, y: dy, opacity: 0, scale: 1.15 }}
              transition={{ duration: p.duration, ease: "easeOut" }}
            />
          );
        })
      )}
    </motion.p>
  );
};

export const Services = () => {
  const skill = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Python" },
    { id: 4, name: "React" },
    { id: 5, name: "Next.js" },
    { id: 6, name: "Vue 3" },
    { id: 7, name: "React Native" },
    { id: 8, name: "Express" },
    { id: 9, name: "Node.js" },
    { id: 10, name: "Nest.js" },
    { id: 11, name: "Ionic" },
    { id: 12, name: "Redux" },
    { id: 13, name: "Zustand" },
    { id: 14, name: "Vue" },
    { id: 15, name: "Pinia" },
    { id: 16, name: "React Query" },
    { id: 17, name: "Jest" },
    { id: 18, name: "Cypress" },
    { id: 19, name: "Playwright" },
    { id: 20, name: "Firebase" },
    { id: 21, name: "GraphQL (Apollo)" },
    { id: 22, name: "MongoDB" },
    { id: 23, name: "Azure" },
    { id: 24, name: "Selenium" },
    { id: 25, name: "Socket.io" },
    { id: 26, name: "Tailwind CSS" },
    { id: 27, name: "Headless UI" },
    { id: 28, name: "Radix UI" },
    { id: 29, name: "PWA" },
    { id: 30, name: "SSR" },
    { id: 31, name: "Responsive Design" },
    { id: 32, name: "Git" },
    { id: 33, name: "CI/CD" },
  ];


  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleSkills = expanded || !isMobile ? skill : skill.slice(0, 12);
  const canToggle = isMobile && skill.length > 12;

  const experiences = [
    {
      role: "Mobile Developer",
      period: "Nov 2025 – Jan 2026",
      company: "MyCity Logistics",
      description:
        "Spearheaded the entire product lifecycle of the MyCity Logistics mobile application from conceptualization to App Store deployment. Architected responsive, cross-platform layouts for iOS and Android using React Native and Expo. Managed platform-specific challenges including complex iOS/Android keyboard interactivity bugs.",
      type: "Contract",
      location: "Canada",
    },
    {
      role: "Software Engineering Intern",
      period: "Jun 2025 – Nov 2025",
      company: "Tolaram",
      description:
        "Managed Azure servers, SAP integration, and system-wide database optimization. Installed and maintained network infrastructure including LAN cabling, mesh networks, and biometric systems. Developed an IoT-based product dispatch system using Raspberry Pi and a barcode scanner.",
      type: "Internship",
      location: "Lagos, NG",
    },
    {
      role: "Fullstack Software Engineer",
      period: "May 2025 – Sep 2025",
      company: "Ruvira",
      description:
        "Designed and developed a therapy web app MVP in one week with API and AI integration. Engineered seamless data flow between frontend and backend, optimizing AI integration for fast, reliable performance.",
      type: "Contract",
      location: "NG",
    },
    {
      role: "Software Engineer / Technical Director",
      period: "Nov 2023 – Aug 2025",
      company: "Nutlip",
      description:
        "Led frontend and mobile architecture for a white-label real estate platform using Next.js and React Native. Migrated backend to NestJS. Integrated real-time data using Socket.io and oversaw technical hiring and sprint planning.",
      type: "Full-time",
      location: "Leeds, UK",
    },
    {
      role: "Mobile Software Engineer",
      period: "Aug 2024 – Apr 2025",
      company: "ServiceMe",
      description:
        "Migrated the ServiceMe app from Ionic to React Native, improving cross-platform performance. Implemented responsive UI patterns and integrated real-time updates with REST APIs. Built scalable APIs to automate payment processing.",
      type: "Contract",
      location: "Abuja, NG",
    },
    {
      role: "Mobile Developer",
      period: "Short-term Contract",
      company: "COZA",
      description:
        "Completed a focused, short-term contract to update and stabilize a production mobile application. Audited the codebase to fix critical user-facing bugs, including \"ghost touch\" issues. Resolved iOS specific architectural and Xcode build issues, culminating in a stable Apple App Store redeployment.",
      type: "Contract",
    },
    {
      role: "Software Engineer",
      period: "Mar 2022 – Jan 2023",
      company: "Smiles Collection",
      description:
        "Built e-commerce interfaces using Vue.js and Tailwind CSS, improving user experience and site responsiveness across devices. Integrated APIs for product, cart, and order management, achieving faster load times.",
      type: "Full-time",
      location: "Lagos, NG",
    },
  ];

  return (
    <>
      <section className="servicesSection">
        <div className="skill">
          <div className="skillHeader">
            <p>SKILLS</p>
          </div>

          <div className="skillList">
            {visibleSkills.map((skill) => (
              <SkillBadge key={`${skill.id}-${skill.name}`} label={skill.name} />
            ))}
          </div>
          {canToggle && (
            <div className="skillActions">
              <button
                type="button"
                className="skillToggle"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls="skill-list"
              >
                {expanded ? "View less" : "View more"}
              </button>
            </div>
          )}
        </div>


        <div className="experience">
          <div className="experienceHeader">
            <p>EXPERIENCE</p>
          </div>

          <div className="experienceCards">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                className="experienceCard"
                transition={{ duration: 0.5, delay: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="experienceCardHeader">
                  <div className="experienceIcon">
                    <FaBriefcase size={18} />
                  </div>
                  <div className="experienceTitleBlock">
                    <p className="experienceTitle">{exp.role}  {exp.type && <span className="badge">{exp.type}</span>} <span className="badge">{exp.period}</span>  </p>

                    <p className="experienceCompany">{exp.company}</p>
                  </div>
                </div>
                <p className="experienceDescription">{exp.description}</p>
                {exp.location && <p className="experienceLocation">{exp.location}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
