export const Contact = () => {
  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-deep-black border-t border-white/10 z-20">
        <div className="flex flex-col gap-16 px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h5 className="font-headline-md text-headline-md text-primary mb-6">CONTACT</h5>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                        Ready to bring your vision to life or just want to chat? Reach out, and let's create something memorable together. I'm here to listen, collaborate, and craft web app solutions that resonate.
                    </p>
                    <a className="font-label-mono text-label-mono text-primary hover:text-electric-blue transition-colors underline decoration-white/20 underline-offset-4" href="mailto:EXCELEMMA6@GMAIL.COM">EXCELEMMA6@GMAIL.COM</a>
                </div>
                <div className="flex flex-col md:items-end justify-between">
                    <div className="flex flex-wrap gap-6 mb-12 md:mb-0">
                        <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-container transition-colors hover:opacity-80" href="https://github.com/EmmaExcel">Github</a>
                        <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-container transition-colors hover:opacity-80" href="https://twitter.com/Oppai_senpai6">Twitter</a>
                        <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-container transition-colors hover:opacity-80" href="https://linkedin.com/in/excel-emma-457b61201">Linkedin</a>
                        <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-container transition-colors hover:opacity-80" href="https://flowcv.com/resume/qjb61lq7p48j">Resume</a>
                        <a className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary-container transition-colors hover:opacity-80" href="mailto:excelemma6@gmail.com">Mail</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-8">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold tracking-tighter uppercase text-primary mb-4 md:mb-0">
                    EXCEL
                 </div>
                <div className="font-body-md text-body-md text-on-surface-variant text-sm">
                    © 2024 EXCEL. ALL RIGHTS RESERVED.
                 </div>
            </div>
        </div>
    </footer>
  );
};

