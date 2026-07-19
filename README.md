# Medicaid Map

Interactive choropleth map of Medicaid enrollment across US counties and ZIP codes.

## Data

**Source:** [US Census Bureau ACS 5-Year Estimates, 2020–2024](https://www.census.gov/data/developers/data-sets/acs-5year.html) — Table C27007 (Medicaid/Means-Tested Public Coverage by Sex by Age)

**API:** `https://api.census.gov/data/2024/acs/acs5`

County data loads on startup; ZIP code (ZCTA) data loads on demand when a county is selected. Enrollment rate (enrollees ÷ total population) is computed client-side and used to color the map. Data is cached for 10 minutes via TanStack Query.

## Stack

React · TypeScript · Mapbox GL · Tailwind CSS · Census ACS API
