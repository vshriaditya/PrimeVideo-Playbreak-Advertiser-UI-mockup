export const flowSteps = [
  {
    key: "overview",
    label: "Overview",
    href: "/",
    eyebrow: "Product",
  },
  {
    key: "formats",
    label: "Format selection",
    href: "/formats",
    eyebrow: "Setup",
  },
  {
    key: "builder",
    label: "Campaign builder",
    href: "/builder",
    eyebrow: "Creative",
  },
  {
    key: "targeting",
    label: "Targeting & budget",
    href: "/targeting",
    eyebrow: "Delivery",
  },
  {
    key: "review",
    label: "Review & launch",
    href: "/review",
    eyebrow: "Approval",
  },
  {
    key: "reporting",
    label: "Reporting",
    href: "/reporting",
    eyebrow: "Insights",
  },
] as const;

export const formatOptions = [
  {
    id: "QuickVoice",
    label: "QuickVoice",
    duration: "6-8 sec interaction",
    fit: "Voice-led recall for pause and branded break moments",
    summary:
      "Prompt viewers with a short spoken question and a lightweight answer flow optimized for lean-back viewing moments.",
    strengths: ["Fast launch", "Voice first", "High completion"],
    kpi: "Pause completion 92%",
  },
  {
    id: "SpeedPick",
    label: "SpeedPick",
    duration: "10-12 sec interaction",
    fit: "Selection-based pause ad with reward exchange",
    summary:
      "Drive quick response with multiple answer choices, dynamic reward copy, and a clear reason to engage before playback resumes.",
    strengths: ["Choice based", "Reward ready", "Strong engagement"],
    kpi: "Resume-safe engagement 2.4x",
  },
  {
    id: "RevealIt",
    label: "RevealIt",
    duration: "12-15 sec interaction",
    fit: "Premium reveal for launches, tentpoles, and sports sponsorships",
    summary:
      "Use a richer branded reveal moment to reinforce product imagery, reward messaging, and premium recall.",
    strengths: ["Visual reveal", "Premium feel", "Brand recall"],
    kpi: "Brand lift +41%",
  },
] as const;

export const defaultCampaign = {
  campaignName: "Playbreak Spring Launch",
  brandName: "Toyota",
  format: "SpeedPick",
  question: "Which Toyota SUV was rated America's Most Loved in 2025?",
  answerOptions: ["RAV4", "Highlander", "4Runner", "Tacoma"],
  correctAnswer: 0,
  rewardType: "Prime Video Credit",
  rewardValue: "$3.00",
  brandColor: "#FF1F29",
  creativeHeadline: "Play before your show resumes.",
  audienceSegments: ["In-market auto", "Streaming households", "Prime Video regulars"],
  geography: "United States",
  device: "Prime Video pause ads",
  bidModel: "CPE",
  totalBudget: "$125,000",
  dailyBudget: "$18,000",
  flightWindow: "Apr 15 - Apr 28",
  audienceEstimate: "18.4M reachable viewers",
  launchStatus: "Draft",
  launchDate: "",
};

export const audienceCatalog = [
  "In-market auto",
  "Streaming households",
  "Prime Video regulars",
  "Sports & live TV viewers",
  "Action & thriller fans",
  "Household decision makers",
];

export const overviewHighlights = [
  {
    label: "Time to launch",
    value: "48 hours",
    detail: "From console setup to live Prime Video pause ad campaign",
  },
  {
    label: "Buy model",
    value: "CPE",
    detail: "Pay when viewers actively engage before resume",
  },
  {
    label: "Primary surface",
    value: "Pause ads",
    detail: "Built for voluntary Prime Video break moments",
  },
  {
    label: "Audience signal",
    value: "1P data",
    detail: "Amazon shopping and streaming insights",
  },
];

export const measurementCards = [
  { label: "Pause ad completion", value: "94.2%", delta: "+6.1 pts vs. benchmark" },
  { label: "Viewer engagement", value: "71.8%", delta: "+2.4x interaction rate" },
  { label: "Reward claim rate", value: "38.4%", delta: "4,812 claimed credits" },
  { label: "Resume-to-content rate", value: "97.1%", delta: "Minimal playback disruption" },
  { label: "Brand recall lift", value: "+18.6%", delta: "Exposed vs. control survey panel" },
  { label: "Downstream lift", value: "+11.2%", delta: "Modeled rental or purchase intent lift" },
];

export const weeklyPerformance = [
  { label: "Week 1", completion: 82, engagement: 61, conversions: 84 },
  { label: "Week 2", completion: 88, engagement: 66, conversions: 89 },
  { label: "Week 3", completion: 91, engagement: 72, conversions: 93 },
  { label: "Week 4", completion: 94, engagement: 76, conversions: 97 },
];

export const segmentPerformance = [
  { segment: "In-market auto", engagement: "79%", cvr: "5.3%", roas: "4.4x" },
  { segment: "Prime Video regulars", engagement: "74%", cvr: "4.6%", roas: "3.8x" },
  { segment: "Streaming households", engagement: "71%", cvr: "4.1%", roas: "3.3x" },
  { segment: "Sports & live TV viewers", engagement: "66%", cvr: "3.9%", roas: "3.0x" },
];

export const launchChecklist = [
  "Creative follows Playbreak pause-ad interaction guidelines",
  "Reward inventory, fulfillment, and policy approval are complete",
  "Targeting, geography, and Prime Video surface scope are aligned",
  "Playback-safe QA passed across living room surfaces",
  "Budget and CPE caps are within account policy",
];
