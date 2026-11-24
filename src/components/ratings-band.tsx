import { Star } from "lucide-react"
import { useT } from "@/lib/i18n"
import { BOLT, GOOGLE_REVIEW, WOLT } from "@/lib/venue"

/** Public ratings as listed on each platform (checked Nov 2026). */
const RATINGS = [
  { score: "4.9", scale: "/ 5", where: "Google", note: "Guest reviews", href: GOOGLE_REVIEW },
  { score: "4.6", scale: "/ 5", where: "Bolt Food", note: "232 ratings", href: BOLT },
  { score: "8.4", scale: "/ 10", where: "Wolt", note: "Delivery rating", href: WOLT },
]

export default function RatingsBand() {
  const t = useT()
  return (
    <section aria-label={t("Ratings")} className="border-y border-[#D9AE55]/20 bg-[#0A241A] px-4 py-14 sm:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("Loved in Riga")}</p>
          <p className="mt-2 font-[Federant,Georgia,serif] text-[clamp(28px,3.4vw,40px)] leading-[1.05] text-[#F4ECD9]">
            {t("What our guests say, in numbers.")}
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RATINGS.map((r) => (
            <li key={r.where}>
              <a href={r.href} target="_blank" rel="noopener" className="group block rounded-2xl border border-[#D9AE55]/25 p-5 transition-colors hover:border-[#D9AE55]">
                <span className="flex items-baseline gap-1.5">
                  <span className="font-[Federant,Georgia,serif] text-[46px] leading-none text-[#D9AE55]">{r.score}</span>
                  <span className="text-[14px] text-[#F4ECD9]/55">{r.scale}</span>
                </span>
                <span className="mt-2 flex gap-0.5 text-[#EC7A2C]" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="mt-3 block text-[15px] font-semibold text-[#F4ECD9]">{r.where}</span>
                <span className="block text-[13px] text-[#F4ECD9]/55">{t(r.note)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
