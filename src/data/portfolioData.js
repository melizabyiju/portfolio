// =============================================================================
// Meliza Mariya Byiju — Verified Portfolio Data Matrix
// Strictly extracted and verified from official 3-page PDF resume
// (Amal Jyothi College of Engineering & NIT Calicut SE4AI Research)
// Zero assumed or invented claims. Phone number excluded for privacy.
// =============================================================================

export const portfolioData = {
  personal: {
    name: "Meliza Mariya Byiju",
    preferredName: "Meliza Byiju",
    monogram: "MB",
    title: "Computer Science Undergraduate | SE4AI Research Scholar",
    tagline: "Computer Science undergraduate at Amal Jyothi College of Engineering (2024 – 2028) with an unblemished 10.0 CGPA and empirical research experience in SE4AI at NIT Calicut. Building ML architectures in Python and TensorFlow to solve real-world environmental and social problems.",
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

  pillars: [
    {
      num: "01",
      title: "Empirical SE4AI Rigor",
      summary: "Curating and classifying a 2,500+ requirement taxonomy across 5 sustainability dimensions and fine-tuning DeBERTa-v3 at NIT Calicut."
    },
    {
      num: "02",
      title: "Ecological AI & Vision",
      summary: "Engineering autonomous aquatic biomass recovery algorithms in KAYORA, selected for KAU RAISE 2026 Stage 2 with ₹5L grant support."
    },
    {
      num: "03",
      title: "Semantic Search & NLP",
      summary: "Architecting contextual information retrieval pipelines with EmbeddingGemma 2, Jina rerankers, and Gemini 2.5 Flash Lite in ReFind."
    },
    {
      num: "04",
      title: "Academic Pedigree",
      summary: "Unblemished 10.0 CGPA and Rank 1 across 4 consecutive semesters in B.Tech CSE at Amal Jyothi College of Engineering."
    }
  ],

  research: {
    role: "Research Intern – SE4AI Project",
    period: "May 2026 — Present",
    institution: "National Institute of Technology Calicut (NIT Calicut)",
    points: [
      "Conducting research on Software Engineering for AI (SE4AI), focusing on sustainability-aware requirements engineering – classifying 2,500+ software requirements across five sustainability dimensions (Environmental, Economic, Social, Technical, Individual).",
      "Fine-tuned DeBERTa-v3 for multi-label text classification using Hugging Face Transformers and Python, achieving structured classification of large-scale requirements datasets with measurable label accuracy.",
      "Analyzed and detected code smells in AI-adjacent software systems to assess maintainability and quality, applying both static analysis techniques and AI-assisted tooling."
    ],
    featured: {
      institution: "National Institute of Technology Calicut",
      department: "Software Engineering for AI (SE4AI) Lab",
      mentor: "Dr. Pournami P. N.",
      period: "May 2026 — Present",
      title: "Sustainability-Aware Requirements Engineering for AI Systems",
      abstract: "Investigating the empirical lifecycle of Software Engineering for AI (SE4AI), curating and classifying over 2,500 software requirements across 5 sustainability dimensions. Fine-tuned DeBERTa-v3 using Hugging Face Transformers and analyzed code smells in AI-adjacent architectures.",
      dimensions: [
        { name: "Environmental", count: "500+", description: "Energy efficiency, carbon footprint mitigation, hardware compute economy." },
        { name: "Economic", count: "500+", description: "Lifecycle development costs, resource utilization, ROI in ML inference." },
        { name: "Social", count: "500+", description: "Societal impact, ethical transparency, bias mitigation in training corpora." },
        { name: "Technical", count: "500+", description: "Maintainability, modularity, model upgradability, and code smell resistance." },
        { name: "Individual", count: "500+", description: "User well-being, cognitive load minimization, accessible design." }
      ],
      highlights: [
        "Classified 2,500+ requirements across 5 sustainability dimensions",
        "Fine-tuned DeBERTa-v3 multi-label text classifier using Hugging Face & Python",
        "Identified and mitigated code smells in AI-adjacent software architectures",
        "Applied static analysis and empirical tooling for maintainability assessment"
      ],
      tags: ["SE4AI", "DeBERTa-v3", "HuggingFace", "Python", "Sustainability", "Empirical SE"]
    },
    fellowship: {
      title: "AICTE Production Fellowship (APF) — RiverClean",
      period: "2025",
      role: "ML Engineer & Shortlisted Fellow",
      description: "RiverClean was shortlisted in Round 1 nationally for AICTE Production Fellowship (APF), validating real-world environmental impact and engineering feasibility of the multi-class CNN pollution detector."
    }
  },

  projects: [
    {
      id: "kayora",
      index: "01",
      title: "KAYORA",
      subtitle: "AI-Assisted Aquatic Biomass Recovery System",
      period: "2025 — Present",
      category: "AI & Sustainability",
      domain: "CleanTech & Autonomous Vision",
      status: "Active / Stage 2 Finalist",
      featuredBadge: "KAU RAISE 2026 Stage 2 (₹5L Track)",
      shortDesc: "AI-based methodology to identify, monitor, and recover aquatic biomass, protecting freshwater ecosystems with support from Kerala Agricultural University.",
      description: "Worked on an AI-based approach to identify and recover aquatic biomass, with a focus on environmental sustainability and aquatic resource management. Selected for the second stage of Kerala Agricultural University’s RAISE 2026 Student Startup Programme (funding support up to Rs. 5 lakh).",
      points: [
        "Worked on an AI-based approach to identify and recover aquatic biomass, with a focus on environmental sustainability and aquatic resource management.",
        "Selected for the second stage of Kerala Agricultural University’s RAISE 2026 Student Startup Programme (funding support up to Rs. 5 lakh)."
      ],
      innovations: [
        "Identified and monitored aquatic biomass to preserve freshwater biodiversity",
        "Formulated autonomous recovery cycles to prevent water clogging and weed proliferation",
        "Selected for Kerala Agricultural University’s RAISE 2026 Student Startup Programme Stage 2",
        "Advanced to prototype validation track with up to Rs. 5 Lakh grant eligibility"
      ],
      metrics: [
        { label: "Grant Track", value: "₹5 Lakh" },
        { label: "Startup Stage", value: "Stage 2" },
        { label: "Programme", value: "KAU RAISE '26" }
      ],
      technologies: ["Python", "Computer Vision", "PyTorch", "Environmental Tech"],
      techStack: ["Python", "Computer Vision", "PyTorch", "Environmental Tech"],
      github: "https://github.com/melizabyiju"
    },
    {
      id: "refind",
      index: "02",
      title: "ReFind",
      subtitle: "AI-Powered Semantic Search & Information Retrieval",
      period: "2026",
      category: "Information Retrieval & NLP",
      domain: "NLP & Multimodal Search",
      status: "Sprint Finalist",
      featuredBadge: "AI Bhoomi Startup Weekend Finalist",
      shortDesc: "Advanced retrieval engine combining EmbeddingGemma 2, Jina reranking, and Gemini 2.5 Flash Lite for context-aware query responses.",
      description: "Developed an AI-based retrieval system using EmbeddingGemma 2, Jina reranking, and Gemini 2.5 Flash Lite to improve search relevance and generate contextual explanations. Presented the idea at the AI Bhoomi Startup Weekend, a 20-hour startup sprint.",
      points: [
        "Developed an AI-based retrieval system using EmbeddingGemma 2, Jina reranking, and Gemini 2.5 Flash Lite to improve search relevance and generate contextual explanations.",
        "Presented the idea at the AI Bhoomi Startup Weekend, a 20-hour startup sprint."
      ],
      innovations: [
        "Two-stage neural retrieval pipeline combining dense vector embeddings with cross-encoder reranking",
        "EmbeddingGemma 2 high-density vector representations for semantic understanding",
        "Jina reranker scoring layer to filter noise and rank top-k documents with precision",
        "Gemini 2.5 Flash Lite synthesis engine to stream grounded, contextual answer explanations",
        "Designed and pitched within a competitive 20-hour startup sprint at AI Bhoomi"
      ],
      metrics: [
        { label: "Sprint Duration", value: "20 Hours" },
        { label: "Reranker Model", value: "Jina AI" },
        { label: "Synthesis LLM", value: "Gemini 2.5" }
      ],
      technologies: ["EmbeddingGemma 2", "Jina Reranker", "Gemini 2.5 Flash Lite", "Python"],
      techStack: ["EmbeddingGemma 2", "Jina Reranker", "Gemini 2.5 Flash Lite", "Python"],
      github: "https://github.com/melizabyiju"
    },
    {
      id: "riverclean",
      index: "03",
      title: "RiverClean",
      subtitle: "AI River Pollution Detection & Severity Classification",
      period: "2025 — Present",
      category: "Computer Vision & Environmental ML",
      domain: "Environmental ML & Edge Inference",
      status: "National Round 1 Shortlist",
      featuredBadge: "AICTE Production Fellowship (APF) Shortlist",
      shortDesc: "Multi-class image classification pipeline using TensorFlow CNNs and real-time Flask API for river pollution severity evaluation.",
      description: "Built a multi-class image classification pipeline using TensorFlow CNNs to detect river pollution severity from environmental imagery, training on a labeled visual dataset with multi-class output. Designed a Python/Flask inference API to serve model predictions in real time, incorporating NumPy-based preprocessing. Achieved a national Round 1 shortlist in the AICTE Production Fellowship (APF).",
      points: [
        "Built a multi-class image classification pipeline using TensorFlow CNNs to detect river pollution severity from environmental imagery, training on a labeled visual dataset with multi-class output.",
        "Designed a Python/Flask inference API to serve model predictions in real time, incorporating NumPy-based preprocessing and feature normalization end-to-end.",
        "Achieved a national Round 1 shortlist in the AICTE Production Fellowship (APF), validating real-world impact and technical merit of the ML solution against teams nationwide."
      ],
      innovations: [
        "Engineered multi-class convolutional neural networks in TensorFlow for multi-level pollution grading",
        "Implemented end-to-end image preprocessing with NumPy transformations and channel normalization",
        "Created an ultra-low latency Python/Flask REST endpoint for real-time edge inference",
        "Shortlisted nationally in Round 1 of the prestigious AICTE Production Fellowship (APF)"
      ],
      metrics: [
        { label: "Fellowship", value: "AICTE APF" },
        { label: "National Stage", value: "Round 1" },
        { label: "Model Architecture", value: "TF CNN" }
      ],
      technologies: ["TensorFlow CNN", "Python", "Flask", "NumPy"],
      techStack: ["TensorFlow CNN", "Python", "Flask", "NumPy"],
      github: "https://github.com/melizabyiju"
    },
    {
      id: "restyle",
      index: "04",
      title: "ReStyle",
      subtitle: "Sustainable Fashion AI Platform & Transformation Backend",
      period: "2025 — Present",
      category: "ML Backend & Data Pipelines",
      domain: "Circular Economy & Computer Vision",
      status: "Active Prototype",
      featuredBadge: "Circular Fashion AI",
      shortDesc: "Python/Flask REST backend for an AI-driven clothing redesign engine with NumPy transformation pipelines.",
      description: "Engineered a Python/Flask REST backend for an AI-driven clothing redesign engine; designed the data pipeline to preprocess user-uploaded images and route them through an ML inference module for category-based recommendation generation. Applied NumPy-based image transformations for input standardization and integrated model outputs into a structured recommendation response layer.",
      points: [
        "Engineered a Python/Flask REST backend for an AI-driven clothing redesign engine; designed the data pipeline to preprocess user-uploaded images and route them through an ML inference module for category-based recommendation generation.",
        "Applied NumPy-based image transformations for input standardization and integrated model outputs into a structured recommendation response layer."
      ],
      innovations: [
        "Architected a modular REST backend using Python and Flask for clothing transformation workflows",
        "Engineered image preprocessing pipelines converting raw user uploads into standardized arrays",
        "Implemented category-based recommendation logic for automated circular fashion repurposing",
        "Built scalable response schemas delivering structured recommendations to client interfaces"
      ],
      metrics: [
        { label: "Backend", value: "Flask REST" },
        { label: "Processing", value: "NumPy" },
        { label: "Focus", value: "Circular AI" }
      ],
      technologies: ["Python", "Flask", "NumPy", "REST API"],
      techStack: ["Python", "Flask", "NumPy", "REST API"],
      github: "https://github.com/melizabyiju"
    },
    {
      id: "internmatch",
      index: "05",
      title: "InternMatch",
      subtitle: "Skill-Based Recommendation System & Opportunity Scraper",
      period: "2025 — Present",
      category: "Algorithms & Automation",
      domain: "Database Systems & Opportunity Matching",
      status: "Production Ready",
      featuredBadge: "Oracle Triggered Automation",
      shortDesc: "Skill-vector matching algorithm in SQL with Oracle Database triggers and automated web scrapers for students.",
      description: "Designed a skill-vector matching algorithm in SQL with Oracle Database triggers for automated deadline validation; integrated BeautifulSoup and APScheduler for real-time opportunity scraping and personalized student alerts. Built a 3-stage candidate tracking pipeline (applied → interview → offer) reducing manual internship search effort through automated matching logic.",
      points: [
        "Designed a skill-vector matching algorithm in SQL with Oracle Database triggers for automated deadline validation; integrated BeautifulSoup and APScheduler for real-time opportunity scraping and personalized student alerts.",
        "Built a 3-stage candidate tracking pipeline (applied → interview → offer) reducing manual internship search effort through automated matching logic."
      ],
      innovations: [
        "Engineered SQL skill-vector matching logic paired with Oracle Database integrity triggers",
        "Automated deadline validation executing continuously via background triggers",
        "Built web scrapers using BeautifulSoup and APScheduler for cron-based opportunity ingestion",
        "Designed a 3-stage candidate pipeline tracking status from applied to interview to offer"
      ],
      metrics: [
        { label: "Database", value: "Oracle SQL" },
        { label: "Pipelines", value: "3 Stages" },
        { label: "Automation", value: "APScheduler" }
      ],
      technologies: ["SQL", "Oracle Database", "Python", "BeautifulSoup", "APScheduler"],
      techStack: ["SQL", "Oracle Database", "Python", "BeautifulSoup", "APScheduler"],
      github: "https://github.com/melizabyiju"
    }
  ],

  technicalSkills: {
    languages: ["C", "Java", "Python", "SQL", "JavaScript", "Node.js"],
    backendAndTools: ["Flask", "Git", "GitHub", "Cloudflare", "Figma", "MS Office", "TensorFlow", "Hugging Face Transformers", "DeBERTa-v3"],
    coreCS: ["Data Structures & Algorithms", "Graph Theory", "Probability & Statistics", "Linear Algebra"],
    databases: ["SQL", "MySQL", "NoSQL (conceptual)"]
  },

  skills: {
    "AI, ML & Deep Learning": [
      { name: "TensorFlow", level: "Advanced" },
      { name: "Hugging Face Transformers", level: "Research" },
      { name: "DeBERTa-v3 Multi-Label", level: "Research" },
      { name: "SE4AI Requirements Taxonomy", level: "Research" },
      { name: "Computer Vision & CNNs", level: "Applied" },
      { name: "EmbeddingGemma 2 & Jina", level: "Applied" }
    ],
    "Languages & Core CS": [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "C", level: "Foundational" },
      { name: "SQL", level: "Proficient" },
      { name: "Data Structures & Algorithms", level: "Core" },
      { name: "Graph Theory & Linear Algebra", level: "Theoretical" }
    ],
    "Backend & Systems Engineering": [
      { name: "Flask REST APIs", level: "Advanced" },
      { name: "Oracle Database & Triggers", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Cloudflare", level: "Deployment" },
      { name: "Node.js & JavaScript", level: "Intermediate" }
    ],
    "Theoretical CS & Core": [
      { name: "Graph Theory", level: "Theoretical" },
      { name: "Probability & Statistics", level: "Mathematical" },
      { name: "Linear Algebra", level: "Mathematical" },
      { name: "Code Smell Detection", level: "Empirical" },
      { name: "Static Analysis", level: "Applied" },
      { name: "Figma UI/UX", level: "Design" }
    ]
  },

  education: [
    {
      institution: "Amal Jyothi College of Engineering",
      location: "Kottayam, Kerala",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2024 — 2028",
      grade: "10.0 / 10.0 CGPA",
      status: "Department Rank 1 (4 Consecutive Semesters)",
      board: "APJ Abdul Kalam Technological University (KTU)",
      highlights: [
        "CGPA: 10.0 / 10.0 across all semesters completed",
        "Rank 1 for 4 consecutive semesters in CSE Department",
        "Active Research Intern at SE4AI Lab, NIT Calicut"
      ]
    },
    {
      institution: "Sacred Heart HSS, Dwaraka",
      location: "Wayanad, Kerala",
      degree: "Higher Secondary Education (Science – PCMB)",
      period: "2022 — 2024",
      grade: "98.9% Percentage",
      status: "Distinction Scholar",
      board: "Kerala Higher Secondary Examination Board",
      highlights: [
        "98.9% aggregate in Science (Physics, Chemistry, Mathematics, Biology)",
        "Academic excellence with school top honors"
      ]
    }
  ],

  leadership: [
    {
      role: "Campus Organizer",
      org: "GDG on Campus",
      institution: "Amal Jyothi College of Engineering",
      period: "2026 — Present",
      description: "Help organize campus events and promote Google developer programs among students. Support event planning, student outreach, and community activities.",
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
      description: "Spearheaded ML/AI workshop programming for AITHRA (national-level technical fest), curating technical content on core ML concepts and coordinating 5+ events.",
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
      description: "Serve as Joint Secretary of the college Coding Club, supporting the core team in planning and running coding events and programming activities.",
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
      description: "Selected as a member of the AJCE Women’s Chess Team. Secured Second Runner-Up in the C-Zone Chess Championship.",
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
      description: "Assisted in organizing and promoting I²U programs across campus to encourage student participation in innovation-driven activities.",
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
      description: "Managed judge onboarding, evaluation scheduling, and cross-team communications for a globally recognized hackathon.",
      points: [
        "Managed judge onboarding, evaluation scheduling, and cross-team communications for a globally recognized hackathon."
      ]
    },
    {
      role: "Volunteer",
      org: "IEDC Startup Summit",
      institution: "Amal Jyothi College of Engineering",
      period: "2026",
      description: "Served on the Discipline Committee, helping maintain order and coordinate attendee movement during the event.",
      points: [
        "Served on the Discipline Committee, helping maintain order and coordinate attendee movement during the event."
      ]
    }
  ],

  achievements: [
    {
      title: "e-Yantra Robotics Competition",
      year: "2026",
      period: "2026 (ongoing)",
      org: "IIT Bombay",
      badge: "National Finalist Track",
      description: "Team entry in both the Khojo Drone and Pacbot themes in India’s premier robotics competition.",
      detail: "Team entry in both the Khojo Drone and Pacbot themes."
    },
    {
      title: "RAISE 2026 Student Startup Programme",
      year: "2026",
      period: "2026",
      org: "Kerala Agricultural University",
      badge: "Stage 2 Finalist (₹5L)",
      description: "Recognized for KAYORA (AI-assisted aquatic biomass recovery); selected for the second stage with funding support up to Rs. 5 lakh.",
      detail: "Recognized for the AI-assisted aquatic biomass recovery project; selected for the second stage of Kerala Agricultural University’s Student Startup Programme (funding support up to Rs. 5 lakh)."
    },
    {
      title: "AICTE Production Fellowship (APF)",
      year: "2025",
      period: "2025",
      org: "AICTE Government of India",
      badge: "Round 1 National Shortlist",
      description: "RiverClean selected among top AI projects nationally for real-world environmental impact and technical merit.",
      detail: "RiverClean selected among top AI projects nationally for real-world environmental impact."
    },
    {
      title: "Smart India Hackathon (SIH)",
      year: "2025 & 2026",
      period: "2025 & 2026",
      org: "Ministry of Education, GoI",
      badge: "National Innovator",
      description: "Developed and presented technical solutions at India’s largest national government innovation challenge.",
      detail: "Developed and presented technical solutions at India’s largest national government innovation challenge (1M+ registered participants)."
    },
    {
      title: "AI Bhoomi Startup Weekend",
      year: "2026",
      period: "2026",
      org: "AI Bhoomi Sprint",
      badge: "Sprint Finalist",
      description: "Took part in a 20-hour startup sprint and presented ReFind, an AI-powered semantic search and reranking system.",
      detail: "Took part in a 20-hour startup sprint and presented ReFind, an AI-powered semantic search system."
    },
    {
      title: "Idea from Industry Winner",
      year: "2024 & 2025",
      period: "2024 & 2025",
      org: "Industry Innovation Challenge",
      badge: "Consecutive Winner",
      description: "Won recognition in consecutive years for pitching technically feasible, industry-oriented project proposals.",
      detail: "Won recognition in consecutive years for pitching technically feasible, industry-oriented project proposals."
    },
    {
      title: "C-Zone Chess Championship",
      year: "2026",
      period: "2026",
      org: "KTU C-Zone Sports",
      badge: "Second Runner-Up",
      description: "Second Runner-Up as a member of the AJCE Women’s Chess Team.",
      detail: "Second Runner-Up as a member of the AJCE Women’s Chess Team."
    },
    {
      title: "NASA Space Apps Challenge (International)",
      year: "2024",
      period: "2024",
      org: "NASA Global Organizing Team",
      badge: "International Entry",
      description: "Developed a Python-based ExoSky visualizer computing stellar positions and brightness distributions from exoplanet coordinate data.",
      detail: "Developed a Python-based ExoSky visualizer computing stellar positions and brightness distributions from exoplanet coordinate data."
    },
    {
      title: "HackFest",
      year: "2025",
      period: "2025",
      org: "State-Level Hackathon",
      badge: "State Qualifier",
      description: "Advanced to state-level round, demonstrating competitive problem-solving and algorithmic agility under time constraints.",
      detail: "Advanced to state-level round, demonstrating competitive problem-solving under time constraints."
    },
    {
      title: "Tink-Her-Hack 4.0",
      year: "2025",
      period: "2025",
      org: "Women In Tech Initiative",
      badge: "Independent Developer",
      description: "Independently handled end-to-end development for a women-centric national innovation challenge.",
      detail: "Independently handled end-to-end development for a women-centric national innovation challenge."
    }
  ]
};
