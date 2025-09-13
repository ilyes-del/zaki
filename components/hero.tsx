import { Button } from "@/components/ui/button"
import { ArrowRight, Truck } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Truck className="mr-2 h-4 w-4" />
            Fast delivery with ZR Express
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Premium Products,
            <span className="text-primary"> Lightning Fast</span> Delivery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            Discover our curated collection of premium products with same-day delivery powered by ZR Express. Quality
            you can trust, speed you can count on.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/products">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30" />
        </div>
      </div>
    </section>
  )
}
