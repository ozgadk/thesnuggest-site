import { Gallery, GalleryGrid, GalleryImage } from "@/components/ui/shared-element-gallery"
import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"
import { useT } from "@/lib/i18n"

export type Photo = { id: string; src: string; alt: string }

/** Food photos — our own (Wolt / Bolt Food listings and the order-system menu). */
export const KITCHEN_PHOTOS: Photo[] = [
  { id: "spread", src: "/img/hero.webp", alt: "A table of Snuggest dishes: burger, lahmacun, schnitzel, soup and kofta" },
  { id: "cheese", src: "/img/cheese.webp", alt: "Snug Smash Cheeseburger with fries" },
  { id: "schnitzel", src: "/img/schnitzel.webp", alt: "Schnitzel with fries and lemon" },
  { id: "lahmacun", src: "/img/lahmacun.webp", alt: "Lahmacun on a wooden board" },
  { id: "wings", src: "/img/wings.webp", alt: "Grilled chicken wings with salad and bread" },
  { id: "snuggest-fries", src: "/img/snuggest-fries.webp", alt: "The Snuggest Fries basket with chicken, calamari, cheese balls and sausage" },
  { id: "kofte", src: "/img/kofte.webp", alt: "Turkish kofta with rice and bean salad" },
  { id: "wrap", src: "/img/wrap.webp", alt: "Chicken shashlik wrap" },
  { id: "piyaz", src: "/img/piyaz.webp", alt: "Piyaz white bean salad" },
  { id: "soup", src: "/img/soup.webp", alt: "Lentil soup with croutons and lemon" },
  { id: "smash", src: "/img/smash.webp", alt: "Snug Smash Burger" },
  { id: "brownie", src: "/img/brownie.webp", alt: "Snug chocolate brownie" },
]

/**
 * Bar & interior photos for "A night at The Snuggest". Drop files into
 * /public/img/bar and list them here — until then the section shows an
 * Instagram invitation instead of an empty grid.
 */
export const BAR_PHOTOS: Photo[] = [
  { id: "bartenders", src: "/img/bar/bartenders.webp", alt: "Guests behind the bar shaking cocktails under the copper lamps" },
  { id: "window-sofa", src: "/img/bar/window-sofa.webp", alt: "Friends raising cocktails on the sofa by the Snuggest Gastro Pub window" },
  { id: "panda-guests", src: "/img/bar/panda-guests.webp", alt: "Two guests posing with the giant Snuggest panda" },
  { id: "neon-wall", src: "/img/bar/neon-wall.webp", alt: "A group photo under the red Snuggest neon sign by the dartboards" },
  { id: "bar-counter", src: "/img/bar/bar-counter.webp", alt: "Two smiling guests at the bar counter in front of the green-lit shelves" },
]

type Props = {
  id: string
  eyebrow: string
  title: string
  photos: Photo[]
  tone?: "deep" | "green"
}

export default function GallerySection({ id, eyebrow, title, photos, tone = "deep" }: Props) {
  const t = useT()
  return (
    <section
      id={id}
      className={cn("px-4 py-20 sm:px-8 md:py-28", tone === "deep" ? "bg-[#0A241A]" : "bg-[#0F3324]")}
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#D9AE55]">{eyebrow}</p>
            <h2 className="mt-3 font-[Federant,Georgia,serif] text-[clamp(40px,6vw,72px)] leading-[1] text-[#F4ECD9]">
              {title}
            </h2>
            {photos.length > 0 && (
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-[#F4ECD9]/70">
                {t("Tap any photo to open it, swipe down to close.")}
              </p>
            )}
          </div>
          <a
            href="https://www.instagram.com/thesnuggest/"
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D9AE55]/50 px-5 text-[15px] font-semibold text-[#F4ECD9] transition hover:border-[#D9AE55]"
          >
            <Camera className="size-[18px]" aria-hidden />
            {t("More on @thesnuggest")}
          </a>
        </header>

        {photos.length > 0 ? (
          <Gallery>
            <GalleryGrid className={photos.length <= 6 ? "lg:columns-3" : undefined}>
              {photos.map((p) => (
                <GalleryImage key={p.id} id={`${id}-${p.id}`} src={p.src} alt={p.alt} className="bg-[#0A241A]" />
              ))}
            </GalleryGrid>
          </Gallery>
        ) : (
          <a
            href="https://www.instagram.com/thesnuggest/"
            target="_blank"
            rel="noopener"
            className="group relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#D9AE55]/40 bg-[#0A241A] p-10 text-center transition-colors hover:border-[#D9AE55]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(236,122,44,0.18),transparent)]"
            />
            <Camera className="relative size-10 text-[#D9AE55]" aria-hidden />
            <p className="relative mt-5 font-[Federant,Georgia,serif] text-[28px] text-[#F4ECD9]">
              {t("Warm light, good music, full glasses.")}
            </p>
            <p className="relative mt-2 max-w-[40ch] text-[15px] text-[#F4ECD9]/65">
              {t("See tonight at the bar on Instagram —")} <span className="text-[#D9AE55] group-hover:underline">@thesnuggest</span>
            </p>
          </a>
        )}
      </div>
    </section>
  )
}
