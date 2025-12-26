import { motion } from "motion/react";
import { Github, ExternalLink, BookOpen, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Projects() {
  const projects = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Smart Book Recommendation System",
      year: "2023",
      challenge: "Helping students discover relevant books efficiently in a crowded library environment",
      action: [
        "Built intuitive GUI using Python Tkinter for seamless user interaction",
        "Implemented personalized recommendation algorithm based on user preferences",
        "Designed efficient data structures for quick book lookup and filtering"
      ],
      result: "Improved book discovery experience by 60%, making it suitable for libraries & e-learning platforms",
      tools: ["Python", "Tkinter", "Data Structures", "Algorithm Design"],
      github: "https://github.com/penugondarohith/Smart-Book-Recommendation-System.git",
      demo: null,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
      title: "Local Store E-Commerce Platform – Mini Amazon",
      year: "2024",
      challenge: "Enabling local businesses to sell products online with limited technical resources",
      action: [
        "Built full-stack web application using Flask framework and SQLite database",
        "Designed responsive UI with HTML5, CSS3, and JavaScript for cross-device compatibility",
        "Implemented shopping cart functionality, user authentication, and product management"
      ],
      result: "Functional e-commerce platform with smooth UX across all devices, ready for small business deployment",
      tools: ["Flask", "HTML5", "CSS3", "JavaScript", "SQLite", "Responsive Design"],
      github: "https://github.com/penugondarohith/Mini-Amazon.git",
      demo: null,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world solutions demonstrating problem-solving skills and technical expertise
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-blue-200">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${project.gradient} p-3 rounded-lg`}>
                      <div className="text-white">{project.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-2xl mb-2 text-gray-900">{project.title}</h3>
                          <p className="text-sm text-gray-500">{project.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-blue-600 mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>

                  {/* Action */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-purple-600 mb-2">
                      Action
                    </h4>
                    <ul className="space-y-2">
                      {project.action.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-green-600 mb-2">
                      Result
                    </h4>
                    <p className="text-gray-700">{project.result}</p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-white border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="bg-gray-50 flex gap-3 flex-wrap">
                  {project.github && (
                    <Button
                      variant="outline"
                      asChild
                      className="border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      asChild
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}