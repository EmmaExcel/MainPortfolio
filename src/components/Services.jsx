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
  ];
  const services = [
    {
      id: 1,
      name: "Frontend Development",
    },
    {
      id: 2,
      name: "Performance & SEO  ",
    },
   
    {
      id: 3,
      name: "Accessibility",
    },
    {
      id: 4,
      name: "Testing and Debugging",
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
        <div className="services">
          <div className="servciesHeader">
            <p>SERVICES</p>
          </div>

          <div className="servicesList">
            {services.map((service) => (
              <motion.p transition={{ duration: 0.7 , delay:1}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} key={service.id}>{service.name}</motion.p>
            ))}
          </div>
        </div>
        <div className="experience">
          <div className="experienceHeader">
            <p>EXPERIENCE</p>
          </div>

          <motion.div transition={{ duration: 0.7 , delay:1.5}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} className="experienceList">
            <p>Freelancer</p>
            <p>N/A</p>
            <p>2022-2023</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
