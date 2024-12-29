import { NavBar } from "./Components/Navbar"
import { HeroSection } from "./Components/Hero-Section"
import { TrendingSection } from "./Components/Tending-Section"
import { MarketplaceSection } from "./Components/Marketplace-Section"
import { CreatorSection } from "./Components/Creator-Section"
import { NewsletterSection } from "./Components/Newsletter-Section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <NavBar />
      <main>
        <HeroSection />
        <TrendingSection />
        <MarketplaceSection />
        <CreatorSection />
        <NewsletterSection />
      </main>
      <footer className="py-6 text-center text-sm text-gray-400">
        <p>© 2024 - NFT NFTKING. All rights reserved.</p>
      </footer>
    </div>
  )
}