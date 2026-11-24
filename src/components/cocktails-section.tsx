import * as React from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { Martini } from "lucide-react"
import { cn } from "@/lib/utils"
import { SplitReveal, ParallaxImg } from "@/components/motion-kit"
import { useT } from "@/lib/i18n"

type Drink = { n: string; d?: string; p: string; hh?: boolean; sig?: boolean; isNew?: boolean; img?: string }
type Group = { id: string; label: string; note?: string; items: Drink[] }

/** The Snuggest bar menu (prices in €). `hh` = 5 € during Cocktail Hour. */
const MENU: Group[] = [
  {
    id: "hot",
    label: "Hot cocktails",
    note: "Our winter menu — warm glasses for cold Riga evenings.",
    items: [
      { n: "Snug Mulled Wine", d: "Red wine, orange, cinnamon, clove, star anise", p: "5.00" },
      { n: "Black Tea Toddy", d: "Black tea, Irish whiskey, honey, lemon, clove", p: "8.00", sig: true },
      { n: "Winter Mancolada", d: "Spiced rum, coconut cream, warm pineapple, lemon, cinnamon", p: "8.00" },
      { n: "Hot Amaretto", d: "Amaretto, bourbon, lemon, honey, hot water, orange peel", p: "8.00" },
      { n: "Pistachio Winter Dream", d: "Pistachio cream liqueur, vodka, hot milk, vanilla", p: "8.00" },
      { n: "Hot Pomegranate Mystery", d: "Dark rum, warm pomegranate juice & sauce, blackberry syrup, cinnamon", p: "8.00", isNew: true },
    ],
  },
  {
    id: "house",
    label: "House favourites",
    note: "Our own recipes and the ones regulars keep coming back for.",
    items: [
      { n: "Snug Peach Gin", d: "Peach liqueur, gin, tonic", p: "8.50", hh: true, sig: true },
      { n: "Pistachio Dream", d: "Pistachio, vodka, milk, vanilla", p: "9.50", sig: true, img: "/img/cocktails/pistachio-dream.webp" },
      { n: "Mystery of the Pomegranate", d: "Vodka, pomegranate sauce & juice, blackberry syrup", p: "9.00", sig: true },
      { n: "Mancolada", d: "Captain Morgan, coconut cream, pineapple, lemon juice", p: "9.00" },
      { n: "Espresso Martini", d: "Vodka, coffee liqueur, simple syrup, espresso", p: "9.00", hh: true },
      { n: "Bramble", d: "Pink gin, lemon juice, blackberry syrup, tonic", p: "9.00", hh: true },
      { n: "Tequila Sunrise", d: "Tequila, orange juice, grenadine", p: "8.00", hh: true },
      { n: "Amaretto Sour", d: "Amaretto, bourbon, lemon juice, simple syrup, egg white", p: "9.00" },
      { n: "Gin Fizz", d: "Gin, lime juice, tonic, sugar, egg white", p: "8.00" },
    ],
  },
  {
    id: "beer",
    label: "Beer cocktails",
    note: "Named after home. You won't find these anywhere else in Riga.",
    items: [
      { n: "Istanbul City", d: "Beer, amaretto, orange liqueur", p: "8.00", hh: true, sig: true },
      { n: "Antalya Sun", d: "Beer, tequila, Malibu, simple syrup", p: "8.00", hh: true, sig: true },
      { n: "Anatolian", d: "Beer, cherry liqueur, peppermint syrup", p: "8.00", hh: true, sig: true },
      { n: "Troia", d: "Beer, ouzo, Jägermeister, lemon", p: "8.00", hh: true, sig: true },
      { n: "Mexican", d: "Beer, tequila, lemon juice, salt", p: "8.00", hh: true, sig: true },
    ],
  },
  {
    id: "classics",
    label: "Classics",
    items: [
      { n: "Classic Mojito", d: "Rum, fresh lime, mint, sugar, soda", p: "8.00", hh: true, img: "/img/cocktails/mojito.webp" },
      { n: "Aperol Spritz", d: "Prosecco, Aperol, tonic", p: "8.00", hh: true },
      { n: "Hugo Spritz", d: "Prosecco, elderflower syrup, soda, mint, lime", p: "8.00", hh: true },
      { n: "Moscow Mule", d: "Vodka, lime juice, ginger beer, mint", p: "9.00", hh: true },
      { n: "Cuba Libre", d: "White rum, cola, lemon juice", p: "8.00" },
      { n: "Tom Collins", d: "Gin, lemon juice, soda, simple syrup", p: "8.00" },
      { n: "Hemingway Special", d: "White rum, grapefruit, cherry liqueur, lemon juice", p: "9.00", img: "/img/cocktails/hemingway-special.webp" },
      { n: "Blue Lady Sour", d: "Gin, blue curaçao, lime, simple syrup, egg white", p: "9.00" },
      { n: "Long Island Iced Tea", d: "Tequila, vodka, gin, white rum, orange liqueur, cola", p: "10.00", img: "/img/cocktails/long-island.webp" },
    ],
  },
  {
    id: "virgin",
    label: "Alcohol-free",
    items: [
      { n: "Virgin Mojito", d: "Lime, mint, brown sugar, soda", p: "6.00", hh: true },
      { n: "Piña Colada", d: "Pineapple juice, coconut milk, lemon juice, sugar syrup", p: "6.00", hh: true },
      { n: "Sunset Cooler", d: "Orange juice, grenadine, lemon juice, soda", p: "6.00", hh: true },
      { n: "Green Apple Spritz", d: "Apple juice, lime, sugar syrup, soda", p: "6.00", hh: true },
    ],
  },
  {
    id: "wine",
    label: "Wine & Prosecco",
    note: "By the glass (150 ml) or the bottle (750 ml).",
    items: [
      { n: "Red Wine", d: "Glass 150 ml · bottle 750 ml", p: "6.00 / 27.00" },
      { n: "White Wine", d: "Glass 150 ml · bottle 750 ml", p: "6.00 / 27.00" },
      { n: "Rosé Wine", d: "Glass 150 ml · bottle 750 ml", p: "6.00 / 27.00" },
      { n: "Prosecco", d: "Glass 150 ml · bottle 750 ml", p: "6.00 / 27.00" },
    ],
  },
  {
    id: "shots",
    label: "Shots",
    items: [
      { n: "The Snuggest", d: "Vodka, Malibu, blackberry syrup", p: "3.00", sig: true },
      { n: "Mexican Strawberry", d: "Tequila, strawberry liqueur, mint syrup", p: "3.00" },
      { n: "Black Angel", d: "Black Balsam, cream liqueur, coffee liqueur", p: "3.00" },
      { n: "Midnight Tropic", d: "Banana liqueur, coffee liqueur, blue curaçao", p: "3.00" },
      { n: "Meter Cocktail ×8", d: "Eight shots in a row, for the whole table", p: "20.00" },
    ],
  },
]

/** Our own photos from the bar. */
const STRIP: { src: string; alt: string; caption?: string }[] = [
  { src: "/img/cocktails/hemingway-special.webp", alt: "Hemingway Special in a coupe glass with two cherries, at the Snuggest bar", caption: "Hemingway Special" },
  { src: "/img/cocktails/mojito.webp", alt: "Classic Mojito with mint and a dried lime wheel on the bar counter", caption: "Classic Mojito" },
  { src: "/img/cocktails/long-island.webp", alt: "Long Island Iced Tea with a paper umbrella", caption: "Long Island Iced Tea" },
  { src: "/img/cocktails/pistachio-dream.webp", alt: "Pistachio Dream cocktail topped with cream and crushed pistachio", caption: "Pistachio Dream" },
]

export default function CocktailsSection() {
  const [tab, setTab] = React.useState(MENU[0].id)
  const reduce = useReducedMotion()
  const t = useT()
  const group = MENU.find((g) => g.id === tab)!
  const tabs = React.useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const j = (i + dir + MENU.length) % MENU.length
    setTab(MENU[j].id)
    tabs.current[j]?.focus()
  }

  return (
    <section id="cocktails" className="relative overflow-hidden bg-[#0A241A] px-4 py-20 sm:px-8 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(236,122,44,0.16),transparent)]"
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("The bar")}</p>
            <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
              <SplitReveal text={t("Cocktails")} />
            </h2>
          </div>
          <p className="max-w-[44ch] text-[16px] leading-relaxed text-[#F4ECD9]/70">
            {t("House signatures, beer cocktails named after Istanbul and Antalya, and every classic you'd hope for.")}
          </p>
        </div>

        {/* photos from the bar */}
        <div className="-mx-4 mb-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
          {STRIP.map((ph, i) => (
            <motion.figure
              key={ph.src}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[70%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#D9AE55]/25 sm:w-auto"
            >
              <div className="group relative aspect-[3/4] w-full">
                <ParallaxImg src={ph.src} alt={ph.alt} strength={6} />
              </div>
              {ph.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A241A]/90 to-transparent px-4 pb-3 pt-10 font-[Federant,Georgia,serif] text-[18px] text-[#F4ECD9]">
                  {t(ph.caption)}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>

        {/* tabs */}
        <div
          role="tablist"
          aria-label={t("Cocktail menu")}
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {MENU.map((g, i) => {
            const on = g.id === tab
            return (
              <button
                key={g.id}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                role="tab"
                id={`ck-tab-${g.id}`}
                aria-selected={on}
                aria-controls="ck-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setTab(g.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={cn(
                  "relative min-h-11 shrink-0 cursor-pointer rounded-full px-5 text-[15px] font-semibold transition-colors",
                  on ? "text-[#0A241A]" : "text-[#F4ECD9]/70 hover:text-[#F4ECD9]",
                )}
              >
                {on && (
                  <motion.span
                    layoutId="ck-pill"
                    className="absolute inset-0 rounded-full bg-[#D9AE55]"
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{t(g.label)}</span>
              </button>
            )
          })}
        </div>

        {/* panel */}
        <div id="ck-panel" role="tabpanel" aria-labelledby={`ck-tab-${tab}`} className="mt-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {group.note && <p className="mb-6 text-[15px] italic text-[#F4ECD9]/60">{t(group.note)}</p>}
              <ul className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((d, i) => (
                  <motion.li
                    key={d.n}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="snug-spot group relative flex min-h-[150px] flex-col overflow-hidden rounded-2xl border border-[#D9AE55]/25 bg-gradient-to-br from-[#17472F] to-[#133D2B] p-5 transition-colors hover:border-[#D9AE55]/60"
                  >
                    {d.img && (
                      <img src={d.img} alt="" loading="lazy" className="relative -mx-5 -mt-5 mb-4 aspect-[16/10] w-[calc(100%+2.5rem)] max-w-none object-cover" />
                    )}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-[radial-gradient(closest-side,rgba(236,122,44,0.28),transparent)] opacity-60 transition-opacity group-hover:opacity-100"
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <h3 className="font-[Federant,Georgia,serif] text-[24px] leading-[1.1] text-[#F4ECD9]">{t(d.n)}</h3>
                      <span className="shrink-0 whitespace-nowrap font-[Federant,Georgia,serif] text-[22px] tabular-nums text-[#D9AE55]">
                        {d.p} €
                      </span>
                    </div>
                    {d.d && <p className="relative mt-2 text-[14px] leading-relaxed text-[#F4ECD9]/65">{t(d.d)}</p>}
                    {(d.hh || d.sig || d.isNew) && (
                      <div className="relative mt-auto flex flex-wrap gap-2 pt-4">
                        {d.sig && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#D9AE55] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A241A]">
                            <Martini className="size-3" aria-hidden /> {t("Signature")}
                          </span>
                        )}
                        {d.isNew && (
                          <span className="rounded-full bg-[#EC7A2C] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A241A]">
                            {t("New")}
                          </span>
                        )}
                        {d.hh && (
                          <span className="rounded-full border border-[#EC7A2C] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#EC7A2C]">
                            {t("5 € in Cocktail Hour")}
                          </span>
                        )}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-8 text-[14px] text-[#F4ECD9]/55">
          {t("Also: spirits, liqueurs, soft drinks, Turkish tea & coffee and a rotating craft beer list — ask your bartender.")}
        </p>
      </div>
    </section>
  )
}
