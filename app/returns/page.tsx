import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="ar">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">سياسة الإرجاع</h1>
        <p>إرجاع سهل خلال 7 أيام. راجع التفاصيل هنا.</p>
      </main>
      <Footer />
    </div>
  );
}
