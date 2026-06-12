export const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start fade-in-up mt-16 mb-16">
      <div className="md:col-span-4">
        <h2 className="font-headline-md text-headline-md text-on-surface-variant uppercase tracking-tighter">Philosophy</h2>
      </div>
      <div className="md:col-span-8 flex flex-col gap-6">
        <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight tracking-tighter">
          Merging the raw power of machine learning with the fluid precision of human-centric design.
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          I believe that true technical elegance lies in invisibility. The most sophisticated AI models and complex backend architectures should manifest as effortless, intuitive experiences for the end user. Every line of code is an architectural decision aimed at building scalable, resilient systems that feel alive.
        </p>
      </div>
    </section>
  );
};
