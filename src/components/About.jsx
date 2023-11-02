import "./components.css";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <>
      <section className="aboutSection">
        <div className="aboutContainer">
          <div className="about">
            <div className="aboutHeader">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
              >
                ABOUT
              </motion.p>
            </div>

            <div className="aboutInfo">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                I'm a Frontend Developer with hands-on experience in web
                development, I'm dedicated to crafting extraordinary web
                experiences that connect with diverse global audiences. I'm
                passionate about staying at the forefront of technology,
                consistently adapting to the ever-evolving digital landscape.
                Let's collaborate to shape the digital future—one line of code
                at a time. Your vision, my code, unlimited possibilities.
              </motion.p>
            </div>
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aboutImg"
            ></motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
