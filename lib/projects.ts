import { projectScreenshots, stockImages } from './stock-images'

export type Project = {
  id: string
  name: string
  clientType: string
  url?: string
  /** Shown in browser mockups when there is no live URL */
  displayDomain?: string
  /** Portfolio concept — not a live client site */
  concept?: boolean
  description: string
  howBuilt: string
  workDelivered: string[]
  tags: string[]
  techStack: string[]
  thumbnail: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'trustfund',
    name: 'Trust Fund Capital Management',
    clientType: 'Finance · International',
    url: 'https://trustfundcapitalmgt.com/',
    description:
      'A professional capital management and investment platform for an international financial services client. Clean, trust-inspiring design with SEO and performance tuned for a global audience.',
    howBuilt:
      'Requirements gathering → wireframing in Figma → Next.js development → SEO metadata + JSON-LD structured data → deployed on Vercel with custom domain and SSL.',
    workDelivered: [
      'Investment & services pages with clear CTAs',
      'Fully responsive layout across devices',
      'On-page SEO for finance keywords',
      'Fast load times on Vercel edge network',
    ],
    tags: ['Next.js', 'TypeScript', 'Finance', 'International'],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    thumbnail: projectScreenshots.trustfund,
    featured: true,
  },
  {
    id: 'globedispatch',
    name: 'Globe Dispatch',
    clientType: 'Logistics · International',
    url: 'https://globedispatch.org/',
    description:
      'A logistics and dispatch management platform for an international courier brand — tracking UI, service listings, and a mobile-first experience built for global users.',
    howBuilt:
      'Client discovery → UI design system → React frontend → mobile-first build → custom domain, hosting & SSL on cPanel.',
    workDelivered: [
      'Dispatch & tracking interface design',
      'Service area and pricing pages',
      'Enquiry & contact flows',
      'Performance tuning for varied networks',
    ],
    tags: ['React', 'Logistics', 'Dispatch', 'International'],
    techStack: ['React', 'CSS', 'Framer Motion', 'cPanel hosting'],
    thumbnail: projectScreenshots.globedispatch,
    featured: true,
  },
  {
    id: 'savannah-grill',
    name: 'Savannah Grill — Restaurant & Online Orders',
    clientType: 'Food & Beverage · Concept',
    displayDomain: 'savannahgrill.ng',
    concept: true,
    description:
      'Full-service restaurant website concept for a modern dining brand — digital menu, table reservations, and WhatsApp ordering for local and delivery customers.',
    howBuilt:
      'Menu UX design → Next.js build → WhatsApp order flow → Google Maps embed → mobile-first launch-ready layout.',
    workDelivered: [
      'Digital menu with categories & photos',
      'Click-to-order via WhatsApp',
      'Location map & opening hours',
      'SEO-ready structure for local discovery',
    ],
    tags: ['Next.js', 'E-Commerce', 'Food & Beverage'],
    techStack: ['Next.js', 'Tailwind CSS', 'WhatsApp API'],
    thumbnail: projectScreenshots.savannahGrill,
    featured: true,
  },
  {
    id: 'anambra-properties',
    name: 'Anambra Properties — Real Estate Listings',
    clientType: 'Real Estate · Nigeria',
    url: 'https://www.globenet.dev/contact',
    description:
      'Property listings site for an Anambra-based agency — search filters, map integration, and WhatsApp enquiry per listing.',
    howBuilt:
      'Listing data model → filter & search UI → map integration → agent contact flows → local SEO for Anambra properties.',
    workDelivered: [
      'Searchable property catalogue',
      'Filter by location, price & type',
      'Agent WhatsApp enquiry buttons',
      'Google Maps property pins',
    ],
    tags: ['Next.js', 'Real Estate', 'Anambra'],
    techStack: ['Next.js', 'TypeScript', 'Google Maps'],
    thumbnail: stockImages.realEstate,
  },
  {
    id: 'arise-foundation',
    name: 'Arise Foundation — NGO Website',
    clientType: 'Non-Profit · Nigeria',
    url: 'https://www.globenet.dev/contact',
    description:
      'Non-profit website with donation flows, event listings, volunteer sign-up, and impact reporting for community outreach in Nigeria.',
    howBuilt:
      'Stakeholder workshops → donation UX → React build → event calendar → AI chatbot for visitor questions.',
    workDelivered: [
      'Donation & Paystack integration',
      'Events calendar & registrations',
      'Impact stories & annual reports',
      'AI chatbot for 24/7 enquiries',
    ],
    tags: ['React', 'Non-Profit', 'Donation Integration'],
    techStack: ['React', 'Paystack', 'Framer Motion'],
    thumbnail: stockImages.ngo,
  },
  {
    id: 'naija-styles',
    name: 'Naija Styles — Fashion Store',
    clientType: 'E-Commerce · Nigeria',
    url: 'https://www.globenet.dev/contact',
    description:
      'Full e-commerce for a Nigerian fashion brand — product grid, cart, checkout, and Paystack payments.',
    howBuilt:
      'Brand styling → catalogue UX → Next.js storefront → Paystack checkout → admin-friendly product updates.',
    workDelivered: [
      'Product listings with sizes & colours',
      'Shopping cart & checkout flow',
      'Paystack payment integration',
      'Mobile shopping experience',
    ],
    tags: ['Next.js', 'E-Commerce', 'Paystack', 'Fashion'],
    techStack: ['Next.js', 'Paystack', 'Tailwind CSS'],
    thumbnail: stockImages.fashion,
  },
]

export const featuredHomeProjects = projects.filter((p) => p.featured).slice(0, 3)
