export interface Programme {
  id: string;
  title: string;
  shortDesc: string;
  category: 'active' | 'proposed';
  image: string;
  focusArea: string;
  impactHighlight: string;
  fullDesc: string;
  curriculum: string[];
  kitSupplies?: string[];
  howToHelp: string;
}

export interface ImpactMetric {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
  description: string;
  verifiedStatus: string;
}

export interface Story {
  id: string;
  name: string;
  age: number;
  pseudonymNote: string;
  location: string;
  role: string;
  summary: string;
  quote: string;
  fullStory: string;
  image: string;
  safeguardingConsent: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  openSpots: number;
}

export const PROGRAMMES: Programme[] = [
  {
    id: 'education-for-every-girl',
    title: 'Education for Every Girl',
    category: 'active',
    focusArea: 'Enrolment & Academic Retention',
    impactHighlight: 'School fees, exercise books, uniforms & learning aids',
    shortDesc: 'Eliminating financial and systemic barriers to ensure girls enroll, stay in school, and complete quality primary and secondary education.',
    image: '/src/assets/images/programme_education_1793022640958.jpg',
    fullDesc: 'In many underprivileged communities, girls are disproportionately kept away from secondary school due to costs of learning materials, exam fees, and uniforms. Our Education for Every Girl initiative collaborates directly with accredited schools and community heads to sponsor school fees, provide durable textbooks, and ensure continuous academic tracking.',
    curriculum: [
      'Comprehensive back-to-school tuition assistance',
      'Termly distribution of curriculum textbooks and stationery',
      'Remedial reading and mathematics tutoring cohorts',
      'Parental engagement forums to counter early dropouts'
    ],
    kitSupplies: [
      'Hardcover notebooks and writing stationery',
      'Standardized STEM & English textbooks',
      'School bag and durable school shoes',
      'Solar study lamp for unelectrified households'
    ],
    howToHelp: 'A monthly sponsorship of $25 (₦20,000) keeps a vulnerable girl consistently enrolled with textbooks and uniform support.'
  },
  {
    id: 'girl-child-protection',
    title: 'Girl-Child Protection & Wellbeing',
    category: 'active',
    focusArea: 'Safeguarding & Legal Rights',
    impactHighlight: 'Zero-tolerance child protection, legal guidance & safe havens',
    shortDesc: 'Promoting child safeguarding, awareness of fundamental rights, access to emergency psychosocial counseling, and protective community networks.',
    image: '/src/assets/images/hero_girls_education_1793022640681.jpg',
    fullDesc: 'Protecting girls from gender-based violence, early forced child marriage, exploitation, and emotional distress is central to everything we do. We operate strict safeguarding guidelines, collaborate with licensed child psychologists, and facilitate rapid referral pathways with social welfare authorities.',
    curriculum: [
      'Rights education & bodily autonomy workshops for adolescents',
      'Community child protection reporting helpline partnerships',
      'Confidential trauma-informed counselling services',
      'Safe corridor emergency response protocols'
    ],
    howToHelp: 'Partner with our advocacy desk to fund legal aid, emergency housing support, and psychosocial care.'
  },
  {
    id: 'mentorship-and-leadership',
    title: 'Mentorship & Leadership Circles',
    category: 'active',
    focusArea: 'Role Models & Career Guidance',
    impactHighlight: 'One-on-one professional guidance & leadership bootcamps',
    shortDesc: 'Connecting promising young girls with vetted female professionals, community champions, and leadership mentors to build lasting confidence.',
    image: '/src/assets/images/programme_mentorship_1793022641965.jpg',
    fullDesc: 'Representation inspires courage. Our Mentorship Circles pair adolescent girls with accomplished women across medicine, technology, civil service, law, and entrepreneurship for structured bi-weekly guidance, career roadmapping, and public speaking coaching.',
    curriculum: [
      'Goal-setting, emotional intelligence, and resilience workshops',
      'Public speaking and assertive communication practice',
      'Career discovery sessions in STEM, governance, and creative arts',
      'Peer-to-peer buddy support circles in participating secondary schools'
    ],
    howToHelp: 'Apply as a vetted volunteer mentor or sponsor the logistical materials for a 12-week leadership cohort.'
  },
  {
    id: 'health-and-wellbeing',
    title: 'Health & Wellbeing Education',
    category: 'active',
    focusArea: 'Dignity Kits & Adolescent Health',
    impactHighlight: 'Menstrual dignity packages, hygiene education & health literacy',
    shortDesc: 'Providing age-appropriate health literacy, menstrual hygiene supplies, and supportive counseling so no girl misses school due to period poverty.',
    image: '/src/assets/images/story_girl_dignified_portrait_1793022642521.jpg',
    fullDesc: 'Period poverty and lack of sanitary washrooms force thousands of girls to miss up to 20% of the academic calendar each term. We supply dignity hygiene packs, establish safe sanitation corners in schools, and teach foundational adolescent health education with absolute compassion and respect.',
    curriculum: [
      'Age-appropriate menstrual hygiene and health workshops',
      'Provision of eco-friendly and reusable sanitary dignity kits',
      'WASH (Water, Sanitation and Hygiene) advocacy in rural schools',
      'Safe peer dialogue sessions on physical and emotional transitions'
    ],
    kitSupplies: [
      '6-month supply of sanitary pads and hygiene essentials',
      'Antibacterial soap, towel, and discreet waterproof carrier pouch',
      'Illustrated adolescent health and self-care guidebook'
    ],
    howToHelp: 'A gift of $15 (₦12,000) provides a girl with a comprehensive 6-month Menstrual Dignity Kit.'
  },
  {
    id: 'skills-economic-empowerment',
    title: 'Skills & Economic Empowerment',
    category: 'active',
    focusArea: 'Digital Literacy & Tech Pathways',
    impactHighlight: 'Coding, web design, financial literacy & creative vocations',
    shortDesc: 'Introducing girls to computational thinking, creative design, digital tools, and financial literacy to prepare them for 21st-century independence.',
    image: '/src/assets/images/programme_digital_stem_1793022641767.jpg',
    fullDesc: 'Bridging the digital divide ensures girls become creators of technology rather than passive consumers. Our hands-on digital bootcamps teach foundational computer literacy, coding basics, website design, and personal financial management.',
    curriculum: [
      'Computer fundamentals, typing, and safe internet usage',
      'Introductory Python, HTML/CSS, and scratch logic',
      'Creative digital media, storytelling, and presentation design',
      'Youth financial literacy: savings, budgeting, and ethical enterprise'
    ],
    howToHelp: 'Donate refurbished laptops or fund our community computer lab electricity and internet connectivity.'
  },
  {
    id: 'community-outreach-advocacy',
    title: 'Community Outreach & Advocacy',
    category: 'proposed',
    focusArea: 'Grassroots Dialogue & Systemic Change',
    impactHighlight: 'Engaging traditional elders, educators & parent councils',
    shortDesc: 'Proposed initiative: Engaging grassroots leaders, religious councils, and parents to dismantle cultural stigmas against female schooling.',
    image: '/src/assets/images/hero_girls_education_1793022640681.jpg',
    fullDesc: 'Lasting change requires the buy-in of the entire community. This proposed expansion will scale grassroots town halls with community gatekeepers, religious leaders, and village development committees to advocate for girl-child rights and safe local schooling ordinances.',
    curriculum: [
      'Grassroots town hall dialogues on the value of girls education',
      'Workshops with religious and traditional community leaders',
      'Formation of community-led Girl Protection Watch Committees',
      'Radio talk series addressing child labor and early marriage risks'
    ],
    howToHelp: 'We are seeking seed grant partners and institutional co-funders to pilot this community dialogue framework in 2026.'
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: '1,240+',
    numeric: 1240,
    suffix: '+',
    label: 'Girls Enrolled & Supported',
    description: 'Active scholarship, textbook, and uniform recipients across primary and secondary partner schools.',
    verifiedStatus: 'Verified School Cohort 2024–2026'
  },
  {
    value: '4,800+',
    numeric: 4800,
    suffix: '+',
    label: 'Learning & Dignity Kits',
    description: 'Complete packages including curriculum books, exercise books, stationery, and menstrual care items.',
    verifiedStatus: 'Field Inventory Audited'
  },
  {
    value: '380+',
    numeric: 380,
    suffix: '+',
    label: 'Mentorship Hours Completed',
    description: 'Structured 1-on-1 and small-group coaching led by vetted professional women in STEM, law, and education.',
    verifiedStatus: 'Logged Mentorship Logs'
  },
  {
    value: '22',
    numeric: 22,
    suffix: '',
    label: 'Partner Communities & Schools',
    description: 'Grassroots communities in urban peri-centres and rural districts with active Tobex Foundation safe spaces.',
    verifiedStatus: 'Operational MoUs Signed'
  },
  {
    value: '95+',
    numeric: 95,
    suffix: '+',
    label: 'Vetted Volunteers & Mentors',
    description: 'Trained educators, mentors, and child advocates bound by rigorous child safeguarding agreements.',
    verifiedStatus: 'Background-Checked Staff'
  }
];

export const STORIES_OF_HOPE: Story[] = [
  {
    id: 'amina-stem-dream',
    name: 'Amina',
    age: 16,
    pseudonymNote: 'Pseudonym used with parental consent to safeguard child privacy',
    location: 'Kano State',
    role: 'STEM Scholar & Aspiring Civil Engineer',
    summary: 'From the brink of being withdrawn from junior secondary school due to family economic hardship, Amina earned a scholarship and now ranks first in advanced sciences.',
    quote: 'Before the scholarship, I believed school was something I had to leave behind. Today, when I look at architectural blueprints, I know I will build bridges that help my community.',
    fullStory: 'Amina is the eldest daughter in a family of six. When her father lost his artisanal welding workshop, the family was forced to choose which child could continue schooling. Because of cultural norms, girls were typically expected to stay home and assist with household trade.\n\nThrough our Education for Every Girl identification process conducted with her village head, Amina was awarded a comprehensive secondary education bursary covering her books, fees, and uniform. Matched with an engineering mentor from our Mentorship Circle, Amina excelled in mathematics and physical sciences. In June 2025, she achieved distinctions across her senior secondary mock examinations and now leads her school coding club.',
    image: '/src/assets/images/story_girl_dignified_portrait_1793022642521.jpg',
    safeguardingConsent: 'Approved by legal guardian; real identity and precise location protected in compliance with Tobex Foundation Child Protection Policy 2026.'
  },
  {
    id: 'grace-leadership-peer',
    name: 'Grace',
    age: 14,
    pseudonymNote: 'Pseudonym used with parental consent to safeguard child privacy',
    location: 'Ogun State',
    role: 'Peer Mentor & Literacy Club Leader',
    summary: 'Struggling with reading confidence after prolonged absence from school, Grace received tutoring and a solar study lamp, transforming into an outspoken youth debater.',
    quote: 'My mentor taught me that my voice is not too soft to be heard. Now I teach younger girls in primary school that reading is their superpower.',
    fullStory: 'Grace had missed almost an entire academic year when her mother battled a prolonged illness. When she finally returned, falling behind in English and basic literacy crushed her self-esteem, making her withdraw from classroom participation.\n\nOur remedial tutoring programme paired Grace with Miss Bukola, a volunteer educator. Using structured phonetic reading materials and receiving an essential learning kit with a rechargeable solar study lamp for evening study, Grace caught up within four terms. Today, she organizes the weekend peer reading club in her community library and recently represented her district in a regional school debate.',
    image: '/src/assets/images/programme_education_1793022640958.jpg',
    safeguardingConsent: 'Approved by legal guardian; real identity and precise location protected in compliance with Tobex Foundation Child Protection Policy 2026.'
  },
  {
    id: 'halima-digital-future',
    name: 'Halima',
    age: 17,
    pseudonymNote: 'Pseudonym used with parental consent to safeguard child privacy',
    location: 'Lagos State',
    role: 'Digital Skills Cohort Graduate',
    summary: 'Had never operated a personal computer before joining our youth digital lab. Halima built her first educational website and is now enrolled in a polytechnic computer science foundation.',
    quote: 'Holding a laptop for the first time felt intimidating. Within three months, I wrote lines of code that created an interactive health quiz for my classmates. My world has expanded forever.',
    fullStory: 'Growing up in an informal settlement, Halima had aspirations of working in technology but had only ever seen computers on phone screens. Our Skills and Economic Empowerment lab provided her with three months of intensive weekly digital literacy classes.\n\nGuided by female software mentors, Halima mastered touch-typing, basic HTML/CSS, and digital research. Her final graduation project—a simple website sharing menstrual hygiene facts and local clinic directories—was commended by community health workers. She is currently preparing for university entrance examinations in Software Engineering.',
    image: '/src/assets/images/programme_digital_stem_1793022641767.jpg',
    safeguardingConsent: 'Approved by legal guardian; real identity and precise location protected in compliance with Tobex Foundation Child Protection Policy 2026.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Tobex Foundation’s commitment to dignity is extraordinary. They do not merely deliver supplies; they honor the girls, listen to the parents, and ensure every child is treated as an autonomous, capable human being.',
    author: 'Dr. Folashade Adeyemi',
    role: 'Education Policy Advisor & Senior Lecturer',
    organization: 'West African Education Initiative',
    location: 'Lagos, Nigeria'
  },
  {
    id: 'test-2',
    quote: 'As a school head, I have witnessed countless girls drop out when families encounter sudden hardship. Tobex Foundation stepped in quietly and respectfully, providing tuition, textbooks, and mentoring so no girl was left behind.',
    author: 'Sister Mary Okon',
    role: 'Community School Principal',
    organization: 'St. Claire Academy',
    location: 'Ogun State, Nigeria'
  },
  {
    id: 'test-3',
    quote: 'Mentoring through Tobex Foundation has been one of the most fulfilling commitments of my career. The structured curriculum, strict child safeguarding protocols, and sheer determination of the girls make every session unforgettable.',
    author: 'Bukola Martins',
    role: 'Volunteer STEM Mentor & Lead Software Architect',
    organization: 'TechWomen Africa Network',
    location: 'Abuja, Nigeria'
  },
  {
    id: 'test-4',
    quote: 'When my daughter received her scholarship, it took a heavy burden off our shoulders. More than that, seeing her come home with books and a smile brought dignity to our whole household.',
    author: 'Mr. Ibrahim Danjuma',
    role: 'Parent Representative & Community Elder',
    organization: 'Parents-Teachers Association Council',
    location: 'Kaduna, Nigeria'
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'event-stem-bootcamp',
    title: 'Girls in Tech & STEM Spring Bootcamp',
    date: 'April 18–20, 2026',
    time: '09:00 AM – 03:30 PM WAT',
    location: 'Tobex Youth Innovation Hub & Virtual Stream',
    type: 'Workshop & Mentorship',
    description: 'A 3-day intensive hands-on lab covering introductory programming, robotics demonstrations, and career speed-mentoring with prominent female engineers.',
    openSpots: 35
  },
  {
    id: 'event-back-to-school-drive',
    title: 'Annual Back-to-School Learning Kit Assembly',
    date: 'May 9, 2026',
    time: '10:00 AM – 04:00 PM WAT',
    location: 'Central Community Centre, Lagos',
    type: 'Community Volunteer Drive',
    description: 'Volunteers and partners gather to assemble over 1,500 comprehensive textbook, stationery, and hygiene packs for primary and junior secondary students.',
    openSpots: 50
  },
  {
    id: 'event-safeguarding-dialogue',
    title: 'Community Town Hall on Girl-Child Protection',
    date: 'June 4, 2026',
    time: '02:00 PM – 05:30 PM WAT',
    location: 'Town Hall & Local Radio Broadcast',
    type: 'Advocacy & Public Forum',
    description: 'An open dialogue with village elders, educators, and social service providers on strengthening local safeguarding and ensuring every girl has a safe path to school.',
    openSpots: 100
  }
];

export const DONATION_TIERS = [
  {
    id: 'tier-edu',
    title: 'Support School Tuition & Books',
    amountUSD: 25,
    amountNGN: 20000,
    amountGBP: 20,
    amountEUR: 24,
    description: 'Covers termly school enrolment fees, core curriculum exercise books, and writing materials for one girl.',
    impact: '1 girl supported with essential textbooks & school supplies for a full term'
  },
  {
    id: 'tier-kit',
    title: 'Fund Comprehensive Learning & Dignity Kit',
    amountUSD: 50,
    amountNGN: 40000,
    amountGBP: 40,
    amountEUR: 48,
    isPopular: true,
    description: 'Provides durable school uniform, sturdy backpack, full set of STEM textbooks, and a 6-month hygiene pack.',
    impact: 'Full educational dignity pack preventing absenteeism and school drop-out'
  },
  {
    id: 'tier-mentor',
    title: 'Sponsor Mentorship & Leadership Circle',
    amountUSD: 100,
    amountNGN: 80000,
    amountGBP: 80,
    amountEUR: 95,
    description: 'Funds 6 months of weekly one-on-one professional mentorship, life skills workshops, and leadership materials.',
    impact: 'Empowers 4 girls with weekly structured mentorship and confidence training'
  },
  {
    id: 'tier-outreach',
    title: 'Community Outreach & Safe Space Hub',
    amountUSD: 250,
    amountNGN: 200000,
    amountGBP: 200,
    amountEUR: 240,
    description: 'Powers community safeguarding dialogues, legal clinic hours, and study space internet connectivity.',
    impact: 'Strengthens an entire school district with safeguarding advocacy & safe study rooms'
  }
];

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  NGN: '₦',
  GBP: '£',
  EUR: '€'
};

export const CURRENCY_RATES: Record<string, number> = {
  USD: 1,
  NGN: 800,
  GBP: 0.8,
  EUR: 0.95
};
