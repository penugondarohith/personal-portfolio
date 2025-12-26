import { motion } from "motion/react";
import { Code2, Globe, Database, Wrench, Users } from "lucide-react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Programming Languages",
      color: "blue",
      skills: ["Python", "Java", "C"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      color: "purple",
      skills: ["HTML5", "CSS3", "JavaScript", "Flask"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      color: "cyan",
      skills: ["SQL", "SQLite"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      color: "indigo",
      skills: ["GitHub", "Git", "VS Code"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Soft Skills",
      color: "pink",
      skills: ["Teamwork", "Problem Solving", "Communication", "Leadership"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
      pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`${colors.bg} rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${colors.text}`}>{category.icon}</div>
                  <h3 className={`text-lg ${colors.text}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-white hover:bg-gray-50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center border-2 border-blue-100"
        >
          <p className="text-lg text-gray-700">
            Continuously expanding my skillset through hands-on projects, online courses, and competitive programming
          </p>
        </motion.div>
      </div>
    </section>
  );
}
