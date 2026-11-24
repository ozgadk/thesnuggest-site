import { Mail, Phone, MapPin, Camera, ArrowUpRight } from "lucide-react"
import { useT } from "@/lib/i18n"
import { EMAIL, PHONE, PHONE_HREF, INSTAGRAM, MAPS } from "@/lib/venue"

export default function ContactSection() {
  const t = useT()
  const cards = [
    { icon: Mail, label: t("Email"), value: EMAIL, href: "mailto:" + EMAIL, note: t("Events, catering, group bookings"), primary: true },
    { icon: Phone, label: t("Phone"), value: PHONE, href: PHONE_HREF, note: t("Call us during opening hours") },
    { icon: Camera, label: "Instagram", value: "@thesnuggest", href: INSTAGRAM, note: t("News, events and tonight's specials"), external: true },
    { icon: MapPin, label: t("Address"), value: "Zirgu iela 3-1, Rīga", href: MAPS, note: "LV-1050 · Vecrīga", external: true },
  ]
  return (
    <section id="contact" className="bg-[#0A241A] px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("Contact")}</p>
        <h2 className="mt-3 max-w-[16ch] font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
          {t("Say hello")}
        </h2>
        <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-[#F4ECD9]/70">
          {t("Questions, private events, catering or just a table for tonight — we answer every message.")}
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                  className={
                    "group flex h-full min-h-[190px] flex-col rounded-3xl border p-6 transition-colors " +
                    (c.primary
                      ? "border-[#D9AE55] bg-[#D9AE55] text-[#0A241A] hover:brightness-105"
                      : "border-[#D9AE55]/25 bg-[#133D2B] text-[#F4ECD9] hover:border-[#D9AE55]/70")
                  }
                >
                  <span className="flex items-center justify-between">
                    <Icon className="size-6" aria-hidden />
                    <ArrowUpRight className="size-5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                  <span className="mt-auto pt-8 text-[12px] font-bold uppercase tracking-[0.18em] opacity-70">{c.label}</span>
                  <span className={"mt-1 font-[Federant,Georgia,serif] leading-tight " + (c.label === t("Email") ? "text-[19px]" : "text-[22px]")}>
                    {c.label === t("Email") ? (
                      <>
                        {c.value.split("@")[0]}
                        <wbr />@{c.value.split("@")[1]}
                      </>
                    ) : (
                      c.value
                    )}
                  </span>
                  <span className="mt-2 text-[14px] opacity-70">{c.note}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
