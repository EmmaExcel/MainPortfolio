import { Navbar } from "../Components/Navbar";
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <>
      <section className="homeSection">
        <Navbar />
        <div className="homeContainer">
          
            <motion.p
                className="hometextone"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7 }}
            >
              FRONTEND DEVELOPER
            </motion.p>
          
          <div className="hometexttwo">
            <motion.p
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span>TRANSFORMING THE</span> DIGITAL WORLD <span>WITH </span>
              EYE-CATCHING, INTERACTIVE EXPERIENCES.
            </motion.p>
          </div>

            <div className="hometextthree">
            <motion.p
                initial={{ y: 70, opacity:0 }}
                animate={{ y: 0 ,opacity:1}}
                transition={{ duration: 0.4 }}
            >
            Welcome to the world of Stunning Web Development, where ingenuity
            and expertise entwine to create marvelous websites. Marvel at the
            genius of an elite web developer and take a journey through a
            universe of exquisite web apps for creatives, businesses, and
            individuals alike.
          </motion.p>
            </div>
        </div>
      </section>
    </>
  );
};
