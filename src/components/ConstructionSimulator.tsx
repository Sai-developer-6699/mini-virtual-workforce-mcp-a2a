import React, { useState } from 'react';
import { INTERACTIVE_SCENARIOS } from '../data/chaptersData';
import { 
  Play, 
  RotateCcw, 
  ChevronRight, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  HardHat,
  Cpu,
  Radio,
  ShoppingCart,
  ShieldCheck,
  Monitor
} from 'lucide-react';

export const ConstructionSimulator: React.FC = () => {
  const scenario = INTERACTIVE_SCENARIOS[0];
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentStep = scenario.steps[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const getStepIcon = (protocol: string) => {
    switch (protocol) {
      case 'CORE_AGENT': return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'MCP': return <HardHat className="w-5 h-5 text-emerald-600" />;
      case 'A2A': return <Radio className="w-5 h-5 text-blue-600" />;
      case 'UCP': return <ShoppingCart className="w-5 h-5 text-sky-600" />;
      case 'AP2': return <ShieldCheck className="w-5 h-5 text-purple-600" />;
      case 'A2UI': return <Monitor className="w-5 h-5 text-yellow-600" />;
      default: return <Terminal className="w-5 h-5 text-zinc-600" />;
    }
  };

  const getProtocolBadge = (protocol: string) => {
    switch (protocol) {
      case 'CORE_AGENT': return 'bg-amber-100 text-amber-900 border-amber-800';
      case 'MCP': return 'bg-emerald-100 text-emerald-900 border-emerald-800';
      case 'A2A': return 'bg-blue-100 text-blue-900 border-blue-800';
      case 'UCP': return 'bg-sky-100 text-sky-900 border-sky-800';
      case 'AP2': return 'bg-purple-100 text-purple-900 border-purple-800';
      case 'A2UI': return 'bg-yellow-100 text-yellow-900 border-yellow-800';
      default: return 'bg-zinc-100 text-zinc-900 border-zinc-800';
    }
  };

  return (
    <div id="construction-simulator-root" className="w-full space-y-6">
      {/* Simulation Header */}
      <div className="bg-white p-6 rounded-xl border-3 border-zinc-900 manga-panel flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-comic text-xs px-2.5 py-0.5 rounded bg-zinc-900 text-yellow-300 uppercase">
              INTERACTIVE PIPELINE SIMULATOR
            </span>
            <span className="font-code text-xs font-bold text-zinc-500">
              End-to-End Construction Workflow
            </span>
          </div>
          <h2 className="text-2xl font-black font-code text-zinc-900">
            {scenario.title}
          </h2>
          <p className="font-sketch text-sm text-zinc-700 max-w-3xl">
            {scenario.goal}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="btn-sim-reset"
            onClick={handleReset}
            className="px-3 py-2 border-2 border-zinc-900 rounded-lg bg-zinc-100 hover:bg-zinc-200 font-code text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button
            id="btn-sim-next"
            onClick={handleNextStep}
            disabled={currentStepIndex === scenario.steps.length - 1}
            className="px-4 py-2 border-2 border-zinc-900 rounded-lg bg-yellow-300 hover:bg-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed font-code text-xs font-bold flex items-center gap-1 manga-panel-sm cursor-pointer transition-all"
          >
            Step Forward <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stepper Progress Bar */}
      <div className="bg-[#faf8f5] p-4 rounded-xl border-2 border-zinc-800 flex items-center justify-between overflow-x-auto gap-2">
        {scenario.steps.map((step, idx) => {
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;

          return (
            <button
              key={idx}
              id={`btn-step-progress-${idx}`}
              onClick={() => setCurrentStepIndex(idx)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 shrink-0 font-code text-xs font-bold cursor-pointer transition-all ${
                isCurrent
                  ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm scale-105'
                  : isDone
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-700'
                  : 'bg-white text-zinc-500 border-zinc-300 opacity-70 hover:opacity-100'
              }`}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] bg-white text-zinc-900 border border-zinc-900 font-comic">
                {isDone ? '✓' : step.stepNumber}
              </span>
              <span>{step.protocolUsed}</span>
            </button>
          );
        })}
      </div>

      {/* Main Active Step Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Comic Narrative & Action (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border-3 border-zinc-900 p-6 manga-panel space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b-2 border-zinc-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-300">
                  {getStepIcon(currentStep.protocolUsed)}
                </div>
                <div>
                  <span className="font-comic text-xs uppercase text-zinc-500">
                    Step {currentStep.stepNumber} of {scenario.steps.length}
                  </span>
                  <h3 className="font-code text-base font-black text-zinc-900">
                    {currentStep.agentAction}
                  </h3>
                </div>
              </div>
              <span className={`font-code text-xs font-bold px-2.5 py-1 rounded-full border-2 ${getProtocolBadge(currentStep.protocolUsed)}`}>
                {currentStep.protocolUsed}
              </span>
            </div>

            {/* Execution Log */}
            <div className="bg-zinc-50 p-4 rounded-lg border-2 border-zinc-200">
              <span className="font-code text-[11px] font-bold text-zinc-500 uppercase block mb-1">
                EXECUTION LOG:
              </span>
              <p className="font-sketch text-sm text-zinc-800 leading-relaxed">
                {currentStep.log}
              </p>
            </div>

            {/* In-character dialogue bubble */}
            <div className="p-4 rounded-xl border-2 border-zinc-900 bg-[#fffdf5] manga-panel-sm relative">
              <div className="flex items-center justify-between mb-1">
                <span className="font-code text-xs font-bold text-zinc-800">
                  Site Audio Transcript:
                </span>
                <span className="font-comic text-xs text-yellow-600">LIVE FEED</span>
              </div>
              <p className="font-sketch text-sm font-bold text-zinc-900 italic">
                "{currentStep.dialogue}"
              </p>
            </div>
          </div>

          {/* Bottom Metaphor Insight */}
          <div className="bg-amber-50 p-3.5 rounded-lg border border-amber-300 text-xs">
            <span className="font-code font-bold text-amber-900 block mb-0.5">Why this matters to the development team:</span>
            <p className="font-sketch text-amber-950">
              {currentStep.protocolUsed === 'CORE_AGENT' && 'Agent starts with zero environment access. Harness initialization is required before calling tools.'}
              {currentStep.protocolUsed === 'MCP' && 'Direct tool invocation is bounded and passive. Perfect for deterministic operations like demolition or SQL queries.'}
              {currentStep.protocolUsed === 'A2A' && 'The wall was tilted 14°. Rather than crashing the orchestrator, A2A delegated to a licensed plumber who negotiated flex joints.'}
              {currentStep.protocolUsed === 'UCP' && 'Materials were reserved in 40ms via typed commerce schemas, bypassing fragile web scraping and captcha blockers.'}
              {currentStep.protocolUsed === 'AP2' && 'Payment was executed within the $750 signed human mandate. Merchant had zero access to raw banking details.'}
              {currentStep.protocolUsed === 'A2UI' && 'The client receives an interactive native card on their iPad rather than parsing 4,000 lines of raw JSON logs.'}
            </p>
          </div>
        </div>

        {/* Right Column: Wire Protocol Packet Inspector (5 cols) */}
        <div className="lg:col-span-5 bg-zinc-900 text-white rounded-xl border-3 border-zinc-900 p-6 manga-panel space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <h4 className="font-code text-sm font-bold text-white">
                Live Protocol Packet Trace
              </h4>
            </div>
            <span className="font-code text-[11px] text-zinc-400">
              {currentStep.status.toUpperCase()}
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-code text-xs text-zinc-400">Payload on the Wire:</span>
            <pre className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-code text-emerald-300 overflow-x-auto leading-relaxed max-h-72">
              <code>{JSON.stringify(currentStep.packetPayload, null, 2)}</code>
            </pre>
          </div>

          <div className="pt-2 border-t border-zinc-800 text-xs font-code text-zinc-400 flex items-center justify-between">
            <span>Status: <span className="text-emerald-400 font-bold">200 SUCCESS</span></span>
            <span>Latency: <span className="text-sky-300 font-bold">38ms</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
