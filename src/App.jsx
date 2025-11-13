import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Code, GraduationCap, Award, Briefcase, ExternalLink, Download, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './components/ui/button';
import { CV_VIEW_URL } from './config/cv';
import { Toaster } from './components/ui/toaster';
import { toast } from './components/ui/use-toast';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  // Enhanced scroll progress indicator
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
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
  // Simple static link approach for CV download will be used in markup
  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details coming soon!",
      description: "You can request detailed project showcase in your next prompt! 🚀"
    });
  };
  return <>
      <Helmet>
        <title>Hashim Zuraiqi | Computer Science Student</title>
        <meta name="description" content="Hashim Zuraiqi - Computer Science student at Princess Sumaya University & 42 School. Aspiring Frontend Developer learning HTML5, CSS3, JavaScript, PHP, MySQL. Public Relations Officer at GDG PSUT. Meta Frontend Certificate student. JCPC participant. NoNerds lecturer. Building SwapShelf & Resume-Maker student projects." />
        <meta name="keywords" content="Hashim, Hashim Zuraiqi, Hasheem, Hashim Developer, Computer Science Student, Aspiring Frontend Developer, 42 School, Princess Sumaya University, PSUT, GDG PSUT, Meta Certificate Student, JCPC, Jordan Collegiate Programming Contest, JavaScript, PHP, MySQL, HTML5, CSS3, Bootstrap, SwapShelf, Resume Maker, NoNerds, Web Developer Student, Hashim Portfolio, Hashim Projects, Hashim Skills" />
        <meta property="og:title" content="Hashim Zuraiqi - Computer Science Student" />
        <meta property="og:description" content="Computer Science student at Princess Sumaya University & 42 School. Aspiring Frontend Developer learning web technologies. GDG PSUT Officer. JCPC participant building student projects like SwapShelf & Resume-Maker." />
        <meta property="og:image" content="https://hashimalzuraiqi.me/favicon.svg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Hashim Zuraiqi - HZ Logo" />
        <meta property="og:url" content="https://hashimalzuraiqi.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hashim Zuraiqi - Computer Science Student" />
        <meta name="twitter:description" content="Computer Science student at PSUT & 42 School. Aspiring Frontend Developer learning JavaScript, PHP, and MySQL. GDG PSUT Officer. JCPC participant." />
        <meta name="twitter:image" content="https://hashimalzuraiqi.me/favicon.svg" />
        <meta name="twitter:image:alt" content="Hashim Zuraiqi - HZ Logo" />
        <link rel="canonical" href="https://hashimalzuraiqi.me" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hashim Zuraiqi",
            "alternateName": ["Hashim", "Hasheem", "Hashim Developer"],
            "jobTitle": "Computer Science Student",
            "description": "Computer Science Student at Princess Sumaya University & 42 School. Aspiring Frontend Developer pursuing Meta Professional Certificate. Public Relations Officer at GDG PSUT.",
            "url": "https://hashimalzuraiqi.me",
            "image": "https://hashimalzuraiqi.me/favicon.svg",
            "sameAs": [
              "https://github.com/HashimZuraiqi",
              "https://linkedin.com/in/hashimalzuraiqi"
            ],
            "knowsAbout": ["JavaScript", "HTML5", "CSS3", "PHP", "MySQL", "Bootstrap", "Frontend Development", "Web Development", "Computer Science", "Git", "jQuery", "Responsive Design"],
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Princess Sumaya University for Technology",
                "description": "Bachelor of Science in Computer Science"
              },
              {
                "@type": "EducationalOrganization", 
                "name": "42 School",
                "description": "Software Engineering Program"
              }
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "GDG PSUT (Google Developer Groups)",
              "description": "Public Relations Officer"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Meta Front-End Development Professional Certificate",
                "credentialCategory": "certificate"
              }
            ]
          })}
        </script>
        <link rel="canonical" href="https://hashimalzuraiqi.me/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hashim Zuraiqi",
          url: "https://hashimalzuraiqi.me/",
          email: "mailto:hashimalzuraiqi123@gmail.com",
          jobTitle: "Computer Science Student & Front-End Developer",
          sameAs: [
            "https://www.linkedin.com/in/hashimalzuraiqi/",
            "https://github.com/HashimZuraiqi"
          ]
        })}</script>
        <html className="dark" />
        <body className="dark-theme-body" />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden text-foreground">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 origin-left z-[60] shadow-lg"
          style={{ scaleX }}
          initial={{ scaleX: 0 }}
        />
        
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
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <motion.div style={{
          y
        }} className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
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
              <motion.div className="w-32 h-32 mx-auto rounded-full glass-effect p-1 floating-animation mt-4" whileHover={{
              scale: 1.1
            }}>
                <img
                  className="w-full h-full rounded-full object-cover"
                  alt="Hashim Zuraiqi profile photo"
                  src="/images/1744405248774.jpg"
                  onError={(e) => {
                    // If local image missing, fall back to the previous external URL
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://horizons-cdn.hostinger.com/d4a3003a-f4e0-4cf8-9e6c-0a1aefb17e2f/1744405248774-hU5aL.jpg';
                  }}
                />
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
                  <a
                    href={CV_VIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-blue-400/30 text-blue-100 hover:bg-blue-900/30 px-8 py-3 rounded-full font-semibold flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4 text-blue-300" />
                      View CV
                    </Button>
                  </a>
                </motion.div>

                {/* Scroll Down Indicator - below buttons on all devices */}
                <motion.div
                  className="flex justify-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="flex flex-col items-center cursor-pointer group"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    onClick={() => scrollToSection('about')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative p-2">
                      <ChevronDown
                        className="text-blue-400 drop-shadow-lg group-hover:text-blue-300 transition-all duration-300"
                        size={32}
                        style={{ filter: 'drop-shadow(0 0 12px #38bdf8)' }}
                      />
                      <motion.div
                        className="absolute -inset-3 rounded-full border border-blue-400/20 bg-blue-400/5"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      />
                    </div>
                    <span className="text-xs text-blue-300 mt-1 group-hover:text-blue-200 transition-colors duration-300 font-medium">
                      Explore
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Scroll Indicator - positioned in bottom-right */}
            <motion.div 
              className="hidden lg:flex absolute bottom-8 right-8 flex-col items-center cursor-pointer group" 
              animate={{
                y: [0, 8, 0]
              }} 
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
            >
              <div className="relative p-2">
                <ChevronDown 
                  className="text-blue-400 drop-shadow-lg group-hover:text-blue-300 transition-all duration-300" 
                  size={32} 
                  style={{ filter: 'drop-shadow(0 0 12px #38bdf8)' }} 
                />
                <motion.div
                  className="absolute -inset-3 rounded-full border border-blue-400/20 bg-blue-400/5"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.1, 0.5] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-xs text-blue-300 mt-1 group-hover:text-blue-200 transition-colors duration-300 font-medium">
                Explore
              </span>
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
                  I am a third-year Computer Science student at Princess Sumaya University for Technology, expected to graduate in June 2027. I enjoy solving complex problems, learning new technologies, and building creative digital projects. My academic journey and extracurricular experiences have helped me strengthen my technical knowledge, teamwork, and leadership skills.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-700/30 to-teal-600/30 rounded-xl shadow-lg">
                  <p className="text-lg font-medium text-blue-100">
                    I'm passionate about technology, especially Web development, problem-solving, and applying computer science to create innovative solutions. I see every project as an opportunity to grow, experiment, and push my boundaries while making a meaningful impact.
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
              
              {/* 42 School */}
              <div className="glass-effect p-8 md:p-12 max-w-4xl mx-auto mb-8">
                <div className="flex items-center justify-center mb-6">
                  <Code className="text-primary mr-4" size={48} />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">42 School</h3>
                    <p className="text-lg text-primary mono-font">Peer-to-peer learning • Project-based curriculum</p>
                    <p className="text-white/70">Software Engineering Program</p>
                  </div>
                </div>
              </div>

              {/* University */}
              <div className="glass-effect p-8 md:p-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <GraduationCap className="text-primary mr-4" size={48} />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                    <p className="text-lg text-primary mono-font">Princess Sumaya University for Technology</p>
                    <p className="text-white/70">Expected Graduation: June 2027</p>
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
                category: "Front-End Development",
                skills: [
                  "HTML5",
                  "CSS3",
                  "JavaScript (ES6+)",
                  "Responsive Web Design",
                  "DOM Manipulation",
                  "UI/UX Design Principles",
                  "jQuery"
                ]
              }, {
                category: "Styling & Frameworks",
                skills: [
                  "Bootstrap",
                  "Flexbox & Grid Layouts",
                  "Smooth Scrolling",
                  "Animations"
                ]
              }, {
                category: "Back-End Development",
                skills: [
                  "PHP",
                  "MySQL",
                  "Form Handling & Authentication"
                ]
              }, {
                category: "Programming Languages",
                skills: [
                  "C",
                  "C++",
                  "JavaScript"
                ]
              }, {
                category: "Tools & Version Control",
                skills: [
                  "Git & GitHub",
                  "VS Code",
                  "Command Line (Unix/Linux)"
                ]
              }, {
                category: "Computer Science Fundamentals",
                skills: [
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming (OOP)",
                  "Problem-Solving & Debugging",
                  "Basic OS and Memory Concepts"
                ]
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
              }} className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors">
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
                title: "Public Relations Officer",
                organization: "GDG PSUT (Google Developer Groups)",
                year: "2024-2025",
                icon: <Briefcase className="text-primary" size={24} />
              }, {
                title: "Web Projects — Portfolios, Restaurants, Small Businesses",
                organization: "Freelance & Student Projects",
                year: "Present",
                icon: <Briefcase className="text-primary" size={24} />
              }, {
                title: "Lecturer — Introduction to Computer Science",
                organization: "NoNerds",
                year: "2024-2025",
                icon: <GraduationCap className="text-emerald-400" size={24} />
              }]
                .sort((a, b) => {
                  const toYear = (y) => {
                    if (!y) return 0;
                    if (typeof y === 'string' && /present/i.test(y)) return 9999; // Present = most recent
                    const years = String(y).match(/\d{4}/g);
                    if (!years || years.length === 0) return 0;
                    return parseInt(years[years.length - 1], 10); // use last year in ranges like 2024-2025
                  };
                  return toYear(b.year) - toYear(a.year);
                })
                .map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2
                  }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 max-w-4xl mx-auto"
                >
                  <div className="flex items-center mb-4">
                    {experience.icon}
                    <div className="ml-4 text-left">
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <p className="text-primary">{experience.organization}</p>
                      <p className="text-white/70 mono-font">{experience.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              
              <div className="grid md:grid-cols-3 gap-8">
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
              }} className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors">
                  <Award className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">Meta Front-End Development Professional Certificate</h3>
                  <p className="text-white/70 mb-4">(In Progress)</p>
                  <div className="space-y-2 text-sm mono-font">
                    <motion.a
                      href="https://www.coursera.org/account/accomplishments/verify/YOUR_CERT_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-500/20 text-green-300 px-3 py-2 rounded cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(34, 197, 94, 0.35)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ✓ Introduction to Front-End Development
                    </motion.a>
                    <motion.a
                      href="https://www.coursera.org/account/accomplishments/verify/YOUR_CERT_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-500/20 text-green-300 px-3 py-2 rounded cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(34, 197, 94, 0.35)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ✓ Programming with JavaScript
                    </motion.a>
                    <motion.a
                      href="https://www.coursera.org/account/accomplishments/verify/YOUR_CERT_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-500/20 text-green-300 px-3 py-2 rounded cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(34, 197, 94, 0.35)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ✓ Version Control
                    </motion.a>
                    <motion.a
                      href="https://www.coursera.org/account/accomplishments/verify/YOUR_CERT_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-500/20 text-green-300 px-3 py-2 rounded cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(34, 197, 94, 0.35)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ✓ HTML & CSS in-depth
                    </motion.a>
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
              }} className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="text-yellow-400" size={40} />
                    <span className="text-xs uppercase tracking-wider bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">Participation</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certificate of Participation</h3>
                  <p className="text-white/80 mb-3">Junior Academy STEM Challenge</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-3 text-sm">
                    <span className="bg-white/10 px-2 py-1 rounded">Teamwork</span>
                    <span className="bg-white/10 px-2 py-1 rounded">STEM</span>
                    <span className="bg-white/10 px-2 py-1 rounded">Problem Solving</span>
                  </div>
                  <p className="text-yellow-300 mono-font">2021</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} viewport={{
                once: true
              }} className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="text-blue-400" size={40} />
                    <span className="text-xs uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Participation</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">JCPC Participation</h3>
                  <p className="text-white/80 mb-3">Jordan Collegiate Programming Contest (JCPC)</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-3 text-sm">
                    <span className="bg-white/10 px-2 py-1 rounded">Algorithms</span>
                    <span className="bg-white/10 px-2 py-1 rounded">Competitive Programming</span>
                    <span className="bg-white/10 px-2 py-1 rounded">Teamwork</span>
                  </div>
                  <p className="text-blue-300 mono-font">2025</p>
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
                title: "SwapShelf",
                slug: "swapshelf",
                description: "A real-world solution from an Amazon Engagement Program project for item swapping and listings.",
                tech: ["Node.js", "Express", "EJS", "MongoDB"],
                github: "https://github.com/HashimZuraiqi/SwapShelf",
                image: "/images/projects/swapshelf/logo.png"
              }, {
                title: "Resume-Maker",
                slug: "resume-maker",
                description: "A multi-page web app to build professional resumes with export-ready templates.",
                tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
                github: "https://github.com/HashimZuraiqi/Resume-Maker",
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200"
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
              }} className="glass-effect group hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/20 to-teal-900/20 flex items-center justify-center h-64">
                      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" alt={`${project.title} project screenshot`} src={project.image} />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => <span key={techIndex} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm mono-font">
                            {tech}
                          </span>)}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a href={`/projects/${project.slug}`} className="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 rounded-md px-4 py-2 font-medium transition-colors">
                          View Details
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white rounded-md px-4 py-2 font-medium transition-colors">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </div>
                    </div>
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
                  <motion.a href="mailto:hashimalzuraiqi123@gmail.com" whileHover={{
                  scale: 1.05
                }} className="glass-effect p-6 group hover:bg-white/20 transition-all duration-300">
                    <Mail className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="font-semibold">Email</p>
                    <p className="text-white/70 text-sm">hashimalzuraiqi123@gmail.com</p>
                  </motion.a>

                  <motion.a href="https://www.linkedin.com/in/hashimalzuraiqi/" target="_blank" rel="noopener noreferrer" whileHover={{
                  scale: 1.05
                }} className="glass-effect p-6 group hover:bg-white/20 transition-all duration-300">
                    <Linkedin className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-white/70 text-sm">Connect with me</p>
                  </motion.a>

                  <motion.a href="https://github.com/HashimZuraiqi" target="_blank" rel="noopener noreferrer" whileHover={{
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
                  <Button onClick={() => {
                    window.location.href = 'mailto:hashimalzuraiqi123@gmail.com';
                  }} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold glow-effect">
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
              © Hashim Zuraiqi. Built with passion.
            </p>
          </div>
        </footer>

        {/* Back to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full shadow-2xl z-50 backdrop-blur-sm border border-white/10"
          onClick={() => scrollToSection('hero')}
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
            x: scrollYProgress.get() > 0.2 ? 0 : 100
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ 
            filter: 'drop-shadow(0 8px 25px rgba(59, 130, 246, 0.4))'
          }}
        >
          <ChevronDown className="w-5 h-5 rotate-180" />
        </motion.button>

        <Toaster />
      </div>
    </>;
}
export default App;