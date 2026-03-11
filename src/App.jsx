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

      <div className="min-h-screen text-foreground">
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
        <section id="hero" className="section-padding relative overflow-hidden pt-20">
          <motion.div style={{
          y
        }} className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </motion.div>

          <div className="container-max text-center relative z-10 w-full">
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
          <div className="container-max w-full">
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
          <div className="container-max w-full">
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

        {/* Skills Section - Gaming Tech Tree Redesign */}
        <section id="skills" className="section-padding">
          <div className="container-max w-full">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text drop-shadow-sm tracking-tight">Tech Tree</h2>
              <p className="text-white/50 text-sm md:text-base font-medium max-w-xl mx-auto mb-8 hidden md:block">Hover over nodes to reveal specialized skills and technologies.</p>
              
              <div className="relative w-full max-w-5xl mx-auto mt-12 mb-20 flex flex-col items-center">
                
                {/* Global Central Spine (Glow Core) - Desktop Only for structural aesthetics */}
                <div className="absolute left-[24px] md:left-1/2 top-4 bottom-8 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden z-0">
                   <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className="w-full bg-gradient-to-b from-primary via-blue-400 to-transparent shadow-[0_0_15px_rgba(var(--primary),0.8)]"
                   />
                </div>

                <div className="flex flex-col w-full space-y-8 md:space-y-0 relative z-10">
                  {[{
                    category: "CS Fundamentals",
                    icon: <GraduationCap size={20} />,
                    skills: ["Data Structures", "Algorithms", "OOP", "Debugging", "OS Concepts"],
                    align: "right",
                    color: "primary"
                  }, {
                    category: "Version Control",
                    icon: <Code size={20} />,
                    skills: ["Git & GitHub", "Command Line", "Unix/Linux", "VS Code"],
                    align: "left",
                    color: "blue-400",
                    marginTop: "md:-mt-12"
                  }, {
                    category: "Languages",
                    icon: <Code size={20} />,
                    skills: ["JavaScript (ES6+)", "C", "C++", "PHP"],
                    align: "right",
                    color: "yellow-400",
                    marginTop: "md:mt-8"
                  }, {
                    category: "Front-End",
                    icon: <Menu size={20} />,
                    skills: ["HTML5", "CSS3", "DOM Manipulation", "jQuery", "Responsive Design", "UI/UX Principles"],
                    align: "left",
                    color: "primary",
                    marginTop: "md:-mt-6"
                  }, {
                    category: "Back-End",
                    icon: <Briefcase size={20} />,
                    skills: ["PHP", "MySQL", "Authentication", "Form Handling"],
                    align: "right",
                    color: "orange-400",
                    marginTop: "md:-mt-6"
                  }, {
                    category: "Frameworks",
                    icon: <Award size={20} />,
                    skills: ["Bootstrap", "Flexbox & Grid", "Smooth Scrolling", "Animations"],
                    align: "left",
                    color: "blue-400",
                    marginTop: "md:-mt-6"
                  }].map((node, index) => {
                    // Decide node alignment properties
                    const isLeft = node.align === "left";
                    
                    return (
                      <motion.div 
                        key={node.category} 
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`group relative flex w-full md:w-1/2 ${isLeft ? 'md:self-start md:pr-12 md:justify-end' : 'md:self-end md:pl-12 md:justify-start'} ${node.marginTop || ''}`}
                      >
                         {/* Connection branch line to central spine (Desktop) */}
                         <div className={`hidden md:block absolute top-10 border-t-2 border-white/10 w-12 z-0 transition-colors duration-500 group-hover:border-${node.color}/40 ${isLeft ? 'right-0' : 'left-0'}`} />

                         {/* Mobile Timeline Dot */}
                         <div className="absolute left-[20px] top-6 w-3 h-3 rounded-full bg-white/20 border-2 border-[#09090b] md:hidden z-20 transition-colors duration-500 group-hover:bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

                         {/* Node Container */}
                         <div className="glass-effect relative overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-5 ml-14 md:ml-0 w-full md:max-w-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                            
                            {/* Hover Reveal Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                            {/* Node Header */}
                            <div className="flex items-center gap-4 relative z-10">
                               <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-white shadow-lg group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shrink-0">
                                 {node.icon}
                               </div>
                               <div>
                                  <h3 className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                                    {node.category}
                                  </h3>
                                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1 block group-hover:hidden transition-all duration-300">Hover to expand</p>
                                  <p className="text-xs text-primary/80 uppercase tracking-widest mt-1 hidden group-hover:block transition-all duration-300">Active Node</p>
                               </div>
                            </div>

                            {/* Node Expandable Skills Payload */}
                            <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-5 transition-all duration-500 ease-in-out relative z-10">
                               <div className="overflow-hidden flex flex-wrap gap-2 pt-1">
                                  {node.skills.map((skill, i) => (
                                    <span key={i} className="bg-black/40 border border-white/5 text-white/60 px-2.5 py-1 rounded-md text-[11px] font-mono group-hover:text-white/90 group-hover:border-white/15 transition-colors duration-500 delay-100 hover:!bg-primary/20 hover:!text-primary hover:!border-primary/40 cursor-default">
                                       {skill}
                                    </span>
                                  ))}
                               </div>
                            </div>

                         </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-black/20">
          <div className="container-max w-full">
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
          }} className="text-center mb-8 md:mb-12 relative">
              {/* Subtle ambient glow behind header */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 gradient-text drop-shadow-sm tracking-tight">Experience & Activities</h2>
              
              <div className="flex flex-col gap-4 md:gap-5">
                {[{
                title: "Junior Academy STEM Challenge Participant",
                organization: "New York Academy of Sciences",
                year: "2021",
                icon: <Award className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" size={32} />,
                bgIcon: <Award className="text-yellow-400" size={120} />
              }, {
                title: "Public Relations Officer",
                organization: "GDG PSUT (Google Developer Groups)",
                year: "2024-2025",
                icon: <Briefcase className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />,
                bgIcon: <Briefcase className="text-primary" size={120} />
              }, {
                title: "Web Projects — Portfolios, Restaurants, Small Businesses",
                organization: "Freelance & Student Projects",
                year: "Present",
                icon: <Code className="text-primary group-hover:scale-110 transition-transform duration-300" size={32} />,
                bgIcon: <Code className="text-primary" size={120} />
              }, {
                title: "Lecturer — Introduction to Computer Science",
                organization: "NoNerds",
                year: "2024-2025",
                icon: <GraduationCap className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" size={32} />,
                bgIcon: <GraduationCap className="text-emerald-400" size={120} />
              }]
                .sort((a, b) => {
                  const toYear = (y) => {
                    if (!y) return 0;
                    if (typeof y === 'string' && /present/i.test(y)) return 9999;
                    const years = String(y).match(/\d{4}/g);
                    if (!years || years.length === 0) return 0;
                    return parseInt(years[years.length - 1], 10);
                  };
                  return toYear(b.year) - toYear(a.year);
                })
                .map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="glass-effect group relative overflow-hidden p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center w-full max-w-4xl mx-auto transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-xl bg-white/[0.02]"
                >
                  {/* Subtle Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="flex bg-gradient-to-br from-primary/20 to-primary/5 p-2.5 md:p-3 rounded-xl border border-primary/20 mb-3 sm:mb-0 sm:mr-5 shrink-0 shadow-lg shadow-primary/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <div className="text-primary scale-90 md:scale-100">{experience.icon}</div>
                  </div>
                  
                  <div className="flex-1 min-w-0 z-10 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 md:gap-2 mb-1">
                      <h3 className="text-base md:text-xl font-bold text-white/95 truncate group-hover:text-white transition-colors duration-300">{experience.title}</h3>
                      <span className="inline-flex items-center justify-center bg-white/5 border border-white/10 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-[11px] uppercase tracking-wider text-white/60 mono-font shrink-0 w-fit sm:w-auto group-hover:border-primary/30 group-hover:text-primary/90 transition-all duration-500">
                        {experience.year}
                      </span>
                    </div>
                    <p className="text-white/50 font-medium text-xs md:text-sm group-hover:text-white/70 transition-colors duration-300">{experience.organization}</p>
                  </div>
                </motion.div>
              ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section-padding">
          <div className="container-max w-full">
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
          }} className="text-center mb-8 md:mb-12 relative">
              {/* Subtle ambient glow behind header */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 gradient-text drop-shadow-sm tracking-tight">Certificates</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="glass-effect group relative flex flex-col p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 h-full backdrop-blur-xl bg-white/[0.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
                  
                  <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-white/5">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-2.5 rounded-xl border border-primary/20 text-primary shadow-lg shadow-primary/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white/95 leading-tight">Meta Front-End</h3>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1">In Progress</p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col z-10">
                    <h4 className="text-[10px] font-bold text-primary/80 mb-3 tracking-widest uppercase">Courses</h4>
                    <ul className="space-y-2.5 text-sm flex-1">
                      {["Intro to Front-End", "Programming with JS", "Version Control", "HTML & CSS in-depth"].map((course, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/50 group-hover:text-white/80 transition-colors duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary/80 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-colors duration-300" />
                          <span className="leading-snug">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="glass-effect group relative flex flex-col p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/20 h-full backdrop-blur-xl bg-white/[0.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
                  
                  <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-white/5">
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 p-2.5 rounded-xl border border-yellow-400/20 text-yellow-400 shadow-lg shadow-yellow-400/5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white/95 leading-tight">Junior Academy</h3>
                      <p className="text-yellow-400/50 text-[10px] uppercase tracking-wider mt-1">2021</p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col z-10">
                    <h4 className="text-[10px] font-bold text-yellow-400/80 mb-3 tracking-widest uppercase">STEM Challenge</h4>
                    <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-6 flex-1 leading-relaxed">Participated in global challenges focusing on real-world problem solving.</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {["Teamwork", "STEM", "Problem Solving"].map((tag, i) => (
                        <span key={i} className="bg-white/5 border border-white/10 text-white/40 group-hover:text-yellow-400/80 group-hover:border-yellow-400/30 transition-all duration-500 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="glass-effect group relative flex flex-col p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-400/20 h-full backdrop-blur-xl bg-white/[0.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
                  
                  <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-white/5">
                    <div className="bg-gradient-to-br from-blue-400/20 to-blue-400/5 p-2.5 rounded-xl border border-blue-400/20 text-blue-400 shadow-lg shadow-blue-400/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white/95 leading-tight">JCPC Contest</h3>
                      <p className="text-blue-400/50 text-[10px] uppercase tracking-wider mt-1">2025</p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col z-10">
                    <h4 className="text-[10px] font-bold text-blue-400/80 mb-3 tracking-widest uppercase">Participation</h4>
                    <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-6 flex-1 leading-relaxed">Jordan Collegiate Programming Contest participant solving algorithmic challenges.</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {["Algorithms", "Competitive", "Teamwork"].map((tag, i) => (
                        <span key={i} className="bg-white/5 border border-white/10 text-white/40 group-hover:text-blue-400/80 group-hover:border-blue-400/30 transition-all duration-500 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="glass-effect group relative flex flex-col p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-400/20 h-full backdrop-blur-xl bg-white/[0.02]">
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
                  
                  <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-white/5">
                    <div className="bg-gradient-to-br from-orange-400/20 to-orange-400/5 p-2.5 rounded-xl border border-orange-400/20 text-orange-400 shadow-lg shadow-orange-400/5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white/95 leading-tight">Amazon Program</h3>
                      <p className="text-orange-400/50 text-[10px] uppercase tracking-wider mt-1">2025/2026</p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col z-10">
                    <h4 className="text-[10px] font-bold text-orange-400/80 mb-3 tracking-widest uppercase">Engagement</h4>
                    <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300 mb-6 flex-1 leading-relaxed">Academic engagement program heavily focused on Web Development.</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {["Web Dev", "Project-Based", "Teamwork"].map((tag, i) => (
                        <span key={i} className="bg-white/5 border border-white/10 text-white/40 group-hover:text-orange-400/80 group-hover:border-orange-400/30 transition-all duration-500 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-black/20">
          <div className="container-max w-full">
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
              }].map((project, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }} 
                  viewport={{ once: true }} 
                  className="relative group overflow-hidden rounded-xl h-80 w-full"
                >
                  {/* Base Layer: Image & Gradient Overlay */}
                  <div className="absolute inset-0 w-full h-full bg-slate-900">
                    <img 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-30 transition-all duration-500 ease-in-out" 
                      alt={`${project.title} screenshot`} 
                      src={project.image} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  </div>

                  {/* Always Visible Text (Bottom Left) */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 transition-transform duration-500 ease-in-out group-hover:translate-y-[-120%] group-hover:opacity-0">
                    <h3 className="text-2xl font-bold text-white mb-1 shadow-sm">{project.title}</h3>
                    <p className="text-white/80 line-clamp-1 text-sm">{project.description}</p>
                  </div>

                  {/* Sliding Snippet Container - Hidden initially, slides up on Hover */}
                  <div className="absolute inset-x-0 bottom-0 top-0 p-6 flex flex-col justify-between translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 bg-slate-900/80 backdrop-blur-sm border-t border-primary/20">
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="w-5 h-5 text-primary opacity-70" />
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-primary/20 text-primary px-2 py-1 rounded text-xs mono-font font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a href={`/projects/${project.slug}`} className="flex-1 text-center bg-primary text-white hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors shadow-lg shadow-primary/20">
                        View Details
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-primary/50 text-white hover:bg-primary/20 rounded-md px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-max w-full">
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