// ============================================================
// Portfolio data — edit this file to update all content.
// ============================================================

export const profile = {
  name: 'Naing Naing Maw',
  title: 'Electrical Power Engineer & MBA Candidate',
  lead: 'Electrical Power Engineering graduate with hands-on experience in power systems and facilities management. Currently advancing into business leadership through an MBA at Beykent University, Istanbul.',
  bio: [
    'I am an Electrical Power Engineering graduate with experience spanning engineering, operations, quality control, and customer relationship management. Starting my career as an intern at Paung Laung Underground Hydropower Plant, I progressed through site engineering and operations roles in Myanmar before relocating to Istanbul.',
    'I have gained strong operational and customer-focused experience through roles at City Mart Holding Limited (CMHL), Facto Investments, Latonix, and currently as a CRM Specialist at Lavixo. My background uniquely combines technical engineering expertise with business operations and people skills — now being deepened through an MBA at Beykent University.',
  ],
  photo: '/photos/NNM.jpg',
  cvUrl: '/assets/Naing_Naing_Maw_CV.pdf',
  chips: [
    { icon: 'fas fa-map-marker-alt', text: 'Istanbul, Turkey' },
    { icon: 'fas fa-bolt', text: 'Power Engineer' },
    { icon: 'fas fa-graduation-cap', text: 'MBA Candidate' },
  ],
  metrics: [
    { value: '5+', label: 'Years Exp.', count: 5, suffix: '+' },
    { value: '4+', label: 'Industries', count: 4, suffix: '+' },
    { value: 'MBA', label: 'In Progress', count: null },
  ],
  statsCards: [
    { icon: 'fas fa-briefcase', value: '5+', label: 'Years of Experience', count: 5, suffix: '+', color: 'brand' },
    { icon: 'fas fa-industry', value: '4+', label: 'Industries Worked In', count: 4, suffix: '+', color: 'rose' },
    { icon: 'fas fa-flag', value: '4', label: 'Languages', count: 4, suffix: '', color: 'teal' },
    { icon: 'fas fa-graduation-cap', value: 'MBA', label: 'In Progress', count: null, color: 'brand' },
  ],
  infoChips: [
    { icon: 'fas fa-map-marker-alt', text: 'Istanbul, Turkey' },
    { icon: 'fas fa-university', text: 'Beykent University' },
  ],
};

export const navigation = [
  { href: '#', label: 'Home' },
  { href: '#experience', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certificates' },
];

export const highlights = [
  {
    icon: 'fas fa-bolt', color: 'brand',
    title: 'Power Engineering Roots',
    text: 'B.Eng in Electrical Power Engineering from Technological University Magway — specialised in power systems, circuit theory & electrical machines.',
  },
  {
    icon: 'fas fa-water', color: 'teal',
    title: 'Hydropower Experience',
    text: 'Gained hands-on experience at Paung Laung Underground Hydropower Plant — engineering fieldwork in live power generation environments.',
  },
  {
    icon: 'fas fa-hard-hat', color: 'sky',
    title: 'Site Engineering',
    text: 'Junior Site Engineer at Wint Htel San Construction — coordinated on-site electrical work for construction and interior decoration projects.',
  },
  {
    icon: 'fas fa-store', color: 'rose',
    title: 'Operations Leadership',
    text: 'Operation Supervisor at CMHL (City Mart Holding) — led facility engineering, preventive maintenance, and safety compliance across multiple retail sites.',
  },
  {
    icon: 'fas fa-chart-line', color: 'gold',
    title: 'CRM & QC Expertise',
    text: 'Quality Control Analyst and CRM Administrator at Facto Investments — bringing data discipline and customer relationship skills to business operations.',
  },
  {
    icon: 'fas fa-graduation-cap', color: 'mint',
    title: 'MBA Candidate',
    text: 'Currently pursuing MBA at Beykent University Istanbul — bridging engineering expertise with strategic business and international management knowledge.',
  },
];

export const stats = [
  { icon: 'fas fa-briefcase', count: 5, suffix: '+', label: 'Years Experience', labelTR: 'Yıl Deneyim' },
  { icon: 'fas fa-building', count: 6, suffix: '+', label: 'Companies Worked', labelTR: 'Çalıştığı Şirket' },
  { icon: 'fas fa-layer-group', count: 3, suffix: '', label: 'Professional Fields', labelTR: 'Profesyonel Alan' },
  { icon: 'fas fa-globe', count: 4, suffix: '', label: 'Languages Spoken', labelTR: 'Konuşulan Dil' },
];

export const experience = [
  {
    title: 'Customer Relationship Management Specialist',
    company: 'Lavixo',
    period: 'Mar 2026 – Present',
    location: 'Istanbul, Turkey',
    badge: 'Current Role',
    current: true,
    category: 'business',
    tags: ['CRM', 'Microsoft Office', 'Customer Service', 'General Office Work'],
  },
  {
    title: 'Customer Support Specialist',
    company: 'Latonix',
    period: 'Aug 2025 – Feb 2026',
    location: 'Istanbul, Turkey',
    badge: 'Full-time',
    current: false,
    category: 'business',
    tags: ['Customer Service', 'Microsoft Office'],
  },
  {
    title: 'Quality Control Analyst / CRM Administrator',
    company: 'Facto Investments',
    period: 'May 2024 – Jul 2025',
    location: 'Istanbul, Turkey',
    badge: 'Full-time',
    current: false,
    category: 'business',
    tags: ['Quality Control', 'Microsoft Office'],
  },
  {
    title: 'Operation Supervisor',
    company: 'CMHL — City Mart Holding Limited',
    period: 'Jan 2023 – Feb 2024',
    location: 'Yangon, Myanmar',
    badge: 'Full-time',
    current: false,
    category: 'engineering',
    tags: ['Site Coordination', 'Engineering Support', 'Facility Management', 'Microsoft Office'],
  },
  {
    title: 'Junior Site Engineer',
    company: 'Wint Htel San Construction & Interior Decoration Co., Ltd',
    period: 'Dec 2019 – Feb 2021',
    location: 'Yangon, Myanmar',
    badge: 'Full-time',
    current: false,
    category: 'engineering',
    tags: ['Site Engineering', 'Construction', 'Site Coordination'],
  },
  {
    title: 'Summer Intern',
    company: 'Paung Laung Underground Hydropower Plants',
    period: 'Mar 2019 – May 2019',
    location: 'Myanmar',
    badge: 'Internship',
    current: false,
    category: 'engineering',
    tags: ['Power Generation', 'Electrical Engineering'],
  },
];

export const education = [
  {
    bgYear: 'MBA',
    icon: 'fas fa-graduation-cap',
    period: '2024 – Present',
    school: 'Istanbul Beykent University',
    degree: 'Master of Business Administration (MBA)',
    location: 'Istanbul, Turkey',
    status: 'In Progress',
    active: true,
  },
  {
    bgYear: 'B.ENG',
    icon: 'fas fa-university',
    period: '2013 – 2019',
    school: 'Technological University, Magway',
    degree: 'Bachelor of Engineering in Electrical Power Engineering',
    location: 'Magway, Myanmar',
    status: 'Completed',
    active: false,
  },
];

export const skills = [
  {
    icon: 'fas fa-bolt',
    color: 'brand',
    title: 'Engineering',
    items: [
      'Power Systems & Electrical Machines',
      'Circuit Theory & Analysis',
      'Facility & Electrical Engineering',
      'Site Engineering & Coordination',
      'AutoCAD (basic)',
    ],
  },
  {
    icon: 'fas fa-chart-bar',
    color: 'teal',
    title: 'Business & Operations',
    items: [
      'Operations Management',
      'Quality Control & Assurance',
      'CRM Administration',
      'Team Leadership & Supervision',
      'Preventive Maintenance Planning',
    ],
  },
  {
    icon: 'fas fa-laptop',
    color: 'rose',
    title: 'Software & Tools',
    items: [
      'Microsoft Office Suite',
      'CRM Software',
      'Data Entry & Analysis',
      'Report Writing',
      'General IT Proficiency',
    ],
  },
  {
    icon: 'fas fa-globe',
    color: 'mint',
    title: 'Languages',
    type: 'lang',
    items: [
      { lang: 'Myanmar', level: 'Native', badge: 'native' },
      { lang: 'English', level: 'Professional', badge: 'pro' },
      { lang: 'Turkish', level: 'Learning', badge: 'learning' },
      { lang: 'Japanese', level: 'JLPT N4', badge: 'n4' },
    ],
  },
];

export const certifications = [];

export const contact = {
  email: 'naingmaw154@gmail.com',
  location: 'Istanbul, Turkey',
  linkedin: 'https://linkedin.com',
  whatsapp: 'https://wa.me/905XXXXXXXXX',
  message: 'I am actively seeking opportunities in engineering, operations, or business management where I can apply both my technical background and MBA knowledge. Feel free to reach out.',
};
