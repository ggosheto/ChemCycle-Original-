"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calculator, Recycle, Droplets, Factory } from "lucide-react"
import { useState } from "react"

export default function CalculatorHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Calculator Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore interactive tools to understand your environmental impact and resource use!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <RecyclingCalculatorCard />
          <BauxiteWaterCalculatorCard />
          <AluminumResourceCalculatorCard />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function RecyclingCalculatorCard() {
  const [waste, setWaste] = useState(0)
  const [recycled, setRecycled] = useState(0)
  const [result, setResult] = useState<null | { rate: number; co2Saved: number }>(null)

  const handleCalculate = () => {
    const rate = waste > 0 ? (recycled / waste) * 100 : 0
    const co2Saved = recycled * 1.5
    setResult({ rate, co2Saved })
  }

  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-400">
      <Recycle className="w-12 h-12 text-green-500 mb-4 animate-spin-slow" />
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Recycling Impact</h2>
      <p className="text-gray-600 mb-4 text-center">See how your recycling habits help the planet and reduce waste.</p>
      <input
        type="number"
        className="w-full border border-gray-300 rounded px-4 py-2 mb-2 focus:border-green-500"
        value={waste}
        min={0}
        onChange={e => setWaste(Number(e.target.value))}
        placeholder="Total Waste (kg/week)"
      />
      <input
        type="number"
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:border-green-500"
        value={recycled}
        min={0}
        onChange={e => setRecycled(Number(e.target.value))}
        placeholder="Recycled (kg/week)"
      />
      <button
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-2 rounded-full hover:from-green-600 hover:to-blue-600 transition mb-4"
        onClick={handleCalculate}
      >
        Calculate Impact
      </button>
      {result && (
        <div className="bg-green-100 rounded-xl shadow p-4 w-full text-center animate-fade-in">
          <p className="text-lg text-gray-700 mb-1">Recycling Rate: <span className="font-bold text-green-800">{result.rate.toFixed(1)}%</span></p>
          <p className="text-lg text-gray-700">CO₂ Saved: <span className="font-bold text-green-800">{result.co2Saved.toFixed(2)} kg/week</span></p>
        </div>
      )}
    </div>
  )
}

function BauxiteWaterCalculatorCard() {
  const [bauxite, setBauxite] = useState(0)
  const [result, setResult] = useState<null | { waterUsed: number }>(null)

  const handleCalculate = () => {
    const waterUsed = bauxite * 3
    setResult({ waterUsed })
  }

  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-400">
      <Droplets className="w-12 h-12 text-blue-500 mb-4 animate-bounce" />
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Bauxite Water Consumption</h2>
      <p className="text-gray-600 mb-4 text-center">Calculate water usage in bauxite mining and its environmental effects.</p>
      <input
        type="number"
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:border-blue-500"
        value={bauxite}
        min={0}
        onChange={e => setBauxite(Number(e.target.value))}
        placeholder="Bauxite (tons/week)"
      />
      <button
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 rounded-full hover:from-blue-600 hover:to-green-600 transition mb-4"
        onClick={handleCalculate}
      >
        Calculate Water Use
      </button>
      {result && (
        <div className="bg-blue-100 rounded-xl shadow p-4 w-full text-center animate-fade-in">
          <p className="text-lg text-gray-700">Estimated Water Used: <span className="font-bold text-blue-800">{result.waterUsed.toLocaleString()} m³/week</span></p>
        </div>
      )}
    </div>
  )
}

function AluminumResourceCalculatorCard() {
  const [aluminum, setAluminum] = useState(0)
  const [result, setResult] = useState<null | { bauxite: number; energy: number }>(null)

  const handleCalculate = () => {
    const bauxite = aluminum * 4
    const energy = aluminum * 15
    setResult({ bauxite, energy })
  }

  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-400">
      <Factory className="w-12 h-12 text-purple-500 mb-4 animate-pulse" />
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Aluminum Production Resource</h2>
      <p className="text-gray-600 mb-4 text-center">Estimate bauxite and energy needed for aluminum production.</p>
      <input
        type="number"
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:border-purple-500"
        value={aluminum}
        min={0}
        onChange={e => setAluminum(Number(e.target.value))}
        placeholder="Aluminum (tons/week)"
      />
      <button
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition mb-4"
        onClick={handleCalculate}
      >
        Calculate Resources
      </button>
      {result && (
        <div className="bg-purple-100 rounded-xl shadow p-4 w-full text-center animate-fade-in">
          <p className="text-lg text-gray-700 mb-1">Bauxite Needed: <span className="font-bold text-purple-800">{result.bauxite.toLocaleString()} tons/week</span></p>
          <p className="text-lg text-gray-700">Energy Required: <span className="font-bold text-purple-800">{result.energy.toLocaleString()} MWh/week</span></p>
        </div>
      )}
    </div>
  )
}
