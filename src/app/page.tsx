import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Activities } from "@/components/activities";
import { Testimonials } from "@/components/testimonials-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Problem />
            <Activities />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
}