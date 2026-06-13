export const projects = [
  {
    id: "cinephile-tv",
    index: "01",
    title: "Cinephile TV",
    tagline: "TV show discovery, powered by data.",
    type: "Full-Stack Application",
    typeColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    summary:
      "A production full-stack platform for discovering, filtering, and rating TV shows — built on a live IMDb dataset with a custom FastAPI backend and a Next.js 14 frontend.",
    bullets: [
      "Designed a Supabase PostgreSQL schema (shows, episodes, ratings) with optimised queries for fuzzy search, multi-filter, and rating aggregation.",
      "Built a FastAPI backend with fallback query logic and pagination, deployed on Render's free tier with UptimeRobot keep-alive.",
      "Delivered a server-side-rendered Next.js 14 frontend on Vercel with dynamic routing and real-time filtering.",
      "Managed the full DevOps lifecycle — migrated backend from Railway to Render, handling environment variables, CORS, and cold-start latency.",
    ],
    stack: ["Next.js 14", "FastAPI", "Supabase", "PostgreSQL", "Vercel", "Render", "Python"],
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Database", value: "Supabase" },
      { label: "Dataset", value: "IMDb" },
    ],
    links: {
      demo: "https://cinephile-tv.vercel.app",
      github: "https://github.com/Mohan-wraith/cinephile-tv",
    },
    accentFrom: "#0ea5e9",
    accentTo: "#0fbf92",
  },
  {
    id: "gos-mumbai",
    index: "02",
    title: "Green Space Inequity in Mumbai",
    tagline: "Satellite imagery meets deep learning.",
    type: "Deep Learning / Research",
    typeColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    summary:
      "M.Sc. thesis — a VGG19-UNet hybrid that segments Pleiades-1A satellite imagery into 6 urban land cover classes, quantifying the fourfold green space disparity between Mumbai's informal settlements and planned residential zones.",
    bullets: [
      "Designed a two-phase transfer learning pipeline: frozen VGG19 encoder pre-trained on ImageNet, then full fine-tuning with Focal Loss (γ=2.0) to handle class imbalance.",
      "Achieved 93.72% accuracy and 94.79% weighted F1 — outperforming DeepLab v3+, SegNet, and FCN-8s baselines on the same dataset.",
      "Built a full-scene tile-stitch inference pipeline supporting any-resolution Pleiades GeoTIFF input, deployed as a Flask REST API on Hugging Face Spaces.",
      "Delivered a Next.js 15 frontend with a drag-slider before/after viewer, GOS ring gauge, and Mumbai benchmark panel.",
    ],
    stack: ["TensorFlow 2.16", "Keras 3", "VGG19-UNet", "Flask", "Next.js 15", "Hugging Face", "GeoTIFF"],
    metrics: [
      { label: "Accuracy", value: "93.72%" },
      { label: "Weighted F1", value: "94.79%" },
      { label: "Patches", value: "8,910" },
    ],
    links: {
      demo: "https://gos-mapper.vercel.app",
      github: "https://github.com/Mohan-wraith/Evaluates-GOS-in-Informal-settlements-of-mumbai",
    },
    accentFrom: "#8b5cf6",
    accentTo: "#0fbf92",
  },
  {
    id: "falcon9",
    index: "03",
    title: "Falcon 9 Landing Prediction",
    tagline: "ML pipeline for launch cost estimation.",
    type: "Data Science",
    typeColor: "text-brand bg-brand/10 border-brand/20",
    summary:
      "End-to-end machine learning pipeline predicting SpaceX Falcon 9 first-stage booster recovery success — enabling data-driven launch cost estimation from live SpaceX API data.",
    bullets: [
      "Built a data collection pipeline using the SpaceX REST API and BeautifulSoup web scraping, engineering 18 features from raw JSON payloads.",
      "Trained and cross-validated Logistic Regression, SVM, Decision Tree, and KNN classifiers — selected best model by accuracy and recall.",
      "Performed SQL-based EDA and geospatial analysis to identify launch site proximity patterns correlated with landing success.",
      "Delivered an interactive Plotly Dash dashboard visualising launch site success rates, payload-outcome relationships, and booster reuse trends.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "SQL", "Plotly Dash", "BeautifulSoup", "SpaceX API"],
    metrics: [
      { label: "Models", value: "4 compared" },
      { label: "Features", value: "18 engineered" },
      { label: "Source", value: "SpaceX API" },
    ],
    links: {
      demo: "https://spacex-falcon-9-landing-prediction-2.onrender.com",
      github: "https://github.com/Mohan-wraith/falcon9-landing-prediction",
    },
    accentFrom: "#f59e0b",
    accentTo: "#0fbf92",
  },
];

export const skills = {
  "Languages": ["Python", "JavaScript", "TypeScript", "SQL"],
  "Frontend": ["Next.js", "React", "Tailwind CSS", "Recharts"],
  "Backend": ["FastAPI", "Flask", "Node.js", "REST APIs"],
  "Data & ML": ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
  "Databases": ["PostgreSQL", "Supabase", "SQL"],
  "Infrastructure": ["Vercel", "Render", "Hugging Face", "Docker", "Git"],
  "Specialisms": ["Deep Learning", "Computer Vision", "Semantic Segmentation", "Remote Sensing"],
};

export const stats = [
  { value: "3", label: "Production projects" },
  { value: "93.72%", label: "Thesis model accuracy" },
  { value: "M.Sc.", label: "Data Science, GITAM" },
];
