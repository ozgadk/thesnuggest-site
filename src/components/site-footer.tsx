import MeadowRiseFooter from "@/components/ui/meadow-rise-footer"
import { EMAIL } from "@/lib/venue"
import { useT } from "@/lib/i18n"

const MAPS = "https://www.google.com/maps/search/?api=1&query=The+Snuggest+Zirgu+iela+3+Riga"

export default function SiteFooter() {
  const t = useT()
  return (
    <MeadowRiseFooter
      name="The Snuggest"
      brandHref="#"
      logo={<img src="/img/logo-sm.webp" alt="" width={44} height={44} style={{ objectFit: "contain" }} />}
      heading={t("See you *tonight*\nat The Snuggest.")}
      subheading={t("Cocktails from 5 €, a proper Turkish kitchen and the cosiest corner of Old Town Riga.")}
      cta={{ label: t("Get directions"), href: MAPS }}
      tagline={t("Cocktail bar & kitchen · Zirgu iela 3, Vecrīga, Rīga")}
      newsletter={false}
      columns={[
        {
          title: t("Explore"),
          links: [
            { label: t("Cocktails"), href: "#cocktails" },
            { label: t("Kitchen"), href: "#kitchen" },
            { label: t("Events"), href: "#events" },
            { label: t("Catering"), href: "#catering" },
            { label: t("Visit us"), href: "#visit" },
          ],
        },
        {
          title: t("Order"),
          links: [
            { label: "Wolt", href: "https://wolt.com/en/lva/riga/restaurant/the-snuggest-barcafe" },
            { label: "Bolt Food", href: "https://food.bolt.eu/en/3-riga/p/131314-the-snuggest-kitchen/" },
          ],
        },
        {
          title: t("Contact"),
          links: [
            { label: EMAIL, href: "mailto:" + EMAIL },
            { label: "+371 22 483 543", href: "tel:+37122483543" },
            { label: "Zirgu iela 3, Rīga", href: MAPS },
            { label: t("Review us on Google"), href: "https://g.page/r/CRLADiBAta7sEAE/review" },
          ],
        },
      ]}
      socialTitle={t("Follow")}
      socials={[{ icon: "instagram", href: "https://www.instagram.com/thesnuggest/", label: "Instagram @thesnuggest" }]}
      copyright={"© " + new Date().getFullYear() + " The Snuggest · " + t("Alcohol is served to guests aged 18+. Please drink responsibly.")}
      legal={[]}
      preset="moonlit"
      palette={{
        sky: ["#06150f", "#183c2c"],
        haze: "#1c4231",
        glow: "#ffd79a",
        hills: [
          ["#2e5a45", "#244a39"],
          ["#2a533f", "#1d4031"],
          ["#244b37", "#173527"],
          ["#1d402f", "#122c20"],
          ["#173626", "#0e2419"],
          ["#11291d", "#0a1b13"],
        ],
        ground: "#0A241A",
        ink: "#F4ECD9",
        sub: "#cdc4ab",
        pill: "#D9AE55",
        pillInk: "#0A241A",
        text: "#F4ECD9",
        muted: "#B9B29E",
        line: "rgba(217, 174, 85, 0.2)",
        night: true,
      }}
      seed={7}
      height="900px"
      fontFamily='"Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif'
      serifFamily='"Federant", "Iowan Old Style", Georgia, serif'
    />
  )
}
