"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
        <div className="prose max-w-none text-gray-700">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide when you create an account, such as your email address and name.</p>
          <h2>2. How We Use Information</h2>
          <ul>
            <li>To provide and improve our services.</li>
            <li>To communicate with you about updates and features.</li>
            <li>To protect the security of our users and platform.</li>
          </ul>
          <h2>3. Data Sharing</h2>
          <p>We DO NOT sell your personal information. We may share data with trusted partners to operate Chemcycle.</p>
          <h2>4. Your Choices</h2>
          <p>You can update or delete your account information at any time.</p>
          <h2>5. Contact</h2>
          <p>If you have questions about this policy, contact us at hello@chemcycle.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
