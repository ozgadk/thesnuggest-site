/**
 * Small, tasteful motion pieces shared across the page. Everything here steps
 * aside under prefers-reduced-motion.
 */
import * as React from "react"
import Lenis from "lenis"
import { motion, useReducedMotion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

/** Weighted, smooth wheel scrolling; anchor links glide and clear the fixed header. */
export function SmoothScroll() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.11, anchors: { offset: -64 } })
    return () => lenis.destroy()
  }, [])
  return null
}

/** A hairline of gold under the header that fills as you read down the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return <motion.div aria-hidden className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-gradient-to-r from-[#D9AE55] via-[#EC7A2C] to-[#D9AE55]" style={{ scaleX: x }} />
}

/** Heading words rise out of a mask, one after another, when they scroll into view. */
export function SplitReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  const words = text.split(" ")
  if (reduce) return <span className={className}>{text}</span>
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <React.Fragment key={i + w}>
          <span aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "105%", rotate: 3 }}
              whileInView={{ y: "0%", rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </span>
  )
}

/** An image that drifts gently against the scroll inside its frame. */
export function ParallaxImg({ src, alt = "", className, strength = 7 }: { src: string; alt?: string; className?: string; strength?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [-strength + "%", strength + "%"])
  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        style={reduce ? undefined : { y, scale: 1 + strength / 50 }}
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.2]"
      />
    </div>
  )
}

/**
 * The panda opens the night: a deep-green curtain with the round emblem and the
 * name, which then parts upward. Once per browser session, about 1.6 s.
 */
export function IntroCurtain() {
  const [show, setShow] = React.useState(() => {
    if (typeof window === "undefined") return false
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
    try {
      return sessionStorage.getItem("snug.intro") !== "1"
    } catch {
      return true
    }
  })
  React.useEffect(() => {
    if (!show) return
    try {
      sessionStorage.setItem("snug.intro", "1")
    } catch {
      /* ignore */
    }
    const id = window.setTimeout(() => setShow(false), 1450)
    return () => window.clearTimeout(id)
  }, [show])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          aria-hidden
          className="fixed inset-0 z-[60] grid place-items-center bg-[#0A241A]"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.img
              src="/img/panda-round.webp"
              alt=""
              className="size-[132px] rounded-full shadow-[0_0_0_3px_rgba(236,122,44,0.75),0_0_60px_rgba(236,122,44,0.35)]"
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="font-[Federant,Georgia,serif] text-[30px] tracking-[0.04em] text-[#F4ECD9]"
              initial={{ opacity: 0, y: 14, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.04em" }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              The Snuggest
            </motion.span>
            <motion.span
              className="h-px w-40 origin-center bg-gradient-to-r from-transparent via-[#D9AE55] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * One pointer listener for the whole page: any `.snug-spot` element gets a
 * soft gold light that follows the cursor across it.
 */
export function Spotlights() {
  React.useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return
    const move = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(".snug-spot")
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", e.clientX - r.left + "px")
      el.style.setProperty("--my", e.clientY - r.top + "px")
    }
    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [])
  return null
}
