import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Returns Policy</h1>
        <p>Easy returns within 7 days. See details here.</p>
      </main>
      <Footer />
    </div>
  );
}
