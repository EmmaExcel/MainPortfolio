
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <>
      <section className="homeSection">
        <div className="homeContainer">

          <motion.p
            className="hometextone"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SOFTWARE ENGINEER
          </motion.p>

          <div className="hometexttwo">
            <motion.p
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>CRAFTING</span> SCALABLE SOLUTIONS <span>FOR </span>
              WEB, MOBILE & INTELLIGENT AUTOMATION.
            </motion.p>
          </div>

          <div className="hometextthree">
            <motion.p
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to my space on the web. I enjoy solving problems and learning while building. I focus on writing clean, efficient code and creating products that feel simple but work well.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
