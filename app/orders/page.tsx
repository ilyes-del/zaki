import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Order History</h1>
        <p>Track your past purchases and order status.</p>
      </main>
      <Footer />
    </div>
  );
}
