import { Link, useParams } from "react-router-dom";
import { data } from "../components/Project-data";
import { useEffect } from "react";
import "../components/components.css";

export const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  const projectIndex = data.findIndex((item) => item.id === projectId);
  const project = data[projectIndex];

  const previousProject = projectIndex > 0 ? data[projectIndex - 1] : null;
  const nextProject = projectIndex < data.length - 1 ? data[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return <div className="text-white text-center pt-32">Project not found</div>;

  const programsArray = project.programs ? project.programs.split(/[, ]+/).filter(Boolean) : [];
  


  return (
    <>
      <div className="fixed inset-0 w-full h-full precision-grid -z-10"></div>
      
      <main className="flex-grow relative z-10 pt-48 pb-margin-desktop md:pb-margin-desktop max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        {/* Hero Title */}
        <section className="mb-24 md:mb-32 fade-in-up">
          <h1 className="font-display-xl text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] text-primary uppercase tracking-tighter max-w-full break-words">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 mt-8">
            {project.path && <a href={project.path} target="_blank" rel="noreferrer" className="font-label-mono text-[12px] text-on-surface-variant hover:text-primary uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white/5 transition-all">{project.path.includes("npmjs.com") ? "NPM Package" : "Live Demo"}</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="font-label-mono text-[12px] text-on-surface-variant hover:text-primary uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white/5 transition-all">GitHub</a>}
            {project.apk && <a href={project.apk} target="_blank" rel="noreferrer" className="font-label-mono text-[12px] text-on-surface-variant hover:text-primary uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white/5 transition-all">APK</a>}
          </div>
        </section>

        {/* Description & Metadata */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 border-t border-white/20 pt-16 fade-in-up">
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Description</h3>
            <p className="font-body-lg text-body-lg text-primary text-balance">
              {project.desc}
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end mt-12 md:mt-0">
            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
              <span className="font-body-md text-on-surface-variant">Client</span>
              <span className="font-body-md text-primary font-bold">{project.title}</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
              <span className="font-body-md text-on-surface-variant">Year</span>
              <span className="font-body-md text-primary font-bold">{project.year}</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/20 pb-4">
              <span className="font-body-md text-on-surface-variant">Type</span>
              <span className="font-body-md text-primary font-bold">{project.type}</span>
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        {project.detailImage?.length > 0 && (
          <section className="flex flex-col gap-16 md:gap-32 mb-32">
            {project.detailImage.map((img, idx) => (
              <div key={img.id} className="w-full fade-in-up">
                {img.isVideo ? (
                  <video src={img.imgUrl} autoPlay loop muted playsInline className="w-full h-auto object-cover rounded-lg" />
                ) : (
                  <img alt={`${project.title} ${idx}`} className="w-full h-auto object-cover rounded-lg" src={img.imgUrl} loading={idx === 0 ? "eager" : "lazy"} />
                )}
              </div>
            ))}
          </section>
        )}

        {/* Tech Stack Bento Grid */}
        {programsArray.length > 0 && (
          <section className="mb-32 fade-in-up">
            <div className="border-t border-white/20 pt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-12">
                {programsArray.map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">Technology</span>
                    <span className="font-headline-md text-[24px] text-primary">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Nav */}
        <section className="flex justify-between items-center border-t border-white/20 pt-16 pb-16 fade-in-up">
          {previousProject ? (
            <Link to={`/projectdetail/${previousProject.id}`} className="group flex flex-col items-start">
              <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Previous</span>
              <span className="font-headline-md text-[20px] md:text-[32px] text-primary max-w-[200px] md:max-w-md truncate">{previousProject.title}</span>
            </Link>
          ) : <div />}
          {nextProject ? (
            <Link to={`/projectdetail/${nextProject.id}`} className="group flex flex-col items-end text-right">
              <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">Next</span>
              <span className="font-headline-md text-[20px] md:text-[32px] text-primary max-w-[200px] md:max-w-md truncate">{nextProject.title}</span>
            </Link>
          ) : <div />}
        </section>
      </main>
    </>
  );
};
