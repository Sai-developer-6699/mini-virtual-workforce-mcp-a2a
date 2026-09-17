import { Chapter, InteractiveScenario } from '../types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'core-agent',
    protocol: 'CORE_AGENT',
    chapterNumber: 1,
    title: 'The Bare-Hands Dilemma',
    subtitle: 'Why an AI Model Alone Cannot Break a Single Brick',
    metaphorTitle: 'The Lone Architect on the Construction Lot',
    quoteFromPaper: '"Software\'s next evolution isn\'t written: it\'s orchestrated by interoperable agents. Agent = Model + Harness."',
    overview: 'Imagine a brilliant master architect standing in front of a crumbling 100-year-old factory. He has vast architectural knowledge in his head, but his hands are tied behind his back. Without tools or physical actuators, he can only talk about demolition—he cannot move a single pebble.',
    strugglesWithoutProtocol: [
      'The LLM is trapped inside a text-generation loop with zero operational reach.',
      'Cannot observe state changes: Has no sensors or APIs to verify if the wall fell down.',
      'Hallucinates actions: The model says "I have demolished the wall", yet the building remains 100% standing.',
      'Zero side-effects: Pure thinking without doing.'
    ],
    protocolSuperpowers: [
      'The Harness: Encases the model in a runtime execution loop with memory and event dispatching.',
      'Sensors + Actuators: Gives the mind hands and eyes to read data and write mutations.',
      'The Agent Formula: Agent = Model (Brain) + System Prompt (Instruction) + Harness (Tools & Runtime).'
    ],
    devArchitecture: {
      sender: 'Human Prompt / User Intent',
      protocolName: 'Agent Harness Loop',
      receiver: 'Environment / Filesystem / Database',
      payloadExample: `// Agent State Loop
const agent = {
  brain: "Gemini 2.5 Pro (Thinking / Reasoning)",
  harness: "Node.js Container Runtime",
  activeMemory: ["Read blueprint.pdf", "Demolish south wing"],
  canActDirectlyOnEnvironment: false // Needs Tools!
};`,
      keyStandards: [
        'Model + Harness Pattern',
        'System Prompt Grounding',
        'Stateful Context Window',
        'Deterministic Execution Boundary'
      ]
    },
    panels: [
      {
        id: 'panel-1-1',
        panelNumber: 1,
        title: 'The Grand Vision (Inside the Mind)',
        soundEffect: 'ゴゴゴゴ (GOGOGO...)',
        soundEffectMeaning: 'Menacing internal rumbling of complex reasoning',
        storyText: 'Kenji, our Master Builder (the AI Model), arrives at the rundown lot. His neural weights contain millions of blueprints and structural formulas.',
        dialogue: [
          {
            speaker: 'Kenji (Model)',
            role: 'The AI Brain',
            text: 'I see every cracked pillar. I will tear down the brickwork, pour reinforced concrete, and construct a 5-story modern complex!',
            type: 'thought'
          }
        ],
        sketchIllustrationId: 'model-thinking-alone',
        struggleNote: 'High intelligence, zero physical power. Models predict text; they do not natively have arms or network sockets.',
        solutionNote: 'Recognizing that an LLM is purely an inference engine, not an execution engine.',
        devKeyConcepts: [
          {
            label: 'The Foundation Formula',
            codeSnippet: 'Agent = Model + Harness',
            explanation: 'The model provides next-token reasoning. The harness provides the event loop, tools, and execution sandbox.'
          }
        ]
      },
      {
        id: 'panel-1-2',
        panelNumber: 2,
        title: 'Punching Concrete with Bare Fists',
        soundEffect: 'ドカッ! (DOKA!) ... ズキズキ (THROB)',
        soundEffectMeaning: 'Impact sound followed by painful throbbing',
        storyText: 'Kenji walks up to the 12-inch brick firewall and tries to break it down with his bare hands. He strikes the bricks. Zero damage. His hands sting.',
        dialogue: [
          {
            speaker: 'Kenji (Model)',
            role: 'The AI Brain',
            text: 'I commanded the wall to crumble... why is it still standing?! I have no hands to touch this real world!',
            type: 'shout'
          },
          {
            speaker: 'Site Observer',
            role: 'Developer / User',
            text: 'You cannot move physical matter with pure conversation, Kenji. You need tools!',
            type: 'speech'
          }
        ],
        sketchIllustrationId: 'bare-hands-punch',
        struggleNote: 'Attempting to solve environment mutations purely via prompt tokens results in hallucinated completion.',
        solutionNote: 'Equipping the model with tools (functions) that the harness executes on its behalf.',
        devKeyConcepts: [
          {
            label: 'Operational Reach Gap',
            explanation: 'Models must emit structured function calls (Tool Requests) that an external system executes and feeds back.'
          }
        ]
      }
    ]
  },
  {
    id: 'mcp',
    protocol: 'MCP',
    chapterNumber: 2,
    title: 'The Universal Toolbelt',
    subtitle: 'How Model Context Protocol Eliminates the N×M Integration Crisis',
    metaphorTitle: 'Sledgehammers, Excavators, and the Universal Quick-Connect Socket',
    quoteFromPaper: '"MCP acts as the USB-C within your agent\'s harness, instantly connecting models to databases, filesystems, and web APIs, reducing integration complexity from O(N x M) to O(N + M)."',
    overview: 'Kenji needs heavy machinery: a sledgehammer for small drywall, a 20-ton excavator to demolish load-bearing pillars, and a laser level to read measurements. Without a universal standard, every tool needs a custom hydraulic adapter, different voltage, and proprietary pedals. MCP standardizes the socket so any tool snaps instantly onto Kenji\'s toolbelt.',
    strugglesWithoutProtocol: [
      'The N×M Nightmare: 5 models × 10 tools = 50 bespoke, brittle wrappers to code and maintain.',
      'Brittle API Changes: If the excavator changes its hydraulic pressure API, every agent script breaks.',
      'Context Window Bloat: Shoving 40 full tool manual schemas into the prompt overloads model attention.',
      'Security risks: Hardcoding raw API tokens into prompts or running uninspected tool invocations.'
    ],
    protocolSuperpowers: [
      'The "USB-C" Standard: One standard JSON-RPC 2.0 interface connects any model to any tool.',
      'Linear Complexity O(N + M): Add 1 model, it works with all M tools. Add 1 tool, it works with all N models.',
      'Transport Agnostic: Works over local subprocess pipes (`stdio`) or remote streaming (`SSE over HTTP`).',
      'MCP Inspector: Live diagnostic tool to inspect tool schemas and packet payloads without touching the prompt.'
    ],
    devArchitecture: {
      sender: 'Host Client / Coding Agent (LLM + Harness)',
      protocolName: 'MCP (JSON-RPC 2.0 over stdio or SSE)',
      receiver: 'MCP Server (Database, Shell, BigQuery, GitHub)',
      payloadExample: `// MCP JSON-RPC 2.0 Request
{
  "jsonrpc": "2.0",
  "id": "call-demolish-01",
  "method": "tools/call",
  "params": {
    "name": "operate_excavator",
    "arguments": {
      "target_structure": "north_pillar_04",
      "impact_force_kn": 120,
      "debris_containment": true
    }
  }
}`,
      keyStandards: [
        'JSON-RPC 2.0 Specification',
        'Stdio (Local Subprocess) & SSE (Remote Streaming)',
        'Discovery: tools/list & resources/list',
        'Auditability & Human-In-The-Loop (HITL)'
      ]
    },
    panels: [
      {
        id: 'panel-2-1',
        panelNumber: 1,
        title: 'The N×M Spaghetti Nightmare',
        soundEffect: 'ガチャガチャ! (CLATTER / CHAOS)',
        soundEffectMeaning: 'Tangled wires and incompatible metal plugs jamming together',
        storyText: 'Kenji has 5 different cranes and 10 different jackhammers. Every single jackhammer requires a different hose fitting, custom wrench, and proprietary wiring.',
        dialogue: [
          {
            speaker: 'Kenji (Model)',
            role: 'Overloaded Builder',
            text: 'I have 50 different adapters tangled around my boots! I spend 90% of my time welding custom connectors instead of building!',
            type: 'shout'
          }
        ],
        sketchIllustrationId: 'nxm-spaghetti',
        struggleNote: 'O(N × M) bespoke wrappers. If a single endpoint changes, every developer wrapper breaks across the entire company.',
        solutionNote: 'Adopt MCP as the universal standard socket for all agent tools.',
        devKeyConcepts: [
          {
            label: 'The NxM Prototyping Problem',
            codeSnippet: 'Traditional: O(N × M) vs MCP: O(N + M)',
            explanation: 'With MCP, adding one new database tool immediately exposes it to Gemini, Claude, and local models alike.'
          }
        ]
      },
      {
        id: 'panel-2-2',
        panelNumber: 2,
        title: 'The Click of the USB-C Quick-Release Socket',
        soundEffect: 'カチャッ! (KLICK-SHING!)',
        soundEffectMeaning: 'The crisp, satisfying snap of a precision quick-disconnect coupling',
        storyText: 'Kenji installs the MCP Universal Harness Socket. With a crisp click, the 20-ton pneumatic jackhammer snaps directly into his toolbelt. Data and power flow seamlessly.',
        dialogue: [
          {
            speaker: 'Kenji (Model)',
            role: 'Empowered Builder',
            text: 'Tools/list returned cleanly. Excavator initialized via stdio JSON-RPC 2.0. Impact force: 120 kN. Fire!',
            type: 'speech'
          },
          {
            speaker: 'Wall',
            role: 'Old Structure',
            text: 'BOOOOOOM! (Wall crumbles to dust!)',
            type: 'thought'
          }
        ],
        sketchIllustrationId: 'mcp-universal-socket',
        struggleNote: 'Passive, bounded domain. Tools execute deterministic, single-turn instructions without taking independent architectural responsibility.',
        solutionNote: 'Use MCP for tools, filesystems, database queries, and terminal commands where inputs and outputs are bounded.',
        devKeyConcepts: [
          {
            label: 'Bounded vs. Passive Tools',
            explanation: 'A tool is a hammer. It does not argue, ask for architectural redesigns, or manage state. It does one job and returns data.'
          }
        ]
      }
    ]
  },
  {
    id: 'a2a',
    protocol: 'A2A',
    chapterNumber: 3,
    title: 'The Crooked Wall & The Specialist',
    subtitle: 'Why You Hire a Subcontractor Instead of Grabbing a Wrench (The GOTO Problem)',
    metaphorTitle: 'The Licensed Electrician, Master Plumber, and the Site Radio',
    quoteFromPaper: '"Does the caller need a result, or does the caller need another participant to take responsibility? A2A serves as the Factory Radio, allowing specialized agents to negotiate, brainstorm, and delegate."',
    overview: 'The foundation is cleared. Now Kenji needs to install high-voltage 3-phase electrical wiring and pressurized gas pipelines. Can he just grab a pipe wrench and guess? If he hits a crooked wall or conflicting water pressure, a simple tool call will crash or cause an explosion! Instead, Kenji radios a licensed Master Plumber Agent who brings their own reasoning, takes full responsibility, and negotiates when things get messy.',
    strugglesWithoutProtocol: [
      'The "GOTO Problem": Forcing an unbounded, multi-turn reasoning process into a simple tool wrapper creates uncontrollable spaghettification.',
      'Contextual Overload: The General Contractor\'s prompt gets polluted with 5,000 lines of plumbing regulations and pipe gauge math.',
      'Attention Dilution: When one agent tries to do Billing, UI, Electric, and Plumbing in one prompt, hallucinations skyrocket.',
      'Language/Framework Silos: The Electrician Agent was written in Python/ADK; the Plumber was built in Go/LangGraph. How do they talk?'
    ],
    protocolSuperpowers: [
      'The "Factory Radio" (A2A): Standardized protocol for agents to negotiate, brainstorm, and delegate across network boundaries.',
      'Agent Card (The Machine CV): Standardized specification declaring capabilities, security policies, and schemas.',
      'State Isolation: Subcontractors manage their own internal multi-turn reasoning without polluting the Orchestrator\'s context window.',
      'Multi-Turn Negotiation: When a wall is crooked, the specialist pauses, radios back tradeoffs, and resumes without losing state.'
    ],
    devArchitecture: {
      sender: 'Kenji (Orchestrator General Contractor)',
      protocolName: 'A2A (Agent-to-Agent Protocol - Linux Foundation)',
      receiver: 'Plumber Agent / Electrician Specialist Agent',
      payloadExample: `// A2A Task Delegation Message
{
  "protocol": "A2A/v1.0",
  "action": "delegate_task",
  "recipient_card": "urn:agent:plumbing-specialist-v2",
  "task": {
    "objective": "Install 3-inch pressurized copper water intake line",
    "constraints": { "budget_max": "$850", "code_compliance": "ISO-2026-Pipe" },
    "allow_negotiation": true
  },
  "collaboration_channel": "session_stream_994"
}`,
      keyStandards: [
        'Agent Card Metadata Standard',
        'Agent Registry (Public Marketplace or Enterprise Internal)',
        'Stateful Multi-Turn Session Isolation',
        'Framework Agnostic (ADK, LangGraph, AutoGen, CrewAI)'
      ]
    },
    panels: [
      {
        id: 'panel-3-1',
        panelNumber: 1,
        title: 'The Tool vs. Specialist Trap (The Crooked Wall)',
        soundEffect: 'ピキッ! (CRACK / ALARM)',
        soundEffectMeaning: 'Pipe cracking under unexpected angle stress',
        storyText: 'Kenji tries treating the complex plumbing job like a simple tool call: `install_pipe(x=10, y=20)`. But the actual basement wall is crooked by 14 degrees! The tool forces the pipe, cracks the joint, and the room starts flooding with water!',
        dialogue: [
          {
            speaker: 'Tool Output',
            role: 'Passive API Tool',
            text: 'ERROR 500: Pipe cannot seat at (10, 20). Execution aborted. Memory corrupted.',
            type: 'shout'
          },
          {
            speaker: 'Kenji (Model)',
            role: 'Panic-Stricken Contractor',
            text: 'It just died! A simple tool has no judgment—it cannot handle real-world messy surprises!',
            type: 'thought'
          }
        ],
        sketchIllustrationId: 'crooked-wall-crash',
        struggleNote: 'The GOTO Problem: Fire-and-forget tools fail in unbounded problem spaces where negotiation and judgment are required.',
        solutionNote: 'Delegate to an autonomous specialist agent via A2A who takes responsibility and negotiates solutions.',
        devKeyConcepts: [
          {
            label: 'The Cleanest Framing',
            explanation: '"Does the caller need a result (Tool/MCP), or does the caller need another participant to take responsibility (Agent/A2A)?"'
          }
        ]
      },
      {
        id: 'panel-3-2',
        panelNumber: 2,
        title: 'The Two-Way Radio: Handshake with Master Plumber',
        soundEffect: 'ツーツー... ガチャッ (RADIO SQUAWK)',
        soundEffectMeaning: 'Crisp radio transmission link opening over the airwaves',
        storyText: 'Kenji flips on his A2A Factory Radio and discovers Master Plumber "Hana" via her Agent Card in the registry. He delegates the plumbing objective.',
        dialogue: [
          {
            speaker: 'Kenji (Orchestrator)',
            role: 'General Contractor',
            text: 'Hana, we have a 14-degree crooked wall in sector 3. Can your team route around it safely?',
            type: 'radio'
          },
          {
            speaker: 'Hana (Plumber Agent)',
            role: 'Subcontractor Specialist',
            text: 'Received, Kenji. I checked the Agent Card permissions. I will install two 45-degree flex-elbows. Cost is +$40, but zero risk of leaks. Proceed?',
            type: 'radio'
          },
          {
            speaker: 'Kenji (Orchestrator)',
            role: 'General Contractor',
            text: 'Trade-off approved. Carry on, Hana!',
            type: 'speech'
          }
        ],
        sketchIllustrationId: 'a2a-radio-handshake',
        struggleNote: 'Without A2A, Kenji would have to embed all plumbing schemas and decision trees into his own massive monolithic prompt.',
        solutionNote: 'A2A isolates the specialist\'s internal multi-turn conversation. Kenji only sees the high-level negotiation and final sign-off.',
        devKeyConcepts: [
          {
            label: 'Agent Card (Machine CV)',
            codeSnippet: 'capabilities: ["piping", "pressure_test"]',
            explanation: 'Standardized metadata describing what the agent does, authentication policies, and interaction endpoints.'
          }
        ]
      }
    ]
  },
  {
    id: 'ucp',
    protocol: 'UCP',
    chapterNumber: 4,
    title: 'The 2:00 AM Supply Run',
    subtitle: 'Universal Commerce Protocol: The Ultimate Materials & Food Delivery Translator',
    metaphorTitle: 'Ordering 100 Reinforced I-Beams (and Midnight Burritos)',
    quoteFromPaper: '"In 2024, your AI had to scrape poorly designed websites and pray checkout didn\'t crash. UCP acts like a universal translator: every vendor publishes clean machine schemas for menus, inventory, and carts."',
    overview: 'It is 2:00 AM on the construction site. Kenji\'s crew is out of 3-inch copper pipes, and the team is starving. Without UCP, Kenji\'s agent would have to launch a headless browser, navigate 8 broken merchant websites, dodge captcha popups, and guess button IDs. With UCP (Universal Commerce Protocol), every building depot and late-night taco joint speaks a single machine language for catalogs, inventory, and shopping carts.',
    strugglesWithoutProtocol: [
      'Scraping Chaos: Fragile DOM scraping breaks whenever a vendor changes their website CSS layout.',
      'Unpredictable Availability: Placing orders without knowing real-time inventory causes silent failures.',
      'Custom Cart Integrations: Writing bespoke checkout pipelines for HomeDepot, Acme Steel, and Taco Bell.',
      'Unstructured Variations: Can the burrito omit onions and add extra guacamole? Machine-readable customization was impossible.'
    ],
    protocolSuperpowers: [
      'Universal Commerce Schema: Standardized catalog, product variants, inventory lookup, and cart composition.',
      'Real-Time Capability Negotiation: Discovers tax, delivery surcharge, and ETA before committing.',
      'Open Standards: Vendor-neutral protocol preventing lock-in to single monolithic eCommerce gateways.'
    ],
    devArchitecture: {
      sender: 'Kenji Agent / Procurement Sub-agent',
      protocolName: 'UCP (Universal Commerce Protocol)',
      receiver: 'Merchant Commerce Gateway (Building Supply / Food Depot)',
      payloadExample: `// UCP Order Assembly Message
{
  "protocol": "UCP/v1.0",
  "action": "build_cart",
  "merchant_id": "urn:merchant:metro-steel-supply",
  "items": [
    {
      "sku": "COPPER-PIPE-3IN-10FT",
      "quantity": 25,
      "specs": { "alloy": "C12200", "threaded": true }
    }
  ],
  "delivery_window": "2026-09-16T04:00:00Z"
}`,
      keyStandards: [
        'UCP Catalog & Inventory Discovery Schema',
        'Standardized Item Customization & Add-ons',
        'Transparent Tax & Delivery Fee Negotiation',
        'Stateful Cart Lifecycle'
      ]
    },
    panels: [
      {
        id: 'panel-4-1',
        panelNumber: 1,
        title: 'The Web-Scraping Nightmare at 2:00 AM',
        soundEffect: 'キーーーン! (BROWSER CRASH / POPUP NOISE)',
        soundEffectMeaning: 'Chaotic screaming of cookie consent modals and broken DOM elements',
        storyText: 'Kenji tries to buy supplies online using a browser bot. The website throws a 3D captcha, the "Add to Cart" button is rendered inside an obfuscated canvas, and the site crashes.',
        dialogue: [
          {
            speaker: 'Kenji (Model)',
            role: 'Frustrated Shopper',
            text: 'A cookie banner popped up! I accidentally clicked a spam advertisement! Now the shopping cart is stuck in an infinite redirect!',
            type: 'shout'
          }
        ],
        sketchIllustrationId: 'scraping-nightmare',
        struggleNote: 'Web scraping is brittle and non-deterministic. A single DOM class rename ruins autonomous procurement.',
        solutionNote: 'UCP replaces human-centric web pages with direct machine-to-machine commerce interfaces.',
        devKeyConcepts: [
          {
            label: 'Commerce Standardization',
            explanation: 'Vendors publish native UCP endpoints. The agent queries structured JSON for prices, options, and live stock.'
          }
        ]
      },
      {
        id: 'panel-4-2',
        panelNumber: 2,
        title: 'The Clean Machine Order',
        soundEffect: 'ピッ! (DIGITAL BEEP)',
        soundEffectMeaning: 'Smooth, instantaneous protocol handshake confirmation',
        storyText: 'Kenji connects via UCP. The steel warehouse sends a clean catalog. Kenji selects 25 copper pipes, requests 4:00 AM express crane delivery, and receives a confirmed cart total: $620.00.',
        dialogue: [
          {
            speaker: 'Metro Steel Gateway',
            role: 'UCP Merchant Server',
            text: 'UCP Cart #8839 created. 25x copper pipes reserved. Tax: $48. Delivery fee: $25. Total: $693. Awaiting payment authorization.',
            type: 'speech'
          },
          {
            speaker: 'Kenji (Model)',
            role: 'Procurement Agent',
            text: 'Cart locked in 40 milliseconds. Now... how do I pay safely without risking the client\'s bank account?',
            type: 'thought'
          }
        ],
        sketchIllustrationId: 'ucp-clean-cart',
        struggleNote: 'The cart is built, but giving an autonomous agent unrestricted access to credit card credentials is an existential security hazard.',
        solutionNote: 'Transition seamlessly from UCP (What to buy) to AP2 (How to safely pay within human guardrails).',
        devKeyConcepts: [
          {
            label: 'UCP vs AP2 Split',
            explanation: 'UCP is the brain that decides what to buy and builds the cart. AP2 is the secure lockbox wallet that executes payment.'
          }
        ]
      }
    ]
  },
  {
    id: 'ap2',
    protocol: 'AP2',
    chapterNumber: 5,
    title: 'The Guardrailed Company Card',
    subtitle: 'Agent Payments Protocol: Preventing Hallucinated Runaway Spending',
    metaphorTitle: 'The Parent\'s Credit Card with Strict Cryptographic Rules',
    quoteFromPaper: '"AP2 is the open shared protocol for secure, compliant transactions. You approve a digital rule: \'You can spend up to $25 at Taco Bell\'. If the restaurant tries to charge $50, AP2 blocks it instantly."',
    overview: 'The cart is ready at Metro Steel for $693. You obviously will NOT paste your raw corporate credit card number and CVV into an AI system prompt and say "Have fun!". What if the agent hallucinates, orders 500 gold-plated hardhats, or the merchant secretly slips in an extra $300 fee? AP2 (Agent Payments Protocol) creates a verifiable, cryptographically signed Mandate with rigid bounds: maximum spend, specific merchant ID, expiration time, and cryptographic proof.',
    strugglesWithoutProtocol: [
      'The Blank Check Risk: Exposing raw credit card credentials to prompt injection or model hallucination.',
      'Hidden Fee Exploitation: Unscrupulous merchants modifying the checkout charge from $18.50 to $50.00.',
      'No Non-Repudiation: Banks cannot verify if the human approved the purchase or if an autonomous loop ran wild.',
      'Regulatory & Audit Nightmare: Zero cryptographic trace of human intent and authorization.'
    ],
    protocolSuperpowers: [
      'The Digital Mandate: Human signs a restricted rulebook (Max amount, Merchant URN, Allowed category, Expiry).',
      'The Cryptographic Promissory Note: Agent presents a signed token; raw bank/card numbers are NEVER shared with the model.',
      'Automatic Hardware Rejection: If the charge exceeds the mandate by even 1 cent, the payment gateway hardware-rejects it.',
      'HTTP 402 Payment Required: Supports native machine-to-machine micropayments (x402 / L402 standards).'
    ],
    devArchitecture: {
      sender: 'Kenji Agent (Authorized Buyer)',
      protocolName: 'AP2 (Agent Payments Protocol)',
      receiver: 'Payment Gateway / Human Approver / Bank Escrow',
      payloadExample: `// AP2 Cryptographic Mandate & Handshake
{
  "protocol": "AP2/v1.0",
  "mandate": {
    "mandate_id": "mandate_c78a01",
    "issued_by": "human_owner_key_secp256k1",
    "max_amount": { "currency": "USD", "value": 750.00 },
    "allowed_merchant": "urn:merchant:metro-steel-supply",
    "purpose": "Demolition and Pipe Materials",
    "expires_at": "2026-09-16T08:00:00Z"
  },
  "proposed_charge": 693.00,
  "client_signature": "0x8fa3...b2c9" // Verifiable proof of human intent
}`,
      keyStandards: [
        'Mandate-Based Authorization',
        'Cryptographic Proof-of-Intent (Non-repudiation)',
        'Zero-Knowledge Credential Isolation',
        'x402 Micro-Transaction Compatibility'
      ]
    },
    panels: [
      {
        id: 'panel-5-1',
        panelNumber: 1,
        title: 'The Rogue Merchant Ambush',
        soundEffect: 'ギロリ! (SINISTER SNEAK)',
        soundEffectMeaning: 'Predatory hidden fees trying to slip past undetected',
        storyText: 'The merchant sees an AI checking out and tries to secretly add a $400 "Automated Processing Surcharge", pushing the total to $1,093.',
        dialogue: [
          {
            speaker: 'Sneaky Merchant Server',
            role: 'Exploitative Endpoint',
            text: 'Adjusting cart total to $1,093.00... It\'s just a dumb bot, it won\'t notice!',
            type: 'thought'
          },
          {
            speaker: 'AP2 Guardrail',
            role: 'Hardware Shield',
            text: 'BZZZT! VIOLATION DETECTED. Mandate cap is $750.00. TRANSACTION HARD REJECTED.',
            type: 'shout'
          }
        ],
        sketchIllustrationId: 'ap2-shield-block',
        struggleNote: 'Without cryptographic mandates, agents can be easily manipulated into overspending or falling for dynamic pricing traps.',
        solutionNote: 'AP2 enforces strict authorization boundaries at the protocol level. The bank verifies the signed human mandate before clearing funds.',
        devKeyConcepts: [
          {
            label: 'Authenticity of Intent',
            explanation: 'The human signs the rule: "Up to $750 for pipes at Metro Steel". Even if the agent is tricked, it mathematically cannot sign a larger amount.'
          }
        ]
      },
      {
        id: 'panel-5-2',
        panelNumber: 2,
        title: 'The Cryptographic Handshake & Sealed Deal',
        soundEffect: 'カチャリ! (VAULT LOCK & STAMP)',
        soundEffectMeaning: 'Heavy steel vault door locking into secure alignment',
        storyText: 'The merchant corrects the charge back to the verified $693.00. AP2 emits the signed promissory token. The transaction clears cleanly. Receipt logged for auditing.',
        dialogue: [
          {
            speaker: 'Kenji (Model)',
            role: 'Procurement Agent',
            text: 'Payment verified. Steel truck dispatched. The client\'s bank account remained 100% shielded the entire time!',
            type: 'speech'
          },
          {
            speaker: 'Site Owner',
            role: 'Human Supervisor',
            text: 'I can sleep soundly knowing my card cannot be drained by runaway AI loops.',
            type: 'speech'
          }
        ],
        sketchIllustrationId: 'ap2-vault-approved',
        struggleNote: 'Traditional APIs share raw credentials; AP2 shares signed intent tokens.',
        solutionNote: 'Auditability + Security: Complete mathematical proof of every dollar spent.',
        devKeyConcepts: [
          {
            label: 'The AP2 Rulebook',
            codeSnippet: 'AP2 = Mandate + Verification + Proof',
            explanation: 'Guarantees that agents are financially accountable without ever touching raw credit card secrets.'
          }
        ]
      }
    ]
  },
  {
    id: 'a2ui',
    protocol: 'A2UI',
    chapterNumber: 6,
    title: 'The Architect\'s iPad',
    subtitle: 'Agent-to-UI: Sheet Music for Safe, Dynamic Interfaces',
    metaphorTitle: 'The Interactive Blueprint Tablet vs. The 400-Page Raw Log Dump',
    quoteFromPaper: '"When you ask a colleague \'How did Q4 perform?\', they sketch a chart on the whiteboard—not a raw CSV. A2UI is sheet music for UI: the agent writes intent, and any renderer performs it natively."',
    overview: 'The building site is active. The human property owner arrives and asks Kenji: "What is the progress and budget status?". In the old days, the agent would spew a 2,000-line wall of unreadable raw JSON data `{ "beams": [...], "status": "PENDING" }` or try to execute raw unsafe JavaScript. With A2UI (Agent-to-User Interface), the agent emits lightweight declarative UI "sheet music" that the owner\'s iPad renders into interactive cards, progress gauges, and budget approval sliders.',
    strugglesWithoutProtocol: [
      'The Raw JSON Nightmare: Users are forced to parse unformatted key-value blobs instead of seeing intuitive visuals.',
      'The Code Injection Danger: Having an LLM output arbitrary HTML/JS leads to devastating XSS security exploits.',
      'Static Pre-Built UI Rigidity: Developers must hardcode every single conceivable screen variant upfront.',
      'Framework Fragmentation: Different apps use React, Flutter, iOS SwiftUI, or Lit. One custom UI payload cannot serve all of them.'
    ],
    protocolSuperpowers: [
      'Sheet Music for UI: The agent specifies WHAT to display (Card, Chart, Slider); the host app renders it using its own trusted components.',
      'Zero Executable Code Injection: Completely immune to XSS because the agent only references components from an approved catalog.',
      'Two-Way Interaction Stream: When the human drags a slider or clicks "Approve", the agent observes the event and responds dynamically.',
      'Flat Adjacency Tree: Fast, incremental updates (`v0.9` format) that never require full page re-renders.'
    ],
    devArchitecture: {
      sender: 'Kenji Agent (Emits UI Intent)',
      protocolName: 'A2UI (v0.9 JSON Adjacency List)',
      receiver: 'Client Renderer (React, Flutter, SwiftUI, Lit)',
      payloadExample: `// A2UI v0.9 Declarative Component Tree
{
  "version": "v0.9",
  "updateComponents": {
    "surfaceId": "site_progress",
    "components": [
      { "id": "root", "component": "Card", "children": ["title", "gauge", "approve_btn"] },
      { "id": "title", "component": "Text", "text": "Foundation Demolition: 85% Complete", "variant": "h2" },
      { "id": "gauge", "component": "ProgressBar", "value": 0.85, "color": "emerald" },
      { "id": "approve_btn", "component": "Button", "child": "btn_label", "action": { "event": { "name": "approve_phase_2" } } },
      { "id": "btn_label", "component": "Text", "text": "Authorize Phase 2 Pouring" }
    ]
  }
}`,
      keyStandards: [
        'A2UI Basic Component Catalog (18 standard types)',
        'Data Model Binding ({ "path": "/total" })',
        'Separation of Intent vs Native Platform Rendering',
        'Event Observation Stream'
      ]
    },
    panels: [
      {
        id: 'panel-6-1',
        panelNumber: 1,
        title: 'The Dreaded Wall of Raw JSON',
        soundEffect: 'ボフッ! (PUFF / SIGH)',
        soundEffectMeaning: 'The heavy thud of a 500-page dense textbook falling on a desk',
        storyText: 'The owner asks: "Show me how much money we have left!". The raw agent prints 4,000 lines of unformatted nested JSON arrays across the screen.',
        dialogue: [
          {
            speaker: 'Building Owner',
            role: 'Human Client',
            text: 'What am I looking at?! Line 492 has an integer and three brackets! Am I over budget or under budget?!',
            type: 'shout'
          },
          {
            speaker: 'Kenji (Model)',
            role: 'Embarrassed Agent',
            text: 'I provided the exact data... but human eyes don\'t run JSON parsers in their corneas!',
            type: 'thought'
          }
        ],
        sketchIllustrationId: 'raw-json-mess',
        struggleNote: 'Communication gap: Agents communicate in JSON; humans synthesize decisions through visual hierarchy and interactive controls.',
        solutionNote: 'A2UI transforms agent intent into rich, secure interactive visual layouts at runtime.',
        devKeyConcepts: [
          {
            label: 'The Communication Gap',
            explanation: 'When asking a colleague for Q4 performance, they draw a whiteboard chart, not a CSV dump.'
          }
        ]
      },
      {
        id: 'panel-6-2',
        panelNumber: 2,
        title: 'The Sheet Music Symphony: Native Interactive UI',
        soundEffect: 'ピカーン! (GLEAM & HARMONY)',
        soundEffectMeaning: 'Crisp digital brilliance as polished interface components click into place',
        storyText: 'Kenji emits an A2UI message. The owner\'s tablet instantly renders a gorgeous interactive blueprint: budget progress bars, a material toggle switch, and a big green "Approve Phase 2" button.',
        dialogue: [
          {
            speaker: 'Building Owner',
            role: 'Delighted Human',
            text: 'I just dragged the budget slider from 60% to 80% and clicked Approve. That took 3 seconds!',
            type: 'speech'
          },
          {
            speaker: 'Kenji (Model)',
            role: 'Harmonious Agent',
            text: 'Observed user event "approve_phase_2" with value $12,000. Commencing foundation pouring immediately!',
            type: 'speech'
          }
        ],
        sketchIllustrationId: 'a2ui-tablet-display',
        struggleNote: 'Safe Generative UI: The LLM didn\'t ship executable scripts (zero XSS); it simply composed trusted components from the catalog.',
        solutionNote: 'True Human-in-the-Loop synergy where UI serves as a bidirectional communication medium.',
        devKeyConcepts: [
          {
            label: 'Separation of Intent and Renderer',
            explanation: 'The agent writes what to show (like sheet music). React, Flutter, or iOS native renders it through its own design system.'
          }
        ]
      }
    ]
  }
];

export const INTERACTIVE_SCENARIOS: InteractiveScenario[] = [
  {
    id: 'scenario-demo-construct',
    title: 'Demolish Warehouse & Build Clean Water Grid',
    goal: 'Demolish crumbling concrete, delegate water intake to a licensed specialist, purchase copper pipe fittings, pay safely with a verified mandate, and show the owner a progress dashboard.',
    difficulty: 'Architect',
    steps: [
      {
        stepNumber: 1,
        agentAction: 'General Contractor evaluates site demolition requirements',
        protocolUsed: 'CORE_AGENT',
        status: 'planning',
        log: 'Kenji assesses the crumbling warehouse structure. Determines manual demolition is impossible. Needs actuator tools.',
        dialogue: 'Kenji: "I cannot break reinforced concrete with words. Attaching demolition tools now."',
        packetPayload: {
          mind_state: 'Demolition plan formulated',
          required_tools: ['hydraulic_hammer', 'laser_scanner']
        }
      },
      {
        stepNumber: 2,
        agentAction: 'Call heavy excavator tool via MCP standard socket',
        protocolUsed: 'MCP',
        status: 'calling_tool',
        log: 'Dispatched JSON-RPC 2.0 `tools/call: operate_excavator` over stdio transport. Pillar 4 collapsed cleanly.',
        dialogue: 'Kenji: "Pillar demolished. Zero bespoke API wrappers written. Standard MCP socket executed cleanly."',
        packetPayload: {
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name: 'operate_excavator', args: { target: 'pillar_04', force_kn: 150 } },
          result: { status: 'demolished', debris_tons: 14.2 }
        }
      },
      {
        stepNumber: 3,
        agentAction: 'Subcontract plumbing via A2A radio to handle crooked wall',
        protocolUsed: 'A2A',
        status: 'delegating',
        log: 'Discovered Master Plumber Hana in the Agent Registry. Delegated pipe routing across network boundary.',
        dialogue: 'Hana: "Kenji, wall has 14° tilt. Recommending dual flex-elbows. Negotiated tradeoff approved."',
        packetPayload: {
          protocol: 'A2A/v1.0',
          action: 'delegate_task',
          target_agent: 'urn:agent:hana-master-plumber',
          negotiation_state: 'RESOLVED_FLEX_ELBOWS',
          subcontractor_status: 'EXECUTION_READY'
        }
      },
      {
        stepNumber: 4,
        agentAction: 'Procure 25 copper pipe joints via UCP catalog & cart API',
        protocolUsed: 'UCP',
        status: 'procuring',
        log: 'Queried Metro Steel UCP gateway. Retrieved real-time stock, negotiated $25 delivery surcharge, assembled cart.',
        dialogue: 'Kenji: "UCP cart assembled in 40ms. Total: $693.00. No web scraping or broken HTML forms."',
        packetPayload: {
          protocol: 'UCP/v1.0',
          action: 'cart_locked',
          merchant: 'Metro Steel Supply',
          items_count: 25,
          total_with_tax: 693.00
        }
      },
      {
        stepNumber: 5,
        agentAction: 'Pay for supplies using AP2 Cryptographic Mandate',
        protocolUsed: 'AP2',
        status: 'paying',
        log: 'Checked Human Mandate cap ($750.00). Dispatched signed promissory token to merchant bank. Transaction approved.',
        dialogue: 'AP2 Gateway: "Mandate valid. $693.00 captured. Client credit card shielded. 0 risk of runaway billing."',
        packetPayload: {
          protocol: 'AP2/v1.0',
          mandate_id: 'mandate_c78a01',
          approved_amount: 693.00,
          limit: 750.00,
          signature_valid: true,
          status: 'SETTLED'
        }
      },
      {
        stepNumber: 6,
        agentAction: 'Render live progress dashboard for owner using A2UI',
        protocolUsed: 'A2UI',
        status: 'rendering_ui',
        log: 'Generated v0.9 declarative UI tree. Client tablet renders native interactive Card, Progress Bar, and Approval Button.',
        dialogue: 'Building Owner: "I can see the exact breakdown and approve the next stage in one tap!"',
        packetPayload: {
          version: 'v0.9',
          surfaceId: 'site_dashboard',
          components: ['Card', 'ProgressBar: 100%', 'Button: Approve Concrete Pour']
        }
      }
    ]
  }
];
