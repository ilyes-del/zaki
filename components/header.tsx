"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Menu, User, Package } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Promo Market</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link href="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Categories
              </Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
