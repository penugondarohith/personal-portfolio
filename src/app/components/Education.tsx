import { motion } from "motion/react";
import { GraduationCap, School, Award, BookOpen, Code, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      level: "Undergraduate",
      institution: "Vignan Institute of Technology and Science",
      duration: "2023 – 2027",
      location: "Hyderabad",
      score: "8.2 / 10",
      scoreLabel: "CGPA",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "blue",
      highlights: [
        "Computer Science Fundamentals",
        "Web Development",
        "Python Programming",
        "Data Structures & Problem Solving",
        "Introduction to AI & Machine Learning"
      ],
      current: true
    },
    {
      degree: "Intermediate (Class XII)",
      level: "Higher Secondary",
      institution: "Sri Chaitanya Junior College",
      duration: "2021 – 2023",
      location: "Vijayawada",
      score: "89.8%",
      scoreLabel: "Score",
      icon: <School className="w-8 h-8" />,
      color: "purple",
      highlights: [],
      current: false
    },
    {
      degree: "Secondary School (SSC)",
      level: "Class X",
      institution: "Noble High School",
      duration: "2021",
      location: "Vijayawada",
      score: "10 / 10",
      scoreLabel: "GPA",
      icon: <Award className="w-8 h-8" />,
      color: "green",
      highlights: [],
      current: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { 
      bg: string; 
      border: string; 
      text: string; 
      iconBg: string;
      badge: string;
    }> = {
      blue: { 
        bg: "bg-blue-50", 
        border: "border-blue-200", 
        text: "text-blue-600",
        iconBg: "from-blue-500 to-blue-600",
        badge: "bg-blue-100 text-blue-700 border-blue-300"
      },
      purple: { 
        bg: "bg-purple-50", 
        border: "border-purple-200", 
        text: "text-purple-600",
        iconBg: "from-purple-500 to-purple-600",
        badge: "bg-purple-100 text-purple-700 border-purple-300"
      },
      green: { 
        bg: "bg-green-50", 
        border: "border-green-200", 
        text: "text-green-600",
        iconBg: "from-green-500 to-green-600",
        badge: "bg-green-100 text-green-700 border-green-300"
      }
    };
    return colors[color] || colors.blue;
  };

  const relevantCoursework = [
    { icon: <Code className="w-5 h-5" />, name: "Web Development", color: "blue" },
    { icon: <BookOpen className="w-5 h-5" />, name: "Data Structures", color: "purple" },
    { icon: <Brain className="w-5 h-5" />, name: "AI & ML", color: "pink" }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic journey building a strong foundation in technology and innovation
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const colors = getColorClasses(edu.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <Card className={`${colors.bg} border-2 ${colors.border} hover:shadow-xl transition-all`}>
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`bg-gradient-to-br ${colors.iconBg} text-white p-3 rounded-lg shadow-lg flex-shrink-0`}>
                            {edu.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                              <h3 className="text-xl text-gray-900">
                                {edu.degree}
                              </h3>
                              {edu.current && (
                                <Badge className="bg-green-100 text-green-700 border border-green-300">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mb-1">{edu.level}</p>
                          </div>
                        </div>

                        {/* Institution Details */}
                        <div className="space-y-2 mb-4">
                          <p className="text-lg text-gray-800">{edu.institution}</p>
                          <div className="flex items-center gap-4 flex-wrap text-sm text-gray-600">
                            <span>📅 {edu.duration}</span>
                            <span>📍 {edu.location}</span>
                          </div>
                        </div>

                        {/* Score Highlight */}
                        <div className={`${colors.bg} border-2 ${colors.border} rounded-lg p-4 mb-4`}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{edu.scoreLabel}</span>
                            <span className={`text-2xl ${colors.text}`}>{edu.score}</span>
                          </div>
                        </div>

                        {/* Key Focus Areas */}
                        {edu.highlights.length > 0 && (
                          <div>
                            <h4 className="text-sm uppercase tracking-wide text-gray-600 mb-3">
                              Key Focus Areas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="bg-white border border-gray-200"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 ${colors.border} rounded-full z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}