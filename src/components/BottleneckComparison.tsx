import React, { useState } from 'react';
import { MangaIllustration } from './MangaIllustrations';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers, 
  Cpu, 
  ShieldAlert,
  ShieldCheck,
  SplitSquareVertical
} from 'lucide-react';

interface ComparisonItem {
  id: string;
  protocol: 'A2A' | 'UCP' | 'AP2' | 'MCP' | 'A2UI';
  title: string;
  subtitle: string;
  metaphorStruggle: string;
  metaphorSolution: string;
  struggleIllustrationId: string;
  solutionIllustrationId: string;
  technicalBottleneck: string;
  technicalSolution: string;
  keyComponentsLabeled: {
    name: string;
    description: string;
  }[];
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: 'comp-a2a',
    protocol: 'A2A',
    title: 'A2A: Overcoming The "Crooked Wall" & The GOTO Trap',
    subtitle: 'Tool Call vs. Autonomous Subcontractor Delegation',
    metaphorStruggle: 'The Crooked Wall Dilemma: Kenji grabs a wrench and forces a rigid pipe into a 14° crooked wall. The pipe snaps and floods the basement because a passive tool cannot negotiate crooked reality.',
    metaphorSolution: 'The Licensed Subcontractor: Kenji radios Master Plumber Hana via A2A. She takes full responsibility, calculates a flex-joint bypass, and resolves the issue without polluting Kenji\'s prompt.',
    struggleIllustrationId: 'crooked-wall-crash',
    solutionIllustrationId: 'a2a-radio-handshake',
    technicalBottleneck: 'The "GOTO Problem" in Agentic Architecture: Trying to force unbounded, multi-turn reasoning into a standard fire-and-forget tool wrapper causes context explosion, attention dilution, and broken state loops.',
    technicalSolution: 'Agent-to-Agent (A2A) Protocol (Linux Foundation): Separates orchestrator state from domain specialist state. Discovers specialists via machine-readable Agent Cards and enables multi-turn negotiation over standard endpoints.',
    keyComponentsLabeled: [
      { name: 'Agent Card', description: 'Machine-readable CV detailing specialist capabilities, security rules, and endpoints.' },
      { name: 'Agent Registry', description: 'Central marketplace/catalog for discovering vetted domain specialist agents.' },
      { name: 'A2A Executor', description: 'Translation layer converting A2A protocol messages into underlying framework calls (ADK/LangGraph).' },
      { name: 'State Isolation Channel', description: 'Preserves specialist multi-turn context without blowing up the orchestrator\'s token limits.' }
    ]
  },
  {
    id: 'comp-ucp',
    protocol: 'UCP',
    title: 'UCP: Overcoming The 2:00 AM Web Scraping Nightmare',
    subtitle: 'Fragile DOM Parsing vs. Machine-to-Machine Commerce',
    metaphorStruggle: 'The 2:00 AM Supply Run Nightmare: Attempting to order pipes or burritos by launching a headless browser that crashes on cookie consent banners, captchas, and broken HTML checkout buttons.',
    metaphorSolution: 'The Universal Commerce Translator: The supply warehouse exposes a native UCP endpoint. The agent queries items, verifies inventory, and locks the cart in 40 milliseconds.',
    struggleIllustrationId: 'scraping-nightmare',
    solutionIllustrationId: 'ucp-clean-cart',
    technicalBottleneck: 'Web Scraping Fragility: Non-deterministic DOM changes, dynamic JS rendering, and captcha blocks prevent reliable autonomous purchasing workflows.',
    technicalSolution: 'Universal Commerce Protocol (UCP): Standardizes product discovery, variant selection, live inventory reservation, tax/fee negotiation, and cart assembly into typed schemas.',
    keyComponentsLabeled: [
      { name: 'UCP Catalog Schema', description: 'Typed schema for discovering items, variants, and real-time inventory counts.' },
      { name: 'Cart State Manager', description: 'Stateful machine-to-machine cart object supporting dynamic item customization.' },
      { name: 'Tax & Fee Negotiator', description: 'Standardized handshake that calculates taxes, shipping surcharges, and delivery windows upfront.' },
      { name: 'Commerce Gateway', description: 'Vendor endpoint accepting standard UCP orders without human HTML presentation layers.' }
    ]
  },
  {
    id: 'comp-ap2',
    protocol: 'AP2',
    title: 'AP2: Overcoming The Rogue Card Drain & Hidden Surcharge',
    subtitle: 'Blank Check Vulnerability vs. Cryptographic Mandate Shield',
    metaphorStruggle: 'The Rogue Merchant Surcharge: The vendor sneaks a $400 hidden fee onto the checkout cart, pushing the total to $1,093.00, hoping the dumb bot won\'t notice.',
    metaphorSolution: 'The Parent\'s Credit Card with Strict Rules: AP2\'s cryptographic shield detects the violation against the human\'s $750 signed Mandate and instantly blocks the transaction.',
    struggleIllustrationId: 'ap2-shield-block',
    solutionIllustrationId: 'ap2-vault-approved',
    technicalBottleneck: 'Financial Vulnerability: Handing raw payment credentials or unrestricted API keys to LLMs creates massive financial risk from hallucinations, prompt injections, and predatory merchants.',
    technicalSolution: 'Agent Payments Protocol (AP2): Open protocol enforcing cryptographically signed human Mandates, verifiable non-repudiable promissory notes, and automated charge rejection.',
    keyComponentsLabeled: [
      { name: 'Digital Mandate', description: 'Human-signed cryptographically bound rules (Spending cap, authorized merchant, expiry date).' },
      { name: 'Cryptographic Promissory Note', description: 'Verifiable proof-of-intent token issued to the merchant without revealing raw credit cards.' },
      { name: 'Hardware Enforced Rejection', description: 'Automatic abort trigger if the cart total exceeds the mandate by even $0.01.' },
      { name: 'x402 Micropayment Engine', description: 'Native support for HTTP 402 machine-to-machine micro-settlements.' }
    ]
  },
  {
    id: 'comp-mcp',
    protocol: 'MCP',
    title: 'MCP: Overcoming The N×M Prototyping Spaghetti',
    subtitle: 'Custom Brittle Wrappers vs. Universal Tool USB-C',
    metaphorStruggle: 'The Tangled Adapter Nightmare: 5 models and 10 tools create 50 bespoke hydraulic hoses and incompatible cables. Kenji spends all his time fixing broken connectors.',
    metaphorSolution: 'The Universal Quick-Connect Socket: A standardized "USB-C" port snaps onto Kenji\'s toolbelt, allowing any tool to work with any model immediately with linear O(N+M) simplicity.',
    struggleIllustrationId: 'nxm-spaghetti',
    solutionIllustrationId: 'mcp-universal-socket',
    technicalBottleneck: 'O(N × M) Integration Overhead: Each model provider required custom tool definitions, auth wrappers, and response parsers. Adding tools multiplied maintenance debt.',
    technicalSolution: 'Model Context Protocol (MCP): Standardizes tool, resource, and prompt declarations via JSON-RPC 2.0 over stdio or SSE transports.',
    keyComponentsLabeled: [
      { name: 'MCP Host Client', description: 'The agent runtime hosting the LLM that sends tool invocation requests.' },
      { name: 'MCP Server', description: 'Lightweight service exposing local/remote tools, files, or database queries.' },
      { name: 'JSON-RPC 2.0 Transport', description: 'Universal bidirectional message protocol operating over stdio or SSE.' },
      { name: 'MCP Inspector', description: 'Developer testing harness to inspect tool schemas and payloads independently.' }
    ]
  },
  {
    id: 'comp-a2ui',
    protocol: 'A2UI',
    title: 'A2UI: Overcoming The 4,000-Line Raw JSON Dump',
    subtitle: 'Cognitive Parsing Overload vs. Native UI Sheet Music',
    metaphorStruggle: 'The 400-Page Logbook Disaster: The building owner asks for a status report, and the agent dumps a massive pile of curly braces and raw JSON codes that cause immediate headache.',
    metaphorSolution: 'The Architect\'s iPad: The agent emits lightweight declarative UI "sheet music" that the owner\'s tablet renders into responsive progress gauges and approval buttons.',
    struggleIllustrationId: 'raw-json-mess',
    solutionIllustrationId: 'a2ui-tablet-display',
    technicalBottleneck: 'User Communication & Security Barrier: Agents talk in JSON; humans need visual hierarchy. Generating raw HTML/JS exposes applications to severe XSS code injection risks.',
    technicalSolution: 'Agent-to-User Interface (A2UI): Framework-agnostic declarative UI format (v0.9). Agent only requests components from a trusted client catalog; zero executable scripts generated.',
    keyComponentsLabeled: [
      { name: 'A2UI Component Catalog', description: 'Pre-vetted set of trusted native UI primitives (Cards, Buttons, Progress Bars, Gauges).' },
      { name: 'Declarative Adjacency Tree', description: 'Flat list format optimized for incremental LLM token generation without re-renders.' },
      { name: 'Native Platform Renderer', description: 'Device-specific engine (React, Flutter, SwiftUI) translating intent into native widgets.' },
      { name: 'Bidirectional Event Stream', description: 'Captures user interactions (slider changes, button clicks) and streams them back to the agent.' }
    ]
  }
];

export const BottleneckComparison: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('comp-a2a');
  const [viewSplitMode, setViewSplitMode] = useState<'both' | 'struggle' | 'solution'>('both');

  const selected = COMPARISONS.find((c) => c.id === selectedId) || COMPARISONS[0];

  return (
    <div id="bottlenecks-comparison-root" className="w-full space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl border-3 border-zinc-900 manga-panel flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-comic text-xs px-2.5 py-0.5 rounded bg-red-600 text-white uppercase">
              STRUGGLE VS SOLUTION BREAKDOWN
            </span>
            <span className="font-code text-xs font-bold text-zinc-500">
              Manga Situational Case Studies
            </span>
          </div>
          <h2 className="text-2xl font-black font-code text-zinc-900">
            How Protocols Overcome Real-World Bottlenecks
          </h2>
          <p className="font-sketch text-sm text-zinc-700">
            Compare the chaotic failure mode without the protocol against the clean architecture enabled by the standard.
          </p>
        </div>

        {/* Split View Toggle */}
        <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg border border-zinc-300 font-code text-xs">
          <button
            onClick={() => setViewSplitMode('both')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
              viewSplitMode === 'both' ? 'bg-zinc-900 text-white font-bold' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setViewSplitMode('struggle')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
              viewSplitMode === 'struggle' ? 'bg-red-600 text-white font-bold' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Struggle Only
          </button>
          <button
            onClick={() => setViewSplitMode('solution')}
            className={`px-3 py-1.5 rounded cursor-pointer transition-all ${
              viewSplitMode === 'solution' ? 'bg-emerald-600 text-white font-bold' : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Solution Only
          </button>
        </div>
      </div>

      {/* Protocol Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {COMPARISONS.map((comp) => {
          const isSelected = comp.id === selectedId;
          return (
            <button
              key={comp.id}
              id={`tab-comp-${comp.id}`}
              onClick={() => setSelectedId(comp.id)}
              className={`px-4 py-2.5 rounded-xl border-2 font-code text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-800'
              }`}
            >
              <span className="font-comic text-xs px-2 py-0.5 rounded bg-yellow-400 text-zinc-900">
                {comp.protocol}
              </span>
              <span>{comp.protocol}: {comp.title.split(':')[1]?.trim() || comp.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Comparison Card */}
      <div className="space-y-6">
        {/* Title Header */}
        <div className="bg-[#faf8f5] p-5 rounded-xl border-2 border-zinc-800">
          <h3 className="text-xl font-black font-code text-zinc-900">
            {selected.title}
          </h3>
          <p className="font-sketch text-sm text-zinc-600 mt-0.5">
            {selected.subtitle}
          </p>
        </div>

        {/* Manga Side-by-Side Visual Panels */}
        <div className={`grid gap-6 ${viewSplitMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* THE STRUGGLE (CHAOS) */}
          {(viewSplitMode === 'both' || viewSplitMode === 'struggle') && (
            <div className="bg-white rounded-xl border-3 border-red-900 overflow-hidden manga-panel flex flex-col justify-between">
              <div className="bg-red-900 text-white px-4 py-2.5 flex items-center justify-between">
                <span className="font-comic text-xs tracking-wider flex items-center gap-1.5 text-red-200">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  THE STRUGGLE WITHOUT PROTOCOL
                </span>
                <span className="font-code text-xs font-bold bg-red-800 px-2 py-0.5 rounded">
                  Bottleneck / Failure Mode
                </span>
              </div>

              <div className="border-b-2 border-zinc-900">
                <MangaIllustration id={selected.struggleIllustrationId} className="w-full h-64" />
              </div>

              <div className="p-4 bg-red-50/50 space-y-2 flex-1">
                <span className="font-code text-xs font-bold text-red-900 block">The Metaphor Story:</span>
                <p className="font-sketch text-sm text-zinc-800 leading-snug">
                  {selected.metaphorStruggle}
                </p>
              </div>

              <div className="p-4 bg-red-100/70 border-t-2 border-red-900">
                <span className="font-code text-xs font-bold text-red-950 block mb-1">
                  TECHNICAL BOTTLENECK FOR DEV TEAMS:
                </span>
                <p className="font-code text-xs text-red-900 leading-relaxed">
                  {selected.technicalBottleneck}
                </p>
              </div>
            </div>
          )}

          {/* THE SOLUTION (CLEAN PROTOCOL) */}
          {(viewSplitMode === 'both' || viewSplitMode === 'solution') && (
            <div className="bg-white rounded-xl border-3 border-emerald-900 overflow-hidden manga-panel flex flex-col justify-between">
              <div className="bg-emerald-900 text-white px-4 py-2.5 flex items-center justify-between">
                <span className="font-comic text-xs tracking-wider flex items-center gap-1.5 text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  THE ARCHITECTURAL SOLUTION
                </span>
                <span className="font-code text-xs font-bold bg-emerald-800 px-2 py-0.5 rounded">
                  {selected.protocol} Standard
                </span>
              </div>

              <div className="border-b-2 border-zinc-900">
                <MangaIllustration id={selected.solutionIllustrationId} className="w-full h-64" />
              </div>

              <div className="p-4 bg-emerald-50/50 space-y-2 flex-1">
                <span className="font-code text-xs font-bold text-emerald-900 block">The Metaphor Story:</span>
                <p className="font-sketch text-sm text-zinc-800 leading-snug">
                  {selected.metaphorSolution}
                </p>
              </div>

              <div className="p-4 bg-emerald-100/70 border-t-2 border-emerald-900">
                <span className="font-code text-xs font-bold text-emerald-950 block mb-1">
                  HOW PROTOCOL SOLVES IT:
                </span>
                <p className="font-code text-xs text-emerald-900 leading-relaxed">
                  {selected.technicalSolution}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Key Components Labeled Clearly for Development Team */}
        <div className="bg-white p-6 rounded-xl border-3 border-zinc-900 manga-panel space-y-4">
          <div className="border-b-2 border-zinc-200 pb-2 flex items-center justify-between">
            <h4 className="font-code text-base font-bold text-zinc-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              Key Components Labeled for the Development Team
            </h4>
            <span className="font-sketch text-xs text-zinc-500">
              Strictly Labeled Core Elements
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selected.keyComponentsLabeled.map((comp, idx) => (
              <div key={idx} className="bg-zinc-50 p-4 rounded-lg border-2 border-zinc-300 manga-panel-sm flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-900 text-yellow-300 font-comic flex items-center justify-center shrink-0 text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="font-code text-sm font-bold text-zinc-900">{comp.name}</h5>
                  <p className="font-sketch text-xs text-zinc-700 mt-1 leading-snug">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
