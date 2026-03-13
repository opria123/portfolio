const experiences = [
  {
    title: "Software Engineer II",
    company_name: "CoverMyMeds",
    icon: "../assets/covermymeds.png",
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Architected distributed Elixir + Azure Service Bus system, improving sponsorship accuracy 50% and driving +$7.8M annual revenue.",
      "Led Node.js (Prisma + PostgreSQL) API handling 5K+ req/min and React (Remotion) web app serving 140K+ req/min.",
      "Built SOX-compliant Azure Functions infrastructure via Terraform + GitHub Actions; automated VPN, Storage & Service Bus provisioning.",
      "Partnered with product to design A/B experimentation APIs and rule engine processing 1M+ daily events for ML frameworks.",
      "Mentored 7 engineers on cloud architecture, React, and Kubernetes best practices.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Nationwide",
    icon: "../assets/nationwide.png",
    iconBg: "#E6DEDD",
    date: "Dec 2020 - May 2022",
    points: [
      "Designed and deployed GraphQL APIs (AWS AppSync) consolidating multiple data sources; reduced response times by 15%.",
      "Mentored 9 peers on cloud technologies, system design, and architectural patterns — increasing project throughput by 20%.",
      "Served as technical liaison with business partners to align architecture with measurable business outcomes.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Nationwide",
    icon: "../assets/nationwide.png",
    iconBg: "#383E56",
    date: "Mar 2020 - Dec 2020",
    points: [
      "Implemented S3-based document storage and fully automated CI/CD pipelines (Concourse, Jenkins) with monitoring and reporting.",
      "Delivered Spring Boot APIs handling 20K+ req/min and custom Node.js OAS validator improving API quality by 70%.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nationwide",
    icon: "../assets/nationwide.png",
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Mar 2020",
    points: [
      "Created internal Angular SPA for 200+ APIs, supporting developer access control.",
      "Stood up multiple applications in Kubernetes, containerized services using Docker.",
      "Built CI/CD pipelines utilizing Concourse and Jenkins; stood up Ruby automated test suite for APIs.",
    ],
  },
];

const about = {
  introduction: "Software Engineer with 7+ years of experience building scalable distributed systems, \
    APIs, and cloud infrastructure. Specialized in applied AI and ML, backed by an MSc in Computer Science \
    (AI & ML) and certifications in AWS ML Specialty, NVIDIA CUDA, and Azure AI. Known for delivering \
    performant, data-driven solutions and mentoring 16+ engineers across multiple teams.",
  cards: [
    {
      image: "../assets/web.png",
      title: "AI & Machine Learning",
      alt: "ai-ml",
      body: "PyTorch, TensorFlow, Transformers, Hugging Face, CUDA, \
        AWS SageMaker, Azure ML, scikit-learn"
    },
    {
      image: "../assets/backend.png",
      title: "Full-Stack Engineering",
      alt: "fullstack",
      body: "React, Node.js, Django, Spring Boot, Elixir, \
        Python, TypeScript, Rust, Java, C++"
    },
    {
      image: "../assets/conainter.png",
      title: "Cloud & Infrastructure",
      alt: "cloud",
      body: "AWS, Azure, Kubernetes, Docker, Terraform, \
        GitHub Actions, Jenkins, Helm, DataDog"
    }
  ]
}

const projects = {
  introduction: "Projects I've built outside of work — applying AI/ML, systems engineering, \
    and game development to solve real problems.",
  cards: [
    {
      image: "../assets/autocharter.png",
      title: "AutoCharter",
      alt: "autocharter",
      summary: "End-to-end AI pipeline that converts raw audio into full playable charts (drums, guitar, bass, vocals, keys) for Clone Hero / YARG — no manual charting needed.",
      description: "Generates complete multi-instrument, multi-difficulty charts covering drums, guitar, bass, \
        vocals, pro-keys, and syncs video to audio when available. Uses Demucs for source separation, a custom \
        42.4M-param CRNN onset detector (93.9% F1), and a 6-model ensemble classifier (85.2% F1) across 8 \
        pro-drum classes. Includes a spectral safety net using FFT-based centroid analysis to correct tom/cymbal \
        confusion. Leverages Whisper AI for vocal alignment and lyric detection when lyrics aren't provided. \
        Trained on 4.88M labeled hits from 5K+ songs on an NVIDIA DGX Spark. Produces game-ready charts in \
        ~60–90 seconds per song.",
      tags: ["pytorch", "deep-learning", "cuda", "python", "whisper"],
      links: []
    },
    {
      image: "../assets/yarg-mp.png",
      title: "YARG Online Multiplayer",
      alt: "yarg multiplayer",
      summary: "Built the complete online multiplayer system for YARG (Yet Another Rhythm Game), an open-source rhythm game.",
      description: "Designed the YARG.Networking library with LiteNetLib transport, P2P connectivity with NAT \
        punch-through and relay fallback, lobby/session management, and a dedicated server with Docker support \
        and admin web interface. Spans 3 repos across the YARG ecosystem.",
      tags: ["csharp", "unity", "networking", "docker"],
      links: [
        { label: "YARG.Networking", url: "https://github.com/opria123/YARG.Networking" },
        { label: "YARG (Game Client)", url: "https://github.com/YARC-Official/YARG" },
        { label: "YARG.Core", url: "https://github.com/YARC-Official/YARG.Core" }
      ]
    },
    {
      image: "../assets/Toledo-Zoo.jpg",
      title: "Turtle Recognition",
      alt: "toledo zoo",
      summary: "Collaborated with the Toledo Zoo on a computer vision application to identify individual turtles via image recognition.",
      description: "Built using OpenCV and Python to track turtle movement patterns across habitats. The system \
        identifies individual turtles from photos, enabling the zoo to monitor population dynamics without \
        invasive tagging methods.",
      tags: ["python", "opencv", "computer-vision"],
      links: []
    }
  ]
}

const hero = {
  header: "Hi, I'm <span className='text-[#915EFF]'>Josh</span>",
  body: "Software Engineer with an MSc in AI & Machine Learning — building intelligent systems, from distributed cloud platforms to deep learning pipelines."
}


export { experiences, about, projects, hero };
