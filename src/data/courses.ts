import { LucideIcon, Shield, Terminal, Code, TrendingUp } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  duration: string;
  cost: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  link?: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'insane';
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
    title: "Ethical Hacking Bootcamp for Beginners",
    duration: "12 Weeks",
    cost: "रु2,500",
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
    title: "Advanced Ethical Hacking",
    duration: "12 Weeks",
    cost: "रु3,000",
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
    id: 'red-hat-admin',
    title: "Red Hat System Administration",
    duration: "16 Weeks",
    cost: "",
    description: "Learn enterprise Linux system administration with Red Hat Enterprise Linux, covering configuration, management, and troubleshooting for security professionals.",
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: Terminal,
    color: "from-red-500 to-red-600",
    difficulty: 'medium',
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
  }
];
