import { imageAssets } from './images';

export const services = [
  {
    id: 1,
    title: 'Domestic Tour Package',
    description: 'Explore the diverse beauty of India with our curated domestic tour packages covering all regions.',
    fullDescription: 'Discover India with Tripsy Holidays\n\nFrom the majestic Himalayas in the North to the serene backwaters of the South, from the golden deserts of the West to the lush valleys of the East — Tripsy Holidays has every corner of India beautifully covered.\n\nOur domestic tour packages are thoughtfully designed to suit every traveler\'s preference:\n• Adventure seekers\n• Spiritual explorers\n• Culture enthusiasts\n• Relaxation seekers\n\nWe blend the popular routes with fresh experiences, ensuring every journey feels new and exciting.\n\nEach package is delightful, immersive, and value-packed, crafted to deliver:\n• Comfort & convenience\n• Unforgettable memories\n• Authentic experiences\n• Transparent pricing with no hidden costs\n\nOur destinations include:\n• Thrilling Ladakh expeditions\n• Peaceful Kerala retreats\n• Royal Rajasthan family trips\n• Himalayan adventures\n• Desert experiences\n• Beach getaways\n\nAt Tripsy Holidays, we cater to families, groups of friends, and corporate travelers, creating customized itineraries that match your interests and style making sure your India trip is nothing short of extraordinary.',
    icon: '🏔️',
    category: 'Tours',
    features: [
      'Guided tours across all Indian destinations',
      'Flexible duration options (3-15 days)',
      'Premium hotel accommodations',
      'Local cuisine and culinary experiences',
      'AC Transportation with driver',
      'Professional multilingual guides',
      'Fully customizable itineraries',
      'Adventure & spiritual activities included'
    ],
    pricing: '₹15,000 - ₹50,000 per person',
    image: imageAssets.services.domestic
  },
  {
    id: 2,
    title: 'International Tour Package',
    description: 'Explore exotic global destinations with premium international travel packages.',
    fullDescription: 'Explore the World Beyond Borders\n\nThe world is full of breathtaking destinations waiting to be explored and with Tripsy Holidays your global adventure begins in style.\n\nDestinations We Cover:\n• Dubai\'s shimmering skyline\n• Paris\'s romantic streets\n• Bali\'s tropical charm\n• Switzerland\'s snow-covered landscapes\n• And many more across Asia, Europe, Americas & Africa\n\nOur international tour packages are thoughtfully curated to offer you the best blend of:\n• Comfort\n• Culture\n• Unforgettable experiences\n\nWhether it\'s:\n• Family holidays\n• Honeymoon escapes\n• Friends\' getaways\n• Corporate retreats\n\nWe have something special for everyone.\n\n✨ What Makes Our Packages Special:\n🏨 Premium stays & curated itineraries\n🍽 Inclusive meals with no hidden costs\n✈ Hassle-free visa, flight & transfer assistance\n🗺 Personalized experiences based on your preferences\n💑 Exclusive honeymoon & couple packages\n🧭 Expert tour managers ensuring smooth travel',
    icon: '🌍',
    category: 'Tours',
    features: [
      'Complete visa assistance and documentation',
      'International flight bookings on all airlines',
      'Comprehensive travel insurance included',
      'Multi-country package options available',
      'Currency exchange and financial assistance',
      'Airport transfers and local transportation',
      'Expert local guides in each destination',
      '24/7 multilingual support hotline',
      'Travel documents and e-visa handling'
    ],
    pricing: '₹45,000 - ₹3,00,000 per person',
    image: imageAssets.services.international
  },
  {
    id: 3,
    title: 'Spiritual Tours',
    description: 'Sacred pilgrimages and spiritual journeys to India\'s holiest destinations and sacred sites.',
    fullDescription: 'Embark on a soul-stirring journey with Tripsy Holidays, where every destination brings you closer to divinity. Our Spiritual Tour Packages are thoughtfully designed for devotees and seekers who wish to explore India\'s most sacred shrines, ancient temples, and holy rivers in comfort and peace.\n\nExplore Sacred Destinations:\n• Ganga\'s tranquil banks in Haridwar & Rishikesh\n• Divine aura of Kedarnath & Badrinath\n• Sacred Vaishno Devi shrine\n• Varanasi\'s evening aarti serenity\n• Shirdi Sai Baba\'s blessings\n• Rameshwaram\'s sacred beauty\n• Jagannath Puri\'s timeless grace\n• Kailash Mansarovar pilgrimage\n• Chardham Yatra\n• Do Dhaam Yatra\n\nAll experiences are under the seamless care of Tripsy Holidays.\n\n✨ Our Spiritual Packages Include:\n🚐 Comfortable transportation with experienced drivers\n🏨 Clean, convenient & devotional-friendly accommodations\n🍛 Pure vegetarian meals during the trip\n🕉 Guided visits to temples, ghats & sacred sites\n🙏 Tailored itineraries for groups, families & elderly travelers\n\nSpecial Features:\n• Meditation sessions\n• Yoga practices\n• Spiritual counseling\n• Ritual participation\n• Holy bath arrangements\n\nWith Tripsy Holidays, your spiritual journey becomes effortless, peaceful, and deeply fulfilling. Let us take care of all arrangements so you can focus on prayers, peace, and purpose.',
    icon: '🙏',
    category: 'Spiritual',
    features: [
      'Sacred temple visits and darshan',
      'Guided spiritual rituals and ceremonies',
      'Yoga and meditation sessions',
      'Pilgrimage-class accommodations',
      'Experienced spiritual guides',
      'Active religious ceremony participation',
      'Holy river baths and pujas',
      'Group pilgrimage discounts',
      'Spiritual counseling available'
    ],
    pricing: '₹8,000 - ₹1,50,000 per person',
    image: imageAssets.services.spiritual
  },
  {
    id: 4,
    title: 'Corporate Travels',
    description: 'Comprehensive corporate group travel solutions for business retreats and team building.',
    fullDescription: 'Elevate your corporate travel experience with specialized corporate travel services. We handle employee incentive trips, executive retreats, team-building conferences, and business travel logistics across India and internationally. Our programs combine leisure with productivity, featuring adventure activities, wellness sessions, meeting facilities, and memorable experiences that strengthen team bonding and business relationships.',
    icon: '💼',
    category: 'Corporate',
    features: [
      'Fully customized itineraries for teams',
      'Team-building and bonding activities',
      'Meeting and conference room facilities',
      'Group hotel accommodations',
      'Significant volume discounts',
      'Flexible scheduling and dates',
      'Transparent budget management',
      'ROI reporting and analytics',
      'Dedicated corporate coordinator'
    ],
    pricing: '₹15,000 - ₹2,00,000+ per person',
    image: imageAssets.services.corporate
  },
  {
    id: 5,
    title: 'Fixed Departure',
    description: 'Join confirmed group tours on set dates with guaranteed departures and like-minded travelers.',
    fullDescription: 'Join our fixed departure group tours and travel with like-minded explorers. We offer confirmed departures on pre-planned dates across all destinations - domestic and international. Perfect for solo travelers and couples who want to join organized tours without private group markups. Enjoy shared experiences, group discounts, new friendships, and the camaraderie of fellow travelers. All featured packages have guaranteed minimum group sizes.',
    icon: '📅',
    category: 'Group Tours',
    features: [
      'Confirmed departure dates guaranteed',
      'Small group experience (8-20 people)',
      'Like-minded fellow travelers',
      'Fixed transparent group pricing',
      'No solo traveler surcharges',
      'Pre-planned detailed itineraries',
      'Group social activities included',
      'Significant cost-effective pricing',
      'Group photo sessions included'
    ],
    pricing: '₹10,000 - ₹80,000 per person',
    image: imageAssets.services.domestic
  },
  {
    id: 6,
    title: 'Hotel Booking',
    description: 'Exclusive hotel reservations with special negotiated rates across India and worldwide.',
    fullDescription: 'Access our extensive network of verified hotels, resorts, and accommodations worldwide. We have partnerships with 5-star luxury hotels, 3-4 star business hotels, budget-friendly options, heritage properties, and unique boutique stays. Enjoy exclusive rates and upgrades not available to the general public. From luxury resorts in Maldives to mountain lodges in Himachal, beach shacks in Goa to houseboats in Kerala - we have perfect accommodations for every budget and preference.',
    icon: '🏨',
    category: 'Accommodation',
    features: [
      'Best negotiated hotel rates',
      'Complimentary room upgrades',
      'Extended late checkout options',
      'Flexible cancellation policies',
      'Loyalty points and rewards',
      'Travel insurance bundling',
      'Group booking special rates',
      'Price match guarantee',
      'Free cancellation (select properties)'
    ],
    pricing: 'Negotiated rates (save 15-40%)',
    image: imageAssets.services.hotels
  },
  {
    id: 7,
    title: 'Air Ticketing',
    description: 'Competitive flight bookings and airfare management for all domestic and international airlines.',
    fullDescription: 'Book flights with confidence through our extensive airline partnerships. We cover all major domestic airlines (Air India, IndiGo, Jet Airways, SpiceJet, Vistara) and international carriers. Our expert travel consultants find the best routes, optimal timings, and competitive fares for your journey. Get hassle-free rebooking, flexible cancellations, travel insurance options, and dedicated flight support throughout your journey.',
    icon: '✈️',
    category: 'Transport',
    features: [
      'All major airlines covered globally',
      'Best competitive fare guarantee',
      'Flexible booking options',
      'Free date changes and modifications',
      'Hassle-free cancellation support',
      'Preferred seat selection assistance',
      'Baggage allowance management',
      'Real-time flight tracking',
      'Visa requirements consultation'
    ],
    pricing: 'Competitive market rates (select best fares)',
    image: imageAssets.services.flights
  },
  {
    id: 8,
    title: 'Adventure Tours',
    description: 'Thrilling adventure activities including trekking, water sports, paragliding and outdoor expeditions.',
    fullDescription: 'For adrenaline seekers! Our adventure tour packages offer thrilling experiences across India\'s most dramatic landscapes. Experience high-altitude treks in Ladakh and Himalayas, white-water rafting in Uttarakhand, paragliding in Himachal, rock climbing in Western Ghats, scuba diving in Andaman, jungle safaris in Northeast, kayaking in Goa and Kerala. We have curated adventures for every skill and thrill level from beginner to advanced.',
    icon: '🧗',
    category: 'Adventure',
    features: [
      'Professional certified adventure guides',
      'Safety-certified equipment provided',
      'Comprehensive adventure insurance',
      'Multiple difficulty levels available',
      'Professional photography services',
      'Complete training and instruction',
      'Small group sizes for safety',
      '24/7 emergency medical support',
      'Beginner to expert options'
    ],
    pricing: '₹5,000 - ₹80,000 per person',
    image: imageAssets.services.adventure
  },
  {
    id: 9,
    title: 'Honeymoon Package',
    description: 'Romantic getaways designed for newly-weds and couples seeking intimate memorable experiences.',
    fullDescription: 'Celebrate your love with our specially designed honeymoon packages across India and abroad. Create magical memories in romantic destinations like Maldives, Bali, Kerala, Kashmir, Goa, Dubai, and Thailand. Each package includes intimate dining setups, couples spa and wellness treatments, private activities, candlelit dinners, and unforgettable romantic moments. From exotic beaches to snow-capped mountains, luxury resorts to secluded villas and houseboats - your perfect honeymoon awaits.',
    icon: '💕',
    category: 'Romance',
    features: [
      'Handpicked romantic destinations',
      'Couples spa and wellness packages',
      'Private intimate dining experiences',
      'Personalized romantic itineraries',
      'Luxury suite accommodation upgrades',
      'Special occasion room decorations',
      'Sunset dinners and romantic setups',
      'Complimentary honeymoon gifts',
      'Private activities and excursions'
    ],
    pricing: '₹40,000 - ₹5,00,000 per couple',
    image: imageAssets.services.honeymoon
  }
];