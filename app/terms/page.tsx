"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Terms of Service</h1>
        <div className="prose max-w-none text-gray-700">
          <h2>1. Acceptance of Terms</h2>
          <p>By creating an account or using Chemcycle, you agree to these Terms of Service. Please read them carefully.</p>
          <h2>2. User Responsibilities</h2>
          <ul>
            <li>Provide accurate information during registration.</li>
            <li>Do not use the platform for unlawful or harmful activities.</li>
            <li>Respect other users and the community guidelines.</li>
          </ul>
          <h2>3. Content</h2>
          <p>You are responsible for any content you post. Chemcycle may remove content that violates our policies.</p>
          <h2>4. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the platform means you accept the new terms.</p>
          <h2>5. Contact</h2>
          <p>If you have questions about these terms, contact us at hello@chemcycle.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
