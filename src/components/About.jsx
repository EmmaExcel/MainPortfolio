import "./components.css";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <>
      <section id="about" className="aboutSection">
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
                Welcome to my space on the web. I enjoy solving problems and learning while building. I focus on writing clean, efficient code and creating products that feel simple but work well.
              </motion.p>
            </div>
            <div className="aboutInfo">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                I build across the TypeScript and JavaScript ecosystem, using React Native, React, and Node.js. I also work with Python, C#, Flutter, and databases like MongoDB and PostgreSQL.
              </motion.p>
            </div>
            <div className="aboutInfo">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                I'm currently expanding into Cybersecurity and AI engineering, with a focus on building secure and intelligent systems.

              </motion.p>



            </div>


            <div className="aim">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                "My AIM is to become so skilled and useful that i'm hard to overlook"

              </motion.p>

            </div>

            <div className="contactLink">
              <a href="https://github.com/EmmaExcel" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="https://twitter.com/Oppai_senpai6" target="_blank" rel="noopener noreferrer">TWITTER</a>
              <a href="https://www.linkedin.com/in/excel-emma-457b61201" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="https://flowcv.com/resume/qjb61lq7p48j" target="_blank" rel="noopener noreferrer">RESUME</a>
              <a href="mailto:excelemma6@gmail.com">MAIL</a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
