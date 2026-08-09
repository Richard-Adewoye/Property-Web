export const PROPERTY_TYPES = [
  { id: '', label: 'All', icon: '🏢' },
  { id: 'house', label: 'House', icon: '🏠' },
  { id: 'apartment', label: 'Apartment', icon: '🏙️' },
  { id: 'office', label: 'Office', icon: '💼' },
  { id: 'shophouse', label: 'Shophouse', icon: '🛍️' }
];

export const CITIES = [
  'City of Evil State',
  'Jakarta',
  'Bali',
  'Surabaya',
  'Bandung',
  'New York',
  'London'
];

export const ARCHITECTURE_TYPES = [
  'Vintage Classic',
  'Modern Luxury',
  'Minimalist',
  'Penthouse',
  'Tropical Villa'
];

export const PROPERTIES = [
  {
    id: 'prop-1',
    name: 'Setay Townhouse',
    city: 'City of Evil State',
    category: 'house',
    type: 'Vintage Classic',
    listingType: 'buy',
    price: '$450,000',
    beds: 3,
    baths: 2,
    sqft: '1,850 sqft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'A charming townhouse featuring classic architectural elements combined with state-of-the-art interior design.',
    location: 'Central Evil State Ave, Lot 4',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80', title: 'Facade Exterior', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', title: 'Grand Living Room', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80', title: 'Gourmet Kitchen', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80', title: 'Master Bedroom', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', title: 'Private Garden Terrace', type: 'exterior' }
    ],
    coordinates: { lat: -6.1754, lng: 106.8272 },
    neighborhoodPoints: [
      { name: 'Central Evil State MRT Station', distance: '0.3 km', type: 'transit' },
      { name: 'St. Jude International Academy', distance: '1.2 km', type: 'school' },
      { name: 'Grand Horizon Mall', distance: '0.8 km', type: 'shopping' },
      { name: 'General Medical Center', distance: '1.5 km', type: 'medical' }
    ],
    specs: {
      yearBuilt: '2022',
      parking: '2 Covered Slots',
      structure: 'Teak Wood & Reinforced Steel',
      furnishing: 'Semi-Furnished',
      electricity: '4,400 VA',
      view: 'City & Courtyard View'
    }
  },
  {
    id: 'prop-2',
    name: 'Permata Hijau Suites',
    city: 'Jakarta',
    category: 'apartment',
    type: 'Modern Luxury',
    listingType: 'rent',
    price: '$3,800/mo',
    beds: 4,
    baths: 3,
    sqft: '2,400 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'High-rise luxury suites with panoramic city views, private sky deck, and premium 24/7 security services.',
    location: 'Permata Hijau Boulevard, Tower A',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', title: 'Exterior Highrise View', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80', title: 'Skyline Penthouse Lounge', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', title: 'Designer Kitchen & Bar', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80', title: 'Marble En-Suite Bathroom', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', title: 'Private Sky Swimming Pool', type: 'amenity' }
    ],
    coordinates: { lat: -6.2215, lng: 106.7820 },
    neighborhoodPoints: [
      { name: 'Senayan City Shopping Mall', distance: '1.1 km', type: 'shopping' },
      { name: 'GBK Sports Stadium Park', distance: '1.8 km', type: 'park' },
      { name: 'Palmerah Commuter Station', distance: '0.9 km', type: 'transit' },
      { name: 'Jakarta International School', distance: '2.5 km', type: 'school' }
    ],
    specs: {
      yearBuilt: '2024',
      parking: '3 Dedicated Underground Slots',
      structure: 'Post-Tensioned Concrete & Double Glass Glazing',
      furnishing: 'Fully Furnished Premium',
      electricity: '11,000 VA',
      view: '360° Jakarta Skyline'
    }
  },
  {
    id: 'prop-3',
    name: 'Cahaya Alam Setu',
    city: 'City of Evil State',
    category: 'house',
    type: 'Vintage Classic',
    listingType: 'sell',
    price: '$310,000',
    beds: 2,
    baths: 2,
    sqft: '1,200 sqft',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    description: 'Warm, sunlit family residence surrounded by serene garden courtyards and eco-friendly features.',
    location: 'Setu Natural Residence Park #12',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', title: 'Sunny Courtyard Entrance', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', title: 'Minimalist Sunroom', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80', title: 'Open Kitchen Dining', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80', title: 'Cozy Guest Bedroom', type: 'interior' }
    ],
    coordinates: { lat: -6.1900, lng: 106.8400 },
    neighborhoodPoints: [
      { name: 'Setu Eco Park', distance: '0.2 km', type: 'park' },
      { name: 'East Ring Expressway Gate', distance: '1.4 km', type: 'transit' },
      { name: 'Natural Fresh Farmer Market', distance: '0.5 km', type: 'shopping' }
    ],
    specs: {
      yearBuilt: '2021',
      parking: '1 Carport',
      structure: 'Brick & Natural Bamboo Composite',
      furnishing: 'Unfurnished',
      electricity: '2,200 VA',
      view: 'Botanical Garden View'
    }
  },
  {
    id: 'prop-4',
    name: 'SouthGate Apartment',
    city: 'Jakarta',
    category: 'apartment',
    type: 'Minimalist',
    listingType: 'rent',
    price: '$2,200/mo',
    beds: 3,
    baths: 2,
    sqft: '1,650 sqft',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek geometric high-rise apartment positioned directly above prime transit hubs and shopping centers.',
    location: 'SouthGate District, Unit 18B',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80', title: 'Modern Living Space', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80', title: 'Contemporary Open Layout', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80', title: 'Master Bedroom Loft', type: 'interior' }
    ],
    coordinates: { lat: -6.3000, lng: 106.8300 },
    neighborhoodPoints: [
      { name: 'Tanjung Barat Commuter Rail', distance: '0.1 km', type: 'transit' },
      { name: 'AEON Mall Southgate', distance: '0.2 km', type: 'shopping' }
    ],
    specs: {
      yearBuilt: '2023',
      parking: '1 Reserved Underground Slot',
      structure: 'Steel Frame & Granite Tiles',
      furnishing: 'Fully Furnished',
      electricity: '3,500 VA',
      view: 'South Jakarta Skyline'
    }
  },
  {
    id: 'prop-5',
    name: 'Sharia Residence',
    city: 'Bali',
    category: 'shophouse',
    type: 'Vintage Classic',
    listingType: 'sell',
    price: '$520,000',
    beds: 3,
    baths: 2,
    sqft: '2,100 sqft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-purpose boutique shophouse and villa with private plunge pool and ground-floor commercial layout.',
    location: 'Canggu Beach Road #45',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', title: 'Exterior Shophouse Facade', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80', title: 'Tropical Pool Deck', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80', title: 'Commercial Studio Floor', type: 'interior' }
    ],
    coordinates: { lat: -8.6478, lng: 115.1385 },
    neighborhoodPoints: [
      { name: 'Echo Beach Sunset Point', distance: '0.7 km', type: 'park' },
      { name: 'Canggu Design Village Hub', distance: '0.3 km', type: 'shopping' }
    ],
    specs: {
      yearBuilt: '2022',
      parking: '2 Front Commercial Spaces',
      structure: 'Volcanic Stone & Balinese Hardwood',
      furnishing: 'Semi-Furnished',
      electricity: '5,500 VA',
      view: 'Ocean Breeze & Rice Fields'
    }
  },
  {
    id: 'prop-6',
    name: 'South Townhouse & Offices',
    city: 'Surabaya',
    category: 'office',
    type: 'Penthouse',
    listingType: 'buy',
    price: '$980,000',
    beds: 5,
    baths: 4,
    sqft: '3,200 sqft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Prestige corporate headquarters space with integrated executive living quarters on top floors.',
    location: 'South Financial Plaza, 14th Floor',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', title: 'Penthouse Entrance', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', title: 'Executive Boardroom & Suite', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', title: 'Private Helipad & Deck', type: 'exterior' }
    ],
    coordinates: { lat: -7.2575, lng: 112.7521 },
    neighborhoodPoints: [
      { name: 'Surabaya Financial Center', distance: '0.2 km', type: 'transit' },
      { name: 'Grand City Convention Center', distance: '1.0 km', type: 'shopping' }
    ],
    specs: {
      yearBuilt: '2023',
      parking: '4 VIP Parking Passes',
      structure: 'Aluminium Curtain Wall & Smart Automation',
      furnishing: 'Fully Furnished Office & Living',
      electricity: '16,500 VA',
      view: 'Surabaya Commercial Harbor View'
    }
  },
  {
    id: 'prop-7',
    name: 'Metropolitan Sky Loft',
    city: 'Bandung',
    category: 'apartment',
    type: 'Modern Luxury',
    listingType: 'rent',
    price: '$1,950/mo',
    beds: 2,
    baths: 2,
    sqft: '1,400 sqft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    description: 'Urban loft residence featuring exposed concrete columns, floor-to-ceiling glass, and high-speed fibre internet.',
    location: 'Dago Hillside Road #88',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80', title: 'Loft Living Space', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80', title: 'Open Kitchen Island', type: 'interior' }
    ],
    coordinates: { lat: -6.8800, lng: 107.6100 },
    neighborhoodPoints: [
      { name: 'ITB Campus Green', distance: '1.2 km', type: 'school' },
      { name: 'Dago Cafe & Art District', distance: '0.3 km', type: 'shopping' }
    ],
    specs: {
      yearBuilt: '2023',
      parking: '1 Covered Carport',
      structure: 'Exposed Architectural Concrete',
      furnishing: 'Fully Furnished Loft',
      electricity: '3,500 VA',
      view: 'Bandung Pine Valley View'
    }
  },
  {
    id: 'prop-8',
    name: 'Emerald Estate Villa',
    city: 'Bali',
    category: 'house',
    type: 'Tropical Villa',
    listingType: 'buy',
    price: '$1,250,000',
    beds: 4,
    baths: 4,
    sqft: '3,800 sqft',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    description: 'Exquisite tropical sanctuary with infinity pool overlooking lush palm valleys and custom teak wood finishes.',
    location: 'Ubud Highlands Estate, Villa 3',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', title: 'Infinity Pool & Valley View', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', title: 'Open Pavilion Lounge', type: 'interior' },
      { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', title: 'Stone Bathing Sanctuary', type: 'interior' }
    ],
    coordinates: { lat: -8.5069, lng: 115.2625 },
    neighborhoodPoints: [
      { name: 'Ubud Monkey Forest Sanctuary', distance: '2.0 km', type: 'park' },
      { name: 'Maya Ubud Resort Spa', distance: '0.8 km', type: 'medical' }
    ],
    specs: {
      yearBuilt: '2024',
      parking: '2 Covered Garages',
      structure: 'Solid Reclaimed Teak & Volcanic Slate',
      furnishing: 'Fully Furnished Bespoke',
      electricity: '7,700 VA',
      view: 'Jungle & River Gorge View'
    }
  },
  {
    id: 'prop-9',
    name: 'Symphony Commercial Hub',
    city: 'Jakarta',
    category: 'shophouse',
    type: 'Modern Luxury',
    listingType: 'sell',
    price: '$740,000',
    beds: 3,
    baths: 3,
    sqft: '2,800 sqft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Prime commercial shophouse suited for flagship retail or high-end agency office space in central Jakarta.',
    location: 'SCBD Commercial Block B7',
    featured: true,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', title: 'Commercial Glass Facade', type: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80', title: 'Open Concept Office Floor', type: 'interior' }
    ],
    coordinates: { lat: -6.2250, lng: 106.8090 },
    neighborhoodPoints: [
      { name: 'Pacific Place Mall SCBD', distance: '0.4 km', type: 'shopping' },
      { name: 'Istora Mandiri MRT Station', distance: '0.5 km', type: 'transit' }
    ],
    specs: {
      yearBuilt: '2023',
      parking: '3 Customer Parking Spaces',
      structure: 'Reinforced Concrete & Tempered Glass',
      furnishing: 'Semi-Furnished Office',
      electricity: '11,000 VA',
      view: 'SCBD Avenue'
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Asooooyyy, I once bought a house with this protah agency! Now I live in a comfortable and safe apartment of course. Low prices, easy payments, no hassle at all",
    author: "Endang Susanti",
    role: "Private Employees",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "Finding our dream property through ProtAh was the smoothest experience. Their team guided us through every step and the joint account security gave us 100% confidence.",
    author: "Budi Santoso",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "As a real estate investor, access to exclusive early-bird projects is invaluable. ProtAh is by far the most reliable platform for verified high-yield listings.",
    author: "Sarah Jenkins",
    role: "Property Investor",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];
