import React from 'react';
import { ExternalLink, Github, FolderGit2, Network, Globe } from 'lucide-react';

interface ProjectItem {
    title: string;
    period: string;
    description: string;
    link?: string;
    github?: string;
    image?: string;
    skills?: string[];
}

interface ProjectsProps {
    projects: ProjectItem[];
}

const GRADIENTS = [
    'from-primary to-orange-400',
    'from-blue-600 to-indigo-500',
    'from-emerald-500 to-teal-400',
    'from-violet-600 to-fuchsia-500',
];

const getProjectIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('dns') || t.includes('discovery')) return Globe;
    if (t.includes('lyra') || t.includes('dag') || t.includes('orchestrat')) return Network;
    return FolderGit2;
};

const ProjectCard: React.FC<ProjectItem & { index: number }> = ({
    title,
    period,
    description,
    link,
    github,
    image,
    skills = [],
    index,
}) => {
    const gradientClass = GRADIENTS[index % GRADIENTS.length];
    const IconComponent = getProjectIcon(title);

    return (
        <div className="flex flex-col h-full group bg-white dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-850/50 rounded-3xl overflow-hidden hover-lift hover:border-primary/20 transition-all duration-300">
            <div className="h-48 relative flex items-center justify-center overflow-hidden bg-slate-100/50 dark:bg-slate-950/20 border-b border-slate-200/50 dark:border-slate-850/50">
                {image ? (
                    <>
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover p-3 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-slate-950/10 transition-colors pointer-events-none" />
                    </>
                ) : (
                    <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_0)] [background-size:16px_16px] pointer-events-none" />
                        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                        <div className="relative z-10 p-4 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <IconComponent className="w-10 h-10 text-white drop-shadow-md" />
                        </div>
                    </>
                )}
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white group-hover:text-primary transition-colors line-clamp-1 mb-1">
                        {title}
                    </h3>
                    <div className="text-xs font-bold text-primary dark:text-primary-light uppercase tracking-wider mb-3">
                        {period}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-justify font-normal">
                        {description}
                    </p>
                </div>

                <div>
                    {skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {skills.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 text-2xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 rounded-lg border border-slate-200/40 dark:border-slate-800/40"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-hover rounded-xl shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 duration-200"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Visit Project</span>
                            </a>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all active:scale-95 duration-200"
                            >
                                <Github className="w-3.5 h-3.5" />
                                <span>View Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto"
            id="projects"
            style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}
        >
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white uppercase">
                        Projects
                    </h2>
                    <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                        Open Source & Personal Work
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
