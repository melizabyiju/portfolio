export const portfolioData = {
  personal: {
    name: "Meliza Mariya Byiju",
    preferredName: "Meliza Byiju",
    monogram: "MB",
    title: "Computer Science Undergraduate | SE4AI Research Intern",
    tagline: "Computer Science undergraduate at Amal Jyothi College of Engineering (2024 – 2028) with a 10.0 CGPA and research experience in SE4AI at NIT Calicut. Building ML systems in Python and TensorFlow to solve social and environmental problems.",
    cgpa: "10.0 / 10.0",
    rank: "Rank 1 for 4 consecutive semesters",
    institution: "Amal Jyothi College of Engineering, Kottayam, Kerala",
    degree: "B.Tech in Computer Science and Engineering (2024 – 2028)",
    researchLab: "Software Engineering for AI (SE4AI) Lab, NIT Calicut",
    location: "Wayanad, Kerala, India",
    email: "melizabyiju@gmail.com",
    github: "https://github.com/melizabyiju",
    linkedin: "https://linkedin.com/in/melizabyiju",
    statusText: "AVAILABLE FOR RESEARCH & AI ROLES",
    availableForHire: true
  },

  stats: [
    { label: "B.Tech CGPA", value: "10.0", detail: "Rank 1 for 4 Consecutive Semesters", highlight: true },
    { label: "SE4AI Requirements", value: "2,500+", detail: "Classified across 5 sustainability dimensions" },
    { label: "Startup Grant Track", value: "Rs. 5 Lakh", detail: "KAU RAISE 2026 Stage 2 Finalist", highlight: true },
    { label: "Higher Secondary", value: "98.9%", detail: "Sacred Heart HSS, Dwaraka (PCMB)" }
  ],

  education: [
    {
      institution: "Amal Jyothi College of Engineering",
      location: "Kottayam, Kerala",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2024 — 2028",
      highlights: [
        "CGPA: 10.0 / 10.0",
        "Rank 1 for 4 consecutive semesters"
      ]
    },
    {
      institution: "Sacred Heart HSS, Dwaraka",
      location: "Wayanad, Kerala",
      degree: "Higher Secondary Education (Science – PCMB)",
      period: "2022 — 2024",
      highlights: [
        "Percentage: 98.9%"
      ]
    }
  ],

  technicalSkills: {
    languages: ["C", "Java", "Python", "SQL", "JavaScript", "Node.js"],
    backendAndTools: ["Flask", "Git", "GitHub", "Cloudflare", "Figma", "MS Office", "TensorFlow", "Hugging Face Transformers", "DeBERTa-v3"],
    coreCS: ["Data Structures & Algorithms", "Graph Theory", "Probability & Statistics", "Linear Algebra"],
    databases: ["SQL", "MySQL", "NoSQL (conceptual)"]
  },

  research: {
    role: "Research Intern – SE4AI Project",
    period: "May 2026 — Present",
    institution: "National Institute of Technology Calicut (NIT Calicut)",
    points: [
      "Conducting research on Software Engineering for AI (SE4AI), focusing on sustainability-aware requirements engineering – classifying 2,500+ software requirements across five sustainability dimensions (Environmental, Economic, Social, Technical, Individual).",
      "Fine-tuned DeBERTa-v3 for multi-label text classification using Hugging Face Transformers and Python, achieving structured classification of large-scale requirements datasets with measurable label accuracy.",
      "Analyzed and detected code smells in AI-adjacent software systems to assess maintainability and quality, applying both static analysis techniques and AI-assisted tooling."
    ]
  },

  projects: [
    {
      id: "kayora",
      title: "KAYORA | AI-Assisted Aquatic Biomass Recovery",
      period: "2025 — Present",
      category: "AI & Sustainability",
      points: [
        "Worked on an AI-based approach to identify and recover aquatic biomass, with a focus on environmental sustainability and aquatic resource management.",
        "Selected for the second stage of Kerala Agricultural University’s RAISE 2026 Student Startup Programme (funding support up to Rs. 5 lakh)."
      ],
      technologies: ["Python", "Computer Vision", "PyTorch", "Environmental Tech"]
    },
    {
      id: "refind",
      title: "ReFind | AI-Powered Semantic Search & Information Retrieval",
      period: "2026",
      category: "Information Retrieval & NLP",
      points: [
        "Developed an AI-based retrieval system using EmbeddingGemma 2, Jina reranking, and Gemini 2.5 Flash Lite to improve search relevance and generate contextual explanations.",
        "Presented the idea at the AI Bhoomi Startup Weekend, a 20-hour startup sprint."
      ],
      technologies: ["EmbeddingGemma 2", "Jina Reranker", "Gemini 2.5 Flash Lite", "Python"]
    },
    {
      id: "riverclean",
      title: "RiverClean | ML Engineer – AI River Pollution Detection System",
      period: "2025 — Present",
      category: "Computer Vision & Environmental ML",
      points: [
        "Built a multi-class image classification pipeline using TensorFlow CNNs to detect river pollution severity from environmental imagery, training on a labeled visual dataset with multi-class output.",
        "Designed a Python/Flask inference API to serve model predictions in real time, incorporating NumPy-based preprocessing and feature normalization end-to-end.",
        "Achieved a national Round 1 shortlist in the AICTE Production Fellowship (APF), validating real-world impact and technical merit of the ML solution against teams nationwide."
      ],
      technologies: ["TensorFlow CNN", "Python", "Flask", "NumPy"]
    },
    {
      id: "restyle",
      title: "ReStyle | ML Developer – Sustainable Fashion AI Platform",
      period: "2025 — Present",
      category: "ML Backend & Data Pipelines",
      points: [
        "Engineered a Python/Flask REST backend for an AI-driven clothing redesign engine; designed the data pipeline to preprocess user-uploaded images and route them through an ML inference module for category-based recommendation generation.",
        "Applied NumPy-based image transformations for input standardization and integrated model outputs into a structured recommendation response layer."
      ],
      technologies: ["Python", "Flask", "NumPy", "REST API"]
    },
    {
      id: "internmatch",
      title: "InternMatch | Algorithm Developer – Skill-Based Recommendation System",
      period: "2025 — Present",
      category: "Algorithms & Automation",
      points: [
        "Designed a skill-vector matching algorithm in SQL with Oracle Database triggers for automated deadline validation; integrated BeautifulSoup and APScheduler for real-time opportunity scraping and personalized student alerts.",
        "Built a 3-stage candidate tracking pipeline (applied → interview → offer) reducing manual internship search effort through automated matching logic."
      ],
      technologies: ["SQL", "Oracle Database", "Python", "BeautifulSoup", "APScheduler"]
    }
  ],

  leadership: [
    {
      role: "Campus Organizer",
      org: "GDG on Campus",
      institution: "Amal Jyothi College of Engineering",
      period: "2026 — Present",
      points: [
        "Help organize campus events and promote Google developer programs among students.",
        "Support event planning, student outreach, and community activities."
      ]
    },
    {
      role: "Vice Chair",
      org: "AI Club",
      institution: "Amal Jyothi College of Engineering",
      period: "2025 — 2026",
      points: [
        "Spearheaded ML/AI workshop programming for AITHRA (national-level technical fest), curating technical content on core ML concepts and coordinating 5+ events to increase departmental student engagement.",
        "Collaborated with the core committee to plan inter-college competitions and knowledge-sharing sessions on applied AI topics."
      ]
    },
    {
      role: "Joint Secretary",
      org: "Coding Club",
      institution: "Amal Jyothi College of Engineering",
      period: "2026 — Present",
      points: [
        "Serve as Joint Secretary of the college Coding Club, supporting the core team in planning and running coding events and activities.",
        "Coordinate with club members and organizers to encourage student participation in programming activities."
      ]
    },
    {
      role: "Women’s Chess Team Member",
      org: "AJCE Women’s Chess Team",
      institution: "Amal Jyothi College of Engineering",
      period: "2026",
      points: [
        "Selected as a member of the AJCE Women’s Chess Team.",
        "Secured Second Runner-Up in the C-Zone Chess Championship as part of the college women’s team."
      ]
    },
    {
      role: "Active Volunteer",
      org: "I²U",
      institution: "Amal Jyothi College of Engineering",
      period: "2025 — Present",
      points: [
        "Assisted in organizing and promoting I²U programs across campus to encourage student participation in innovation-driven activities.",
        "Supported event coordination, outreach, and participant engagement."
      ]
    },
    {
      role: "Volunteer, Judge Management",
      org: "NASA Space Apps Hackathon",
      institution: "Amal Jyothi College of Engineering",
      period: "2025",
      points: [
        "Managed judge onboarding, evaluation scheduling, and cross-team communications for a globally recognized hackathon."
      ]
    },
    {
      role: "Volunteer",
      org: "IEDC Startup Summit",
      institution: "Amal Jyothi College of Engineering",
      period: "2026",
      points: [
        "Served on the Discipline Committee, helping maintain order and coordinate attendee movement during the event."
      ]
    }
  ],

  achievements: [
    {
      title: "e-Yantra Robotics Competition, IIT Bombay",
      period: "2026 (ongoing)",
      detail: "Team entry in both the Khojo Drone and Pacbot themes."
    },
    {
      title: "RAISE 2026 Student Startup Programme",
      period: "2026",
      detail: "Recognized for the AI-assisted aquatic biomass recovery project; selected for the second stage of Kerala Agricultural University’s Student Startup Programme (funding support up to Rs. 5 lakh)."
    },
    {
      title: "AICTE Production Fellowship (APF) – National Round 1 Shortlist",
      period: "2025",
      detail: "RiverClean selected among top AI projects nationally for real-world environmental impact."
    },
    {
      title: "Smart India Hackathon (SIH)",
      period: "2025 & 2026",
      detail: "Developed and presented technical solutions at India’s largest national government innovation challenge (1M+ registered participants)."
    },
    {
      title: "AI Bhoomi Startup Weekend",
      period: "2026",
      detail: "Took part in a 20-hour startup sprint and presented ReFind, an AI-powered semantic search system."
    },
    {
      title: "Idea from Industry Winner",
      period: "2024 & 2025",
      detail: "Won recognition in consecutive years for pitching technically feasible, industry-oriented project proposals."
    },
    {
      title: "C-Zone Chess Championship",
      period: "2026",
      detail: "Second Runner-Up as a member of the AJCE Women’s Chess Team."
    },
    {
      title: "NASA Space Apps Challenge (International)",
      period: "2024",
      detail: "Developed a Python-based ExoSky visualizer computing stellar positions and brightness distributions from exoplanet coordinate data."
    },
    {
      title: "HackFest",
      period: "2025",
      detail: "Advanced to state-level round, demonstrating competitive problem-solving under time constraints."
    },
    {
      title: "Tink-Her-Hack 4.0",
      period: "2025",
      detail: "Independently handled end-to-end development for a women-centric national innovation challenge."
    }
  ]
};
