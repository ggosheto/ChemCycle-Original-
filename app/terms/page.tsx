"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
          <svg className="w-8 h-8 text-green-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2m-1.636 6.364l-1.414-1.414M12 22v-2m-6.364-1.636l1.414-1.414M2 12h2m1.636-6.364l1.414 1.414" /></svg>
          Terms of Service
        </h1>
        <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-400 text-green-800 rounded animate-fade-in">
          <strong>Welcome!</strong> Please review our terms to understand your rights and responsibilities.
        </div>
        <div className="space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              1. Acceptance of Terms
            </h2>
            <p>By creating an account or using Chemcycle, you agree to these Terms of Service. Please read them carefully.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" /></svg>
              2. User Responsibilities
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                Provide accurate information during registration.
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                Do not use the platform for unlawful or harmful activities.
              </li>
              <li className="flex items-center gap-2 group">
                <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                Respect other users and the community guidelines.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-purple-600 flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              3. Content
            </h2>
            <p>You are responsible for any content you post. Chemcycle may remove content that violates our policies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-cyan-600 flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              4. Changes to Terms
            </h2>
            <p>We may update these terms at any time. Continued use of the platform means you accept the new terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              5. Contact
            </h2>
            <p>If you have questions about these terms, contact us at <a href="mailto:hello@chemcycle.com" className="underline text-emerald-700 hover:text-emerald-900">hello@chemcycle.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
