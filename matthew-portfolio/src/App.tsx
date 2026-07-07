import { portfolioData } from './data';
// 1. Import SiGithub from simple-icons for the brand logo
import { SiGithub } from '@icons-pack/react-simple-icons'; 
// 2. Import UI icons from lucide-react (Note: ExternalLink is now SquareArrowOutUpRight in v1.0, but we will use a text fallback or generic icon if preferred. Actually, ExternalLink IS still available in some shims, but SquareArrowOutUpRight is the standard. Let's stick to valid v1.0 icons).
// Correction: ExternalLink was renamed to SquareArrowOutUpRight. 
import { Mail, Code2, Database, SquareArrowOutUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 font-sans">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-primary">{portfolioData.name}</h1>
        <h2 className="text-2xl text-gray-400 mb-6">{portfolioData.title}</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">{portfolioData.about}</p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {/* 3. Use SiGithub here instead of GitHub */}
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition">
            <SiGithub size={20} /> GitHub
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 bg-primary px-6 py-3 rounded-lg hover:bg-sky-600 transition">
            <Mail size={20} /> Contact Me
          </a>
          {portfolioData.contact.website && (
            <a href={`https://${portfolioData.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition">
              {/* 4. Use SquareArrowOutUpRight instead of ExternalLink */}
              <SquareArrowOutUpRight size={20} /> Website
            </a>
          )}
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium hover:border-primary transition cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">Work Experience</h3>
        <div className="space-y-8 max-w-4xl mx-auto">
          {portfolioData.experience.map((job, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border-l-4 border-primary shadow-lg hover:shadow-xl transition">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-xl font-bold">{job.role}</h4>
                <span className="text-primary font-mono text-sm mt-2 md:mt-0">{job.period}</span>
              </div>
              <h5 className="text-lg text-gray-400 mb-4">{job.company}</h5>
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-primary" /> Education
            </h3>
            <div className="bg-dark p-6 rounded-xl border border-gray-800">
              <h4 className="text-xl font-bold">{portfolioData.education.degree}</h4>
              <p className="text-gray-400">{portfolioData.education.school}</p>
              <p className="text-primary font-mono mt-2">Graduated {portfolioData.education.year}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Database className="text-primary" /> Certifications
            </h3>
            <ul className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <li key={index} className="bg-dark p-4 rounded-xl border border-gray-800 hover:border-primary transition">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 {portfolioData.name}. Built with React, Vite & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;   