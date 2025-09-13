import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Product Details</h1>
        <p>Details for the selected product will appear here.</p>
      </main>
      <Footer />
    </div>
  );
}
