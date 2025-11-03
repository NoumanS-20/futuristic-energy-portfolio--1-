import { Activity } from './types';

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 1,
    title: 'Offshore Wind Power Generation',
    navLabel: 'Activity 1: Wind',
    problemStatement: "An industrialized coastal region is facing mounting pressure to decarbonize its energy sector to combat climate change and improve air quality for its dense population. However, land for large-scale renewable projects like solar farms is scarce and expensive. The region's power grid is also struggling to meet peak demand, leading to instability and the risk of blackouts. A large-scale, reliable, and clean energy source is needed that doesn't compete for valuable land.",
    diagram: [], // Diagram data is now in the component itself
    explanation: {
      source: "The primary energy source is the strong, consistent wind found over the ocean. An offshore wind farm, comprised of numerous large turbines, captures this kinetic energy.",
      conversion: "Wind forces the turbine blades to rotate, spinning a generator to convert mechanical energy into electricity. This power is collected at an offshore substation, where its voltage is increased for efficient transport.",
      output: "Electricity is transmitted to an onshore substation via a sub-sea high-voltage cable. It is then conditioned and fed into the national power grid, providing clean energy to the coastal city and surrounding region.",
      relevance: "Offshore wind power is a powerful solution for densely populated coastal areas. It generates massive amounts of clean electricity without using valuable land, improves grid stability, and drives decarbonization efforts."
    },
  },
  {
    id: 2,
    title: 'Biomass Gasification Microgrid',
    navLabel: 'Activity 2: Biomass',
    problemStatement: "A remote agricultural community lacks access to a stable electrical grid, hindering economic development. Simultaneously, it generates thousands of tons of agricultural waste (e.g., rice husks) which are often burned in open fields, causing severe air pollution. The community needs a self-sufficient energy solution that turns an environmental liability into a valuable local resource.",
    diagram: [], // Diagram data is now in the component itself
    explanation: {
      source: "The system uses agricultural waste, such as rice husks or corn stover, as its primary feedstock. This biomass is a renewable, carbon-neutral energy source that is locally abundant.",
      conversion: "The biomass is converted into a combustible 'syngas' through gasification—a high-temperature, low-oxygen process. After cleaning, this syngas fuels an engine-generator plant to produce electricity.",
      output: "The plant generates stable, on-demand electricity for a local microgrid, powering homes, farms, and community centers. A valuable co-product, biochar, can be used to enrich the soil, creating a circular economy.",
      relevance: "Biomass gasification creates energy independence for remote communities. It provides reliable power, reduces pollution from agricultural burning, creates local jobs, and improves soil health, fostering sustainable development."
    },
  },
  {
    id: 3,
    title: 'Geothermal Energy',
    navLabel: 'Activity 3: Geothermal',
    problemStatement: "A remote community in a volcanically active region experiences long, harsh winters, creating a massive demand for both electricity and heating. The community is dependent on expensive, carbon-intensive fossil fuels trucked in over long distances, leading to high energy bills and pollution. They need a reliable, 24/7 power source that is immune to weather disruptions and can provide both clean electricity and a sustainable source of heat, leveraging their unique geological advantage.",
    diagram: [], // Diagram data is now in the component itself
    explanation: {
      source: "The energy source is the Earth's natural subterranean heat. A geothermal well is drilled deep into underground reservoirs to access high-temperature water or steam, which is trapped in porous rock formations.",
      conversion: "The extracted steam (or hot water that flashes into steam) is directed at high pressure to spin the blades of a turbine. The turbine's rotational motion is connected to a generator, which converts it into electrical energy. The steam is then condensed back into water.",
      output: "The primary output is clean, reliable, baseload electricity that is fed into the local power grid for community use. The condensed water is then reinjected back into the geothermal reservoir, making the process sustainable by replenishing the source.",
      relevance: "Geothermal power is a highly reliable renewable energy source, not dependent on weather conditions like solar or wind. It provides a stable power supply with a small land footprint and very low greenhouse gas emissions, making it an excellent option for decarbonizing a community's energy supply."
    },
  },
];