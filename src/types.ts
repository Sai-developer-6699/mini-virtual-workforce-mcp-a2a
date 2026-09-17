export type ProtocolKey = 'CORE_AGENT' | 'MCP' | 'A2A' | 'UCP' | 'AP2' | 'A2UI';

export interface MangaPanel {
  id: string;
  panelNumber: number;
  title: string;
  soundEffect?: string;
  soundEffectMeaning?: string;
  storyText: string;
  dialogue?: {
    speaker: string;
    role: string;
    text: string;
    type: 'speech' | 'thought' | 'shout' | 'radio';
  }[];
  sketchIllustrationId: string;
  struggleNote: string;
  solutionNote: string;
  devKeyConcepts: {
    label: string;
    codeSnippet?: string;
    explanation: string;
  }[];
}

export interface Chapter {
  id: string;
  protocol: ProtocolKey;
  chapterNumber: number;
  title: string;
  subtitle: string;
  metaphorTitle: string;
  quoteFromPaper: string;
  overview: string;
  panels: MangaPanel[];
  strugglesWithoutProtocol: string[];
  protocolSuperpowers: string[];
  devArchitecture: {
    sender: string;
    protocolName: string;
    receiver: string;
    payloadExample: string;
    keyStandards: string[];
  };
}

export interface ScenarioStep {
  stepNumber: number;
  agentAction: string;
  protocolUsed: ProtocolKey | 'NONE';
  status: 'planning' | 'calling_tool' | 'delegating' | 'procuring' | 'paying' | 'rendering_ui';
  log: string;
  dialogue: string;
  packetPayload?: Record<string, any>;
}

export interface InteractiveScenario {
  id: string;
  title: string;
  goal: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Architect';
  steps: ScenarioStep[];
}
