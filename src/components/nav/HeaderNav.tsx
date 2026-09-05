import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Cpu, Layers, Sliders, Radio, Activity } from 'lucide-react';
import { audioEngine } from '@/lib/audioEngine';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeaderNavProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeSection = 'badge', onNavigate }) => {
  const [isAudioEngaged, setIsAudioEngaged] = useState(false);
  const [timeUtc, setTimeUtc] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(
        now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    const newState = audioEngine.toggleMute();
    setIsAudioEngaged(newState);
  };

  const navItems = [
    { id: 'badge', label: '01 // BADGE', icon: Activity },
    { id: 'kvm', label: '02 // KVM BENCH', icon: Terminal },
    { id: 'teardowns', label: '03 // TEARDOWNS', icon: Cpu },
    { id: 'bus', label: '04 // BUS MATRIX', icon: Layers },
    { id: 'io-panel', label: '05 // REAR I/O', icon: Sliders },
  ];

  const handleNavClick = (id: string) => {
    audioEngine.playRelayClick();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-chamfer bg-chassis/95 backdrop-blur-md px-3 sm:px-6 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs font-mono">
        {/* Left Side: Identity & Kernel Telemetry */}
        <div className="flex items-center space-x-3 flex-wrap gap-y-1">
          <div className="flex items-center gap-1.5 px-2 py-0.5 border border-copper/40 bg-copper/10 text-copper rounded-chamfer">
            <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse"></span>
            <span className="font-semibold">SYS.BUS: ACTIVE</span>
          </div>

          <span className="text-text-main font-semibold tracking-wide">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="text-text-dim">|</span>
          <span className="text-text-muted hidden sm:inline">
            {PORTFOLIO_DATA.profile.firmwareBuild}
          </span>
        </div>

        {/* Center: Direct Subsystem Nav Jump Bar */}
        <nav className="flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                data-inspectable="true"
                data-inspect-label={item.label}
                className={`px-2.5 py-1 text-[11px] whitespace-nowrap transition-colors duration-150 border ${
                  isActive
                    ? 'border-copper bg-copper/15 text-copper font-medium'
                    : 'border-transparent text-text-muted hover:border-chamfer hover:bg-surface hover:text-text-main'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side: UTC Clock & Mechanical Audio Engine Toggle */}
        <div className="flex items-center justify-between md:justify-end space-x-3">
          <span className="text-text-dim text-[10px] hidden lg:inline">
            {timeUtc}
          </span>

          {/* Master Audio Engine Toggle Switch */}
          <button
            onClick={handleAudioToggle}
            data-inspectable="true"
            data-inspect-label="AUDIO ENGINE TOGGLE"
            className={`flex items-center gap-1.5 px-2.5 py-1 border transition-all duration-150 ${
              isAudioEngaged
                ? 'border-led bg-led/10 text-led shadow-[0_0_8px_rgba(0,229,153,0.2)]'
                : 'border-chamfer bg-substrate text-text-muted hover:text-text-main hover:border-chamfer-active'
            }`}
            title="Toggle Web Audio Synthetic Mechanical Relay & Microswitch Engine"
          >
            {isAudioEngaged ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-led" />
                <span className="text-[10px] font-bold tracking-wider">AUDIO: ENGAGED</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-text-dim" />
                <span className="text-[10px] font-medium tracking-wider">AUDIO: MUTED</span>
              </>
            )}
          </button>

          {/* QC Hardware Stamp */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 border border-chamfer bg-substrate">
            <Radio className="w-3 h-3 text-led animate-pulse" />
            <span className="text-[10px] text-led font-semibold">QC PASSED</span>
          </div>
        </div>
      </div>
    </header>
  );
};
