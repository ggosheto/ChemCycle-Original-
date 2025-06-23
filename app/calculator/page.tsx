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
    <div className="relative rounded-3xl p-8 flex flex-col items-center border border-green-100/40 shadow-2xl group overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 transition-all duration-300 hover:scale-[1.025]">
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 60% 0%, rgba(34,197,94,0.12) 0%, rgba(59,130,246,0.10) 100%)'}} />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/80 to-blue-400/80 shadow-lg mb-4">
          <Recycle className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
        <h2 className="text-2xl font-extrabold mb-1 text-green-900 tracking-tight drop-shadow-sm">Recycling Impact</h2>
        <p className="text-green-800/80 mb-6 text-center font-medium text-base">See how your recycling habits help the planet and reduce waste.</p>
        <div className="flex w-full gap-2 mb-4">
          <input
            type="number"
            className="flex-1 border-none rounded-xl px-4 py-2 bg-white/80 dark:bg-slate-800/80 text-lg font-semibold shadow-inner focus:ring-2 focus:ring-green-400/60 outline-none transition"
            value={waste}
            min={0}
            onChange={e => setWaste(Number(e.target.value))}
            placeholder="Total Waste (kg/week)"
          />
          <input
            type="number"
            className="flex-1 border-none rounded-xl px-4 py-2 bg-white/80 dark:bg-slate-800/80 text-lg font-semibold shadow-inner focus:ring-2 focus:ring-blue-400/60 outline-none transition"
            value={recycled}
            min={0}
            onChange={e => setRecycled(Number(e.target.value))}
            placeholder="Recycled (kg/week)"
          />
        </div>
        <button
          className="w-full bg-gradient-to-r from-green-500/90 to-blue-500/90 text-white font-bold py-3 rounded-xl shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 text-lg tracking-wide mb-4 group-hover:scale-105"
          onClick={handleCalculate}
        >
          ♻️ Calculate Impact
        </button>
        <ul className="flex gap-2 mb-4">
          <li className="bg-green-100/70 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Eco-Friendly</li>
          <li className="bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">CO₂ Savings</li>
          <li className="bg-green-50/70 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Circular Economy</li>
        </ul>
        {result && (
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-6 w-full text-center mt-2 border border-green-200/40 backdrop-blur-md">
            <h3 className="text-xl font-bold text-green-900 mb-2">Your Results</h3>
            <p className="text-lg text-gray-800 mb-1">Recycling Rate: <span className="font-bold text-green-900">{result.rate.toFixed(1)}%</span></p>
            <p className="text-lg text-gray-800">CO₂ Saved: <span className="font-bold text-green-900">{result.co2Saved.toFixed(2)} kg/week</span></p>
          </div>
        )}
      </div>
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
    <div className="relative rounded-3xl p-8 flex flex-col items-center border border-blue-100/40 shadow-2xl group overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 transition-all duration-300 hover:scale-[1.025]">
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 60% 0%, rgba(59,130,246,0.12) 0%, rgba(34,197,94,0.10) 100%)'}} />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/80 to-green-400/80 shadow-lg mb-4">
          <Droplets className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
        <h2 className="text-2xl font-extrabold mb-1 text-blue-900 tracking-tight drop-shadow-sm">Bauxite Water Consumption</h2>
        <p className="text-blue-800/80 mb-6 text-center font-medium text-base">Calculate water usage in bauxite mining and its environmental effects.</p>
        <input
          type="number"
          className="w-full border-none rounded-xl px-4 py-2 mb-4 bg-white/80 dark:bg-slate-800/80 text-lg font-semibold shadow-inner focus:ring-2 focus:ring-blue-400/60 outline-none transition"
          value={bauxite}
          min={0}
          onChange={e => setBauxite(Number(e.target.value))}
          placeholder="Bauxite (tons/week)"
        />
        <button
          className="w-full bg-gradient-to-r from-blue-500/90 to-green-500/90 text-white font-bold py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 text-lg tracking-wide mb-4 group-hover:scale-105"
          onClick={handleCalculate}
        >
          💧 Calculate Water Use
        </button>
        <ul className="flex gap-2 mb-4">
          <li className="bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Water Impact</li>
          <li className="bg-green-100/70 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Mining</li>
          <li className="bg-blue-50/70 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Conservation</li>
        </ul>
        {result && (
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-6 w-full text-center mt-2 border border-blue-200/40 backdrop-blur-md">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Your Results</h3>
            <p className="text-lg text-gray-800">Estimated Water Used: <span className="font-bold text-blue-900">{result.waterUsed.toLocaleString()} m³/week</span></p>
          </div>
        )}
      </div>
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
    <div className="relative rounded-3xl p-8 flex flex-col items-center border border-purple-100/40 shadow-2xl group overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 transition-all duration-300 hover:scale-[1.025]">
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 60% 0%, rgba(168,85,247,0.12) 0%, rgba(59,130,246,0.10) 100%)'}} />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/80 to-blue-400/80 shadow-lg mb-4">
          <Factory className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
        <h2 className="text-2xl font-extrabold mb-1 text-purple-900 tracking-tight drop-shadow-sm">Aluminum Production Resource</h2>
        <p className="text-purple-800/80 mb-6 text-center font-medium text-base">Estimate bauxite and energy needed for aluminum production.</p>
        <input
          type="number"
          className="w-full border-none rounded-xl px-4 py-2 mb-4 bg-white/80 dark:bg-slate-800/80 text-lg font-semibold shadow-inner focus:ring-2 focus:ring-purple-400/60 outline-none transition"
          value={aluminum}
          min={0}
          onChange={e => setAluminum(Number(e.target.value))}
          placeholder="Aluminum (tons/week)"
        />
        <button
          className="w-full bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white font-bold py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-lg tracking-wide mb-4 group-hover:scale-105"
          onClick={handleCalculate}
        >
          🏭 Calculate Resources
        </button>
        <ul className="flex gap-2 mb-4">
          <li className="bg-purple-100/70 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">Production</li>
          <li className="bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Bauxite</li>
          <li className="bg-purple-50/70 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">Energy</li>
        </ul>
        {result && (
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg p-6 w-full text-center mt-2 border border-purple-200/40 backdrop-blur-md">
            <h3 className="text-xl font-bold text-purple-900 mb-2">Your Results</h3>
            <p className="text-lg text-gray-800 mb-1">Bauxite Needed: <span className="font-bold text-purple-900">{result.bauxite.toLocaleString()} tons/week</span></p>
            <p className="text-lg text-gray-800">Energy Required: <span className="font-bold text-purple-900">{result.energy.toLocaleString()} MWh/week</span></p>
          </div>
        )}
      </div>
    </div>
  )
}
