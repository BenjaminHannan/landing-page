import type { CSSProperties } from 'react'
import { palettes, usePalette } from '../hooks/usePalette'
import './PaletteLines.css'

/**
 * The detail in the top-left corner: four stacked rules, one per palette.
 * The active rule is thicker and takes the accent colour; clicking the control
 * advances to the next palette, and the rules retune in a staggered sweep.
 */
export default function PaletteLines() {
  const { palette, index, next, cycle } = usePalette()

  return (
    <div className="palette">
      <button
        type="button"
        className="palette__button"
        onClick={cycle}
        aria-label="Change colour palette"
        aria-describedby="palette-hint"
      >
        <span className="palette__rules" aria-hidden="true">
          {palettes.map((entry, i) => (
            <span
              key={entry.id}
              className="palette__rule"
              data-active={entry.id === palette}
              style={{ '--rule-delay': `${i * 55}ms` } as CSSProperties}
            />
          ))}
        </span>
      </button>

      <span id="palette-hint" className="sr-only">
        Current palette: {palettes[index]?.name}. Next: {next.name}.
      </span>
      <span className="sr-only" role="status">
        {palettes[index]?.name} palette
      </span>
    </div>
  )
}
