export type Review = {
  id: string
  name: string
  rating: number
  date: string
  text: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Chukwuemeka Obi',
    rating: 5,
    date: '3 weeks ago',
    text: 'Working with Globenet was one of the best decisions I made for my business. They built our company website from scratch and delivered everything on time. The design is clean, loads fast, and my customers keep complimenting it. They also set up our Google Business profile and now we show up on Maps. Highly recommend them to any business in Awka.',
  },
  {
    id: '2',
    name: 'Adaeze Nwosu',
    rating: 5,
    date: '1 month ago',
    text: 'I needed an e-commerce website for my fashion brand and Globenet delivered beyond expectations. The site is beautiful, easy to manage, and the Paystack integration works flawlessly. My online sales have doubled since launch. Their team is very professional and responsive on WhatsApp.',
  },
  {
    id: '3',
    name: 'Obinna Eze',
    rating: 5,
    date: '2 months ago',
    text: 'Globenet revamped our old website and the difference is night and day. The new site is mobile-friendly, SEO-optimised, and loads in seconds. We\'re now ranking on the first page of Google for our services in Anambra. Truly outstanding work.',
  },
  {
    id: '4',
    name: 'Ngozi Ihejirika',
    rating: 5,
    date: '2 months ago',
    text: 'Very professional team. They listened to exactly what I wanted and built a portfolio website that perfectly represents my brand. The animations are smooth and the overall look is very impressive. I\'ve gotten so many compliments and new client inquiries since launching.',
  },
  {
    id: '5',
    name: 'Ifeanyi Aneke',
    rating: 5,
    date: '3 months ago',
    text: 'I was skeptical at first but Globenet proved themselves quickly. They built our logistics company website and included a real-time tracking section. The project was delivered in 2 weeks as promised. Clean code, great design, and excellent after-launch support.',
  },
  {
    id: '6',
    name: 'Chisom Okafor',
    rating: 5,
    date: '3 months ago',
    text: 'As a small business owner in Awka, I didn\'t think I could afford a good website. Globenet offered very fair pricing and delivered a site that competes with much bigger companies. My Google ranking has improved and customers find us easily now.',
  },
  {
    id: '7',
    name: 'Emeka Duru',
    rating: 5,
    date: '4 months ago',
    text: 'Exceptional service. The team at Globenet is knowledgeable, creative, and very patient with feedback. They built our school\'s website with a full portal for parents and students. Everything works perfectly and the design is modern and professional.',
  },
  {
    id: '8',
    name: 'Amaka Okonkwo',
    rating: 5,
    date: '4 months ago',
    text: 'Globenet handled everything — domain, hosting, design, and even our Google Business profile. Within a month of launching, we started getting calls from customers who found us on Google. Worth every naira spent. I recommend them to everyone.',
  },
  {
    id: '9',
    name: 'Tochukwu Nwachukwu',
    rating: 5,
    date: '5 months ago',
    text: 'I hired Globenet to build a real estate listings website for my agency in Onitsha. The result exceeded my expectations — property search filters, WhatsApp enquiry buttons, and a very fast-loading site. My agents are very happy with it and clients engage much more than before.',
  },
  {
    id: '10',
    name: 'Blessing Ugwu',
    rating: 5,
    date: '5 months ago',
    text: 'Top-tier web development right here in Anambra. I was impressed by how well they understood my vision for the NGO website. They included a donation portal, event calendar, and volunteer sign-up form — all working perfectly. The AI chatbot they added has been a game changer for our outreach.',
  },
  {
    id: '11',
    name: 'Kelechi Onyekwere',
    rating: 5,
    date: '6 months ago',
    text: 'Fast, reliable, and creative. Globenet built our restaurant website with an online menu and WhatsApp ordering integration. It was exactly what we needed. Orders have increased significantly since we went online. Their customer service is also excellent.',
  },
  {
    id: '12',
    name: 'Uche Obi-Nwosu',
    rating: 5,
    date: '6 months ago',
    text: 'Globenet is the real deal. I\'ve used two other developers before and none of them came close to this level of quality. The site they built for my investment firm is fast, secure, and ranks well on Google. They also trained me on how to update content myself. Truly exceptional team.',
  },
]

export const previewReviews = reviews.slice(0, 3)

export const whyChooseItems = [
  { title: 'Local Expertise', description: 'Based in Awka, Anambra — we understand the Nigerian market.', icon: 'MapPin' },
  { title: 'Fast Delivery', description: 'Projects delivered on time without compromising quality.', icon: 'Zap' },
  { title: 'SEO-First Approach', description: 'Every site built to rank on Google from day one.', icon: 'Search' },
  { title: 'Ongoing Maintenance', description: 'We keep your site secure, fast, and up to date.', icon: 'Shield' },
  { title: 'AI Smart Integration', description: 'Chatbots and automation that work for your business.', icon: 'Bot' },
  { title: 'Transparent Pricing', description: 'Clear quotes with no hidden fees — fair Nigerian rates.', icon: 'BadgeDollarSign' },
]
