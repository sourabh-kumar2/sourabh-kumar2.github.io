import Navigation from './components/Navigation';
import Data from './data.json';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';

function App() {
    const navigations = Object.keys(Data || {});
    const {
        about,
        experience,
        education,
        skills,
        projects,
        awards,
    } = Data;

    return (
        <div className="relative min-h-screen">
            <Navigation list={navigations} name={about.name} />

            <main className="lg:pl-68 pt-16 lg:pt-0 min-h-screen">
                <About about={about} />

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                <Experience experiences={experience} />

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                <Education educations={education} />

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                <Skills skills={skills} />

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                <Projects projects={projects} />

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent max-w-5xl mx-auto" />

                <Awards awards={awards} />
            </main>
        </div>
    );
}

export default App;
