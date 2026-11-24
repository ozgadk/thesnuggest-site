import { Globe } from "lucide-react"
import { LANGS, useLang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

/** Floating EN / LV switch, top-right on every screen size. */
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang()
  return (
    <div
      role="group"
      aria-label={t("Language")}
      className="fixed right-4 top-[max(14px,env(safe-area-inset-top))] z-40 flex items-center gap-1 rounded-full border border-[#D9AE55]/40 bg-[#0A241A]/85 p-1 pl-3 text-[#F4ECD9] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md"
    >
      <Globe className="mr-1 size-4 text-[#D9AE55]" aria-hidden />
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={cn(
            "min-h-9 min-w-10 cursor-pointer rounded-full px-2.5 text-[13px] font-bold uppercase tracking-[0.06em] transition-colors",
            lang === l ? "bg-[#D9AE55] text-[#0A241A]" : "text-[#F4ECD9]/75 hover:text-[#F4ECD9]",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
