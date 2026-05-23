export type Service = {
  id: string
  name: string
  shortDescription: string
  description: string
  included: string[]
  price: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'responsive-web-design',
    name: 'Responsive Web Design',
    shortDescription: 'Mobile-first, pixel-perfect designs for every screen.',
    description:
      'Mobile-first, pixel-perfect designs that look great on every screen. We craft layouts that adapt beautifully from phones to desktops.',
    included: [
      'Mobile-first UI/UX design',
      'Responsive breakpoints for all devices',
      'Brand-aligned colour and typography',
      'Design handoff ready for development',
    ],
    price: 'Get a Quote',
    icon: 'Smartphone',
  },
  {
    id: 'custom-website-development',
    name: 'Custom Website Development',
    shortDescription: 'Bespoke React/Next.js sites tailored to your goals.',
    description:
      'Bespoke websites built with React/Next.js, tailored to your business goals. Fast, scalable, and built for growth.',
    included: [
      'React & Next.js development',
      'Custom features and integrations',
      'Performance optimisation',
      'SEO-ready architecture',
    ],
    price: 'Get a Quote',
    icon: 'Code2',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Solutions',
    shortDescription: 'Full online stores with payments and inventory.',
    description:
      'Full online stores with payment integration, inventory management, and more. Sell online across Nigeria with confidence.',
    included: [
      'Product catalogue & cart',
      'Paystack payment integration',
      'Order management dashboard',
      'Mobile-optimised checkout',
    ],
    price: 'Get a Quote',
    icon: 'ShoppingCart',
  },
  {
    id: 'portfolio-business',
    name: 'Portfolio & Business Websites',
    shortDescription: 'Professional online presence for SMEs across Nigeria.',
    description:
      'Professional online presence for individuals and SMEs across Nigeria. Showcase your brand and convert visitors into clients.',
    included: [
      'Custom business branding',
      'Service & portfolio pages',
      'Contact & enquiry forms',
      'WhatsApp integration',
    ],
    price: 'Get a Quote',
    icon: 'Briefcase',
  },
  {
    id: 'domain-hosting',
    name: 'Domain + Hosting Setup',
    shortDescription: 'End-to-end domain, hosting, and SSL configuration.',
    description:
      'End-to-end setup including domain registration, hosting configuration, and SSL. We handle the technical setup so you can focus on your business.',
    included: [
      'Domain registration assistance',
      'Hosting setup & configuration',
      'Free SSL certificate',
      'DNS & email setup guidance',
    ],
    price: 'Get a Quote',
    icon: 'Globe',
  },
  {
    id: 'revamp-maintenance',
    name: 'Website Revamp & Maintenance',
    shortDescription: 'Modernise outdated sites and keep them at peak performance.',
    description:
      'Modernise your outdated site and keep it running at peak performance. Regular updates, security patches, and content changes.',
    included: [
      'Full site redesign & rebuild',
      'Speed & performance optimisation',
      'Monthly maintenance plans',
      'Security updates & backups',
    ],
    price: 'Get a Quote',
    icon: 'RefreshCw',
  },
  {
    id: 'google-business',
    name: 'Google Business Profile Setup',
    shortDescription: 'Get found on Google Maps and local search in Awka.',
    description:
      'Get found on Google Maps and local search in Awka and across Anambra. We optimise your profile to attract local customers.',
    included: [
      'Profile creation & verification',
      'Photos, hours & service listings',
      'Local SEO optimisation',
      'Review management guidance',
    ],
    price: 'Get a Quote',
    icon: 'MapPin',
  },
  {
    id: 'ai-solutions',
    name: 'AI Smart Solutions',
    shortDescription: 'AI chatbots, automation, and smart tools for your site.',
    description:
      'Integrate AI-powered chatbots, automation, and tools into your website. Stay ahead with intelligent customer engagement.',
    included: [
      'AI chatbot integration',
      'Automated customer responses',
      'Smart form & lead handling',
      'Analytics & insights setup',
    ],
    price: 'Get a Quote',
    icon: 'Bot',
  },
]

export const serviceSnapshots = [
  {
    id: 'custom-web',
    name: 'Custom Web Development',
    description: 'Fast, beautiful websites built with React and Next.js for Nigerian businesses.',
    href: '/services#custom-website-development',
    icon: 'Code2',
  },
  {
    id: 'ecommerce-snap',
    name: 'E-Commerce Solutions',
    description: 'Online stores with Paystack payments, inventory, and mobile-first checkout.',
    href: '/services#ecommerce',
    icon: 'ShoppingCart',
  },
  {
    id: 'ai-snap',
    name: 'AI Smart Solutions',
    description: 'Chatbots, automation, and intelligent tools that engage your customers 24/7.',
    href: '/services#ai-solutions',
    icon: 'Bot',
  },
]

export const processSteps = [
  { step: 1, title: 'Discovery & Briefing', description: 'We learn your goals, audience, and brand vision.' },
  { step: 2, title: 'Design & Prototype', description: 'Wireframes and visual designs for your approval.' },
  { step: 3, title: 'Development', description: 'Clean, fast code built with modern frameworks.' },
  { step: 4, title: 'Testing & Review', description: 'Rigorous QA across devices and browsers.' },
  { step: 5, title: 'Launch & Handover', description: 'Deploy, domain setup, and full handover.' },
  { step: 6, title: 'Ongoing Support', description: 'Maintenance, updates, and growth support.' },
]

export const aboutServices = [
  'Responsive Web Design',
  'Custom Website Development',
  'E-Commerce Solutions',
  'Portfolio & Business Websites',
  'Domain + Hosting Setup',
  'Website Revamp & Maintenance',
  'Google Business Profile Setup',
  'AI Smart Solutions',
]
