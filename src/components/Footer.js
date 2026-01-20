import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/sourovmoy', color: 'hover:text-gray-400' },
    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/sourov-dash/', color: 'hover:text-blue-400' },
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/sourovmmoysanju', color: 'hover:text-blue-500' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="font-display font-bold text-3xl text-primary neon-text tracking-wider mb-4">
              SOUROV DASH
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Junior MERN Stack Developer passionate about creating modern, responsive web applications. 
              Currently seeking opportunities to grow and contribute to meaningful projects.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Sourov Dash's ${social.icon.includes('github') ? 'GitHub' : social.icon.includes('linkedin') ? 'LinkedIn' : 'Facebook'} profile`}
                    className={`w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
                  >
                    <i className={`${social.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-gray-800 dark:text-white">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-envelope text-primary"></i>
                <span>sourovmmoysanju@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-phone text-primary"></i>
                <a href="tel:+8801742818496">+8801742818496</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Naogaon, Rajshahi, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Sourov Dash. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Designed and developed with{' '}
              <span className="text-red-500 animate-pulse">❤</span>{' '}
              and clean code.
            </p>
          </div>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <i className="fas fa-arrow-up text-xs"></i>
            </div>
          </button>
        </div>
        
        {/* Tech Stack Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-xs text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <i className="fab fa-react text-cyan-400"></i>
            <span>React</span>
            <span>•</span>
            <i className="fas fa-wind text-cyan-400"></i>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-red-500">❤</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary/5 rounded-full blur-lg"></div>
    </footer>
  );
};

export default Footer;