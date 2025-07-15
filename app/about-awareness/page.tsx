import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Smartphone, Globe, AlertTriangle, Leaf, Users, TrendingUp, Heart, Home } from "lucide-react"

// About Page Component
function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Brain className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About SegregateAI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing waste management through artificial intelligence and making proper waste segregation
            accessible to everyone.
          </p>
        </div>

        <section className="mb-16">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-green-700">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a sustainable future by making waste segregation simple, accurate, and accessible through
                cutting-edge AI technology. We believe that proper waste management starts with correct categorization,
                and our app makes this process effortless for everyone.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How SegregateAI Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Smartphone className="mr-3 h-6 w-6" />
                  Photo Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our advanced computer vision AI can identify waste items from photos taken with your phone's camera or
                  uploaded from your gallery.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Real-time camera analysis</li>
                  <li>Upload existing photos</li>
                  <li>High accuracy recognition</li>
                  <li>Works in various lighting conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Brain className="mr-3 h-6 w-6" />
                  Text Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Simply describe your waste item in 10 words or less, and our natural language processing AI will
                  categorize it accurately.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Quick text input</li>
                  <li>Natural language understanding</li>
                  <li>Instant categorization</li>
                  <li>Multiple language support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Waste Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700 text-center">Biodegradable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">Organic waste that naturally decomposes</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Food scraps</li>
                  <li>Garden waste</li>
                  <li>Paper products</li>
                  <li>Natural fibers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700 text-center">Non-Biodegradable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">Materials that don't decompose naturally</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Plastic items</li>
                  <li>Glass containers</li>
                  <li>Metal cans</li>
                  <li>Synthetic materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-700 text-center">Other Waste</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">Special handling required</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Electronic devices</li>
                  <li>Batteries</li>
                  <li>Medical waste</li>
                  <li>Hazardous materials</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center">
                <Globe className="mr-3 h-8 w-8" />
                Technology Behind SegregateAI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Computer Vision</h3>
                  <p className="text-gray-600">
                    Advanced machine learning models trained on thousands of waste images to accurately identify and
                    categorize different types of waste materials.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Natural Language Processing</h3>
                  <p className="text-gray-600">
                    Sophisticated text analysis algorithms that understand waste descriptions and provide accurate
                    categorization based on material properties.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

// Awareness Page Component
function AwarenessSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Waste Management Crisis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the urgent need for proper waste segregation, especially in rural communities where awareness
            and resources are limited.
          </p>
        </div>

        <Alert className="mb-12 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Did you know?</strong> India generates over 62 million tonnes of waste annually, with only 60% being
            collected and even less being properly segregated. Rural areas are particularly affected with limited waste
            management infrastructure.
          </AlertDescription>
        </Alert>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Numbers Don't Lie</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-red-200 bg-red-50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">62M</div>
                <p className="text-red-800">Tonnes of waste generated annually in India</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                <p className="text-orange-800">Waste remains uncollected</p>
              </CardContent>
            </Card>
            <Card className="border-yellow-200 bg-yellow-50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">15%</div>
                <p className="text-yellow-800">Waste is properly segregated</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <p className="text-green-800">Reduction possible with proper segregation</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-700 flex items-center justify-center">
                <Home className="mr-3 h-8 w-8" />
                Rural Areas: The Forgotten Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Challenges</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Limited waste collection infrastructure
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Lack of awareness about proper segregation
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Open dumping and burning of waste
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Contamination of soil and water sources
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Health hazards for local communities
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">How SegregateAI Helps</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Easy-to-use mobile app requiring no technical expertise
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Works offline for areas with limited internet
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Visual recognition eliminates language barriers
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Educational content about waste management
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Promotes community-level awareness
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Areas of Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <Leaf className="mr-3 h-6 w-6" />
                  Environmental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduced landfill waste</li>
                  <li>• Lower greenhouse gas emissions</li>
                  <li>• Improved soil and water quality</li>
                  <li>• Enhanced recycling rates</li>
                  <li>• Biodiversity protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Heart className="mr-3 h-6 w-6" />
                  Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduced air pollution</li>
                  <li>• Cleaner water sources</li>
                  <li>• Lower disease transmission</li>
                  <li>• Improved sanitation</li>
                  <li>• Better quality of life</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-700 flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Economic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Job creation in waste management</li>
                  <li>• Resource recovery and reuse</li>
                  <li>• Reduced cleanup costs</li>
                  <li>• Tourism and property value benefits</li>
                  <li>• Sustainable development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Be Part of the Solution</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every small action counts. Start with proper waste segregation in your home, spread awareness in your
                community, and help us build a cleaner, healthier future for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/app">Download SegregateAI</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/team">Meet Our Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default function AboutAwarenessPage() {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : ""

  if (currentPath === "/awareness") {
    return <AwarenessSection />
  }

  return <AboutSection />
}
