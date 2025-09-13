import Link from "next/link"
import { Package, Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-red-600">Promo Market</span>
            </Link>
            <p className="text-muted-foreground text-pretty">
              Algeria's #1 marketplace for quality products. Fast delivery, secure checkout, and unbeatable promos every day.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/ilyes.dellaoui.1" className="text-muted-foreground hover:text-red-600" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-red-600" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-red-600" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@promomarket.dz" className="text-muted-foreground hover:text-red-600" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-red-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-red-600">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-red-600">
                  Shipping Info
                </Link>
                <span className="block text-xs text-muted-foreground">Delivery in 24-72h via Promo Market Express. Coverage: All Wilayas.</span>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-red-600">
                  Returns Policy
                </Link>
                <span className="block text-xs text-muted-foreground">Easy returns within 7 days. See terms for details.</span>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-red-600">
                  Terms & Conditions
                </Link>
                <span className="block text-xs text-muted-foreground">Read our terms for shopping and delivery.</span>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-red-600">
                  Privacy Policy
                </Link>
                <span className="block text-xs text-muted-foreground">Your data is protected and never shared.</span>
              </li>
            </ul>
          </div>

          {/* Delivery & Shipping */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Delivery & Shipping</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/delivery" className="text-muted-foreground hover:text-red-600">
                  Delivery Options
                </Link>
                <span className="block text-xs text-muted-foreground">Standard & Express shipping available.</span>
              </li>
              <li>
                <Link href="/coverage" className="text-muted-foreground hover:text-red-600">
                  Coverage Areas
                </Link>
                <span className="block text-xs text-muted-foreground">Nationwide coverage in Algeria.</span>
              </li>
              <li>
                <Link href="/tracking" className="text-muted-foreground hover:text-red-600">
                  Track Order
                </Link>
                <span className="block text-xs text-muted-foreground">Track your order status online.</span>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-red-600">
                  Contact Support
                </Link>
                <span className="block text-xs text-muted-foreground">WhatsApp: +213 555 12 34 56 | Email: contact@promomarket.dz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Promo Market. All rights reserved. Powered by Promo Market Express delivery.</p>
        </div>
      </div>
    </footer>
  )
}
