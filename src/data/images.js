const baseUrl = '/assests';

export const packageImageMap = {
  'Uttarakhand': `${baseUrl}/${encodeURIComponent('Breathtaking Nature Landscape Image Ideas.jpg')}`,
  'Himachal Pradesh': `${baseUrl}/${encodeURIComponent('Breathtaking Nature Scenery Landscape Image.jpg')}`,
  'Rajasthan': `${baseUrl}/${encodeURIComponent('Maligne Lake Spirit Island, Canada.jpg')}`,
  'Goa': `${baseUrl}/${encodeURIComponent('Tropical Beach House With Palm Trees And Crystal Clear Water Photo And Picture For Free Download - Pngtree.jpg')}`,
  'Kerala': `${baseUrl}/${encodeURIComponent('A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg')}`,
  'Ladakh': `${baseUrl}/${encodeURIComponent('View Of Rice Field In Rural Area Of Thailand Outdoor Nature Of Mountain Cottage, Rice, Green, Field Background Image And Wallpaper for Free Download.jpg')}`,
  'Kashmir': `${baseUrl}/download.jpg`,
  'Maldives': `${baseUrl}/download%20(1).jpg`,
  'Thailand': `${baseUrl}/download%20(2).jpg`,
  'Bali': `${baseUrl}/${encodeURIComponent('Рослесхоз_ просроченные обязательства по лесовосстановлению сократились на 64% в 2024 году.jpg')}`,
  'Dubai': `${baseUrl}/${encodeURIComponent('Breathtaking Nature Landscape Image Ideas.jpg')}`,
  'Paris': `${baseUrl}/${encodeURIComponent('Breathtaking Nature Scenery Landscape Image.jpg')}`,
  'Switzerland': `${baseUrl}/${encodeURIComponent('Maligne Lake Spirit Island, Canada.jpg')}`,
  'Japan': `${baseUrl}/${encodeURIComponent('Tropical Beach House With Palm Trees And Crystal Clear Water Photo And Picture For Free Download - Pngtree.jpg')}`,
  'Singapore': `${baseUrl}/${encodeURIComponent('A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg')}`,
  'Turkey': `${baseUrl}/${encodeURIComponent('View Of Rice Field In Rural Area Of Thailand Outdoor Nature Of Mountain Cottage, Rice, Green, Field Background Image And Wallpaper for Free Download.jpg')}`,
  'Iceland': `${baseUrl}/download.jpg`,
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
    domestic: `${baseUrl}/${encodeURIComponent('Breathtaking Nature Landscape Image Ideas.jpg')}`,
    international: `${baseUrl}/${encodeURIComponent('Breathtaking Nature Scenery Landscape Image.jpg')}`,
    spiritual: `${baseUrl}/${encodeURIComponent('Maligne Lake Spirit Island, Canada.jpg')}`,
    corporate: `${baseUrl}/${encodeURIComponent('Tropical Beach House With Palm Trees And Crystal Clear Water Photo And Picture For Free Download - Pngtree.jpg')}`,
    adventure: `${baseUrl}/${encodeURIComponent('A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg')}`,
    honeymoon: `${baseUrl}/${encodeURIComponent('View Of Rice Field In Rural Area Of Thailand Outdoor Nature Of Mountain Cottage, Rice, Green, Field Background Image And Wallpaper for Free Download.jpg')}`,
    hotels: `${baseUrl}/download.jpg`,
    flights: `${baseUrl}/download%20(1).jpg`,
  },
  destinations: {
    featured: `${baseUrl}/download%20(2).jpg`,
    gallery: {
      1: `${baseUrl}/${encodeURIComponent('Рослесхоз_ просроченные обязательства по лесовосстановлению сократились на 64% в 2024 году.jpg')}`,
      2: `${baseUrl}/${encodeURIComponent('Breathtaking Nature Landscape Image Ideas.jpg')}`,
      3: `${baseUrl}/${encodeURIComponent('Breathtaking Nature Scenery Landscape Image.jpg')}`,
      4: `${baseUrl}/${encodeURIComponent('Maligne Lake Spirit Island, Canada.jpg')}`,
    }
  },
  about: {
    hero: `${baseUrl}/${encodeURIComponent('Tropical Beach House With Palm Trees And Crystal Clear Water Photo And Picture For Free Download - Pngtree.jpg')}`,
    story: `${baseUrl}/${encodeURIComponent('A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg')}`,
  },
  team: {
    member1: `${baseUrl}/${encodeURIComponent('View Of Rice Field In Rural Area Of Thailand Outdoor Nature Of Mountain Cottage, Rice, Green, Field Background Image And Wallpaper for Free Download.jpg')}`,
    member2: `${baseUrl}/download.jpg`,
    member3: `${baseUrl}/download%20(1).jpg`,
    member4: `${baseUrl}/download%20(2).jpg`,
  },
  whyChooseUs: `${baseUrl}/${encodeURIComponent('Рослесхоз_ просроченные обязательства по лесовосстановлению сократились на 64% в 2024 году.jpg')}`,
  blog: {
    featured: `${baseUrl}/${encodeURIComponent('Breathtaking Nature Landscape Image Ideas.jpg')}`,
    1: `${baseUrl}/${encodeURIComponent('Breathtaking Nature Scenery Landscape Image.jpg')}`,
    2: `${baseUrl}/${encodeURIComponent('Maligne Lake Spirit Island, Canada.jpg')}`,
    3: `${baseUrl}/${encodeURIComponent('Tropical Beach House With Palm Trees And Crystal Clear Water Photo And Picture For Free Download - Pngtree.jpg')}`,
    4: `${baseUrl}/${encodeURIComponent('A serene beach scene with turquoise waters, lush greenery, and majestic cliffs in the video.jpg')}`,
    5: `${baseUrl}/${encodeURIComponent('View Of Rice Field In Rural Area Of Thailand Outdoor Nature Of Mountain Cottage, Rice, Green, Field Background Image And Wallpaper for Free Download.jpg')}`,
    6: `${baseUrl}/download.jpg`,
  }
};

export const getOptimizedImageUrl = (url, width = 800, quality = 80) => {
  if (!url) return '';
  return url;
};
