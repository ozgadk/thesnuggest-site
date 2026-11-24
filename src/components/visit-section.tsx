import { LocationMap } from "@/components/ui/expand-map"
import { MapPin, Phone, Navigation } from "lucide-react"

const MAPS = "https://www.google.com/maps/search/?api=1&query=The+Snuggest+Zirgu+iela+3+Riga"

/** Opening hours as listed on our Wolt page. Index = JS weekday (0 = Sunday). */
const HOURS: [string, string | null][] = [
  ["Sunday", "14:00 – 23:45"],
  ["Monday", null],
  ["Tuesday", "15:00 – 24:00"],
  ["Wednesday", "15:00 – 24:00"],
  ["Thursday", "15:00 – 24:00"],
  ["Friday", "14:00 – 02:00"],
  ["Saturday", "14:45 – 02:00"],
]
const ORDER = [1, 2, 3, 4, 5, 6, 0]

function rigaWeekday() {
  const d = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Riga", weekday: "short" }).format(new Date())
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(d)
}

export default function VisitSection() {
  const today = rigaWeekday()
  return (
    <section id="visit" className="overflow-hidden border-t border-[#D9AE55]/20 bg-[#0F3324] px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">Visit us</p>
          <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
            Zirgu iela 3, Vecrīga
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-[#F4ECD9]/70">
            A cobbled street in the heart of Old Town Riga, a few steps from the Cat House. Walk in — no booking needed.
          </p>

          <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-3xl border border-[#D9AE55]/20 bg-[radial-gradient(ellipse_at_center,rgba(217,174,85,0.08),transparent_70%)] py-12">
            <LocationMap location="The Snuggest · Zirgu iela 3, Rīga" coordinates="56.9502° N, 24.1099° E" />
          </div>
        </div>

        <div className="grid gap-10 lg:pt-24">
          <div>
            <h3 className="font-[Federant,Georgia,serif] text-[26px] text-[#D9AE55]">Opening hours</h3>
            <table className="mt-4 w-full border-collapse text-[16px]">
              <tbody>
                {ORDER.map((d) => {
                  const [day, h] = HOURS[d]
                  const on = d === today
                  return (
                    <tr key={day} className={on ? "text-[#D9AE55]" : "text-[#F4ECD9]/85"}>
                      <td className="border-b border-[#D9AE55]/15 py-2.5 font-medium">
                        {day}
                        {on && <span className="ml-2 text-[11px] font-bold uppercase tracking-[0.12em]">today</span>}
                      </td>
                      <td className="border-b border-[#D9AE55]/15 py-2.5 text-right tabular-nums">{h ?? "Closed"}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p className="mt-3 text-[13px] text-[#F4ECD9]/55">Cocktail Hour: Sun–Thu 18:00–21:00 · Fri–Sat 18:00–20:00</p>
          </div>

          <div>
            <h3 className="font-[Federant,Georgia,serif] text-[26px] text-[#D9AE55]">Contact</h3>
            <ul className="mt-4 grid gap-3 text-[16px] text-[#F4ECD9]/85">
              <li className="flex items-center gap-3">
                <MapPin className="size-[18px] text-[#D9AE55]" aria-hidden /> Zirgu iela 3-1, Rīga, LV-1050
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-[18px] text-[#D9AE55]" aria-hidden />
                <a href="tel:+37122483543" className="underline-offset-4 hover:underline">+371 22 483 543</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={MAPS} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D9AE55] px-6 text-[15px] font-semibold text-[#0A241A] transition hover:brightness-110">
                <Navigation className="size-4" aria-hidden /> Get directions
              </a>
              <a href="https://www.instagram.com/thesnuggest/" target="_blank" rel="noopener" className="inline-flex min-h-11 items-center rounded-full border border-[#D9AE55]/50 px-6 text-[15px] font-semibold text-[#F4ECD9] transition hover:border-[#D9AE55]">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
