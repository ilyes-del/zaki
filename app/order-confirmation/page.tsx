import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Order Confirmation
        </h1>
        <p>
          Your order has been placed! Thank you for shopping at Promo Market.
        </p>
      </main>
      <Footer />
    </div>
  );
}
