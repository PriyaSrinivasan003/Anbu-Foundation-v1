export type ProgramCategory = 
  | 'All'
  | 'Education' 
  | 'Healthcare' 
  | 'Community Welfare' 
  | 'Environment' 
  | 'Rural Development'
  | 'Skill Development'
  | 'School Adoption';

export interface Program {
  slug: string;
  title: string;
  category: Exclude<ProgramCategory, 'All'>;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  status: 'Active' | 'Expanding' | 'Upcoming';
  progressPercentage: number;
  objectives: string[];
  activities: string[];
  intendedBeneficiaries: string;
  featured: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  waysToParticipate: string[];
  quote?: string;
  videoUrl?: string;
  videoUrls?: string[];
  associatedTrusts?: string[];
  selectionCriteria?: string[];
  specialCategories?: string[];
  accomplishments?: {
    title: string;
    desc: string;
    link?: {
      text: string;
      url: string;
    };
  }[];
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  quote: string;
  excerpt: string;
  fullContent: string[];
  author: string;
  role: string;
  date: string;
  category: string;
  coverImage: string;
  tags: string[];
}

export interface ImpactMetric {
  id: string;
  targetNumber: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  category: 'Community' | 'Education' | string;
}

export interface Milestone {
  year: string;
  phase: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  isVerifiedPlaceholder: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Education' | 'Partnerships' | 'Community' | 'Programs' | string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  interests: string[];
  availability: string;
  skills: string;
  consent: boolean;
}

export interface DonationFormData {
  amount: number;
  frequency: 'one-time' | 'monthly';
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  isAnonymous: boolean;
  message?: string;
  consent: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  category: string;
  message: string;
  phone?: string;
}
