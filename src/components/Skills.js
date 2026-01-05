import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const frontendSkills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-cyan-400' },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'fab fa-node', color: 'text-green-500' },
    { name: 'Express.js', icon: 'fas fa-server', color: 'text-gray-500' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-400' },
    { name: 'JWT', icon: 'fas fa-lock', color: 'text-pink-500' },
    { name: 'Firebase', icon: 'fas fa-fire', color: 'text-orange-400' }
  ];

  const tools = [
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-300' },
    { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-400' },
    { name: 'Postman', icon: 'fas fa-rocket', color: 'text-orange-500' },
    { name: 'Nodemon', icon: 'fas fa-terminal', color: 'text-white' },
    { name: 'Vercel', icon: 'fas fa-triangle-circle-square', color: 'text-white' },
    { name: 'Netlify', icon: 'fas fa-cloud', color: 'text-teal-400' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-pink-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const skillCardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const SkillCard = ({ skill, size = 'large', index }) => {
    const cardSize = size === 'large' ? 'w-32 h-32' : 'w-28 h-28';
    const iconSize = size === 'large' ? 'text-4xl' : 'text-3xl';
    const textSize = size === 'large' ? 'text-sm' : 'text-xs';
    
    return (
      <motion.div 
        className={`skill-card bg-white dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-white/10 ${cardSize} flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer`}
        variants={skillCardVariants}
        whileHover={{ 
          scale: 1.1, 
          y: -10,
          boxShadow: "0 10px 25px rgba(6, 182, 212, 0.3)",
          borderColor: "rgba(6, 182, 212, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        custom={index}
      >
        <motion.i 
          className={`${skill.icon} ${iconSize} ${skill.color} mb-3 group-hover:scale-110 transition-transform`}
          whileHover={{ 
            rotate: 360,
            scale: 1.2
          }}
          transition={{ duration: 0.6 }}
        />
        <span className={`font-bold ${textSize} text-center group-hover:text-primary transition-colors`}>
          {skill.name}
        </span>
      </motion.div>
    );
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-[#0d0d14] dark:via-gray-900 dark:to-purple-900/20 px-4" 
      id="skills"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            variants={titleVariants}
          >
            <motion.span 
              className="text-primary neon-text"
              whileHover={{ scale: 1.05 }}
            >
              Skills
            </motion.span> &{' '}
            <motion.span 
              className="text-secondary neon-text-pink"
              whileHover={{ scale: 1.05 }}
            >
              Technologies
            </motion.span>
          </motion.h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "8rem" } : { width: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-500 text-lg mt-4 italic"
            variants={titleVariants}
          >
            Technologies & tools I use to craft modern web experiences
          </motion.p>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div className="mb-16" variants={containerVariants}>
          <motion.div className="text-center mb-8" variants={titleVariants}>
            <motion.h3 
              className="text-2xl font-display font-bold text-primary mb-2 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.i 
                className="fas fa-palette text-secondary"
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              Frontend Development
            </motion.h3>
            <motion.div 
              className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "4rem" } : { width: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            />
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div className="mb-16" variants={containerVariants}>
          <motion.div className="text-center mb-8" variants={titleVariants}>
            <motion.h3 
              className="text-2xl font-display font-bold text-primary mb-2 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.i 
                className="fas fa-server text-secondary"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              Backend Development
            </motion.h3>
            <motion.div 
              className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "4rem" } : { width: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            />
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={containerVariants}>
          <motion.div className="text-center mb-8" variants={titleVariants}>
            <motion.h3 
              className="text-2xl font-display font-bold text-primary mb-2 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.i 
                className="fas fa-tools text-secondary"
                animate={{
                  rotate: [0, 15, -15, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              Tools & Platforms
            </motion.h3>
            <motion.div 
              className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "4rem" } : { width: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            />
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {tools.map((tool, index) => (
              <SkillCard key={index} skill={tool} size="small" index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div 
          className="mt-16 bg-white/80 dark:bg-card-dark/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
          variants={titleVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <motion.h3 
            className="text-xl font-display font-bold text-center mb-8 text-primary"
            variants={titleVariants}
          >
            Proficiency Levels
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {[
              { skill: 'Frontend Development', level: 85 },
              { skill: 'Backend Development', level: 75 },
              { skill: 'Database Management', level: 70 },
              { skill: 'Version Control', level: 80 }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                variants={titleVariants}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                  <motion.span 
                    className="text-primary font-bold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                  >
                    {item.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeOut", 
                      delay: 1.2 + index * 0.2 
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;