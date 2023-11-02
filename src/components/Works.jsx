import { AiOutlineEye } from "react-icons/ai";
import "./components.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { data } from "./Project-data";

export const Works = () => {
  const [hover, setHover] = useState(false);

  const Mouseenter = () => {
    setHover(true);
  };

  const Mouseleave = () => {
    setHover(false); // Corrected from "flase" to "false"
  };

  return (
    <>
      <section className="workSection">
        <div className="workContainer">
          <div className="workHeader">
            <p>SELECTED WORKS</p>
            <p>{"(2021-2023)"}</p>
          </div>

          <div className="workListContainer">
           {
            data.map((index)=>(
              <WorkBox
              key={index.id}
              id={index.id}
              title={index.title}
              path={index.path}
              img={index.img}
              hover={hover}
              Mouseenter={Mouseenter}
              Mouseleave={Mouseleave}
            />
            ))
           }
            
          </div>
        </div>
      </section>
    </>
  );
};

const WorkBox = ({ hover, Mouseleave, Mouseenter,img,path,title,id }) => {
 
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      className="workBoxContainer"
    >
      <div
        className="workBox"
        onMouseEnter={Mouseenter}
        onMouseLeave={Mouseleave}
      >
        <img src={img} alt="" />
        {hover && (
          <div className="view">
            <AiOutlineEye />
            <p>VIEW PROJECT</p>
          </div>
        )}
      </div>

      <div className="workText">
        <p>{title}</p>
        <p>WEBSITE</p>
      </div>
    </motion.div>
  );
};
