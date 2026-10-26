import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  AlertTriangle,
  Layers,
  Calculator,
  Bot,
  Activity,
  CheckCircle,
  FileText,
  Upload,
  HardHat,
  Camera,
  Calendar,
  ArrowRight,
  Play,
  Cpu,
  RefreshCw,
  Wind,
  CloudRain,
  Thermometer,
  Zap,
  Download,
  Send,
  Sparkles,
  Eye,
  Check,
  AlertCircle,
  XCircle,
  Maximize2,
  ChevronRight,
  Plus,
  BarChart3,
  DollarSign,
  TrendingUp,
  Sliders,
  Radio,
  Building2,
  MapPin,
  Clock,
  UserCheck
} from "lucide-react";

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState("safety");
  const [selectedProject, setSelectedProject] = useState("Skyline Tower B - Structural Phase");

  // System Health State
  const [apiConnected, setApiConnected] = useState(true);
  const [visionConnected, setVisionConnected] = useState(true);

  // --- MODULE 1: SITE SAFETY RADAR STATE ---
  const [activeCam, setActiveCam] = useState(1);
  const [isSimulating, setIsSimulating] = useState(true);
  const [safetyLogs, setSafetyLogs] = useState([
    { id: 1, time: "16:42:10", cam: "Cam 1 - Main Gate", type: "Non-Compliance", msg: "Worker #14 missing High-Vis Vest", severity: "warning" },
    { id: 2, time: "16:38:04", cam: "Cam 2 - Crane Rig", type: "Zone Intrusion", msg: "Personnel in suspended load zone", severity: "critical" },
    { id: 3, time: "16:15:22", cam: "Cam 3 - Excavation", type: "PPE Verified", msg: "Full harness compliance verified for 6 crew", severity: "compliant" }
  ]);
  const canvasRef = useRef(null);

  // --- MODULE 2: STRUCTURAL CRACK ANALYSIS STATE ---
  const [selectedSample, setSelectedSample] = useState("beam");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const sampleData = {
    beam: {
      title: "Reinforced Concrete Beam Shear Crack",
      img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
      width: "1.45 mm",
      depth: "18.2 mm",
      severity: "Class III - Moderate High",
      severityColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      remediation: "Epoxy Injection with Structural Carbon Fiber Reinforcement (CFRP) wrap along shear span."
    },
    spalling: {
      title: "Masonry Retaining Wall Concrete Spalling",
      img: "https://images.unsplash.com/photo-1584463674649-5770857de05d?auto=format&fit=crop&w=800&q=80",
      width: "3.20 mm",
      depth: "35.0 mm",
      severity: "Class IV - Critical Structural",
      severityColor: "text-red-400 bg-red-500/10 border-red-500/30",
      remediation: "Immediate shoring, removal of loose matrix, corrosion treatment on exposed rebar, and high-strength polymer mortar patching."
    },
    deflection: {
      title: "Foundation Slab Micro-Fracture Network",
      img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80",
      width: "0.60 mm",
      depth: "8.5 mm",
      severity: "Class II - Minor Monitoring",
      severityColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      remediation: "Polyurethane seal coating and monthly strain gauge telemetry monitoring."
    }
  };

  // --- MODULE 3: GANTT & WEATHER PLANNER STATE ---
  const [tasks, setTasks] = useState([
    { id: 1, name: "Site Excavation & Deep Shoring", progress: 100, status: "Complete", start: "Oct 01", end: "Oct 15", risk: "Low" },
    { id: 2, name: "Sub-structure Foundation Pour", progress: 78, status: "In Progress", start: "Oct 14", end: "Oct 28", risk: "Medium" },
    { id: 3, name: "Structural Steel Framing (L1-L5)", progress: 35, status: "In Progress", start: "Oct 22", end: "Nov 12", risk: "High (Wind)" },
    { id: 4, name: "MEP Conduit Rough-In", progress: 10, status: "Scheduled", start: "Nov 02", end: "Nov 25", risk: "Low" },
    { id: 5, name: "Exterior Curtain Wall Cladding", progress: 0, status: "Pending", start: "Nov 20", end: "Dec 15", risk: "Low" }
  ]);

  // --- MODULE 4: COST VALUATION ENGINE STATE ---
  const [valuationInput, setValuationInput] = useState({
    area: 3500,
    floors: 4,
    grade: "High-Durability",
    region: "Metropolitan North"
  });
  const [valuationResult, setValuationResult] = useState(null);
  const [isCalculatingValuation, setIsCalculatingValuation] = useState(false);

  // --- MODULE 5: AI CHATBOT STATE ---
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am **ConstructAI Lead Assistant**. Ask me about OSHA 1926 standards, ACI 318 concrete curing protocols, or site cost optimization."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Smooth scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  // Canvas drawing simulation for site safety vision
  useEffect(() => {
    if (activeTab !== "safety") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    let frame = 0;
    const drawBoxes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simulate dynamic object detection bounding boxes
      const offsetX = Math.sin(frame * 0.05) * 12;
      const offsetY = Math.cos(frame * 0.05) * 6;

      // Worker 1 - Fully Compliant (Green)
      ctx.strokeStyle = "#10b981"; // Emerald
      ctx.lineWidth = 2;
      ctx.strokeRect(100 + offsetX, 80 + offsetY, 110, 220);
      ctx.fillStyle = "rgba(16, 185, 129, 0.2)";
      ctx.fillRect(100 + offsetX, 80 + offsetY, 110, 24);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px monospace";
      ctx.fillText("WORKER #01 [PPE: 100%]", 105 + offsetX, 96 + offsetY);

      // Worker 2 - Warning: Missing Vest (Amber)
      ctx.strokeStyle = "#f59e0b"; // Amber
      ctx.lineWidth = 2;
      ctx.strokeRect(340 - offsetX, 120 + offsetY, 100, 200);
      ctx.fillStyle = "rgba(245, 158, 11, 0.2)";
      ctx.fillRect(340 - offsetX, 120 + offsetY, 100, 24);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px monospace";
      ctx.fillText("WORKER #14 [NO VEST]", 345 - offsetX, 136 + offsetY);

      // Danger Zone Box (Red Pulse)
      ctx.strokeStyle = "rgba(239, 68, 68, 0.8)";
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 2;
      ctx.strokeRect(480, 160, 160, 140);
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(239, 68, 68, 0.15)";
      ctx.fillRect(480, 160, 160, 140);
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 10px monospace";
      ctx.fillText("CRANE SUSPENDED ZONE", 490, 180);

      frame++;
      if (isSimulating) {
        animationId = requestAnimationFrame(drawBoxes);
      }
    };

    drawBoxes();
    return () => cancelAnimationFrame(animationId);
  }, [activeTab, isSimulating, activeCam]);

  // Execute Cost Calculation (with fallback)
  const handleCalculateValuation = async (e) => {
    if (e) e.preventDefault();
    setIsCalculatingValuation(true);
    const { area, floors, grade, region } = valuationInput;

    const multiplier = grade === "Eco-Green Concrete" ? 1.35 : grade === "High-Durability" ? 1.2 : 1.0;
    const locMult = region === "Metropolitan North" ? 1.15 : 1.0;

    try {
      // Attempt backend API call to FastAPI endpoint
      const res = await fetch("http://127.0.0.1:8000/api/v1/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area_sqft: Number(area), floors: Number(floors), quality: grade })
      });
      if (!res.ok) throw new Error("API Offline");
      const data = await res.json();
      setValuationResult(data);
    } catch (err) {
      // Robust client-side fallback simulation logic
      const totalArea = Number(area) * Number(floors);
      const estCost = Math.round(totalArea * 185 * multiplier * locMult);
      const steelTons = Math.round((totalArea * 0.0042) * multiplier);
      const cementBags = Math.round((totalArea * 0.45) * multiplier);
      const rebarSpec = `${Math.round(steelTons * 0.75)}T #4 Grade 60 Rebar`;
      const carbonOffset = grade === "Eco-Green Concrete" ? "Grade A (-32% CO2)" : "Grade C (Standard)";

      setValuationResult({
        estimated_cost_usd: estCost,
        steel_tons: steelTons,
        cement_bags: cementBags,
        rebar_spec: rebarSpec,
        carbon_rating: carbonOffset
      });
    } finally {
      setIsCalculatingValuation(false);
    }
  };

  // AI Chat Handler
  const handleSendMessage = (textToSend) => {
    const query = textToSend || chatInput;
    if (!query.trim()) return;

    const newMessages = [...chatMessages, { role: "user", content: query }];
    setChatMessages(newMessages);
    if (!textToSend) setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();
      if (lower.includes("osha") || lower.includes("height") || lower.includes("scaffold")) {
        reply = "According to **OSHA Standard 1926.451**, guardrails must be installed on all scaffold platforms elevated 10 feet or more above lower levels. Toprails must be between 38 and 45 inches high.";
      } else if (lower.includes("concrete") || lower.includes("ratio") || lower.includes("cure")) {
        reply = "For high-strength structural slabs (ACI 318), standard M40 mix ratio is **1 : 1.2 : 2.4** (Cement : Sand : Aggregate) with a target water-cement ratio of 0.40. Curing should be maintained wet for at least 7 days.";
      } else if (lower.includes("rebar") || lower.includes("estimate") || lower.includes("slab")) {
        reply = "For a 5,000 sq ft structural slab (6-inch thickness), estimated rebar requirement is approximately **6.5 to 7.2 Tons** of #4 Grade 60 rebar spaced at 12 inches on center dual-mat grid.";
      } else {
        reply = `Analysis completed for query: "${query}". All parameters verified against ISO 9001 and local building safety telemetry protocols.`;
      }

      setChatMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* ================= HEADER & SYSTEM HEALTH BAR ================= */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Logo & Platform Brand */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/20">
            <Activity className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold tracking-tight text-white">ConstructAI</h1>
              <span className="text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/40 px-2 py-0.5 rounded-full">
                PRO v3.4
              </span>
            </div>
            <p className="text-xs text-slate-400">Multimodal Autonomous Construction Intelligence</p>
          </div>
        </div>

        {/* Project Selector Dropdown */}
        <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
          <Building2 className="w-4 h-4 text-slate-400" />
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="bg-transparent text-xs text-slate-200 font-medium focus:outline-none cursor-pointer pr-2"
          >
            <option value="Skyline Tower B - Structural Phase" className="bg-slate-900">Skyline Tower B - Structural Phase</option>
            <option value="Metro Line Extension - Pier 4" className="bg-slate-900">Metro Line Extension - Pier 4</option>
            <option value="Industrial Warehouse Hub" className="bg-slate-900">Industrial Warehouse Hub</option>
          </select>
        </div>

        {/* System Health Telemetry Badges */}
        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-full">
            <span className={`w-2 h-2 rounded-full ${apiConnected ? "bg-emerald-400 animate-ping" : "bg-red-400"}`} />
            <span className="text-slate-300">FastAPI :8000</span>
            <span className="text-emerald-400 font-bold">{apiConnected ? "LIVE" : "OFFLINE"}</span>
          </div>

          <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-full">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300">YOLOv8 Engine</span>
            <span className="text-cyan-400 font-bold">60 FPS</span>
          </div>

          <div className="hidden lg:flex items-center space-x-2 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-full text-slate-400">
            <Wind className="w-3.5 h-3.5 text-amber-400" />
            <span>Site Wind: <strong className="text-slate-200">24 km/h</strong></span>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Navigation Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-4 space-y-6 flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              Intelligence Modules
            </div>

            <button
              onClick={() => setActiveTab("safety")}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition ${
                activeTab === "safety"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-4 h-4" />
                <span>Site Safety Radar</span>
              </div>
              {activeTab === "safety" && <ChevronRight className="w-4 h-4 opacity-70" />}
            </button>

            <button
              onClick={() => setActiveTab("cracks")}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition ${
                activeTab === "cracks"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-4 h-4" />
                <span>Structural Defect Analysis</span>
              </div>
              {activeTab === "cracks" && <ChevronRight className="w-4 h-4 opacity-70" />}
            </button>

            <button
              onClick={() => setActiveTab("gantt")}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition ${
                activeTab === "gantt"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Layers className="w-4 h-4" />
                <span>Gantt & Weather Planner</span>
              </div>
              {activeTab === "gantt" && <ChevronRight className="w-4 h-4 opacity-70" />}
            </button>

            <button
              onClick={() => setActiveTab("valuation")}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition ${
                activeTab === "valuation"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Calculator className="w-4 h-4" />
                <span>Cost & Valuation Engine</span>
              </div>
              {activeTab === "valuation" && <ChevronRight className="w-4 h-4 opacity-70" />}
            </button>

            <button
              onClick={() => setActiveTab("assistant")}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition ${
                activeTab === "assistant"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Bot className="w-4 h-4" />
                <span>AI Knowledge Assistant</span>
              </div>
              {activeTab === "assistant" && <ChevronRight className="w-4 h-4 opacity-70" />}
            </button>
          </div>

          {/* Sidebar Status Footer Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">Edge Node #4</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">ONLINE</span>
            </div>
            <div className="text-xs text-slate-300 font-mono space-y-1">
              <div className="flex justify-between"><span>GPU Temp:</span><span className="text-cyan-400">54°C</span></div>
              <div className="flex justify-between"><span>Active Workers:</span><span className="text-white font-bold">18 Crew</span></div>
            </div>
          </div>
        </aside>

        {/* Main Content View Container */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-950 space-y-8">
          {/* ================= 1. SITE SAFETY RADAR (VISION MODULE) ================= */}
          {activeTab === "safety" && (
            <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    <Shield className="w-7 h-7 text-cyan-400" />
                    Site Safety Radar & Real-Time PPE Computer Vision
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    YOLOv8 Neural Network object detection pipeline tracking hardhat compliance, high-vis jackets, and zone breaches.
                  </p>
                </div>

                {/* Camera Selector Switcher */}
                <div className="flex items-center bg-slate-900 p-1 border border-slate-800 rounded-xl space-x-1">
                  {[1, 2, 3].map((camNum) => (
                    <button
                      key={camNum}
                      onClick={() => setActiveCam(camNum)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                        activeCam === camNum
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Cam #{camNum} {camNum === 1 ? "(Main Gate)" : camNum === 2 ? "(Crane Rig)" : "(Excavation)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vision Stream & Gauge Metrics Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Visual Camera Feed Simulator */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-3 px-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                      <span className="text-xs font-mono font-bold text-slate-200">
                        STREAM FEED #{activeCam} - 1080P @ 60FPS
                      </span>
                    </div>
                    <button
                      onClick={() => setIsSimulating(!isSimulating)}
                      className="text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-lg border border-slate-700 transition"
                    >
                      {isSimulating ? "Pause Vision Overlay" : "Resume Stream"}
                    </button>
                  </div>

                  {/* Canvas Video Overlay Container */}
                  <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                      alt="Construction Site Feed"
                      className="w-full h-full object-cover opacity-60 filter contrast-125"
                    />
                    <canvas
                      ref={canvasRef}
                      width={640}
                      height={360}
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    />
                  </div>
                </div>

                {/* Live Safety Metrics Gauges */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Compliance Radar Metrics
                    </h3>

                    {/* Gauge 1: Hardhat */}
                    <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <HardHat className="w-4 h-4 text-emerald-400" /> Hardhat Wearing Rate
                        </span>
                        <span className="text-emerald-400 font-mono font-bold">98.4%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[98.4%] rounded-full shadow-lg shadow-emerald-500/50" />
                      </div>
                    </div>

                    {/* Gauge 2: High-Vis */}
                    <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <UserCheck className="w-4 h-4 text-cyan-400" /> High-Vis Vest Rate
                        </span>
                        <span className="text-cyan-400 font-mono font-bold">94.1%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full w-[94.1%] rounded-full shadow-lg shadow-cyan-500/50" />
                      </div>
                    </div>

                    {/* Gauge 3: Harness */}
                    <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <Shield className="w-4 h-4 text-amber-400" /> Height Harness Lock
                        </span>
                        <span className="text-amber-400 font-mono font-bold">89.2%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[89.2%] rounded-full shadow-lg shadow-amber-500/50" />
                      </div>
                    </div>
                  </div>

                  {/* Danger Zone Counter Card */}
                  <div className="bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-500/30 rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-red-400 font-semibold font-mono">DANGER ZONE INTRUSIONS</div>
                      <div className="text-2xl font-black text-red-300 mt-0.5">01 Active Breach</div>
                    </div>
                    <AlertCircle className="w-8 h-8 text-red-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Safety Logs Feed Table */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white tracking-wide">Real-Time Safety Audit Log Feed</h3>
                  <span className="text-xs text-slate-400 font-mono">Auto-updating telemetry</span>
                </div>
                <div className="divide-y divide-slate-800">
                  {safetyLogs.map((log) => (
                    <div key={log.id} className="py-3 flex flex-wrap items-center justify-between text-xs gap-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-slate-400">{log.time}</span>
                        <span className="font-semibold text-slate-200">{log.cam}</span>
                        <span className="text-slate-300">{log.msg}</span>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                          log.severity === "critical"
                            ? "bg-red-500/20 text-red-400 border-red-500/30"
                            : log.severity === "warning"
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                            : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        }`}
                      >
                        {log.type.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= 2. STRUCTURAL CRACK & DEFECT ANALYSIS ================= */}
          {activeTab === "cracks" && (
            <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <AlertTriangle className="w-7 h-7 text-amber-400" />
                  Structural Crack & Multimodal Concrete Defect Analysis
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  Computer Vision crack geometry estimation, spalling depth analysis, and structural remediation suggestions.
                </p>
              </div>

              {/* Sample Selector Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Load Preset Scan:</span>
                {Object.keys(sampleData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSample(key)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                      selectedSample === key
                        ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    {sampleData[key].title}
                  </button>
                ))}
              </div>

              {/* Main Inspection Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upload & Viewer Display */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4">
                  <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800 group">
                    <img
                      src={sampleData[selectedSample].img}
                      alt="Crack Scan"
                      className="w-full h-full object-cover filter contrast-125"
                    />
                    {/* Simulated Heatmap Bounding Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-red-500/20 pointer-events-none" />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-white">
                      Scan ID: #CRK-2026-X8
                    </div>
                  </div>

                  <div className="border border-dashed border-slate-800 rounded-xl p-4 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Upload className="w-4 h-4 text-blue-400" />
                      <span>Drag & Drop customized concrete scan file</span>
                    </div>
                    <button className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg border border-slate-700 transition font-medium">
                      Browse File
                    </button>
                  </div>
                </div>

                {/* AI Crack Metrics & Remediation Recommendations */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">{sampleData[selectedSample].title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Multimodal Neural Network Diagnostics</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${sampleData[selectedSample].severityColor}`}>
                        {sampleData[selectedSample].severity}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                        <div className="text-xs text-slate-400 font-mono">Crack Max Width</div>
                        <div className="text-xl font-bold text-cyan-400 font-mono mt-1">{sampleData[selectedSample].width}</div>
                      </div>
                      <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                        <div className="text-xs text-slate-400 font-mono">Depth Estimate</div>
                        <div className="text-xl font-bold text-amber-400 font-mono mt-1">{sampleData[selectedSample].depth}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">AI Recommended Remediation</div>
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed">
                        {sampleData[selectedSample].remediation}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition text-xs shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Generate PDF Engineering Audit Report</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= 3. PROJECT GANTT & WEATHER RISK PLANNER ================= */}
          {activeTab === "gantt" && (
            <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    <Layers className="w-7 h-7 text-blue-400" />
                    Project Gantt & Weather Risk Intelligence
                  </h2>
                  <p className="text-slate-400 text-xs mt-1">
                    Real-time construction schedule timeline synced with local atmospheric safety thresholds.
                  </p>
                </div>
              </div>

              {/* Weather Telemetry Risk Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center space-x-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Crane Operation Wind</div>
                    <div className="text-lg font-bold text-amber-300 mt-0.5">28 km/h (Caution)</div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400">
                    <CloudRain className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Precipitation Forecast</div>
                    <div className="text-lg font-bold text-white mt-0.5">12% Rain Chance</div>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center space-x-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Concrete Cure Temp</div>
                    <div className="text-lg font-bold text-emerald-300 mt-0.5">24°C (Ideal Range)</div>
                  </div>
                </div>
              </div>

              {/* Interactive Gantt Timeline Matrix */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-sm font-bold text-white tracking-wide">Critical Path Task Matrix</h3>

                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-2">
                      <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                        <span className="font-bold text-slate-200">{task.name}</span>
                        <div className="flex items-center space-x-3 font-mono">
                          <span className="text-slate-400">{task.start} - {task.end}</span>
                          <span className="text-blue-400 font-bold">{task.progress}%</span>
                        </div>
                      </div>

                      {/* Timeline Progress Bar */}
                      <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= 4. COST & MATERIAL VALUATION ENGINE ================= */}
          {activeTab === "valuation" && (
            <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Calculator className="w-7 h-7 text-emerald-400" />
                  Cost & Material Valuation Engine
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  Connects to FastAPI backend (`/api/v1/valuation`) with fallback engine for structural steel & cement material estimations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Inputs Form */}
                <form
                  onSubmit={handleCalculateValuation}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
                >
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Project Parameters</h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Built Area (sq.ft)</label>
                    <input
                      type="number"
                      value={valuationInput.area}
                      onChange={(e) => setValuationInput({ ...valuationInput, area: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Number of Floors</label>
                    <input
                      type="number"
                      value={valuationInput.floors}
                      onChange={(e) => setValuationInput({ ...valuationInput, floors: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Material Specification</label>
                    <select
                      value={valuationInput.grade}
                      onChange={(e) => setValuationInput({ ...valuationInput, grade: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="Standard">Standard Commercial Grade</option>
                      <option value="High-Durability">High-Durability Structural</option>
                      <option value="Eco-Green Concrete">Eco-Green Low Carbon Concrete</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isCalculatingValuation}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-xl transition text-xs shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>{isCalculatingValuation ? "Executing Calculations..." : "Run Valuation Model"}</span>
                  </button>
                </form>

                {/* Estimation Results Panel */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-4">
                      Material & Cost Estimation Output
                    </h3>

                    {valuationResult ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                          <div className="text-xs text-slate-400 font-mono">Total Estimated Cost</div>
                          <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                            ${valuationResult.estimated_cost_usd?.toLocaleString()} USD
                          </div>
                        </div>

                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                          <div className="text-xs text-slate-400 font-mono">Structural Steel Tonnage</div>
                          <div className="text-2xl font-black text-blue-400 font-mono mt-1">
                            {valuationResult.steel_tons} Tons
                          </div>
                        </div>

                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                          <div className="text-xs text-slate-400 font-mono">Cement Quantity</div>
                          <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                            {valuationResult.cement_bags?.toLocaleString()} Bags
                          </div>
                        </div>

                        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                          <div className="text-xs text-slate-400 font-mono">Carbon Sustainability Rating</div>
                          <div className="text-sm font-bold text-cyan-400 font-mono mt-2">
                            {valuationResult.carbon_rating}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-48 flex items-center justify-center border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs font-mono">
                        Click "Run Valuation Model" to compute real-time estimates.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 5. AI SITE ASSISTANT & KNOWLEDGE RAG CHAT ================= */}
          {activeTab === "assistant" && (
            <div className="max-w-4xl mx-auto h-[650px] flex flex-col space-y-4 animate-fade-in">
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Bot className="w-7 h-7 text-cyan-400" />
                  AI Site Assistant & Knowledge RAG Engine
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  Trained on OSHA 1926 standards, ACI 318 concrete codes, and ISO structural safety frameworks.
                </p>
              </div>

              {/* Chat Window Box */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xl p-4 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/20"
                          : "bg-slate-950 text-slate-200 border border-slate-800"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl text-xs text-slate-400 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span>Retrieving engineering codes...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Prompt Chips & Input Form */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Calculate high-strength concrete mix ratio",
                    "What is OSHA standard for scaffolding height?",
                    "Estimate rebar for 5,000 sq ft slab"
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip)}
                      className="text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full border border-slate-800 transition font-mono"
                    >
                      + {chip}
                    </button>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex space-x-2"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask a question about building specs, concrete ratios, safety codes..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl text-xs font-semibold flex items-center space-x-2 transition shadow-lg shadow-blue-600/20"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}