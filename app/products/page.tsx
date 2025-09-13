import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Products</h1>
        <p>Browse all products available at Promo Market.</p>
      </main>
      <Footer />
    </div>
  );
}
