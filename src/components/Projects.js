import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import project images
import digitalLifeLessonsImg from '../assets/digital-life-lessons-to-learn.netlify.app_ (1).png';
import heroAppsImg from '../assets/hero-apps-oi.netlify.app_.png';
import communityCleanlinessImg from '../assets/community-cleanliness-issues-report.netlify.app.png';
import greenEarthImg from '../assets/sourov-green-earth.netlify.app_.png';
import greenNestImg from '../assets/sourov-green-nest.netlify.app_.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'Digital Life Lessons Platform',
      description: 'An interactive educational platform designed to teach essential digital life skills and lessons. Features user-friendly navigation, responsive design, and engaging content delivery for modern learners.',
      image: digitalLifeLessonsImg,
      liveUrl: 'https://digital-life-lesson-client.vercel.app/',
      technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Design', 'Educational Tech'],
      gradient: 'from-blue-500 to-purple-600',
      category: 'Educational Platform'
    },
    {
      id: 2,
      title: 'Hero Apps Collection',
      description: 'A comprehensive collection of utility applications showcasing various React components and functionalities. Demonstrates modern UI/UX principles with clean, intuitive interfaces.',
      image: heroAppsImg,
      liveUrl: 'https://sourov-hero-oi.vercel.app/',
      technologies: ['React', 'JavaScript', 'Modern UI', 'Component Library', 'Utility Apps'],
      gradient: 'from-emerald-500 to-teal-600',
      category: 'Utility Collection'
    },
    {
      id: 3,
      title: 'Community Cleanliness Reporter',
      description: 'A civic engagement platform enabling citizens to report cleanliness issues in their community. Features real-time reporting, location tracking, and community collaboration tools.',
      image: communityCleanlinessImg,
      liveUrl: 'https://community-cleanliness-client.vercel.app/',
      technologies: ['React', 'Community Tech', 'Reporting System', 'Civic Engagement', 'Social Impact'],
      gradient: 'from-green-500 to-blue-600',
      category: 'Civic Platform'
    },
    {
      id: 4,
      title: 'Green Earth Initiative',
      description: 'An environmental awareness platform promoting sustainable practices and eco-friendly solutions. Features interactive content, environmental tips, and green living resources.',
      image: greenEarthImg,
      liveUrl: 'https://sourov-green-earth.netlify.app/',
      technologies: ['React', 'Environmental Tech', 'Sustainability', 'Green Solutions', 'Eco-Friendly'],
      gradient: 'from-green-400 to-emerald-600',
      category: 'Environmental Platform'
    },
    {
      id: 5,
      title: 'Green Nest Eco Hub',
      description: 'A comprehensive eco-living platform providing resources, tips, and tools for sustainable lifestyle choices. Combines modern web technology with environmental consciousness.',
      image: greenNestImg,
      liveUrl: 'https://sourov-green-nest.netlify.app/',
      technologies: ['React', 'Eco-Tech', 'Sustainable Living', 'Green Technology', 'Environmental Solutions'],
      gradient: 'from-teal-500 to-green-600',
      category: 'Sustainability Hub'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="group relative bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500"
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.title} Screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          variants={imageVariants}
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm rounded-full">
            {project.category}
          </span>
        </div>

        {/* Project Number */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <motion.h3 
          className="text-xl font-display font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2"
          whileHover={{ scale: 1.02 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-md hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2">View Live Demo</span>
            <motion.i 
              className="fas fa-external-link-alt text-sm"
              animate={{
                x: [0, 3, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.a>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-background-dark dark:via-gray-900 dark:to-purple-900/10 relative overflow-hidden"
      id="projects"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            variants={titleVariants}
          >
            <motion.span 
              className="text-primary neon-text"
              whileHover={{ scale: 1.05 }}
            >
              Featured
            </motion.span>{' '}
            <motion.span 
              className="text-secondary neon-text-pink"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
          
          <motion.p 
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            A showcase of my recent work and projects that demonstrate my skills in 
            <span className="text-primary font-semibold"> modern web development</span> and 
            <span className="text-secondary font-semibold"> user experience design</span>
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={titleVariants}
        >
          <motion.div 
            className="inline-block bg-white/80 dark:bg-card-dark/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.h3 
              className="text-2xl font-display font-bold mb-4 text-gray-800 dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              Interested in My Work?
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              These projects represent my journey in web development. I'm always excited to discuss new opportunities and collaborations!
            </p>
            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-envelope mr-2"></i>
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;