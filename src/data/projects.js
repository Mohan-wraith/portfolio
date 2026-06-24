export const projects = [
  {
    id: "gos-mumbai",
    index: "01",
    title: "Green and Open Space (GOS) Inequity in Mumbai",
    tagline: "Satellite imagery meets deep learning.",
    type: "Deep Learning / Research",
    typeColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    summary:
      "M.Sc. thesis — a VGG19-UNet hybrid that segments Pleiades-1A satellite imagery into 6 urban land cover classes, quantifying the fourfold green and open space disparity between Mumbai's informal settlements and planned residential zones.",
    bullets: [
      "Trained a custom VGG19-UNet semantic segmentation model on 8,910 Pleiades-1A satellite image patches (0.5 m/px), achieving 93.72% accuracy and 94.79% weighted F1 — outperforming DeepLab v3+ and SegNet benchmarks.",
      "Quantified a fourfold green and open space (GOS) disparity: informal settlements (Dharavi) average 9.02% GOS coverage versus 37.95% in planned residential areas — the first satellite-derived measurement of this inequity in Mumbai.",
      "Used two-phase transfer learning (frozen ImageNet encoder, then full fine-tuning) with Focal Loss (γ=2.0) and custom class weights (2.0× for informal settlements) on a Google Colab T4 GPU.",
      "Deployed the model via a Flask REST API on Hugging Face Spaces with a Next.js frontend, featuring a tile-stitch pipeline for any-resolution GeoTIFF input and real-time GOS index computation.",
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
    index: "02",
    title: "Falcon 9 First Stage Landing Prediction",
    tagline: "ML pipeline for launch cost estimation.",
    type: "Data Science",
    typeColor: "text-brand bg-brand/10 border-brand/20",
    summary:
      "IBM Applied Data Science Capstone — an end-to-end machine learning pipeline predicting SpaceX Falcon 9 first-stage booster recovery success, using live SpaceX API data to estimate launch cost reductions.",
    bullets: [
      "Engineered a data pipeline processing live SpaceX API data and web-scraped launch records to predict landing success and estimate cost reductions.",
      "Benchmarked four classification models (SVM, KNN, Logistic Regression, Decision Tree), achieving 88.93% accuracy with the top-performing Decision Tree model tuned via GridSearchCV.",
      "Conducted extensive EDA using SQL and Pandas to identify correlations between payload mass, orbit type, and mission outcome.",
      "Developed an interactive Plotly Dash web application and Folium geospatial maps for real-time visualisation of launch success rates across global sites.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "SQL", "Plotly Dash", "Folium", "SpaceX API"],
    metrics: [
      { label: "Accuracy", value: "88.93%" },
      { label: "Models", value: "4 compared" },
      { label: "Source", value: "SpaceX API" },
    ],
    links: {
      demo: "https://spacex-falcon-9-landing-prediction-2.onrender.com",
      github: "https://github.com/Mohan-wraith/falcon9-landing-prediction",
    },
    accentFrom: "#f59e0b",
    accentTo: "#0fbf92",
  },
  {
    id: "cinephile-tv",
    index: "03",
    title: "Cinephile TV",
    tagline: "TV show discovery, powered by data.",
    type: "Full-Stack Application",
    typeColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    summary:
      "A self-initiated full-stack TV analytics platform ingesting 4.6M IMDb data points, with a Next.js 14 frontend and a FastAPI backend backed by Supabase PostgreSQL.",
    bullets: [
      "Built a production architecture ingesting 4.6M IMDb data points, with a separated Next.js 14 frontend and FastAPI backend backed by PostgreSQL (Supabase).",
      "Designed custom PostgreSQL SQL functions for Top 250 rankings, full-text search, and genre-based recommendations, with a Selenium scraper fallback for live episode ratings.",
      "Delivered interactive episode rating heatmaps, Top 250 rankings, and a Hall of Fame covering 406,782 episodes, in a responsive TypeScript + Tailwind CSS UI.",
      "Deployed the FastAPI backend on Render, optimising for continuous uptime across 64 production deployments.",
    ],
    stack: ["Next.js 14", "FastAPI", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS", "Selenium"],
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Data points", value: "4.6M" },
      { label: "Episodes", value: "406,782" },
    ],
    links: {
      demo: "https://cinephile-tv.vercel.app",
      github: "https://github.com/Mohan-wraith/cinephile-tv",
    },
    accentFrom: "#0ea5e9",
    accentTo: "#0fbf92",
  },
];

export const skills = {
  "Data & ML": ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
  "Specialisms": ["Deep Learning", "Computer Vision", "Semantic Segmentation", "Remote Sensing"],
  "Languages": ["Python", "SQL", "TypeScript", "Java"],
  "Visualisation": ["Plotly Dash", "Matplotlib", "Seaborn", "Tableau", "Power BI"],
  "Backend & APIs": ["FastAPI", "Flask", "REST APIs", "PostgreSQL"],
  "Cloud & Tools": ["AWS SageMaker", "Supabase", "Vercel", "Hugging Face", "Docker"],
};

export const stats = [
  { value: "93.72%", label: "Thesis model accuracy" },
  { value: "3", label: "End-to-end ML projects" },
  { value: "M.Sc.", label: "Data Science, GITAM" },
];

export const resumeUrl = "/resume/MOHAN_DEVENDRA_RESUME.pdf";
