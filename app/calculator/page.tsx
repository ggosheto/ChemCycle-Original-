import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calculator, Droplets, Recycle, Factory } from "lucide-react"
import Link from "next/link"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 pt-16 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Calculator Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a calculator below to explore your environmental impact and resource use in a fun, interactive way!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Recycling Impact Calculator */}
          <Link href="/calculator/recycling" className="group">
            <div className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-green-400">
              <Recycle className="w-12 h-12 text-green-500 mb-4 group-hover:animate-spin" />
              <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-green-600">Recycling Impact</h2>
              <p className="text-gray-600 mb-4">See how your recycling habits help the planet and reduce waste.</p>
              <span className="mt-auto inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold group-hover:bg-green-500 group-hover:text-white transition">Try Now</span>
            </div>
          </Link>
          {/* Bauxite Water Consumption Calculator */}
          <Link href="/calculator/bauxite-water" className="group">
            <div className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-400">
              <Droplets className="w-12 h-12 text-blue-500 mb-4 group-hover:animate-bounce" />
              <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600">Bauxite Water Consumption</h2>
              <p className="text-gray-600 mb-4">Calculate water usage in bauxite mining and its environmental effects.</p>
              <span className="mt-auto inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold group-hover:bg-blue-500 group-hover:text-white transition">Try Now</span>
            </div>
          </Link>
          {/* Aluminum Production Resource Calculator */}
          <Link href="/calculator/aluminum-resource" className="group">
            <div className="bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-purple-400">
              <Factory className="w-12 h-12 text-purple-500 mb-4 group-hover:animate-pulse" />
              <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-purple-600">Aluminum Production Resource</h2>
              <p className="text-gray-600 mb-4">Explore the resources needed for aluminum production and efficiency.</p>
              <span className="mt-auto inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold group-hover:bg-purple-500 group-hover:text-white transition">Try Now</span>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
