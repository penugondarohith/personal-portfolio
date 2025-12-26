import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Penugonda Naga Venkata Lakshmi Rohith
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-4">
              Frontend Developer & Aspiring Software Engineer
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Building responsive, user-friendly web applications using HTML, CSS, JavaScript, Flask, and Python.
              B.Tech AI/ML student passionate about creating scalable and impactful solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
            >
              <a
                href="https://drive.google.com/file/d/1gbSZ0BNeCt5MKKhKdRa1Dk0uD29Mm_RA/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://www.linkedin.com/in/penugonda-rohith-543250313"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://github.com/penugondarohith"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <Github className="w-6 h-6 text-gray-800" />
            </a>
            <a
              href="mailto:penugondarohith2004@gmail.com"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <Mail className="w-6 h-6 text-gray-800" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl"
            >
              <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">B.Tech AI/ML</div>
                    <div className="text-sm text-gray-600">GPA: 8.2</div>
                    <div className="text-sm text-gray-600">2023-2027</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-lg opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-0 w-16 h-16 bg-purple-200 rounded-full opacity-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}