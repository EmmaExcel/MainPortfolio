export const Services = () => {
  const experiences = [
    {
      role: "Mobile Developer",
      period: "Nov 2025 – Jan 2026",
      company: "MyCity Logistics",
      description: "Spearheaded the entire product lifecycle of the MyCity Logistics mobile application from conceptualization to App Store deployment. Architected responsive, cross-platform layouts for iOS and Android using React Native and Expo. Managed platform-specific challenges including complex iOS/Android keyboard interactivity bugs.",
    },
    {
      role: "Software Engineering Intern",
      period: "Jun 2025 – Nov 2025",
      company: "Tolaram",
      description: "Managed Azure servers, SAP integration, and system-wide database optimization. Installed and maintained network infrastructure including LAN cabling, mesh networks, and biometric systems. Developed an IoT-based product dispatch system using Raspberry Pi and a barcode scanner.",
    },
    {
      role: "Fullstack Software Engineer",
      period: "May 2025 – Sep 2025",
      company: "Ruvira",
      description: "Designed and developed a therapy web app MVP in one week with API and AI integration. Engineered seamless data flow between frontend and backend, optimizing AI integration for fast, reliable performance.",
    },
    {
      role: "Software Engineer / Technical Director",
      period: "Nov 2023 – Aug 2025",
      company: "Nutlip",
      description: "Led frontend and mobile architecture for a white-label real estate platform using Next.js and React Native. Migrated backend to NestJS. Integrated real-time data using Socket.io and oversaw technical hiring and sprint planning.",
    },
    {
      role: "Mobile Software Engineer",
      period: "Aug 2024 – Apr 2025",
      company: "ServiceMe",
      description: "Migrated the ServiceMe app from Ionic to React Native, improving cross-platform performance. Implemented responsive UI patterns and integrated real-time updates with REST APIs. Built scalable APIs to automate payment processing.",
    },
    {
      role: "Mobile Developer",
      period: "Short-term Contract",
      company: "COZA",
      description: "Completed a focused, short-term contract to update and stabilize a production mobile application. Audited the codebase to fix critical user-facing bugs, including \"ghost touch\" issues. Resolved iOS specific architectural and Xcode build issues, culminating in a stable Apple App Store redeployment.",
    },
    {
      role: "Software Engineer",
      period: "Mar 2022 – Jan 2023",
      company: "Smiles Collection",
      description: "Built e-commerce interfaces using Vue.js and Tailwind CSS, improving user experience and site responsiveness across devices. Integrated APIs for product, cart, and order management, achieving faster load times.",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-16 pt-16 border-t border-white/10 mb-16 fade-in-up">
        <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="flex flex-col gap-6 p-8 glass-panel ghost-border rounded group transition-all duration-500 fade-in-up">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-electric-blue transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-electric-blue transition-colors">code_blocks</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary text-2xl tracking-tight">Full-Stack Architecture</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Building robust, scalable foundations using modern web technologies. Focus on performance, security, and clean API design.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">React</span>
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">Next.js</span>
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">Node.js</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 glass-panel ghost-border rounded group transition-all duration-500 fade-in-up" style={{ transitionDelay: '0.1s' }}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-electric-blue transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-electric-blue transition-colors">smartphone</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary text-2xl tracking-tight">Mobile Engineering</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Crafting native-feeling cross-platform and iOS applications. Prioritizing fluid animations, offline capabilities, and battery efficiency.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">React Native</span>
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">Swift</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 glass-panel ghost-border rounded group transition-all duration-500 fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-electric-blue transition-colors duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-electric-blue transition-colors">neurology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary text-2xl tracking-tight">AI &amp; Machine Learning</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Integrating intelligence into applications. From custom model fine-tuning to leveraging massive LLMs for generative workflows.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">PyTorch</span>
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">TensorFlow</span>
              <span className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5">LLMs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 pt-16 border-t border-white/10 mb-16 fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-tighter">Technical Stack</h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="flex flex-col gap-6">
              <h3 className="font-headline-md text-primary text-xl tracking-tight">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Python"].map(skill => (
                  <span key={skill} className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5 hover:border-electric-blue/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-headline-md text-primary text-xl tracking-tight">Frontend & UI</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue 3", "Vue", "React Native", "Ionic", "Tailwind CSS", "Headless UI", "Radix UI"].map(skill => (
                  <span key={skill} className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5 hover:border-electric-blue/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-headline-md text-primary text-xl tracking-tight">Backend & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Nest.js", "MongoDB", "GraphQL (Apollo)", "Socket.io", "Firebase", "Azure"].map(skill => (
                  <span key={skill} className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5 hover:border-electric-blue/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-headline-md text-primary text-xl tracking-tight">State Management</h3>
              <div className="flex flex-wrap gap-2">
                {["Redux", "Zustand", "Pinia", "React Query"].map(skill => (
                  <span key={skill} className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5 hover:border-electric-blue/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-headline-md text-primary text-xl tracking-tight">Testing</h3>
              <div className="flex flex-wrap gap-2">
                {["Jest", "Cypress", "Playwright", "Selenium"].map(skill => (
                  <span key={skill} className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5 hover:border-electric-blue/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="font-headline-md text-primary text-xl tracking-tight">Tools & Arch</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "CI/CD", "PWA", "SSR", "Responsive Design"].map(skill => (
                  <span key={skill} className="font-label-mono text-label-mono text-primary bg-surface-elevated px-3 py-1 rounded-full border border-white/5 hover:border-electric-blue/50 transition-colors">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="experience" className="flex flex-col gap-16 pt-16 border-t border-white/10 mb-16 fade-in-up">
        <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter">Chronology</h2>
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-white/5 group hover:bg-surface-elevated/20 transition-colors duration-300">
              <div className="md:col-span-3 flex items-start">
                <span className="font-label-mono text-label-mono text-on-surface-variant group-hover:text-electric-blue transition-colors uppercase">{exp.period}</span>
              </div>
              <div className="md:col-span-9 flex flex-col gap-4">
                <h4 className="font-headline-md text-headline-md text-primary text-2xl tracking-tight">{exp.role}</h4>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{exp.company}</span>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
