import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        <h1 className="text-2xl font-bold text-red-600 mb-4">My Profile</h1>
        <p>View and edit your account details here.</p>
      </main>
      <Footer />
    </div>
  );
}
