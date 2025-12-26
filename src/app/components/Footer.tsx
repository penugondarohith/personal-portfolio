import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/penugonda-rohith-543250313",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/penugondarohith",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:penugondarohith2004@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Penugonda Rohith
            </h3>
            <p className="text-gray-300 mb-4">
              Frontend Developer & B.Tech AI/ML student passionate about building 
              user-centric web applications and solving real-world problems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Keywords Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Frontend Developer",
                "Python Developer",
                "Web Developer",
                "Flask Projects",
                "AI/ML Student",
                "Software Engineer Intern"
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Penugonda Rohith. Built with</span>
            <Heart className="w-4 h-4 text-red-500 inline" />
            <span>using React & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}