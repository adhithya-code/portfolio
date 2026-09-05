import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { audioEngine } from '@/lib/audioEngine';
import { Cpu, Server, Layers, Check } from 'lucide-react';

export const MotherboardBusModule: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<'socket' | 'systemBus' | 'ioCoprocessors'>('socket');

  const handleSelectDomain = (domain: 'socket' | 'systemBus' | 'ioCoprocessors') => {
    audioEngine.playRelayClick();
    setActiveDomain(domain);
  };

  const domainData = {
    socket: {
      title: '01 // CPU SOCKET & RUNTIME COMPUTE',
      badge: 'LGA / BGA PINOUT',
      description: 'Core programming primitives, deterministic memory structures, low-level POSIX execution, and thread lifecycles.',
      items: PORTFOLIO_DATA.competencies.socket,
      color: 'copper',
    },
    systemBus: {
      title: '02 // SYSTEM BUS & LINUX KERNEL SUBSTRATE',
      badge: 'PCIE 5.0 / DMI 4.0 INTERCONNECT',
      description: 'Linux kernel scheduling (EEVDF/Bore), bootloader hand-offs, shell instrumentation, and cloud infrastructure nodes.',
      items: PORTFOLIO_DATA.competencies.systemBus,
      color: 'cyan',
    },
    ioCoprocessors: {
      title: '03 // I/O COPROCESSORS & TINYML ACCELERATORS',
      badge: 'SPI / I2C / NPU INTERFACE',
      description: 'Quantized TinyML pipelines, local spaCy NLP processing, sensor telemetry loops, and low-latency hardware debugging.',
      items: PORTFOLIO_DATA.competencies.ioCoprocessors,
      color: 'led',
    },
  };

  const current = domainData[activeDomain];

  return (
    <section id="bus" className="space-y-4">
      {/* 3 Bus Tier Selector Tabs Resting Directly on the Mat */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          onClick={() => handleSelectDomain('socket')}
          data-inspectable="true"
          data-inspect-label="CPU SOCKET BUS"
          className={`tactile-button p-3 border text-left font-mono transition-all ${
            activeDomain === 'socket'
              ? 'border-copper bg-[#181D26] text-text-main font-bold shadow-md tactile-button-pressed'
              : 'border-[#262C3A] bg-[#0A0C10] text-text-muted hover:border-copper/60 hover:text-text-main'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-copper px-1.5 py-0.2 bg-copper/10 border border-copper/30">
              BUS 01
            </span>
            <Cpu className="w-4 h-4 text-copper" />
          </div>
          <div className="text-xs font-bold font-sans">Socket / Core Compute</div>
          <div className="text-[10px] text-text-dim mt-0.5">C, Java, Python, SQL, Memory</div>
        </button>

        <button
          onClick={() => handleSelectDomain('systemBus')}
          data-inspectable="true"
          data-inspect-label="SYSTEM BUS SUBSTRATE"
          className={`tactile-button p-3 border text-left font-mono transition-all ${
            activeDomain === 'systemBus'
              ? 'border-cyan bg-[#181D26] text-text-main font-bold shadow-md tactile-button-pressed'
              : 'border-[#262C3A] bg-[#0A0C10] text-text-muted hover:border-cyan/60 hover:text-text-main'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-cyan px-1.5 py-0.2 bg-cyan/10 border border-cyan/30">
              BUS 02
            </span>
            <Layers className="w-4 h-4 text-cyan" />
          </div>
          <div className="text-xs font-bold font-sans">System Bus & Kernel</div>
          <div className="text-[10px] text-text-dim mt-0.5">CachyOS/Arch, Limine, AWS, Azure</div>
        </button>

        <button
          onClick={() => handleSelectDomain('ioCoprocessors')}
          data-inspectable="true"
          data-inspect-label="I/O COPROCESSOR BUS"
          className={`tactile-button p-3 border text-left font-mono transition-all ${
            activeDomain === 'ioCoprocessors'
              ? 'border-led bg-[#181D26] text-text-main font-bold shadow-md tactile-button-pressed'
              : 'border-[#262C3A] bg-[#0A0C10] text-text-muted hover:border-led/60 hover:text-text-main'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-led px-1.5 py-0.2 bg-led/10 border border-led/30">
              BUS 03
            </span>
            <Server className="w-4 h-4 text-led" />
          </div>
          <div className="text-xs font-bold font-sans">I/O & Coprocessors</div>
          <div className="text-[10px] text-text-dim mt-0.5">TinyML, spaCy, Android, Diagnostics</div>
        </button>
      </div>

      {/* Pinout Details & Matrix Table (Rests Directly on the Mat) */}
      <div className="border-2 border-[#2A313E] bg-[#0A0C10] p-5 sm:p-6 space-y-5 shadow-[0_16px_36px_rgba(0,0,0,0.85)]">
        {/* Header Info Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#1E2330] gap-2 font-mono text-xs">
          <div>
            <div className="text-[10px] text-copper tracking-wider font-bold">
              {current.badge}
            </div>
            <h3 className="text-base font-bold text-text-main font-sans mt-0.5">
              {current.title}
            </h3>
            <p className="text-text-muted font-sans text-xs mt-1">
              {current.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-text-dim shrink-0">
            <span className="px-2 py-0.5 border border-[#2D3545] bg-[#12151B]">
              DENSITY: 5 CHANNELS
            </span>
            <span className="px-2 py-0.5 border border-[#2D3545] bg-[#12151B] text-led font-semibold">
              BUS INTEGRITY: NOMINAL
            </span>
          </div>
        </div>

        {/* Tabular Monospace Pinout Matrix */}
        <div className="space-y-2.5 font-mono text-xs">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-3 py-1.5 text-[10px] text-text-dim uppercase tracking-wider border-b border-[#1E2330]">
            <div className="col-span-1">PIN</div>
            <div className="col-span-3">INTERCONNECT TARGET</div>
            <div className="col-span-5">TECHNICAL SPECIFICATION & CAPABILITY</div>
            <div className="col-span-3 text-right">SUBSYSTEM DOMAIN</div>
          </div>

          {current.items.map((item, idx) => (
            <div
              key={idx}
              data-inspectable="true"
              data-inspect-label={`PIN 0${idx + 1}: ${item.name}`}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 p-3 border border-[#1E2330] bg-[#0E1117] hover:border-copper/60 hover:bg-[#141820] transition-colors items-center"
            >
              <div className="sm:col-span-1 flex items-center gap-2">
                <span className="text-copper font-bold text-xs">0{idx + 1}</span>
                <span className="w-1.5 h-1.5 bg-copper rounded-full hidden sm:inline"></span>
              </div>

              <div className="sm:col-span-3">
                <div className="font-bold text-text-main font-sans text-xs flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-led shrink-0" />
                  <span>{item.name}</span>
                </div>
              </div>

              <div className="sm:col-span-5 text-text-muted text-xs font-sans">
                {item.spec}
              </div>

              <div className="sm:col-span-3 sm:text-right">
                <span className="text-[10px] px-2 py-0.5 border border-[#262C3A] bg-[#141822] text-text-dim font-mono">
                  {item.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
