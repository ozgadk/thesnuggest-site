/** The Snuggest — venue facts shared by every section. Times are Riga local time. */

export const PHONE = "+371 22 483 543"
export const PHONE_HREF = "tel:+37122483543"
export const EMAIL = "snuggestgastropub@gmail.com"
export const INSTAGRAM = "https://www.instagram.com/thesnuggest/"
export const MAPS = "https://www.google.com/maps/search/?api=1&query=The+Snuggest+Zirgu+iela+3+Riga"
export const WOLT = "https://wolt.com/en/lva/riga/restaurant/the-snuggest-barcafe"
export const BOLT = "https://food.bolt.eu/en/3-riga/p/131314-the-snuggest-kitchen/"
export const GOOGLE_REVIEW = "https://g.page/r/CRLADiBAta7sEAE/review"

/** Opening hours, index = JS weekday (0 = Sunday). [open, close] in minutes; close may pass midnight. */
export const HOURS: (readonly [number, number] | null)[] = [
  [14 * 60, 23 * 60 + 45], // Sunday
  null, // Monday
  [15 * 60, 24 * 60], // Tuesday
  [15 * 60, 24 * 60], // Wednesday
  [15 * 60, 24 * 60], // Thursday
  [14 * 60, 26 * 60], // Friday → 02:00
  [14 * 60 + 45, 26 * 60], // Saturday → 02:00
]
export const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
/** Display order, Monday first. */
export const WEEK = [1, 2, 3, 4, 5, 6, 0]

/** Cocktail Hour: 18:00–20:00 on every day the bar is open (Tuesday–Sunday; Monday closed). */
export const HH_FROM = 18 * 60
export const HH_TO = 20 * 60
export const HH_LABEL = "18:00 – 20:00"
export const HH_DAYS = [0, 2, 3, 4, 5, 6]

export const fmtTime = (m: number) => {
  const h = Math.floor(m / 60) % 24
  return String(h).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0")
}
export const fmtHours = (h: readonly [number, number] | null) => (h ? fmtTime(h[0]) + " – " + fmtTime(h[1]) : null)

/** Riga weekday (0 = Sunday) and minutes since midnight, wherever the visitor is. */
export function rigaNow(d = new Date()) {
  const p = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Riga", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(d)
  const g = (t: string) => p.find((x) => x.type === t)?.value ?? "0"
  return { day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday")), min: (Number(g("hour")) % 24) * 60 + Number(g("minute")) }
}

/** Is the bar open right now? Counts last night's hours that run past midnight. */
export function openState(d = new Date()) {
  const { day, min } = rigaNow(d)
  const today = HOURS[day]
  const yesterday = HOURS[(day + 6) % 7]
  if (yesterday && yesterday[1] > 24 * 60 && min < yesterday[1] - 24 * 60) return { open: true, closesAt: yesterday[1] - 24 * 60 }
  if (today && min >= today[0] && min < today[1]) return { open: true, closesAt: today[1] }
  // next opening: today later, or the next open day
  if (today && min < today[0]) return { open: false, opensAt: today[0], opensDay: day }
  for (let i = 1; i <= 7; i++) {
    const n = (day + i) % 7
    const h = HOURS[n]
    if (h) return { open: false, opensAt: h[0], opensDay: n }
  }
  return { open: false }
}

/** Cocktail Hour state: on now (minutes left), or minutes until the next one starts (skips Monday). */
export function hhState(d = new Date()) {
  const { day, min } = rigaNow(d)
  if (HH_DAYS.includes(day) && min >= HH_FROM && min < HH_TO) return { on: true, left: HH_TO - min }
  for (let i = 0; i <= 7; i++) {
    const n = (day + i) % 7
    if (!HH_DAYS.includes(n)) continue
    const until = i * 24 * 60 + HH_FROM - min
    if (until > 0) return { on: false, until }
  }
  return { on: false, until: 0 }
}

export const fmtDuration = (m: number) =>
  m >= 24 * 60 ? Math.floor(m / 1440) + " d " + Math.floor((m % 1440) / 60) + " h" : m >= 60 ? Math.floor(m / 60) + " h " + (m % 60) + " min" : m + " min"
