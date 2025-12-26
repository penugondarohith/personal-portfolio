import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "penugondarohith2004@gmail.com",
      link: "mailto:penugondarohith2004@gmail.com",
      color: "blue"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/penugonda-rohith-543250313",
      color: "blue"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      link: "https://github.com/penugondarohith",
      color: "gray"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hyderabad",
      link: null,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "text-blue-600",
      gray: "text-gray-800",
      purple: "text-purple-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Let's Build Something Impactful Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Open to internships, collaborative projects, and learning opportunities. 
            Let's connect and create something amazing!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  <Card className="h-full bg-white border-2 border-gray-100 hover:border-blue-300 transition-colors hover:shadow-lg">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className={`${getColorClasses(info.color)} bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        <p className="text-lg text-gray-900">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="h-full bg-white border-2 border-gray-100">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`${getColorClasses(info.color)} bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-lg text-gray-900">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl text-white mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Whether it's an internship opportunity, a project collaboration, or just a chat about technology, 
                I'd love to hear from you!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 transition-colors"
                >
                  <a href="mailto:penugondarohith2004@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 transition-colors"
                >
                  <a
                    href="https://www.linkedin.com/in/penugonda-rohith-543250313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}