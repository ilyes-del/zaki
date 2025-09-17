import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl" lang="ar">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">الشروط والأحكام</h1>
        <p>اقرأ الشروط والأحكام الخاصة بالتسوق والتوصيل.</p>
      </main>
      <Footer />
    </div>
  );
}
