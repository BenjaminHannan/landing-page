import { useCallback, useEffect, useState } from 'react'

export const palettes = [
  { id: 'parchment', name: 'Parchment' },
  { id: 'ink', name: 'Ink' },
  { id: 'paper', name: 'Paper' },
  { id: 'graphite', name: 'Graphite' },
] as const

export type PaletteId = (typeof palettes)[number]['id']

const STORAGE_KEY = 'bh:palette'
const THEME_COLORS: Record<PaletteId, string> = {
  parchment: '#f4efe6',
  ink: '#14151a',
  paper: '#fbfaf7',
  graphite: '#262829',
}

function isPaletteId(value: string | null): value is PaletteId {
  return palettes.some((p) => p.id === value)
}

function readStored(): PaletteId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isPaletteId(stored)) return stored
  } catch {
    // Private mode or blocked storage — fall through to the default.
  }
  return 'parchment'
}

export function usePalette() {
  // Lazy initial state: this app is client-rendered, so reading storage up front
  // is safe and avoids a first pass that would write the default back over the
  // visitor's stored choice.
  const [palette, setPalette] = useState<PaletteId>(readStored)

  useEffect(() => {
    document.documentElement.dataset.palette = palette
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[palette])
    try {
      localStorage.setItem(STORAGE_KEY, palette)
    } catch {
      // Not persisting is fine; the palette still applies for this visit.
    }
  }, [palette])

  const index = palettes.findIndex((p) => p.id === palette)
  const next = palettes[(index + 1) % palettes.length]

  const cycle = useCallback(() => {
    setPalette((current) => {
      const at = palettes.findIndex((p) => p.id === current)
      return palettes[(at + 1) % palettes.length].id
    })
  }, [])

  return { palette, index, next, cycle }
}
