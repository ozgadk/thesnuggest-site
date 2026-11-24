import { motion, useReducedMotion } from "motion/react"
import { Mic, PartyPopper, Users, ArrowUpRight } from "lucide-react"
import { useT } from "@/lib/i18n"
import { SplitReveal, ParallaxImg } from "@/components/motion-kit"
import { INSTAGRAM } from "@/lib/venue"

const CARDS = [
  {
    icon: Mic,
    title: "Karaoke nights",
    text: "Grab the mic and sing your heart out — with friends, and with strangers who quickly become friends.",
    img: "/img/bar/neon-wall.webp",
    accent: true,
  },
  {
    icon: PartyPopper,
    title: "Events & themed nights",
    text: "Themed parties, seasonal menus and special evenings all year round. Dates are announced on Instagram.",
    img: "/img/bar/window-sofa.webp",
  },
  {
    icon: Users,
    title: "Private celebrations",
    text: "Birthdays, team nights and get-togethers — ask us about a corner of the bar, or the whole place.",
    img: "/img/bar/bartenders.webp",
    href: "#contact",
  },
]

export default function EventsSection() {
  const t = useT()
  const reduce = useReducedMotion()
  return (
    <section id="events" className="bg-[#0A241A] px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{t("What's on")}</p>
            <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
              <SplitReveal text={t("Karaoke & events")} />
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D9AE55]/50 px-5 text-[15px] font-semibold text-[#F4ECD9] transition hover:border-[#D9AE55]"
          >
            {t("Dates on @thesnuggest")} <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon
            const Tag = c.href ? "a" : "div"
            return (
              <motion.div
                key={c.title}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Tag
                  {...(c.href ? { href: c.href } : {})}
                  className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl border border-[#D9AE55]/25 p-7 text-[#F4ECD9]"
                >
                  <ParallaxImg src={c.img} strength={8} />
                  <span
                    aria-hidden
                    className={
                      "absolute inset-0 " +
                      (c.accent
                        ? "bg-gradient-to-t from-[#EC7A2C] via-[#EC7A2C]/70 to-[#EC7A2C]/10"
                        : "bg-gradient-to-t from-[#0A241A] via-[#0A241A]/75 to-[#0A241A]/10")
                    }
                  />
                  <span className={"relative mb-auto grid size-12 place-items-center rounded-full " + (c.accent ? "bg-[#0A241A] text-[#EC7A2C]" : "bg-[#D9AE55] text-[#0A241A]")}>
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className={"relative font-[Federant,Georgia,serif] text-[32px] leading-[1.05] " + (c.accent ? "text-[#0A241A]" : "")}>
                    {t(c.title)}
                  </h3>
                  <p className={"relative mt-3 text-[15px] leading-relaxed " + (c.accent ? "text-[#0A241A]/85" : "text-[#F4ECD9]/80")}>
                    {t(c.text)}
                  </p>
                  {c.href && (
                    <span className="relative mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-[#D9AE55]">
                      {t("Get in touch")} <ArrowUpRight className="size-4" aria-hidden />
                    </span>
                  )}
                </Tag>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
