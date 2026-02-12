import React, { useMemo } from "react"

type ShapeType = "circle" | "square" | "blob"

type Shape = {
  type: ShapeType
  xPct: number
  yPct: number
  sizePx: number
  opacity: number
  blurPx: number
  hue: number
  durationSec: number
  delaySec: number
  driftPx: number
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function FloatingShape({
    className = "",
    x = 0,
    y = 0
    }: {
    count?: number,
    x: number,
    y: number,
    className?: string
    }) {
    const types: ShapeType[] = ["circle", "square", "blob"]
    const type = pick(types)
    const sizePx = Math.round(rand(24, 120))
    const hue = Math.round(rand(285, 315)) // fuchsia-ish range
    const opacity = rand(0.12, 0.35)
    const blurPx = rand(0, 10)
    const durationSec = rand(3.8, 9.5)
    const delaySec = rand(0, 2.5)
    const driftPx = rand(10, 50)

    const s: Shape = {
        type,
        xPct: x,
        yPct: y,
        sizePx,
        opacity,
        blurPx,
        hue,
        durationSec,
        delaySec,
        driftPx,
      }


  return (
    <div className={`floating-shapes ${className}`} aria-hidden="true">
        <span
          className={`shape ${s.type}`}
          style={
            {
              left: `${s.xPct}%`,
              top: `${s.yPct}%`,
              width: `${s.sizePx}px`,
              height: `${s.sizePx}px`,
              opacity: s.opacity,
              filter: `blur(${s.blurPx}px)`,
              // CSS vars used by animation:
              ["--hue" as any]: s.hue,
              ["--dur" as any]: `${s.durationSec}s`,
              ["--delay" as any]: `${s.delaySec}s`,
              ["--drift" as any]: `${s.driftPx}px`,
            } as React.CSSProperties
          }
        />
    </div>
  )
}
