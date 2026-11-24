import * as React from "react"
import TickerRingCta from "@/components/ui/ticker-ring-cta"
import { useT } from "@/lib/i18n"
import { HH_LABEL, MAPS, INSTAGRAM, fmtDuration, hhState } from "@/lib/venue"

/** Live "on now / starts in" line, refreshed every 30 s. */
function useHH() {
  const [s, setS] = React.useState(() => hhState())
  React.useEffect(() => {
    const id = window.setInterval(() => setS(hhState()), 30000)
    return () => window.clearInterval(id)
  }, [])
  return s
}

export default function CocktailHourSection() {
  const t = useT()
  const hh = useHH()
  return (
    <TickerRingCta
      className="snug-cta"
      theme="night"
      eyebrow={t("Cocktail Hour · Tue – Sun")}
      headline={
        <>
          {t("21 cocktails,")} <em>5 €</em> {t("a glass.")}
        </>
      }
      sub={
        <>
          <span className="snug-hh-clock" aria-label={t("Tuesday to Sunday") + " " + HH_LABEL}>
            <span className="snug-hh-time">{HH_LABEL}</span>
            <span className="snug-hh-days">{t("Tuesday – Sunday")}</span>
          </span>
          <span className={"snug-hh-live" + (hh.on ? " is-on" : "")} role="status">
            <i aria-hidden />
            {hh.on ? t("On now") + " · " + fmtDuration(hh.left!) + " " + t("left") : t("Starts in") + " " + fmtDuration(hh.until!)}
          </span>
          <span className="snug-hh-sub">
            {t(
              "Mojito, Espresso Martini, Aperol Spritz, our Istanbul City beer cocktail and the house Snug Peach Gin — at the bar, every evening we are open.",
            )}
          </span>
        </>
      }
      action={t("Get directions")}
      href={MAPS}
      secondary={{ label: t("Follow @thesnuggest"), href: INSTAGRAM }}
      ticker={[t("Tue – Sun") + " " + HH_LABEL, t("21 cocktails · 5 €"), "Zirgu iela 3 · Vecrīga", t("In the bar only")]}
    />
  )
}
