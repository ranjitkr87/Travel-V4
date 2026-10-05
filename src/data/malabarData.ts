export type JourneyCategory =
  | 'ALL JOURNEYS'
  | 'BACKWATER SILENCE'
  | 'HERITAGE & SPICES'
  | 'HIGH RANGE & MIST';

export interface JourneyItem {
  id: string;
  title: string;
  region: string;
  duration: string;
  stayBadge: string;
  category: Exclude<JourneyCategory, 'ALL JOURNEYS'>;
  description: string;
  price: string;
  priceNumeric: number;
  image: string;
  imageAlt: string;
  highlights: string[];
  pacingNote: string;
}

export interface FleetItem {
  id: string;
  classCode: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  rateLabel: string;
  capacity: string;
  idealFor: string;
}

export interface PhilosophyHighlight {
  number: string;
  title: string;
  description: string;
}

export interface DifferenceItem {
  icon: string;
  title: string;
  description: string;
}

export interface AmenityItem {
  icon: string;
  title: string;
  description: string;
}

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrFKfvF3onTzH4-JaEd7-XppGRgl0n0Q97dGcbbkUSoHsrsq49cdJo06s9BOAnWpfoVreR4i9lsgOqGLRoI1bBCP8iJFfl6OvtuB8uIvP9mqCuB1ZSMu4K6xVQVSD-hnenYbtyn6us4uhZpipSaaduMZkVdvPsEUq2k_0Havof6NQqIy5wwVzyGCCNmm-eLAbmkKtzeuWx_QiDV7ABhXYQDBLmUBwkp_sptbHkVh6eW6drzvsDQI7KEg';

export const PHILOSOPHY_HIGHLIGHTS: PhilosophyHighlight[] = [
  {
    number: '01',
    title: 'Zero Tourist Traps',
    description:
      'No forced souvenir warehouses or rushed checkpoint itineraries. Only authentic village encounters and preserved heritage properties.',
  },
  {
    number: '02',
    title: 'Artisans & Elders',
    description:
      'We partner directly with traditional toddy tappers, coir weavers, and Kathakali performers, ensuring ethical and transparent honorariums.',
  },
  {
    number: '03',
    title: 'Quiet Chauffeurs',
    description:
      'Our drivers are seasoned storytellers, certified naturalists, and polite navigators who honor your privacy and travel tempo.',
  },
];

export const JOURNEYS: JourneyItem[] = [
  {
    id: 'backwater-soul',
    title: 'Backwater Soul & Canoe Silence',
    region: 'ALLEPPEY & VEMBANAD',
    duration: '4 DAYS / 3 NIGHTS',
    stayBadge: 'SOLAR KETTUVALLAM',
    category: 'BACKWATER SILENCE',
    description:
      'Glide through secret lagoons in Champakulam and stay in a handcrafted, solar-powered traditional wooden kettuvallam with your private chef.',
    price: '₹38,000',
    priceNumeric: 38000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrFKfvF3onTzH4-JaEd7-XppGRgl0n0Q97dGcbbkUSoHsrsq49cdJo06s9BOAnWpfoVreR4i9lsgOqGLRoI1bBCP8iJFfl6OvtuB8uIvP9mqCuB1ZSMu4K6xVQVSD-hnenYbtyn6us4uhZpipSaaduMZkVdvPsEUq2k_0Havof6NQqIy5wwVzyGCCNmm-eLAbmkKtzeuWx_QiDV7ABhXYQDBLmUBwkp_sptbHkVh6eW6drzvsDQI7KEg',
    imageAlt: 'Backwaters canoe gliding through Champakulam backwaters at sunrise',
    highlights: [
      'Dawn non-motorized country canoe excursion through narrow Kuttanad lotus canals',
      '2 nights aboard a silent, zero-emission solar-powered wooden Kettuvallam with private Syrian Christian & Karimeen chef',
      '1 night at a restored 140-year-old backwater tharavadu homestead on Vembanad island',
      'Private coir-spinning and toddy-tapping interaction with village elders in Champakulam',
    ],
    pacingNote: 'Maximum 2 hours of gentle cruising per day; afternoons reserved for verandah reading and village walks.',
  },
  {
    id: 'fort-kochi-heritage',
    title: 'Fort Kochi Heritage & Spice Trail',
    region: 'FORT KOCHI & MATTANCHERRY',
    duration: '3 DAYS / 2 NIGHTS',
    stayBadge: 'COLONIAL BUNGALOW',
    category: 'HERITAGE & SPICES',
    description:
      'Wander colonial alleys under ancient rain trees, explore historic spice godowns of Jew Town, and dine in preserved private ancestral courtyards.',
    price: '₹24,500',
    priceNumeric: 24500,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2oG2TY3fF9a17hS3Cp_odaqg8kHEB8LP7HQ5n1Hs10xMtJsnMHRQ_zpK0aRuIB_xcbJotrBUzQ7lhItuCbwWeGLiQD9IGpfCQuNCLQNzlTLrGkf4FvpISzYV8qu7G67fQf11PupwudnA8p2mLs_NhbiDCSyHpKuhs-ZTCGwiOFlbZdHVubTMciAP9Pta1SW1_aD6TsSlpdT7ORX1KUdvwvLzVR3XcVmeQF457RkmPH68IMnb7AFgtGg',
    imageAlt: 'Ancient cobblestone alley in Fort Kochi with colonial terracotta architecture and banyan tree',
    highlights: [
      'Private early-morning architectural walk through Portuguese, Dutch, and British precincts before day-trippers arrive',
      'Exclusive tasting of single-estate Tellicherry black pepper and cardamom inside a working Mattancherry spice godown',
      'Intimate green-room interaction with veteran Kathakali masters prior to evening performance',
      'Candlelit Malabar coastal dinner hosted in a 300-year-old lime-plastered courtyard home',
    ],
    pacingNote: 'Entirely walkable & cycle-friendly pace centered around Bastian Street and Mattancherry.',
  },
  {
    id: 'munnar-mist',
    title: 'Munnar Mist & Organic Tea Sanctuary',
    region: 'WESTERN GHATS & MUNNAR',
    duration: '4 DAYS / 3 NIGHTS',
    stayBadge: '5,000 FT HOMESTAY',
    category: 'HIGH RANGE & MIST',
    description:
      'Traverse single-track mountain paths, stay in artisan plantation bungalows, pluck heirloom tea leaves, and search for endemic Sholakili birdlife.',
    price: '₹32,000',
    priceNumeric: 32000,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuJosQTwlOAOtUtkaqKVo33MvKKNGKmuKWFNGjhafST0K8VPMHzeMRkS7HimYQE9tZxmW6GxU-F2LJbUNzVgDvoaCkmdB0mgat7I9aBtgYh1vPk-L97KHCX6RXj6N2EfePPd1v-ZELMaQkg-8QWM1EsOnpz7dbSxlU2W-XAs7ERAiJ08cB9U33Txe1hEi_RA2JF14GSWvnEEvUfjEZzS9KPhntOp2NFw1PJQLD9WxR28FmnB8JTdKmcA',
    imageAlt: 'Rolling mist over emerald green tea plantation in Munnar with organic estate workers',
    highlights: [
      'Guided dawn birding walk in high-altitude Shola cloud forests with a certified Western Ghats naturalist',
      'Artisanal orthodox white and green tea tasting with a seventh-generation planter family',
      'Stay in a stone-and-teak planter bungalow at 5,000 ft overlooking quiet, uncrowded eastern valleys',
      'Chauffeur-driven ascent via scenic Neriamangalam forest corridors with fresh waterfall halts',
    ],
    pacingNote: 'Unhurried high-range acclimatization with fireplace evenings and zero commercial viewpoint queues.',
  },
];

export const FLEET_ITEMS: FleetItem[] = [
  {
    id: 'class-01',
    classCode: 'CLASS 01',
    icon: 'two_wheeler',
    title: 'Local Explorers: Classic 350 & Vespa',
    subtitle: 'Solo / 2 Travelers • Fort Kochi & Coastal Alleys',
    description:
      'Unmatched agility for meandering through breezy fish markets, spice jetties, and Portuguese quarters. Helmet & rain ponchos included.',
    rateLabel: 'Daily & Weekly Hire',
    capacity: '1–2 Riders',
    idealFor: 'Fort Kochi heritage lanes, Vypin island ferry crossings & coastal café hopping',
  },
  {
    id: 'class-02',
    classCode: 'CLASS 02',
    icon: 'directions_car',
    title: 'Refined Sedans: Etios & City',
    subtitle: 'Up to 3 Guests + Luggage • Transfers & Day Excursions',
    description:
      'Quiet, air-conditioned, spotless interiors tailored for comfortable airport runs, backwater pier shuttles, and inter-city commutes.',
    rateLabel: 'Fixed & Chauffeur Rates',
    capacity: 'Up to 3 Guests + 3 Bags',
    idealFor: 'Cochin Airport transfers, Alleppey boat jetty drops & couple road trips',
  },
  {
    id: 'class-03',
    classCode: 'CLASS 03',
    icon: 'airport_shuttle',
    title: 'Premium Hill SUVs: Innova Crysta & Hycross',
    subtitle: '4 to 6 Guests • Western Ghats & Family Journeys',
    description:
      'The gold standard for Kerala’s winding mountain curves. High ground clearance, reclining captain chairs, and ultra-smooth hill suspension.',
    rateLabel: 'Most Popular for Itineraries',
    capacity: '4–6 Guests + Luggage',
    idealFor: 'Multi-day Cochin–Munnar–Thekkady–Alleppey slow travel circuits',
  },
  {
    id: 'class-04',
    classCode: 'CLASS 04',
    icon: 'terrain',
    title: 'High-End 4x4: Defender & Fortuner',
    subtitle: 'Up to 5 Guests • Tea Estates & Wildlife Reserves',
    description:
      'Uncompromising off-road capability for remote Wayanad plantations, deep spice valleys, and private forest retreats where roads end.',
    rateLabel: 'Bespoke Expeditions',
    capacity: 'Up to 5 Guests',
    idealFor: 'Remote Wayanad ridge estates, Silent Valley buffers & off-grid tea sanctuaries',
  },
  {
    id: 'class-05',
    classCode: 'CLASS 05',
    icon: 'rv_hookup',
    title: 'Kerala Glamping Caravans',
    subtitle: '2 to 4 Guests • Mobile Backwater Sanctuary',
    description:
      'Slow living on wheels: equipped with rooftop tenting, teak wood kitchenette, solar power, and certified wilderness camp permissions.',
    rateLabel: 'Self-Sustaining Living',
    capacity: '2–4 Guests (Sleeps 4)',
    idealFor: 'Marari beachside groves, Vagamon pine meadows & slow autonomous trails',
  },
  {
    id: 'class-06',
    classCode: 'CLASS 06',
    icon: 'departure_board',
    title: 'Executive Urbania & Sprinter',
    subtitle: '10 to 18 Guests • Retreats & Multi-Gen Families',
    description:
      'Plush bespoke reclining leather seats, panoramic sightseeing windows, on-board Wi-Fi, and generous luggage capacity for private retreats.',
    rateLabel: 'Group Charters',
    capacity: '10–18 Guests',
    idealFor: 'Multi-generational family reunions, photography residencies & wellness retreats',
  },
];

export const FLEET_AMENITIES: AmenityItem[] = [
  {
    icon: 'local_drink',
    title: 'Fresh Tender Coconut',
    description: 'Cold tender coconuts & glass water bottles in every car.',
  },
  {
    icon: 'verified_user',
    title: 'All Inclusive Upfront',
    description: 'Fuel, state permits, parking, tolls & driver allowance included.',
  },
  {
    icon: 'record_voice_over',
    title: 'Polite Local Drivers',
    description: 'English & Malayalam-speaking chauffeurs of high discretion.',
  },
  {
    icon: 'sanitizer',
    title: 'Daily Deep Detailing',
    description: 'Cleaned, scented with organic lemongrass, thoroughly inspected.',
  },
];

export const MALABAR_DIFFERENCES: DifferenceItem[] = [
  {
    icon: 'storefront',
    title: 'Stationed in Fort Kochi',
    description:
      'A real, welcoming physical studio on historic Bastian Street. Stop by anytime for freshly brewed south Indian filter coffee and honest itinerary planning.',
  },
  {
    icon: 'psychology',
    title: 'Chauffeurs as Guides',
    description:
      'Our drivers are vetted locals who respect the meditative silence of the hills, drive defensively, and know where to find the sweetest pineapples.',
  },
  {
    icon: 'receipt_long',
    title: 'Transparent Pricing',
    description:
      'No surprise surcharges or commission kickbacks at roadside tourist spice shops. What you see is what you pay, down to the last rupee.',
  },
  {
    icon: 'eco',
    title: 'Low-Impact Tourism',
    description:
      'Plastic-free vehicle provisions, support for indigenous weaving clusters, and a commitment to preserving the calm waterways of Vembanad lake.',
  },
];
