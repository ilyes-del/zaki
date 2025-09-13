import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Terms & Conditions
        </h1>
        <p>Read our terms and conditions for shopping and delivery.</p>
      </main>
      <Footer />
    </div>
  );
}
