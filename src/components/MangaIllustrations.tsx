import React from 'react';

interface MangaIllustrationProps {
  id: string;
  className?: string;
}

export const MangaIllustration: React.FC<MangaIllustrationProps> = ({ id, className = 'w-full h-64' }) => {
  switch (id) {
    case 'model-thinking-alone':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dots-1" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#d4cec3" />
            </pattern>
            <pattern id="screentone-1" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#18181b" opacity="0.15" />
            </pattern>
          </defs>

          {/* Paper background grid */}
          <rect width="600" height="360" fill="url(#grid-dots-1)" />

          {/* Ground line */}
          <line x1="20" y1="300" x2="580" y2="300" stroke="#18181b" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M40 310 L560 310" stroke="#71717a" strokeWidth="1" />

          {/* Old Crumbling Wall in background */}
          <g transform="translate(380, 80)">
            <rect x="0" y="0" width="180" height="220" fill="#e4ded5" stroke="#18181b" strokeWidth="3.5" />
            <rect x="0" y="0" width="180" height="220" fill="url(#screentone-1)" />
            {/* Cracks */}
            <path d="M30 40 L60 90 L45 130 L70 170" fill="none" stroke="#18181b" strokeWidth="3" />
            <path d="M120 10 L100 60 L130 110 L115 180" fill="none" stroke="#18181b" strokeWidth="2.5" />
            <path d="M80 150 L110 200" fill="none" stroke="#18181b" strokeWidth="2" />
            <text x="30" y="210" className="font-sketch" fontSize="14" fill="#52525b">OLD MONOLITH (100 YRS)</text>
          </g>

          {/* Master Builder Character (Kenji / Model) standing alone */}
          <g transform="translate(140, 100)">
            {/* Hardhat */}
            <path d="M60 45 C45 45 35 25 60 20 C85 25 75 45 60 45 Z" fill="#fbbf24" stroke="#18181b" strokeWidth="3" />
            <path d="M30 45 Q60 40 90 45" stroke="#18181b" strokeWidth="3" fill="none" />
            {/* Head */}
            <circle cx="60" cy="65" r="22" fill="#fff" stroke="#18181b" strokeWidth="3" />
            {/* Determined face */}
            <path d="M48 62 L55 64" stroke="#18181b" strokeWidth="2.5" />
            <path d="M65 64 L72 62" stroke="#18181b" strokeWidth="2.5" />
            <path d="M52 75 Q60 70 68 75" stroke="#18181b" strokeWidth="2" fill="none" />
            {/* Body */}
            <path d="M60 88 L60 160" stroke="#18181b" strokeWidth="4" />
            {/* Arms tied behind back / no tools */}
            <path d="M60 105 L35 130 L60 145" stroke="#18181b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M60 105 L85 130 L60 145" stroke="#18181b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Legs */}
            <path d="M60 160 L40 200" stroke="#18181b" strokeWidth="4" />
            <path d="M60 160 L80 200" stroke="#18181b" strokeWidth="4" />

            {/* Label badge */}
            <rect x="15" y="105" width="90" height="24" rx="4" fill="#fef08a" stroke="#18181b" strokeWidth="2" />
            <text x="60" y="121" textAnchor="middle" className="font-code text-xs font-bold" fill="#18181b">MODEL ALONE</text>
          </g>

          {/* Thought Bubble with Complex Blueprint */}
          <g transform="translate(180, 20)">
            <path d="M40 70 Q10 50 20 25 Q35 0 80 10 Q140 -5 180 20 Q210 40 190 70 Q160 95 100 85 Q60 95 40 70 Z" fill="#eff6ff" stroke="#18181b" strokeWidth="2.5" />
            <circle cx="25" cy="85" r="5" fill="#eff6ff" stroke="#18181b" strokeWidth="2" />
            <circle cx="15" cy="98" r="3" fill="#eff6ff" stroke="#18181b" strokeWidth="1.5" />

            {/* Inside the thought: complex blueprint */}
            <rect x="50" y="18" width="115" height="50" fill="#1e3a8a" stroke="#93c5fd" strokeWidth="1.5" />
            <line x1="60" y1="28" x2="155" y2="28" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="60" y1="42" x2="155" y2="42" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />
            <text x="107" y="58" textAnchor="middle" className="font-sketch" fontSize="11" fill="#e0f2fe">PERFECT BLUEPRINT IN MIND</text>
          </g>

          {/* Manga Sound Effect */}
          <text x="70" y="60" className="font-comic text-4xl" fill="#dc2626">ゴゴゴゴ...</text>
          <text x="70" y="80" className="font-sketch text-xs text-zinc-600">(Intense internal reasoning, zero actuators!)</text>

          {/* Warning sign */}
          <g transform="translate(30, 220)">
            <rect x="0" y="0" width="130" height="48" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="65" y="20" textAnchor="middle" className="font-code text-xs font-bold" fill="#b91c1c">OPERATIONAL REACH: 0</text>
            <text x="65" y="38" textAnchor="middle" className="font-sketch text-xs" fill="#7f1d1d">Cannot touch physical matter</text>
          </g>
        </svg>
      );

    case 'bare-hands-punch':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="screentone-punch" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#18181b" opacity="0.2" />
            </pattern>
          </defs>

          {/* Action speed lines */}
          <path d="M20 180 L220 180 M50 140 L240 170 M40 220 L230 190 M10 100 L250 160" stroke="#18181b" strokeWidth="2" strokeDasharray="12 8" opacity="0.6" />

          {/* Giant Impassive Brick Wall */}
          <rect x="340" y="20" width="230" height="310" fill="#d4d4d8" stroke="#18181b" strokeWidth="4" />
          <rect x="340" y="20" width="230" height="310" fill="url(#screentone-punch)" />
          {/* Brick lines */}
          <line x1="340" y1="80" x2="570" y2="80" stroke="#18181b" strokeWidth="2" />
          <line x1="340" y1="140" x2="570" y2="140" stroke="#18181b" strokeWidth="2" />
          <line x1="340" y1="200" x2="570" y2="200" stroke="#18181b" strokeWidth="2" />
          <line x1="340" y1="260" x2="570" y2="260" stroke="#18181b" strokeWidth="2" />

          {/* Impact Point on Wall: ZERO DAMAGE STAMP */}
          <g transform="translate(340, 160)">
            {/* Impact star burst */}
            <polygon points="-15,-30 0,-15 25,-25 15,0 35,20 5,15 -10,35 -15,10 -35,5 -15,-5" fill="#fef08a" stroke="#18181b" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="18" fill="#ef4444" stroke="#18181b" strokeWidth="2" />
            <text x="0" y="5" textAnchor="middle" className="font-comic text-xs" fill="#fff">0 DMG</text>
          </g>

          {/* Kenji Punching Forward & Hurting Hand */}
          <g transform="translate(180, 100)">
            {/* Hardhat askew */}
            <path d="M40 30 C25 30 20 10 45 5 C70 10 65 30 40 30 Z" fill="#fbbf24" stroke="#18181b" strokeWidth="3" transform="rotate(-15 40 20)" />
            {/* Screaming Head */}
            <circle cx="45" cy="50" r="22" fill="#fff" stroke="#18181b" strokeWidth="3" />
            {/* Agonized face */}
            <path d="M35 45 L42 48 M52 48 L58 44" stroke="#18181b" strokeWidth="3" />
            {/* Open screaming mouth */}
            <ellipse cx="46" cy="60" rx="9" ry="6" fill="#18181b" />
            {/* Sweat drops flying */}
            <path d="M15 35 Q10 45 15 50 Q20 45 15 35" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            <path d="M75 30 Q70 40 75 45 Q80 40 75 30" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
            {/* Body lunging */}
            <path d="M45 72 L70 140" stroke="#18181b" strokeWidth="4" />
            {/* Arm punching into wall */}
            <path d="M55 85 L110 90 L160 60" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
            {/* Red throbbing lines on fist */}
            <circle cx="160" cy="60" r="12" fill="#fca5a5" stroke="#dc2626" strokeWidth="2.5" />
            <path d="M150 40 L155 45 M170 40 L165 45 M175 60 L180 60" stroke="#dc2626" strokeWidth="2" />
          </g>

          {/* Comic Sound Effect */}
          <g transform="translate(260, 40)">
            <text x="0" y="40" className="font-comic text-5xl" fill="#dc2626">ドカッ!!</text>
            <rect x="-10" y="55" width="130" height="28" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="55" y="74" textAnchor="middle" className="font-code text-xs font-bold" fill="#991b1b">PUNCH FAILED</text>
          </g>

          {/* Speech bubble */}
          <g transform="translate(40, 240)">
            <path d="M10 10 L220 10 Q230 10 230 20 L230 65 Q230 75 220 75 L160 75 L145 95 L140 75 L10 75 Q0 75 0 65 L0 20 Q0 10 10 10 Z" fill="#fff" stroke="#18181b" strokeWidth="2.5" />
            <text x="15" y="35" className="font-sketch text-sm font-bold" fill="#18181b">"OOUUCH! I generated 1,000 words,</text>
            <text x="15" y="55" className="font-sketch text-sm font-bold" fill="#dc2626">but the wall didn't move 1 millimeter!"</text>
          </g>
        </svg>
      );

    case 'nxm-spaghetti':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header Banner */}
          <rect x="20" y="15" width="220" height="30" rx="4" fill="#fee2e2" stroke="#18181b" strokeWidth="2" />
          <text x="130" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#991b1b">BEFORE MCP: O(N × M) CHAOS</text>

          {/* Left Column: 4 Models */}
          <g transform="translate(40, 60)">
            <text x="35" y="15" className="font-code text-xs font-bold text-zinc-500">N MODELS</text>
            {['Gemini 2.5', 'Claude 3.7', 'OpenAI o3', 'Local Llama'].map((m, i) => (
              <g key={i} transform={`translate(0, ${30 + i * 55})`}>
                <rect x="0" y="0" width="95" height="38" rx="6" fill="#eff6ff" stroke="#18181b" strokeWidth="2" />
                <text x="47" y="24" textAnchor="middle" className="font-code text-xs font-bold" fill="#1e3a8a">{m}</text>
                <circle cx="95" cy="19" r="5" fill="#2563eb" stroke="#18181b" strokeWidth="1.5" />
              </g>
            ))}
          </g>

          {/* Right Column: 4 Tools */}
          <g transform="translate(460, 60)">
            <text x="45" y="15" className="font-code text-xs font-bold text-zinc-500">M TOOLS</text>
            {['Excavator API', 'BigQuery DB', 'GitHub PR', 'Filesystem'].map((t, i) => (
              <g key={i} transform={`translate(0, ${30 + i * 55})`}>
                <rect x="0" y="0" width="105" height="38" rx="6" fill="#fef3c7" stroke="#18181b" strokeWidth="2" />
                <text x="52" y="24" textAnchor="middle" className="font-code text-xs font-bold" fill="#92400e">{t}</text>
                <circle cx="0" cy="19" r="5" fill="#d97706" stroke="#18181b" strokeWidth="1.5" />
              </g>
            ))}
          </g>

          {/* Tangled Spaghetti Connection Wires (All interconnected = 16 crossing lines) */}
          <g opacity="0.75">
            <path d="M135 110 Q280 40 460 110" stroke="#dc2626" strokeWidth="2" fill="none" />
            <path d="M135 110 Q310 140 460 165" stroke="#f97316" strokeWidth="2" fill="none" />
            <path d="M135 110 Q200 240 460 220" stroke="#eab308" strokeWidth="2" strokeDasharray="4 2" fill="none" />
            <path d="M135 110 Q250 300 460 275" stroke="#ef4444" strokeWidth="2" fill="none" />

            <path d="M135 165 Q330 90 460 110" stroke="#84cc16" strokeWidth="2" fill="none" />
            <path d="M135 165 Q290 190 460 165" stroke="#06b6d4" strokeWidth="2.5" fill="none" />
            <path d="M135 165 Q350 210 460 220" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M135 165 Q220 280 460 275" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3 3" fill="none" />

            <path d="M135 220 Q240 100 460 110" stroke="#ec4899" strokeWidth="2" fill="none" />
            <path d="M135 220 Q320 200 460 165" stroke="#14b8a6" strokeWidth="2" fill="none" />
            <path d="M135 220 Q260 240 460 220" stroke="#f43f5e" strokeWidth="2" fill="none" />
            <path d="M135 220 Q360 260 460 275" stroke="#6366f1" strokeWidth="2" fill="none" />

            <path d="M135 275 Q210 130 460 110" stroke="#d97706" strokeWidth="2" fill="none" />
            <path d="M135 275 Q310 180 460 165" stroke="#059669" strokeWidth="2" fill="none" />
            <path d="M135 275 Q270 230 460 220" stroke="#9333ea" strokeWidth="2" fill="none" />
            <path d="M135 275 Q300 290 460 275" stroke="#b91c1c" strokeWidth="2.5" fill="none" />
          </g>

          {/* Frustrated Kenji in middle tangled in wires */}
          <g transform="translate(250, 130)">
            <rect x="-20" y="-10" width="130" height="95" rx="8" fill="#fff" stroke="#18181b" strokeWidth="2.5" className="manga-panel-sm" />
            <text x="45" y="15" textAnchor="middle" className="font-comic text-2xl" fill="#dc2626">TANGLED!</text>
            <text x="45" y="40" textAnchor="middle" className="font-sketch text-xs" fill="#18181b">50 Custom Wrappers</text>
            <text x="45" y="60" textAnchor="middle" className="font-sketch text-xs font-bold" fill="#991b1b">1 API changes = All break!</text>
          </g>

          {/* Japanese SFX */}
          <text x="270" y="55" className="font-comic text-3xl" fill="#71717a">ガチャガチャ!</text>
        </svg>
      );

    case 'mcp-universal-socket':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header Banner */}
          <rect x="20" y="15" width="270" height="30" rx="4" fill="#dcfce7" stroke="#18181b" strokeWidth="2" />
          <text x="155" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#15803d">WITH MCP: LINEAR O(N + M) STANDARD</text>

          {/* Models Column */}
          <g transform="translate(40, 75)">
            <text x="40" y="-10" className="font-code text-xs font-bold text-zinc-500">N MODELS</text>
            {['Gemini', 'Claude', 'OpenAI', 'Local LLM'].map((m, i) => (
              <g key={i} transform={`translate(0, ${i * 55})`}>
                <rect x="0" y="0" width="85" height="36" rx="6" fill="#eff6ff" stroke="#18181b" strokeWidth="2" />
                <text x="42" y="23" textAnchor="middle" className="font-code text-xs font-bold" fill="#1e3a8a">{m}</text>
                {/* Clean cable heading to MCP Bus */}
                <path d="M85 18 L180 100" stroke="#2563eb" strokeWidth="2.5" />
              </g>
            ))}
          </g>

          {/* Central MCP Universal Bus / "USB-C" Socket */}
          <g transform="translate(230, 80)">
            <rect x="0" y="0" width="140" height="180" rx="10" fill="#18181b" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            <rect x="8" y="8" width="124" height="164" rx="6" fill="#27272a" />
            {/* The Universal Plug Socket Symbol */}
            <circle cx="70" cy="45" r="22" fill="#10b981" stroke="#fff" strokeWidth="3" />
            <text x="70" y="52" textAnchor="middle" className="font-code text-xs font-black" fill="#fff">MCP</text>

            <text x="70" y="90" textAnchor="middle" className="font-comic text-lg" fill="#34d399">THE "USB-C"</text>
            <text x="70" y="110" textAnchor="middle" className="font-code text-xs" fill="#a1a1aa">JSON-RPC 2.0</text>
            <text x="70" y="130" textAnchor="middle" className="font-sketch text-xs" fill="#fef08a">stdio & SSE</text>

            {/* Status light */}
            <circle cx="70" cy="155" r="6" fill="#10b981">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Tools Column */}
          <g transform="translate(470, 75)">
            <text x="40" y="-10" className="font-code text-xs font-bold text-zinc-500">M TOOLS</text>
            {['Excavator', 'BigQuery', 'GitHub', 'Terminal'].map((t, i) => (
              <g key={i} transform={`translate(0, ${i * 55})`}>
                {/* Cable from MCP Bus */}
                <path d="M-100 100 L0 18" stroke="#059669" strokeWidth="2.5" />
                <rect x="0" y="0" width="95" height="36" rx="6" fill="#f0fdf4" stroke="#18181b" strokeWidth="2" />
                <text x="47" y="23" textAnchor="middle" className="font-code text-xs font-bold" fill="#166534">{t}</text>
              </g>
            ))}
          </g>

          {/* Manga SFX Badge */}
          <g transform="translate(250, 275)">
            <rect x="0" y="0" width="160" height="40" rx="8" fill="#fef08a" stroke="#18181b" strokeWidth="3" className="manga-panel-sm" />
            <text x="80" y="26" textAnchor="middle" className="font-comic text-2xl" fill="#18181b">カチャッ! (CLICK!)</text>
          </g>
          <text x="420" y="325" className="font-sketch text-sm font-bold text-zinc-700">Add 1 tool = works with all models!</text>
        </svg>
      );

    case 'crooked-wall-crash':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Crooked Wall Graphic */}
          <g transform="translate(280, 40) rotate(14)">
            <rect x="0" y="0" width="90" height="240" fill="#e4e4e7" stroke="#18181b" strokeWidth="3.5" />
            <text x="45" y="120" textAnchor="middle" className="font-sketch text-sm font-bold" fill="#dc2626">WALL TILTED 14°!</text>
          </g>

          {/* Straight Rigid Pipe trying to force fit and bursting */}
          <g transform="translate(80, 150)">
            <rect x="0" y="0" width="220" height="35" fill="#f59e0b" stroke="#18181b" strokeWidth="3" />
            <text x="90" y="22" className="font-code text-xs font-bold" fill="#18181b">RIGID PIPE: tool(x=10, y=20)</text>

            {/* Fracture / crack point */}
            <path d="M210 0 L225 18 L215 35" stroke="#ef4444" strokeWidth="4" />
          </g>

          {/* Water Spewing Chaos */}
          <g transform="translate(300, 140)">
            <path d="M0 0 Q40 -60 80 -40 Q120 -20 150 -60" stroke="#0284c7" strokeWidth="5" fill="none" strokeDasharray="8 4" />
            <path d="M0 20 Q50 80 90 60 Q130 90 180 80" stroke="#38bdf8" strokeWidth="4" fill="none" />
            <text x="80" y="10" className="font-comic text-4xl" fill="#0284c7">ジャアアア! (FLOOD!)</text>
          </g>

          {/* Alarm / Error Box */}
          <g transform="translate(40, 40)">
            <rect x="0" y="0" width="220" height="75" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5" className="manga-panel-sm" />
            <text x="110" y="25" textAnchor="middle" className="font-code text-xs font-bold" fill="#b91c1c">PASSIVE TOOL FAILED (BOUNDED)</text>
            <text x="110" y="45" textAnchor="middle" className="font-sketch text-xs" fill="#7f1d1d">A tool cannot negotiate crooked reality!</text>
            <text x="110" y="62" textAnchor="middle" className="font-comic text-sm" fill="#991b1b">THE "GOTO" ERROR TRAP</text>
          </g>

          {/* Kenji in shock */}
          <g transform="translate(60, 220)">
            <circle cx="30" cy="30" r="22" fill="#fff" stroke="#18181b" strokeWidth="3" />
            <path d="M20 25 L28 27 M38 27 L44 23" stroke="#18181b" strokeWidth="2.5" />
            <circle cx="30" cy="38" r="6" fill="#18181b" />
            <text x="65" y="25" className="font-sketch text-sm font-bold text-zinc-900">"I gave the tool coordinates,</text>
            <text x="65" y="45" className="font-sketch text-sm font-bold text-red-600">but real life has crooked walls! I need an expert!"</text>
          </g>
        </svg>
      );

    case 'a2a-radio-handshake':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Left: Kenji with A2A Radio */}
          <g transform="translate(60, 60)">
            {/* Hardhat */}
            <path d="M40 35 C25 35 20 18 45 15 C70 18 65 35 40 35 Z" fill="#fbbf24" stroke="#18181b" strokeWidth="3" />
            <circle cx="45" cy="55" r="22" fill="#fff" stroke="#18181b" strokeWidth="3" />
            {/* Holding radio */}
            <rect x="75" y="45" width="30" height="50" rx="4" fill="#3f3f46" stroke="#18181b" strokeWidth="2.5" />
            <line x1="85" y1="45" x2="85" y2="20" stroke="#18181b" strokeWidth="3" />
            {/* Radio waves */}
            <path d="M95 25 Q110 30 115 45" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
            <path d="M105 18 Q125 25 130 50" stroke="#3b82f6" strokeWidth="2.5" fill="none" />

            <rect x="-10" y="110" width="130" height="32" rx="6" fill="#eff6ff" stroke="#18181b" strokeWidth="2" />
            <text x="55" y="131" textAnchor="middle" className="font-code text-xs font-bold" fill="#1e3a8a">KENJI (ORCHESTRATOR)</text>
          </g>

          {/* Central Radio Frequency / A2A Negotiation Cloud */}
          <g transform="translate(230, 40)">
            <rect x="0" y="0" width="140" height="150" rx="10" fill="#fff" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            <text x="70" y="28" textAnchor="middle" className="font-comic text-xl" fill="#2563eb">A2A RADIO</text>
            <text x="70" y="46" textAnchor="middle" className="font-code text-xs font-bold" fill="#64748b">Linux Foundation</text>

            <rect x="10" y="60" width="120" height="75" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <text x="18" y="78" className="font-code text-[10px] text-zinc-700">1. Discover Card</text>
            <text x="18" y="96" className="font-code text-[10px] text-zinc-700">2. Delegate Goal</text>
            <text x="18" y="114" className="font-code text-[10px] text-emerald-600 font-bold">3. Negotiate Plan</text>
          </g>

          {/* Right: Master Plumber Hana (Specialist Subcontractor) */}
          <g transform="translate(420, 60)">
            {/* Specialist Cap */}
            <path d="M35 32 C20 32 18 15 40 15 C65 15 65 32 35 32 Z" fill="#38bdf8" stroke="#18181b" strokeWidth="3" />
            <circle cx="40" cy="55" r="22" fill="#fff" stroke="#18181b" strokeWidth="3" />
            {/* Wrench in hand */}
            <path d="M-10 65 L20 75" stroke="#18181b" strokeWidth="4" />
            <circle cx="-15" cy="62" r="8" fill="#e2e8f0" stroke="#18181b" strokeWidth="2.5" />

            {/* Glowing Agent Card Badge */}
            <rect x="-20" y="110" width="150" height="52" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" className="manga-panel-sm" />
            <text x="55" y="128" textAnchor="middle" className="font-code text-xs font-bold" fill="#15803d">AGENT CARD</text>
            <text x="55" y="145" textAnchor="middle" className="font-sketch text-xs" fill="#166534">"Hana: Master Plumber"</text>
          </g>

          {/* Radio Dialogue Banner */}
          <g transform="translate(40, 230)">
            <rect x="0" y="0" width="520" height="95" rx="8" fill="#fff" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            <text x="25" y="30" className="font-code text-xs font-bold" fill="#2563eb">KENJI [ORCHESTRATOR]:</text>
            <text x="200" y="30" className="font-sketch text-sm" fill="#18181b">"Basement wall is tilted 14°. Can you handle it?"</text>

            <text x="25" y="60" className="font-code text-xs font-bold" fill="#16a34a">HANA [PLUMBER AGENT]:</text>
            <text x="200" y="60" className="font-sketch text-sm" fill="#18181b">"Confirmed. I'll use flexible copper joints. No leaks."</text>

            <text x="25" y="85" className="font-sketch text-xs font-bold text-zinc-500">RESULT: Subcontractor took full responsibility. Kenji's prompt stays 100% clean!</text>
          </g>
        </svg>
      );

    case 'scraping-nightmare':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="20" y="15" width="250" height="30" rx="4" fill="#fee2e2" stroke="#18181b" strokeWidth="2" />
          <text x="145" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#991b1b">BEFORE UCP: BRITTLE WEB SCRAPING</text>

          {/* Broken Browser Window */}
          <g transform="translate(40, 60)">
            <rect x="0" y="0" width="520" height="260" rx="8" fill="#fff" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            {/* Browser top bar */}
            <rect x="0" y="0" width="520" height="32" rx="8" fill="#f4f4f5" />
            <circle cx="20" cy="16" r="5" fill="#ef4444" />
            <circle cx="36" cy="16" r="5" fill="#f59e0b" />
            <circle cx="52" cy="16" r="5" fill="#10b981" />
            <rect x="75" y="6" width="360" height="20" rx="4" fill="#fff" stroke="#d4d4d8" />
            <text x="85" y="20" className="font-code text-[10px] text-zinc-500">https://dodgy-materials-store-2004.biz/checkout</text>

            {/* Chaotic Popups overlay */}
            <g transform="translate(40, 50)">
              <rect x="0" y="0" width="220" height="110" rx="6" fill="#fef3c7" stroke="#b45309" strokeWidth="2.5" />
              <text x="110" y="30" textAnchor="middle" className="font-comic text-lg" fill="#b45309">COOKIE CONSENT!</text>
              <text x="110" y="55" textAnchor="middle" className="font-sketch text-xs">Accept all 412 marketing cookies?</text>
              <rect x="60" y="70" width="100" height="26" rx="4" fill="#d97706" />
              <text x="110" y="87" textAnchor="middle" className="font-code text-xs text-white">ACCEPT ALL</text>
            </g>

            {/* Captcha popup */}
            <g transform="translate(260, 80)">
              <rect x="0" y="0" width="200" height="110" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5" />
              <text x="100" y="28" textAnchor="middle" className="font-comic text-md" fill="#991b1b">PROVE YOU'RE HUMAN</text>
              <text x="100" y="50" textAnchor="middle" className="font-sketch text-xs">Click all images with chimneys</text>
              <text x="100" y="85" textAnchor="middle" className="font-comic text-2xl" fill="#dc2626">BOT BLOCKED!</text>
            </g>

            {/* Broken button in corner */}
            <g transform="translate(160, 190)">
              <rect x="0" y="0" width="180" height="35" rx="6" fill="#ef4444" stroke="#18181b" strokeWidth="2" />
              <text x="90" y="22" textAnchor="middle" className="font-code text-xs font-bold text-white">ERROR: DIV NOT CLICKABLE</text>
            </g>
          </g>

          <text x="360" y="345" className="font-sketch text-xs font-bold text-zinc-600">DOM Scraping breaks on every CSS class change.</text>
        </svg>
      );

    case 'ucp-clean-cart':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="20" y="15" width="310" height="30" rx="4" fill="#dbeafe" stroke="#18181b" strokeWidth="2" />
          <text x="175" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#1e40af">UCP: UNIVERSAL COMMERCE PROTOCOL</text>

          {/* Clean Flow: Agent -> Universal Machine Translator -> Structured Cart */}
          <g transform="translate(40, 70)">
            <rect x="0" y="0" width="120" height="160" rx="8" fill="#eff6ff" stroke="#18181b" strokeWidth="3" className="manga-panel-sm" />
            <text x="60" y="30" textAnchor="middle" className="font-code text-xs font-bold" fill="#1e3a8a">KENJI AGENT</text>
            <text x="60" y="60" textAnchor="middle" className="font-sketch text-xs" fill="#334155">"Need 25 copper pipes,</text>
            <text x="60" y="78" textAnchor="middle" className="font-sketch text-xs" fill="#334155">express delivery</text>
            <text x="60" y="96" textAnchor="middle" className="font-sketch text-xs" fill="#334155">by 4:00 AM"</text>
            <rect x="15" y="115" width="90" height="28" rx="4" fill="#2563eb" />
            <text x="60" y="133" textAnchor="middle" className="font-code text-[11px] font-bold text-white">UCP REQUEST</text>
          </g>

          {/* Data packet flowing */}
          <g transform="translate(170, 130)">
            <line x1="0" y1="20" x2="60" y2="20" stroke="#2563eb" strokeWidth="4" strokeDasharray="8 4" />
            <text x="30" y="10" textAnchor="middle" className="font-comic text-sm" fill="#2563eb">ピッ!</text>
          </g>

          {/* Central UCP Translator Engine */}
          <g transform="translate(240, 60)">
            <rect x="0" y="0" width="140" height="180" rx="10" fill="#1e293b" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            <text x="70" y="32" textAnchor="middle" className="font-comic text-xl" fill="#38bdf8">UCP HUB</text>
            <text x="70" y="52" textAnchor="middle" className="font-code text-[11px]" fill="#94a3b8">Standard Schemas:</text>

            <rect x="12" y="65" width="116" height="24" rx="4" fill="#334155" />
            <text x="70" y="81" textAnchor="middle" className="font-code text-[10px] text-sky-200">Catalog Discovery</text>

            <rect x="12" y="96" width="116" height="24" rx="4" fill="#334155" />
            <text x="70" y="112" textAnchor="middle" className="font-code text-[10px] text-sky-200">Inventory Lock</text>

            <rect x="12" y="127" width="116" height="24" rx="4" fill="#334155" />
            <text x="70" y="143" textAnchor="middle" className="font-code text-[10px] text-emerald-300">Cart Total + Tax</text>
          </g>

          {/* Final Assembled Cart */}
          <g transform="translate(420, 70)">
            <rect x="0" y="0" width="145" height="160" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="3" className="manga-panel-sm" />
            <text x="72" y="25" textAnchor="middle" className="font-code text-xs font-bold" fill="#15803d">LOCKED UCP CART</text>
            <text x="15" y="52" className="font-code text-[11px] text-zinc-700">• 25x Copper 3"</text>
            <text x="15" y="70" className="font-code text-[11px] text-zinc-700">• Tax: $48.00</text>
            <text x="15" y="88" className="font-code text-[11px] text-zinc-700">• 4AM Freight: $25</text>
            <line x1="15" y1="102" x2="130" y2="102" stroke="#86efac" strokeWidth="2" />
            <text x="72" y="124" textAnchor="middle" className="font-comic text-xl" fill="#166534">TOTAL: $693</text>
            <text x="72" y="145" textAnchor="middle" className="font-sketch text-xs" fill="#15803d">Ready for AP2 Payment</text>
          </g>

          {/* Bottom note */}
          <text x="50" y="300" className="font-sketch text-sm font-bold text-zinc-700">"Universal translator between AI intent and real-world supply chain depots."</text>
        </svg>
      );

    case 'ap2-shield-block':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="20" y="15" width="280" height="30" rx="4" fill="#fee2e2" stroke="#18181b" strokeWidth="2" />
          <text x="160" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#991b1b">AP2: UNAUTHORIZED FEE BLOCKED</text>

          {/* Sneaky Merchant Server trying to inject $1,093 */}
          <g transform="translate(40, 80)">
            <rect x="0" y="0" width="160" height="140" rx="8" fill="#fff" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            <text x="80" y="28" textAnchor="middle" className="font-comic text-lg" fill="#dc2626">GREEDY SURCHARGE</text>
            <text x="80" y="55" textAnchor="middle" className="font-sketch text-xs">Merchant attempts:</text>
            <text x="80" y="85" textAnchor="middle" className="font-comic text-2xl" fill="#dc2626">$1,093.00</text>
            <text x="80" y="110" textAnchor="middle" className="font-code text-[10px] text-zinc-500">(Hidden $400 fee)</text>
          </g>

          {/* Red Attack Laser heading toward wallet */}
          <path d="M200 150 L270 150" stroke="#dc2626" strokeWidth="6" strokeDasharray="10 4" />

          {/* The AP2 Cryptographic Shield */}
          <g transform="translate(280, 50)">
            {/* Massive Shield */}
            <path d="M20 10 L100 10 Q120 10 110 50 L85 160 Q60 210 60 210 Q60 210 35 160 L10 50 Q0 10 20 10 Z" fill="#0284c7" stroke="#18181b" strokeWidth="4" />
            {/* Glowing Mandate Padlock */}
            <rect x="42" y="70" width="36" height="42" rx="6" fill="#fef08a" stroke="#18181b" strokeWidth="2.5" />
            <path d="M48 70 L48 55 Q60 40 72 55 L72 70" fill="none" stroke="#18181b" strokeWidth="3" />
            <circle cx="60" cy="90" r="4" fill="#18181b" />

            {/* Spark explosion at shield collision */}
            <g transform="translate(5, 100)">
              <polygon points="-10,-20 5,-5 25,-15 10,10 30,25 5,20 -15,40 -10,15 -30,5 -10,-5" fill="#fef08a" stroke="#dc2626" strokeWidth="2" />
            </g>
          </g>

          {/* Rejection Sound Effect */}
          <g transform="translate(390, 70)">
            <text x="0" y="35" className="font-comic text-4xl" fill="#dc2626">BZZZZT!!</text>
            <rect x="0" y="45" width="180" height="95" rx="6" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" className="manga-panel-sm" />
            <text x="90" y="68" textAnchor="middle" className="font-code text-xs font-bold" fill="#991b1b">MANDATE CAP: $750.00</text>
            <text x="90" y="90" textAnchor="middle" className="font-sketch text-xs" fill="#7f1d1d">Cryptographic rule violated!</text>
            <text x="90" y="110" textAnchor="middle" className="font-comic text-sm" fill="#b91c1c">PAYMENT HARD ABORTED</text>
          </g>

          {/* Bottom Metaphor Card */}
          <g transform="translate(40, 260)">
            <rect x="0" y="0" width="520" height="60" rx="8" fill="#f8fafc" stroke="#18181b" strokeWidth="2" />
            <text x="260" y="25" textAnchor="middle" className="font-sketch text-sm font-bold text-zinc-900">
              "The Parent's Credit Card with Strict Rules" — Even if the AI is tricked, the signed mandate physically forbids overspending.
            </text>
            <text x="260" y="45" textAnchor="middle" className="font-code text-xs text-sky-700">
              Raw credit card details are NEVER exposed to the model or prompt.
            </text>
          </g>
        </svg>
      );

    case 'ap2-vault-approved':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="20" y="15" width="280" height="30" rx="4" fill="#dcfce7" stroke="#18181b" strokeWidth="2" />
          <text x="160" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#15803d">AP2: CRYPTOGRAPHIC SETTLEMENT</text>

          {/* Steel Vault Door with Green Checkmark */}
          <g transform="translate(60, 65)">
            <circle cx="90" cy="90" r="85" fill="#e4e4e7" stroke="#18181b" strokeWidth="4" className="manga-panel" />
            <circle cx="90" cy="90" r="65" fill="#27272a" stroke="#18181b" strokeWidth="3" />
            {/* Vault wheel */}
            <circle cx="90" cy="90" r="25" fill="#fef08a" stroke="#18181b" strokeWidth="3" />
            <path d="M75 90 L105 90 M90 75 L90 105" stroke="#18181b" strokeWidth="4" />
            {/* Green verified check */}
            <path d="M80 90 L88 98 L102 82" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
            <text x="90" y="140" textAnchor="middle" className="font-code text-[11px] font-bold" fill="#34d399">SIGNED TOKEN</text>
          </g>

          {/* Verified Receipt Ticket */}
          <g transform="translate(290, 65)">
            <rect x="0" y="0" width="250" height="180" rx="6" fill="#fff" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            {/* Serrated ticket top */}
            <path d="M0 0 L15 10 L30 0 L45 10 L60 0 L75 10 L90 0 L105 10 L120 0 L135 10 L150 0 L165 10 L180 0 L195 10 L210 0 L225 10 L240 0 L250 10 L250 180 L0 180 Z" fill="#fff" stroke="#18181b" strokeWidth="2.5" />

            <text x="125" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#18181b">AP2 NON-REPUDIABLE RECEIPT</text>
            <line x1="20" y1="45" x2="230" y2="45" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="4 2" />

            <text x="25" y="70" className="font-code text-xs text-zinc-600">Merchant: Metro Steel</text>
            <text x="25" y="90" className="font-code text-xs text-zinc-600">Authorized: $693.00 USD</text>
            <text x="25" y="110" className="font-code text-xs text-zinc-600">Mandate: mandate_c78a01</text>
            <text x="25" y="130" className="font-code text-[10px] text-emerald-700 font-bold">Sig: 0x8fa3b...2c9 (VERIFIED)</text>

            <rect x="25" y="142" width="200" height="26" rx="4" fill="#dcfce7" stroke="#16a34a" />
            <text x="125" y="160" textAnchor="middle" className="font-code text-xs font-bold" fill="#15803d">SETTLED IN ESCROW</text>
          </g>

          {/* Sound effect */}
          <text x="220" y="295" className="font-comic text-4xl" fill="#15803d">カチャリ! (SECURE!)</text>
          <text x="220" y="325" className="font-sketch text-xs text-zinc-600">Full auditability and zero risk of accidental bank drain.</text>
        </svg>
      );

    case 'raw-json-mess':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="20" y="15" width="270" height="30" rx="4" fill="#fee2e2" stroke="#18181b" strokeWidth="2" />
          <text x="155" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#991b1b">BEFORE A2UI: THE RAW JSON NIGHTMARE</text>

          {/* Giant crumpled pile of printout paper with raw JSON */}
          <g transform="translate(60, 65)">
            <rect x="0" y="0" width="300" height="230" rx="4" fill="#f8fafc" stroke="#18181b" strokeWidth="3" className="manga-panel" />
            <text x="15" y="25" className="font-code text-[11px] text-emerald-700">HTTP/1.1 200 OK</text>
            <text x="15" y="42" className="font-code text-[10px] text-zinc-600">{'{ "site_progress": {'}</text>
            <text x="25" y="58" className="font-code text-[10px] text-zinc-600">"status": 0.8529184,</text>
            <text x="25" y="74" className="font-code text-[10px] text-zinc-600">"steel_beams_allocated": [</text>
            <text x="35" y="90" className="font-code text-[10px] text-zinc-500">&#123;"id": 994, "load": 204.2&#125;,</text>
            <text x="35" y="106" className="font-code text-[10px] text-zinc-500">&#123;"id": 995, "load": 182.1&#125;,</text>
            <text x="35" y="122" className="font-code text-[10px] text-zinc-500">&#123;"id": 996, "load": 190.5&#125;</text>
            <text x="25" y="138" className="font-code text-[10px] text-zinc-600">],</text>
            <text x="25" y="154" className="font-code text-[10px] text-zinc-600">"unvetted_script": "&lt;script&gt;inject();&lt;/script&gt;"</text>
            <text x="15" y="170" className="font-code text-[10px] text-zinc-600">&#125;&#125;</text>
            <text x="15" y="195" className="font-code text-[10px] text-red-600 font-bold">... 4,200 MORE LINES OF JSON ...</text>
          </g>

          {/* Horrified Client holding head */}
          <g transform="translate(400, 100)">
            <circle cx="50" cy="50" r="30" fill="#fff" stroke="#18181b" strokeWidth="3" />
            {/* Hands clutching temples */}
            <path d="M15 50 L10 20 L25 35" stroke="#18181b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M85 50 L90 20 L75 35" stroke="#18181b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Dizzy eyes */}
            <text x="38" y="48" className="font-comic text-xl">@</text>
            <text x="56" y="48" className="font-comic text-xl">@</text>
            {/* Wavy mouth */}
            <path d="M40 68 Q50 62 60 68" stroke="#18181b" strokeWidth="2.5" fill="none" />

            <text x="50" y="120" textAnchor="middle" className="font-comic text-3xl" fill="#dc2626">WHAT IS THIS?!</text>
            <text x="50" y="145" textAnchor="middle" className="font-sketch text-xs text-zinc-700">"Am I over budget or not?!"</text>
          </g>

          <text x="180" y="325" className="font-sketch text-xs font-bold text-zinc-600">Raw JSON forces humans to do manual cognitive parsing.</text>
        </svg>
      );

    case 'a2ui-tablet-display':
      return (
        <svg viewBox="0 0 600 360" className={`overflow-hidden bg-[#faf8f5] ${className}`} xmlns="http://www.w3.org/2000/svg">
          {/* Header */}
          <rect x="20" y="15" width="310" height="30" rx="4" fill="#fef3c7" stroke="#18181b" strokeWidth="2" />
          <text x="175" y="35" textAnchor="middle" className="font-code text-xs font-bold" fill="#92400e">A2UI: SHEET MUSIC FOR NATIVE UI</text>

          {/* Sleek Modern Tablet displaying interactive native UI */}
          <g transform="translate(100, 60)">
            {/* Tablet Bezel */}
            <rect x="0" y="0" width="400" height="240" rx="14" fill="#18181b" stroke="#18181b" strokeWidth="3" className="manga-panel-lg" />
            {/* Screen */}
            <rect x="12" y="12" width="376" height="216" rx="8" fill="#ffffff" />

            {/* A2UI Native Components */}
            {/* Title card */}
            <text x="30" y="42" className="font-code text-sm font-black" fill="#0f172a">SITE DEMOLITION & REBUILD</text>
            <text x="30" y="58" className="font-sketch text-xs text-zinc-500">Rendered via client design system catalog (No raw code injection)</text>

            {/* Progress Bar Component */}
            <g transform="translate(30, 75)">
              <text x="0" y="14" className="font-code text-xs font-bold" fill="#1e293b">Phase 1 Demolition: 85%</text>
              <rect x="0" y="22" width="340" height="18" rx="9" fill="#e2e8f0" />
              <rect x="0" y="22" width="289" height="18" rx="9" fill="#10b981" />
            </g>

            {/* Budget Gauge & Slider Component */}
            <g transform="translate(30, 130)">
              <text x="0" y="14" className="font-code text-xs font-bold" fill="#1e293b">Materials Budget Spent: $693 / $750</text>
              <circle cx="10" cy="30" r="5" fill="#3b82f6" />
              <text x="25" y="34" className="font-sketch text-xs text-zinc-700">Subcontractor plumbing approved</text>
            </g>

            {/* Interactive Approve Button */}
            <g transform="translate(190, 170)">
              <rect x="0" y="0" width="180" height="42" rx="8" fill="#16a34a" stroke="#14532d" strokeWidth="2" className="manga-panel-sm" />
              <text x="90" y="26" textAnchor="middle" className="font-code text-xs font-bold text-white">✓ AUTHORIZE PHASE 2</text>
            </g>
          </g>

          {/* Musical Notes Floating ("Sheet Music Metaphor") */}
          <g transform="translate(520, 100)">
            <text x="0" y="0" className="font-comic text-3xl" fill="#8b5cf6">♪</text>
            <text x="20" y="30" className="font-comic text-4xl" fill="#ec4899">♫</text>
            <text x="5" y="65" className="font-comic text-2xl" fill="#3b82f6">♩</text>
          </g>

          <text x="120" y="330" className="font-sketch text-xs font-bold text-zinc-700">
            "The agent writes the score; your device plays it natively and safely."
          </text>
        </svg>
      );

    default:
      return (
        <div className="w-full h-48 flex items-center justify-center bg-zinc-100 border-2 border-dashed border-zinc-300">
          <span className="font-sketch text-sm text-zinc-500">Manga Sketch Panel</span>
        </div>
      );
  }
};
