import React, { useState } from 'react';
import { 
  HardHat, 
  Wrench, 
  Building2, 
  RefreshCw, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Eye, 
  BrainCircuit, 
  Hammer, 
  Zap, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Radio,
  FileCode2,
  Maximize2
} from 'lucide-react';

type TaskStage = 'demolish' | 'clear' | 'construct';

export const AgentEnvironmentDiagram: React.FC = () => {
  const [hasTools, setHasTools] = useState<boolean>(true);
  const [activeStage, setActiveStage] = useState<TaskStage>('demolish');
  const [selectedElement, setSelectedElement] = useState<'agent' | 'tools' | 'environment' | 'perception' | 'action'>('agent');
  const [highlightLoop, setHighlightLoop] = useState<boolean>(false);

  return (
    <div id="agent-environment-diagram-root" className="w-full space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-xl border-3 border-zinc-900 manga-panel flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-comic text-xs px-2.5 py-0.5 rounded bg-zinc-900 text-yellow-300 uppercase">
              CORE FOUNDATIONAL CONCEPT
            </span>
            <span className="font-code text-xs font-bold text-zinc-500">
              Interaction Model: Agent ⇄ Tools ⇄ Environment
            </span>
          </div>
          <h2 className="text-2xl font-black font-code text-zinc-900">
            Agent–Environment Interaction Diagram
          </h2>
          <p className="font-sketch text-sm text-zinc-700 max-w-3xl">
            An AI agent (the person) has reasoning and intent, but possesses <strong>no native ability</strong> to directly mutate physical or digital reality. It <strong>must wield tools</strong> (actuators) to break down legacy monolithic structures and construct new modular systems.
          </p>
        </div>

        {/* Big Interactive Mode Switch: With Tools vs Without Tools */}
        <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
          <div className="flex items-center bg-zinc-100 p-1.5 rounded-xl border-2 border-zinc-900">
            <button
              id="btn-toggle-no-tools"
              onClick={() => setHasTools(false)}
              className={`px-3.5 py-1.5 rounded-lg font-code text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                !hasTools 
                  ? 'bg-red-600 text-white shadow-sm' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              Without Tools (Bare Hands)
            </button>
            <button
              id="btn-toggle-with-tools"
              onClick={() => setHasTools(true)}
              className={`px-3.5 py-1.5 rounded-lg font-code text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                hasTools 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              With Tools (Enabled)
            </button>
          </div>
        </div>
      </div>

      {/* Task Stage Stepper (When Tools are active) */}
      <div className="bg-[#faf8f5] p-4 rounded-xl border-2 border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-code text-xs font-bold uppercase text-zinc-500">
            Active Construction Task:
          </span>
          <span className="font-comic text-sm text-zinc-900">
            {activeStage === 'demolish' && 'Task 1: Breaking Down the Old Monolith'}
            {activeStage === 'clear' && 'Task 2: Clearing Debris & Surveying Ground'}
            {activeStage === 'construct' && 'Task 3: Constructing the Modern Modular Building'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-stage-demolish"
            onClick={() => setActiveStage('demolish')}
            disabled={!hasTools}
            className={`px-3 py-1.5 rounded-lg border-2 font-code text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeStage === 'demolish'
                ? 'bg-amber-400 text-zinc-950 border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            <Hammer className="w-3.5 h-3.5" />
            1. Demolish Old
          </button>
          <button
            id="btn-stage-clear"
            onClick={() => setActiveStage('clear')}
            disabled={!hasTools}
            className={`px-3 py-1.5 rounded-lg border-2 font-code text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeStage === 'clear'
                ? 'bg-amber-400 text-zinc-950 border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            2. Clear &amp; Scan
          </button>
          <button
            id="btn-stage-construct"
            onClick={() => setActiveStage('construct')}
            disabled={!hasTools}
            className={`px-3 py-1.5 rounded-lg border-2 font-code text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeStage === 'construct'
                ? 'bg-amber-400 text-zinc-950 border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-600 border-zinc-300 hover:border-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            3. Construct New
          </button>
        </div>
      </div>

      {/* Main Visual Diagram Canvas (SVG Architectural Art) */}
      <div className="bg-white rounded-xl border-3 border-zinc-900 p-4 md:p-6 manga-panel relative overflow-hidden">
        {/* Background Blueprint Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#18181b 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* SVG Diagram Canvas */}
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 1100 620"
            className="w-full min-w-[900px] h-auto select-none"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            <defs>
              {/* Halftone / Screentone Pattern */}
              <pattern id="diag-dots" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#18181b" opacity="0.12" />
              </pattern>
              <pattern id="diag-hatch" width="8" height="8" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="8" y2="8" stroke="#18181b" strokeWidth="1" opacity="0.15" />
              </pattern>

              {/* Arrow Markers */}
              <marker id="arrow-act" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
              </marker>
              <marker id="arrow-perceive" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
              </marker>
              <marker id="arrow-mutate" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
              </marker>
              <marker id="arrow-blocked" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
              </marker>

              {/* Glow Filter */}
              <filter id="yellow-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#facc15" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* ---------------------------------------------------- */}
            {/* 1. THREE MAIN REGION CONTAINERS & LABELS             */}
            {/* ---------------------------------------------------- */}

            {/* Region 1: THE AGENT (Left) */}
            <g 
              id="svg-region-agent" 
              className="cursor-pointer transition-transform hover:opacity-95"
              onClick={() => setSelectedElement('agent')}
            >
              <rect
                x="30"
                y="60"
                width="280"
                height="500"
                rx="16"
                fill="#fffdfa"
                stroke={selectedElement === 'agent' ? '#18181b' : '#3f3f46'}
                strokeWidth={selectedElement === 'agent' ? '4' : '3'}
                strokeDasharray={selectedElement === 'agent' ? undefined : '6 3'}
              />
              {/* Region Header Tag */}
              <rect x="50" y="45" width="240" height="30" rx="6" fill="#18181b" />
              <text x="170" y="65" textAnchor="middle" fill="#facc15" fontSize="14" fontWeight="900" fontFamily="monospace">
                1. THE AI AGENT
              </text>
              <text x="170" y="98" textAnchor="middle" fill="#71717a" fontSize="11" fontWeight="bold" fontFamily="monospace">
                (Person / Model + Operational Harness)
              </text>
            </g>

            {/* Region 2: THE TOOLS (Center) */}
            <g 
              id="svg-region-tools"
              className="cursor-pointer transition-transform hover:opacity-95"
              onClick={() => setSelectedElement('tools')}
            >
              <rect
                x="350"
                y="60"
                width="310"
                height="500"
                rx="16"
                fill={hasTools ? '#fbfdfa' : '#fef2f2'}
                stroke={!hasTools ? '#dc2626' : selectedElement === 'tools' ? '#18181b' : '#3f3f46'}
                strokeWidth={selectedElement === 'tools' || !hasTools ? '4' : '3'}
              />
              {/* Region Header Tag */}
              <rect x="375" y="45" width="260" height="30" rx="6" fill={hasTools ? '#18181b' : '#dc2626'} />
              <text x="505" y="65" textAnchor="middle" fill={hasTools ? '#facc15' : '#ffffff'} fontSize="14" fontWeight="900" fontFamily="monospace">
                2. THE TOOLS (ACTUATORS)
              </text>
              <text x="505" y="98" textAnchor="middle" fill={hasTools ? '#059669' : '#dc2626'} fontSize="11" fontWeight="bold" fontFamily="monospace">
                {hasTools ? '(The Indispensable Intermediary Bridge)' : '❌ TOOLS DISCONNECTED (NO BRIDGE)'}
              </text>
            </g>

            {/* Region 3: THE ENVIRONMENT (Right) */}
            <g 
              id="svg-region-environment"
              className="cursor-pointer transition-transform hover:opacity-95"
              onClick={() => setSelectedElement('environment')}
            >
              <rect
                x="700"
                y="60"
                width="370"
                height="500"
                rx="16"
                fill="#f8fafc"
                stroke={selectedElement === 'environment' ? '#18181b' : '#3f3f46'}
                strokeWidth={selectedElement === 'environment' ? '4' : '3'}
                strokeDasharray={selectedElement === 'environment' ? undefined : '6 3'}
              />
              {/* Region Header Tag */}
              <rect x="730" y="45" width="310" height="30" rx="6" fill="#18181b" />
              <text x="885" y="65" textAnchor="middle" fill="#facc15" fontSize="14" fontWeight="900" fontFamily="monospace">
                3. THE ENVIRONMENT
              </text>
              <text x="885" y="98" textAnchor="middle" fill="#71717a" fontSize="11" fontWeight="bold" fontFamily="monospace">
                (External Reality / Old Monolith ➔ New Building)
              </text>
            </g>

            {/* ---------------------------------------------------- */}
            {/* INSIDE REGION 1: THE AGENT (PERSON) DRAWING          */}
            {/* ---------------------------------------------------- */}
            <g id="agent-character-group" transform="translate(60, 115)">
              {/* Cognitive Bubble / LLM Reasoning Mind */}
              <g id="agent-mind-bubble">
                <rect x="15" y="10" width="190" height="110" rx="14" fill="#fefce8" stroke="#18181b" strokeWidth="2.5" />
                <path d="M 90 120 L 100 135 L 110 120 Z" fill="#fefce8" stroke="#18181b" strokeWidth="2" />
                
                <text x="110" y="32" textAnchor="middle" fill="#854d0e" fontSize="11" fontWeight="900" fontFamily="monospace">
                  COGNITIVE BRAIN (LLM)
                </text>
                <text x="110" y="52" textAnchor="middle" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Intent: "Clear old brick;
                </text>
                <text x="110" y="70" textAnchor="middle" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Erect modular frame"
                </text>
                <rect x="30" y="82" width="160" height="24" rx="4" fill="#eab308" stroke="#18181b" strokeWidth="1.5" />
                <text x="110" y="98" textAnchor="middle" fill="#18181b" fontSize="10" fontWeight="900" fontFamily="monospace">
                  {hasTools ? 'STATUS: Planning Tool Calls' : 'STATUS: Helpless (No Tools!)'}
                </text>
              </g>

              {/* The Person (Master Builder with Hardhat, Vest, Blueprint) */}
              <g id="person-figure" transform="translate(65, 140)">
                {/* Yellow Hardhat */}
                <path d="M 25 35 Q 45 10 65 35 Z" fill="#facc15" stroke="#18181b" strokeWidth="3" />
                <path d="M 20 35 L 70 35 L 75 40 L 15 40 Z" fill="#eab308" stroke="#18181b" strokeWidth="2.5" />
                <rect x="42" y="18" width="6" height="8" rx="2" fill="#ffffff" opacity="0.6" />

                {/* Head & Face */}
                <circle cx="45" cy="50" r="16" fill="#fde68a" stroke="#18181b" strokeWidth="3" />
                {/* Determined Eyes */}
                <circle cx="40" cy="48" r="2.5" fill="#18181b" />
                <circle cx="52" cy="48" r="2.5" fill="#18181b" />
                {/* Smile / Mouth */}
                {hasTools ? (
                  <path d="M 40 56 Q 45 61 50 56" stroke="#18181b" strokeWidth="2" fill="none" />
                ) : (
                  <path d="M 40 58 Q 45 53 50 58" stroke="#dc2626" strokeWidth="2" fill="none" />
                )}

                {/* Body / Torso with High-Vis Construction Vest */}
                <path d="M 25 70 L 65 70 L 72 135 L 18 135 Z" fill="#f97316" stroke="#18181b" strokeWidth="3" />
                {/* Vest Reflective Stripes */}
                <line x1="32" y1="70" x2="30" y2="135" stroke="#ffffff" strokeWidth="4" />
                <line x1="58" y1="70" x2="60" y2="135" stroke="#ffffff" strokeWidth="4" />
                <line x1="22" y1="105" x2="68" y2="105" stroke="#ffffff" strokeWidth="3.5" />

                {/* Legs & Steel-Toe Boots */}
                <line x1="33" y1="135" x2="33" y2="195" stroke="#18181b" strokeWidth="8" strokeLinecap="round" />
                <line x1="57" y1="135" x2="57" y2="195" stroke="#18181b" strokeWidth="8" strokeLinecap="round" />
                <rect x="23" y="195" width="20" height="12" rx="4" fill="#3f3f46" stroke="#18181b" strokeWidth="2.5" />
                <rect x="47" y="195" width="20" height="12" rx="4" fill="#3f3f46" stroke="#18181b" strokeWidth="2.5" />

                {/* Arms & Hands */}
                {hasTools ? (
                  <>
                    {/* Left Arm holding Blueprint Roll / Tablet */}
                    <path d="M 25 75 Q 8 95 18 115" stroke="#18181b" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <rect x="8" y="105" width="22" height="28" rx="3" fill="#38bdf8" stroke="#18181b" strokeWidth="2" />
                    <text x="19" y="122" textAnchor="middle" fill="#0c4a6e" fontSize="7" fontWeight="bold" fontFamily="monospace">PLAN</text>
                    
                    {/* Right Arm Reaching to Toolbelt & Dispatching */}
                    <path d="M 65 75 Q 90 90 100 110" stroke="#18181b" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <circle cx="102" cy="112" r="7" fill="#fde68a" stroke="#18181b" strokeWidth="2" />
                  </>
                ) : (
                  <>
                    {/* Disappointed / Helpless Shrug Arms */}
                    <path d="M 25 75 Q 0 65 5 95" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <circle cx="5" cy="98" r="6" fill="#fde68a" stroke="#dc2626" strokeWidth="2" />
                    <path d="M 65 75 Q 95 65 85 95" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <circle cx="85" cy="98" r="6" fill="#fde68a" stroke="#dc2626" strokeWidth="2" />
                  </>
                )}
              </g>

              {/* Agent Harness & Dispatcher Box */}
              <g id="agent-harness-box" transform="translate(15, 360)">
                <rect x="0" y="0" width="190" height="65" rx="8" fill="#18181b" />
                <text x="95" y="20" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  OPERATIONAL HARNESS
                </text>
                <text x="95" y="38" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">
                  • System Prompt &amp; Memory
                </text>
                <text x="95" y="52" textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="monospace">
                  • Tool Declarations Schema
                </text>
              </g>
            </g>

            {/* ---------------------------------------------------- */}
            {/* INSIDE REGION 2: THE TOOLS (ACTUATORS)               */}
            {/* ---------------------------------------------------- */}
            {hasTools ? (
              <g id="tools-container-group" transform="translate(365, 115)">
                {/* Standardized Tool Socket Label */}
                <rect x="15" y="0" width="250" height="32" rx="6" fill="#047857" stroke="#18181b" strokeWidth="2" />
                <text x="140" y="21" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  UNIVERSAL TOOL SOCKET (MCP)
                </text>

                {/* Tool 1: Demolition Jackhammer & Sledge (Demolition) */}
                <g 
                  id="tool-jackhammer"
                  className="cursor-pointer"
                  transform="translate(15, 45)"
                  onClick={() => setActiveStage('demolish')}
                >
                  <rect 
                    x="0" 
                    y="0" 
                    width="250" 
                    height="90" 
                    rx="8" 
                    fill={activeStage === 'demolish' ? '#fef3c7' : '#ffffff'} 
                    stroke={activeStage === 'demolish' ? '#b45309' : '#d4d4d8'} 
                    strokeWidth={activeStage === 'demolish' ? '3' : '1.5'} 
                  />
                  {/* Pneumatic Jackhammer & Sledge Illustration */}
                  <g transform="translate(15, 12)">
                    <rect x="5" y="8" width="14" height="24" rx="3" fill="#dc2626" stroke="#18181b" strokeWidth="2" />
                    <rect x="9" y="32" width="6" height="28" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                    <line x1="2" y1="8" x2="22" y2="8" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
                    {/* Impact Vibration lines */}
                    {activeStage === 'demolish' && (
                      <g stroke="#b45309" strokeWidth="1.5">
                        <line x1="4" y1="55" x2="0" y2="58" />
                        <line x1="20" y1="55" x2="24" y2="58" />
                        <line x1="2" y1="62" x2="-2" y2="66" />
                        <line x1="22" y1="62" x2="26" y2="66" />
                      </g>
                    )}
                  </g>
                  <text x="50" y="28" fill="#18181b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    1. Demolition Tools
                  </text>
                  <text x="50" y="46" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                    Pneumatic Breaker &amp; Sledge
                  </text>
                  <text x="50" y="62" fill="#b45309" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                    Role: Shatters rigid monoliths
                  </text>
                  <text x="50" y="76" fill="#52525b" fontSize="9" fontFamily="monospace">
                    Payload: dem_wall(id="north", 120kN)
                  </text>
                </g>

                {/* Tool 2: Heavy Excavator & Laser Level (Clearing & Surveying) */}
                <g 
                  id="tool-excavator"
                  className="cursor-pointer"
                  transform="translate(15, 148)"
                  onClick={() => setActiveStage('clear')}
                >
                  <rect 
                    x="0" 
                    y="0" 
                    width="250" 
                    height="90" 
                    rx="8" 
                    fill={activeStage === 'clear' ? '#fef3c7' : '#ffffff'} 
                    stroke={activeStage === 'clear' ? '#b45309' : '#d4d4d8'} 
                    strokeWidth={activeStage === 'clear' ? '3' : '1.5'} 
                  />
                  {/* Excavator Claw & Laser Scanner */}
                  <g transform="translate(12, 16)">
                    <rect x="0" y="25" width="26" height="16" rx="3" fill="#eab308" stroke="#18181b" strokeWidth="2" />
                    <line x1="18" y1="25" x2="28" y2="8" stroke="#18181b" strokeWidth="3" />
                    <line x1="28" y1="8" x2="36" y2="20" stroke="#18181b" strokeWidth="3" />
                    <path d="M 33 20 L 38 28 L 30 28 Z" fill="#475569" stroke="#18181b" strokeWidth="1.5" />
                    <circle cx="8" cy="44" r="4" fill="#3f3f46" />
                    <circle cx="18" cy="44" r="4" fill="#3f3f46" />
                  </g>
                  <text x="60" y="28" fill="#18181b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    2. Excavator &amp; Scanner
                  </text>
                  <text x="60" y="46" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                    Hydraulic Claw &amp; LiDAR Scan
                  </text>
                  <text x="60" y="62" fill="#0284c7" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                    Role: Clears rubble &amp; scans lot
                  </text>
                  <text x="60" y="76" fill="#52525b" fontSize="9" fontFamily="monospace">
                    Payload: excavate(debris=45tons)
                  </text>
                </g>

                {/* Tool 3: Tower Crane & Concrete Erector (Construction) */}
                <g 
                  id="tool-crane"
                  className="cursor-pointer"
                  transform="translate(15, 250)"
                  onClick={() => setActiveStage('construct')}
                >
                  <rect 
                    x="0" 
                    y="0" 
                    width="250" 
                    height="90" 
                    rx="8" 
                    fill={activeStage === 'construct' ? '#fef3c7' : '#ffffff'} 
                    stroke={activeStage === 'construct' ? '#b45309' : '#d4d4d8'} 
                    strokeWidth={activeStage === 'construct' ? '3' : '1.5'} 
                  />
                  {/* Tower Crane Illustration */}
                  <g transform="translate(14, 10)">
                    <line x1="12" y1="5" x2="12" y2="55" stroke="#d97706" strokeWidth="3" />
                    <line x1="0" y1="12" x2="35" y2="12" stroke="#d97706" strokeWidth="2.5" />
                    <line x1="28" y1="12" x2="28" y2="35" stroke="#18181b" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="23" y="35" width="10" height="6" fill="#0284c7" stroke="#18181b" strokeWidth="1" />
                  </g>
                  <text x="56" y="28" fill="#18181b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    3. Crane &amp; Erector
                  </text>
                  <text x="56" y="46" fill="#71717a" fontSize="10" fontFamily="sans-serif">
                    Tower Crane &amp; Modular Rig
                  </text>
                  <text x="56" y="62" fill="#16a34a" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
                    Role: Assembles modern beams
                  </text>
                  <text x="56" y="76" fill="#52525b" fontSize="9" fontFamily="monospace">
                    Payload: hoist_beam(floor=4)
                  </text>
                </g>

                {/* Sub-label banner */}
                <rect x="15" y="355" width="250" height="70" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
                <text x="140" y="375" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  WHY TOOLS ARE ESSENTIAL
                </text>
                <text x="140" y="392" textAnchor="middle" fill="#047857" fontSize="9.5" fontFamily="sans-serif">
                  "Tools turn abstract words &amp; tokens
                </text>
                <text x="140" y="408" textAnchor="middle" fill="#047857" fontSize="9.5" fontFamily="sans-serif">
                  into real-world physical and digital state changes."
                </text>
              </g>
            ) : (
              /* Without Tools: Big Red Warning Zone */
              <g id="no-tools-warning" transform="translate(365, 160)">
                <rect x="15" y="20" width="250" height="300" rx="12" fill="#fff1f2" stroke="#dc2626" strokeWidth="3" />
                <circle cx="140" cy="90" r="36" fill="#fecdd3" stroke="#dc2626" strokeWidth="3" />
                <text x="140" y="98" textAnchor="middle" fill="#dc2626" fontSize="32" fontWeight="black" fontFamily="monospace">
                  ✕
                </text>
                <text x="140" y="160" textAnchor="middle" fill="#991b1b" fontSize="15" fontWeight="900" fontFamily="monospace">
                  NO TOOLS AVAILABLE
                </text>
                <text x="140" y="185" textAnchor="middle" fill="#b91c1c" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  The Agent Cannot Touch Reality
                </text>
                <text x="140" y="215" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontFamily="sans-serif">
                  Talking alone cannot break bricks.
                </text>
                <text x="140" y="232" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontFamily="sans-serif">
                  Reasoning without actuators
                </text>
                <text x="140" y="249" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontFamily="sans-serif">
                  leaves the environment untouched!
                </text>
                
                <rect x="35" y="275" width="210" height="32" rx="6" fill="#dc2626" />
                <text x="140" y="295" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  0% STATE MUTATION
                </text>
              </g>
            )}

            {/* ---------------------------------------------------- */}
            {/* INSIDE REGION 3: THE ENVIRONMENT DRAWING             */}
            {/* ---------------------------------------------------- */}
            <g id="environment-container-group" transform="translate(715, 115)">
              {/* Task 1: Old Monolith Building (Demolition Target) */}
              <g 
                id="env-old-building"
                transform="translate(10, 10)"
                className="transition-all"
                opacity={activeStage === 'demolish' ? '1' : activeStage === 'clear' ? '0.35' : '0.15'}
              >
                <rect x="0" y="0" width="160" height="230" fill="#e4e4e7" stroke="#18181b" strokeWidth="2.5" />
                {/* Brick Pattern */}
                <line x1="0" y1="40" x2="160" y2="40" stroke="#a1a1aa" strokeWidth="1" />
                <line x1="0" y1="80" x2="160" y2="80" stroke="#a1a1aa" strokeWidth="1" />
                <line x1="0" y1="120" x2="160" y2="120" stroke="#a1a1aa" strokeWidth="1" />
                <line x1="0" y1="160" x2="160" y2="160" stroke="#a1a1aa" strokeWidth="1" />
                <line x1="0" y1="200" x2="160" y2="200" stroke="#a1a1aa" strokeWidth="1" />

                {/* Old Dark Windows */}
                <rect x="20" y="15" width="25" height="20" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                <rect x="65" y="15" width="25" height="20" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                <rect x="110" y="15" width="25" height="20" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                
                <rect x="20" y="55" width="25" height="20" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                <rect x="65" y="55" width="25" height="20" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                <rect x="110" y="55" width="25" height="20" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />

                {/* Huge Cracks across Monolith */}
                <path d="M 40 0 L 55 45 L 35 75 L 70 125 L 50 160 L 80 230" stroke="#dc2626" strokeWidth="3" fill="none" />
                <path d="M 120 40 L 105 75 L 125 110 L 115 170" stroke="#dc2626" strokeWidth="2.5" fill="none" />

                {/* Status Tag */}
                <rect x="15" y="195" width="130" height="24" rx="4" fill="#18181b" />
                <text x="80" y="211" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  OLD MONOLITH (Target)
                </text>
              </g>

              {/* Task 3: New Modern Modular Building (Construction Goal) */}
              <g 
                id="env-new-building"
                transform="translate(180, 10)"
                className="transition-all"
                opacity={activeStage === 'construct' ? '1' : activeStage === 'clear' ? '0.6' : '0.2'}
              >
                {/* Modern Steel & Glass Tower */}
                <rect x="0" y="0" width="150" height="230" fill="#e0f2fe" stroke="#18181b" strokeWidth="2.5" />
                {/* Glass Grid */}
                <line x1="0" y1="30" x2="150" y2="30" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="0" y1="65" x2="150" y2="65" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="0" y1="100" x2="150" y2="100" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="0" y1="135" x2="150" y2="135" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="0" y1="170" x2="150" y2="170" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="0" y1="205" x2="150" y2="205" stroke="#0284c7" strokeWidth="1.5" />

                <line x1="38" y1="0" x2="38" y2="230" stroke="#0284c7" strokeWidth="1" />
                <line x1="75" y1="0" x2="75" y2="230" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="112" y1="0" x2="112" y2="230" stroke="#0284c7" strokeWidth="1" />

                {/* Rooftop Solar Grid & Antenna */}
                <rect x="20" y="-12" width="110" height="12" rx="2" fill="#0369a1" stroke="#18181b" strokeWidth="1.5" />
                <line x1="75" y1="-12" x2="75" y2="-25" stroke="#18181b" strokeWidth="2" />
                <circle cx="75" cy="-27" r="3" fill="#22c55e" />

                {/* Status Tag */}
                <rect x="10" y="195" width="130" height="24" rx="4" fill="#18181b" />
                <text x="75" y="211" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  NEW MODULAR (Goal)
                </text>
              </g>

              {/* Ground Debris & Soil Trench Zone */}
              <g id="env-ground-rubble" transform="translate(10, 255)">
                <rect x="0" y="0" width="320" height="90" rx="8" fill="#f4f4f5" stroke="#18181b" strokeWidth="2" />
                <text x="160" y="22" textAnchor="middle" fill="#18181b" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  SITE LOT &amp; FOUNDATION BED
                </text>

                {/* Rubble Piles */}
                {activeStage === 'demolish' && (
                  <g>
                    <polygon points="20,75 50,45 80,75" fill="#a1a1aa" stroke="#18181b" strokeWidth="1.5" />
                    <polygon points="65,75 95,50 125,75" fill="#71717a" stroke="#18181b" strokeWidth="1.5" />
                    <circle cx="140" cy="70" r="6" fill="#52525b" />
                    <circle cx="155" cy="72" r="4" fill="#71717a" />
                    <text x="160" y="44" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      [State: 75 Tons Concrete Debris]
                    </text>
                  </g>
                )}

                {activeStage === 'clear' && (
                  <g>
                    <line x1="20" y1="65" x2="300" y2="65" stroke="#0284c7" strokeWidth="3" strokeDasharray="6 3" />
                    <text x="160" y="45" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      [State: Site Leveled &amp; Scanned (99.8% Clean)]
                    </text>
                    <text x="160" y="78" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="monospace">
                      Ready for structural foundation footings
                    </text>
                  </g>
                )}

                {activeStage === 'construct' && (
                  <g>
                    <rect x="30" y="55" width="260" height="15" rx="3" fill="#22c55e" stroke="#18181b" strokeWidth="2" />
                    <text x="160" y="45" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      [State: Reinforced Foundation Set &amp; Erected]
                    </text>
                  </g>
                )}
              </g>

              {/* State Monitor Box */}
              <rect x="10" y="355" width="320" height="70" rx="8" fill="#18181b" />
              <text x="170" y="375" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace">
                ENVIRONMENT STATE TELEMETRY
              </text>
              <text x="170" y="393" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">
                {activeStage === 'demolish' && 'Structure: Old Brick | Stability: 24% (Failing)'}
                {activeStage === 'clear' && 'Structure: Level Lot | Laser Deviation: ±0.2mm'}
                {activeStage === 'construct' && 'Structure: Modern Steel | Assembly: 100% Ready'}
              </text>
              <text x="170" y="410" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">
                Output feeds directly into Perception Loop ➔
              </text>
            </g>

            {/* ---------------------------------------------------- */}
            {/* 4. THE INTERACTION FLOW LOOPS (ARROWS & LABELS)      */}
            {/* ---------------------------------------------------- */}

            {hasTools ? (
              <>
                {/* Loop 1: AGENT -> TOOLS (Action / Tool Call) */}
                <g id="flow-agent-to-tools" className="transition-opacity">
                  <path
                    d="M 310 230 L 348 230"
                    stroke="#d97706"
                    strokeWidth="4"
                    strokeDasharray="6 3"
                    markerEnd="url(#arrow-act)"
                  />
                  <rect x="280" y="195" width="100" height="24" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                  <text x="330" y="211" textAnchor="middle" fill="#92400e" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                    ① TOOL CALL
                  </text>
                </g>

                {/* Loop 2: TOOLS -> ENVIRONMENT (Physical Mutation) */}
                <g id="flow-tools-to-env">
                  <path
                    d="M 660 230 L 698 230"
                    stroke="#16a34a"
                    strokeWidth="4"
                    strokeDasharray="6 3"
                    markerEnd="url(#arrow-mutate)"
                  />
                  <rect x="635" y="195" width="90" height="24" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                  <text x="680" y="211" textAnchor="middle" fill="#166534" fontSize="9.5" fontWeight="900" fontFamily="monospace">
                    ② MUTATION
                  </text>
                </g>

                {/* Loop 3: ENVIRONMENT -> AGENT (Perception / Feedback Observation) */}
                <g id="flow-env-to-agent-perception">
                  <path
                    d="M 860 560 L 860 595 L 180 595 L 180 562"
                    stroke="#2563eb"
                    strokeWidth="4"
                    strokeDasharray="8 4"
                    fill="none"
                    markerEnd="url(#arrow-perceive)"
                  />
                  <rect x="440" y="580" width="220" height="30" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                  <text x="550" y="600" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="900" fontFamily="monospace">
                    ③ PERCEPTION / SENSORY FEEDBACK
                  </text>
                </g>
              </>
            ) : (
              /* Without Tools: The Blocked Red Arrow */
              <g id="flow-blocked-attempt">
                <path
                  d="M 310 260 L 480 260"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-blocked)"
                />
                <rect x="330" y="275" width="170" height="28" rx="5" fill="#dc2626" />
                <text x="415" y="294" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="monospace">
                  BLOCKED: CANNOT TOUCH REALITY
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Dynamic Legend / Footnote */}
        <div className="mt-4 pt-4 border-t-2 border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs font-code">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-800">
              <span className="w-3 h-3 rounded bg-amber-500 inline-block"></span>
              ① Action / Tool Call (Agent ➔ Tool)
            </span>
            <span className="flex items-center gap-1.5 text-emerald-800">
              <span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span>
              ② Mutation (Tool ➔ Environment)
            </span>
            <span className="flex items-center gap-1.5 text-blue-800">
              <span className="w-3 h-3 rounded bg-blue-500 inline-block"></span>
              ③ Perception (Environment ➔ Agent)
            </span>
          </div>

          <div className="text-zinc-600 font-sketch">
            Click any region in the diagram above to inspect details below
          </div>
        </div>
      </div>

      {/* Deep-Dive Inspection Cards: The 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: The Agent */}
        <div 
          onClick={() => setSelectedElement('agent')}
          className={`bg-white rounded-xl border-3 p-5 manga-panel cursor-pointer transition-all ${
            selectedElement === 'agent' ? 'border-zinc-900 ring-2 ring-yellow-400' : 'border-zinc-300 hover:border-zinc-600'
          }`}
        >
          <div className="flex items-center justify-between border-b-2 border-zinc-200 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-yellow-100 border border-yellow-300">
                <HardHat className="w-5 h-5 text-yellow-700" />
              </div>
              <h3 className="font-code text-base font-black text-zinc-900">
                1. The Agent (The Person)
              </h3>
            </div>
            <span className="font-comic text-xs px-2 py-0.5 rounded bg-zinc-900 text-yellow-300">
              BRAIN
            </span>
          </div>

          <p className="font-sketch text-sm text-zinc-700 leading-relaxed mb-3">
            Represented as the master builder on site. The agent possesses <strong>intent, planning capabilities, and goal decomposition</strong>, but lives purely in memory as a statistical cognitive model.
          </p>

          <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-200 space-y-1 text-xs font-code">
            <span className="text-zinc-500 block font-bold">CORE CHARACTERISTICS:</span>
            <p className="text-zinc-800">• Formulates structured actions based on prompt objectives.</p>
            <p className="text-zinc-800">• Has zero direct system permissions or physical force.</p>
            <p className="text-zinc-800">• Operates in a continuous loop: Sense ➔ Reason ➔ Act.</p>
          </div>
        </div>

        {/* Card 2: The Tools */}
        <div 
          onClick={() => setSelectedElement('tools')}
          className={`bg-white rounded-xl border-3 p-5 manga-panel cursor-pointer transition-all ${
            selectedElement === 'tools' ? 'border-zinc-900 ring-2 ring-amber-400' : 'border-zinc-300 hover:border-zinc-600'
          }`}
        >
          <div className="flex items-center justify-between border-b-2 border-zinc-200 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-100 border border-amber-300">
                <Wrench className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-code text-base font-black text-zinc-900">
                2. The Tools (Actuators)
              </h3>
            </div>
            <span className="font-comic text-xs px-2 py-0.5 rounded bg-amber-600 text-white">
              BRIDGE
            </span>
          </div>

          <p className="font-sketch text-sm text-zinc-700 leading-relaxed mb-3">
            The indispensable intermediary bridge. Jackhammers, excavators, and cranes that translate semantic JSON tool declarations into <strong>irreversible physical or digital effects</strong>.
          </p>

          <div className="bg-amber-50/70 p-3 rounded-lg border border-amber-200 space-y-1 text-xs font-code">
            <span className="text-amber-900 block font-bold">WHY ESSENTIAL:</span>
            <p className="text-amber-950">• Without tools, an agent is just a passive chatbot.</p>
            <p className="text-amber-950">• Standardized via Model Context Protocol (MCP).</p>
            <p className="text-amber-950">• Deterministic, bounded, and auditable operations.</p>
          </div>
        </div>

        {/* Card 3: The Environment */}
        <div 
          onClick={() => setSelectedElement('environment')}
          className={`bg-white rounded-xl border-3 p-5 manga-panel cursor-pointer transition-all ${
            selectedElement === 'environment' ? 'border-zinc-900 ring-2 ring-emerald-400' : 'border-zinc-300 hover:border-zinc-600'
          }`}
        >
          <div className="flex items-center justify-between border-b-2 border-zinc-200 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-emerald-100 border border-emerald-300">
                <Building2 className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-code text-base font-black text-zinc-900">
                3. The Environment
              </h3>
            </div>
            <span className="font-comic text-xs px-2 py-0.5 rounded bg-emerald-700 text-white">
              WORLD
            </span>
          </div>

          <p className="font-sketch text-sm text-zinc-700 leading-relaxed mb-3">
            The external system undergoing transformation. From the <strong>brittle, cracked legacy monolithic building</strong> to the <strong>clean, modern modular architectural system</strong>.
          </p>

          <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-200 space-y-1 text-xs font-code">
            <span className="text-emerald-900 block font-bold">TARGET WORKFLOW:</span>
            <p className="text-emerald-950">• Phase 1: Breaking down legacy monolith walls.</p>
            <p className="text-emerald-950">• Phase 2: Clearing rubble and scanning foundations.</p>
            <p className="text-emerald-950">• Phase 3: Constructing resilient modular components.</p>
          </div>
        </div>
      </div>

      {/* The Core Architectural Takeaway Panel */}
      <div className="bg-zinc-900 text-white p-6 rounded-xl border-3 border-zinc-900 manga-panel space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h4 className="font-code text-base font-bold text-yellow-300 uppercase">
            Architectural Principle for Engineering Teams:
          </h4>
        </div>
        <p className="font-sketch text-sm text-zinc-300 leading-relaxed">
          In agentic systems, <strong>Agent = Model + Harness + Tools</strong>. An LLM cannot delete a row in PostgreSQL, write a file to disk, or demolish a wall by thinking about it. Tools are the actuators that grant the agent agency. The protocol standards (MCP for local tools, A2A for specialist subcontractors, UCP for commerce, AP2 for payments) provide the structural scaffolding to make these interactions safe, predictable, and robust.
        </p>
      </div>
    </div>
  );
};
