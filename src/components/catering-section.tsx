import { ChefHat, Martini, CalendarHeart, Mail } from "lucide-react"
import { useT } from "@/lib/i18n"
import { SplitReveal } from "@/components/motion-kit"
import { EMAIL } from "@/lib/venue"

/**
 * Catering — PLACEHOLDER copy. The owner will edit this section later
 * (menus, prices, minimum order, photos). Keep the structure, swap the text.
 */
const POINTS = [
  { icon: ChefHat, title: "Handmade food", text: "Turkish kitchen, finger food and our burgers — made by hand, for your guests." },
  { icon: Martini, title: "Cocktails & bar", text: "Our bartenders and cocktail menu, at your party." },
  { icon: CalendarHeart, title: "Any occasion", text: "Birthdays, office parties, weddings and private dinners." },
]

export default function CateringSection() {
  const t = useT()
  const mail = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Catering — The Snuggest")
  return (
    <section id="catering" className="relative overflow-hidden bg-[#0F3324] px-4 py-20 sm:px-8 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(217,174,85,0.14),transparent)]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("Catering")}</p>
          <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
            <SplitReveal text={t("The Snuggest, at your event")} />
          </h2>
          <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-[#F4ECD9]/75">
            {t("Bring our kitchen and our bar to your celebration. Tell us the date, the number of guests and what you have in mind — we will put together a menu for you.")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mail} className="snug-shine inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D9AE55] px-6 text-[15px] font-semibold text-[#0A241A] transition hover:brightness-110">
              <Mail className="size-4" aria-hidden /> {t("Ask for a catering offer")}
            </a>
          </div>
          <p className="mt-4 text-[13px] text-[#F4ECD9]/50">{t("Menus and prices coming soon.")}</p>
        </div>
        <ul className="grid gap-4">
          {POINTS.map((p) => {
            const Icon = p.icon
            return (
              <li key={p.title} className="snug-spot flex gap-4 rounded-2xl border border-[#D9AE55]/25 bg-[#0A241A]/60 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#D9AE55]/15 text-[#D9AE55]">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-[Federant,Georgia,serif] text-[22px] text-[#F4ECD9]">{t(p.title)}</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-[#F4ECD9]/70">{t(p.text)}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
