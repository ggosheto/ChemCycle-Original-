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
    { id: "all", name: "All Articles", icon: BookOpen, color: "bg-gray-100 text-gray-600", count: 89 },
    { id: "recycling", name: "Recycling", icon: Recycle, color: "bg-green-100 text-green-600", count: 23 },
    { id: "climate", name: "Climate Change", icon: Globe, color: "bg-blue-100 text-blue-600", count: 18 },
    { id: "sustainability", name: "Sustainability", icon: Leaf, color: "bg-emerald-100 text-emerald-600", count: 15 },
    { id: "innovation", name: "Green Innovation", icon: Lightbulb, color: "bg-yellow-100 text-yellow-600", count: 12 },
    { id: "conservation", name: "Conservation", icon: Droplets, color: "bg-cyan-100 text-cyan-600", count: 11 },
    { id: "renewable", name: "Renewable Energy", icon: Wind, color: "bg-purple-100 text-purple-600", count: 10 },
  ]

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Plastic Recycling: Revolutionary Technologies Changing the Game",
      excerpt:
        "Discover how cutting-edge technologies are transforming plastic waste into valuable resources, creating a truly circular economy for a sustainable future.",
      content: "The plastic recycling industry is undergoing a revolutionary transformation...",
      author: "Dr. Sarah Chen",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "recycling",
      readTime: 8,
      publishedAt: "2024-01-18T10:00:00Z",
      tags: ["plastic", "technology", "circular-economy", "innovation"],
      featured: true,
      views: 2847,
      likes: 156,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "10 Simple Ways to Reduce Your Carbon Footprint Today",
      excerpt:
        "Practical, actionable steps you can take right now to minimize your environmental impact and contribute to a healthier planet.",
      content: "Making a positive environmental impact doesn't require drastic lifestyle changes...",
      author: "Michael Rodriguez",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "sustainability",
      readTime: 5,
      publishedAt: "2024-01-17T14:30:00Z",
      tags: ["carbon-footprint", "lifestyle", "tips", "environment"],
      featured: false,
      views: 1923,
      likes: 89,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Ocean Cleanup: How Marine Conservation Efforts Are Making Waves",
      excerpt:
        "Explore the innovative projects and technologies working to remove plastic pollution from our oceans and protect marine life.",
      content: "Our oceans are facing an unprecedented crisis due to plastic pollution...",
      author: "Emma Thompson",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "conservation",
      readTime: 12,
      publishedAt: "2024-01-16T09:15:00Z",
      tags: ["ocean", "marine-life", "cleanup", "conservation"],
      featured: true,
      views: 3421,
      likes: 234,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Solar Energy Revolution: Why 2024 is the Tipping Point",
      excerpt:
        "Analyzing the dramatic cost reductions and efficiency improvements that are making solar power the dominant energy source of the future.",
      content: "The solar energy industry has reached a critical milestone in 2024...",
      author: "James Park",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "renewable",
      readTime: 10,
      publishedAt: "2024-01-15T16:45:00Z",
      tags: ["solar", "renewable-energy", "economics", "future"],
      featured: false,
      views: 2156,
      likes: 178,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Urban Farming: Growing Food in the Heart of the City",
      excerpt:
        "How vertical farms and rooftop gardens are revolutionizing food production while reducing transportation emissions and urban heat islands.",
      content: "Cities around the world are embracing a green revolution...",
      author: "Lisa Wang",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "sustainability",
      readTime: 7,
      publishedAt: "2024-01-14T11:20:00Z",
      tags: ["urban-farming", "food-security", "cities", "innovation"],
      featured: false,
      views: 1687,
      likes: 92,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "The Hidden Environmental Cost of Fast Fashion",
      excerpt:
        "Uncovering the true impact of the fashion industry on our planet and exploring sustainable alternatives that don't compromise on style.",
      content: "The fashion industry is one of the world's largest polluters...",
      author: "Rachel Green",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "sustainability",
      readTime: 9,
      publishedAt: "2024-01-13T13:30:00Z",
      tags: ["fashion", "textile-waste", "sustainable-fashion", "environment"],
      featured: false,
      views: 2934,
      likes: 201,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "Breakthrough in Carbon Capture Technology Could Change Everything",
      excerpt:
        "Scientists develop a new method to capture CO2 directly from the atmosphere at unprecedented efficiency and cost-effectiveness.",
      content: "A team of researchers has announced a major breakthrough...",
      author: "Dr. Alex Kumar",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "innovation",
      readTime: 11,
      publishedAt: "2024-01-12T08:00:00Z",
      tags: ["carbon-capture", "climate-tech", "breakthrough", "research"],
      featured: true,
      views: 4123,
      likes: 312,
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "Water Conservation: Smart Technologies for a Thirsty World",
      excerpt:
        "Exploring innovative water-saving technologies and strategies that are helping communities adapt to increasing water scarcity.",
      content: "Water scarcity affects billions of people worldwide...",
      author: "Maria Santos",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "conservation",
      readTime: 6,
      publishedAt: "2024-01-11T15:10:00Z",
      tags: ["water-conservation", "smart-tech", "scarcity", "innovation"],
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Eco Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest environmental news, research insights, and actionable sustainability tips
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-green-500 rounded-full"
                />
              </div>

              {/* Categories */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Categories</CardTitle>
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
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Get weekly environmental insights delivered to your inbox
                  </p>
                  <Input
                    placeholder="Your email"
                    className="mb-3 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full"
                  />
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 rounded-full">Subscribe</Button>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "climate-change",
                      "renewable-energy",
                      "plastic-pollution",
                      "carbon-capture",
                      "sustainable-living",
                      "green-technology",
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
                  <CardTitle className="text-lg">Popular Authors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Dr. Sarah Chen", articles: 12, avatar: "/placeholder.svg?height=32&width=32" },
                    { name: "Michael Rodriguez", articles: 8, avatar: "/placeholder.svg?height=32&width=32" },
                    { name: "Emma Thompson", articles: 6, avatar: "/placeholder.svg?height=32&width=32" },
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
                        <div className="text-xs text-gray-500">{author.articles} articles</div>
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
                    <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">⭐ Editor's Choice</Badge>
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
                              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Featured</Badge>
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
                                {post.readTime} min read
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
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
                                    {post.readTime} min
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
                                    Read More <ArrowRight className="w-3 h-3 ml-1" />
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
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search or category filter</p>
                    <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      Browse All Articles
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
                    Load More Articles
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
