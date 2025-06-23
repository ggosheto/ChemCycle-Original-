"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Leaf,
  Recycle,
  Globe,
  Lightbulb,
  Droplets,
  Wind,
  TrendingUp,
  Eye,
  Heart,
} from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar: string
  category: string
  readTime: number
  publishedAt: string
  tags: string[]
  featured: boolean
  views: number
  likes: number
  image: string
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Всички статии", icon: BookOpen, color: "bg-gray-100 text-gray-600", count: 89 },
    { id: "recycling", name: "Рециклиране", icon: Recycle, color: "bg-green-100 text-green-600", count: 23 },
    { id: "climate", name: "Климатични промени", icon: Globe, color: "bg-blue-100 text-blue-600", count: 18 },
    { id: "sustainability", name: "Устойчивост", icon: Leaf, color: "bg-emerald-100 text-emerald-600", count: 15 },
    { id: "innovation", name: "Зелени иновации", icon: Lightbulb, color: "bg-yellow-100 text-yellow-600", count: 12 },
    { id: "conservation", name: "Опазване", icon: Droplets, color: "bg-cyan-100 text-cyan-600", count: 11 },
    { id: "renewable", name: "Възобновяема енергия", icon: Wind, color: "bg-purple-100 text-purple-600", count: 10 },
  ]

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Бъдещето на рециклирането на пластмаса: Революционни технологии променят играта",
      excerpt:
        "Открийте как най-новите технологии трансформират пластмасовите отпадъци в ценни ресурси, създавайки истинска кръгова икономика за устойчиво бъдеще.",
      content: "Индустрията за рециклиране на пластмаса претърпява революционна трансформация...",
      author: "Д-р Сара Чен",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "recycling",
      readTime: 8,
      publishedAt: "2024-01-18T10:00:00Z",
      tags: ["пластмаса", "технология", "кръгова-икономика", "иновации"],
      featured: true,
      views: 2847,
      likes: 156,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "10 прости начина да намалите въглеродния си отпечатък днес",
      excerpt:
        "Практични, изпълними стъпки, които можете да предприемете още сега, за да минимизирате въздействието си върху околната среда и да допринесете за по-здравословна планета.",
      content: "Създаването на положително въздействие върху околната среда не изисква драстични промени в начина на живот...",
      author: "Михаел Родригес",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "sustainability",
      readTime: 5,
      publishedAt: "2024-01-17T14:30:00Z",
      tags: ["въглероден-отпечатък", "начин-на-живот", "съвети", "околна-среда"],
      featured: false,
      views: 1923,
      likes: 89,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Почистване на океана: Как усилията за морско опазване правят вълни",
      excerpt:
        "Разгледайте иновативните проекти и технологии, работещи за премахване на пластмасовото замърсяване от нашите океани и защита на морския живот.",
      content: "Нашите океани са изправени пред безпрецедентна криза поради пластмасово замърсяване...",
      author: "Ема Томпсън",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "conservation",
      readTime: 12,
      publishedAt: "2024-01-16T09:15:00Z",
      tags: ["океан", "морски-живот", "почистване", "опазване"],
      featured: true,
      views: 3421,
      likes: 234,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Слънчева енергийна революция: Защо 2024 е повратна точка",
      excerpt:
        "Анализ на драматичното намаляване на разходите и подобренията в ефективността, които правят слънчевата енергия доминиращ енергиен източник на бъдещето.",
      content: "Индустрията за слънчева енергия достигна критична точка през 2024...",
      author: "Джеймс Парк",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "renewable",
      readTime: 10,
      publishedAt: "2024-01-15T16:45:00Z",
      tags: ["слънчева-енергия", "възобновяема-енергия", "икономика", "бъдеще"],
      featured: false,
      views: 2156,
      likes: 178,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Градско земеделие: Отглеждане на храна в сърцето на града",
      excerpt:
        "Как вертикалните ферми и градините на покривите революционизират производството на храни, като същевременно намаляват транспортните емисии и градските топлинни острови.",
      content: "Градовете по целия свят възприемат зелената революция...",
      author: "Лиза Уанг",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "sustainability",
      readTime: 7,
      publishedAt: "2024-01-14T11:20:00Z",
      tags: ["градско-земеделие", "продоволствена-сигурност", "градове", "иновации"],
      featured: false,
      views: 1687,
      likes: 92,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Скритата екологична цена на бързата мода",
      excerpt:
        "Разкриване на истинското въздействие на модната индустрия върху нашата планета и изследване на устойчиви алтернативи, които не правят компромис с стила.",
      content: "Модната индустрия е един от най-големите замърсители в света...",
      author: "Рейчъл Грийн",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "sustainability",
      readTime: 9,
      publishedAt: "2024-01-13T13:30:00Z",
      tags: ["мода", "отпадъци-от-текстил", "устойчива-мода", "околната-среда"],
      featured: false,
      views: 2934,
      likes: 201,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "Пробив в технологията за улавяне на въглерод може да промени всичко",
      excerpt:
        "Учени разработиха нов метод за улавяне на CO2 директно от атмосферата с безпрецедентна ефективност и икономичност.",
      content: "Екип от изследователи обяви голям пробив...",
      author: "Д-р Алекс Кумар",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "innovation",
      readTime: 11,
      publishedAt: "2024-01-12T08:00:00Z",
      tags: ["уловяне-на-въглерод", "климатични-технологии", "пробив", "изследвания"],
      featured: true,
      views: 4123,
      likes: 312,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "Опазване на водата: Умни технологии за един жаден свят",
      excerpt:
        "Изследване на иновативни технологии и стратегии за пестене на вода, които помагат на общностите да се адаптират към нарастващата недостиг на вода.",
      content: "Недостигът на вода засяга милиарди хора по света...",
      author: "Мария Сантос",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "conservation",
      readTime: 6,
      publishedAt: "2024-01-11T15:10:00Z",
      tags: ["опазване-на-водата", "умни-технологии", "недостиг", "иновации"],
      featured: false,
      views: 1456,
      likes: 67,
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryInfo = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId) || categories[0]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 pt-16">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Еко Блог</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Бъдете информирани с най-новите екологични новини, изследователски прозрения и практични съвети за устойчивост
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Търсене на статии..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-green-500 rounded-full"
                />
              </div>

              {/* Categories */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Категории</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4" />
                          <span className="font-medium text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Бъдете информирани</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Получавайте седмични екологични новини директно в пощата си
                  </p>
                  <Input
                    placeholder="Вашият имейл"
                    className="mb-3 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full"
                  />
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 rounded-full">Абонирайте се</Button>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    Популярни теми
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "климатични-промени",
                      "възобновяема-енергия",
                      "пластмасово-замърсяване",
                      "улавяне-на-въглерод",
                      "устойчив-живот",
                      "зелени-технологии",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs cursor-pointer hover:bg-green-100 transition-colors"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Authors */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Популярни автори</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Д-р Сара Чен", articles: 12, avatar: "/placeholder.svg?height=32&width=32" },
                    { name: "Михаел Родригес", articles: 8, avatar: "/placeholder.svg?height=32&width=32" },
                    { name: "Ема Томпсън", articles: 6, avatar: "/placeholder.svg?height=32&width=32" },
                  ].map((author, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                          {author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-gray-800">{author.name}</div>
                        <div className="text-xs text-gray-500">{author.articles} статии</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Избрани статии</h2>
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">⭐ Избор на редактора</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featuredPosts.slice(0, 2).map((post) => {
                      const categoryInfo = getCategoryInfo(post.category)
                      return (
                        <Card
                          key={post.id}
                          className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                        >
                          <div className="relative">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className={`${categoryInfo.color} border-0`}>{categoryInfo.name}</Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Избрана</Badge>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                            <div className="flex items-center gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                                  <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                                    {post.author.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium text-gray-700">{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Clock className="w-3 h-3" />
                                {post.readTime} мин. четене
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.publishedAt)}
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  {post.views}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart className="w-3 h-3" />
                                  {post.likes}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Regular Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Последни статии</h2>
                <div className="space-y-6">
                  {regularPosts.map((post) => {
                    const categoryInfo = getCategoryInfo(post.category)
                    return (
                      <Card
                        key={post.id}
                        className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      >
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="flex-shrink-0">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="w-32 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={`${categoryInfo.color} border-0 text-xs`}>{categoryInfo.name}</Badge>
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 mb-3 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-2">
                                    <Avatar className="w-5 h-5">
                                      <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                                      <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                                        {post.author.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{post.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime} мин.
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(post.publishedAt)}
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Eye className="w-3 h-3" />
                                    {post.views}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Heart className="w-3 h-3" />
                                    {post.likes}
                                  </div>
                                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                                    Прочети повече <ArrowRight className="w-3 h-3 ml-1" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {filteredPosts.length === 0 && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Няма намерени статии</h3>
                    <p className="text-gray-500 mb-6">Опитайте да промените търсенето или филтъра за категории</p>
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      Разгледайте всички статии
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-600 hover:bg-green-50 rounded-full px-8"
                  >
                    Зареди още статии
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
