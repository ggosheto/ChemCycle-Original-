import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerSections = {
    platform: {
      title: "Platform",
      links: [
        { name: "Carbon Calculator", href: "/calculator" },
        { name: "Community Forum", href: "/forum" },
        { name: "Eco Blog", href: "/blog" },
        { name: "Impact Tracker", href: "/tracker" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Recycling Guide", href: "/guide" },
        { name: "Sustainability Tips", href: "/tips" },
        { name: "Research Library", href: "/research" },
        { name: "Help Center", href: "/help" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  }

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", name: "Instagram", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:text-blue-700" },
    { icon: Youtube, href: "#", name: "YouTube", color: "hover:text-red-600" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=800')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Green News</h3>
            <p className="text-green-100 text-lg mb-8">
              Get the latest environmental insights, tips, and community updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
              />
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Chemcycle
                </span>
                <div className="text-sm text-green-200 -mt-1">Green Future</div>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering individuals and communities to create a sustainable future through innovative recycling
              solutions and environmental education.
            </p>

            {/* Contact and social links removed as requested */}
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-6 text-green-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Chemcycle. All rights reserved. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for our planet.</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🌱 Carbon Neutral Hosting</span>
              <span>♻️ 100% Renewable Energy</span>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-green-300 font-medium">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
            <p className="text-gray-400 text-sm mt-2">- Chinese Proverb</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
