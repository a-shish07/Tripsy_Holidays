import { imageAssets } from './images';

const rawBlogPosts = [
  {
    id: 1,
    title: 'Ultimate Guide to Planning Your Dream Honeymoon in Bali',
    excerpt:
      'Discover the best beaches, luxury resorts, and romantic activities in Bali. From private sunset dinners to temple explorations, we reveal how to craft the perfect honeymoon experience.',
    image: 'https://images.unsplash.com/photo-1514282401047-7e6e5e2b7efd?auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
    date: 'November 15, 2024',
    url: 'https://www.lonelyplanet.com/articles/honeymoon-guide-bali',
    category: 'Honeymoon',
  },
  {
    id: 2,
    title: 'Kerala Backwaters: A Complete Travel Guide for First-Timers',
    excerpt:
      'Experience the serene beauty of Kerala\'s backwaters with our expert guide. Learn about the best houseboat rides, local cuisines, and hidden villages that tourists miss.',
    image: 'https://images.unsplash.com/photo-1512043065943-b0f9a2c1e9b5?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    date: 'November 10, 2024',
    url: 'https://www.incredibleindia.org/en/kerala-backwaters',
    category: 'Domestic',
  },
  {
    id: 3,
    title: 'Solo Traveling to Thailand: Tips, Budget & Safety Guide',
    excerpt:
      'Everything you need to know about traveling solo in Thailand. Discover budget-friendly accommodations, safe areas to explore, and how to connect with other travelers.',
    image: 'https://images.unsplash.com/photo-1506596121473-d4b5e45c26de?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    date: 'November 5, 2024',
    url: 'https://www.lonelyplanet.com/articles/thailand-solo-travel-guide',
    category: 'Solo Travel',
  },
  {
    id: 4,
    title: 'Best Time to Visit the Maldives: Seasons, Weather & Activities',
    excerpt:
      'Plan your Maldives trip perfectly with our comprehensive season guide. Learn about dry seasons, water sports, diving conditions, and package deals for each season.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    date: 'October 28, 2024',
    url: 'https://www.thetravel.com/maldives-best-time-to-visit',
    category: 'Destination Guide',
  },
  {
    id: 5,
    title: 'Ladakh Adventure: Trekking, Monasteries & Scenic Drives',
    excerpt:
      'From high-altitude passes to ancient monasteries, explore everything Ladakh has to offer. Adventure tips, best trekking routes, and what to pack for extreme altitudes.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    readTime: '9 min read',
    date: 'October 20, 2024',
    url: 'https://www.travelogues.co/ladakh-adventure-guide',
    category: 'Adventure',
  },
  {
    id: 6,
    title: 'Sustainable Travel: How to Explore Responsibly',
    excerpt:
      'Learn how to minimize your travel footprint while maximizing authentic experiences. Eco-friendly practices, supporting local communities, and conscious tourism tips.',
    image: 'https://images.unsplash.com/photo-1495442871050-f1b2a438e450?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    date: 'October 15, 2024',
    url: 'https://www.nationalgeographic.com/travel/article/sustainable-travel-tips',
    category: 'Sustainability',
  },
  {
    id: 7,
    title: 'Family Travel with Kids: Asia\'s Best Family-Friendly Destinations',
    excerpt:
      'Discover Asia\'s safest and most kid-friendly destinations. From beaches to theme parks, cultural experiences suitable for children, and travel tips for families.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    date: 'October 10, 2024',
    url: 'https://www.familyandkidstoday.com/asia-family-destinations',
    category: 'Family Travel',
  },
  {
    id: 8,
    title: 'Budget Travel in Southeast Asia: How to Travel on $50/Day',
    excerpt:
      'Travel Southeast Asia without breaking the bank. Expert tips on cheap flights, affordable accommodations, local food guides, and money-saving travel hacks.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
    date: 'October 5, 2024',
    url: 'https://www.nomadicmatt.com/travel-blogs/southeast-asia-on-budget',
    category: 'Budget Travel',
  },
  {
    id: 9,
    title: 'Visa Guide for Indians: Simplified Requirements for Popular Destinations',
    excerpt:
      'Confused about visa requirements? We simplify the process for Thailand, Bali, Maldives, Dubai, and more. Step-by-step guides, documents needed, and processing times.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    date: 'September 28, 2024',
    url: 'https://www.ivisas.com/articles/visa-guide-indians',
    category: 'Travel Tips',
  },
  {
    id: 10,
    title: 'Hidden Gems of Rajasthan: Beyond Jaipur & Udaipur',
    excerpt:
      'Explore Rajasthan beyond the popular tourist spots. Discover lesser-known desert towns, heritage havelis, and authentic desert experiences that capture true Rajasthani culture.',
    image: 'https://images.unsplash.com/photo-1548013146-72c75a85c485?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    date: 'September 22, 2024',
    url: 'https://www.incredibleindia.org/en/rajasthan-hidden-gems',
    category: 'Hidden Gems',
  },
  {
    id: 11,
    title: 'What to Eat When Traveling: Street Food Guide to Asia',
    excerpt:
      'A foodie\'s guide to the best street foods across Asia. From Thai pad thai to Indian chaat, with safety tips for enjoying street food while traveling.',
    image: 'https://images.unsplash.com/photo-1505521918220-a596dc86288f?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    date: 'September 15, 2024',
    url: 'https://www.foodnetwork.com/travel/articles/street-food-asia-guide',
    category: 'Food & Culture',
  },
  {
    id: 12,
    title: 'Travel Insurance Essentials: What Every Traveler Must Know',
    excerpt:
      'Don\'t travel without proper insurance! Learn what coverage you need, how to choose the right plan, and what travel insurance actually covers.',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    date: 'September 10, 2024',
    url: 'https://www.worldnomads.com/travel-insurance-guide',
    category: 'Travel Tips',
  },
];

const blogImageMap = {
  1: imageAssets.blog[1],
  2: imageAssets.blog[2],
  3: imageAssets.blog[3],
  4: imageAssets.blog[4],
  5: imageAssets.blog[5],
  6: imageAssets.blog[6],
};

export const blogPosts = rawBlogPosts.map(post => ({
  ...post,
  image: post.image || blogImageMap[post.id] || imageAssets.blog.featured,
}));
