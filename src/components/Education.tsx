import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

interface EducationItem {
    name: string;
    degree: string;
    duration: string;
    specilization: string;
    location?: string;
}

interface EducationProps {
    educations: EducationItem[];
}

const EducationBlock: React.FC<EducationItem> = ({ name, degree, duration, specilization, location }) => {
    return (
        <div className="flex gap-6 relative group pb-10 last:pb-0">
            <div className="absolute left-[21px] top-10 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 group-last:hidden" />

            <div className="w-11 h-11 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center z-10 transition-all group-hover:border-primary/30 group-hover:scale-105 shadow-sm">
                <GraduationCap className="w-5 h-5 text-primary" />
            </div>

            <div className="flex-grow glass p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                        <h3 className="font-display font-bold text-lg md:text-xl text-slate-800 dark:text-white">
                            {name}
                        </h3>
                        <div className="font-display font-semibold text-sm text-primary uppercase mt-0.5 tracking-wider">
                            {degree}
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full self-start md:self-center">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{duration}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-slate-400" />
                        <span>{specilization}</span>
                    </div>
                    {location && (
                        <>
                            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:block" />
                            <div className="flex items-center gap-1.5 text-xs">
                                <MapPin className="w-3.5 h-3.5 text-primary" />
                                <span>{location}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const Education: React.FC<EducationProps> = ({ educations = [] }) => {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto"
            id="education"
        >
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white uppercase">
                        Education
                    </h2>
                    <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                        Academic Credentials
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                {educations.map((edu, index) => (
                    <EducationBlock
                        key={`${edu.name}-${edu.degree}-${index}`}
                        {...edu}
                    />
                ))}
            </div>
        </section>
    );
};

export default Education;
