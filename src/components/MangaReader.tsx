import React, { useState } from 'react';
import { Chapter } from '../types';
import { MangaIllustration } from './MangaIllustrations';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Code2, 
  AlertTriangle, 
  Sparkles, 
  HelpCircle,
  Layers,
  Radio,
  FileCode
} from 'lucide-react';

interface MangaReaderProps {
  chapters: Chapter[];
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
}

export const MangaReader: React.FC<MangaReaderProps> = ({
  chapters,
  currentChapterId,
  onSelectChapter,
}) => {
  const chapter = chapters.find((c) => c.id === currentChapterId) || chapters[0];
  const currentIndex = chapters.findIndex((c) => c.id === currentChapterId);

  const [activeTab, setActiveTab] = useState<'story' | 'architecture' | 'struggles'>('story');
  const [showPayload, setShowPayload] = useState(false);

  const handleNext = () => {
    if (currentIndex < chapters.length - 1) {
      onSelectChapter(chapters[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectChapter(chapters[currentIndex - 1].id);
    }
  };

  const getProtocolColor = (protocol: string) => {
    switch (protocol) {
      case 'CORE_AGENT': return 'bg-amber-100 text-amber-900 border-amber-900';
      case 'MCP': return 'bg-emerald-100 text-emerald-900 border-emerald-900';
      case 'A2A': return 'bg-blue-100 text-blue-900 border-blue-900';
      case 'UCP': return 'bg-sky-100 text-sky-900 border-sky-900';
      case 'AP2': return 'bg-purple-100 text-purple-900 border-purple-900';
      case 'A2UI': return 'bg-amber-100 text-amber-900 border-amber-900';
      default: return 'bg-zinc-100 text-zinc-900 border-zinc-900';
    }
  };

  return (
    <div id="manga-reader-root" className="w-full space-y-6">
      {/* Episode Header Strip */}
      <div id="manga-chapter-header" className="bg-white p-5 border-3 border-zinc-900 rounded-xl manga-panel flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-comic text-xs tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-900 text-white uppercase">
              Act {chapter.chapterNumber} of {chapters.length}
            </span>
            <span className={`font-code text-xs font-bold px-2.5 py-0.5 rounded-full border-2 ${getProtocolColor(chapter.protocol)}`}>
              Protocol: {chapter.protocol}
            </span>
            <span className="font-sketch text-xs text-zinc-600 hidden sm:inline">
              Manga Sketch Chronicles
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 font-code">
            {chapter.title}
          </h2>
          <p className="font-sketch text-base text-zinc-700">
            {chapter.metaphorTitle} &mdash; <span className="text-zinc-500">{chapter.subtitle}</span>
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="btn-prev-chapter"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-3 py-2 border-2 border-zinc-900 rounded-lg bg-zinc-100 hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed font-code text-xs font-bold flex items-center gap-1 cursor-pointer transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Prev Act
          </button>
          <button
            id="btn-next-chapter"
            onClick={handleNext}
            disabled={currentIndex === chapters.length - 1}
            className="px-4 py-2 border-2 border-zinc-900 rounded-lg bg-yellow-300 hover:bg-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed font-code text-xs font-bold flex items-center gap-1 manga-panel-sm cursor-pointer transition-all"
          >
            Next Act <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* View Mode Toggle: Manga Storyboard vs Deep Dev Architecture vs Bottlenecks */}
      <div id="manga-tab-controls" className="flex flex-wrap gap-2 border-b-2 border-zinc-300 pb-2">
        <button
          id="tab-manga-story"
          onClick={() => setActiveTab('story')}
          className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'story'
              ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
              : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Manga Storyboard Panels
        </button>

        <button
          id="tab-manga-struggles"
          onClick={() => setActiveTab('struggles')}
          className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'struggles'
              ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
              : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          Struggles & Bottlenecks Overcome
        </button>

        <button
          id="tab-manga-architecture"
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 rounded-lg font-code text-xs font-bold border-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'architecture'
              ? 'bg-zinc-900 text-white border-zinc-900 manga-panel-sm'
              : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900'
          }`}
        >
          <Code2 className="w-4 h-4 text-sky-400" />
          Dev Architecture & Schema
        </button>
      </div>

      {/* Quote Banner from Whitepaper */}
      <div id="paper-quote-callout" className="bg-[#fffdfa] border-l-4 border-amber-500 p-4 rounded-r-lg border border-zinc-200">
        <div className="flex items-start gap-3">
          <span className="font-comic text-2xl text-amber-600">“</span>
          <div>
            <p className="font-sketch text-sm md:text-base text-zinc-800 leading-relaxed italic">
              {chapter.quoteFromPaper}
            </p>
            <span className="font-code text-[11px] text-zinc-500 mt-1 block">
              &mdash; Google Whitepaper: "Agent Tools & Interoperability" (May 2026)
            </span>
          </div>
        </div>
      </div>

      {/* TAB 1: Manga Storyboard Panels */}
      {activeTab === 'story' && (
        <div id="manga-panels-container" className="space-y-8">
          <div className="bg-white p-4 rounded-xl border-2 border-zinc-900 manga-panel-sm">
            <h3 className="font-comic text-lg text-zinc-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              STORY SYNOPSIS
            </h3>
            <p className="font-sketch text-sm md:text-base text-zinc-700 mt-1">
              {chapter.overview}
            </p>
          </div>

          {/* Sequential Manga Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {chapter.panels.map((panel) => (
              <div
                key={panel.id}
                id={`panel-${panel.id}`}
                className="bg-white rounded-xl border-3 border-zinc-900 overflow-hidden manga-panel flex flex-col justify-between"
              >
                {/* Panel Header */}
                <div className="bg-zinc-900 text-white px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-comic text-xs px-2 py-0.5 rounded bg-yellow-400 text-zinc-900">
                      PANEL #{panel.panelNumber}
                    </span>
                    <h4 className="font-code text-xs md:text-sm font-bold truncate">
                      {panel.title}
                    </h4>
                  </div>
                  {panel.soundEffect && (
                    <span className="font-comic text-xs text-yellow-300">
                      {panel.soundEffect}
                    </span>
                  )}
                </div>

                {/* SVG Manga Illustration */}
                <div className="border-b-2 border-zinc-900 relative">
                  <MangaIllustration id={panel.sketchIllustrationId} className="w-full h-72" />

                  {/* Japanese sound effect badge */}
                  {panel.soundEffectMeaning && (
                    <div className="absolute bottom-2 right-2 bg-white/95 px-2.5 py-1 rounded border border-zinc-900 text-[11px] font-sketch text-zinc-800 shadow-sm backdrop-blur-xs">
                      SFX: {panel.soundEffectMeaning}
                    </div>
                  )}
                </div>

                {/* Dialogue & Story Narrative */}
                <div className="p-4 space-y-3 bg-[#faf9f6] flex-1">
                  <p className="font-sketch text-sm text-zinc-800 leading-snug">
                    {panel.storyText}
                  </p>

                  {/* Character speech bubbles */}
                  {panel.dialogue && panel.dialogue.length > 0 && (
                    <div className="space-y-2 pt-1">
                      {panel.dialogue.map((d, dIdx) => (
                        <div
                          key={dIdx}
                          className={`p-2.5 rounded-lg border-2 text-xs font-sketch ${
                            d.type === 'shout'
                              ? 'bg-red-50 border-red-800 text-red-950 font-bold'
                              : d.type === 'thought'
                              ? 'bg-sky-50 border-sky-700 text-sky-950 italic'
                              : d.type === 'radio'
                              ? 'bg-blue-50 border-blue-900 text-blue-950 font-code'
                              : 'bg-white border-zinc-800 text-zinc-900'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-code font-bold text-[11px] text-zinc-600">
                              {d.speaker} ({d.role})
                            </span>
                            <span className="font-comic text-[10px] uppercase text-zinc-400">
                              [{d.type}]
                            </span>
                          </div>
                          <p>{d.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Struggle vs Solution Dev Callout Footer */}
                <div className="p-3 bg-zinc-100 border-t-2 border-zinc-900 text-xs space-y-2">
                  <div className="flex items-start gap-2 text-red-800">
                    <span className="font-code font-bold shrink-0 text-[11px]">STRUGGLE:</span>
                    <span className="font-sketch text-[12px]">{panel.struggleNote}</span>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-800">
                    <span className="font-code font-bold shrink-0 text-[11px]">SOLUTION:</span>
                    <span className="font-sketch text-[12px]">{panel.solutionNote}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: Struggles & Bottlenecks Overcome */}
      {activeTab === 'struggles' && (
        <div id="manga-struggles-container" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Struggles Without This Protocol */}
            <div className="bg-red-50 border-3 border-red-900 p-5 rounded-xl manga-panel">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-comic text-xl text-red-950">
                  THE CHAOS WITHOUT {chapter.protocol}
                </h3>
              </div>
              <p className="font-sketch text-sm text-red-800 mb-4">
                What breaks, stalls, or explodes when developers omit this standard:
              </p>
              <ul className="space-y-3">
                {chapter.strugglesWithoutProtocol.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-red-300">
                    <span className="font-code font-bold text-red-600 shrink-0">❌</span>
                    <span className="font-sketch text-sm text-zinc-800 leading-snug">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Protocol Superpowers */}
            <div className="bg-emerald-50 border-3 border-emerald-900 p-5 rounded-xl manga-panel">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h3 className="font-comic text-xl text-emerald-950">
                  {chapter.protocol} ARCHITECTURAL SUPERPOWERS
                </h3>
              </div>
              <p className="font-sketch text-sm text-emerald-800 mb-4">
                How this standard resolves the bottleneck cleanly for developers:
              </p>
              <ul className="space-y-3">
                {chapter.protocolSuperpowers.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-emerald-300">
                    <span className="font-code font-bold text-emerald-600 shrink-0">✅</span>
                    <span className="font-sketch text-sm text-zinc-800 leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Dev Architecture & Schema */}
      {activeTab === 'architecture' && (
        <div id="manga-architecture-container" className="space-y-6">
          <div className="bg-zinc-900 text-zinc-100 p-6 rounded-xl border-3 border-zinc-900 manga-panel space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="font-comic text-xs uppercase text-yellow-400">Engineering Specification</span>
                <h3 className="font-code text-xl font-bold text-white">
                  {chapter.devArchitecture.protocolName} Flow
                </h3>
              </div>
              <button
                id="btn-toggle-payload"
                onClick={() => setShowPayload(!showPayload)}
                className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-code text-zinc-200 border border-zinc-700 flex items-center gap-1.5 cursor-pointer"
              >
                <FileCode className="w-3.5 h-3.5 text-yellow-400" />
                {showPayload ? 'Collapse Payload' : 'Expand Raw Payload'}
              </button>
            </div>

            {/* Sender / Protocol / Receiver Topology */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
                <span className="font-code text-[11px] text-zinc-400 uppercase">1. Sender Entity</span>
                <p className="font-code text-sm font-bold text-sky-300 mt-1">
                  {chapter.devArchitecture.sender}
                </p>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg border border-yellow-500/50 text-center relative">
                <span className="font-code text-[11px] text-yellow-400 uppercase">2. Interoperability Protocol</span>
                <p className="font-code text-sm font-bold text-white mt-1">
                  {chapter.devArchitecture.protocolName}
                </p>
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-yellow-400 text-lg">
                  &rarr;
                </div>
              </div>

              <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700">
                <span className="font-code text-[11px] text-zinc-400 uppercase">3. Receiver Target</span>
                <p className="font-code text-sm font-bold text-emerald-300 mt-1">
                  {chapter.devArchitecture.receiver}
                </p>
              </div>
            </div>

            {/* Wire Payload Example */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-code text-xs text-zinc-400 font-bold">Standard Wire Packet Example:</span>
                <span className="font-code text-[11px] text-emerald-400">Strict Schema Compliant</span>
              </div>
              <pre className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-code text-emerald-300 overflow-x-auto leading-relaxed">
                <code>{chapter.devArchitecture.payloadExample}</code>
              </pre>
            </div>

            {/* Key Standards Checklist */}
            <div className="space-y-2">
              <span className="font-code text-xs text-zinc-400 font-bold">Key Architectural Guarantees:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {chapter.devArchitecture.keyStandards.map((std, i) => (
                  <div key={i} className="flex items-center gap-2 bg-zinc-800/60 px-3 py-2 rounded border border-zinc-700/60 text-xs font-code text-zinc-200">
                    <span className="text-yellow-400 font-bold">#</span>
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
