import { Link, useParams } from "react-router-dom";
import { data } from "../components/Project-data";
import "../components/components.css";
import { motion } from "framer-motion";
export const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  const projectIndex = data.findIndex((item) => item.id === projectId);
  const project = data[projectIndex];

  const previousProject = projectIndex > 0 ? data[projectIndex - 1] : null;
  const nextProject = projectIndex < data.length - 1 ? data[projectIndex + 1] : null;

  return (
    <section className="projectSection">
      <div className="projectContainer">
        <div className="projectHeader">
          <p>{project.title}</p>
          <div className="projectHeadLink">
            {project.path && <a href={project.path}>FULL CASE STUDY</a>}
            {project.github && <a href={project.github}>GITHUB</a>}
            {project.apk && <a href={project.apk}>APK</a>}
          </div>
        </div>

        <div className="descBoxContainer">
          <div className="descBox">
            <p>DESCRIPTION</p>
            <p>{project?.desc}</p>
          </div>

          <div className="projectInfo">
            <div className="client">
              <p>Client</p>
              <p>{project.title}</p>
            </div>

            <div className="year">
              <p>Year</p>
              <p>{project?.year}</p>
            </div>

            <div className="type">
              <p>Type</p>
              <p>{project?.type}</p>
            </div>
          </div>
        </div>

        <div className="projectImage">
          {project.detailImage.map((image) => (
            <>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30 },
                }}
                key={image?.id}
                src={image?.imgUrl}
                alt=""
              />
            </>
          ))}
        </div>

        <div className="Projectnav">

          {previousProject && (
            <Link to={`/projectdetail/${previousProject.id}`}>
              <div className="navButton">

                <p>{previousProject.title}</p>
                <p> {"<"} PREVIOUS PROJECT </p>
              </div>
            </Link>
          )}
          {nextProject && (
            <Link to={`/projectdetail/${nextProject.id}`}>
              <div className="navButton">
                <p>{nextProject.title}</p>
                <p>NEXT PROJECT {" >"}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
