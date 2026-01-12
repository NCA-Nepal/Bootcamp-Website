import { LucideIcon, Shield, Terminal, Code, Brain, TrendingUp, Users, Briefcase } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  duration: string;
  cost: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  link: string;
  weekly_breakdown: Week[];
}

export interface Week {
  week: number;
  title: string;
  topics: string[];
}

export const courses: Course[] = [
  {
    id: 'ethical-hacking',
    title: "Ethical Hacking Bootcamp",
    duration: "24 Weeks",
    cost: "रु4,500",
    description: "Master cybersecurity fundamentals, penetration testing, and ethical hacking techniques with hands-on labs and real-world scenarios.",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    link: "/course/ethical-hacking",
    weekly_breakdown: [
      { week: 1, title: "Cybersecurity Fundamentals", topics: ["CIA Triad", "Types of Threats", "Security Models", "Network Basics"] },
      { week: 2, title: "Networking Deep Dive", topics: ["OSI Model", "TCP/IP Protocol", "DNS/DHCP", "Network Tools"] },
      { week: 3, title: "System Hardening", topics: ["Linux Fundamentals", "File Permissions", "User Management", "Security Best Practices"] },
      { week: 4, title: "Cryptography", topics: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Digital Signatures"] },
      { week: 5, title: "Penetration Testing Tools", topics: ["Nmap", "Wireshark", "Metasploit", "Burp Suite"] },
      { week: 6, title: "Vulnerability Assessment", topics: ["CVSS Scoring", "Scanning Techniques", "Vulnerability Management", "Reporting"] }
    ]
  },
  {
    id: 'red-hat-admin',
    title: "Red Hat System Administration",
    duration: "16 Weeks",
    cost: "रु3,500",
    description: "Learn enterprise Linux system administration with Red Hat Enterprise Linux, covering configuration, management, and troubleshooting.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    icon: Terminal,
    color: "from-red-500 to-red-600",
    link: "/course/red-hat-admin",
    weekly_breakdown: [
      { week: 1, title: "RHEL Installation & Configuration", topics: ["System Installation", "Partitioning", "Boot Process", "GRUB Configuration"] },
      { week: 2, title: "File Systems & Storage", topics: ["Filesystem Types", "Mounting", "LVM Basics", "Storage Management"] },
      { week: 3, title: "User & Group Management", topics: ["User Creation", "Group Management", "Permissions", "Sudo Configuration"] },
      { week: 4, title: "Package Management", topics: ["RPM Basics", "Yum/DNF", "Package Installation", "Dependency Resolution"] },
      { week: 5, title: "Process & Services Management", topics: ["Systemd", "Service Management", "Process Monitoring", "Scheduling"] },
      { week: 6, title: "Network Configuration", topics: ["Network Interfaces", "DNS/DHCP", "Firewall Rules", "SSH Configuration"] }
    ]
  },
  {
    id: 'web-dev-mern',
    title: "Full Web Development - MERN Stack",
    duration: "12 Weeks",
    cost: "रु2,500",
    description: "Learn modern web development with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB from scratch.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324331cd?auto=format&fit=crop&w=800&q=80",
    icon: Code,
    color: "from-emerald-500 to-emerald-600",
    link: "/course/web-dev-mern",
    weekly_breakdown: [
      { week: 1, title: "HTML & CSS Basics", topics: ["HTML Structure", "CSS Styling", "Flexbox", "Grid Layout"] },
      { week: 2, title: "JavaScript Fundamentals", topics: ["Variables & Data Types", "Functions", "ES6 Features", "DOM Manipulation"] },
      { week: 3, title: "React Basics", topics: ["Components", "JSX", "Props", "State Management"] },
      { week: 4, title: "Advanced React", topics: ["Hooks", "Context API", "React Router", "Performance Optimization"] },
      { week: 5, title: "Backend with Node.js & Express", topics: ["Server Setup", "Routing", "Middleware", "REST APIs"] },
      { week: 6, title: "Database & Deployment", topics: ["MongoDB", "Mongoose ODM", "Authentication", "Deployment"] }
    ]
  },
  {
    id: 'osint',
    title: "OSINT & Digital Investigation",
    duration: "8 Weeks",
    cost: "रु1,200",
    description: "Master Open Source Intelligence gathering techniques, digital investigation methods, and data collection for security professionals.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?auto=format&fit=crop&w=800&q=80",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
    link: "/course/osint",
    weekly_breakdown: [
      { week: 1, title: "OSINT Fundamentals", topics: ["OSINT Methodology", "Data Sources", "Information Gathering", "Legal Considerations"] },
      { week: 2, title: "Social Media Investigation", topics: ["Profile Analysis", "Content Tracking", "Geolocation", "Account Investigation"] },
      { week: 3, title: "Domain & Network OSINT", topics: ["WHOIS Lookup", "DNS Records", "IP Investigation", "Network Mapping"] },
      { week: 4, title: "Advanced Search Techniques", topics: ["Google Dorking", "Shodan", "Censys", "Public Databases"] }
    ]
  },
  {
    id: 'python-django',
    title: "Full Web Development - Python Django",
    duration: "14 Weeks",
    cost: "रु3,200",
    description: "Build full-stack web applications using Python, Django framework, and modern frontend technologies.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    icon: Brain,
    color: "from-violet-500 to-violet-600",
    link: "/course/python-django",
    weekly_breakdown: [
      { week: 1, title: "Python Basics", topics: ["Python Fundamentals", "Data Types", "Functions", "OOP Concepts"] },
      { week: 2, title: "Django Setup & Models", topics: ["Django Installation", "Project Structure", "Models", "ORM"] },
      { week: 3, title: "Views & Templates", topics: ["Function-Based Views", "Class-Based Views", "Template Engine", "URL Routing"] },
      { week: 4, title: "Database & Admin Panel", topics: ["Database Migrations", "Django Admin", "Forms", "Authentication"] }
    ]
  },
  {
    id: 'data-science',
    title: "Data Science & Analytics",
    duration: "18 Weeks",
    cost: "रु4,000",
    description: "Master data analysis, machine learning, and visualization with Python, Pandas, and industry-standard tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    icon: TrendingUp,
    color: "from-cyan-500 to-cyan-600",
    link: "/course/data-science",
    weekly_breakdown: [
      { week: 1, title: "Python for Data Science", topics: ["Pandas", "NumPy", "Matplotlib", "Data Loading"] },
      { week: 2, title: "Data Cleaning & EDA", topics: ["Missing Data", "Outliers", "Feature Engineering", "Statistical Analysis"] },
      { week: 3, title: "Machine Learning Basics", topics: ["Supervised Learning", "Regression", "Classification", "Evaluation Metrics"] },
      { week: 4, title: "Advanced ML & Visualization", topics: ["Ensemble Methods", "Deep Learning Intro", "Tableau", "Business Intelligence"] }
    ]
  },
  {
    id: 'mobile-dev',
    title: "Mobile App Development",
    duration: "12 Weeks",
    cost: "रु3,500",
    description: "Create cross-platform mobile apps using React Native and modern mobile development practices.",
    image: "https://images.unsplash.com/photo-1512941691920-25bab299c0cb?auto=format&fit=crop&w=800&q=80",
    icon: Code,
    color: "from-pink-500 to-pink-600",
    link: "/course/mobile-dev",
    weekly_breakdown: [
      { week: 1, title: "Mobile Development Fundamentals", topics: ["React Native Setup", "Components", "Navigation", "Styling"] },
      { week: 2, title: "State Management & APIs", topics: ["Redux", "Context API", "REST APIs", "Data Fetching"] },
      { week: 3, title: "Advanced Features", topics: ["Local Storage", "Authentication", "Push Notifications", "Testing"] },
      { week: 4, title: "Deployment & Publishing", topics: ["App Signing", "App Store Publishing", "Google Play", "Performance"] }
    ]
  },
  {
    id: 'devops',
    title: "DevOps & Cloud Engineering",
    duration: "16 Weeks",
    cost: "रु4,200",
    description: "Learn CI/CD, containerization with Docker, Kubernetes, cloud platforms, and infrastructure automation.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4ee868e4e?auto=format&fit=crop&w=800&q=80",
    icon: Terminal,
    color: "from-yellow-500 to-yellow-600",
    link: "/course/devops",
    weekly_breakdown: [
      { week: 1, title: "DevOps Fundamentals", topics: ["DevOps Principles", "CI/CD Concepts", "Version Control", "Git Workflow"] },
      { week: 2, title: "Docker & Containerization", topics: ["Docker Basics", "Images & Containers", "Docker Compose", "Registry"] },
      { week: 3, title: "Kubernetes Orchestration", topics: ["K8s Basics", "Pods & Deployments", "Services", "ConfigMaps"] },
      { week: 4, title: "Cloud Platforms", topics: ["AWS/Azure/GCP", "Infrastructure as Code", "Monitoring", "Security"] }
    ]
  },
  {
    id: 'ui-ux',
    title: "UI/UX Design Bootcamp",
    duration: "10 Weeks",
    cost: "रु2,800",
    description: "Design beautiful and functional user interfaces with modern design principles, Figma, and user experience best practices.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    link: "/course/ui-ux",
    weekly_breakdown: [
      { week: 1, title: "Design Fundamentals", topics: ["Color Theory", "Typography", "Layout", "Visual Hierarchy"] },
      { week: 2, title: "UX Research & Wireframing", topics: ["User Research", "Personas", "Wireframes", "Prototyping"] },
      { week: 3, title: "Figma & Design Tools", topics: ["Figma Interface", "Component Design", "Design Systems", "Collaboration"] },
      { week: 4, title: "Interaction & Usability", topics: ["Micro-interactions", "Accessibility", "User Testing", "Design Patterns"] }
    ]
  },
  {
    id: 'digital-marketing',
    title: "Digital Marketing Mastery",
    duration: "8 Weeks",
    cost: "रु2,200",
    description: "Comprehensive digital marketing strategies including SEO, social media marketing, content strategy, and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4ee868e4e?auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
    color: "from-green-500 to-green-600",
    link: "/course/digital-marketing",
    weekly_breakdown: [
      { week: 1, title: "Digital Marketing Fundamentals", topics: ["Marketing Strategy", "Digital Channels", "Analytics Basics", "Goal Setting"] },
      { week: 2, title: "SEO & SEM", topics: ["Keyword Research", "On-page SEO", "Link Building", "Google Ads"] },
      { week: 3, title: "Social Media Marketing", topics: ["Platform Strategy", "Content Creation", "Community Management", "Influencer Marketing"] },
      { week: 4, title: "Analytics & Conversion", topics: ["Google Analytics", "Conversion Optimization", "A/B Testing", "ROI Measurement"] }
    ]
  },
  {
    id: 'ai-ml',
    title: "AI & Machine Learning",
    duration: "20 Weeks",
    cost: "रु5,500",
    description: "Deep dive into artificial intelligence, machine learning algorithms, neural networks, and practical ML applications.",
    image: "https://images.unsplash.com/photo-1677442d019cecf8caf27d6b5d0d9c3d?auto=format&fit=crop&w=800&q=80",
    icon: Brain,
    color: "from-red-500 to-red-600",
    link: "/course/ai-ml",
    weekly_breakdown: [
      { week: 1, title: "ML Fundamentals", topics: ["ML Types", "Supervised Learning", "Unsupervised Learning", "Feature Engineering"] },
      { week: 2, title: "Neural Networks", topics: ["Perceptron", "CNNs", "RNNs", "Transfer Learning"] },
      { week: 3, title: "Deep Learning & NLP", topics: ["TensorFlow/PyTorch", "Language Models", "Embeddings", "Transformers"] },
      { week: 4, title: "Production & Ethics", topics: ["Model Deployment", "MLOps", "Bias & Fairness", "Responsible AI"] }
    ]
  }
];
