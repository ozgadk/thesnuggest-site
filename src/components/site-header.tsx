import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { LANGS, useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { ScrollProgress } from "@/components/motion-kit"
import { OpenBadge } from "@/components/visit-section"

const LINKS: [string, string][] = [
  ["#cocktails", "Cocktails"],
  ["#events", "Events"],
  ["#kitchen", "Kitchen"],
  ["#catering", "Catering"],
  ["#visit", "Visit us"],
  ["#contact", "Contact"],
]

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t("Language")} className="flex items-center rounded-full border border-[#D9AE55]/40 p-0.5">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={cn(
            "min-h-8 min-w-9 cursor-pointer rounded-full px-2 text-[12px] font-bold uppercase tracking-[0.06em] transition-colors",
            lang === l ? "bg-[#D9AE55] text-[#0A241A]" : "text-[#F4ECD9]/75 hover:text-[#F4ECD9]",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function SiteHeader() {
  const { t } = useLang()
  const [solid, setSolid] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const on = () => setSolid(window.scrollY > 40)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])
  React.useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", k)
    return () => window.removeEventListener("keydown", k)
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b pt-[env(safe-area-inset-top)] transition-[background-color,border-color,backdrop-filter] duration-300",
        solid || open ? "border-[#D9AE55]/20 bg-[#0A241A]/90 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-[#D9AE55] focus:px-4 focus:py-2 focus:text-[#0A241A]">
        {t("Skip to content")}
      </a>
      <ScrollProgress />
      <div className="mx-auto flex h-[60px] max-w-[1280px] items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-[#F4ECD9]" aria-label="The Snuggest">
          <img src="/img/logo-sm.webp" alt="" width={38} height={38} className="size-[38px] object-contain" />
          <span className="hidden whitespace-nowrap font-[Federant,Georgia,serif] text-[20px] sm:inline">The Snuggest</span>
        </a>

        <nav aria-label={t("Main")} className="ml-6 hidden items-center gap-6 lg:flex">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-[14px] font-medium text-[#F4ECD9]/75 transition-colors hover:text-[#F4ECD9]">
              {t(label)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <OpenBadge className="hidden text-[#F4ECD9]/90 md:inline-flex" />
          <LangSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("Close menu") : t("Open menu")}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-[#D9AE55]/40 text-[#F4ECD9] lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label={t("Main")}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#D9AE55]/15 px-4 pb-6 pt-2 lg:hidden"
          >
            <OpenBadge className="mb-2 py-2 text-[#F4ECD9]/90 md:hidden" />
            <ul className="grid gap-1">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-2 py-3 font-[Federant,Georgia,serif] text-[26px] text-[#F4ECD9] hover:bg-[#D9AE55]/10"
                  >
                    {t(label)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
