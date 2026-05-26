import React from 'react';
import { Linkedin, Github, Download, MapPin, Mail, Phone } from 'lucide-react';

interface AboutProps {
    about: {
        name: string;
        about: string;
        address: string;
        phone_number: string;
        email_id: string;
        socials?: {
            linkedin?: string;
            github?: string;
            x?: string;
        };
    };
}

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const About: React.FC<AboutProps> = ({ about }) => {
    const { name, about: bio, address, phone_number, email_id, socials } = about;

    return (
        <section
            className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden"
            id="about"
        >
            <div className="absolute top-1/4 left-1/3 w-[35rem] h-[35rem] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-amber-500/5 blur-[80px] pointer-events-none" />

            <div className="max-w-4xl w-full z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-light text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    Available for senior roles
                </div>

                <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 leading-none text-slate-900 dark:text-white">
                    <span className="text-gradient">{name}</span>
                </h1>

                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 border-b dark:border-slate-850 pb-8">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{address}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:block" />
                    <div className="flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:+91${phone_number}`} className="hover:text-primary transition-colors">
                            (+91) {phone_number}
                        </a>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden md:block" />
                    <div className="flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${email_id}`} className="hover:text-primary transition-colors font-medium">
                            {email_id}
                        </a>
                    </div>
                </div>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-10 max-w-3xl text-justify">
                    {bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="flex gap-4">
                        {socials?.linkedin && (
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] dark:hover:bg-[#0077b5] dark:hover:border-[#0077b5] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {socials?.github && (
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#181717] hover:border-[#181717] dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {socials?.x && (
                            <a
                                href={socials.x}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-black hover:border-black dark:hover:bg-white dark:hover:border-white dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                                aria-label="X"
                            >
                                <XIcon className="w-4 h-4" />
                            </a>
                        )}
                    </div>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white bg-primary hover:bg-primary-hover font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Download Resume
                        <Download className="w-4 h-4 animate-bounce" />
                    </a>

                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
