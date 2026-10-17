import type { Program } from '../types';

export const DEMO_NOTICE = "Note: Celebrating 20 Years of ANBU Foundation. Over 10,000 scholarships conferred in collaboration with premier universities including Sathyabama Deemed University.";

export const programsData: Program[] = [
  {
    slug: 'anbu-scholarship',
    title: 'Anbu Scholarship',
    category: 'Education',
    tagline: 'Opening university doors for over 10,000 deserving rural and first-generation scholars.',
    quote: 'Getting Education is the Basic Right Protecting this Right is our Basic Duty',
    shortDescription: 'The Scholarship is offered for children who are meritorious and lacking financial support to continue their education, championing university access with complete dignity.',
    fullDescription: 'The Scholarship is offered for children who are meritorious and lacking financial support to continue their education. The foundation is associated with many trusts and peer foundations to offer this scholarship with higher degree of transparency and productivity.\n\nIn addition to this, scholarship is offered for Army students, destitute women children, war-widow children and to the children of drivers in our University. The screening is carried out by a well-structured mechanism that takes into account of the factors such as Family situation, Board examination performance and an entrance exam conducted by the Foundation.',
    coverImage: '/images/anbu_scholarship.jpg',
    videoUrl: 'https://www.youtube.com/embed/K4mWKqTwZhE',
    status: 'Active',
    progressPercentage: 95,
    featured: true,
    associatedTrusts: [
      'Agaram Foundation',
      'World Vision',
      'India Vision',
      'Ability Foundation',
      'Banyan',
      'NAAM',
      'Maatram Foundation',
      'Tamilnadu Blind Association'
    ],
    specialCategories: [
      'Army Students & Defense Personnel Families',
      'Destitute Women Children',
      'War-Widow Children',
      'Children of Drivers & University Support Staff',
      'Meritorious First-Generation Rural Scholars'
    ],
    selectionCriteria: [
      'In-depth family situation, income & vulnerability assessment',
      '10th & 12th Board examination meritorious performance',
      'Rigorous Entrance Exam conducted directly by ANBU Foundation',
      'Personal interview and verification with peer partner trusts'
    ],
    objectives: [
      'Eliminate financial hurdles for brilliant first-generation rural students',
      'Champion women scholars in science, technology, medicine, and engineering',
      'Provide continuous placement training, soft skills, and career counseling',
      'Build a self-sustaining alumni network of leaders committed to giving back'
    ],
    activities: [
      'Annual state-wide scholarship selection and verification drives',
      'Sponsorship of tuition fees, lab instruments, and course materials',
      'Corporate mentorship cohorts connecting students with industry leaders',
      'Annual scholarship convention honoring meritorious graduates'
    ],
    intendedBeneficiaries: 'Meritorious students from economically underprivileged backgrounds, Army students, destitute women children, war-widow children, and children of university drivers across Tamil Nadu.',
    metrics: [
      { label: 'Scholarships Awarded', value: '10,000+ Students' },
      { label: 'Women Scholars', value: '70% Allocation' },
      { label: 'Academic Partners', value: 'Sathyabama University & More' }
    ],
    waysToParticipate: [
      'Sponsor a student semester or full 4-year degree scholarship',
      'Offer corporate campus internships and entry-level career openings',
      'Mentor graduating students in interview prep and resume design'
    ]
  },
  {
    slug: 'inclusive-education',
    title: 'Inclusive Education',
    category: 'Education',
    tagline: 'Togetherness is the tool for better tomorrow — Educating hundreds of disabled and underprivileged youth.',
    quote: 'Togetherness is the tool for better tomorrow',
    shortDescription: 'Education is as significant as breath for everyone. Inculcating inclusivity among students is an integrated training method at Sathyabama Institute of Science and Technology.',
    fullDescription: 'Education is the only aspect that is equally significant as Breath for everyone. Education need not be formal; everyday offers many learning laps for us to evolve as a better human being. Any form of education should install the sense of progress.\n\nAnbu is blessed with an excellent platform in the form of our University in offering education embedded with inclusiveness. Hundreds of disabled, underprivileged students are offered education every year. Inculcating inclusivity among students is an integrated method of our training at Sathyabama Institute of Science and Technology.\n\nApart from this, we are also associated and have numerous collaborations with many contemporary service organizations, so that the opportunity to help becomes more divergent. Our belief is “Togetherness is the tool for better tomorrow”.',
    coverImage: '/images/learning_hub.png',
    videoUrl: 'https://www.youtube.com/embed/gq_DqK4fRrY',
    videoUrls: [
      'https://www.youtube.com/embed/gq_DqK4fRrY',
      'https://www.youtube.com/embed/synNfUV09Sg'
    ],
    status: 'Active',
    progressPercentage: 90,
    featured: true,
    objectives: [
      'Ensure education embedded with inclusiveness for hundreds of disabled and underprivileged students',
      'Integrate inclusivity awareness and empathetic training at Sathyabama Institute of Science and Technology',
      'Foster numerous collaborations with contemporary service organizations to diverge opportunities to help',
      'Instill a continuous sense of progress and self-reliance through formal and experiential learning'
    ],
    activities: [
      'Annual disabled and underprivileged student admissions and scholarship orientation',
      'Campus accessibility enablement and specialized assistive academic aids',
      'Inter-collegiate collaborative social service projects with partner organizations',
      'Inclusivity sensitizing workshops and student leadership forums'
    ],
    intendedBeneficiaries: 'Disabled students, visually and hearing-challenged scholars, underprivileged youth, and the student community across Tamil Nadu.',
    metrics: [
      { label: 'Beneficiary Students', value: 'Hundreds Every Year' },
      { label: 'University Platform', value: 'Sathyabama Deemed University' },
      { label: 'Collaborations', value: 'Contemporary Service Orgs' }
    ],
    waysToParticipate: [
      'Volunteer as an academic scribe or reader for visually impaired scholars',
      'Collaborate as a contemporary service organization to diverge help opportunities',
      'Sponsor assistive learning devices, speech-to-text software, and mobility aids'
    ]
  },
  {
    slug: 'school-supporting-programs',
    title: 'School Supporting Programs',
    category: 'School Adoption',
    tagline: 'Teach to a teacher, you are teaching many students; Support a School, you are supporting the future of Society.',
    quote: 'Teach to a teacher, you are teaching many students Support a School; you are supporting future of Society',
    shortDescription: 'Active school adoption and infrastructure support for Government schools in and around Chennai, transforming amenities, smart classrooms, and personality workshops.',
    fullDescription: 'Anbu is active in school supporting programs. Some of them are Government schools belong to Nallambakkam, Hastinapuram, Ezhilnagar, Kannaginagar, Karappakkam and Sholinganallur areas in and around Chennai.\n\nWe support these schools in the establishment of basic amenities, infrastructure pertaining to smart learning besides conducting many literary events, sports and personality development workshops.',
    coverImage: '/images/school_supporting_hero.png',
    videoUrl: 'https://www.youtube.com/embed/WWeU-B8HVI0',
    status: 'Active',
    progressPercentage: 92,
    featured: true,
    specialCategories: [
      'Nallambakkam Government School',
      'Hastinapuram Government School',
      'Ezhilnagar Government School',
      'Kannaginagar Government School',
      'Karappakkam Government School',
      'Sholinganallur Government School'
    ],
    objectives: [
      'Establish essential basic amenities, hygienic sanitation, and pure drinking water in government schools',
      'Construct and furnish modern smart-learning classrooms with digital tools and stocked libraries',
      'Organize enriching literary events, reading competitions, and creative arts clubs for students',
      'Conduct regular sports tournaments, fitness training, and personality development workshops'
    ],
    activities: [
      'Basic amenities enhancement: RO water plants, renovated washrooms, and colorful campus murals',
      'Smart learning infrastructure: Audio-visual projectors, smart boards, and digital science kits',
      'Literary & creative development: Debate competitions, reading clubs, and book distributions',
      'Sports and life skills: Annual athletic meets, sports gear supplies, and youth personality mentorship'
    ],
    intendedBeneficiaries: 'Students and teaching faculty at Government schools in Nallambakkam, Hastinapuram, Ezhilnagar, Kannaginagar, Karappakkam, and Sholinganallur in and around Chennai.',
    metrics: [
      { label: 'Adopted Schools', value: 'Government Schools Across Chennai' },
      { label: 'Core Interventions', value: 'Smart Classrooms & Amenities' },
      { label: 'Student Development', value: 'Sports, Literary & Workshops' }
    ],
    waysToParticipate: [
      'Adopt a classroom or library in an adopted Chennai government school',
      'Conduct guest personality development or STEM workshops for school students',
      'Sponsor sports kits, stationery packs, or clean drinking water filters'
    ]
  },
  {
    slug: 'rural-development',
    title: 'Rural Development',
    category: 'Rural Development',
    tagline: '“India lives in its Villages” — Empowering adopted rural hamlets and sub-urban communities.',
    quote: 'India lives in its Villages - Mahatma Gandhi',
    shortDescription: 'The progressive wheels of development possess smooth transit into future, when villages are empowered. Anbu stepped into rural development through village adoption and slum renewal.',
    fullDescription: 'The progressive wheels of development possess smooth transit into future, when villages are empowered. Anbu assimilated this fact in its genome and stepped into rural development.\n\nNallambakkam, Ezhilnagar, Kannaginagar are adopted besides improving the conditions of living in slums of sub-urban areas such as Perumbakkam.',
    coverImage: '/images/rural_development.jpg',
    status: 'Active',
    progressPercentage: 88,
    featured: true,
    specialCategories: [
      'Nallambakkam Adopted Village',
      'Ezhilnagar Community',
      'Kannaginagar Community',
      'Perumbakkam Sub-Urban Living Upliftment',
      '10 Villages in Kanchipuram District'
    ],
    accomplishments: [
      {
        title: 'Organic Vegetable Farm in School Premises',
        desc: 'Setting up an organic vegetable farm inside the school premises to help the people of Nallambakkam for their everyday living.'
      },
      {
        title: 'Women Empowerment Programs across 10 Villages',
        desc: 'Women empowerment programs in 10 villages in Kanchipuram district.'
      },
      {
        title: 'My Saturday University',
        desc: 'A Unique program to uplift the spirit of learning among students of sub-urban areas in Chennai city.',
        link: {
          text: 'Schools can register for the program by clicking here!',
          url: '/contact'
        }
      }
    ],
    objectives: [
      'Empower adopted villages with self-sustaining local food production and infrastructure',
      'Conduct women empowerment and skill-building programs across 10 villages in Kanchipuram',
      'Run “My Saturday University” to uplift learning and curiosity among sub-urban students',
      'Improve sanitation, hygiene, and living standards in sub-urban resettlement areas'
    ],
    activities: [
      'Organic farming and seed distribution inside rural school campuses for community food security',
      'Women micro-enterprise, financial literacy, and SHG development in Kanchipuram villages',
      'Weekly “My Saturday University” interactive science, arts, and leadership sessions',
      'Clean water, community health camps, and living space renewal in Perumbakkam slums'
    ],
    intendedBeneficiaries: 'Residents of adopted hamlets in Nallambakkam, Ezhilnagar, Kannaginagar, sub-urban slums of Perumbakkam, and 10 villages across Kanchipuram district.',
    metrics: [
      { label: 'Adopted Hamlets', value: 'Nallambakkam, Kannaginagar & More' },
      { label: 'Women Programs', value: '10 Kanchipuram Villages' },
      { label: 'Signature Program', value: 'My Saturday University' }
    ],
    waysToParticipate: [
      'Register your school or institution for “My Saturday University”',
      'Volunteer in weekend organic vegetable farming and soil care in Nallambakkam',
      'Partner in rural women empowerment and vocational toolkits'
    ]
  },
  {
    slug: 'joy-of-giving',
    title: 'Joy of Giving',
    category: 'Community Welfare',
    tagline: '“Joy of giving is the Joy of living” — Extending vital nutrition, healthcare, and educational aid across society.',
    quote: 'Joy of giving is the Joy of living',
    shortDescription: 'The foundation is extending its services to divergent sectors of the society. The prime services are offering food, healthcare and education.',
    fullDescription: 'The foundation is extending its services to divergent sectors of the society. The prime services are offering food, healthcare and education.\n\nFrom daily lunch provisions for special needs children to weekly fruit distributions at cancer institutes, pediatric cancer care, and education support for children’s homes, ANBU Foundation brings unconditional love into tangible, everyday action.',
    coverImage: '/images/joy_of_giving_hero.png',
    videoUrl: 'https://www.youtube.com/embed/YBNfXKn1128',
    status: 'Active',
    progressPercentage: 96,
    featured: true,
    associatedTrusts: [
      'Little Hearts Residential School',
      'Adyar Cancer Institute, Chennai',
      'Meenakshi Mission Hospital, Madurai',
      'Mother & Child Welfare Foundation, Kolkata',
      'The Banyan',
      'Saranya Children Home',
      'Friends Home, Vellore',
      'Health First India (Leprosy Relief)'
    ],
    accomplishments: [
      {
        title: 'Daily Lunch Provisions for Special Schools',
        desc: 'Lunch is provided every day for the students of Little Hearts Residential School for the mentally Challenged in Mahabalipuram and Pudupakkam, St. Louis in Ponniammankoil, and The Banyan.'
      },
      {
        title: 'Food for Orphanages & Elder Homes',
        desc: 'Food is provided periodically for orphanages such as Pope George garden in Madhavaram, Friends home in Vellore (HIV affected people), and Indira old age home in Injambakkam.'
      },
      {
        title: 'Weekly Patient Nutrition at Adyar Cancer Institute',
        desc: 'Every Saturday distributing fruits and necessary food to patients in Adyar Cancer Institute, Chennai.'
      },
      {
        title: 'Healthcare Support for Cancer & Autism Treatment',
        desc: 'Health care support for children for cancer treatment in Meenakshi Mission Hospital of Madurai, and health care support for autism affected children in Mother and Child Welfare and Research Foundation India of Kolkata.'
      },
      {
        title: 'Educational Sponsorship for Children Homes',
        desc: 'Helping hand for the education of children belonging to Saranya Children Home, Help a Child of India, Pengal Samooga Nala Trust, Christian Mission Charitable Trust, and students from World Vision.'
      },
      {
        title: 'Leprosy Relief & Vulnerable Community Aid',
        desc: 'Active in offering needed assistance to Sumanahalli Society, Smile Foundation, and Health First India (Leprosy relief work).'
      }
    ],
    objectives: [
      'Provide daily wholesome meals for mentally challenged students and destitute elderly individuals',
      'Deliver weekly nutritional food and fruit distributions to cancer patients at Adyar Cancer Institute',
      'Sponsor critical healthcare, oncology treatments, and autism therapies for vulnerable children',
      'Extend continuous education sponsorship and dignity assistance to child care homes and leprosy relief missions'
    ],
    activities: [
      'Daily lunch preparation and distribution for Little Hearts Residential School and The Banyan',
      'Weekly Saturday fresh fruit and nutritional basket delivery to patients at Adyar Cancer Institute',
      'Medical aid coordination with Meenakshi Mission Hospital (Madurai) and Mother & Child Welfare Foundation (Kolkata)',
      'Periodic grocery, clothing, and educational supplies distribution to orphanages across Tamil Nadu'
    ],
    intendedBeneficiaries: 'Special needs children, cancer patients, elderly residents, children living in orphanages, and families affected by leprosy across Tamil Nadu and West Bengal.',
    metrics: [
      { label: 'Daily Lunch Drives', value: 'Every Day Active' },
      { label: 'Cancer Patient Aid (Adyar)', value: 'Every Saturday' },
      { label: 'Sectors Served', value: 'Food, Health & Education' }
    ],
    waysToParticipate: [
      'Sponsor daily lunch meals for special needs children at Little Hearts School',
      'Join the Saturday fruit distribution team at Adyar Cancer Institute',
      'Support specialized pediatric cancer and autism healthcare treatments'
    ]
  },
  {
    slug: 'skill-development',
    title: 'Skill Development',
    category: 'Skill Development',
    tagline: '“Knowledge transforms into wisdom. Skill transforms into development.” — Preparing an efficient skill pool for society.',
    quote: 'Knowledge transforms into wisdom. Skill transforms into development.',
    shortDescription: 'Our country has abundance of talent for this transformation to take place. We should offer enough motivation and assistance; Anbu is dedicated to prepare efficient skill pool for the society.',
    fullDescription: 'Our country has abundance of talent for this transformation to take place. We should offer enough motivation and assistance; Anbu is dedicated to prepare efficient skill pool for the society.\n\nFrom training more than 2,000 rural women in diverse sustainable livelihoods to formal professional diploma courses and national-level institutional convergence projects, ANBU Foundation turns skill into lasting dignity and financial self-reliance.',
    coverImage: '/images/skill_development.jpg',
    status: 'Active',
    progressPercentage: 94,
    featured: true,
    associatedTrusts: [
      'Ministry of Women and Child Development',
      'National Mission for Empowerment of Women (NMEW)',
      'National Resource Centre for Women',
      'Women Empowerment Bureau, Kanchipuram'
    ],
    specialCategories: [
      'Mushroom Cultivation Course',
      'Seaweed Cultivation Course',
      'Solar Lamp Making Workshop',
      'Handcrafted Soap Making',
      'Jewellery Design & Making',
      'Ornamental Fish Cultivation',
      'Diploma Course in Cosmetology',
      'Diploma in Tailoring'
    ],
    accomplishments: [
      {
        title: 'Livelihood Training for 2000+ Women across 10 Villages',
        desc: 'Trained more than 2000 women in ten villages of Kanchipuram district on the courses of Mushroom cultivation, Seaweed Cultivation, Solar lamp making, Soap making, Jewellery making and Ornamental fish cultivation.'
      },
      {
        title: 'Diploma Course in “Cosmetology”',
        desc: 'Certified professional training in cosmetology, skin care, beauty therapies, and salon management empowering women to establish independent micro-salons.'
      },
      {
        title: 'Diploma in Tailoring',
        desc: 'Comprehensive training in garment drafting, pattern making, industrial stitching, and apparel design enabling steady livelihood generation.'
      },
      {
        title: 'Sanctioned Women Empowerment Bureau (NMEW)',
        desc: 'Initiated a thematic convergence project titled “Women Empowerment Bureau for the Kanchipuram district, TamilNadu” sanctioned by the National Mission for Empowerment of Women (NMEW) under the Ministry of Women and Child Development and National Resource Centre for Women.'
      }
    ],
    objectives: [
      'Prepare an efficient, self-reliant skill pool for society across rural and peri-urban Tamil Nadu',
      'Train rural women in high-demand sustainable vocational trades including solar fabrication and bio-cultivation',
      'Deliver certified diploma programs in Cosmetology and Tailoring for direct employability',
      'Execute government-sanctioned convergence models under the National Mission for Empowerment of Women (NMEW)'
    ],
    activities: [
      'Hands-on vocational workshops in mushroom, seaweed, and ornamental fish cultivation',
      'Solar lantern assembly, artisan jewelry crafting, and organic soap making seminars',
      'Full-time Diploma in Cosmetology and Diploma in Tailoring practical atelier sessions',
      'Operations of the Women Empowerment Bureau for Kanchipuram district convergence'
    ],
    intendedBeneficiaries: 'Rural women, self-help group members across Kanchipuram district, aspiring female entrepreneurs, and unemployed youth.',
    metrics: [
      { label: 'Women Trained', value: '2,000+ Women' },
      { label: 'Villages Transformed', value: '10 Villages (Kanchipuram)' },
      { label: 'National Mission Project', value: 'Sanctioned by NMEW' }
    ],
    waysToParticipate: [
      'Sponsor a vocational toolkit or sewing machine for a newly certified graduate',
      'Conduct expert guest training on digital marketing or micro-finance',
      'Partner in market linkages for products crafted by rural women collectives'
    ]
  }
];
