"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GalleryPhoto {
  id: number
  url: string
  caption: string
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [newPhoto, setNewPhoto] = useState({ url: "", caption: "" })
  const [showForm, setShowForm] = useState(false)
  const [images, setImages] = useState<Array<{ url: string; name: string }>>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAddPhoto = () => {
    if (newPhoto.url.trim()) {
      setPhotos([
        { id: Date.now(), url: newPhoto.url, caption: newPhoto.caption },
        ...photos,
      ])
      setNewPhoto({ url: "", caption: "" })
      setShowForm(false)
    }
  }

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (!files) return
    const newImages: Array<{ url: string; name: string }> = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const url = URL.createObjectURL(file)
      newImages.push({ url, name: file.name })
    }
    setImages((prev) => [...prev, ...newImages])
  }

  function openFileDialog() {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 pt-16 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Галерия</h1>
          <p className="text-lg text-gray-600 mb-6">Споделяйте и разглеждайте еко моменти от нашата общност</p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <div className="flex justify-center">
            <button
              onClick={openFileDialog}
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-green-500 hover:to-blue-500 focus:outline-none mb-8"
            >
              Качете от компютър
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.length === 0 && (
            <div className="col-span-full text-center text-gray-400 text-lg">Все още няма публикувани снимки.</div>
          )}
          {photos.map(photo => (
            <Card key={photo.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <img src={photo.url} alt={photo.caption} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4">
                  <div className="text-gray-800 font-semibold mb-2">{photo.caption}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
