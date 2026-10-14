import type { ImpactMetric, Milestone } from '../types';

export const DEMO_IMPACT_NOTE = "Notice: Celebrating 20 Years of ANBU Foundation. Over 10,000 students have been awarded higher education scholarships, opening doors of opportunity for first-generation learners across the state.";

export const impactMetrics: ImpactMetric[] = [
  {
    id: 'metric-1',
    targetNumber: 10000,
    suffix: '+',
    label: 'Scholarships Conferred',
    description: 'Students supported in university, vocational, and higher secondary education.',
    category: 'Education'
  },
  {
    id: 'metric-2',
    targetNumber: 20,
    suffix: ' Yrs',
    label: 'Legacy of Unconditional Service',
    description: 'Two decades of grassroots transformation, youth mentorship, and community aid.',
    category: 'Community'
  },
  {
    id: 'metric-3',
    targetNumber: 1500,
    suffix: '+',
    label: 'Active Volunteer Network',
    description: 'Passionate educators, healthcare professionals, and youth volunteers across chapters.',
    category: 'Community'
  },
  {
    id: 'metric-4',
    targetNumber: 96,
    suffix: '%',
    label: 'Direct Program Allocation',
    description: 'Directing contributions straight to tuition subsidies, books, health camps, and student kits.',
    category: 'Community'
  }
];

export const projectMilestones: Milestone[] = [
  {
    year: '2006',
    phase: 'Humble Inception',
    title: 'Planting the Seed of Anbu',
    description: 'ANBU Foundation founded with a mission to eliminate financial barriers preventing underprivileged students from pursuing education.',
    highlight: 'Awarded the first cohort of student book grants and local tuition stipends.'
  },
  {
    year: '2015',
    phase: 'Institutional Collaboration',
    title: 'University Scholarship Alliances',
    description: 'Formed strategic ties with premier institutions including Sathyabama Institute of Science and Technology to sponsor college degrees.',
    highlight: 'Crossed 5,000 student beneficiaries, with special focus on women in higher education.'
  },
  {
    year: '2024',
    phase: '19th Anniversary Milestone',
    title: 'Crossing 10,000+ Scholarships',
    description: 'Grand 19th Anniversary convention at Sathyabama University celebrating 10,000+ graduates.',
    highlight: 'Expansion of digital applications via www.anbufoundation.in.'
  },
  {
    year: '2026',
    phase: '20 Years of ANBU',
    title: '20th Anniversary Grand Jubilee',
    description: 'Gathering thousands of alumni, founders, and civic leaders celebrating two decades of unconditional love.',
    highlight: 'Civic honor presented by Thalapathy Vijay in recognition of two decades of community empowerment.'
  }
];
