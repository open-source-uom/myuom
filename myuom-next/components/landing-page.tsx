import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { NewsSection } from '@/components/news-section'
import { ServicesSection } from '@/components/services-section'
import { StatsSection } from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <HeroSection />
                <StatsSection />
                <ServicesSection />
                <FeaturesSection />
                <NewsSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}
