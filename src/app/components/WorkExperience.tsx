import { motion } from "motion/react";
import { Briefcase, Github, CheckCircle, Code, Layout, Globe } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function WorkExperience() {
  const techStack = [
    { name: "HTML5", icon: <Code className="w-4 h-4" />, color: "orange" },
    { name: "CSS3", icon: <Layout className="w-4 h-4" />, color: "blue" },
    { name: "GitHub", icon: <Github className="w-4 h-4" />, color: "gray" }
  ];

  const achievements = [
    "Designed and developed static web pages using HTML5 and CSS3",
    "Implemented structured layouts and reusable components",
    "Ensured responsiveness and cross-browser compatibility",
    "Followed best practices for semantic HTML and clean UI design"
  ];

  const results = [
    "Delivered a visually consistent and user-friendly static website",
    "Improved understanding of real-world frontend workflows",
    "Strengthened skills in layout design, styling, and UI fundamentals"
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional experience building real-world web solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-blue-300">
            {/* Top accent bar */}
            <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                {/* IBM Logo Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-lg flex items-center justify-center w-24 h-24 flex-shrink-0"
                >
                  <div className="text-white text-2xl text-center leading-tight">Edunet</div>
                </motion.div>

                {/* Header Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <h3 className="text-2xl lg:text-3xl mb-2 text-gray-900">
                        Frontend Developer
                      </h3>
                      <p className="text-xl text-blue-600 mb-1">Edunet</p>
                      <p className="text-sm text-gray-500">Static Website Development Project</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border border-green-300">
                      Professional Experience
                    </Badge>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 hover:border-blue-400 transition-colors flex items-center gap-1.5"
                      >
                        {tech.icon}
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 pt-4">
              {/* Situation/Task */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-blue-700 mb-2">
                      Situation & Task
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Worked on building a clean and responsive static website as part of a frontend 
                      development role at Edunet. The project focused on delivering a professional web presence 
                      with emphasis on code quality and user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-purple-600" />
                  <h4 className="text-sm uppercase tracking-wide text-purple-600">
                    Key Actions & Responsibilities
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-green-700 mb-3">
                      Results & Impact
                    </h4>
                    <ul className="space-y-2">
                      {results.map((result, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
              >
                <a
                  href="https://github.com/penugondarohith/Static-website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Project on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            This experience strengthened my foundation in frontend development and prepared me for 
            building more complex web applications
          </p>
        </motion.div>
      </div>
    </section>
  );
}