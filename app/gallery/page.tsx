"use client"

import { useState, useRef, Fragment, useEffect } from "react"
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
  const [modalOpen, setModalOpen] = useState(false)
  const [modalGroup, setModalGroup] = useState<PhotoGroup | null>(null)
  const [modalIndex, setModalIndex] = useState(0)
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
      // Only accept image files
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file)
        newImages.push({ url, name: file.name })
      }
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

  // Load photoGroups from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("photoGroups")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setPhotoGroups(parsed)
      } catch {}
    }
  }, [])

  // Save photoGroups to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("photoGroups", JSON.stringify(photoGroups))
  }, [photoGroups])

  // Optional: close modal on ESC
  useEffect(() => {
    if (!modalOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false)
      if (e.key === "ArrowRight" && modalGroup && modalIndex < modalGroup.images.length - 1) setModalIndex(i => i + 1)
      if (e.key === "ArrowLeft" && modalGroup && modalIndex > 0) setModalIndex(i => i - 1)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [modalOpen, modalGroup, modalIndex])

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
                      className="relative group rounded-2xl p-1 bg-gradient-to-tr from-green-400 via-blue-400 to-emerald-400 shadow-xl transition-all duration-300 hover:scale-105 hover:-rotate-2 cursor-pointer"
                      style={{ minWidth: 210, minHeight: 150 }}
                      onClick={() => {
                        setModalGroup(group)
                        setModalIndex(idx)
                        setModalOpen(true)
                      }}
                    >
                      {/* Always display the image, fallback only if image fails */}
                      <Image
                        src={img.url}
                        alt={img.name}
                        width={200}
                        height={140}
                        className="object-cover rounded-xl border-4 border-white group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-300 bg-gradient-to-tr from-green-200 via-blue-200 to-emerald-200"
                        onError={e => {
                          // fallback to a placeholder if image fails to load
                          (e.target as HTMLImageElement).src = "/placeholder-image.png"
                        }}
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
      {/* Modal for photo group */}
      {modalOpen && modalGroup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 flex flex-col items-center">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModalOpen(false)}
              aria-label="Затвори"
            >
              &times;
            </button>
            <div className="flex items-center justify-center w-full mb-4">
              <button
                className="text-3xl px-2 py-1 rounded-full hover:bg-blue-100 disabled:opacity-30"
                onClick={() => setModalIndex(i => i - 1)}
                disabled={modalIndex === 0}
                aria-label="Предишна снимка"
              >
                &#8592;
              </button>
              <div className="mx-4 flex-1 flex justify-center">
                <Image
                  src={modalGroup.images[modalIndex].url}
                  alt={modalGroup.images[modalIndex].name}
                  width={400}
                  height={280}
                  className="rounded-xl border-4 border-blue-200 shadow-lg object-contain max-h-[60vh] bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50"
                />
              </div>
              <button
                className="text-3xl px-2 py-1 rounded-full hover:bg-blue-100 disabled:opacity-30"
                onClick={() => setModalIndex(i => i + 1)}
                disabled={modalIndex === modalGroup.images.length - 1}
                aria-label="Следваща снимка"
              >
                &#8594;
              </button>
            </div>
            <div className="flex gap-2 mb-2">
              {modalGroup.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`w-4 h-4 rounded-full border-2 ${idx === modalIndex ? "bg-blue-400 border-blue-600" : "bg-gray-200 border-gray-400"} transition-all`}
                  onClick={() => setModalIndex(idx)}
                  aria-label={`Покажи снимка ${idx + 1}`}
                />
              ))}
            </div>
            {modalGroup.description && (
              <div className="text-gray-700 text-center font-medium mt-2">{modalGroup.description}</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
