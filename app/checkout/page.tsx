import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="ar">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">الدفع</h1>
        <p>أكمل طلبك وأدخل تفاصيل التوصيل.</p>
      </main>
      <Footer />
    </div>
  );
}
