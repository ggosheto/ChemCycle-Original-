"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Droplets } from "lucide-react"
import { useState } from "react"

export default function BauxiteWaterCalculator() {
  const [bauxite, setBauxite] = useState(0)
  const [result, setResult] = useState<null | { waterUsed: number }>(null)

  const handleCalculate = () => {
    const waterUsed = bauxite * 3
    setResult({ waterUsed })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mb-6 shadow-lg">
            <Droplets className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Bauxite Water Consumption Calculator</h1>
          <p className="text-lg text-gray-600">Calculate water usage in bauxite mining and its environmental effects.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Bauxite Mined (tons/week)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              value={bauxite}
              min={0}
              onChange={e => setBauxite(Number(e.target.value))}
              placeholder="e.g., 10"
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 rounded-full hover:from-blue-600 hover:to-green-600 transition"
            onClick={handleCalculate}
          >
            Calculate Water Use
          </button>
        </div>
        {result && (
          <div className="bg-blue-100 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Your Results</h2>
            <p className="text-lg text-gray-700">Estimated Water Used: <span className="font-bold text-blue-800">{result.waterUsed.toLocaleString()} m³/week</span></p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
