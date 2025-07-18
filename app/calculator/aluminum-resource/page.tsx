"use client"
// Make sure the Header component exists at the specified path, or update the path if necessary.
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Factory } from "lucide-react"
import { useState } from "react"

export default function AluminumResourceCalculator() {
  const [aluminum, setAluminum] = useState(0)
  const [result, setResult] = useState<null | { bauxite: number; energy: number }>(null)

  // Assume 1 ton aluminum = 4 tons bauxite, 15 MWh energy (example values)
  const handleCalculate = () => {
    const bauxite = aluminum * 4
    const energy = aluminum * 15
    setResult({ bauxite, energy })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <Factory className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Калкулатор за алуминиеви ресурси</h1>
          <p className="text-lg text-gray-600">Разгледайте ресурсите, необходими за производството на алуминий и ефективността.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Количество алуминий (тона/седмица)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:border-purple-500"
              value={aluminum}
              min={0}
              onChange={e => setAluminum(Number(e.target.value))}
              placeholder="напр. 5"
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-full hover:from-purple-600 hover:to-blue-600 transition"
            onClick={handleCalculate}
          >
            Изчисли ресурсите
          </button>
        </div>
        {result && (
          <div className="bg-purple-100 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">Вашите резултати</h2>
            <p className="text-lg text-gray-700 mb-2">Необходим боксит: <span className="font-bold text-purple-800">{result.bauxite.toLocaleString()} тона/седмица</span></p>
            <p className="text-lg text-gray-700">Необходима енергия: <span className="font-bold text-purple-800">{result.energy.toLocaleString()} MWh/седмица</span></p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
