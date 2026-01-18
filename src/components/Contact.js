import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  

  // EmailJS Configuration - Loaded from environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert('❌ EmailJS configuration is missing. Please check your .env file.');
      return;
    }

    // Check if template ID is still placeholder
    if (TEMPLATE_ID.includes('YOUR_TEMPLATE_ID_HERE')) {
      alert('❌ Please update your REACT_APP_EMAILJS_TEMPLATE_ID in the .env file with your actual EmailJS template ID.');
      return;
    }
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
          }),
        },
        PUBLIC_KEY
      );

      // Show success message
      alert('✅ Thank you for your message! I will get back to you soon.');
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      // More detailed error handling
      let errorMessage = '❌ Failed to send message. ';
      
      if (error.status === 400) {
        errorMessage += 'Invalid template ID or service configuration.';
      } else if (error.status === 401) {
        errorMessage += 'Invalid public key or unauthorized access.';
      } else if (error.status === 404) {
        errorMessage += 'Template or service not found.';
      } else {
        errorMessage += 'Please try again or contact me directly via email.';
      }
      
      alert(errorMessage);
      
      // Log error for debugging (remove in production)
      // eslint-disable-next-line no-console
      console.error('EmailJS Error:', error);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'sourovmmoysanju@gmail.com',
      color: 'text-blue-500',
      href: 'mailto:sourovmmoysanju@gmail.com'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone',
      value: '+8801742818496',
      color: 'text-green-500',
      href: 'tel:+8801742818496'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Naogaon, Rajshahi, Bangladesh',
      color: 'text-red-500',
      href: null
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', color: 'hover:bg-gray-800', href: 'https://github.com/sourovmoy' },
    { icon: 'fab fa-linkedin-in', color: 'hover:bg-blue-600', href: 'https://www.linkedin.com/in/sourov-dash/' },
    { icon: 'fab fa-facebook-f', color: 'hover:bg-blue-700', href: 'https://www.facebook.com/sourovmmoysanju' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 dark:from-black/40 dark:via-gray-900 dark:to-purple-900/20 px-4 relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-primary neon-text">Let's</span>{' '}
            <span className="text-secondary neon-text-pink">Connect</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">
            Ready to start your next project? Let's work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-card-dark/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-display font-bold mb-6 text-gray-800 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm <strong>Sourov Dash</strong>, a passionate Junior MERN Stack Developer actively seeking opportunities to grow and contribute to meaningful projects. Let's discuss how we can work together!
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-black/30 rounded-xl hover:bg-gray-100 dark:hover:bg-black/50 transition-colors group cursor-pointer"
                    onClick={() => info.href && window.open(info.href, '_self')}
                  >
                    <div className={`w-12 h-12 ${info.color} bg-current/10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                      <i className={`${info.icon} ${info.color}`}></i>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-800 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-display font-bold text-gray-800 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Sourov Dash's ${social.icon.includes('github') ? 'GitHub' : social.icon.includes('linkedin') ? 'LinkedIn' : 'Facebook'} profile`}
                      className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 text-xl hover:scale-110 transform`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* CV Download Button */}
              <div className="mt-8">
                <a 
                  href="/sourov-dash-cv.pdf"
                  download="Sourov_Dash_CV.pdf"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-primary/50 group"
                >
                  <i className="fas fa-download group-hover:animate-bounce"></i>
                  <span>DOWNLOAD CV</span>
                  <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                </a>
              </div>

              {/* Availability Status */}
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-display font-bold text-green-800 dark:text-green-300 text-sm">
                      Available for Opportunities
                    </h4>
                    <p className="text-green-600 dark:text-green-400 text-xs">
                      Open for junior developer roles & freelance projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="bg-white/90 dark:bg-card-dark/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl relative z-10 space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white">
                  Send Message
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  Fill out the form below and I'll get back to you soon!
                </p>
              
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-800 dark:text-gray-200 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Email *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-800 dark:text-gray-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-800 dark:text-gray-200 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Message *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-50 dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-800 dark:text-gray-200 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
              >
                <i className="fas fa-paper-plane"></i> 
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;