import React from 'react';
import { Trophy, Calendar } from 'lucide-react';

interface AwardItem {
    title: string;
    date?: string;
    organiser?: string;
    details: string;
}

interface AwardsProps {
    awards: AwardItem[];
}

const AwardBlock: React.FC<AwardItem> = ({ title, date = '', organiser = '', details = '' }) => {
    return (
        <div className="glass p-6 rounded-2xl border-l-4 border-l-primary hover:border-primary/30 transition-all duration-300 hover-lift flex gap-5 items-start w-full">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/20">
                <Trophy className="w-6 h-6" />
            </div>
            <div className="flex-grow min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 w-full">
                    <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-snug">
                        {title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1 shrink-0">
                        <Calendar className="w-3 h-3" />
                        <span>{date}</span>
                    </div>
                </div>
                <div className="text-xs font-bold text-primary dark:text-primary-light uppercase tracking-wider mb-2">
                    {organiser}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                    {details}
                </p>
            </div>
        </div>
    );
};

const Awards: React.FC<AwardsProps> = ({ awards = [] }) => {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto"
            id="awards"
        >
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Trophy className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white uppercase">
                        Awards
                    </h2>
                    <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                        Achievements & Recognitions
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {awards.map((award, index) => (
                    <AwardBlock
                        key={`${award.title}-${index}`}
                        {...award}
                    />
                ))}
            </div>
        </section>
    );
};

export default Awards;
