"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MessageSquare,
  Plus,
  Search,
  ThumbsUp,
  MessageCircle,
  Clock,
  User,
  Leaf,
  Recycle,
  Globe,
  Lightbulb,
  TrendingUp,
  FlameIcon as Fire,
  Star,
} from "lucide-react"

interface ForumPost {
  id: number
  title: string
  content: string
  author: string
  avatar: string
  category: string
  likes: number
  replies: number
  views: number
  createdAt: string
  tags: string[]
  isPinned?: boolean
  isHot?: boolean
}

export default function ForumPage() {
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "general",
  })

  const categories = [
    { id: "all", name: "All Topics", icon: MessageSquare, color: "bg-gray-100 text-gray-600", count: 156 },
    { id: "recycling", name: "Recycling Tips", icon: Recycle, color: "bg-green-100 text-green-600", count: 42 },
    { id: "environment", name: "Environment", icon: Globe, color: "bg-blue-100 text-blue-600", count: 38 },
    { id: "sustainability", name: "Sustainability", icon: Leaf, color: "bg-emerald-100 text-emerald-600", count: 29 },
    { id: "innovation", name: "Green Tech", icon: Lightbulb, color: "bg-yellow-100 text-yellow-600", count: 24 },
    { id: "lifestyle", name: "Eco Lifestyle", icon: Star, color: "bg-purple-100 text-purple-600", count: 23 },
  ]

  useEffect(() => {
    const samplePosts: ForumPost[] = [
      {
        id: 1,
        title: "Revolutionary plastic-eating enzyme discovered - game changer for recycling?",
        content:
          "Scientists have discovered a new enzyme that can break down plastic waste in hours instead of centuries. This could revolutionize how we handle plastic pollution. What are your thoughts on this breakthrough?",
        author: "Dr. Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        category: "innovation",
        likes: 89,
        replies: 23,
        views: 1247,
        createdAt: "2024-01-15T10:30:00Z",
        tags: ["breakthrough", "plastic", "enzyme", "recycling"],
        isPinned: true,
        isHot: true,
      },
      {
        id: 2,
        title: "My zero-waste journey: 6 months in, here's what I learned",
        content:
          "Started my zero-waste lifestyle 6 months ago. It's been challenging but incredibly rewarding. Here are the biggest lessons I've learned and practical tips for anyone wanting to start their own journey.",
        author: "EcoWarrior23",
        avatar: "/placeholder.svg?height=40&width=40",
        category: "lifestyle",
        likes: 156,
        replies: 45,
        views: 2103,
        createdAt: "2024-01-14T14:20:00Z",
        tags: ["zero-waste", "lifestyle", "tips", "personal-story"],
        isHot: true,
      },
      {
        id: 3,
        title: "Community composting program success story - 500 tons diverted!",
        content:
          "Our neighborhood composting program just hit a major milestone - 500 tons of organic waste diverted from landfills! Here's how we did it and how you can start one in your community.",
        author: "GreenNeighbor",
        avatar: "/placeholder.svg?height=40&width=40",
        category: "sustainability",
        likes: 78,
        replies: 19,
        views: 892,
        createdAt: "2024-01-13T09:15:00Z",
        tags: ["composting", "community", "success-story", "organic-waste"],
      },
      {
        id: 4,
        title: "Electric vs Hybrid vs Hydrogen: Which is truly the greenest option?",
        content:
          "With so many 'green' vehicle options available, I'm confused about which is actually the most environmentally friendly. Can we break down the lifecycle emissions of each?",
        author: "CarShopper2024",
        avatar: "/placeholder.svg?height=40&width=40",
        category: "environment",
        likes: 134,
        replies: 67,
        views: 1876,
        createdAt: "2024-01-12T16:45:00Z",
        tags: ["electric-vehicles", "hybrid", "hydrogen", "transportation", "emissions"],
      },
      {
        id: 5,
        title: "DIY solar panel installation - is it worth the risk?",
        content:
          "Thinking about installing solar panels myself to save on costs. Has anyone here done a DIY installation? What are the pros, cons, and potential pitfalls?",
        author: "SolarCurious",
        avatar: "/placeholder.svg?height=40&width=40",
        category: "innovation",
        likes: 92,
        replies: 31,
        views: 1456,
        createdAt: "2024-01-11T11:30:00Z",
        tags: ["solar", "diy", "renewable-energy", "installation"],
      },
      {
        id: 6,
        title: "Microplastics in drinking water - how worried should we be?",
        content:
          "Recent studies show microplastics in tap water worldwide. What are the health implications and what can we do to filter them out effectively?",
        author: "HealthyLiving",
        avatar: "/placeholder.svg?height=40&width=40",
        category: "environment",
        likes: 203,
        replies: 89,
        views: 3421,
        createdAt: "2024-01-10T13:20:00Z",
        tags: ["microplastics", "water", "health", "filtration"],
        isHot: true,
      },
    ]
    setPosts(samplePosts)
  }, [])

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes
      case "replies":
        return b.replies - a.replies
      case "views":
        return b.views - a.views
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  const handleSubmitPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const post: ForumPost = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        author: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        category: newPost.category,
        likes: 0,
        replies: 0,
        views: 1,
        createdAt: new Date().toISOString(),
        tags: [],
      }
      setPosts([post, ...posts])
      setNewPost({ title: "", content: "", category: "general" })
      setShowNewPostForm(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
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
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Community Forum</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with eco-warriors worldwide, share experiences, and learn from the community
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* New Post Button */}
              <Button
                onClick={() => setShowNewPostForm(!showNewPostForm)}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full shadow-lg"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Discussion
              </Button>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-green-500 rounded-full"
                />
              </div>

              {/* Sort Options */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Sort By</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { id: "recent", name: "Most Recent", icon: Clock },
                    { id: "popular", name: "Most Popular", icon: TrendingUp },
                    { id: "replies", name: "Most Replies", icon: MessageCircle },
                    { id: "views", name: "Most Views", icon: Fire },
                  ].map((sort) => (
                    <button
                      key={sort.id}
                      onClick={() => setSortBy(sort.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                        sortBy === sort.id
                          ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <sort.icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{sort.name}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>

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

              {/* Community Stats */}
              <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Community Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-green-100">Total Posts</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">Active Members</span>
                      <span className="font-bold">8,934</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-100">This Week</span>
                      <span className="font-bold">156 posts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* New Post Form */}
              {showNewPostForm && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Start a New Discussion</CardTitle>
                    <CardDescription>Share your thoughts with the community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Discussion title..."
                      value={newPost.title}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))}
                      className="border-gray-300 focus:border-green-500"
                    />
                    <Textarea
                      placeholder="What's on your mind? Share your thoughts, questions, or experiences..."
                      value={newPost.content}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, content: e.target.value }))}
                      className="min-h-32 border-gray-300 focus:border-green-500"
                    />
                    <div className="flex justify-between items-center">
                      <select
                        value={newPost.category}
                        onChange={(e) => setNewPost((prev) => ({ ...prev, category: e.target.value }))}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500"
                      >
                        <option value="general">General Discussion</option>
                        <option value="recycling">Recycling Tips</option>
                        <option value="environment">Environment</option>
                        <option value="sustainability">Sustainability</option>
                        <option value="innovation">Green Tech</option>
                        <option value="lifestyle">Eco Lifestyle</option>
                      </select>
                      <div className="space-x-3">
                        <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSubmitPost}
                          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                        >
                          Post Discussion
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Posts */}
              <div className="space-y-4">
                {sortedPosts.map((post) => {
                  const categoryInfo = getCategoryInfo(post.category)
                  return (
                    <Card
                      key={post.id}
                      className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          {/* Avatar */}
                          <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                            <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                            <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold">
                              {post.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3 flex-wrap">
                                {post.isPinned && (
                                  <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">📌 Pinned</Badge>
                                )}
                                {post.isHot && <Badge className="bg-red-100 text-red-700 border-red-300">🔥 Hot</Badge>}
                                <Badge className={`${categoryInfo.color} border-0`}>{categoryInfo.name}</Badge>
                              </div>
                              <div className="text-sm text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatDate(post.createdAt)}
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>

                            {/* Content Preview */}
                            <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{post.content}</p>

                            {/* Tags */}
                            {post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 4).map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs bg-gray-50">
                                    #{tag}
                                  </Badge>
                                ))}
                                {post.tags.length > 4 && (
                                  <Badge variant="outline" className="text-xs bg-gray-50">
                                    +{post.tags.length - 4} more
                                  </Badge>
                                )}
                              </div>
                            )}

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <User className="w-3 h-3" />
                                <span className="font-medium">{post.author}</span>
                              </div>

                              <div className="flex items-center gap-6 text-sm text-gray-500">
                                <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                  <ThumbsUp className="w-4 h-4" />
                                  <span className="font-medium">{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                  <MessageCircle className="w-4 h-4" />
                                  <span className="font-medium">{post.replies}</span>
                                </button>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">{post.views} views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {sortedPosts.length === 0 && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No discussions found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search or category filter</p>
                    <Button
                      onClick={() => setShowNewPostForm(true)}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                    >
                      Start the First Discussion
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Load More */}
              {sortedPosts.length > 0 && (
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-600 hover:bg-green-50 rounded-full px-8"
                  >
                    Load More Discussions
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
