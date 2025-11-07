const baseUrl = 'https://images.unsplash.com';

export const packageImageMap = {
  'Uttarakhand': `${baseUrl}/photo-1504681869696-d977211a83e7?auto=format&fit=crop&w=800&q=80`,
  'Himachal Pradesh': `${baseUrl}/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80`,
  'Rajasthan': `${baseUrl}/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80`,
  'Goa': `${baseUrl}/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80`,
  'Kerala': `${baseUrl}/photo-1537905551722-c8425476b10d?auto=format&fit=crop&w=800&q=80`,
  'Ladakh': `${baseUrl}/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80`,
  'Kashmir': `${baseUrl}/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80`,
  'Maldives': `${baseUrl}/photo-1540556057561-39a96aa62aed?auto=format&fit=crop&w=800&q=80`,
  'Thailand': `${baseUrl}/photo-1552520514-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80`,
  'Bali': `${baseUrl}/photo-1467225142285-a06a81e02e96?auto=format&fit=crop&w=800&q=80`,
  'Dubai': `${baseUrl}/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80`,
  'Paris': `${baseUrl}/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80`,
  'Switzerland': `${baseUrl}/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80`,
  'Japan': `${baseUrl}/photo-1490806806917-c1149f2b0ee0?auto=format&fit=crop&w=800&q=80`,
  'Singapore': `${baseUrl}/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80`,
  'Turkey': `${baseUrl}/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80`,
  'Iceland': `${baseUrl}/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80`,
};

export const getPackageImage = (subcategory) => {
  return packageImageMap[subcategory] || packageImageMap['Himachal Pradesh'];
};

export const imageAssets = {
  packages: {
    uttarakhand: packageImageMap['Uttarakhand'],
    himachal: packageImageMap['Himachal Pradesh'],
    rajasthan: packageImageMap['Rajasthan'],
    goa: packageImageMap['Goa'],
    kerala: packageImageMap['Kerala'],
    ladakh: packageImageMap['Ladakh'],
    kashmir: packageImageMap['Kashmir'],
    maldives: packageImageMap['Maldives'],
    thailand: packageImageMap['Thailand'],
    bali: packageImageMap['Bali'],
    dubai: packageImageMap['Dubai'],
    paris: packageImageMap['Paris'],
    switzerland: packageImageMap['Switzerland'],
    japan: packageImageMap['Japan'],
    singapore: packageImageMap['Singapore'],
    turkey: packageImageMap['Turkey'],
    iceland: packageImageMap['Iceland'],
  },
  services: {
    domestic: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=600&q=80',
    international: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=600&q=80',
    spiritual: 'https://images.unsplash.com/photo-1504681869696-d977211a83e7?auto=format&fit=crop&w=1200&h=600&q=80',
    corporate: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=600&q=80',
    adventure: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=600&q=80',
    honeymoon: 'https://images.unsplash.com/photo-1506214174585-fe9666780e60?auto=format&fit=crop&w=1200&h=600&q=80',
    hotels: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&h=600&q=80',
    flights: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&h=600&q=80',
  },
  destinations: {
    featured: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=600&q=80',
    gallery: {
      1: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      2: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      3: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      4: 'https://images.unsplash.com/photo-1504681869696-d977211a83e7?auto=format&fit=crop&w=800&q=80',
    }
  },
  about: {
    hero: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=600&q=80',
    story: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&h=600&q=80',
  },
  team: {
    member1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    member2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    member3: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    member4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  whyChooseUs: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=600&q=80',
  blog: {
    featured: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    1: `${baseUrl}/photo-1514282401047-7e6e5e2b7efd?auto=format&fit=crop&w=1200&q=80`,
    2: `${baseUrl}/photo-1512043065943-b0f9a2c1e9b5?auto=format&fit=crop&w=1200&q=80`,
    3: `${baseUrl}/photo-1506596121473-d4b5e45c26de?auto=format&fit=crop&w=1200&q=80`,
    4: `${baseUrl}/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80`,
    5: `${baseUrl}/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80`,
    6: `${baseUrl}/photo-1504681869696-d977211a83e7?auto=format&fit=crop&w=1200&q=80`,
  }
};

export const getOptimizedImageUrl = (url, width = 800, quality = 80) => {
  if (!url) return '';
  if (url.includes('unsplash.com')) {
    return `${url}${url.includes('?') ? '&' : '?'}w=${width}&q=${quality}`;
  }
  return url;
};
