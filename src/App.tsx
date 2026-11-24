import LycorisSpecimen from "@/components/ui/lycoris-specimen"
import ScrollBaseAnimation from "@/components/ui/scroll-text-marquee"
import KitchenSection from "@/components/kitchen-section"
import GallerySection, { BAR_PHOTOS } from "@/components/gallery-section"
import KitchenGallery from "@/components/kitchen-gallery"
import CocktailHourSection from "@/components/cocktail-hour-section"
import EventsSection from "@/components/events-section"
import CateringSection from "@/components/catering-section"
import ContactSection from "@/components/contact-section"
import RatingsBand from "@/components/ratings-band"
import SiteHeader from "@/components/site-header"
import CocktailsSection from "@/components/cocktails-section"
import VisitSection from "@/components/visit-section"
import SiteFooter from "@/components/site-footer"
import { LangProvider, useT } from "@/lib/i18n"
import { MAPS } from "@/lib/venue"

function Site() {
  const t = useT()
  return (
    <>
    <SiteHeader />
    <main id="main" className="w-full">
      <div id="top" />
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
        studio="Zirgu iela 3 · Vecrīga"
        description={t(
          "The Snuggest is a cosy cocktail bar & kitchen on Zirgu iela 3 in Old Town Riga. Twenty-one cocktails for 5 € every evening, smash burgers, a handmade Turkish kitchen, karaoke and events.",
        )}
        specs={[
          t("21 cocktails at 5 €"),
          t("Cocktail Hour daily 18:00–20:00"),
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
        bloomCaption={t("Cocktail Hour · every day 18:00–20:00")}
        multilingual="Prie·kā!"
        ligatureWord={t("Cocktails")}
        finale={{
          over: t("On the menu tonight"),
          href: "#cocktails",
          facts: [
            [t("Cocktails"), t("21 at 5 €")],
            [t("Kitchen"), t("until late")],
            [t("Nights"), t("Karaoke & events")],
          ],
          translation: t("Cheers, in Latvian"),
        }}
        stack={[t("Shaken"), t("Stirred"), t("Served")]}
        nav={[t("Welcome"), t("Shaken"), t("Tonight"), t("Cheers")]}
        links={[
          { label: "INSTAGRAM @THESNUGGEST", href: "https://www.instagram.com/thesnuggest/" },
          { label: "ZIRGU IELA 3 · RĪGA", href: MAPS },
        ]}
        logoSrc="/img/logo-sm.webp"
        emblemSrc="/img/panda-round.webp"
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
          {t("Cocktails · Handmade Turkish kitchen · Karaoke & events · ")}
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

      <CocktailHourSection />

      <CocktailsSection />
      <GallerySection id="bar-gallery" eyebrow={t("The bar")} title={t("A night at The Snuggest")} photos={BAR_PHOTOS} tone="green" />
      <EventsSection />
      <KitchenSection />
      <KitchenGallery />
      <RatingsBand />
      <CateringSection />
      <VisitSection />
      <ContactSection />
    </main>
    <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}
