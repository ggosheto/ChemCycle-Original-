"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Leaf,
  Recycle,
  Globe,
  Users,
  Calculator,
  MessageSquare,
  BookOpen,
  ArrowRight,
  TreePine,
  Droplets,
  Wind,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Calculator,
      title: "Калкулатор за въглеродни емисии",
      description: "Изчислете своето въздействие върху околната среда и открийте начини за намаляване на въглеродния си отпечатък",
      href: "/calculator",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: MessageSquare,
      title: "Форум на общността",
      description: "Свържете се с еко-воини от цял свят и споделете съвети за устойчив живот",
      href: "/forum",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: BookOpen,
      title: "Еко Блог",
      description: "Бъдете в крак с последните новини, изследвания и практически съвети за околната среда",
      href: "/blog",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  const stats = [
    { number: "2.5M+", label: "Спестени тона CO₂", icon: Leaf, color: "text-green-600" },
    { number: "150K+", label: "Активни членове", icon: Users, color: "text-blue-600" },
    { number: "89%", label: "Намалени отпадъци", icon: Recycle, color: "text-emerald-600" },
    { number: "50+", label: "Държави", icon: Globe, color: "text-cyan-600" },
  ]

const impactAreas = [
  {
    title: "Рециклиране на пластмаса",
    description: "Напреднали технологии за сортиране и преработка",
    icon: Recycle,
    image: "/dreamstime_I_138141472.jpg",
  },
  {
    title: "Чиста енергия",
    description: "Решения за възобновяема енергия за устойчиво бъдеще",
    icon: Wind,
    image: "/clean-energy.jpg",
  },
  {
    title: "Запазване на водата",
    description: "Умно управление и пречистване на водата",
    icon: Droplets,
    image: "/R.jpg",
  },
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />

      {/* Hero Section */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90"></div>
        {/*
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-20"></div>
        */}

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <TreePine className="w-5 h-5 text-green-200" />
              <span className="text-green-100 font-medium">Присъединете се към Зелената Революция</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Рециклирайте Умно,
              <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                Живейте Зелено
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto">
              Трансформирайте своето въздействие върху околната среда с нашата всеобхватна платформа. Изчислете, научете, свържете се и направете реална разлика за бъдещето на нашата планета.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/calculator" className="flex items-center gap-2">
                  Започнете да Изчислявате <Calculator className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-green-600 hover:bg-white hover:text-green-600 text-lg px-8 py-4 rounded-full backdrop-blur-sm"
              >
                <Link href="/signup" className="flex items-center gap-2">
                  Присъединете се към Общността <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-0 md:top-10 md:left-4 z-10">
              <div className="w-16 h-16 bg-green-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Leaf className="w-8 h-8 text-green-200" />
              </div>
            </div>
            <div className="absolute top-32 right-16 animate-pulse">
              <div className="w-12 h-12 bg-blue-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Droplets className="w-6 h-6 text-blue-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Нашето Глобално Въздействие</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Заедно създаваме измерими промени за нашата планета
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Мощни Инструменти за
              <span className="block text-green-600">Екологични Действия</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Всичко, от което се нуждаете, за да разберете, проследите и подобрите своето въздействие върху околната среда
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm overflow-hidden h-full flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 ${feature.bgColor}`}
                  >
                    <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8 flex flex-col flex-1 justify-between">
                  <CardDescription className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-auto">
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${feature.color} hover:shadow-lg transition-all duration-300 rounded-full py-3`}
                    >
                      <Link href={feature.href} className="flex items-center justify-center gap-2">
                        Разгледайте Сега <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Carousel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Области на Въздействие</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Открийте как правим разлика в множество екологични сектори
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {impactAreas.map((area, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 text-white">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                            <area.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4">{area.title}</h3>
                          <p className="text-xl text-green-100 mb-6">{area.description}</p>
                          {/* <Button className="bg-white text-green-600 hover:bg-green-50">Научете Повече</Button> */}
                        </div>
                        <div className="relative">
                          <img
                            src={area.image || "/placeholder.svg"}
                            alt={area.title}
                            className="rounded-lg shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {impactAreas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-green-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Нашата Мисия</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-green-200 mb-6">Изграждане на Устойчиво Утре</h3>
                <p className="text-lg leading-relaxed mb-8 text-green-100">
                  В Chemcycle вярваме, че всеки индивид има силата да създава положителни промени в околната среда.
                  Нашата платформа комбинира иновационни технологии с решения, водени от общността, за да направи устойчивостта
                  достъпна, измерима и въздействаща.
                  и други интересни теми.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">Намаляване на въглеродните емисии чрез умни избори</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <Recycle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">Насърчаване на принципите на кръговата икономика</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">Изграждане на глобална общност от променящи играта</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <Globe className="w-24 h-24 mx-auto mb-4 animate-spin-slow text-green-200" />
                    <p className="text-xl font-semibold">Заедно за Земята</p>
                    <p className="text-green-200">Едно Действие в Пътя</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-green-900 text-white relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Готови ли сте да направите разлика?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Присъединете се към хиляди еко-съзнателни индивиди, които вече създават положително въздействие върху околната среда.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg px-8 py-4 rounded-full shadow-lg"
            >
              <Link href="/signup" className="flex items-center gap-2">
                Започнете Вашето Пътуване <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white text-lg px-8 py-4 rounded-full"
            >
              <Link href="/login">Вече сте Член?</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
