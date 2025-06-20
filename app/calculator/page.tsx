"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Calculator, Leaf, Car, Home, Trash2, Lightbulb, Droplets, Plane, TreePine, Award, Globe } from "lucide-react"

export default function CalculatorPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    electricity: "",
    gas: "",
    transportation: "",
    transportType: "car",
    flights: "",
    waste: "",
    recycling: "",
    water: "",
    diet: "mixed",
  })
  const [results, setResults] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const totalSteps = 3

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateFootprint = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const electricity = Number.parseFloat(formData.electricity) || 0
      const gas = Number.parseFloat(formData.gas) || 0
      const transportation = Number.parseFloat(formData.transportation) || 0
      const flights = Number.parseFloat(formData.flights) || 0
      const waste = Number.parseFloat(formData.waste) || 0
      const recycling = Number.parseFloat(formData.recycling) || 0
      const water = Number.parseFloat(formData.water) || 0

      // Enhanced carbon footprint calculation
      const electricityCarbon = electricity * 0.4
      const gasCarbon = gas * 2.3

      let transportCarbon = 0
      switch (formData.transportType) {
        case "car":
          transportCarbon = transportation * 0.2
          break
        case "bus":
          transportCarbon = transportation * 0.1
          break
        case "train":
          transportCarbon = transportation * 0.05
          break
        case "bike":
          transportCarbon = 0
          break
        case "electric":
          transportCarbon = transportation * 0.05
          break
      }

      const flightCarbon = flights * 0.25
      const wasteCarbon = waste * 0.5
      const recyclingReduction = recycling * 0.3
      const waterCarbon = water * 0.001

      let dietCarbon = 0
      switch (formData.diet) {
        case "meat":
          dietCarbon = 7.2
          break
        case "mixed":
          dietCarbon = 4.8
          break
        case "vegetarian":
          dietCarbon = 3.2
          break
        case "vegan":
          dietCarbon = 2.1
          break
      }

      const totalCarbon =
        electricityCarbon +
        gasCarbon +
        transportCarbon +
        flightCarbon +
        wasteCarbon +
        waterCarbon +
        dietCarbon -
        recyclingReduction
      const monthlyCarbon = totalCarbon * 30
      const yearlyCarbon = totalCarbon * 365

      const treesNeeded = Math.ceil(yearlyCarbon / 22)
      const recyclingRate = waste > 0 ? (recycling / waste) * 100 : 0
      const globalAverage = 4000 // kg CO2 per year
      const comparison = ((yearlyCarbon - globalAverage) / globalAverage) * 100

      setResults({
        daily: totalCarbon.toFixed(2),
        monthly: monthlyCarbon.toFixed(2),
        yearly: yearlyCarbon.toFixed(2),
        treesNeeded,
        recyclingRate: recyclingRate.toFixed(1),
        comparison: comparison.toFixed(1),
        grade: getEnvironmentalGrade(yearlyCarbon),
        breakdown: {
          electricity: electricityCarbon.toFixed(2),
          gas: gasCarbon.toFixed(2),
          transport: transportCarbon.toFixed(2),
          flights: flightCarbon.toFixed(2),
          waste: wasteCarbon.toFixed(2),
          water: waterCarbon.toFixed(2),
          diet: dietCarbon.toFixed(2),
          recyclingOffset: recyclingReduction.toFixed(2),
        },
      })
      setIsCalculating(false)
    }, 2000)
  }

  const getEnvironmentalGrade = (yearlyCarbon: number) => {
    if (yearlyCarbon < 2000) return { grade: "A+", color: "text-green-600", bg: "bg-green-100" }
    if (yearlyCarbon < 3000) return { grade: "A", color: "text-green-600", bg: "bg-green-100" }
    if (yearlyCarbon < 4000) return { grade: "B", color: "text-yellow-600", bg: "bg-yellow-100" }
    if (yearlyCarbon < 5000) return { grade: "C", color: "text-orange-600", bg: "bg-orange-100" }
    return { grade: "D", color: "text-red-600", bg: "bg-red-100" }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateFootprint()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 pt-16">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Carbon Footprint Calculator</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your environmental impact and get personalized recommendations to reduce your carbon footprint
            </p>
          </div>

          {!results ? (
            <div className="space-y-8">
              {/* Progress Bar */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {Math.round((currentStep / totalSteps) * 100)}% Complete
                    </span>
                  </div>
                  <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
                </CardContent>
              </Card>

              {/* Step Content */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {currentStep === 1 && "Home & Energy Usage"}
                    {currentStep === 2 && "Transportation & Travel"}
                    {currentStep === 3 && "Lifestyle & Consumption"}
                  </CardTitle>
                  <CardDescription>
                    {currentStep === 1 && "Tell us about your home energy consumption"}
                    {currentStep === 2 && "How do you get around?"}
                    {currentStep === 3 && "Your daily habits and consumption patterns"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Home & Energy */}
                  {currentStep === 1 && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="electricity" className="flex items-center gap-2 text-gray-700 font-medium">
                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                            Electricity Usage (kWh/month)
                          </Label>
                          <Input
                            id="electricity"
                            type="number"
                            placeholder="e.g., 750"
                            value={formData.electricity}
                            onChange={(e) => handleInputChange("electricity", e.target.value)}
                            className="border-gray-300 focus:border-green-500"
                          />
                          <p className="text-xs text-gray-500">Check your electricity bill for accurate data</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="gas" className="flex items-center gap-2 text-gray-700 font-medium">
                            <Home className="w-4 h-4 text-blue-500" />
                            Natural Gas (m³/month)
                          </Label>
                          <Input
                            id="gas"
                            type="number"
                            placeholder="e.g., 60"
                            value={formData.gas}
                            onChange={(e) => handleInputChange("gas", e.target.value)}
                            className="border-gray-300 focus:border-green-500"
                          />
                          <p className="text-xs text-gray-500">Used for heating, cooking, hot water</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="water" className="flex items-center gap-2 text-gray-700 font-medium">
                          <Droplets className="w-4 h-4 text-blue-400" />
                          Water Usage (liters/day)
                        </Label>
                        <Input
                          id="water"
                          type="number"
                          placeholder="e.g., 150"
                          value={formData.water}
                          onChange={(e) => handleInputChange("water", e.target.value)}
                          className="border-gray-300 focus:border-green-500"
                        />
                        <p className="text-xs text-gray-500">Average person uses 100-200 liters per day</p>
                      </div>
                    </>
                  )}

                  {/* Step 2: Transportation */}
                  {currentStep === 2 && (
                    <>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2 text-gray-700 font-medium">
                          <Car className="w-4 h-4 text-purple-500" />
                          Primary Transportation Method
                        </Label>
                        <Select
                          value={formData.transportType}
                          onValueChange={(value) => handleInputChange("transportType", value)}
                        >
                          <SelectTrigger className="border-gray-300 focus:border-green-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Gasoline Car</SelectItem>
                            <SelectItem value="electric">Electric Car</SelectItem>
                            <SelectItem value="bus">Public Bus</SelectItem>
                            <SelectItem value="train">Train/Metro</SelectItem>
                            <SelectItem value="bike">Bike/Walk</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="transportation" className="text-gray-700 font-medium">
                          Daily Commute Distance (km)
                        </Label>
                        <Input
                          id="transportation"
                          type="number"
                          placeholder="e.g., 25"
                          value={formData.transportation}
                          onChange={(e) => handleInputChange("transportation", e.target.value)}
                          className="border-gray-300 focus:border-green-500"
                        />
                        <p className="text-xs text-gray-500">Round trip distance for work/school</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="flights" className="flex items-center gap-2 text-gray-700 font-medium">
                          <Plane className="w-4 h-4 text-sky-500" />
                          Flight Hours per Year
                        </Label>
                        <Input
                          id="flights"
                          type="number"
                          placeholder="e.g., 12"
                          value={formData.flights}
                          onChange={(e) => handleInputChange("flights", e.target.value)}
                          className="border-gray-300 focus:border-green-500"
                        />
                        <p className="text-xs text-gray-500">Total flight time for business and leisure</p>
                      </div>
                    </>
                  )}

                  {/* Step 3: Lifestyle */}
                  {currentStep === 3 && (
                    <>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2 text-gray-700 font-medium">
                          <Leaf className="w-4 h-4 text-green-500" />
                          Diet Type
                        </Label>
                        <Select value={formData.diet} onValueChange={(value) => handleInputChange("diet", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-green-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meat">Heavy Meat Eater</SelectItem>
                            <SelectItem value="mixed">Mixed Diet</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="waste" className="flex items-center gap-2 text-gray-700 font-medium">
                            <Trash2 className="w-4 h-4 text-red-500" />
                            Waste Generated (kg/week)
                          </Label>
                          <Input
                            id="waste"
                            type="number"
                            placeholder="e.g., 14"
                            value={formData.waste}
                            onChange={(e) => handleInputChange("waste", e.target.value)}
                            className="border-gray-300 focus:border-green-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="recycling" className="flex items-center gap-2 text-gray-700 font-medium">
                            <Leaf className="w-4 h-4 text-green-500" />
                            Materials Recycled (kg/week)
                          </Label>
                          <Input
                            id="recycling"
                            type="number"
                            placeholder="e.g., 7"
                            value={formData.recycling}
                            onChange={(e) => handleInputChange("recycling", e.target.value)}
                            className="border-gray-300 focus:border-green-500"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button onClick={prevStep} variant="outline" disabled={currentStep === 1} className="px-8">
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={isCalculating}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8"
                    >
                      {currentStep === totalSteps ? (isCalculating ? "Calculating..." : "Calculate Impact") : "Next"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Results Section */
            <div className="space-y-8">
              {/* Environmental Grade */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold ${results.grade.bg} ${results.grade.color}`}
                    >
                      {results.grade.grade}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Environmental Grade</h3>
                      <p className="text-gray-600">Your overall sustainability score</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{results.daily}</div>
                      <div className="text-sm text-gray-600">kg CO₂/day</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{results.monthly}</div>
                      <div className="text-sm text-gray-600">kg CO₂/month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{results.yearly}</div>
                      <div className="text-sm text-gray-600">kg CO₂/year</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Insights */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <TreePine className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{results.treesNeeded}</div>
                    <div className="text-green-100">Trees needed to offset your yearly emissions</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{results.recyclingRate}%</div>
                    <div className="text-blue-100">Your recycling rate</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 to-violet-600 text-white border-0 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">
                      {results.comparison > 0 ? "+" : ""}
                      {results.comparison}%
                    </div>
                    <div className="text-purple-100">vs. global average</div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Breakdown */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Emission Breakdown</CardTitle>
                  <CardDescription>Daily CO₂ emissions by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(results.breakdown).map(([category, value]) => (
                    <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium capitalize text-gray-700">
                        {category === "recyclingOffset" ? "Recycling Offset" : category}:
                      </span>
                      <span
                        className={`font-bold ${category === "recyclingOffset" ? "text-green-600" : "text-gray-800"}`}
                      >
                        {category === "recyclingOffset" ? "-" : ""}
                        {value} kg CO₂
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">💡 Personalized Recommendations</CardTitle>
                  <CardDescription>Actions you can take to reduce your environmental impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Quick Wins:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Switch to LED bulbs (-15% electricity)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Use public transport 2 days/week (-20% transport)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Increase recycling rate to 80% (-10% waste)
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Long-term Goals:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Install solar panels (-50% electricity)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Switch to electric vehicle (-80% transport)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Reduce meat consumption (-30% diet impact)
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setResults(null)
                    setCurrentStep(1)
                    setFormData({
                      electricity: "",
                      gas: "",
                      transportation: "",
                      transportType: "car",
                      flights: "",
                      waste: "",
                      recycling: "",
                      water: "",
                      diet: "mixed",
                    })
                  }}
                  variant="outline"
                  className="border-green-300 text-green-600 hover:bg-green-50 rounded-full px-8"
                >
                  Calculate Again
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full px-8"
                >
                  <a href="/forum">Share Results</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
