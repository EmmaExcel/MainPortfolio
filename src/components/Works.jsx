import { Link } from "react-router-dom";
import { data } from './Project-data';

export const Works = () => {
  const sortedData = [...data].sort((a, b) => a.id - b.id);

  const getCardStyle = (index) => {
    const cycle = index % 5;
    if (cycle === 0) return "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-[21/9]";
    if (cycle === 1 || cycle === 2) return "col-span-1 aspect-[4/5]";
    return "col-span-1 md:col-span-1 aspect-square";
  };

  return (
    <>
      <section id="works" className="flex justify-between items-end mb-12 border-b border-white/10 pb-4 fade-in-up">
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">Selected Works</h3>
        <span className="font-headline-md text-headline-md text-on-surface-variant">(2021-2026)</span>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-32">
        {sortedData.map((work, index) => {
          const cardStyle = getCardStyle(index);
          const programsArray = work.programs ? work.programs.split(/[, ]+/).filter(Boolean).slice(0, 3) : [];
          const isWhiteBg = index % 5 === 4;

          if (isWhiteBg) {
            return (
              <Link to={`/projectdetail/${work.id}`} key={work.id} className={`group relative overflow-hidden ghost-border rounded-lg glass-panel fade-in-up flex items-center justify-center p-8 ${cardStyle}`}>
                <img alt={work.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" src={work.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">{work.type}</span>
                </div>
              </Link>
            );
          }

          if (index % 5 === 3) {
            return (
              <Link to={`/projectdetail/${work.id}`} key={work.id} className={`group relative overflow-hidden ghost-border rounded-lg glass-panel fade-in-up bg-surface-elevated flex items-center justify-center p-8 ${cardStyle}`}>
                <img alt={work.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-700" src={work.img} />
                <h4 className="relative z-10 font-display-xl text-[48px] md:text-[64px] text-primary font-extrabold tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity text-center drop-shadow-lg">{work.title}</h4>
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent">
                  <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">{work.type}</span>
                </div>
              </Link>
            );
          }

          return (
            <Link to={`/projectdetail/${work.id}`} key={work.id} className={`group relative overflow-hidden ghost-border rounded-lg glass-panel fade-in-up ${cardStyle}`}>
              <img alt={work.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80 scale-100 group-hover:scale-105" src={work.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {programsArray.map((prog, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full font-label-mono text-[10px] text-white uppercase">{prog}</span>
                    ))}
                  </div>
                  <h4 className="font-headline-md text-[24px] md:text-[32px] text-primary mb-1 uppercase">{work.title}</h4>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">{work.type}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};