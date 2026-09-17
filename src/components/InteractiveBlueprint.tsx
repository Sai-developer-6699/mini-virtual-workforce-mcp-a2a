import React, { useState } from 'react';
import { 
  Wrench, 
  Radio, 
  ShoppingCart, 
  ShieldCheck, 
  Monitor, 
  Cpu, 
  ArrowRight,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface BlueprintNode {
  id: string;
  protocol: 'CORE' | 'MCP' | 'A2A' | 'UCP' | 'AP2' | 'A2UI';
  name: string;
  metaphorLabel: string;
  role: string;
  category: 'Brain & Harness' | 'Tools' | 'Subcontractors' | 'Procurement' | 'Security & Finance' | 'UI & Human';
  boundedStatus: 'Bounded (Passive)' | 'Unbounded (Autonomous)' | 'Transactional' | 'Declarative Intent';
  whatItDoes: string;
  struggleSolved: string;
  samplePacket: string;
}

const BLUEPRINT_NODES: BlueprintNode[] = [
  {
    id: 'node-orchestrator',
    protocol: 'CORE',
    name: 'General Contractor Agent',
    metaphorLabel: 'The Master Builder (Kenji)',
    role: 'Central Orchestrator (Model + Harness)',
    category: 'Brain & Harness',
    boundedStatus: 'Unbounded (Autonomous)',
    whatItDoes: 'Maintains project goals, breaks down tasks, evaluates environment state, and coordinates tools and subcontractors.',
    struggleSolved: 'Solves the "Bare Hands" dilemma: pairs the thinking LLM with runtime memory and execution sockets.',
    samplePacket: `// Agent State
{
  "orchestrator_id": "kenji_v2",
  "mission": "Demolish south wing and install fresh water pipeline",
  "active_delegations": ["subcontractor_plumber_hana"],
  "active_tools": ["mcp:operate_excavator"]
}`
  },
  {
    id: 'node-mcp',
    protocol: 'MCP',
    name: 'MCP Universal Toolbelt',
    metaphorLabel: 'Sledgehammers & Heavy Excavator',
    role: 'Model Context Protocol (Tools / APIs / DBs)',
    category: 'Tools',
    boundedStatus: 'Bounded (Passive)',
    whatItDoes: 'Provides standardized JSON-RPC 2.0 socket connecting models to databases, terminal shells, and API functions.',
    struggleSolved: 'Bypasses the N×M prototyping disaster (O(N×M) -> O(N+M)). No bespoke REST wrappers.',
    samplePacket: `// MCP Tool Call
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "operate_hydraulic_breaker",
    "arguments": { "target": "rebar_wall_02", "force_kn": 120 }
  }
}`
  },
  {
    id: 'node-a2a',
    protocol: 'A2A',
    name: 'A2A Factory Radio',
    metaphorLabel: 'Licensed Electrician & Master Plumber',
    role: 'Agent-to-Agent Protocol (Subcontractors)',
    category: 'Subcontractors',
    boundedStatus: 'Unbounded (Autonomous)',
    whatItDoes: 'Allows the Orchestrator to discover specialist agents via Agent Cards, delegate complex multi-turn tasks, and negotiate tradeoffs.',
    struggleSolved: 'Eliminates the "GOTO Problem" and prompt overload. A2A handles crooked walls where passive tools would crash.',
    samplePacket: `// A2A Negotiation Message
{
  "protocol": "A2A/v1.0",
  "sender": "kenji_orchestrator",
  "target": "urn:agent:plumber_specialist",
  "intent": "route_copper_pipe_around_crooked_wall",
  "negotiated_solution": "dual_flex_joints_approved"
}`
  },
  {
    id: 'node-ucp',
    protocol: 'UCP',
    name: 'UCP Supply Pipeline',
    metaphorLabel: 'Materials Depot & 2 AM Food Run',
    role: 'Universal Commerce Protocol (Catalogs & Carts)',
    category: 'Procurement',
    boundedStatus: 'Transactional',
    whatItDoes: 'Standardizes how AI agents discover vendor catalogs, query inventory, customize line items, and lock in shopping carts.',
    struggleSolved: 'Replaces brittle web scraping, cookie banners, and broken 2004 HTML checkout forms with machine-native commerce.',
    samplePacket: `// UCP Cart Assembly
{
  "protocol": "UCP/v1.0",
  "merchant": "urn:merchant:metro-steel",
  "items": [{ "sku": "COPPER_PIPE_3IN", "qty": 25 }],
  "delivery_window": "2026-09-16T04:00:00Z",
  "total_usd": 693.00
}`
  },
  {
    id: 'node-ap2',
    protocol: 'AP2',
    name: 'AP2 Cryptographic Lockbox',
    metaphorLabel: "Parent's Credit Card with Strict Rules",
    role: 'Agent Payments Protocol (Mandates & Settlement)',
    category: 'Security & Finance',
    boundedStatus: 'Transactional',
    whatItDoes: 'Enforces human-signed spending mandates, issues cryptographic proof-of-intent promissory notes, and blocks unauthorized surcharges.',
    struggleSolved: 'Prevents runaway AI spend, prompt-injected card theft, and hidden merchant fees. Raw credit card data is NEVER exposed to the model.',
    samplePacket: `// AP2 Mandate Authorization
{
  "protocol": "AP2/v1.0",
  "mandate_id": "mandate_c78a01",
  "spending_cap": 750.00,
  "actual_charge": 693.00,
  "human_signature_valid": true,
  "hidden_fee_rejection": "ACTIVE"
}`
  },
  {
    id: 'node-a2ui',
    protocol: 'A2UI',
    name: 'A2UI Site Inspection iPad',
    metaphorLabel: 'Sheet Music for UI / Interactive Tablet',
    role: 'Agent-to-User Interface (Declarative UI)',
    category: 'UI & Human',
    boundedStatus: 'Declarative Intent',
    whatItDoes: 'The agent writes declarative intent (Cards, Gauges, Sliders); the host client renders them safely using trusted native components.',
    struggleSolved: 'Eliminates 4,000-line raw JSON dumps and hazardous arbitrary JavaScript code execution (immune to XSS).',
    samplePacket: `// A2UI v0.9 Component Intent
{
  "version": "v0.9",
  "updateComponents": {
    "surfaceId": "site_progress",
    "components": [
      { "id": "card", "component": "Card", "children": ["gauge", "btn"] },
      { "id": "gauge", "component": "ProgressBar", "value": 0.85 },
      { "id": "btn", "component": "Button", "action": { "event": "approve_phase_2" } }
    ]
  }
}`
  }
];

export const InteractiveBlueprint: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-orchestrator');
  const selectedNode = BLUEPRINT_NODES.find((n) => n.id === selectedNodeId) || BLUEPRINT_NODES[0];

  return (
    <div id="interactive-blueprint-root" className="w-full space-y-6">
      {/* Blueprint Header */}
      <div className="blueprint-texture text-white p-6 rounded-xl border-3 border-cyan-500 manga-panel flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-code text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/50">
              ARCHITECTURAL SPECIFICATION: VIBE CODER FACTORY FLOOR
            </span>
            <span className="font-sketch text-xs text-sky-200">
              Google Agent Tools & Interoperability Model
            </span>
          </div>
          <h2 className="text-2xl font-black font-code tracking-tight text-white flex items-center gap-2">
            Construction Lot System Blueprint
          </h2>
          <p className="font-sketch text-sm text-cyan-200/90 max-w-2xl">
            Click any station on the job site below to inspect its operational role, protocol standard, and how it eliminates system bottlenecks.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 text-[11px] font-code">
          <span className="bg-amber-950/80 text-amber-300 px-2 py-1 rounded border border-amber-600/40">● Brain (Core)</span>
          <span className="bg-emerald-950/80 text-emerald-300 px-2 py-1 rounded border border-emerald-600/40">● MCP (Passive Tools)</span>
          <span className="bg-blue-950/80 text-blue-300 px-2 py-1 rounded border border-blue-600/40">● A2A (Subcontractors)</span>
          <span className="bg-sky-950/80 text-sky-300 px-2 py-1 rounded border border-sky-600/40">● UCP (Supply/Cart)</span>
          <span className="bg-purple-950/80 text-purple-300 px-2 py-1 rounded border border-purple-600/40">● AP2 (Mandate Vault)</span>
          <span className="bg-yellow-950/80 text-yellow-300 px-2 py-1 rounded border border-yellow-600/40">● A2UI (iPad UI)</span>
        </div>
      </div>

      {/* Blueprint Visual Map: The 6 Construction Stations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {BLUEPRINT_NODES.map((node) => {
          const isSelected = node.id === selectedNodeId;

          const getCardTheme = () => {
            switch (node.protocol) {
              case 'CORE': return { border: 'border-amber-500', badge: 'bg-amber-100 text-amber-900', icon: <Cpu className="w-5 h-5 text-amber-600" /> };
              case 'MCP': return { border: 'border-emerald-500', badge: 'bg-emerald-100 text-emerald-900', icon: <Wrench className="w-5 h-5 text-emerald-600" /> };
              case 'A2A': return { border: 'border-blue-500', badge: 'bg-blue-100 text-blue-900', icon: <Radio className="w-5 h-5 text-blue-600" /> };
              case 'UCP': return { border: 'border-sky-500', badge: 'bg-sky-100 text-sky-900', icon: <ShoppingCart className="w-5 h-5 text-sky-600" /> };
              case 'AP2': return { border: 'border-purple-500', badge: 'bg-purple-100 text-purple-900', icon: <ShieldCheck className="w-5 h-5 text-purple-600" /> };
              case 'A2UI': return { border: 'border-yellow-500', badge: 'bg-yellow-100 text-yellow-900', icon: <Monitor className="w-5 h-5 text-yellow-600" /> };
            }
          };

          const theme = getCardTheme();

          return (
            <button
              key={node.id}
              id={`btn-node-${node.id}`}
              onClick={() => setSelectedNodeId(node.id)}
              className={`p-4 rounded-xl border-3 text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? `bg-white ${theme.border} manga-panel scale-[1.02] ring-2 ring-zinc-900`
                  : 'bg-zinc-50 border-zinc-300 hover:border-zinc-800 hover:bg-white manga-panel-sm'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`font-code text-[11px] font-bold px-2 py-0.5 rounded-full ${theme.badge}`}>
                    {node.protocol}
                  </span>
                  <span className="font-comic text-xs text-zinc-500">{node.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-zinc-100 border border-zinc-300">
                    {theme.icon}
                  </div>
                  <div>
                    <h3 className="font-code text-sm font-bold text-zinc-900">{node.name}</h3>
                    <p className="font-sketch text-xs text-zinc-600">{node.metaphorLabel}</p>
                  </div>
                </div>

                <p className="font-sketch text-xs text-zinc-700 line-clamp-2 leading-relaxed">
                  {node.whatItDoes}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] font-code text-zinc-500">
                <span>{node.boundedStatus}</span>
                <span className="font-bold text-zinc-900 flex items-center gap-0.5">
                  Inspect <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel for Selected Station */}
      <div id="blueprint-inspector" className="bg-white p-6 rounded-xl border-3 border-zinc-900 manga-panel space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b-2 border-zinc-200 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-code text-xs font-bold px-2 py-0.5 rounded bg-zinc-900 text-white">
                STATION SPEC: {selectedNode.protocol}
              </span>
              <span className="font-sketch text-sm text-zinc-500">
                Construction Metaphor: {selectedNode.metaphorLabel}
              </span>
            </div>
            <h3 className="text-xl font-bold font-code text-zinc-900">
              {selectedNode.name} &mdash; <span className="text-zinc-600 text-base">{selectedNode.role}</span>
            </h3>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-300 font-code text-xs font-bold text-zinc-800">
            Domain Type: <span className="text-blue-600">{selectedNode.boundedStatus}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Functional Explanation */}
          <div className="space-y-4">
            <div className="bg-[#faf8f5] p-4 rounded-lg border-2 border-zinc-800">
              <h4 className="font-code text-xs font-bold text-zinc-900 flex items-center gap-1.5 mb-2">
                <Info className="w-4 h-4 text-blue-600" />
                HOW IT WORKS ON THE JOB SITE:
              </h4>
              <p className="font-sketch text-sm text-zinc-800 leading-relaxed">
                {selectedNode.whatItDoes}
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border-2 border-emerald-800">
              <h4 className="font-code text-xs font-bold text-emerald-950 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                BOTTLENECK IT OBLITERATES:
              </h4>
              <p className="font-sketch text-sm text-emerald-900 leading-relaxed">
                {selectedNode.struggleSolved}
              </p>
            </div>

            {/* Practical decision guideline from paper */}
            <div className="bg-amber-50 p-3.5 rounded-lg border border-amber-300 text-xs space-y-1">
              <span className="font-code font-bold text-amber-900">Engineering Rule of Thumb:</span>
              <p className="font-sketch text-amber-950">
                {selectedNode.protocol === 'MCP' && 'Use MCP when the task is bounded, passive, and fire-and-forget (e.g. run this bash command, query this PostgreSQL table).'}
                {selectedNode.protocol === 'A2A' && 'Use A2A when you need an autonomous partner to take responsibility and negotiate through ambiguous or crooked constraints.'}
                {selectedNode.protocol === 'UCP' && 'Use UCP when discovering products, options, and building carts without scraping HTML.'}
                {selectedNode.protocol === 'AP2' && 'Use AP2 whenever real money or transactions occur, enforcing strict cryptographically signed mandates.'}
                {selectedNode.protocol === 'A2UI' && 'Use A2UI when the user needs visual interactive controls (cards, gauges) without running risky untrusted code.'}
                {selectedNode.protocol === 'CORE' && 'An LLM alone is just words. Only when encased in an operational harness does it become an active agent.'}
              </p>
            </div>
          </div>

          {/* Wire Protocol Packet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-code text-xs font-bold text-zinc-700">Wire Payload Inspection:</span>
              <span className="font-code text-[11px] text-zinc-500">JSON-RPC / REST / Schema</span>
            </div>
            <pre className="p-4 rounded-lg bg-zinc-900 border-2 border-zinc-800 text-xs font-code text-emerald-400 overflow-x-auto leading-relaxed">
              <code>{selectedNode.samplePacket}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
