"use client"

import { useState, useRef, Fragment, useEffect } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-12">
        <div className="text-3xl font-bold text-gray-600 text-center">
          The page is under maintenance break. It will be published soon
        </div>
      </main>
      <Footer />
    </>
  )
}

