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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Gallery</h1>
          <p className="text-lg text-gray-600 mb-6">Share and explore eco-friendly moments from our community</p>
          <Button onClick={() => setShowForm(!showForm)} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full">
            {showForm ? "Cancel" : "Add Photo"}
          </Button>
        </div>
        {showForm && (
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>Publish a Photo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                type="url"
                placeholder="Photo URL (e.g. https://...)"
                value={newPhoto.url}
                onChange={e => setNewPhoto(p => ({ ...p, url: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-green-500"
              />
              <input
                type="text"
                placeholder="Caption (optional)"
                value={newPhoto.caption}
                onChange={e => setNewPhoto(p => ({ ...p, caption: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-green-500"
              />
              <Button onClick={handleAddPhoto} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 w-full">
                Publish Photo
              </Button>
            </CardContent>
          </Card>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.length === 0 && (
            <div className="col-span-full text-center text-gray-400 text-lg">No photos published yet.</div>
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
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Upload Your Images</h2>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button
            onClick={openFileDialog}
            className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-green-500 hover:to-blue-500 focus:outline-none mb-8"
          >
            Upload from computer
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.length === 0 ? (
              <div className="col-span-full text-gray-400 text-lg">No photos published yet.</div>
            ) : (
              images.map((img, idx) => (
                <a
                  key={idx}
                  href={img.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border rounded overflow-hidden hover:shadow-lg transition"
                >
                  <Image
                    src={img.url}
                    alt={img.name}
                    width={300}
                    height={200}
                    className="object-cover w-full h-40"
                  />
                </a>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
