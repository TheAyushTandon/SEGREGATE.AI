import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Code, Brain, Lightbulb, Github, Linkedin, Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Vedansh Gupta",
      role: "Full Stack Developer & AI",
      description:
        "Passionate about creating innovative solutions that combine cutting-edge AI technology with user-friendly interfaces to solve real-world environmental challenges.",
      skills: ["Machine Learning", "Computer Vision", "Python", "TensorFlow", "Mobile Development"],
      color: "blue",
    },
    {
      name: "Saatvik Sharma",
      role: "Full Stack Developer & AI",
      description:
        "Dedicated to building robust applications and intelligent systems that make technology accessible to everyone, with a focus on environmental sustainability.",
      skills: ["React Native", "Node.js", "UI/UX Design", "Database Design", "API Development"],
      color: "green",
    },
    {
      name: "Ayush Tandon",
      role: "Full Stack Developer & AI",
      description:
        "Committed to leveraging data science and AI to create meaningful impact, with expertise in developing intelligent systems for environmental and social good.",
      skills: ["Data Analysis", "Product Strategy", "Natural Language Processing", "Research", "Project Management"],
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Users className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals behind SegregateAI, working together to create a sustainable future through
            innovative technology.
          </p>
        </div>

        {/* Team Mission */}
        <section className="mb-16">
          <Card className="border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We are three passionate developers united by a common goal: to make waste segregation simple, accurate,
                and accessible to everyone. Our diverse backgrounds in AI, full-stack development, and data science
                allow us to tackle this environmental challenge from multiple angles.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`border-${member.color}-200 hover:shadow-lg transition-shadow`}>
                <CardHeader className="text-center">
                  <div className={`bg-${member.color}-100 p-4 rounded-full w-fit mx-auto mb-4`}>
                    <Code className={`h-12 w-12 text-${member.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                  <Badge className={`bg-${member.color}-100 text-${member.color}-800 w-fit mx-auto`}>
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-center">{member.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-green-50 text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">Innovation</h3>
                <p className="text-green-700">
                  We believe in pushing the boundaries of technology to create solutions that make a real difference in
                  the world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Accessibility</h3>
                <p className="text-blue-700">
                  Technology should be accessible to everyone, regardless of their background, location, or technical
                  expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50 text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Sustainability</h3>
                <p className="text-purple-700">
                  Every decision we make is guided by our commitment to environmental sustainability and social
                  responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <Mail className="h-12 w-12 text-gray-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Have questions about SegregateAI? Want to collaborate or provide feedback? We'd love to hear from you!
                Reach out to us and join our mission to create a cleaner, more sustainable world.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
