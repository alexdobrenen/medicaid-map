import { useState } from 'react'

export function InfoButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="ml-2 w-5 h-5 rounded-full border border-white/40 text-white/60 text-xs font-bold hover:border-white/80 hover:text-white/90 transition-colors flex items-center justify-center shrink-0"
        aria-label="Data source information"
      >
        i
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-surface-alt border border-border rounded-lg max-w-lg w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-white font-semibold text-base">About This Data</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white/80 transition-colors ml-4 text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm text-white/70 leading-relaxed">
              <p>
                This map visualizes <strong className="text-white/90">Medicaid and means-tested public
                coverage enrollment</strong> across US counties and ZIP codes.
              </p>

              <div>
                <p className="text-white/90 font-medium mb-1">Data Source</p>
                <p>
                  <a
                    href="https://www.census.gov/data/developers/data-sets/acs-5year.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-light underline hover:text-white transition-colors"
                  >
                    US Census Bureau — American Community Survey (ACS)
                  </a>
                  {' '}5-Year Estimates, 2020–2024
                </p>
                <p className="mt-1">
                  Table <strong className="text-white/90">C27007</strong>: Medicaid/Means-Tested Public
                  Coverage by Sex by Age
                </p>
              </div>

              <div>
                <p className="text-white/90 font-medium mb-1">What's Included</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Total population (coverage universe)</li>
                  <li>Medicaid enrollees by sex (male / female)</li>
                  <li>Medicaid enrollees by age group (under 19 / 19–64 / 65+)</li>
                </ul>
              </div>

              <div>
                <p className="text-white/90 font-medium mb-1">Geography</p>
                <p>
                  County-level data is fetched on load. ZIP code (ZCTA) data loads when you
                  drill into a county. County boundaries come from the Census Bureau TIGER/Line
                  shapefiles via the TIGERweb API.
                </p>
              </div>

              <p className="text-white/50 text-xs pt-1">
                ACS 5-year estimates pool survey responses over a 5-year period to produce
                reliable estimates for small geographies. Values reflect the 2020–2024 survey window.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
