import * as React from "react"
import { LocationMap } from "@/components/ui/expand-map"
import { Navigation } from "lucide-react"
import { useT } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { SplitReveal } from "@/components/motion-kit"
import { DAY_NAMES, HH_LABEL, HOURS, MAPS, WEEK, fmtHours, fmtTime, openState, rigaNow } from "@/lib/venue"

export function useOpenState() {
  const [s, setS] = React.useState(() => openState())
  React.useEffect(() => {
    const id = window.setInterval(() => setS(openState()), 60000)
    return () => window.clearInterval(id)
  }, [])
  return s
}

export function OpenBadge({ className = "" }: { className?: string }) {
  const t = useT()
  const s = useOpenState()
  const label = s.open
    ? t("Open now") + " · " + t("until") + " " + fmtTime(s.closesAt!)
    : s.opensAt !== undefined
      ? t("Closed") + " · " + t("opens") + " " + (s.opensDay === rigaNow().day ? "" : t(DAY_NAMES[s.opensDay!]).slice(0, 3) + " ") + fmtTime(s.opensAt)
      : t("Closed")
  return (
    <span className={cn("inline-flex items-center gap-2 whitespace-nowrap rounded-full text-[13px] font-semibold", className)}>
      <i aria-hidden className={"size-2 rounded-full " + (s.open ? "bg-[#4ADE80] shadow-[0_0_10px_#4ADE80]" : "bg-[#EC7A2C]")} />
      {label}
    </span>
  )
}

export default function VisitSection() {
  const t = useT()
  const today = rigaNow().day
  return (
    <section id="visit" className="overflow-hidden border-t border-[#D9AE55]/20 bg-[#0F3324] px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("Visit us")}</p>
          <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
            <SplitReveal text={t("Zirgu iela 3, Vecrīga")} />
          </h2>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-[#F4ECD9]/70">
            {t("A cobbled street in the heart of Old Town Riga, a few steps from the Cat House. Walk in — no booking needed.")}
          </p>
          <a href={MAPS} target="_blank" rel="noopener" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D9AE55] px-6 text-[15px] font-semibold text-[#0A241A] transition hover:brightness-110">
            <Navigation className="size-4" aria-hidden /> {t("Get directions")}
          </a>

          <div className="mt-10 flex min-h-[320px] items-center justify-center rounded-3xl border border-[#D9AE55]/20 bg-[radial-gradient(ellipse_at_center,rgba(217,174,85,0.08),transparent_70%)] py-12">
            <LocationMap location="The Snuggest · Zirgu iela 3, Rīga" coordinates="56.9502° N, 24.1099° E" />
          </div>
        </div>

        <div className="lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-[Federant,Georgia,serif] text-[26px] text-[#D9AE55]">{t("Opening hours")}</h3>
            <OpenBadge className="border border-[#D9AE55]/30 px-3 py-1.5 text-[#F4ECD9]" />
          </div>
          <table className="mt-4 w-full border-collapse text-[16px]">
            <tbody>
              {WEEK.map((d) => {
                const on = d === today
                return (
                  <tr key={d} className={on ? "text-[#D9AE55]" : "text-[#F4ECD9]/85"}>
                    <td className="border-b border-[#D9AE55]/15 py-2.5 font-medium">
                      {t(DAY_NAMES[d])}
                      {on && <span className="ml-2 text-[11px] font-bold uppercase tracking-[0.12em]">{t("today")}</span>}
                    </td>
                    <td className="border-b border-[#D9AE55]/15 py-2.5 text-right tabular-nums">{fmtHours(HOURS[d]) ?? t("Closed")}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-[#EC7A2C]/40 bg-[#EC7A2C]/10 px-5 py-4">
            <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#EC7A2C]">{t("Cocktail Hour")} · {t("Tue – Sun")}</span>
            <span className="font-[Federant,Georgia,serif] text-[24px] tabular-nums text-[#F4ECD9]">{HH_LABEL}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
