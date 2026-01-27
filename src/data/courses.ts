import { LucideIcon, Shield, Terminal, Code, TrendingUp, Skull } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  duration: string;
  cost: string;
  originalPrice?: string;
  discountPercentage?: number;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  link?: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'insane';
  enrollmentLink?: string;
  syllabusLink?: string;
  weekly_breakdown: Week[];
}

export interface Week {
  week: number;
  title: string;
  topics: string[];
}

export const courses: Course[] = [
  {
    id: 'ethical-hacking-beginners',
    title: "Beginners Ethical Hacking Bootcamp",
    duration: "12 Weeks",
    cost: "रु2,499",
    originalPrice: "रु5,000",
    discountPercentage: 50,
    description: "Master cybersecurity fundamentals with hands-on labs. This intensive 12-week program covers Linux, networking, cryptography basics, and introduction to penetration testing. Perfect for anyone aspiring to start a career in ethical hacking and cybersecurity.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    difficulty: 'easy',
    link: "/course/ethical-hacking-beginners",
    weekly_breakdown: [
      { week: 1, title: "Module 1: Linux - Part 1", topics: ["Introduction", "Installing Kali Linux", "Linux Structure", "Linux Terminal", "Basic Linux Commands"] },
      { week: 2, title: "Module 1: Linux - Part 2", topics: ["Manipulating Texts", "Manage and Analyze Network", "Software Management", "File & Directory Permissions"] },
      { week: 3, title: "Module 1: Linux - Part 3", topics: ["Process Management", "User Environment Variables", "Compressing and Archiving"] },
      { week: 4, title: "Module 2: Introducing to Networking", topics: ["Networking Models", "OSI Model", "TCP/IP Model", "IP Addressing & Subnetting", "Ports and Protocols"] },
      { week: 5, title: "Module 2: Networking Continued", topics: ["DNS (Domain Name System)", "Network Devices & Topologies", "VPN & Proxies"] },
      { week: 6, title: "Module 3: Cryptography Basics", topics: ["Introduction to Cryptography", "Encoding and Decoding", "Encrypting and Decrypting", "Symmetric vs. asymmetric encryption", "Hashing algorithms"] },
      { week: 7, title: "Module 4: Information Security - Part 1", topics: ["Overview of Information Security Domains", "Introduction to Penetration Testing", "Bug Bounty Programs: Overview and Scope"] },
      { week: 8, title: "Module 4: Information Security - Part 2", topics: ["Standards and Frameworks (ISO 27001, PCI DSS, HIPAA)", "Legal and Ethical Considerations", "Types of Penetration Tests"] },
      { week: 9, title: "Module 4: Penetration Testing Process", topics: ["Pre-engagement Activities", "Reconnaissance", "Vulnerability Assessment", "Exploitation", "Post-exploitation"] },
      { week: 10, title: "Module 5: Web Enumeration and Footprinting", topics: ["OSINT and Google Dorking", "Web Fuzzing Tools", "Banner Grabbing", "Whois and Dig Commands", "Zone Transfer Attacks"] },
      { week: 11, title: "Module 5: Web Enumeration Continued", topics: ["Subdomain and Vhost Enumeration", "External Web Reconnaissance"] },
      { week: 12, title: "Module 6: Web Hacking (Basics)", topics: ["Overview of Burpsuite", "SQL Injection", "Cross-Site Scripting (XSS)", "Open Redirect", "File Inclusion Vulnerabilities", "Command Injection", "Cross-Site Request Forgery (CSRF)"] }
    ]
  },
  {
    id: 'ethical-hacking-advanced',
    title: "Advanced Ethical Hacking Bootcamp",
    duration: "12 Weeks",
    cost: "रु2,999",
    originalPrice: "रु6,000",
    discountPercentage: 50,
    description: "Advanced penetration testing and exploitation techniques. This 12-week program covers advanced web hacking, vulnerability research, exploitation, lateral movement, privilege escalation, and professional reporting. This course is only for those who have completed the Beginners bootcamp.",
    image: "https://cdn.publicsectornetwork.com/insight/feature_images/Untitled_design_5_0757f4.png.1920x1080_q85_autocrop_crop-smart.png",
    icon: Shield,
    color: "from-indigo-500 to-indigo-600",
    difficulty: 'hard',
    link: "/course/ethical-hacking-advanced",
    weekly_breakdown: [
      { week: 1, title: "Module 7: Enumeration and Service Footprinting - Part 1", topics: ["Using Nmap for Enumeration", "Service Enumeration & Exploitation (SMB, FTP, NFS)"] },
      { week: 2, title: "Module 7: Service Enumeration Continued", topics: ["SMNP", "SMTP", "RDP Enumeration", "Service Exploitation Techniques"] },
      { week: 3, title: "Module 8: Web Hacking (Advanced) - Part 1", topics: ["XML External Entity (XXE) Attacks", "File Upload Vulnerabilities", "IDOR"] },
      { week: 4, title: "Module 8: Web Hacking (Advanced) - Part 2", topics: ["Access Control Weaknesses", "JWT Attacks", "API Enumeration & Attacks"] },
      { week: 5, title: "Module 9: Vulnerability Research", topics: ["Researching Potential Vulnerabilities", "Finding Relevant CVEs for Real-world Scenarios", "Vulnerability Assessment Techniques"] },
      { week: 6, title: "Module 10: Vulnerability Assessment Tools", topics: ["Nessus Overview", "OpenVAS Overview", "Scanning Techniques", "Report Generation"] },
      { week: 7, title: "Module 11: Exploitation & Lateral Movement - Part 1", topics: ["Shell Types (Reverse Shell & Bind Shell)", "Metasploit Framework Basics"] },
      { week: 8, title: "Module 11: Lateral Movement Techniques", topics: ["Port Forwarding Techniques (SSH, Chisel, etc)", "File Transfer Methods", "Credentials Harvesting in Windows/Linux"] },
      { week: 9, title: "Module 12: Privilege Escalation - Part 1", topics: ["Windows Privilege Escalation Techniques", "Enumeration Tools", "Exploit Development"] },
      { week: 10, title: "Module 12: Privilege Escalation - Part 2", topics: ["Linux Privilege Escalation Techniques", "Kernel Exploits", "Sudo Misconfigurations"] },
      { week: 11, title: "Module 13: Reporting and Documentation - Part 1", topics: ["Penetration Testing Reports", "Report Structure and Components", "Executive Summaries"] },
      { week: 12, title: "Module 13: Bug Bounty and Professional Reporting", topics: ["Bug Bounty Reports", "Tools for Reporting", "Responsible Disclosure", "Case Studies and Best Practices"] }
    ]
  },
  {
    id: 'python-for-hackers',
    title: "Python for Hackers",
    duration: "17 Weeks",
    cost: "रु2,499",
    originalPrice: "रु5,000",
    discountPercentage: 50,
    description: "Master Python programming with an attacker's mindset. This comprehensive 17-week course covers Python fundamentals through advanced automation and scripting techniques essential for ethical hacking, penetration testing, and security research. Learn to build your own security tools and automate offensive tasks.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Terminal,
    color: "from-red-500 to-red-600",
    difficulty: 'medium',
    link: "/course/python-for-hackers",
    enrollmentLink: "",
    syllabusLink: "https://raw.githubusercontent.com/NCA-Nepal/Static-Assets/refs/heads/main/PDF/Python%20for%20Hackers%20Syllabus.pdf",
    weekly_breakdown: [
      { week: 1, title: "Introduction to Python", topics: ["What is Python?", "Why Python is popular", "Python use cases (Web, Automation, Security, Data, AI)", "Installing Python (Windows / Linux / macOS)", "Python versions & virtual environments", "Running Python scripts", "Python REPL"] },
      { week: 2, title: "Python Basics", topics: ["Python syntax & indentation", "Comments", "Keywords & identifiers", "Variables & assignment", "Dynamic typing", "Input & output (input(), print())"] },
      { week: 3, title: "Data Types & Type Handling", topics: ["Numeric types (int, float, complex)", "Boolean (bool)", "Strings", "NoneType", "Type conversion (casting)", "type() and isinstance()"] },
      { week: 4, title: "Operators", topics: ["Arithmetic operators", "Comparison operators", "Logical operators", "Assignment operators", "Bitwise operators", "Operator precedence"] },
      { week: 5, title: "Control Flow", topics: ["Conditional Statements (if, elif, else)", "Nested conditions", "Ternary expressions", "for loop", "while loop", "break, continue, pass", "Loop else"] },
      { week: 6, title: "Strings (Deep Dive)", topics: ["Indexing & slicing", "String methods", "String formatting (f-strings, format())", "Escape characters", "Multiline strings", "String immutability"] },
      { week: 7, title: "Python Collections - Lists & Tuples", topics: ["Creating lists", "Indexing & slicing", "List methods", "List comprehension", "Nested lists", "Tuple basics", "Packing & unpacking", "Tuple vs list"] },
      { week: 8, title: "Python Collections - Sets & Dictionaries", topics: ["Set creation", "Set methods", "Union, intersection, difference", "Key-value pairs", "Dictionary methods", "Iterating dictionaries", "Nested dictionaries", "Dictionary comprehension"] },
      { week: 9, title: "Functions", topics: ["Defining functions", "Parameters & arguments", "Default & keyword arguments", "*args and **kwargs", "Return values", "Docstrings", "Lambda functions"] },
      { week: 10, title: "Modules & Packages", topics: ["Importing modules", "Built-in modules", "Creating custom modules", "Python packages", "__name__ == '__main__'"] },
      { week: 11, title: "File Handling & Error Handling", topics: ["Reading files", "Writing files", "File modes", "Working with text & binary files", "Context managers (with)", "CSV & JSON basics", "Syntax vs runtime errors", "try, except, else, finally", "Custom exceptions", "Debugging techniques", "Logging basics"] },
      { week: 12, title: "Object-Oriented Programming (OOP)", topics: ["What is OOP?", "Classes & objects", "__init__ constructor", "Instance variables & methods", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Class variables", "Static methods & class methods", "Magic methods (__str__, __repr__, __len__)", "Composition vs inheritance"] },
      { week: 13, title: "Python Standard Library (Intermediate)", topics: ["os & sys", "datetime", "math & random", "re (regular expressions)", "argparse", "subprocess"] },
      { week: 14, title: "Virtual Environments & Dependency Management", topics: ["venv", "pip", "requirements.txt", "Version pinning", "Basic project structure"] },
      { week: 15, title: "HTTP & Automation", topics: ["Understanding HTTP basics", "Using requests", "GET & POST requests", "Headers, cookies & sessions", "Handling JSON APIs", "Authentication (tokens, basic auth)", "Error handling in HTTP requests"] },
      { week: 16, title: "Automation & Scripting", topics: ["Automating file operations", "Web scraping basics (requests, BeautifulSoup)", "Automating form submissions", "Scheduled scripts (cron / task scheduler)", "CLI tools using Python", "Writing reusable automation scripts"] },
      { week: 17, title: "Capstone Projects", topics: ["Number guessing game", "Simple calculator", "To-do list (CLI)", "Password strength checker", "File organizer automation", "Contact management system (OOP-based)", "Log file analyzer", "CLI-based quiz application", "API data fetcher using requests", "Website uptime monitoring script", "Automated login & form submission", "Web scraper with data export (CSV/JSON)", "REST API client with authentication", "Final Capstone: Automation tool / Mini REST API client / Object-oriented task manager / Web data aggregation & reporting tool"] }
    ]
  },
  {
    id: 'web-dev-mern',
    title: "Web Development - MERN Stack",
    duration: "12 Weeks",
    cost: "",
    description: "Learn modern secure web development with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB with security best practices.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    icon: Code,
    color: "from-emerald-500 to-emerald-600",
    difficulty: 'easy',
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
    id: 'devops',
    title: "DevOps & Cloud Security",
    duration: "16 Weeks",
    cost: "",
    description: "Learn CI/CD, containerization with Docker, Kubernetes, cloud platforms, infrastructure automation, and security practices.",
    image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Terminal,
    color: "from-yellow-500 to-yellow-600",
    difficulty: 'medium',
    weekly_breakdown: [
      { week: 1, title: "DevOps Fundamentals", topics: ["DevOps Principles", "CI/CD Concepts", "Version Control", "Git Workflow"] },
      { week: 2, title: "Docker & Containerization", topics: ["Docker Basics", "Images & Containers", "Docker Compose", "Registry"] },
      { week: 3, title: "Kubernetes Orchestration", topics: ["K8s Basics", "Pods & Deployments", "Services", "ConfigMaps"] },
      { week: 4, title: "Cloud Security & Infrastructure", topics: ["AWS/Azure/GCP", "Infrastructure as Code", "Monitoring", "Security"] }
    ]
  },
  {
    id: 'network-security',
    title: "Network Security & Firewalls",
    duration: "14 Weeks",
    cost: "",
    description: "Master network security concepts, firewall configuration, intrusion detection, and network defense mechanisms for modern enterprises.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
    difficulty: 'hard',
    weekly_breakdown: [
      { week: 1, title: "Network Security Fundamentals", topics: ["Network Architecture", "Security Zones", "DMZ", "Network Segmentation"] },
      { week: 2, title: "Firewall Technologies", topics: ["Packet Filtering", "Stateful Firewalls", "Application-layer Firewalls", "WAF"] },
      { week: 3, title: "IDS/IPS Systems", topics: ["Intrusion Detection", "Intrusion Prevention", "Snort", "Suricata"] },
      { week: 4, title: "VPN & Encryption", topics: ["VPN Technologies", "IPSec", "SSL/TLS", "Tunnel Protocols"] }
    ]
  },
  {
    id: 'incident-response',
    title: "Incident Response & Forensics",
    duration: "12 Weeks",
    cost: "",
    description: "Learn digital forensics, incident response procedures, evidence collection, and investigation techniques for cyber incidents.",
    image: "https://images.unsplash.com/photo-1637073849667-91120a924221?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
    difficulty: 'insane',
    weekly_breakdown: [
      { week: 1, title: "Incident Response Planning", topics: ["IR Procedures", "NIST Framework", "Team Structure", "Documentation"] },
      { week: 2, title: "Forensic Analysis", topics: ["Evidence Collection", "Chain of Custody", "File Systems", "Memory Forensics"] },
      { week: 3, title: "Malware Analysis", topics: ["Static Analysis", "Dynamic Analysis", "Behavioral Analysis", "Reverse Engineering"] },
      { week: 4, title: "Investigation & Reporting", topics: ["Timeline Creation", "Report Writing", "Legal Implications", "Lessons Learned"] }
    ]
  },
];
