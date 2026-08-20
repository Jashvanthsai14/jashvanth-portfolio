export const profile = {
  name: 'Achyuta Jashvanth Sai',
  initials: 'AJ',
  headline: 'Aspiring AI & Software Engineer',
  greeting: "Hello, I'm",
  intro:
    "Final-year Computer Science & IT student passionate about building intelligent solutions, machine learning, and impactful software applications.",
  about:
    "I'm a final-year Computer Science & Information Technology student with a strong interest in Artificial Intelligence, Machine Learning, and software development. I enjoy turning ideas into real-world applications that solve meaningful problems.",
  availability: 'Open to Opportunities',
  location: 'KL University, India',
  email: 'jashvanthsaiachyuta@gmail.com',
  github: 'https://github.com/achyuta-jashvanth',
  linkedin: 'https://www.linkedin.com/in/achyuta-jashvanth-sai/',
  cvUrl: '/resume/Jashvanth__Resume.pdf',
};

export const stats = [
  { label: 'CGPA', value: '9.07', icon: 'GraduationCap' },
  { label: 'Projects Completed', value: '3+', icon: 'FolderGit2' },
  { label: 'Certifications', value: '4+', icon: 'Award' },
  { label: 'Internships', value: '2+', icon: 'Briefcase' },
];

export const techStack = [
  { name: 'Python', icon: 'FileCode2' },
  { name: 'C', icon: 'Hash' },
  { name: 'SQL', icon: 'Database' },
  { name: 'Machine Learning', icon: 'BrainCircuit' },
  { name: 'HTML', icon: 'Code' },
  { name: 'CSS', icon: 'Palette' },
  { name: 'JavaScript', icon: 'Braces' },
  { name: 'Git & GitHub', icon: 'Github' },
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'Code',
    skills: ['Python', 'C', 'SQL'],
  },
  {
    title: 'AI / Machine Learning',
    icon: 'BrainCircuit',
    skills: [
      'Machine Learning',
      'Artificial Intelligence',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'PyTorch (Basics)',
    ],
  },
  {
    title: 'Web Technologies',
    icon: 'Globe',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'FastAPI'],
  },
  {
    title: 'Core Computer Science',
    icon: 'Cpu',
    skills: [
      'Object-Oriented Programming (OOP)',
      'Data Structures & Algorithms (Fundamentals)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    title: 'Databases & SQL',
    icon: 'Database',
    skills: ['MySQL', 'ANSI SQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Visual Studio Code', 'MySQL Workbench'],
  },
];

export const projects = [
  {
    title: 'NutriCart',
    subtitle: 'AI-Powered Smart Campus Food Ordering Platform',
    tech: ['React', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'AI'],
    featured: true,
    description: [
      'Developed a smart campus food-ordering platform with authentication, menu management, shopping cart, and order processing.',
      'AI-powered meal recommendations based on user mood, preferences, budget, and dietary goals.',
      'NutriPoints rewards to encourage healthier food choices through redeemable points.',
      'Smart Group Cart with friend invitations and split-payment support.',
      'NutriBot AI Assistant for order tracking, food discovery, coupon assistance, and nutrition guidance.',
    ],
    features: [
      'AI Meal Planner',
      'NutriBot',
      'NutriPoints',
      'Smart Group Cart',
      'AI Food Discovery',
    ],
    links: { live: '#', github: '#' },
  },
  {
    title: 'AI Resume Intelligence & Job Match Analyzer',
    subtitle: 'NLP-powered resume analyzer',
    tech: ['Python', 'NLP', 'FastAPI', 'MySQL'],
    featured: false,
    description: [
      'NLP-based application that analyzes resumes against job descriptions and evaluates job compatibility.',
      'Uses TF-IDF and Cosine Similarity to identify matching and missing skills.',
      'FastAPI backend for resume and job-description analysis.',
      'MySQL for structured data storage.',
      'Provides actionable insights for improving resumes for targeted roles.',
    ],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Responsive developer portfolio',
    tech: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    description: [
      'Responsive personal portfolio showcasing technical skills, projects, certifications, and academic experience.',
      'Clean modern UI with responsive layouts and intuitive navigation.',
      'Dedicated project, skills, profile, and experience sections.',
    ],
    links: { live: '#', github: '#' },
  },
];

export const experiences = [
  {
    role: 'Machine Learning Intern',
    org: 'CodSoft',
    period: 'July 2026 – August 2026',
    status: 'Completed',
    description:
      'Developed machine learning models using Python and Scikit-learn, including data preprocessing, model training, and performance evaluation.',
  },
  {
    role: 'Generative AI Virtual Internship',
    org: 'Google Cloud',
    period: '2026',
    status: 'Completed',
    description:
      'Completed hands-on projects in Generative AI, prompt engineering, and AI application development using Google Cloud technologies.',
  },
  {
    role: 'AI/ML Virtual Internship',
    org: 'YBI Foundation',
    period: '2026',
    status: 'Upcoming',
    description:
      'Upcoming virtual internship focused on AI/ML model development and real-world problem solving.',
  },
];

export const certifications = [
  {
    name: 'Get Started Developing Agents in Microsoft Foundry',
    org: 'Microsoft Applied Skills',
    year: '2026',
    status: 'Earned',
    url: '#',
  },
  {
    name: 'AI Fundamentals / Generative AI',
    org: 'IBM SkillsBuild',
    year: '2026',
    status: 'Earned',
    url: '#',
  },
  {
    name: 'GenAI — EduSkills',
    org: 'Google',
    year: '2026',
    status: 'Earned',
    url: '#',
  },
  {
    name: 'Scientific Computing with Python',
    org: 'freeCodeCamp',
    year: '2026',
    status: 'Planned',
    url: '#',
  },
];

export const education = [
  {
    institution: 'KL University',
    degree: "Bachelor's in Computer Science and Information Technology",
    score: 'CGPA: 9.07',
    period: 'July 2023 – Present',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate (MPC)',
    score: '82.2%',
    period: 'July 2021 – March 2023',
  },
  {
    institution: 'Sri Krishnaveni School',
    degree: 'Secondary School (Class X)',
    score: '91.2%',
    period: 'June 2017 – March 2021',
  },
];


export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
