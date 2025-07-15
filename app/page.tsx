import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Smartphone, Leaf, ArrowRight, Camera, FileText, Trash2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Recycle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Segregate<span className="text-green-600">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Revolutionary AI-powered waste sorting solution that helps you categorize waste into biodegradable,
            non-biodegradable, and other categories with just a photo or description.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/app">
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How SegregateAI Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Photo Recognition</h3>
              <p className="text-gray-600">
                Simply take a photo of your waste item and our AI will instantly identify and categorize it for proper
                disposal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Text Description</h3>
              <p className="text-gray-600">
                Describe your waste item in 10 words or less and get instant categorization recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Trash2 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Categorization</h3>
              <p className="text-gray-600">
                Automatically sorts waste into biodegradable, non-biodegradable, and other categories (electrical &
                medical).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Making a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="text-green-100">Waste Categories</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="text-green-100">Sorting Methods</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="text-green-100">Environmental Impact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Leaf className="h-12 w-12 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Green Revolution</h2>
          <p className="text-gray-600 mb-8">
            Start making a positive impact on the environment today. Download SegregateAI and be part of the solution.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/awareness">
              Learn About Waste Management
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
