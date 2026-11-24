import { motion, useReducedMotion } from "motion/react"
import { Gallery, GalleryImage } from "@/components/ui/shared-element-gallery"
import { cn } from "@/lib/utils"
import { SplitReveal } from "@/components/motion-kit"
import { useT } from "@/lib/i18n"

/** Our own dish photos (Wolt / Bolt Food listings and the order-system menu). */
const TILES: { id: string; src: string; name: string; span?: string }[] = [
  { id: "spread", src: "/img/hero.webp", name: "From our kitchen", span: "col-span-2 row-span-2" },
  { id: "lahmacun", src: "/img/lahmacun.webp", name: "Lahmacun" },
  { id: "smash", src: "/img/smash.webp", name: "Snug Smash Burger" },
  { id: "schnitzel", src: "/img/schnitzel.webp", name: "Schnitzel", span: "row-span-2" },
  { id: "kofte", src: "/img/kofte.webp", name: "Turkish Kofta & Rice" },
  { id: "wings", src: "/img/wings.webp", name: "Snug Grill Chicken Wings XL" },
  { id: "snuggest-fries", src: "/img/snuggest-fries.webp", name: "The Snuggest Fries", span: "col-span-2" },
  { id: "wrap", src: "/img/wrap.webp", name: "Snug Chicken Shashlik Wrap" },
  { id: "soup", src: "/img/soup.webp", name: "Lentil Soup" },
  { id: "piyaz", src: "/img/piyaz.webp", name: "Turkish Bean Salad" },
  { id: "cheese", src: "/img/cheese.webp", name: "Snug Smash Cheeseburger" },
  { id: "brownie", src: "/img/brownie.webp", name: "Snug Brownie" },
]

/** A spinning circular stamp: "HANDMADE · IN OUR KITCHEN ·". */
function HandmadeStamp({ label }: { label: string }) {
  const reduce = useReducedMotion()
  const text = (label + " · ").repeat(2)
  return (
    <div className="pointer-events-none relative grid size-[128px] shrink-0 place-items-center md:size-[150px]" aria-hidden>
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 size-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <path id="snug-stamp-ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="97" fill="#EC7A2C" />
        <text fill="#0A241A" fontSize="17" fontWeight="700" letterSpacing="3.2" style={{ textTransform: "uppercase", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
          <textPath href="#snug-stamp-ring">{text}</textPath>
        </text>
      </motion.svg>
      <img src="/img/panda-round.webp" alt="" className="relative size-[54%] rounded-full ring-2 ring-[#0A241A]" />
    </div>
  )
}

export default function KitchenGallery() {
  const t = useT()
  const reduce = useReducedMotion()
  return (
    <section id="kitchen-gallery" className="relative overflow-hidden bg-[#F4ECD9] px-4 py-20 text-[#0A241A] sm:px-8 md:py-28">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[680px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#B5651D]">{t("Snuggest Kitchen")}</p>
            <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(42px,6.4vw,84px)] leading-[0.98]">
              <SplitReveal text={t("Handmade,")} /> <SplitReveal className="text-[#EC7A2C]" text={t("every single plate.")} delay={0.15} />
            </h2>
            <p className="mt-6 max-w-[56ch] text-[18px] leading-relaxed text-[#0A241A]/80">
              {t("Every dish on our menu is made by hand in our own kitchen — from the kofta and the lahmacun to the brownie. No shortcuts, just proper home cooking.")}
            </p>
          </div>
          <HandmadeStamp label={t("Handmade · in our kitchen")} />
        </div>

        <Gallery>
          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
            {TILES.map((tile, i) => (
              <motion.div
                key={tile.id}
                initial={reduce ? false : { opacity: 0, scale: 0.96, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: reduce ? 0 : (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={cn("relative overflow-hidden rounded-2xl bg-[#0A241A] shadow-[0_18px_40px_-24px_rgba(10,36,26,0.6)]", tile.span)}
              >
                <GalleryImage
                  id={"kitchen-" + tile.id}
                  src={tile.src}
                  alt={t(tile.name)}
                  className="mb-0 h-full rounded-2xl [&_img]:h-full [&_img]:w-full [&_img]:rounded-2xl"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-[#0A241A]/90 to-transparent px-4 pb-3 pt-10 font-[Federant,Georgia,serif] text-[17px] leading-tight text-[#F4ECD9] md:text-[19px]">
                  {t(tile.name)}
                </span>
              </motion.div>
            ))}
          </div>
        </Gallery>
        <p className="mt-5 text-[14px] text-[#0A241A]/60">{t("Tap any photo to open it, swipe down to close.")}</p>
      </div>
    </section>
  )
}
