import { motion } from "motion/react";
import { Award, Code, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Certifications() {
  const certifications = [
    {
      platform: "HackerRank",
      title: "Problem Solving",
      icon: <Award className="w-8 h-8 text-green-600" />,
      color: "green",
      link: "https://www.hackerrank.com/certificates/2a2eec208394"
    },
    {
      platform: "HackerRank",
      title: "Python (Basic)",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      color: "blue",
      link: "https://www.hackerrank.com/certificates/454772d2f949"
    },
    {
      platform: "CodeChef",
      title: "500 difficulty rating",
      icon: <Trophy className="w-8 h-8 text-amber-600" />,
      color: "amber",
      link: "https://www.codechef.com/certificates/public/1071799"
    },
    {
      platform: "NxtWave - CCBP",
      title: "Build Your Static Website",
      icon: <Code className="w-8 h-8 text-purple-600" />,
      color: "purple",
      link: "https://certificates.ccbp.in/academy/static-website?id=LXTDXFRMTH"
    },
    {
      platform: "NxtWave - CCBP",
      title: "Build Your Responsive Website",
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      color: "indigo",
      link: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=UFOSTXSZPF"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; hover: string }> = {
      green: { bg: "bg-green-50", border: "border-green-200", hover: "hover:border-green-400" },
      blue: { bg: "bg-blue-50", border: "border-blue-200", hover: "hover:border-blue-400" },
      amber: { bg: "bg-amber-50", border: "border-amber-200", hover: "hover:border-amber-400" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", hover: "hover:border-purple-400" },
      indigo: { bg: "bg-indigo-50", border: "border-indigo-200", hover: "hover:border-indigo-400" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Certifications & Achievements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning through competitive programming and online courses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className={`h-full ${colors.bg} border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-lg hover:scale-105`}>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="bg-white p-4 rounded-full shadow-md">
                        {cert.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-white">
                          {cert.platform}
                        </Badge>
                        <h3 className="text-lg text-gray-900">{cert.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <div className="text-4xl text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Problems Solved</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <div className="text-4xl text-purple-600 mb-2">5+</div>
            <p className="text-gray-600">Certifications</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border-2 border-green-100 hover:border-green-300 transition-colors">
            <div className="text-4xl text-green-600 mb-2">Active</div>
            <p className="text-gray-600">Learning Journey</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}