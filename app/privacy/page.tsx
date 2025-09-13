import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Privacy Policy</h1>
        <p>Your privacy is important to us. Read our policy here.</p>
      </main>
      <Footer />
    </div>
  );
}
