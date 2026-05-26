import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
    list: string[];
    name: string;
}

const Navigation: React.FC<NavigationProps> = ({ list, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme-mode') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(systemDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme-mode', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'light');
        }
    };

    return (
        <>
            {/* Mobile Top Navbar */}
            <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 glass z-50 flex items-center justify-between px-6 border-b">
                <a href="#about" className="font-display font-bold text-lg tracking-tight text-primary">
                    {name}
                </a>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-950 p-6 flex flex-col gap-6 shadow-2xl border-l border-slate-200/50 dark:border-slate-850/50 transition-transform duration-300 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mt-12 pb-4 border-b dark:border-slate-850">
                        <span className="font-display font-bold text-slate-700 dark:text-slate-300">Navigation</span>
                        <button type="button" onClick={() => setIsOpen(false)}>
                            <X className="w-5 h-5 text-slate-500" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4">
                        {list.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block font-display font-semibold text-lg text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors capitalize"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop Left Sidebar */}
            <nav className="hidden lg:flex fixed top-0 left-0 bottom-0 w-68 glass-nav z-40 flex-col items-center py-12 px-6 justify-between">
                <div className="flex flex-col items-center w-full">
                    <a href="#about" className="group relative mb-8 flex justify-center items-center">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-amber-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative rounded-full overflow-hidden w-36 h-36 border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                            {/* Replace with <img> once you have a profile photo */}
                            <span className="font-display font-extrabold text-4xl text-primary select-none">SK</span>
                        </div>
                    </a>

                    <h2 className="font-display font-extrabold text-xl tracking-tight text-center mb-1 text-slate-800 dark:text-slate-100 px-2">
                        {name}
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-8">
                        Staff Backend Engineer
                    </p>

                    <ul className="flex flex-col gap-2 w-full">
                        {list.map((item) => (
                            <li key={item} className="w-full">
                                <a
                                    href={`#${item}`}
                                    className="flex w-full px-4 py-2.5 rounded-xl font-display font-bold text-sm tracking-wide capitalize text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/50 hover:text-primary dark:hover:text-primary transition-all duration-200"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full flex justify-center">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-all duration-300 w-full justify-center hover:shadow-sm"
                    >
                        {theme === 'dark' ? (
                            <>
                                <Sun className="w-4 h-4 text-amber-500" />
                                <span className="font-display font-semibold text-xs uppercase tracking-wider">Light Mode</span>
                            </>
                        ) : (
                            <>
                                <Moon className="w-4 h-4 text-slate-500" />
                                <span className="font-display font-semibold text-xs uppercase tracking-wider">Dark Mode</span>
                            </>
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
