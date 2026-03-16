import { AiOutlineEye } from "react-icons/ai";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from './Project-data';

export const Works = () => {
  return (
    <>
      <section id="works" className="workSection">
        <div className="workContainer">
          <div className="workHeader">
            <p>SELECTED WORKS</p>
            <p>{"(2021-2025)"}</p>
          </div>

          <div className="workListContainer">
            {[...data].sort((a, b) => a.id - b.id).map((work, index) => (
              <WorkBox key={work.id} work={work} id={work.id} img={work.img} title={work.title} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const WorkBox = ({ id, work, img, title, index }) => {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Mouseenter = () => {
    setHover(true);
  };

  const Mouseleave = () => {
    setHover(false);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)",
          transition: { 
            type: "tween", 
            ease: "easeOut", 
            duration: 0.8,
            // Small delay based on index to create a staggered effect
            delay: (index % 2) * 0.15 
          }
        },
        hidden: { 
          opacity: 0, 
          y: 50, 
          scale: 0.95,
          filter: "blur(5px)"
        },
      }}
      className="workBoxContainer"
    >
      <div className="workBox" onMouseEnter={Mouseenter} onMouseLeave={Mouseleave}>
        <img src={img} alt="" />
        {hover && (
          <Link to={`/projectdetail/${id}`} className="view">
            <AiOutlineEye />
            <p>VIEW PROJECT</p>
          </Link>
        )}
      </div>

      <div className="workText">
        <p>{title}</p>
        <p>WEBSITE</p>
      </div>
    </motion.div>
  );
};