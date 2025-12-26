import { motion } from "motion/react";
import { GraduationCap, Briefcase, Code, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Education",
      description: "B.Tech AI/ML Student",
      details: "Vignan Institute of Technology and Science",
      year: "2023-2027 | GPA: 8.2"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Internship",
      description: "Frontend Development",
      details: "Real-world web development experience",
      year: "Building scalable solutions"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Expertise",
      description: "Web Technologies",
      details: "HTML, CSS, JavaScript, Flask, Python",
      year: "Full-stack capabilities"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Passion",
      description: "AI/ML & Problem Solving",
      details: "Building intelligent solutions",
      year: "Continuous learning"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate developer committed to creating impactful digital experiences
          </p>
        </motion.div>

        {/* Main About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am a B.Tech student specializing in Artificial Intelligence and Machine Learning at Vignan 
            Institute of Technology and Science (2023–2027) with a GPA of 8.2. I have hands-on experience 
            as a Frontend Developer, where I built responsive, accessible, and performance-optimized web 
            applications using modern web technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a strong foundation in <span className="text-purple-600">Python, web technologies, and databases</span>, 
            I focus on developing scalable, user-centric solutions and actively explore the integration of 
            <span className="text-blue-600"> AI/ML with modern web development</span> to create intelligent and 
            impactful applications.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-blue-200">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-lg flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-900">{highlight.title}</h3>
                    <p className="text-sm text-blue-600 mb-1">{highlight.description}</p>
                    <p className="text-sm text-gray-600 mb-1">{highlight.details}</p>
                    <p className="text-xs text-gray-500">{highlight.year}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}