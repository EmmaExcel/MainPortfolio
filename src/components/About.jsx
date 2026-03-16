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
                Software engineer with experience building mobile and web applications across multiple platforms.
              </motion.p>
            </div>
            <div className="aboutInfo">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Skilled in React, Next.js, Vue 3, and React Native for frontend development, with backend experience in Node.js, NestJS, Django, and API design.
              </motion.p>
            </div>
            <div className="aboutInfo">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Experienced in automation using Python and Selenium, AI integration and model fine-tuning, and blockchain development using Solidity.
              </motion.p>
            </div>
            <div className="aim">
              <motion.p
                transition={{ duration: 1, delay: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Focused on building reliable, scalable systems and solving complex engineering problems across both new products and legacy codebases.
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
