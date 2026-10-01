'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Countries that make up the "Australasian" focus region.
const AUSTRALASIA = ['Australia', 'New Zealand', 'Papua New Guinea']

// Asian countries as named in the world-atlas dataset.
const ASIA = [
  'China',
  'India',
  'Japan',
  'South Korea',
  'North Korea',
  'Mongolia',
  'Taiwan',
  'Indonesia',
  'Malaysia',
  'Singapore',
  'Thailand',
  'Vietnam',
  'Laos',
  'Cambodia',
  'Myanmar',
  'Philippines',
  'Brunei',
  'Bangladesh',
  'Nepal',
  'Bhutan',
  'Sri Lanka',
  'Pakistan',
  'Afghanistan',
  'Kazakhstan',
  'Uzbekistan',
  'Turkmenistan',
  'Kyrgyzstan',
  'Tajikistan',
  'Iran',
  'Iraq',
  'Saudi Arabia',
  'Yemen',
  'Oman',
  'United Arab Emirates',
  'Qatar',
  'Kuwait',
  'Jordan',
  'Israel',
  'Lebanon',
  'Syria',
  'Georgia',
  'Armenia',
  'Azerbaijan',
  'Turkey',
  'Timor-Leste',
]

const HIGHLIGHT = new Set([...AUSTRALASIA, ...ASIA])

export function WorldMap() {
  return (
    <div className="w-full [&_svg]:h-auto [&_svg]:w-full">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 165, center: [10, -8] }}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string
              const isFocus = HIGHLIGHT.has(name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isFocus ? 'var(--color-brand)' : 'var(--color-muted)'}
                  stroke="var(--color-background)"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: 'none' },
                    hover: {
                      outline: 'none',
                      fill: isFocus
                        ? 'var(--color-brand-2)'
                        : 'var(--color-muted-foreground)',
                    },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}
