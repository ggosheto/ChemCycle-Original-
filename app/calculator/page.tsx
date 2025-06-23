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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Калкулаторен Център</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Използвайте интерактивни инструменти, за да разберете вашето въздействие върху околната среда и използването на ресурси!
          </p>
        </div>
        <div className="flex flex-col gap-10 max-w-2xl mx-auto items-center">
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
    <section className="w-full flex flex-col items-center px-4 py-8 bg-white/40 dark:bg-slate-900/40 rounded-xl border border-green-100/20 mb-2">
      <Recycle className="w-12 h-12 text-green-600 mb-2" />
      <h2 className="text-xl font-bold mb-1 text-green-900">Въздействие от рециклиране</h2>
      <p className="text-green-800/90 mb-4 text-center font-medium text-base">Вижте как вашите навици за рециклиране помагат на планетата и намаляват отпадъците.</p>
      <div className="flex w-full max-w-xs gap-2 mb-3">
        <input
          type="number"
          className="flex-1 border border-green-200 rounded-lg px-3 py-2 bg-white dark:bg-slate-800 text-base font-semibold focus:ring-2 focus:ring-green-300 outline-none transition text-center"
          value={waste}
          min={0}
          onChange={e => setWaste(Number(e.target.value))}
          placeholder="Общо отпадъци (кг/седмица)"
        />
        <input
          type="number"
          className="flex-1 border border-blue-200 rounded-lg px-3 py-2 bg-white dark:bg-slate-800 text-base font-semibold focus:ring-2 focus:ring-blue-300 outline-none transition text-center"
          value={recycled}
          min={0}
          onChange={e => setRecycled(Number(e.target.value))}
          placeholder="Рециклирани (кг/седмица)"
        />
      </div>
      <button
        className="w-full max-w-xs bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition mb-3"
        onClick={handleCalculate}
      >
        ♻️ Изчисли въздействието
      </button>
      <ul className="flex gap-2 mb-3 justify-center w-full max-w-xs">
        <li className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Еко</li>
        <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">CO₂ Спестявания</li>
        <li className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Кръгова икономика</li>
      </ul>
      {result && (
        <div className="bg-white/90 dark:bg-slate-800/90 rounded-lg p-4 w-full max-w-xs text-center border border-green-100/30 mt-2">
          <h3 className="text-lg font-bold text-green-900 mb-1">Вашите резултати</h3>
          <p className="text-base text-gray-800 mb-1">Процент на рециклиране: <span className="font-bold text-green-900">{result.rate.toFixed(1)}%</span></p>
          <p className="text-base text-gray-800">Спестени CO₂: <span className="font-bold text-green-900">{result.co2Saved.toFixed(2)} кг/седмица</span></p>
        </div>
      )}
    </section>
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
    <section className="w-full flex flex-col items-center px-4 py-8 bg-white/40 dark:bg-slate-900/40 rounded-xl border border-blue-100/20 mb-2">
      <Droplets className="w-12 h-12 text-blue-600 mb-2" />
      <h2 className="text-xl font-bold mb-1 text-blue-900">Консумация на вода при боксит</h2>
      <p className="text-blue-800/90 mb-4 text-center font-medium text-base">Изчислете използването на вода при добив на боксит и неговите екологични ефекти.</p>
      <div className="flex w-full max-w-xs gap-2 mb-3">
        <input
          type="number"
          className="flex-1 border border-blue-200 rounded-lg px-3 py-2 bg-white dark:bg-slate-800 text-base font-semibold focus:ring-2 focus:ring-blue-300 outline-none transition"
          value={bauxite}
          min={0}
          onChange={e => setBauxite(Number(e.target.value))}
          placeholder="Боксит (тона/седмица)"
        />
      </div>
      <button
        className="w-full max-w-xs bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition mb-3"
        onClick={handleCalculate}
      >
        💧 Изчисли използваната вода
      </button>
      <ul className="flex gap-2 mb-3">
        <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Въздействие върху водата</li>
        <li className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Добив</li>
        <li className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Опазване</li>
      </ul>
      {result && (
        <div className="bg-white/90 dark:bg-slate-800/90 rounded-lg p-4 w-full max-w-xs text-center border border-blue-100/30 mt-2">
          <h3 className="text-lg font-bold text-blue-900 mb-1">Вашите резултати</h3>
          <p className="text-base text-gray-800">Използвана вода: <span className="font-bold text-blue-900">{result.waterUsed.toLocaleString()} м³/седмица</span></p>
        </div>
      )}
    </section>
  )
}

function AluminumResourceCalculatorCard() {
  const [aluminum, setAluminum] = useState(0)
  const [result, setResult] = useState<null | { bauxite: number; energy: number; water: number; aluminum: number }>(null)

  const handleCalculate = () => {
    const bauxite = aluminum * 4
    const energy = aluminum * 15
    const water = bauxite * 3 // 3 m³ per ton of bauxite
    setResult({ bauxite, energy, water, aluminum })
  }

  return (
    <section className="w-full flex flex-col items-center px-4 py-8 bg-white/40 dark:bg-slate-900/40 rounded-xl border border-purple-100/20 mb-2">
      <Factory className="w-12 h-12 text-purple-600 mb-2" />
      <h2 className="text-xl font-bold mb-1 text-purple-900">Ресурси за производство на алуминий</h2>
      <p className="text-purple-800/90 mb-4 text-center font-medium text-base">Изчислете необходимите боксит и енергия за производство на алуминий.</p>
      <div className="flex w-full max-w-xs gap-2 mb-3">
        <input
          type="number"
          className="flex-1 border border-purple-200 rounded-lg px-3 py-2 bg-white dark:bg-slate-800 text-base font-semibold focus:ring-2 focus:ring-purple-300 outline-none transition"
          value={aluminum}
          min={0}
          onChange={e => setAluminum(Number(e.target.value))}
          placeholder="Алуминий (тона/седмица)"
        />
      </div>
      <button
        className="w-full max-w-xs bg-purple-500 text-white font-bold py-2 rounded-lg hover:bg-purple-600 transition mb-3"
        onClick={handleCalculate}
      >
        🏭 Изчисли ресурсите
      </button>
      <ul className="flex gap-2 mb-3">
        <li className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">Производство</li>
        <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Боксит</li>
        <li className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">Енергия</li>
      </ul>
      {result && (
        <div className="bg-white/90 dark:bg-slate-800/90 rounded-lg p-4 w-full max-w-xs text-center border border-purple-100/30 mt-2">
          <h3 className="text-lg font-bold text-purple-900 mb-1">Вашите резултати</h3>
          <p className="text-base text-gray-800 mb-1">Необходим боксит: <span className="font-bold text-purple-900">{result.bauxite.toLocaleString()} тона/седмица</span></p>
          <p className="text-base text-gray-800 mb-1">Използвана вода: <span className="font-bold text-purple-900">{result.water.toLocaleString()} м³/седмица</span></p>
          <p className="text-base text-gray-800 mb-1">Произведен алуминий: <span className="font-bold text-purple-900">{result.aluminum.toLocaleString()} тона/седмица</span></p>
          <p className="text-base text-gray-800">Необходима енергия: <span className="font-bold text-purple-900">{result.energy.toLocaleString()} MWh/седмица</span></p>
        </div>
      )}
    </section>
  )
}
