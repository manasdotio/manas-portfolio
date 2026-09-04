export type SkillCategory = "frontend" | "backend" | "database" | "infra";

export type SkillItem = {
  name: string;
  category: SkillCategory;
  enabled: boolean;
};

export type CaseStudy = {
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: Array<{
    title: string;
    description: string;
  }>;
  learnings: string[];
};

export type Project = {
  slug: string;
  name: string;
  year: number;
  status: "Live" | "In Progress";
  enabled: boolean;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  altImage?: string;
  caseStudy: CaseStudy;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  enabled: boolean;
};

export type MetricItem = {
  value: string;
  label: string;
  enabled: boolean;
};

export type SocialLink = {
  platform: "LinkedIn" | "GitHub" | "X" | "Email";
  handle: string;
  href: string;
};

export const PORTFOLIO_DATA = {
  personal: {
    name: "Manas Singh",
    role: "Fullstack Developer",
    city: "Jaipur",
    country: "India",
    timezone: "Asia/Kolkata",
    email: "manasdotio@gmail.com",
    availableForWork: true,
    resumeUrl: "/resume.pdf",
    bioShort:
      "I build things for the open web — a distraction-free Firefox extension with real users, a browser-based desktop OS running at 60 FPS, and a full-stack video platform with production-grade auth. Self-taught since 2022. Based in Jaipur, open to remote.",
  },

  socialLinks: [
    {
      platform: "GitHub",
      handle: "manasdotio",
      href: "https://github.com/manasdotio",
    },
    {
      platform: "LinkedIn",
      handle: "manasdotio",
      href: "https://www.linkedin.com/in/manasdotio",
    },
    {
      platform: "X",
      handle: "@manasdotio",
      href: "https://x.com/manasdotio",
    },
    {
      platform: "Email",
      handle: "manasdotio@gmail.com",
      href: "mailto:manasdotio@gmail.com",
    },
  ] as SocialLink[],

  // Set enabled: false to quickly hide any tech from the stack section
  skills: [
    // Frontend
    { name: "React", category: "frontend", enabled: true },
    { name: "Next.js", category: "frontend", enabled: true },
    { name: "TypeScript", category: "frontend", enabled: true },
    { name: "Tailwind CSS", category: "frontend", enabled: true },
    { name: "Framer Motion", category: "frontend", enabled: false },
    { name: "Vite", category: "frontend", enabled: true },

    // Backend
    { name: "Node.js", category: "backend", enabled: true },
    { name: "Express", category: "backend", enabled: true },
    { name: "REST APIs", category: "backend", enabled: true },
    { name: "GraphQL", category: "backend", enabled: false }, // Set to true when needed
    { name: "tRPC", category: "backend", enabled: false },    // Set to true when needed

    // Database
    { name: "MongoDB", category: "database", enabled: true },
    { name: "PostgreSQL", category: "database", enabled: true },
    { name: "Prisma", category: "database", enabled: true },
    { name: "Redis", category: "database", enabled: false },  // Set to true when needed

    // Infra & Tools
    { name: "Browser Extension", category: "infra", enabled: true },
    { name: "Git", category: "infra", enabled: true },
    { name: "Linux", category: "infra", enabled: true },
    { name: "Vercel", category: "infra", enabled: true },
    { name: "Docker", category: "infra", enabled: false },    // Set to true when needed
  ] as SkillItem[],

  metrics: [
    { value: "60 FPS", label: "Browser OS window manager", enabled: true },
    { value: "0 ms", label: "Content flash on Firefox ext.", enabled: true },
    { value: "3+", label: "Shipped projects with real users", enabled: true },
    { value: "Open", label: "To full-time & remote roles", enabled: true },
  ] as MetricItem[],

  timeline: [
    {
      year: "2025",
      title: "Shipping Real Projects",
      description:
        "Built Intentional YT (Firefox extension), a browser OS simulator, and VividStream. Actively looking for my first full-time role.",
      enabled: true,
    },
    {
      year: "2024",
      title: "Fullstack & Backend APIs",
      description:
        "Learned Node.js, Express, and MongoDB. Built REST APIs with authentication, token rotation, and database queries.",
      enabled: true,
    },
    {
      year: "2023",
      title: "React & Modern Frontend",
      description:
        "Built interactive web applications using React, TypeScript, and Tailwind CSS. Focused on clean UI and component reusability.",
      enabled: true,
    },
    {
      year: "2022",
      title: "First Steps into Coding",
      description:
        "Started learning programming fundamentals, semantic HTML, modern CSS layouts, and vanilla JavaScript.",
      enabled: true,
    },
  ] as TimelineItem[],

  currentFocus: [
    "Actively interviewing for fullstack / frontend roles",
    "Based in Jaipur · Open to remote or relocation",
    "Daily builder — check GitHub activity above",
    "Strong in React, TypeScript, Node.js, MongoDB, PostgreSQL",
  ],

  projects: [
    {
      slug: "operating-system",
      name: "Operating System",
      year: 2025,
      status: "Live",
      enabled: true,
      description:
        "Browser-based desktop environment built with React and Vite. Draggable and resizable windows powered by react-rnd, taskbar with window manager, in-memory virtual file system with search, plus Notepad, Photos, and Camera apps.",
      tags: ["React", "TypeScript", "Tailwind", "Vite"],
      liveUrl: "https://operating-system-nine.vercel.app",
      githubUrl: "https://github.com/manasdotio/operating-system",
      image: "/assets/os.webp",
      caseStudy: {
        tagline: "A fully draggable, interactive desktop environment running purely in the browser.",
        overview:
          "Operating System is a personal engineering challenge to recreate the familiar feel and ergonomics of a desktop GUI inside a browser tab. It handles multi-window z-index layering, window minimization/maximization, a centralized taskbar, and pre-installed utility apps.",
        problem:
          "Managing overlapping, resizable, and draggable windows in React often leads to state collisions, laggy drag events, and complex z-index management. The challenge was building an architecture that feels fluid at 60 FPS while keeping the component tree clean.",
        solution:
          "Leveraged react-rnd for hardware-accelerated transforms, coupled with a centralized WindowManager state. Storing window state in an in-memory virtual tree allows instantaneous search across simulated files and seamless window focus switching on click.",
        features: [
          "Draggable & resizable windows with snap bounds",
          "Active taskbar with open application indicators",
          "Virtual in-memory file system with instant search",
          "Functional Notepad, Photos gallery, and interactive Camera utility",
          "Persistent desktop settings and theme adjustments",
        ],
        architecture: [
          {
            title: "Centralized Window Manager",
            description: "Tracks active window IDs, stacking order, minimized flags, and coordinates in a single state slice.",
          },
          {
            title: "Virtual File System",
            description: "Simulates nested directory hierarchies in memory, allowing users to create, delete, and inspect files.",
          },
          {
            title: "Sub-pixel Transform Rendering",
            description: "Utilizes CSS GPU-accelerated translate3d to avoid expensive layout recalculations during rapid resizing.",
          },
        ],
        learnings: [
          "Mastered coordinate math and boundary detection for draggable DOM elements.",
          "Learned how to design modular window app wrappers so new mini-apps can be plugged in with minimal code.",
          "Understood real-world state management challenges when handling multiple active focus layers.",
        ],
      },
    },
    {
      slug: "intentional-yt",
      name: "Intentional YT",
      year: 2025,
      status: "Live",
      enabled: true,
      description:
        "Lightweight, distraction-free YouTube extension for Firefox & Chromium. Zero tracking, zero content flash at document start, granular toggles to remove home feed, Shorts, and recommendations, plus watch time tracking.",
      tags: ["JavaScript", "Browser Extension", "Firefox", "Chrome", "CSS"],
      liveUrl: "https://addons.mozilla.org/en-US/firefox/addon/intentional-yt/",
      githubUrl: "https://github.com/manasdotio/intentional-yt",
      image: "/assets/intentional-yt.webp",
      altImage: "/assets/intentional-yt-cluttered.webp",
      caseStudy: {
        tagline: "A privacy-first browser extension designed to strip distraction from YouTube.",
        overview:
          "Intentional YT is an open-source browser add-on published on Firefox AMO and compatible with Chromium browsers. It lets users reclaim their focus by surgically removing the homepage algorithm, infinite Shorts shelf, and sidebar recommendations without breaking core video playback.",
        problem:
          "Most content-blocking extensions inject their styles or scripts after the page loads (DOMContentLoaded), causing an annoying 'flash of unstyled content' (FOUC) where clickbait thumbnails flicker on screen for 300ms before disappearing. Furthermore, many commercial extensions track user viewing data.",
        solution:
          "Engineered a zero-telemetry architecture injecting declarative CSS rules at 'run_at: document_start' so blacklisted elements are blocked before the first paint occurs. User preferences and watch timers are stored locally using browser.storage.local with 0% external network calls.",
        features: [
          "Zero flash of algorithmic content via document_start injection",
          "Granular toggle switches: hide homepage feed, comments, or Shorts",
          "Local-first watch time timer keeping you aware of usage",
          "100% private: no tracking scripts, no telemetry, zero analytics",
          "Published live on Mozilla Firefox Add-ons (AMO)",
        ],
        architecture: [
          {
            title: "Early DOM Interception",
            description: "Content script rules applied before initial render to prevent visual layout flashing.",
          },
          {
            title: "Local Storage State Machine",
            description: "Synchronizes extension popup toggles with active YouTube tabs via browser runtime messaging.",
          },
          {
            title: "Zero-Dependency Footprint",
            description: "Built with pure vanilla JavaScript and high-performance CSS attribute selectors for minimum memory overhead.",
          },
        ],
        learnings: [
          "Learned the browser WebExtensions API lifecycle (background workers, content scripts, popup context).",
          "Gained deep appreciation for browser rendering pipelines and avoiding layout thrashing.",
          "Navigated the Firefox Add-on review and publishing workflow successfully.",
        ],
      },
    },
    {
      slug: "vividstream",
      name: "VividStream",
      year: 2025,
      status: "In Progress",
      enabled: true,
      description:
        "Full-stack MERN video streaming platform with JWT access/refresh token rotation via HttpOnly cookies, Cloudinary-backed media pipeline, and MongoDB aggregation pipelines for feed rankings, watch history, and analytics.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/manasdotio/vividstream",
      image: "/assets/vividstream.svg",
      caseStudy: {
        tagline: "Full-stack video streaming and community platform with production-grade authentication.",
        overview:
          "VividStream is an end-to-end fullstack platform built with the MERN stack (MongoDB, Express, React, Node.js). It supports video uploads with cloud transcode pipelines, channel subscriptions, like/dislike interactions, and personalized watch histories.",
        problem:
          "Video platforms require robust backend handling: handling multi-megabyte media uploads reliably, securely managing sessions without storing tokens in vulnerable localStorage, and running complex multi-table queries without MongoDB slowdowns.",
        solution:
          "Architected an Express backend utilizing Multer for temporary disk staging and direct streaming to Cloudinary. Implemented dual JWT authentication (short-lived access token + long-lived refresh token in HttpOnly cookies) and optimized feed queries using MongoDB Aggregation Pipelines ($lookup, $project, $facet).",
        features: [
          "Secure dual JWT authentication with HttpOnly cookie rotation",
          "Cloudinary media integration with video upload streaming",
          "MongoDB aggregation pipelines for watch history and subscriber counts",
          "Interactive commenting system with nested replies",
          "Responsive video player with full controls and related recommendations",
        ],
        architecture: [
          {
            title: "Aggregation Pipeline Optimization",
            description: "Custom multi-stage MongoDB pipelines to calculate view counts, likes, and subscription states in a single database roundtrip.",
          },
          {
            title: "Secure Session Lifecycle",
            description: "Silent token refreshes prevent logout while protecting against cross-site scripting (XSS) attacks.",
          },
          {
            title: "RESTful API Separation",
            description: "Decoupled Express routers for auth, videos, comments, playlists, and user profiles with centralized error handling.",
          },
        ],
        learnings: [
          "Mastered MongoDB aggregation frameworks, unravelling arrays, and foreign key projections.",
          "Deepened understanding of web security best practices (CORS, HttpOnly cookies, token revocation).",
          "Learned how to design clean RESTful routes that make frontend consumption intuitive.",
        ],
      },
    },
  ] as Project[],
};
