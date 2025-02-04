"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { useMemo } from "react";

// Define a color scale from light green to dark green
const colorScale = scaleLinear()
  .domain([0, 1]) // Values range between 0 and 1
  .range(["#DFFFD6", "#004D00"]); // Light green to dark green

export default function WorldMap() {
  // Memoized function to assign a unique value to each country
  const countryColors = useMemo(() => {
    const colors = {};
    return (id) => {
      if (!colors[id]) {
        // Assign a pseudo-random value between 0 and 1
        const value = (parseInt(id, 36) % 100) / 100; // Normalize to 0-1
        colors[id] = colorScale(value);
      }
      return colors[id];
    };
  }, []);

  return (
    <div className="w-[95%] h-full flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-2">World Map</h2>
      <ComposableMap projectionConfig={{ scale: 200 }}>
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: countryColors(geo.id), outline: "none" },
                  hover: { fill: "#253031", outline: "none" },
                  pressed: { fill: "#000", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
