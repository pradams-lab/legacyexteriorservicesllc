export const PHONE_DISPLAY = "(214) 205-4075";
export const PHONE_HREF = "tel:+12142054075";
export const BUSINESS_NAME = "Legacy Exterior Services LLC";
export const RATING = 4.5;
export const REVIEW_COUNT = 16;
export const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/Legacy+Exterior+Services+LLC/@32.743072,-96.963595,6z/data=!4m6!3m5!1s0x60c3b6fda74ce647:0x90d1b830ce6b0140!8m2!3d32.7430719!4d-96.963595?hl=en-GB";

export const SERVICE_AREAS = [
  "Dallas",
  "Plano",
  "Frisco",
  "Allen",
  "McKinney",
  "Fort Worth",
];

export type ServiceSlug =
  | "fence-deck-staining"
  | "pressure-washing"
  | "house-soft-washing"
  | "wood-restoration";

export interface ServicePoint {
  title: string;
  body: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  snippet: string;
  pageHeader: string;
  subHero: string;
  problem: ServicePoint[];
  solution: ServicePoint[];
}

export const services: Service[] = [
  {
    slug: "fence-deck-staining",
    name: "Fence & Deck Staining",
    snippet:
      "Revitalize gray, weathered wood with deep-penetrating stains and professional protective sealing.",
    pageHeader: "Professional Fence & Deck Staining & Restoration",
    subHero:
      "Protect your outdoor wooden investments from the harsh Texas climate with deep-penetrating stains and professional sealing.",
    problem: [
      {
        title: "The Harsh Climate Impact",
        body: "The Texas sun, UV rays, and heavy seasonal rains cause exterior wood to dry out, turn a weathered gray, splinter, and eventually rot.",
      },
      {
        title: "The DIY Mistake",
        body: "Slapping cheap paint or thin stains on unwashed, damp wood traps moisture inside the grain, leading to rapid peeling and wood decay within months.",
      },
    ],
    solution: [
      {
        title: "Deep Cleaning & Prep",
        body: "We wash away embedded dirt, mold, and old flaking finishes to open up the wood pores.",
      },
      {
        title: "Premium Staining Application",
        body: "We apply high-grade, oil- or water-based transparent and semi-transparent stains that lock out moisture and prevent UV fading while highlighting the natural wood grain.",
      },
      {
        title: "Protective Sealing",
        body: "A final waterproof barrier seals the structure to ensure long-lasting durability.",
      },
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing & Surface Cleaning",
    snippet:
      "Blast away stubborn dirt, mold, and grime from driveways, walkways, and patios.",
    pageHeader: "Commercial-Grade Pressure Washing & Concrete Cleaning",
    subHero:
      "Eradicate stubborn stains, oil spots, and organic grime from driveways, sidewalks, and patios.",
    problem: [
      {
        title: "Deep-Set Porous Stains",
        body: "Concrete and stone are porous materials that absorb automotive oil, rust, tire marks, and muddy runoff over time.",
      },
      {
        title: "The Homeowner Hazard",
        body: "Algae and mildew buildup on concrete walkways and pool decks create slippery, dangerous walking surfaces when wet.",
      },
    ],
    solution: [
      {
        title: "Industrial Surface Cleaners",
        body: 'We utilize high-flow commercial pressure systems combined with surface scrubbers to eliminate "zebra stripes" and uneven cleaning.',
      },
      {
        title: "Targeted Pre-Treatments",
        body: "Specialized eco-safe degreasers are applied to break down heavy oil and grease spots before the high-pressure rinse.",
      },
    ],
  },
  {
    slug: "house-soft-washing",
    name: "Exterior House Soft-Washing",
    snippet:
      "Gentle cleaning methods that safely strip away mildew and organic growth from siding and exterior walls.",
    pageHeader: "Safe Exterior House Soft-Washing",
    subHero:
      "Gently strip away mildew, mold, and cobwebs from siding, brick, and stucco without risking property damage.",
    problem: [
      {
        title: "High-Pressure Dangers",
        body: "Blasting delicate vinyl siding, stucco, or older mortar with high-pressure water forces moisture behind the walls, causing structural rot and cracked panels.",
      },
      {
        title: "Unseen Organic Growth",
        body: "Mold and mildew spores embed themselves deep into exterior textures, returning quickly if only rinsed with water.",
      },
    ],
    solution: [
      {
        title: "Low-Pressure Application",
        body: 'We use a specialized "soft wash" delivery method that operates at garden-hose pressure levels.',
      },
      {
        title: "Eco-Friendly Elimination",
        body: "Safe cleaning solutions target and neutralize mold, mildew, and algae spores at the cellular level, keeping your siding cleaner for much longer.",
      },
    ],
  },
  {
    slug: "wood-restoration",
    name: "Wood Restoration & Prep",
    snippet:
      "Proper surface preparation and cleaning to ensure your wood fencing and outdoor structures last for years.",
    pageHeader: "Expert Wood Restoration & Surface Preparation",
    subHero:
      "Bring dead, gray fences and neglected outdoor structures back to life through meticulous restoration techniques.",
    problem: [
      {
        title: "Neglected Maintenance",
        body: "Years of neglect cause wood fences and arbors to oxidize, turning entirely gray and losing their structural integrity.",
      },
      {
        title: "Improper Stripping",
        body: "Old failing sealants prevent new treatments from adhering properly unless completely neutralized and stripped away first.",
      },
    ],
    solution: [
      {
        title: "Complete Restoration Wash",
        body: "Neutralizing agents and wood brighteners are used to strip away dead wood fibers and restore the timber's natural PH balance and bright color.",
      },
      {
        title: "Sanding & Smoothing",
        body: "Rough splinters and damaged spots are prepped and smoothed to ensure a flawless finish before coating.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}