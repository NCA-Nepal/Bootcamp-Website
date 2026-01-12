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
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b59e?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    link: "/course/ethical-hacking",
    weekly_breakdown: [
      { week: 1, title: "Module 1: Linux", topics: ["Installing Kali Linux", "Linux Structure", "Linux Terminal", "Basic Commands", "File Permissions", "Process Management"] },
      { week: 2, title: "Module 2: Networking", topics: ["OSI Model", "TCP/IP Model", "IP Addressing & Subnetting", "Ports & Protocols", "DNS", "VPN & Proxies"] },
      { week: 3, title: "Module 3: Cryptography Basics", topics: ["Encoding/Decoding", "Symmetric Encryption", "Asymmetric Encryption", "Hashing Algorithms", "Digital Signatures"] },
      { week: 4, title: "Module 4: Information Security & Penetration Testing", topics: ["Security Domains", "Bug Bounty Programs", "ISO 27001, PCI DSS, HIPAA", "Legal Considerations", "PT Process"] },
      { week: 5, title: "Module 5: Web Enumeration & Footprinting", topics: ["OSINT & Google Dorking", "Web Fuzzing", "Banner Grabbing", "Whois/Dig", "Subdomain Enumeration"] },
      { week: 6, title: "Module 6: Web Hacking (Basics)", topics: ["Burpsuite", "SQL Injection", "XSS", "File Inclusion", "Command Injection", "CSRF"] },
      { week: 7, title: "Module 7: Enumeration & Service Footprinting", topics: ["Nmap Enumeration", "SMB Enumeration", "FTP/NFS/SMTP", "RDP Enumeration"] },
      { week: 8, title: "Module 8: Web Hacking (Advanced)", topics: ["XXE Attacks", "File Upload Vulnerabilities", "IDOR", "Access Control", "JWT Attacks", "API Attacks"] },
      { week: 9, title: "Module 9: Vulnerability Research", topics: ["CVE Research", "Exploit Discovery", "Vulnerability Assessment", "Real-world Scenarios"] },
      { week: 10, title: "Module 10: Vulnerability Assessment Tools", topics: ["Nessus", "OpenVAS", "Scanning Techniques", "Report Generation"] },
      { week: 11, title: "Module 11: Exploitation & Lateral Movement", topics: ["Reverse Shells", "Metasploit Framework", "Port Forwarding", "File Transfer", "Credential Harvesting"] },
      { week: 12, title: "Module 12-13: Privilege Escalation & Reporting", topics: ["Windows Privilege Escalation", "Linux Privilege Escalation", "PT Reports", "Bug Bounty Reports"] }
    ]
  },
  {
    id: 'red-hat-admin',
    title: "Red Hat System Administration",
    duration: "16 Weeks",
    cost: "रु3,500",
    description: "Learn enterprise Linux system administration with Red Hat Enterprise Linux, covering configuration, management, and troubleshooting for security professionals.",
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
    title: "Web Development - MERN Stack",
    duration: "12 Weeks",
    cost: "रु2,500",
    description: "Learn modern secure web development with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB with security best practices.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
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
    id: 'devops',
    title: "DevOps & Cloud Security",
    duration: "16 Weeks",
    cost: "रु4,200",
    description: "Learn CI/CD, containerization with Docker, Kubernetes, cloud platforms, infrastructure automation, and security practices.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4ee868e4e?auto=format&fit=crop&w=800&q=80",
    icon: Terminal,
    color: "from-yellow-500 to-yellow-600",
    link: "/course/devops",
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
    cost: "रु3,800",
    description: "Master network security concepts, firewall configuration, intrusion detection, and network defense mechanisms for modern enterprises.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
    link: "/course/network-security",
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
    cost: "रु3,200",
    description: "Learn digital forensics, incident response procedures, evidence collection, and investigation techniques for cyber incidents.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?auto=format&fit=crop&w=800&q=80",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
    link: "/course/incident-response",
    weekly_breakdown: [
      { week: 1, title: "Incident Response Planning", topics: ["IR Procedures", "NIST Framework", "Team Structure", "Documentation"] },
      { week: 2, title: "Forensic Analysis", topics: ["Evidence Collection", "Chain of Custody", "File Systems", "Memory Forensics"] },
      { week: 3, title: "Malware Analysis", topics: ["Static Analysis", "Dynamic Analysis", "Behavioral Analysis", "Reverse Engineering"] },
      { week: 4, title: "Investigation & Reporting", topics: ["Timeline Creation", "Report Writing", "Legal Implications", "Lessons Learned"] }
    ]
  }
];
