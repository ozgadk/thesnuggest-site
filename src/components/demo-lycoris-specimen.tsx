"use client"

import LycorisSpecimen from "@/components/ui/lycoris-specimen"

export default function Demo() {
  // w-full is load-bearing: a flex item left at width:auto would shrink to 0px.
  return (
    <div className="w-full">
      <LycorisSpecimen />
    </div>
  )
}
