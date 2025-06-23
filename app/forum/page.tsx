"use client"

import { useState, useEffect } from "react"
import { ForumPost as ForumPostType, samplePosts } from "@/lib/forumData"
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

//
import { useRouter } from "next/navigation"

export default function ForumPage() {
  const [posts, setPosts] = useState<ForumPostType[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "general",
  })
  const [visibleCount, setVisibleCount] = useState(5)
  const router = useRouter()

  const categories = [
    { id: "all", name: "Всички теми", icon: MessageSquare, color: "bg-gray-100 text-gray-600", count: 156 },
    { id: "recycling", name: "Съвети за рециклиране", icon: Recycle, color: "bg-green-100 text-green-600", count: 42 },
    { id: "environment", name: "Околна среда", icon: Globe, color: "bg-blue-100 text-blue-600", count: 38 },
    { id: "sustainability", name: "Устойчиво развитие", icon: Leaf, color: "bg-emerald-100 text-emerald-600", count: 29 },
    { id: "innovation", name: "Зелени технологии", icon: Lightbulb, color: "bg-yellow-100 text-yellow-600", count: 24 },
    { id: "lifestyle", name: "Екологичен начин на живот", icon: Star, color: "bg-purple-100 text-purple-600", count: 23 },
  ]

  useEffect(() => {
    // Ensure all samplePosts have string IDs (for safety if any local override)
    setPosts(samplePosts.map(p => ({ ...p, id: String(p.id) })))
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
  const visiblePosts = sortedPosts.slice(0, visibleCount)

  const handleSubmitPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      // Ensure id is a string to match dynamic route param type
      const maxId = posts.reduce((max, p) => {
        const pid = typeof p.id === 'string' ? parseInt(p.id, 10) : p.id
        return isNaN(pid) ? max : Math.max(max, pid)
      }, 0)
      const post: ForumPostType = {
        id: String(maxId + 1),
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

    if (diffInHours < 1) return "Току-що"
    if (diffInHours < 24) return `${diffInHours}ч. назад`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}д. назад`
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Форум</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свържете се с еко-воини от цял свят, споделяйте опит и учете от общността
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
                Нова публикация
              </Button>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Търсене в дискусиите..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-green-500 rounded-full"
                />
              </div>

              {/* Sort Options */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Подредба по</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { id: "recent", name: "Най-скорошни", icon: Clock },
                    { id: "popular", name: "Най-популярни", icon: TrendingUp },
                    { id: "replies", name: "Най-много отговори", icon: MessageCircle },
                    { id: "views", name: "Най-много прегледи", icon: Fire },
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


            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* New Post Form */}
              {showNewPostForm && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Започнете нова дискусия</CardTitle>
                    <CardDescription>Споделете мислите си с общността</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Заглавие на дискусията..."
                      value={newPost.title}
                      onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))}
                      className="border-gray-300 focus:border-green-500"
                    />
                    <Textarea
                      placeholder="Какво ви е на ума? Споделете мислите си, въпросите или опитите си..."
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
                        <option value="general">Обща дискусия</option>
                        <option value="recycling">Съвети за рециклиране</option>
                        <option value="environment">Околна среда</option>
                        <option value="sustainability">Устойчиво развитие</option>
                        <option value="innovation">Зелени технологии</option>
                        <option value="lifestyle">Екологичен начин на живот</option>
                      </select>
                      <div className="space-x-3">
                        <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                          Отказ
                        </Button>
                        <Button
                          onClick={handleSubmitPost}
                          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                        >
                          Публикувай дискусията
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Posts */}
              <div className="space-y-4">
                {visiblePosts.map((post) => {
                  const categoryInfo = getCategoryInfo(post.category)
                  const isCreator = post.author === "You"
                  // Always use string id for navigation
                  const postId = typeof post.id === 'string' ? post.id : String(post.id)
                  return (
                    <Card
                      key={postId}
                      className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div
                        onClick={() => router.push(`/forum/${postId}`)}
                        style={{ cursor: 'pointer' }}
                      >
                        <CardContent
                          className="p-6"
                          // No onClick here, so buttons inside work as expected
                        >
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
                                  <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">📌 Закрепено</Badge>
                                )}
                                {post.isHot && <Badge className="bg-red-100 text-red-700 border-red-300">🔥 Горещо</Badge>}
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
                                    +{post.tags.length - 4} още
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
                                <button className="flex items-center gap-2 hover:text-green-600 transition-colors" onClick={e => e.stopPropagation()}>
                                  <ThumbsUp className="w-4 h-4" />
                                  <span className="font-medium">{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 hover:text-blue-600 transition-colors" onClick={e => e.stopPropagation()}>
                                  <MessageCircle className="w-4 h-4" />
                                  <span className="font-medium">{post.replies}</span>
                                </button>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">{post.views} прегледа</span>
                                </div>
                                {isCreator && (
                                  <button
                                    className="ml-4 text-red-500 hover:text-red-700 font-semibold px-2 py-1 rounded transition-colors"
                                    onClick={e => {
                                      e.stopPropagation();
                                      setPosts(posts.filter(p => p.id !== post.id));
                                    }}
                                  >
                                    Изтрий
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )
                })}
              </div>

              {sortedPosts.length === 0 && (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Не са намерени дискусии</h3>
                    <p className="text-gray-500 mb-6">Опитайте да промените търсенето или филтъра на категорията</p>
                    <Button
                      onClick={() => setShowNewPostForm(true)}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                    >
                      Започнете първата дискусия
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Load More */}
              {visibleCount < sortedPosts.length && (
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-600 hover:bg-green-50 rounded-full px-8"
                    onClick={() => setVisibleCount((c) => c + 5)}
                  >
                    Заредете още дискусии
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
