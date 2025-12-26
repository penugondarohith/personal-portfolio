import { motion } from "motion/react";
import { Heart, Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Volunteer() {
  const activities = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Community Service",
      description: "Participated in multiple community outreach programs"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Leadership & Teamwork",
      description: "Led teams in organizing social impact initiatives"
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Social Impact Projects",
      description: "Contributed to meaningful projects benefiting society"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Active Volunteer",
      description: "Ongoing commitment to service and development"
    }
  ];

  return (
    <section id="volunteer" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Volunteer Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Giving back to the community through service and leadership
          </p>
        </motion.div>

        {/* NSS Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-2 border-red-100 hover:border-red-300 transition-colors hover:shadow-xl">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2" />
            <CardContent className="p-8">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-full">
                  <Heart className="w-12 h-12 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-3 text-gray-900">
                    National Service Scheme (NSS)
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Active member of NSS, participating in community development programs, 
                    environmental initiatives, and social awareness campaigns. Developed strong 
                    leadership skills while contributing to meaningful social impact projects.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                      <p className="text-sm text-red-700">Community Development</p>
                    </div>
                    <div className="bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
                      <p className="text-sm text-orange-700">Social Awareness</p>
                    </div>
                    <div className="bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700">Environmental Initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="bg-white p-4 rounded-full inline-flex shadow-sm">
                    {activity.icon}
                  </div>
                  <h3 className="text-base text-gray-900">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
