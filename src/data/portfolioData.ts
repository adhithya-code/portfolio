export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  category: 'Local NLP & Security' | 'IoT & Automotive' | 'Distributed Cloud' | 'Embedded Systems';
  kvmChannel: 'HDMI-1' | 'HDMI-2' | 'DP-1' | 'TYPE-C';
  status: 'ONLINE' | 'ACTIVE' | 'DEPLOYED';
  repoUrl: string;
  liveUrl?: string;
  pipeline: {
    ingestion: string;
    compute: string;
    storage: string;
    output: string;
  };
  metrics: {
    latency: string;
    memoryLimit: string;
    throughputOrPower: string;
    boundary: string;
  };
  tradeoffs: string;
  technicalHighlights: string[];
}

export interface HardwareRig {
  id: string;
  name: string;
  classification: string;
  dieArchitecture: string;
  displayOrAcoustic: string;
  powerAndThermals: string;
  tuningOffsets: string[];
  rdVerdict: string;
  inspectableZones: {
    title: string;
    coord: { x: number; y: number };
    spec: string;
    detail: string;
  }[];
}

export interface InternshipExperience {
  role: string;
  organization: string;
  domain: string;
  period: string;
  deliverables: string[];
  telemetryStamp: string;
}

export interface ContactEndpoints {
  identity: string;
  domain: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  qcStamp: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "ADHITHYA S",
    title: "Systems & Hardware Engineer",
    serialNumber: "SN-2026-ENG-0904-REV2",
    qcStatus: "PASSED // LAB CALIBRATED",
    operatingDomain: "Low-Level Systems, Linux Kernel Performance, Hardware Teardowns & Edge Architectures",
    location: "Chennai, India",
    firmwareBuild: "CachyOS / Linux 6.13-bore // EEVDF Optimized",
  },
  
  internships: [
    {
      role: "Transit Systems Engineering Intern",
      organization: "Chennai Metro Rail Limited (CMRL)",
      domain: "Mass Transit Telemetry & Signaling Infrastructure",
      period: "Industrial Practicum",
      deliverables: [
        "Analyzed real-time passenger transit telemetry and automated signaling communications across active rail corridors.",
        "Evaluated station-level SCADA sensor ingestion pipelines under strict zero-fail reliability standards.",
        "Studied commuter load telemetry and train frequency dispatch algorithms under high-density peak envelopes."
      ],
      telemetryStamp: "CMRL-SCADA // RAIL-SIG-GRADE-A"
    },
    {
      role: "Edge AI & TinyML Intern",
      organization: "Eazythings Technology",
      domain: "Low-Power Embedded Machine Learning & Sensor Microcontrollers",
      period: "Engineering Internship",
      deliverables: [
        "Deployed quantized 8-bit neural network models on ultra-low-power edge microcontrollers for real-time inference.",
        "Built embedded sensor telemetry ingestion routines with deterministic microsecond sampling loops.",
        "Optimized micro-watt standby power gating routines to maximize battery runtime across remote telemetry nodes."
      ],
      telemetryStamp: "TINYML-Q8 // MCU-GATE-3.3V"
    }
  ] as InternshipExperience[],

  projects: [
    {
      id: "context-guard",
      name: "Context-Guard",
      tagline: "Local-First Privacy & Text Anonymization Engine",
      category: "Local NLP & Security",
      kvmChannel: "HDMI-1",
      status: "ONLINE",
      repoUrl: "https://github.com/adhithya-code/Context-Guard",
      pipeline: {
        ingestion: "Raw Text / Multi-Format Document Stream",
        compute: "spaCy NLP Entity Extraction & Tokenization Engine",
        storage: "In-Memory Ephemeral Deterministic Hash Map",
        output: "Sanitized Buffer Dispatch & Zero-Leak Log"
      },
      metrics: {
        latency: "< 50ms (Medium Text Payloads)",
        memoryLimit: "< 250MB Resident RAM",
        throughputOrPower: "Local CPU Multi-Core",
        boundary: "100% Offline / Zero-Exfiltration Boundary"
      },
      tradeoffs: "Bypassed cloud LLM pipelines entirely to eradicate data leaks, latency, and recurring API costs. Accepted localized spaCy/regex classification trade-offs in favor of deterministic sandboxed execution.",
      technicalHighlights: [
        "Local spaCy NLP pipeline running sandboxed with disabled outbound sockets.",
        "Deterministic entity hashing allows bi-directional de-anonymization on client-side only.",
        "Strict resident set size ceiling guaranteed under 250MB."
      ]
    },
    {
      id: "guardian-ev",
      name: "GuardianEV",
      tagline: "IoT Proactive Electric Vehicle Predictive Maintenance Suite",
      category: "IoT & Automotive",
      kvmChannel: "HDMI-2",
      status: "ACTIVE",
      repoUrl: "https://github.com/adhithya-code/GuardianEV",
      pipeline: {
        ingestion: "CAN Bus / High-Frequency Telemetry Ingestion",
        compute: "Scikit-Learn Anomaly & Fault Classification Trees",
        storage: "Time-Series Rolling Window Ring Buffer",
        output: "Proactive Maintenance Dispatch & Alert Bus"
      },
      metrics: {
        latency: "< 15ms Inference / < 10ms Ingestion",
        memoryLimit: "< 180MB Edge Footprint",
        throughputOrPower: "Low-Power Automotive ECU / SBC",
        boundary: "Real-Time Telemetry Stream"
      },
      tradeoffs: "Quantized continuous time-series models into targeted classification trees to execute reliably on low-power vehicle hardware without demanding discrete automotive GPU accelerators.",
      technicalHighlights: [
        "Sub-10ms packet ingestion rate for high-frequency battery cell and motor telemetry.",
        "Decision-tree anomaly detection delivers deterministic sub-15ms inference latency.",
        "Predicts thermal runaway hazards and degradation curves before critical threshold breaches."
      ]
    },
    {
      id: "edusphere",
      name: "EduSphere",
      tagline: "Distributed Collaborative Education & Real-Time Sync Platform",
      category: "Distributed Cloud",
      kvmChannel: "DP-1",
      status: "DEPLOYED",
      repoUrl: "https://github.com/adhithya-code/EduSphere",
      pipeline: {
        ingestion: "React 19 Frontend User Input / State Actions",
        compute: "Edge API Gateway & Node.js Service Backplane",
        storage: "Azure Cosmos DB Relational/Document State",
        output: "Low-Latency WebSocket Broadcast & State Sync"
      },
      metrics: {
        latency: "< 45ms Socket Propagation",
        memoryLimit: "Autoscaling Cloud Cluster",
        throughputOrPower: "Multi-Tenant High Concurrency",
        boundary: "Cloud Edge Distributed Nodes"
      },
      tradeoffs: "Enforced strict state serialization and read-after-write consistency over speculative optimistic UI updates to prevent collaborative desync across concurrent multi-tenant classrooms.",
      technicalHighlights: [
        "Full-duplex WebSocket communication backbone achieving < 45ms message propagation.",
        "Azure Cosmos DB multi-region replication maintaining strict global data consistency.",
        "Engineered with React 19 concurrent features and high-throughput Node.js microservices."
      ]
    },
    {
      id: "terminus",
      name: "Terminus",
      tagline: "Location-Aware Geofencing Low-Power Utility",
      category: "Embedded Systems",
      kvmChannel: "TYPE-C",
      status: "ONLINE",
      repoUrl: "https://github.com/adhithya-code/Terminus",
      pipeline: {
        ingestion: "Android Geofencing API / GNSS Cell Triangulation",
        compute: "Proximity Boundary Evaluation Engine",
        storage: "Encrypted SQLite Local Geofence Registry",
        output: "Hardware Audio & Haptic Interrupt Trigger"
      },
      metrics: {
        latency: "5s Polling (Micro) / 60s (Macro)",
        memoryLimit: "< 45MB Background Service",
        throughputOrPower: "< 1.5% Battery Drain / 8-Hour Window",
        boundary: "Client-Side OS Sandbox"
      },
      tradeoffs: "Sacrificed sub-meter continuous GPS precision during high-speed transit phases to bypass power-hungry GPS hardware locks, relying on low-power cell/Wi-Fi towers until reaching target perimeter.",
      technicalHighlights: [
        "Dynamic dual-rate polling shifts from 60s macro-transit to 5s micro-approach.",
        "Ultra-low energy consumption (< 1.5% over 8 hours of continuous background operation).",
        "Deterministic local alarm trigger guarantees zero missed station arrivals."
      ]
    }
  ] as ProjectData[],

  hardwareRigs: [
    {
      id: "zenbook-oled",
      name: "ASUS Zenbook 14 OLED",
      classification: "Daily Engineering Workstation // Meteor Lake",
      dieArchitecture: "Intel Core Ultra 7 155H (6P + 8E + 2LPE) with Integrated NPU Compute Tile",
      displayOrAcoustic: "14.0\" 2.8K 120Hz Lumina OLED (2880x1800, 0.2ms GtG, 600-nit, 100% DCI-P3)",
      powerAndThermals: "Dynamic 28W PL1 Sustained / 65W PL2 Burst // Dual Heatpipe Dissipation",
      tuningOffsets: [
        "Kernel-level thermald custom profiles configured for silent 42°C chassis surface limit",
        "Linux CPU governor tuned to EEVDF scheduler with Bore kernel responsiveness patches",
        "LPDDR5X-7467 MT/s low-power state gating optimized for 12+ hour battery compilation life"
      ],
      rdVerdict: "Meteor Lake tile architecture delivers unprecedented single-thread compilation efficiency and media decode thermals. However, soldered LPDDR5X eliminates post-purchase memory expansion; requires active thermald management on Arch Linux to avert micro-throttling under sustained multi-threaded kernel builds.",
      inspectableZones: [
        {
          title: "Meteor Lake Compute Tile",
          coord: { x: 38, y: 44 },
          spec: "Intel 4 (7nm EUV) 16-Core / 22-Thread",
          detail: "Hybrid core topology isolating background daemons to ultra-low-power Low Power Island E-cores."
        },
        {
          title: "Lumina OLED Subpixel Matrix",
          coord: { x: 72, y: 22 },
          spec: "2880x1800 120Hz 0.2ms Response",
          detail: "Direct organic self-emitting subpixels providing infinite contrast ratio with zero edge backlight bleed."
        },
        {
          title: "Sintered Copper Heatpipe Assembly",
          coord: { x: 55, y: 62 },
          spec: "Dual Composite Heatpipes + High-Density Fin Stack",
          detail: "Vapor-phase thermal transfer transferring 28W continuous TDP to rear exhaust channels."
        }
      ]
    },
    {
      id: "momentum-4",
      name: "Sennheiser Momentum 4 & Studio DAC",
      classification: "Acoustic Reference Bench & Transducer Analysis",
      dieArchitecture: "42mm Audiophile-Grade Dynamic Transducers // Angled Baffle Acoustic Chamber",
      displayOrAcoustic: "6Hz - 22kHz Frequency Range // Low-Distortion Acoustic Damping",
      powerAndThermals: "60-Hour Active Battery Subsystem // Dual DSP Feedback Cancellation",
      tuningOffsets: [
        "Bluetooth 5.2 transmission via aptX Adaptive / AAC high-bitrate codecs",
        "Dedicated bypass circuit for 3.5mm passive wired analog & balanced 4.4mm line out",
        "Parametric EQ calibrated for extended sub-bass linearity without 300Hz-3kHz vocal masking"
      ],
      rdVerdict: "Acoustic chamber design yields exceptionally low harmonic distortion across the lower octaves. The digital ANC filtering pipeline demonstrates minimal phase cancellation artifacts compared to earlier DSP architectures, and the passive wired bypass mode offers uncolored reference reproduction for soundstage analysis.",
      inspectableZones: [
        {
          title: "42mm Dynamic Transducer",
          coord: { x: 45, y: 35 },
          spec: "42mm Neodymium Motor Assembly",
          detail: "Ultra-thin diaphragm engineered for transient attack speed and low mechanical inertia."
        },
        {
          title: "Angled Acoustic Baffle",
          coord: { x: 62, y: 50 },
          spec: "Geometric Waveguide Channelling",
          detail: "Angles sound waves directly into the ear canal, mimicking physical studio monitor cross-feed."
        },
        {
          title: "Hybrid ANC DSP Circuit",
          coord: { x: 28, y: 68 },
          spec: "Quad Beamforming Mics + Real-Time Anti-Phase DSP",
          detail: "Adaptive environmental noise reduction with linear group delay preservation."
        }
      ]
    },
    {
      id: "custom-desktop",
      name: "High-Performance Workstation & Peripherals",
      classification: "Low-Latency Systems Engineering & Multi-Display Bench",
      dieArchitecture: "Multi-Core High-Throughput Desktop Architecture",
      displayOrAcoustic: "Dual-Mode Reference Bench (OLED High-Contrast + High-Refresh Low-Persistence)",
      powerAndThermals: "Direct-Die / Liquid Cooling Thermal Reserve",
      tuningOffsets: [
        "Logitech G502 HERO optical sensor tuned to 1000Hz polling rate via onboard hardware ROM",
        "Zero hardware smoothing / acceleration profiles programmed for 1:1 raw input accuracy",
        "Low-latency audio interface monitoring with direct ASIO / ALSA bit-perfect output"
      ],
      rdVerdict: "Engineered specifically around raw I/O throughput and microsecond input determinism. Prioritizes low-latency human interface devices and mechanical switch tactility to eliminate interface friction during intensive debugging sessions.",
      inspectableZones: [
        {
          title: "PMW3366 / HERO Optical Sensor",
          coord: { x: 50, y: 48 },
          spec: "1000Hz Polling // 0ms Hardware Smoothing",
          detail: "Optical tracking surface scanning delivering pure 1:1 hardware translation without interpolation."
        },
        {
          title: "Dual-Mode Display Array",
          coord: { x: 75, y: 25 },
          spec: "Color-Accurate Reference + High-FPS Motion Clarity",
          detail: "Simultaneous verification for graphical UI color accuracy and high-frame-rate interaction fluidity."
        }
      ]
    }
  ] as HardwareRig[],

  competencies: {
    socket: [
      { name: "C Language", spec: "Pointers, Structs, POSIX Sockets, Low-Level Memory", level: "Core Architecture" },
      { name: "Java", spec: "OOP Paradigms, Concurrent Threading, JVM Memory Model", level: "Core Runtime" },
      { name: "Python", spec: "Data Engineering, NLP Pipelines, Scientific Compute", level: "Systems Automation" },
      { name: "SQL & RDBMS", spec: "Schema Architecture, Index Optimization, Query Plans", level: "Data Substrate" },
      { name: "Memory Management", spec: "Stack vs Heap, Allocation Lifecycle, Leak Isolation", level: "Hardware Discipline" }
    ],
    systemBus: [
      { name: "CachyOS / Arch Linux", spec: "Bore & EEVDF Schedulers, x86-64-v3 Native Compilation", level: "Kernel Substrate" },
      { name: "Limine Bootloader", spec: "Modern Protocol, Clean Staged Kernel Hand-Off", level: "Firmware Stage" },
      { name: "Fish Shell", spec: "Custom Hardware Diagnostic Telemetry & Functions", level: "Command Pipeline" },
      { name: "AWS Cloud Infrastructure", spec: "ALB, RDS Multi-AZ, Auto-Scaling Groups, S3 Tiering", level: "Distributed Node" },
      { name: "Azure DevOps & CI/CD", spec: "Automated Build Pipelines, Container Deployment", level: "Operations Bus" }
    ],
    ioCoprocessors: [
      { name: "Edge AI / TinyML", spec: "Quantized 8-Bit Neural Nets, Microcontroller Inference", level: "Silicon Accelerator" },
      { name: "spaCy NLP Engine", spec: "Local Pipeline Tokenization & Entity Extraction", level: "Offline Pipeline" },
      { name: "Scikit-Learn Machine Learning", spec: "Time-Series Anomaly Trees, Predictive Maintenance", level: "Inference Bus" },
      { name: "Android Geofencing API", spec: "Low-Power GNSS/Cell Broadcast Triangulation", level: "Sensor Interconnect" },
      { name: "Diagnostic Telemetry", spec: "Linux perf, gdb, HWiNFO64, scrcpy Low-Latency", level: "Bench Instrumentation" }
    ]
  },

  endpoints: {
    identity: "Adhithya S // Systems & Hardware Engineer",
    domain: "Low-Level Systems, Linux Kernel Performance, Hardware Teardowns & Edge Architectures",
    email: "adhithyasivarajmain@gmail.com",
    github: "https://github.com/adhithya-code",
    linkedin: "https://www.linkedin.com/in/adhithya-s-95932232a/",
    resumePdf: "/assets/Adhithya_S_Systems_Resume.pdf",
    qcStamp: "QC-PASSED-2026 // ADHITHYA-SYS"
  } as ContactEndpoints
};
