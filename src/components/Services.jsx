import "./components.css";
import { motion } from "framer-motion";
export const Services = () => {
  const skill = [
    {
      id: 1,
      name: "React JS",
    },
    {
      id: 2,
      name: "Next JS",
    },

    {
      id: 3,
      name: "Astro.",
    },
    {
      id: 4,
      name: "Three JS",
    },
    {
      id: 5,
      name: "Redux",
    },
    {
      id: 6,
      name: "Javascript",
    },
    {
      id: 7,
      name: "Tailwind",
    },
    {
      id: 8,
      name: "React Native",
    },
    {
      id: 8,
      name: "Express JS",
    },
    {
      id: 9,
      name: "Node JS",
    },
    {
      id: 10,
      name: "MongoDB",
    },
    {
      id: 11,
      name: "Firebase",
    },
    {
      id: 12,
      name: "Git & GitHub",
    },
    {
      id: 13,
      name: "Framer Motion",
    },
    {
      id: 14,
      name: "Figma",
    },
    {
      id: 15,
      name: "Web Design",
    },

    {
      id: 16,
      name: "Django",
    }
    , {
      id: 17,
      name: "Python",
    }, {
      id: 18,
      name: "TypeScript",
    }, {
      id: 19,
      name: "NestJs",
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
            {skill.map((skill) => (
              <motion.p transition={{ duration: 0.7 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} key={skill.id}>{skill.name}</motion.p>
            ))}
          </div>
        </div>
        {/* <div className="services">
          <div className="servciesHeader">
            <p>SERVICES</p>
          </div>

          <div className="servicesList">
            {services.map((service) => (
              <motion.p transition={{ duration: 0.7, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} key={service.id}>{service.name}</motion.p>
            ))}
          </div>
        </div> */}
        <div className="experience">
          <div className="experienceHeader">
            <p>EXPERIENCE</p>
          </div>

          <div className="experienceListContainer">
            <motion.div transition={{ duration: 0.7, delay: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} className="experienceList">
              <p>Nutlip</p>
              <p>United Kingdom - Leeds</p>
              <p>Nov 2023 - Mar 2025</p>
            </motion.div>
            <motion.div transition={{ duration: 0.7, delay: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} className="experienceList">
              <p>Smiles Collection</p>
              <p>Nigeria - Lagos </p>
              <p>June 2022 - Jan 2023</p>
            </motion.div>
            <motion.div transition={{ duration: 0.7, delay: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} className="experienceList">
              <p>Renbi Women</p>
              <p>Nigeria - Abuja </p>
              <p>Nov 2023 - Dec 2023</p>
            </motion.div>
            <motion.div transition={{ duration: 0.7, delay: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} className="experienceList">
              <p>ServiceMe</p>
              <p>Nigeria - Abuja </p>
              <p>Aug 2024 - May 2025</p>
            </motion.div>
            <motion.div transition={{ duration: 0.7, delay: 1.5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} className="experienceList">
              <p>Lucky Fibre Industry</p>
              <p>Nigeria - Lagos </p>
              <p>June 2024 - Nov 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
