"use client"
import { ForumPost, samplePosts } from "@/lib/forumData"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

export default function ForumPostPage({ params }: { params: { id: string } }) {
  const postId = params.id
  const post = samplePosts.find((p) => String(p.id) === postId)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Discussion not found</h3>
              <p className="text-gray-500 mb-6">The discussion you are looking for does not exist.</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mt-16">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">{post.title}</CardTitle>
            <CardDescription className="flex items-center gap-3 text-gray-500">
              <Avatar className="w-8 h-8">
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{post.author}</span>
              <span className="flex items-center gap-1 text-xs">
                <Clock className="w-3 h-3" />
                {new Date(post.createdAt).toLocaleString()}
              </span>
              <Badge variant="secondary">{post.category}</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none text-gray-700 mb-6">{post.content}</div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-gray-50">#{tag}</Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
