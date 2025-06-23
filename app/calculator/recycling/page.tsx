"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Recycle } from "lucide-react"
import { useState } from "react"

export default function RecyclingImpactCalculator() {
  const [waste, setWaste] = useState(0)
  const [recycled, setRecycled] = useState(0)
  const [result, setResult] = useState<null | { rate: number; co2Saved: number }>(null)

  const handleCalculate = () => {
    const rate = waste > 0 ? (recycled / waste) * 100 : 0
    const co2Saved = recycled * 1.5
    setResult({ rate, co2Saved })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <Recycle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Калкулатор за рециклиране</h1>
          <p className="text-lg text-gray-600">Вижте как вашите навици за рециклиране помагат на планетата и намаляват отпадъците.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 mb-8 flex flex-col items-center">
          <div className="flex flex-col w-full items-center mb-6">
            <div className="flex flex-col gap-4 w-full max-w-md justify-center">
              <div className="flex flex-col items-center w-full">
                <label className="block text-gray-700 font-medium mb-2 text-center">Общо генерирани отпадъци (кг/седмица)</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:border-green-500 text-center"
                  value={waste}
                  min={0}
                  onChange={e => setWaste(Number(e.target.value))}
                  placeholder="напр. 14"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <label className="block text-gray-700 font-medium mb-2 text-center">Рециклирани материали (кг/седмица)</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:border-green-500 text-center"
                  value={recycled}
                  min={0}
                  onChange={e => setRecycled(Number(e.target.value))}
                  placeholder="напр. 7"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button
              className="w-full max-w-xs bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 rounded-full hover:from-green-600 hover:to-blue-600 transition"
              onClick={handleCalculate}
            >
              Изчисли въздействието
            </button>
          </div>
        </div>
        {result && (
          <div className="bg-green-100 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Вашите резултати</h2>
            <p className="text-lg text-gray-700 mb-2">Процент на рециклиране: <span className="font-bold text-green-800">{result.rate.toFixed(1)}%</span></p>
            <p className="text-lg text-gray-700">Спестен CO₂: <span className="font-bold text-green-800">{result.co2Saved.toFixed(2)} кг/седмица</span></p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
