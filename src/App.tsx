import LycorisSpecimen from "@/components/ui/lycoris-specimen"
import TickerRingCta from "@/components/ui/ticker-ring-cta"
import ScrollBaseAnimation from "@/components/ui/scroll-text-marquee"
import KitchenSection from "@/components/kitchen-section"
import GallerySection, { BAR_PHOTOS, KITCHEN_PHOTOS } from "@/components/gallery-section"
import CocktailsSection from "@/components/cocktails-section"
import VisitSection from "@/components/visit-section"
import SiteFooter from "@/components/site-footer"

export default function App() {
  return (
    <main className="w-full">
      <LycorisSpecimen
        name="Snuggest"
        studio="Zirgu iela 3 · Vecrīga"
        description="The Snuggest is a cosy cocktail bar & kitchen on Zirgu iela 3 in Old Town Riga. Twenty-one cocktails for 5 € every evening, smash burgers, a proper Turkish kitchen and Music Bingo nights."
        specs={[
          "21 cocktails at 5 €",
          "Cocktail Hour daily from 18:00",
          "Smash burgers & Turkish kitchen",
          "Craft beer & beer cocktails",
          "4.9 ★ on Google",
        ]}
        tagline={[
          { text: "Sip" },
          { text: "slow in", small: true },
          { text: "Old Town" },
          { text: "every evening", small: true },
        ]}
        multilingual="Prie·kā!"
        ligatureWord="Cocktails"
        links={[
          { label: "INSTAGRAM @THESNUGGEST", href: "https://www.instagram.com/thesnuggest/" },
          { label: "ZIRGU IELA 3 · RĪGA", href: "https://www.google.com/maps/search/?api=1&query=The+Snuggest+Zirgu+iela+3+Riga" },
        ]}
        logoSrc="/img/logo-sm.webp"
        specimen={{
          left: [
            ["CLASSICS", ["Mojito", "Aperol Spritz", "Moscow Mule"]],
            ["HOUSE", ["Snug Peach Gin", "Pistachio Dream"]],
            ["SHOTS", ["The Snuggest", "Black Angel"]],
          ],
          right: [
            ["BEER COCKTAILS", ["Istanbul City", "Antalya Sun", "Troia"]],
            ["KITCHEN", ["Smash Burger", "Lahmacun"]],
            ["WINTER", ["Mulled Wine", "Hot Amaretto"]],
          ],
          prices: {
            "Mojito": "8.00 € · 5 € IN COCKTAIL HOUR",
            "Aperol Spritz": "8.00 € · 5 € IN COCKTAIL HOUR",
            "Moscow Mule": "9.00 € · 5 € IN COCKTAIL HOUR",
            "Snug Peach Gin": "8.50 € · 5 € IN COCKTAIL HOUR",
            "Pistachio Dream": "9.50 €",
            "The Snuggest": "3.00 € · SHOT",
            "Black Angel": "3.00 € · SHOT",
            "Istanbul City": "8.00 € · 5 € IN COCKTAIL HOUR",
            "Antalya Sun": "8.00 € · 5 € IN COCKTAIL HOUR",
            "Troia": "8.00 € · 5 € IN COCKTAIL HOUR",
            "Smash Burger": "10.00 € · WITH FRIES",
            "Lahmacun": "10.00 € · 2 PCS",
            "Mulled Wine": "5.00 €",
            "Hot Amaretto": "8.00 €",
          },
        }}
        sceneScroll={0.9}
        ink="#0A241A"
        bone="#F4ECD9"
        crimson="#EC7A2C"
      />

      <section aria-label="The Snuggest" className="overflow-hidden border-y border-[#D9AE55]/25 bg-[#0A241A] py-10 sm:py-14">
        <ScrollBaseAnimation
          delay={300}
          baseVelocity={-2}
          scrollDependent
          clasname="font-[Federant,Georgia,serif] leading-[1] text-[#F4ECD9]"
        >
          {"Cocktails · Turkish kitchen · Music Bingo · "}
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={300}
          baseVelocity={2}
          scrollDependent
          clasname="font-[Federant,Georgia,serif] leading-[1] text-transparent [-webkit-text-stroke:1px_#D9AE55]"
        >
          {"Zirgu iela 3 · Vecrīga · Rīga · "}
        </ScrollBaseAnimation>
      </section>

      <TickerRingCta
        className="snug-cta"
        theme="night"
        eyebrow="Cocktail Hour · every day"
        headline={<>21 cocktails, <em>5 €</em> a glass.</>}
        sub="Mojito, Espresso Martini, Aperol Spritz, our Istanbul City beer cocktail and the house Snug Peach Gin — at the bar, every single evening."
        action="Get directions"
        href="https://www.google.com/maps/search/?api=1&query=The+Snuggest+Zirgu+iela+3+Riga"
        secondary={{ label: "Follow @thesnuggest", href: "https://www.instagram.com/thesnuggest/" }}
        ticker={[
          "Sun–Thu 18:00–21:00",
          "Fri–Sat 18:00–20:00",
          "21 cocktails · 5 €",
          "Zirgu iela 3 · Vecrīga",
          "In the bar only",
        ]}
      />

      <CocktailsSection />
      <GallerySection id="bar-gallery" eyebrow="The bar" title="A night at The Snuggest" photos={BAR_PHOTOS} tone="green" />
      <KitchenSection />
      <GallerySection id="kitchen-gallery" eyebrow="Gallery" title="Snuggest Kitchen" photos={KITCHEN_PHOTOS} />
      <VisitSection />
      <SiteFooter />
    </main>
  )
}
