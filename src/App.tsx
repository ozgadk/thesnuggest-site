import LycorisSpecimen from "@/components/ui/lycoris-specimen"
import TickerRingCta from "@/components/ui/ticker-ring-cta"
import ScrollBaseAnimation from "@/components/ui/scroll-text-marquee"
import KitchenSection from "@/components/kitchen-section"
import GallerySection, { BAR_PHOTOS, KITCHEN_PHOTOS } from "@/components/gallery-section"
import CocktailsSection from "@/components/cocktails-section"
import VisitSection from "@/components/visit-section"
import SiteFooter from "@/components/site-footer"
import LanguageSwitcher from "@/components/language-switcher"
import { LangProvider, useT } from "@/lib/i18n"

const MAPS = "https://www.google.com/maps/search/?api=1&query=The+Snuggest+Zirgu+iela+3+Riga"

function Site() {
  const t = useT()
  const hh = t("5 € IN COCKTAIL HOUR")
  return (
    <main className="w-full">
      <LycorisSpecimen
        name="Snuggest"
        kicker={t("Cocktail bar & kitchen")}
        overline={t("The")}
        stamp={[t("Cocktails"), t("Kitchen"), "Vecrīga"]}
        place={{ big: "Rīga", lines: ["Zirgu iela 3", t("Old Town")] }}
        colophon={[
          [t("Cocktail Hour"), t("5 € daily")],
          [t("Kitchen"), t("Smash & Turkish")],
          [t("Open"), t("Tue – Sun")],
          ["Zirgu iela 3", "Vecrīga"],
        ]}
        crownCaption={t("Pull up a stool")}
        studio="Zirgu iela 3 · Vecrīga"
        description={t(
          "The Snuggest is a cosy cocktail bar & kitchen on Zirgu iela 3 in Old Town Riga. Twenty-one cocktails for 5 € every evening, smash burgers, a proper Turkish kitchen and Music Bingo nights.",
        )}
        specs={[
          t("21 cocktails at 5 €"),
          t("Cocktail Hour daily from 18:00"),
          t("Smash burgers & Turkish kitchen"),
          t("Craft beer & beer cocktails"),
          t("4.9 ★ on Google"),
        ]}
        tagline={[
          { text: t("Sip") },
          { text: t("slow in"), small: true },
          { text: t("Old Town") },
          { text: t("every evening"), small: true },
        ]}
        bloomCaption={t("Cocktail Hour · every evening from 18:00")}
        multilingual="Prie·kā!"
        ligatureWord={t("Cocktails")}
        finale={{
          over: t("On the menu tonight"),
          href: "#cocktails",
          facts: [
            [t("Cocktails"), t("21 at 5 €")],
            [t("Kitchen"), t("until late")],
            [t("Nights"), "Music Bingo"],
          ],
          translation: t("Cheers, in Latvian"),
        }}
        stack={[t("Shaken"), t("Stirred"), t("Served")]}
        ribbon={t("21 cocktails · 5 € · every evening from 18:00 · Zirgu iela 3")}
        nav={[t("Welcome"), t("The bar"), t("Menu"), t("Shaken"), t("Tonight"), t("Cheers")]}
        labels={{ menu: t("Menu"), idle: t("Cheers"), hover: t("HOVER A DRINK"), onMenu: t("ON THE MENU") }}
        links={[
          { label: "INSTAGRAM @THESNUGGEST", href: "https://www.instagram.com/thesnuggest/" },
          { label: "ZIRGU IELA 3 · RĪGA", href: MAPS },
        ]}
        logoSrc="/img/logo-sm.webp"
        emblemSrc="/img/panda-round.webp"
        specimen={{
          left: [
            [t("CLASSICS"), ["Mojito", "Aperol Spritz", "Moscow Mule"]],
            [t("HOUSE"), ["Snug Peach Gin", "Pistachio Dream"]],
            [t("SHOTS"), ["The Snuggest", "Black Angel"]],
          ],
          right: [
            [t("BEER COCKTAILS"), ["Istanbul City", "Antalya Sun", "Troia"]],
            [t("KITCHEN"), ["Smash Burger", "Lahmacun"]],
            [t("WINTER"), ["Mulled Wine", "Hot Amaretto"]],
          ],
          prices: {
            Mojito: "8.00 € · " + hh,
            "Aperol Spritz": "8.00 € · " + hh,
            "Moscow Mule": "9.00 € · " + hh,
            "Snug Peach Gin": "8.50 € · " + hh,
            "Pistachio Dream": "9.50 €",
            "The Snuggest": "3.00 € · " + t("SHOT"),
            "Black Angel": "3.00 € · " + t("SHOT"),
            "Istanbul City": "8.00 € · " + hh,
            "Antalya Sun": "8.00 € · " + hh,
            Troia: "8.00 € · " + hh,
            "Smash Burger": "10.00 € · " + t("WITH FRIES"),
            Lahmacun: "10.00 € · " + t("2 PCS"),
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
          {t("Cocktails · Turkish kitchen · Music Bingo · ")}
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
        eyebrow={t("Cocktail Hour · every day")}
        headline={
          <>
            {t("21 cocktails,")} <em>5 €</em> {t("a glass.")}
          </>
        }
        sub={t(
          "Mojito, Espresso Martini, Aperol Spritz, our Istanbul City beer cocktail and the house Snug Peach Gin — at the bar, every single evening.",
        )}
        action={t("Get directions")}
        href={MAPS}
        secondary={{ label: t("Follow @thesnuggest"), href: "https://www.instagram.com/thesnuggest/" }}
        ticker={[t("Sun–Thu 18:00–21:00"), t("Fri–Sat 18:00–20:00"), t("21 cocktails · 5 €"), "Zirgu iela 3 · Vecrīga", t("In the bar only")]}
      />

      <CocktailsSection />
      <GallerySection id="bar-gallery" eyebrow={t("The bar")} title={t("A night at The Snuggest")} photos={BAR_PHOTOS} tone="green" />
      <KitchenSection />
      <GallerySection id="kitchen-gallery" eyebrow={t("Gallery")} title={t("Snuggest Kitchen")} photos={KITCHEN_PHOTOS} />
      <VisitSection />
      <SiteFooter />
      <LanguageSwitcher />
    </main>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}
