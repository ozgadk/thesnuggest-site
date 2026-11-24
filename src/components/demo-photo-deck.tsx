import { PhotoDeck } from "@/components/ui/photo-deck"

const IMG = "https://cdn.jsdelivr.net/gh/rm-sjent/21st-assets@v1/img/"

const photos = [
  { src: `${IMG}deck-kyoto.jpg`, title: "Lantern light after the rain", place: "Gion, Kyoto", note: "Go at dusk on a wet evening, when the stone holds every lantern twice." },
  { src: `${IMG}deck-lisbon.jpg`, title: "The tram that climbs Alfama", place: "Lisbon, Portugal", note: "Ride line 28 before nine and you get the street, and the light, to yourself." },
  { src: `${IMG}deck-lofoten.jpg`, title: "Red cabins under black peaks", place: "Reine, Lofoten", note: "Arctic light lasts for hours here, so there is no rush to find the shot." },
  { src: `${IMG}deck-cappadocia.jpg`, title: "Two hundred balloons at sunrise", place: "Göreme, Cappadocia", note: "Watch from the ridge above town rather than the basket, and bring a coat." },
  { src: `${IMG}deck-atlas.jpg`, title: "A village built into the hill", place: "High Atlas, Morocco", note: "The road up is slow, so stay the night and catch the snow line at first light." },
  { src: `${IMG}deck-patagonia.jpg`, title: "Granite towers over milky water", place: "Torres del Paine, Chile", note: "The wind drops for an hour after dawn. That hour is the whole trip." },
]

export default function PhotoDeckDemo() {
  return (
    <div className="flex min-h-[720px] w-full items-center justify-center bg-white p-6 md:p-12" style={{ fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300..600&family=Newsreader:ital,opsz,wght@0,6..72,300..500;1,6..72,300..400&display=swap" precedence="default" />
      <div className="w-full max-w-[1200px]">
        <PhotoDeck photos={photos} />
      </div>
    </div>
  )
}
