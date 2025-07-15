import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Smartphone, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
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

        {/* Mission Section */}
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

        {/* How It Works */}
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

        {/* Categories */}
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

        {/* Technology */}
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
