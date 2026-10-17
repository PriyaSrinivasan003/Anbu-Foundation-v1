import type { TeamMember } from '../types';

export const teamPlaceholdersNotice = "Verified trustee details and leadership bios will be published following official regulatory documentation.";

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Executive Trustee',
    role: 'Founding Leadership (Designated)',
    bio: 'Dedicated to community mobilization, governance transparency, and social equity programs with over two decades of public interest engagement.',
    isVerifiedPlaceholder: true
  },
  {
    id: 'team-2',
    name: 'Director of Programs',
    role: 'Community Operations (Designated)',
    bio: 'Specialist in grassroots curriculum development, academic mentorship coordination, and participatory rural initiatives.',
    isVerifiedPlaceholder: true
  },
  {
    id: 'team-3',
    name: 'Public Health Advisor',
    role: 'Healthcare & Elder Wellness (Designated)',
    bio: 'Medical consultant focused on preventive community screening, maternal health guidance, and dignified elder care protocols.',
    isVerifiedPlaceholder: true
  },
  {
    id: 'team-4',
    name: 'Ecology & Sustainability Lead',
    role: 'Environmental Stewardship (Designated)',
    bio: 'Environmental planner dedicated to urban micro-reforestation, water harvesting, and climate resilience in vulnerable communities.',
    isVerifiedPlaceholder: true
  }
];
