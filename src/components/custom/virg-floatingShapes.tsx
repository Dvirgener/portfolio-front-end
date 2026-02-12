import React, { useMemo } from "react"

type ShapeType = "circle" | "square" | "blob"

type Shape = {
  id: string
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

export default function FloatingShapes({
  count = 14,
  className = "",
}: {
  count?: number
  className?: string
}) {
  const shapes = useMemo<Shape[]>(() => {
    const types: ShapeType[] = ["circle", "square", "blob"]

    return Array.from({ length: count }).map((_, i) => {
      const type = pick(types)
      const sizePx = Math.round(rand(24, 120))
      const hue = Math.round(rand(285, 315)) // fuchsia-ish range
      const opacity = rand(0.12, 0.35)
      const blurPx = rand(0, 10)
      const durationSec = rand(3.8, 9.5)
      const delaySec = rand(0, 2.5)
      const driftPx = rand(10, 50)

      return {
        id: `shape-${i}-${Math.random().toString(16).slice(2)}`,
        type,
        xPct: rand(15, 85),
        yPct: rand(15, 85),
        // xPct: 5,
        // yPct: 5,
        sizePx,
        opacity,
        blurPx,
        hue,
        durationSec,
        delaySec,
        driftPx,
      }
    })
  }, [count])

  return (
    <div className={`floating-shapes ${className}`} aria-hidden="true">
      {shapes.map((s) => (
        <span
          key={s.id}
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
      ))}
    </div>
  )
}
