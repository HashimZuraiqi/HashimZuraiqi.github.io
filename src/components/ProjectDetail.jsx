import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet';
import projectsData from '../data/projects';

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const openImageModal = (index) => {
    setImageIndex(index);
    setSelectedImage(project.screenshots[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % project.screenshots.length;
    setImageIndex(newIndex);
    setSelectedImage(project.screenshots[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (imageIndex - 1 + project.screenshots.length) % project.screenshots.length;
    setImageIndex(newIndex);
    setSelectedImage(project.screenshots[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>{project.title} - {project.subtitle} | Hashim Zuraiqi</title>
        <meta name="description" content={project.overview.description} />
        <meta property="og:title" content={`${project.title} - ${project.subtitle}`} />
        <meta property="og:description" content={project.overview.description} />
        <html className="dark" />
        <body className="dark-theme-body" />
      </Helmet>

      <div className="min-h-screen text-foreground bg-gradient-to-b from-transparent via-black/5 to-transparent"
           style={{ fontFamily: "'Syne', sans-serif" }}>
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 origin-left z-[60] shadow-lg"
          style={{ scaleX }}
          initial={{ scaleX: 0 }}
        />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full z-50 glass-effect"
        >
          <div className="container-max flex justify-between items-center py-4">
            <motion.button
              onClick={() => navigate('/#projects')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </motion.button>
            <div className="flex gap-4">
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  <span className="hidden md:inline">GitHub</span>
                </motion.a>
              )}
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-2 rounded-full font-semibold glow-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
          {/* Animated Background Blobs */}
          <motion.div style={{ y }} className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-8 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-base text-white/50 mono-font">
                <span className="flex items-center gap-2">📌 {project.overview.purpose}</span>
                <span className="flex items-center gap-2">👥 {project.overview.target}</span>
                <span className="flex items-center gap-2">💼 {project.overview.role}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-black/10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 gradient-text tracking-tight">
                Project Overview
              </h2>
              <div className="glass-effect p-10 md:p-16 rounded-3xl">
                <p className="text-xl md:text-2xl leading-relaxed text-white/80">
                  {project.overview.description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center gradient-text tracking-tight">
                Screenshots & Interface
              </h2>
              
              {/* Main 3 Screenshots */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12">
                {project.screenshots.slice(0, 3).map((screenshot, index) => (
                  <motion.div
                    key={screenshot.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="glass-effect p-0 group cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden"
                    onClick={() => openImageModal(index)}
                    whileHover={{ scale: 1.02, y: -8 }}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-lg md:text-xl font-bold mb-3 gradient-text">{screenshot.title}</h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">{screenshot.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View More Button */}
              {project.screenshots.length > 3 && (
                <div className="text-center">
                  <motion.button
                    onClick={() => openImageModal(0)}
                    className="inline-flex items-center gap-2 border-blue-400/30 text-blue-100 hover:bg-blue-900/30 px-8 py-3 rounded-full font-semibold border transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All {project.screenshots.length} Screenshots
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center gradient-text tracking-tight">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500 hover:scale-105"
                  >
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                    <p className="text-white/60 text-base leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center gradient-text tracking-tight">
                Technology Stack
              </h2>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {/* Frontend */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 md:p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Front-End</h3>
                  <div className="space-y-4">
                    {project.techStack.frontend.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-white/80">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Backend */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 md:p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Back-End</h3>
                  <div className="space-y-4">
                    {project.techStack.backend.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-white/80">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 md:p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Tools & Deployment</h3>
                  <div className="space-y-4">
                    {project.techStack.tools.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-white/80">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-black/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center gradient-text tracking-tight">
                My Contributions
              </h2>
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                {project.responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 glass-effect p-5 rounded-lg border border-white/10 hover:border-primary/40 transition-colors"
                  >
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/80">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center gradient-text tracking-tight">
                System Architecture
              </h2>
              <div className="glass-effect p-10 md:p-16 rounded-3xl">
                <p className="text-lg text-white/80 mb-6 leading-relaxed">{project.architecture.description}</p>
                <pre className="bg-black/40 p-6 rounded-lg overflow-x-auto text-sm text-white/70 mono-font border border-white/10">
{project.architecture.diagram}
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges & Outcomes */}
        {project.challenges && project.outcomes && (
          <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-black/10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-colors"
                      >
                        <p className="font-semibold text-yellow-400 mb-3">
                          Challenge: {item.challenge}
                        </p>
                        <p className="text-white/80">
                          <span className="text-green-400 font-semibold">Solution:</span> {item.solution}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Outcomes */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    Outcomes & Learning
                  </h2>
                  <div className="space-y-4">
                    {project.outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 glass-effect p-5 rounded-lg border border-white/10 hover:border-primary/40 transition-colors"
                      >
                        <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                        <p className="text-white/80">{outcome}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-12 md:p-16 lg:p-20 text-center rounded-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text tracking-tight">Interested in this project?</h2>
              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
                Check out the source code on GitHub or get in touch to discuss similar projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-blue-400/30 text-blue-100 hover:bg-blue-900/30 px-8 py-3 rounded-full font-semibold border transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    View on GitHub
                  </motion.a>
                )}
                <Link to="/#contact">
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold glow-effect w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.button>
                </Link>
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

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-3 glass-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <motion.button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 glass-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={32} />
              </motion.button>

              <motion.button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 glass-effect transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={32} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-6xl w-full"
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="text-center mt-4">
                  <p className="text-white font-semibold text-lg">{selectedImage.title}</p>
                  <p className="text-white/60">{selectedImage.description}</p>
                  <p className="text-white/40 text-sm mt-2">
                    {imageIndex + 1} / {project.screenshots.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ProjectDetail;
