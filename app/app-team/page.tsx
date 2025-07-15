import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Download,
  Star,
  Shield,
  Zap,
  Camera,
  FileText,
  Recycle,
  Users,
  Code,
  Brain,
  Lightbulb,
  Github,
  Linkedin,
  Mail,
} from "lucide-react"

// App Page Component
function AppSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Smartphone className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Download SegregateAI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the power of AI-driven waste segregation right in your pocket. Available for Android devices with more
            platforms coming soon.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 rounded-3xl p-8 text-center overflow-hidden">
                <img
                  src="/images/app-preview.png"
                  alt="SegregateAI App Interface showing capture waste image feature"
                  className="h-96 mx-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Now Available</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">SegregateAI Mobile App</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Experience the future of waste management with our intuitive mobile application. Simply point, click, or
                describe - and let AI do the rest.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Real-time camera recognition</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Text-based waste description</span>
                </div>
                <div className="flex items-center">
                  <Recycle className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">3-category smart sorting</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Instant results</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">100% offline functionality</span>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://we.tl/t-iaTU5SnbdL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 h-5 w-5" />
                    Download APK (v1.0)
                  </Button>
                </a>
                <p className="text-sm text-gray-500 text-center">
                  Click to download from WeTransfer • Android APK file
                </p>
                <div className="text-xs text-gray-400 text-center">
                  <p>⚠️ Enable "Install from unknown sources" in your Android settings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">App Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Camera className="mr-3 h-6 w-6" />
                  Photo Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced computer vision technology that can identify waste items from photos with high accuracy, even
                  in challenging lighting conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <FileText className="mr-3 h-6 w-6" />
                  Text Input
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Describe your waste item in simple words (10 words or less) and get instant categorization through
                  natural language processing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-700 flex items-center">
                  <Zap className="mr-3 h-6 w-6" />
                  Instant Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get immediate categorization results with detailed explanations about proper disposal methods and
                  environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <Shield className="mr-3 h-6 w-6" />
                  100% Offline Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Works completely offline without any internet connection required. Perfect for rural areas, remote
                  locations, and areas with limited connectivity.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• No data usage</li>
                  <li>• Works anywhere, anytime</li>
                  <li>• Privacy-focused - data stays on device</li>
                  <li>• Fast processing without network delays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <Star className="mr-3 h-6 w-6" />
                  User Friendly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simple, intuitive interface designed for users of all ages and technical backgrounds, with
                  multilingual support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Recycle className="mr-3 h-6 w-6" />
                  Educational Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn about waste management best practices, environmental impact, and how to make a positive
                  difference in your community.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">Minimum Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Android 4.0 (API level 14) or higher</li>
                  <li>• 512MB RAM</li>
                  <li>• 50MB free storage space</li>
                  <li>• Camera access (for photo recognition)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">More Platforms Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're working hard to bring SegregateAI to iOS and web platforms. Stay tuned for updates and be the
                first to know when they're available.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-gray-600">
                  iOS App - In Development
                </Badge>
                <Badge variant="outline" className="text-gray-600">
                  Web App - Coming Soon
                </Badge>
                <Badge variant="outline" className="text-gray-600">
                  Desktop App - Planned
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

// Team Page Component
function TeamSection() {
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

export default function AppTeamPage() {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : ""

  if (currentPath === "/team") {
    return <TeamSection />
  }

  return <AppSection />
}
