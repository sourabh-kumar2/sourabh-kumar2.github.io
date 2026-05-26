import React from 'react';
import { Cpu, CheckCircle2, Award } from 'lucide-react';

interface SkillItem {
    name: string;
    level: string;
    years: number;
}

interface SkillCategory {
    name: string;
    items: SkillItem[];
}

interface SkillsProps {
    skills: {
        categories?: SkillCategory[];
        workflows?: string[];
    };
}

const getLevelPercentage = (level: string) => {
    switch (level.toLowerCase()) {
        case 'expert': return 'w-[90%]';
        case 'advanced': return 'w-[75%]';
        case 'intermediate': return 'w-[55%]';
        default: return 'w-[40%]';
    }
};

const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
        case 'expert': return 'bg-gradient-to-r from-primary to-orange-400';
        case 'advanced': return 'bg-gradient-to-r from-blue-600 to-indigo-400';
        case 'intermediate': return 'bg-gradient-to-r from-emerald-500 to-teal-400';
        default: return 'bg-slate-400';
    }
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const { categories = [], workflows = [] } = skills;

    const col1Names = ['Languages & Backend', 'Databases'];
    const col2Names = ['Cloud & Infrastructure', 'Observability', 'AI & Agentic Systems'];

    const col1Categories = col1Names
        .map(name => categories.find(c => c.name === name))
        .filter((c): c is SkillCategory => !!c);

    const col2Categories = col2Names
        .map(name => categories.find(c => c.name === name))
        .filter((c): c is SkillCategory => !!c);

    const renderCategoryCard = (category: SkillCategory) => (
        <div
            key={category.name}
            className="glass p-6 rounded-3xl border border-slate-200/50 dark:border-slate-850/50 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
        >
            <div>
                <h3 className="font-display font-extrabold text-base text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6 border-b dark:border-slate-850 pb-2.5 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{category.name}</span>
                </h3>

                <div className="space-y-5">
                    {category.items.map((item) => (
                        <div key={item.name} className="group/item">
                            <div className="flex justify-between items-baseline mb-1.5">
                                <span className="font-display font-bold text-sm text-slate-800 dark:text-slate-100 group-hover/item:text-primary transition-colors">
                                    {item.name}
                                </span>
                                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                                    <span className="text-primary dark:text-primary-light font-bold">{item.level}</span>
                                    {item.years > 0 && ` · ${item.years} ${item.years === 1 ? 'yr' : 'yrs'}`}
                                </span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200/20 dark:border-slate-800/20">
                                <div
                                    className={`h-full rounded-full transition-all duration-500 ${getLevelColor(item.level)} ${getLevelPercentage(item.level)}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto"
            id="skills"
        >
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Cpu className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white uppercase">
                        Skills
                    </h2>
                    <p className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                        Technical Expertise & Experience
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    {col1Categories.map(renderCategoryCard)}
                </div>
                <div className="space-y-8">
                    {col2Categories.map(renderCategoryCard)}
                </div>

                {workflows.length > 0 && (
                    <div className="md:col-span-2 mt-4">
                        <div className="glass p-6 rounded-3xl border-primary/10">
                            <h3 className="font-display font-extrabold text-base text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6 border-b dark:border-slate-850 pb-2.5">
                                Development Workflows
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {workflows.map((workflow) => (
                                    <div key={workflow} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 leading-tight">
                                            {workflow}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
