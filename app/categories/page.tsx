import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = [
  { name: "Vegetables", description: "Fresh and organic vegetables." },
  { name: "Groceries", description: "Daily essentials and groceries." },
  { name: "Electronics", description: "Latest gadgets and electronics." },
  { name: "Clothing", description: "Trendy and comfortable clothing." },
  { name: "Beauty", description: "Beauty and personal care products." },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-red-600 mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="border rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-red-600 mb-2">{cat.name}</h2>
              <p className="text-muted-foreground">{cat.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
