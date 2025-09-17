import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="ar">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">اتصل بنا</h1>
        <p>
          واتساب: +213 555 12 34 56
          <br />
          البريد الإلكتروني: contact@promomarket.dz
          <br />
          العنوان: الجزائر العاصمة، الجزائر
        </p>
      </main>
      <Footer />
    </div>
  );
}
