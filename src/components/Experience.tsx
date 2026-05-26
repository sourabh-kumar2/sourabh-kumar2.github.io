import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
    designation: string;
    organization: string;
    duration: string;
    skills?: string[];
    description: string | string[];
    logo?: string;
}

interface ExperienceProps {
    experiences: ExperienceItem[];
}

const getCompanyBranding = (org: string) => {
    const name = org.toLowerCase();
    if (name.includes('brevo') || name.includes('sendinblue')) {
        return { initials: 'B', colorClass: 'from-[#00a896] to-[#028090] text-white' };
    }
    if (name.includes('esec') || name.includes('forte')) {
        return { initials: 'EF', colorClass: 'from-indigo-500 to-purple-500 text-white' };
    }
    if (name.includes('e-square') || name.includes('esquare')) {
        return { initials: 'ES', colorClass: 'from-blue-600 to-indigo-500 text-white' };
    }
    if (name.includes('tech mahindra') || name.includes('mahindra')) {
        return { initials: 'TM', colorClass: 'from-violet-600 to-purple-500 text-white' };
    }
    return { initials: org.substring(0, 2).toUpperCase(), colorClass: 'from-slate-600 to-slate-400 text-white' };
};

const ExperienceBlock: React.FC<ExperienceItem & { isLast: boolean }> = ({
    designation,
    organization,
    duration,
    skills = [],
    description,
    logo,
    isLast,
}) => {
    const { initials, colorClass } = getCompanyBranding(organization);

    return (
        <div className="relative pl-8 pb-12 group last:pb-4">
            {!isLast && (
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 group-hover:bg-primary/30 transition-colors duration-500" />
            )}

            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-white dark:bg-slate-950 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            </div>

            <div className="glass p-6 rounded-2xl transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        {logo ? (
                            <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm p-1">
                                <img src={logo} alt={organization} loading="lazy" className="w-full h-full object-contain" />
                            </div>
                        ) : (
                            <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-display font-extrabold text-sm shadow-sm border border-white/10 bg-gradient-to-tr ${colorClass}`}>
                                {initials}
                            </div>
                        )}
                        <div>
                            <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                                {designation}
                            </h3>
                            <div className="font-display font-semibold text-sm text-primary tracking-wide uppercase mt-0.5">
                                {organization}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full self-start md:self-center">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{duration}</span>
                    </div>
                </div>

                {Array.isArray(description) ? (
                    <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 list-none pl-0">
                        {description.map((bullet) => (
                            <li key={bullet} className="relative pl-5 leading-relaxed text-justify">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/60" />
                                {bullet}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                        {description}
                    </p>
                )}

                {skills.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
                        <div className="text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                            Skills Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-0.5 text-2xs font-semibold text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10 rounded border border-primary/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const Experience: React.FC<ExperienceProps> = ({ experiences = [] }) => {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto"
            id="experience"
            style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}
        >
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white uppercase">
                        Experience
                    </h2>
                    <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                        Professional Timeline
                    </p>
                </div>
            </div>

            <div className="relative">
                {experiences.map((exp, index) => (
                    <ExperienceBlock
                        key={`${exp.organization}-${exp.designation}-${index}`}
                        {...exp}
                        isLast={index === experiences.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
