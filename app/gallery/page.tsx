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
  const [photoGroups, setPhotoGroups] = useState<PhotoGroup[]>([])
  const [groupImages, setGroupImages] = useState<Array<{ url: string; name: string }>>([])
  const [groupDescription, setGroupDescription] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  interface PhotoGroup {
    id: number;
    images: Array<{ url: string; name: string }>,
    description: string;
  }

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

  function handleGroupUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (!files) return
    const newImages: Array<{ url: string; name: string }> = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const url = URL.createObjectURL(file)
      newImages.push({ url, name: file.name })
    }
    setGroupImages(newImages)
  }

  function handlePublishGroup() {
    if (groupImages.length === 0 && !groupDescription.trim()) return
    setPhotoGroups([
      { id: Date.now(), images: groupImages, description: groupDescription },
      ...photoGroups,
    ])
    setGroupImages([])
    setGroupDescription("")
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
            onChange={handleGroupUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <div className="flex justify-center">
            <button
              onClick={openFileDialog}
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-green-500 hover:to-blue-500 focus:outline-none mb-4"
            >
              Качете от компютър
            </button>
          </div>
          {groupImages.length > 0 && (
            <div className="mb-4 flex flex-wrap justify-center gap-4">
              {groupImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl p-1 bg-gradient-to-tr from-green-400 via-blue-400 to-emerald-400 shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1"
                  style={{ minWidth: 130, minHeight: 90 }}
                >
                  <Image
                    src={img.url}
                    alt={img.name}
                    width={120}
                    height={80}
                    className="object-cover rounded-xl border-4 border-white group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-4 group-hover:ring-blue-300/40 transition-all duration-300" />
                </div>
              ))}
            </div>
          )}
          <div className="max-w-xl mx-auto mb-8">
            <textarea
              placeholder="Добавете описание към снимките (по избор)"
              value={groupDescription}
              onChange={e => setGroupDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-green-500 mb-2"
              rows={2}
            />
            <button
              onClick={handlePublishGroup}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow w-full"
            >
              Публикувай снимките
            </button>
          </div>
        </div>
        <div className="space-y-10">
          {photoGroups.length === 0 && (
            <div className="col-span-full text-center text-gray-400 text-lg">Все още няма публикувани снимки.</div>
          )}
          {photoGroups.map(group => (
            <Card key={group.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                  {group.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative group rounded-2xl p-1 bg-gradient-to-tr from-green-400 via-blue-400 to-emerald-400 shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-2"
                      style={{ minWidth: 210, minHeight: 150 }}
                    >
                      <Image
                        src={img.url}
                        alt={img.name}
                        width={200}
                        height={140}
                        className="object-cover rounded-xl border-4 border-white group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-4 group-hover:ring-blue-300/40 transition-all duration-300" />
                    </div>
                  ))}
                </div>
                {group.description && (
                  <div className="text-gray-800 font-semibold text-center mt-2 mb-4">{group.description}</div>
                )}
                <div className="flex justify-center">
                  <button
                    onClick={() => setPhotoGroups(photoGroups.filter(g => g.id !== group.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold shadow"
                  >
                    Изтрий публикацията
                  </button>
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
