import type { Story } from '../types';

export const storiesData: Story[] = [
  {
    id: 'story-1',
    slug: 'twenty-years-of-anbu-foundation',
    title: '20 Years of ANBU Foundation: Uplifting 10,000+ Dreams Through Unconditional Love',
    quote: 'Anbu is not just our name—it is our lifelong commitment to stand beside every hardworking student, struggling family, and cherished elder.',
    excerpt: 'Marking two decades of transformative grassroots empowerment, scholarships for 10,000+ youths, and compassionate community service across Tamil Nadu.',
    fullContent: [
      'Two decades ago, ANBU Foundation began with a humble yet uncompromising mission: to turn unconditional love (அன்பு) into measurable, dignified action. From individual tuition support to comprehensive university scholarships, our work has touched over 10,000 young scholars.',
      'At our 20th Anniversary gathering, thousands of alumni—now software engineers, teachers, doctors, and civic leaders—reunited with the founders and mentors who believed in them when resources were scarce.',
      '“Seeing these young women and men rise into independent pillars of society is the greatest reward we could ever imagine,” shared the Managing Trustee amidst thunderous applause and tears of gratitude.'
    ],
    author: 'ANBU Editorial Board',
    role: '20th Anniversary Chronicle',
    date: '2026 Celebration',
    category: 'Community Welfare',
    coverImage: '/images/anbu_20_years_celebration.png',
    tags: ['20 Years Milestone', 'Higher Education', 'Community Empowerment']
  },
  {
    id: 'story-2',
    slug: 'thalapathy-vijay-honors-anbu-foundation',
    title: 'Civic Excellence: Honored by Thalapathy Vijay for Grassroots Impact',
    quote: 'True leadership is recognizing the unsung heroes who quietly lift the underprivileged every single day.',
    excerpt: 'Actor and social icon Thalapathy Vijay felicitated the founders and trustees of ANBU Foundation with a golden memento of appreciation.',
    fullContent: [
      'In a heartwarming ceremony celebrating dedicated social workers and educational visionaries, Thalapathy Vijay personally met with the leadership team of ANBU Foundation to honor their sustained contributions toward uplifting thousands of underserved students.',
      'Presenting an ornate commemorative memento, he commended the foundation’s transparent governance, unflagging dedication to women scholars, and commitment to rural education.',
      'This recognition reinforces our sacred pledge to keep expanding the frontiers of hope, ensuring no talented student is left behind due to financial hardship.'
    ],
    author: 'Public Affairs Desk',
    role: 'Civic Recognition',
    date: 'Recent Honor',
    category: 'Community Welfare',
    coverImage: '/images/thalapathy_vijay_award.png',
    tags: ['Thalapathy Vijay', 'Civic Honor', 'Leadership']
  },
  {
    id: 'story-3',
    slug: 'ten-thousand-scholarships-sathyabama',
    title: 'Breaking Barriers: 10,000+ Scholars Empowered in Higher Education',
    quote: 'When you educate a daughter, you lift an entire generation out of poverty.',
    excerpt: 'Celebrating our historic academic collaboration with Sathyabama Deemed University, opening university doors for rural first-generation learners.',
    fullContent: [
      'Higher education remains one of the most powerful catalysts for generational mobility. Through strategic institutional partnerships with renowned institutions such as Sathyabama Institute of Science and Technology, the ANBU Scholarship initiative has directly supported over 10,000 students.',
      'During the annual scholarship convention, packed auditoriums resounded with inspiring student testimonies. Over 70% of scholarship recipients are first-generation college entrants and young women excelling in STEM, humanities, and commerce.',
      'Every scholarship covers academic fees, study materials, and direct mentor support, nurturing students from enrollment all the way to campus placements.'
    ],
    author: 'Scholarship Taskforce',
    role: 'Academic Director',
    date: 'Anniversary Report',
    category: 'Education',
    coverImage: '/images/sathyabama_19th_anniversary.png',
    tags: ['Scholarships', 'Higher Education', 'Women in STEM']
  },
  {
    id: 'story-4',
    slug: 'vanakkam-with-gratitude-founders-journey',
    title: 'Vanakkam With Gratitude: Founder’s Reflections on Two Decades of Grace',
    quote: 'Thank you all for your love. Every life touched is a blessing made possible by your unwavering faith.',
    excerpt: 'A heartfelt reflection from our Managing Trustee on the journey from grassroots outreach to a state-wide movement of compassion.',
    fullContent: [
      'Looking across an auditorium filled with bright young faces and devoted educators, our Managing Trustee folded her hands in a traditional vanakkam of deep gratitude.',
      '“Twenty years ago, we began with a single wish: that no deserving child should lose their chance at an education, and no elderly neighbor should feel forgotten. Whatever we have achieved belongs to every supporter who gave their dedication, every partner who gave their trust, and every student who worked through the night to make their family proud.”',
      'The foundation looks forward to the next decade with renewed vigor, expanding digital literacy pods and community healthcare access across the region.'
    ],
    author: 'Office of the Managing Trustee',
    role: 'Founder Note',
    date: '20th Anniversary Message',
    category: 'Community Welfare',
    coverImage: '/images/founder_gratitude.png',
    tags: ['Founder Message', 'Gratitude', 'ANBU Legacy']
  }
];

export interface GalleryMediaItem {
  id: string;
  title: string;
  category: 'Community' | 'Education' | 'Healthcare' | 'Environment';
  image: string;
  caption: string;
  date: string;
}

export const galleryMediaItems: GalleryMediaItem[] = [
  {
    id: 'gal-convocation',
    title: 'Sathyabama University Scholarship Convocation',
    category: 'Education',
    image: '/images/gallery_scholarship_convocation.png',
    caption: 'Over 10,000 students conferred with full higher education scholarships on the grand stairs of Sathyabama Institute of Science and Technology.',
    date: 'Scholarship Milestone'
  },
  {
    id: 'gal-fellowship',
    title: 'Differently-Abled Scholars & Youth Fellowship',
    category: 'Education',
    image: '/images/gallery_event_fellowship.png',
    caption: 'Founder sharing an uplifting fellowship moment with collegiate scholars and wheelchair-enabled students pursuing engineering and higher studies.',
    date: 'Inclusive Education'
  },
  {
    id: 'gal-auditorium',
    title: 'Sathyabama University Grand Auditorium Assembly',
    category: 'Education',
    image: '/images/gallery_auditorium_assembly.png',
    caption: 'A packed university auditorium of students and dignitaries commemorating the milestone partnership between ANBU Foundation and Sathyabama Institute.',
    date: 'University Assembly'
  },
  {
    id: 'gal-celebration',
    title: 'Women Scholars Stage Felicitations',
    category: 'Education',
    image: '/images/gallery_scholars_celebration.png',
    caption: 'Dr. Mariazeena Johnson and executive trustees celebrating academic achievements on stage with vibrant women scholars.',
    date: 'Women in STEM'
  },
  {
    id: 'gal-1',
    title: '20 Years of ANBU Foundation Celebration',
    category: 'Community',
    image: '/images/anbu_20_years_celebration.png',
    caption: 'A historic assembly of thousands of students, mentors, and trustees celebrating 20 years of unconditional love and service.',
    date: '20 Years of ANBU'
  },
  {
    id: 'gal-2',
    title: 'Honored by Thalapathy Vijay',
    category: 'Community',
    image: '/images/thalapathy_vijay_award.png',
    caption: 'Actor and social icon Thalapathy Vijay felicitating the ANBU Foundation founders with a prestigious commemorative memento of civic excellence.',
    date: 'Civic Honor'
  },
  {
    id: 'gal-3',
    title: 'Auditorium of Women Scholars',
    category: 'Education',
    image: '/images/scholars_auditorium.png',
    caption: 'Hundreds of bright young female college scholars gathered with the founders during the annual higher education scholarship convention.',
    date: 'Scholarship Assembly'
  },
  {
    id: 'gal-founders-home',
    title: 'Founders at Home of Love Headquarters',
    category: 'Community',
    image: '/images/gallery_founders_home_of_love.png',
    caption: 'The founding couple whose selfless dedication and vision have nurtured thousands of underprivileged families across Tamil Nadu.',
    date: 'Founders Heritage'
  },
  {
    id: 'gal-meal',
    title: 'Joy of Giving — Community Meal Sharing',
    category: 'Community',
    image: '/images/gallery_community_meal.png',
    caption: 'Nourishing hunger with warm, freshly-prepared meals distributed directly to needy elders and street families.',
    date: 'Nutritional Care'
  },
  {
    id: 'gal-4',
    title: 'Founder Gratitude & Vanakkam',
    category: 'Community',
    image: '/images/founder_gratitude.png',
    caption: 'Managing Trustee expressing heartfelt gratitude to well-wishers, mentors, and the wider community on the 20th Anniversary.',
    date: 'Founder Note'
  },
  {
    id: 'gal-5',
    title: '10,000+ Scholarships Conferred Banner',
    category: 'Education',
    image: '/images/sathyabama_19th_anniversary.png',
    caption: 'Commemorating 10,000+ students benefited by the Anbu Scholarship in collaboration with Sathyabama Institute of Science and Technology.',
    date: 'Sathyabama University'
  },
  {
    id: 'gal-6',
    title: 'Founding Leadership & Trusteeship',
    category: 'Community',
    image: '/images/founders_leadership.png',
    caption: 'The founding couple and executive trustees whose tireless vision has steered ANBU Foundation through 20 years of transformative service.',
    date: 'Trustee Fellowship'
  },
  {
    id: 'gal-learning-hub',
    title: 'Bright Minds Inclusive Learning Hub',
    category: 'Education',
    image: '/images/learning_hub.png',
    caption: 'After-school tutoring, digital literacy, and holistic mentorship empowering children in underserved semi-urban neighborhoods.',
    date: 'Learning Hubs'
  },
  {
    id: 'gal-rural',
    title: 'Village Horizons Rural Empowerment',
    category: 'Community',
    image: '/images/rural_development.png',
    caption: 'Community mobilization, clean drinking water initiatives, and self-help group training across rural districts.',
    date: 'Rural Action'
  },
  {
    id: 'gal-wellness',
    title: 'Caring Hands Mobile Healthcare & Wellness',
    category: 'Healthcare',
    image: '/images/wellness_circle.png',
    caption: 'Free diagnostic medical camps, geriatric screening, and preventive health outreach for vulnerable rural communities.',
    date: 'Healthcare Outreach'
  },
  {
    id: 'gal-care',
    title: 'Grassroots Compassion & Elder Support',
    category: 'Community',
    image: '/images/community_care.jpg',
    caption: 'Providing monthly ration hampers, emotional companionship, and dignified care to abandoned and destitute senior citizens.',
    date: 'Elder Dignity'
  },
  {
    id: 'gal-education',
    title: 'Classroom & Study Kit Distribution',
    category: 'Education',
    image: '/images/school_supporting_hero.png',
    caption: 'Equipping rural school students with textbooks, uniforms, and digital educational resources for a brighter future.',
    date: 'School Support'
  },
  {
    id: 'gal-environment',
    title: 'Green Roots Community Tree Plantation',
    category: 'Environment',
    image: '/images/community_environment.jpg',
    caption: 'Students and youth planting native tree saplings to cultivate ecological harmony and green village corridors.',
    date: 'Eco Renewal'
  }
];
