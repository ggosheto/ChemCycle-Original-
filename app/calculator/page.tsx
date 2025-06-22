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
    <div className="relative bg-gradient-to-br from-green-100 via-green-50 to-blue-100 rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-green-200 hover:border-green-400 transition-all duration-300 group overflow-hidden">
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200/40 rounded-full blur-xl animate-bounce" />
      <Recycle className="w-16 h-16 text-green-500 mb-4 drop-shadow-lg animate-spin-slow group-hover:scale-110 transition-transform duration-300" />
      <h2 className="text-3xl font-extrabold mb-2 text-green-800 tracking-tight drop-shadow">Recycling Impact</h2>
      <p className="text-green-700 mb-6 text-center font-medium">See how your recycling habits help the planet and reduce waste.</p>
      <div className="flex w-full gap-2 mb-4">
        <input
          type="number"
          className="flex-1 border-2 border-green-300 rounded-lg px-4 py-2 focus:border-green-500 bg-white/80 text-lg font-semibold shadow-inner"
          value={waste}
          min={0}
          onChange={e => setWaste(Number(e.target.value))}
          placeholder="Total Waste (kg/week)"
        />
        <input
          type="number"
          className="flex-1 border-2 border-blue-300 rounded-lg px-4 py-2 focus:border-blue-500 bg-white/80 text-lg font-semibold shadow-inner"
          value={recycled}
          min={0}
          onChange={e => setRecycled(Number(e.target.value))}
          placeholder="Recycled (kg/week)"
        />
      </div>
      <button
        className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 text-lg tracking-wide mb-4 group-hover:scale-105"
        onClick={handleCalculate}
      >
        ♻️ Calculate Impact
      </button>
      <ul className="flex gap-2 mb-4">
        <li className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Eco-Friendly</li>
        <li className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">CO₂ Savings</li>
        <li className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Circular Economy</li>
      </ul>
      {result && (
        <div className="bg-gradient-to-br from-green-200 via-green-100 to-blue-100 rounded-2xl shadow-xl p-6 w-full text-center animate-fade-in mt-2 border-2 border-green-300">
          <h3 className="text-xl font-bold text-green-800 mb-2">Your Results</h3>
          <p className="text-lg text-gray-700 mb-1">Recycling Rate: <span className="font-bold text-green-900">{result.rate.toFixed(1)}%</span></p>
          <p className="text-lg text-gray-700">CO₂ Saved: <span className="font-bold text-green-900">{result.co2Saved.toFixed(2)} kg/week</span></p>
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
    <div className="relative bg-gradient-to-br from-blue-100 via-green-50 to-emerald-100 rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-blue-200 hover:border-blue-400 transition-all duration-300 group overflow-hidden">
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-200/40 rounded-full blur-xl animate-bounce" />
      <Droplets className="w-16 h-16 text-blue-500 mb-4 drop-shadow-lg animate-bounce group-hover:scale-110 transition-transform duration-300" />
      <h2 className="text-3xl font-extrabold mb-2 text-blue-800 tracking-tight drop-shadow">Bauxite Water Consumption</h2>
      <p className="text-blue-700 mb-6 text-center font-medium">Calculate water usage in bauxite mining and its environmental effects.</p>
      <input
        type="number"
        className="w-full border-2 border-blue-300 rounded-lg px-4 py-2 mb-4 focus:border-blue-500 bg-white/80 text-lg font-semibold shadow-inner"
        value={bauxite}
        min={0}
        onChange={e => setBauxite(Number(e.target.value))}
        placeholder="Bauxite (tons/week)"
      />
      <button
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 text-lg tracking-wide mb-4 group-hover:scale-105"
        onClick={handleCalculate}
      >
        💧 Calculate Water Use
      </button>
      <ul className="flex gap-2 mb-4">
        <li className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Water Impact</li>
        <li className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Mining</li>
        <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Conservation</li>
      </ul>
      {result && (
        <div className="bg-gradient-to-br from-blue-200 via-green-100 to-emerald-100 rounded-2xl shadow-xl p-6 w-full text-center animate-fade-in mt-2 border-2 border-blue-300">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Your Results</h3>
          <p className="text-lg text-gray-700">Estimated Water Used: <span className="font-bold text-blue-900">{result.waterUsed.toLocaleString()} m³/week</span></p>
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
    <div className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 group overflow-hidden">
      <div className="absolute -top-8 right-0 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200/40 rounded-full blur-xl animate-bounce" />
      <Factory className="w-16 h-16 text-purple-500 mb-4 drop-shadow-lg animate-pulse group-hover:scale-110 transition-transform duration-300" />
      <h2 className="text-3xl font-extrabold mb-2 text-purple-800 tracking-tight drop-shadow">Aluminum Production Resource</h2>
      <p className="text-purple-700 mb-6 text-center font-medium">Estimate bauxite and energy needed for aluminum production.</p>
      <input
        type="number"
        className="w-full border-2 border-purple-300 rounded-lg px-4 py-2 mb-4 focus:border-purple-500 bg-white/80 text-lg font-semibold shadow-inner"
        value={aluminum}
        min={0}
        onChange={e => setAluminum(Number(e.target.value))}
        placeholder="Aluminum (tons/week)"
      />
      <button
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-lg tracking-wide mb-4 group-hover:scale-105"
        onClick={handleCalculate}
      >
        🏭 Calculate Resources
      </button>
      <ul className="flex gap-2 mb-4">
        <li className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Production</li>
        <li className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Bauxite</li>
        <li className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold animate-fade-in">Energy</li>
      </ul>
      {result && (
        <div className="bg-gradient-to-br from-purple-200 via-blue-100 to-green-100 rounded-2xl shadow-xl p-6 w-full text-center animate-fade-in mt-2 border-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-800 mb-2">Your Results</h3>
          <p className="text-lg text-gray-700 mb-1">Bauxite Needed: <span className="font-bold text-purple-900">{result.bauxite.toLocaleString()} tons/week</span></p>
          <p className="text-lg text-gray-700">Energy Required: <span className="font-bold text-purple-900">{result.energy.toLocaleString()} MWh/week</span></p>
        </div>
      )}
    </div>
  )
}
