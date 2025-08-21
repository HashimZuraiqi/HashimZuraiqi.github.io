import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code, GraduationCap, Award, Briefcase, ExternalLink, Download, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/toaster';
import { toast } from './components/ui/use-toast';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const handleContactClick = () => {
    toast({
      title: "🚧 Contact feature coming soon!",
      description: "You can request contact form implementation in your next prompt! 🚀"
    });
  };
  const handleDownloadCV = () => {
    toast({
      title: "🚧 CV download isn't implemented yet!",
      description: "You can request CV download functionality in your next prompt! 🚀"
    });
  };
  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details coming soon!",
      description: "You can request detailed project showcase in your next prompt! 🚀"
    });
  };
  return <>
      <Helmet>
        <title>Hashim Zuraiqi - Computer Science Student & Front-End Developer</title>
        <meta name="description" content="Computer Science student passionate about problem-solving, technology, and creating impactful digital experiences. Specializing in front-end development with React.js." />
        <meta property="og:title" content="Hashim Zuraiqi - Computer Science Student & Front-End Developer" />
        <meta property="og:description" content="Computer Science student passionate about problem-solving, technology, and creating impactful digital experiences. Specializing in front-end development with React.js." />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <motion.nav initial={{
        y: -100
      }} animate={{
        y: 0
      }} className="fixed top-0 w-full z-50 glass-effect">
          <div className="container-max flex justify-between items-center py-4">
            <motion.div className="text-2xl font-bold gradient-text" whileHover={{
            scale: 1.05
          }}>
              HZ
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'skills', 'experience', 'projects', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="nav-link capitalize text-white/80 hover:text-white transition-colors duration-300 font-medium">
                  {item}
                </button>)}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden glass-effect mt-2 mx-4 rounded-xl">
              <div className="flex flex-col space-y-4 p-6">
                {['about', 'education', 'skills', 'experience', 'projects', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="capitalize text-white/80 hover:text-white transition-colors duration-300 text-left">
                    {item}
                  </button>)}
              </div>
            </motion.div>}
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div style={{
          y
        }} className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </motion.div>

          <div className="container-max text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
              <motion.div className="w-32 h-32 mx-auto rounded-full glass-effect p-1 floating-animation" whileHover={{
              scale: 1.1
            }}>
                <img className="w-full h-full rounded-full object-cover" alt="Hashim Zuraiqi profile photo" src="https://horizons-cdn.hostinger.com/d4a3003a-f4e0-4cf8-9e6c-0a1aefb17e2f/1744405248774-hU5aL.jpg" />
              </motion.div>

              <div>
                <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.3
              }}>
                  <span className="gradient-text">Hashim</span> Zuraiqi
                </motion.h1>
                
                <motion.p className="text-xl md:text-2xl text-white/80 mb-8 mono-font" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.5
              }}>
                  💡 "A Computer Science student passionate about problem-solving, technology, and creating impactful digital experiences."
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.7
              }}>
                  <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold glow-effect">
                    Get In Touch
                  </Button>
                  <Button variant="outline" onClick={handleDownloadCV} className="border-blue-400/30 text-blue-100 hover:bg-blue-900/30 px-8 py-3 rounded-full font-semibold flex items-center">
                    <Download className="mr-2 h-4 w-4 text-blue-300" />
                    Download CV
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center" animate={{
            y: [0, 12, 0]
          }} transition={{
            repeat: Infinity,
            duration: 2
          }}>
              <ChevronDown className="text-blue-400 drop-shadow-lg animate-bounce" size={36} style={{ filter: 'drop-shadow(0 0 8px #38bdf8)' }} />
              <span className="text-xs text-blue-300 mt-1">Scroll</span>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">About Me</h2>
              <div className="glass-effect p-8 md:p-12 max-w-4xl mx-auto">
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  I am a second-year Computer Science student at Princess Sumaya University for Technology, expected to graduate in June 2026. I enjoy solving complex problems, learning new technologies, and building creative digital projects. My academic journey and extracurricular experiences have helped me strengthen my technical knowledge, teamwork, and leadership skills.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-700/30 to-teal-600/30 rounded-xl shadow-lg">
                  <p className="text-lg font-medium text-blue-100">
                    I'm passionate about technology, especially front-end development, problem-solving, and applying computer science to create innovative solutions. I see every project as an opportunity to grow, experiment, and push my boundaries while making a meaningful impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-padding bg-black/20">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Education</h2>
              <div className="glass-effect p-8 md:p-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <GraduationCap className="text-purple-400 mr-4" size={48} />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                    <p className="text-lg text-purple-300 mono-font">Princess Sumaya University for Technology</p>
                    <p className="text-white/70">Expected Graduation: June 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Skills</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[{
                category: "Programming",
                skills: ["C", "C++", "JavaScript", "HTML", "CSS"]
              }, {
                category: "Front-End Development",
                skills: ["React.js", "UI/UX principles"]
              }, {
                category: "Problem-Solving",
                skills: ["Competitive programming", "Algorithm design"]
              }, {
                category: "Tools",
                skills: ["Git", "Figma", "Linux"]
              }, {
                category: "Soft Skills",
                skills: ["Teamwork", "Communication", "Adaptability"]
              }].map((skillGroup, index) => <motion.div key={skillGroup.category} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="glass-effect p-6 skill-card transition-all duration-300">
                    <h3 className="text-xl font-bold mb-4 gradient-text">{skillGroup.category}</h3>
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => <div key={skillIndex} className="bg-white/10 rounded-lg px-3 py-2 text-sm mono-font">
                          {skill}
                        </div>)}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-black/20">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Experience & Activities</h2>
              
              <div className="space-y-8">
                {[{
                title: "Junior Academy STEM Challenge Participant",
                organization: "New York Academy of Sciences",
                year: "2021",
                icon: <Award className="text-yellow-400" size={24} />
              }, {
                title: "Member",
                organization: "THO-Company (Student startup focused on designing modern portfolio websites)",
                year: "Present",
                icon: <Briefcase className="text-purple-400" size={24} />
              }, {
                title: "Web Development Experience",
                organization: "NoNerds - Web-related projects",
                year: "Present",
                icon: <Code className="text-cyan-400" size={24} />
              }].map((experience, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.2
              }} viewport={{
                once: true
              }} className="glass-effect p-6 max-w-4xl mx-auto">
                    <div className="flex items-center mb-4">
                      {experience.icon}
                      <div className="ml-4 text-left">
                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                        <p className="text-purple-300">{experience.organization}</p>
                        <p className="text-white/70 mono-font">{experience.year}</p>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Certificates</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6
              }} viewport={{
                once: true
              }} className="glass-effect p-6">
                  <Award className="text-purple-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Meta Front-End Development Professional Certificate</h3>
                  <p className="text-white/70 mb-4">(In Progress)</p>
                  <div className="space-y-2 text-sm mono-font">
                    <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded">✓ Introduction to Front-End Development</div>
                    <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded">✓ Programming with JavaScript</div>
                    <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded">✓ Version Control</div>
                    <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded">✓ HTML & CSS in-depth</div>
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} viewport={{
                once: true
              }} className="glass-effect p-6">
                  <Award className="text-yellow-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Certificate of Participation</h3>
                  <p className="text-white/70">Junior Academy STEM Challenge</p>
                  <p className="text-yellow-300 mono-font mt-4">2021</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-black/20">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Projects</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[{
                title: "Portfolio Templates",
                description: "Designed creative portfolio structures for students and professionals",
                tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
                image: "Modern portfolio website templates with creative layouts"
              }, {
                title: "Resume Builder",
                description: "Developing a multipage web app for creating professional resumes",
                tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                image: "Resume builder web application interface"
              }].map((project, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.2
              }} viewport={{
                once: true
              }} className="glass-effect p-6 group hover:scale-105 transition-all duration-300">
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" alt={`${project.title} project screenshot`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm mono-font">
                          {tech}
                        </span>)}
                    </div>
                    <Button onClick={handleProjectClick} variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-max">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Get In Touch</h2>
              
              <div className="glass-effect p-8 md:p-12 max-w-4xl mx-auto">
                <p className="text-lg text-white/80 mb-8">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.a href="mailto:your-email@example.com" onClick={e => {
                  e.preventDefault();
                  handleContactClick();
                }} whileHover={{
                  scale: 1.05
                }} className="glass-effect p-6 group hover:bg-white/20 transition-all duration-300">
                    <Mail className="text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="font-semibold">Email</p>
                    <p className="text-white/70 text-sm">your-email@example.com</p>
                  </motion.a>

                  <motion.a href="https://linkedin.com/in/your-profile" onClick={e => {
                  e.preventDefault();
                  handleContactClick();
                }} whileHover={{
                  scale: 1.05
                }} className="glass-effect p-6 group hover:bg-white/20 transition-all duration-300">
                    <Linkedin className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-white/70 text-sm">Connect with me</p>
                  </motion.a>

                  <motion.a href="https://github.com/your-username" onClick={e => {
                  e.preventDefault();
                  handleContactClick();
                }} whileHover={{
                  scale: 1.05
                }} className="glass-effect p-6 group hover:bg-white/20 transition-all duration-300">
                    <Github className="text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="font-semibold">GitHub</p>
                    <p className="text-white/70 text-sm">Check out my code</p>
                  </motion.a>
                </div>

                <motion.div className="mt-8" whileHover={{
                scale: 1.05
              }}>
                  <Button onClick={handleContactClick} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold glow-effect">
                    Send Message
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 py-8">
          <div className="container-max text-center">
            <p className="text-white/60 mono-font">
              © 2024 Hashim Zuraiqi. Built with passion and React.js
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>;
}
export default App;