import { Globe, Rocket, Crown } from 'lucide-react';

export const services = [
  {
    icon: Globe,
    title: 'Blanq Lite Package',
    description: 'Your simple, budget-friendly solution for growing your online presence.',
    pricing: {
      monthly: 200,
      oneTime: 2900
    },
    setupFee: 500,
    features: [
      'Basic Website Setup & Design',
      'Social Media Management for one platform',
      'Basic SEO',
      'Performance tracking',
      'Performance optimization',
      'Basic email marketing',
      'Email support and consultation (1-2 hours/month).'
    ]
  },
  {
    icon: Rocket,
    title: 'Blanq Boost',
    description: 'Ideal for businesses focused on growth and expanding their reach.',
    pricing: {
      monthly: 500,
      oneTime: 6900
    },
    setupFee: 500,
    features: [
      'Everything in Blanq Basics, plus:',
      'Advanced SEO optimization',
      'Google Analytics integration',
      'Blog or news section setup',
      '3 monthly updates or revisions',
      'Social media integration'
    ]
  },
  {
    icon: Crown,
    title: 'Blanq Brilliance',
    description: 'A complete solution for thriving businesses seeking premium features and ongoing support.',
    pricing: {
      monthly: 1000,
      oneTime: 13900
    },
    setupFee: 500,
    features: [
      'Everything in Blanq Boost, plus:',
      'E-commerce functionality',
      'Monthly performance reports',
      'Full-scale branding integration',
      'Priority support',
      'Up to 5 content updates monthly',
      'Enhanced security features'
    ]
  }
];

export const addOns = [
  {
    title: 'Additional website pages',
    price: 400,
    unit: 'per page'
  },
  {
    title: 'Social media marketing',
    price: 100,
    unit: 'per month'
  },
  {
    title: 'Analytics and reporting',
    price: 200,
    unit: 'per month'
  },
  {
    title: 'SEO services',
    price: 150,
    unit: 'per month starting from'
  }
];