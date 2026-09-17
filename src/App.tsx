import React, { useState } from 'react';
import { CHAPTERS } from './data/chaptersData';
import { AgentEnvironmentDiagram } from './components/AgentEnvironmentDiagram';
import { MangaReader } from './components/MangaReader';
import { InteractiveBlueprint } from './components/InteractiveBlueprint';
import { BottleneckComparison } from './components/BottleneckComparison';
import { ConstructionSimulator } from './components/ConstructionSimulator';
import { 
  BookOpen, 
  Layers, 
  Zap, 
  Play, 
  HelpCircle, 
  HardHat, 
  Sparkles,
  GitBranch,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';

export default function App() {
  const [activeMainView, setActiveMainView] = useState<'diagram' | 'manga' | 'blueprint' | 'bottlenecks' | 'simulator'>('diagram');
  const [currentChapterId, setCurrentChapterId] = useState<string>('core-agent');
  const [showQuickCheatsheet, setShowQuickCheatsheet] = useState<boolean>(false);

  return (
    <div className="min-h-screen paper-texture text-zinc-900 selection:bg-yellow-200">
      {/* Top Banner: Construction Blueprint Grid Bar */}
      <header className="border-b-3 border-zinc-900 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 border-2 border-zinc-900 flex items-center justify-center manga-panel-sm shrink-0">
              <HardHat className="w-6 h-6 text-zinc-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-comic text-xs tracking-wider px-2 py-0.2 rounded bg-zinc-900 text-yellow-300">
                  DEVELOPER VISUAL GUIDE
                </span>
                <span className="font-code text-[11px] text-zinc-500 font-bold hidden sm:inline">
                  Google Agent Whitepaper (May 2026)
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-black font-code tracking-tight text-zinc-900">
                AGENT BLUEPRINT: <span className="font-sketch font-normal text-zinc-700 text-lg md:text-xl">The Manga Guide to Protocols</span>
              </h1>
            </div>
          </div>

          {/* Quick Cheatsheet Button & Whitepaper Reference */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="btn-quick-cheatsheet"
              onClick={() => setShowQuickCheatsheet(!showQuickCheatsheet)}
              className="px-3.5 py-2 rounded-lg border-2 border-zinc-900 bg-amber-100 hover:bg-amber-200 text-amber-950 font-code text-xs font-bold flex items-center gap-1.5 manga-panel-sm cursor-pointer transition-all"
            >
              <HelpCircle className="w-4 h-4 text-amber-700" />
              Metaphors Cheatsheet
            </button>
          </div>
        </div>

        {/* Primary View Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 pb-2 flex flex-wrap gap-2">
          <button
            id="nav-tab-diagram"
            onClick={() => setActiveMainView('diagram')}
            className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeMainView === 'diagram'
                ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm ring-2 ring-yellow-400'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
            }`}
          >
            <GitBranch className="w-4 h-4 text-yellow-400" />
            ★ Agent–Environment Interaction Diagram
          </button>

          <button
            id="nav-tab-manga"
            onClick={() => setActiveMainView('manga')}
            className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeMainView === 'manga'
                ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-yellow-400" />
            1. Manga Storyboard (Acts 1-6)
          </button>

          <button
            id="nav-tab-blueprint"
            onClick={() => setActiveMainView('blueprint')}
            className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeMainView === 'blueprint'
                ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            2. Site Architecture Blueprint
          </button>

          <button
            id="nav-tab-bottlenecks"
            onClick={() => setActiveMainView('bottlenecks')}
            className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeMainView === 'bottlenecks'
                ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-400" />
            3. Bottleneck Battles (UCP, A2A, AP2)
          </button>

          <button
            id="nav-tab-simulator"
            onClick={() => setActiveMainView('simulator')}
            className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeMainView === 'simulator'
                ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
                : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
            }`}
          >
            <Play className="w-4 h-4 text-emerald-400" />
            4. Live Construction Simulator
          </button>
        </div>
      </header>

      {/* Quick Metaphor Cheatsheet Modal / Dropdown */}
      {showQuickCheatsheet && (
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="bg-white border-3 border-zinc-900 p-6 rounded-xl manga-panel space-y-4 relative">
            <button
              onClick={() => setShowQuickCheatsheet(false)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-900 font-comic text-lg cursor-pointer"
            >
              ✕
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="font-comic text-xl text-zinc-900">
                THE CONSTRUCTION METAPHOR CHEAT SHEET (FOR TEAM ONBOARDING)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-lg border-2 border-amber-900 bg-amber-50">
                <span className="font-code font-bold text-amber-900 block mb-1">
                  1. Man Alone (The Model):
                </span>
                <p className="font-sketch text-zinc-800">
                  A man standing on an empty lot thinking about buildings. He has no hands or tools. Words alone cannot demolish a brick wall.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border-2 border-emerald-900 bg-emerald-50">
                <span className="font-code font-bold text-emerald-900 block mb-1">
                  2. Tools & MCP (Sledgehammer / Excavator):
                </span>
                <p className="font-sketch text-zinc-800">
                  Universal "USB-C" quick-connect socket on his toolbelt. Bounded, passive, fire-and-forget actions (hit wall with 120kN).
                </p>
              </div>

              <div className="p-3.5 rounded-lg border-2 border-blue-900 bg-blue-50">
                <span className="font-code font-bold text-blue-900 block mb-1">
                  3. Pipelines & Electric: A2A (Subcontractors):
                </span>
                <p className="font-sketch text-zinc-800">
                  Would you grab a wrench yourself or hire a licensed expert? You hire a Subcontractor via radio! If the wall is crooked, they negotiate instead of crashing.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border-2 border-sky-900 bg-sky-50">
                <span className="font-code font-bold text-sky-900 block mb-1">
                  4. UCP (Materials & 2 AM Food Run):
                </span>
                <p className="font-sketch text-zinc-800">
                  Universal machine translator. Depots publish clean digital menus/catalogs so the agent doesn't scrape broken web forms at 2 AM.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border-2 border-purple-900 bg-purple-50">
                <span className="font-code font-bold text-purple-900 block mb-1">
                  5. AP2 (The Parent's Credit Card):
                </span>
                <p className="font-sketch text-zinc-800">
                  Human approves a signed rule: "Max $750 for pipes". The agent never sees raw card numbers, and sneaky $400 merchant fees get blocked instantly.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border-2 border-yellow-900 bg-yellow-50">
                <span className="font-code font-bold text-yellow-900 block mb-1">
                  6. A2UI (The Architect's iPad):
                </span>
                <p className="font-sketch text-zinc-800">
                  "Sheet Music for UI". The client sees clean interactive gauges and approval buttons without having to read 4,000 lines of raw JSON.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeMainView === 'diagram' && (
          <AgentEnvironmentDiagram />
        )}

        {activeMainView === 'manga' && (
          <div className="space-y-6">
            {/* Chapter Selection Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {CHAPTERS.map((ch) => {
                const isActive = ch.id === currentChapterId;
                return (
                  <button
                    key={ch.id}
                    id={`btn-select-act-${ch.id}`}
                    onClick={() => setCurrentChapterId(ch.id)}
                    className={`px-3.5 py-2 rounded-lg border-2 font-code text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-yellow-400 text-zinc-950 border-zinc-900 manga-panel-sm scale-105'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-800'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center font-comic text-[11px]">
                      {ch.chapterNumber}
                    </span>
                    <span>{ch.protocol}: {ch.title}</span>
                  </button>
                );
              })}
            </div>

            <MangaReader
              chapters={CHAPTERS}
              currentChapterId={currentChapterId}
              onSelectChapter={(id) => setCurrentChapterId(id)}
            />
          </div>
        )}

        {activeMainView === 'blueprint' && (
          <InteractiveBlueprint />
        )}

        {activeMainView === 'bottlenecks' && (
          <BottleneckComparison />
        )}

        {activeMainView === 'simulator' && (
          <ConstructionSimulator />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-3 border-zinc-900 bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="font-comic text-sm text-zinc-900">AGENT ARCHITECTURE SPECIFICATION</span>
            <span>&bull;</span>
            <span className="font-sketch">Construction Metaphor: Breaking Old Monoliths &amp; Constructing Modular Systems</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-zinc-100 px-2.5 py-1 rounded border border-zinc-300 text-[11px]">
              Standards: MCP &bull; A2A &bull; UCP &bull; AP2 &bull; A2UI
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
