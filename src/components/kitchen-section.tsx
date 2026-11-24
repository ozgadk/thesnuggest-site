import { PhotoDeck, type DeckPhoto } from "@/components/ui/photo-deck"
import { SplitReveal } from "@/components/motion-kit"
import { useT } from "@/lib/i18n"

/**
 * Dishes and prices from the live order-system menu (Firestore bar/config);
 * descriptions and allergen codes from the printed menu (online-menu.html).
 */
const deck: DeckPhoto[] = [
  { src: "/img/smash.webp", title: "Snug Smash Burger", place: "10.00 € · with fries", note: "2× smash beef patty, tomato, iceberg, onion, pickles, ketchup, mayo" },
  { src: "/img/lahmacun.webp", title: "Lahmacun", place: "10.00 € · 2 pieces", note: "Thin Turkish flatbread with spiced minced meat" },
  { src: "/img/schnitzel.webp", title: "Schnitzel", place: "10.90 €", note: "With lemon slice and cold potato salad" },
  { src: "/img/kofte.webp", title: "Turkish Kofta & Rice", place: "10.90 €", note: "Beef kofta, white rice, bean salad (piyaz)" },
  { src: "/img/snuggest-fries.webp", title: "The Snuggest Fries", place: "10.50 € · for 2–3", note: "Fries, crispy chicken, calamari, cheese balls, sausage" },
  { src: "/img/wings.webp", title: "Snug Grill Chicken Wings XL", place: "13.00 € · 500 g", note: "500 g grilled wings, fresh salad, bread" },
  { src: "/img/wrap.webp", title: "Snug Chicken Shashlik Wrap", place: "9.50 €", note: "Chicken shashlik, pickles, fresh salad, fries, wrapped" },
  { src: "/img/soup.webp", title: "Lentil Soup", place: "5.50 € · vegetarian", note: "Warm lentil soup, crispy bread, lemon" },
]

type Dish = { n: string; d: string; p: string; al?: string; tag?: string }
const MENU: { title: string; sub?: string; items: Dish[] }[] = [
  {
    title: "Burgers",
    sub: "served with fries",
    items: [
      { n: "Snug Smash Burger", d: "2× smash beef patty, tomato, iceberg, onion, pickles, ketchup, mayo", p: "10.00", al: "A01 A03 A07" },
      { n: "Snug Smash Cheeseburger", d: "2× smash beef patty, cheese, tomato, iceberg, onion, pickles", p: "11.00", al: "A01 A03 A07" },
      { n: "Snuggest XL Chicken Burger", d: "Crispy fried chicken, special yoghurt sauce, pickles, lettuce", p: "9.50", al: "A01 A03 A07" },
    ],
  },
  {
    title: "Mains",
    items: [
      { n: "Turkish Kofta & Rice", d: "Beef kofta, white rice, bean salad (piyaz)", p: "10.90", al: "A01" },
      { n: "Lahmacun", d: "Thin Turkish flatbread with spiced minced meat", p: "10.00", tag: "2 pcs" },
      { n: "Schnitzel", d: "With lemon slice and cold potato salad", p: "10.90", al: "A01 A03" },
      { n: "Snug Grill Chicken Wings XL", d: "500 g grilled wings, fresh salad, bread", p: "13.00", al: "A01" },
      { n: "Snug Chicken Shashlik Wrap", d: "Chicken shashlik, pickles, fresh salad, fries, wrapped", p: "9.50", al: "A01" },
    ],
  },
  {
    title: "Soup",
    items: [{ n: "Lentil Soup", d: "Warm lentil soup, crispy bread, lemon", p: "5.50", al: "A01", tag: "vegetarian" }],
  },
  {
    title: "Snacks",
    items: [
      { n: "Turkish Bean Salad", d: "White beans, olive oil, parsley, onion, tomato, sumac", p: "5.50", tag: "vegan" },
      { n: "French Fries", d: "250 g, with sauce", p: "4.50" },
      { n: "The Snuggest Fries", d: "Fries, crispy chicken, calamari, cheese balls, sausage", p: "10.50", al: "A01 A03 A07 A14", tag: "for 2–3" },
    ],
  },
  {
    title: "Dessert",
    items: [{ n: "Snug Brownie", d: "Homemade chocolate brownie, warm and fudgy", p: "5.50", al: "A01 A03 A07 A08" }],
  },
  {
    title: "Sauces",
    sub: "1.00 € each",
    items: [
      { n: "Special yoghurt sauce", d: "Our house sauce", p: "1.00", al: "A07" },
      { n: "Mayonnaise · garlic", d: "Classic or with garlic", p: "1.00", al: "A03 A07" },
      { n: "Ketchup · mustard · BBQ", d: "The usual suspects", p: "1.00" },
    ],
  },
]

const ALLERGENS: [string, string][] = [
  ["A01", "gluten"], ["A03", "eggs"], ["A07", "milk"], ["A08", "nuts"], ["A14", "molluscs"],
]

export default function KitchenSection() {
  const t = useT()
  return (
    <section id="kitchen" className="bg-[#0A241A] px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("The kitchen")}</p>
            <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
              <SplitReveal text={t("Food worth staying for")} />
            </h2>
          </div>
          <p className="max-w-[44ch] text-[16px] leading-relaxed text-[#F4ECD9]/70">
            {t("Smash burgers, the grill and Turkish home cooking — served until late, or delivered to your door.")}
          </p>
        </div>

        <PhotoDeck
          photos={deck.map((d) => ({ ...d, title: t(d.title), place: t(d.place), note: d.note && t(d.note) }))}
          heading={t("From the Snuggest kitchen — drag, flick or use the arrows")}
          className="border-[#D9AE55]/40 bg-[#F4ECD9] focus-visible:ring-[#D9AE55]/60 [&_h3]:font-[Federant,Georgia,serif]"
        />

        {/* full food menu */}
        <div className="mt-16">
          <h3 className="font-[Federant,Georgia,serif] text-[32px] text-[#F4ECD9]">{t("The full food menu")}</h3>
          <div className="mt-8 grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
            {MENU.map((g) => (
              <div key={g.title}>
                <div className="flex items-baseline justify-between gap-4 border-b border-[#D9AE55]/30 pb-2">
                  <h4 className="font-[Federant,Georgia,serif] text-[24px] text-[#D9AE55]">{t(g.title)}</h4>
                  {g.sub && <span className="text-[13px] text-[#F4ECD9]/55">{t(g.sub)}</span>}
                </div>
                <ul>
                  {g.items.map((d) => (
                    <li key={d.n} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-[#D9AE55]/10 py-3 last:border-0">
                      <span className="text-[17px] font-semibold text-[#F4ECD9]">
                        {t(d.n)}
                        {d.tag && (
                          <span className="ml-2 rounded-full border border-[#EC7A2C]/70 px-2 py-px align-middle text-[11px] font-bold uppercase tracking-[0.06em] text-[#EC7A2C]">
                            {t(d.tag)}
                          </span>
                        )}
                      </span>
                      <span className="font-[Federant,Georgia,serif] text-[19px] tabular-nums text-[#D9AE55]">{d.p} €</span>
                      <span className="col-span-2 mt-1 text-[14px] italic text-[#F4ECD9]/60">{t(d.d)}</span>
                      {d.al && (
                        <span className="col-span-2 mt-1.5 flex flex-wrap gap-1.5">
                          {d.al.split(" ").map((a) => (
                            <span key={a} title={t("Allergen")} className="rounded border border-[#D9AE55]/30 px-1.5 text-[11px] tabular-nums text-[#F4ECD9]/55">
                              {a}
                            </span>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[13px] leading-relaxed text-[#F4ECD9]/55">
            <b className="font-semibold text-[#F4ECD9]/80">{t("Allergens:")}</b>{" "}
            {ALLERGENS.map(([c, n]) => `${c} ${t(n)}`).join(" · ")}. {t("Please tell our staff about any allergies.")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="w-full text-[15px] text-[#F4ECD9]/70 sm:mr-auto sm:w-auto">{t("Hungry at home?")}</span>
          <a className="snug-shine inline-flex min-h-11 items-center rounded-full bg-[#D9AE55] px-6 text-[15px] font-semibold text-[#0A241A] transition hover:brightness-110" href="https://wolt.com/en/lva/riga/restaurant/the-snuggest-barcafe" target="_blank" rel="noopener">{t("Order on Wolt")}</a>
          <a className="inline-flex min-h-11 items-center rounded-full border border-[#D9AE55]/50 px-6 text-[15px] font-semibold text-[#F4ECD9] transition hover:border-[#D9AE55]" href="https://food.bolt.eu/en/3-riga/p/131314-the-snuggest-kitchen/" target="_blank" rel="noopener">{t("Order on Bolt Food")}</a>
        </div>
      </div>
    </section>
  )
}
