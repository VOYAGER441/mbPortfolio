"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TerminalBoot from './TerminalBoot';
import TerminalOutput, { CommandHistoryItem } from './TerminalOutput';
import TerminalInput from './TerminalInput';
import HintBar from './HintBar';
import { parseCommand } from './commands';

export const Terminal: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate boot time
    const timer = setTimeout(() => setBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to bottom on new history entry
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, booted]);

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim()) return;

    if (cmd.trim() === 'clear') {
      setHistory([]);
      return;
    }

    const normalized = cmd.trim().toLowerCase();
    const routeMap: Record<string, string> = {
      'open home': '/',
      'open projects': '/projects',
      'open skills': '/skills',
      'open contact': '/contact',
      'open systems': '/systems',
      'open network': '/network',
      'open vault': '/vault',
    };

    if (routeMap[normalized]) {
      setHistory((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          command: cmd,
          output: <div className="text-on-surface-variant">Opening {routeMap[normalized]}...</div>,
        },
      ]);
      router.push(routeMap[normalized]);
      return;
    }

    let output: React.ReactNode;
    
    // Check if it's a ping command to simulate delay
    if (cmd.startsWith('ping')) {
      output = <div className="text-on-surface-variant">Pinging...</div>;
      const tempId = Date.now().toString();
      
      setHistory((prev) => [...prev, { id: tempId, command: cmd, output }]);
      
      await new Promise(resolve => setTimeout(resolve, 400));
      output = parseCommand(cmd);
      
      setHistory((prev) => prev.map(item => item.id === tempId ? { ...item, output } : item));
      return;
    }

    output = parseCommand(cmd);
    setHistory((prev) => [...prev, { id: Date.now().toString(), command: cmd, output }]);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full h-[716px] flex flex-col terminal-window bg-space-void/80 backdrop-blur-md border border-outline/20 rounded-lg overflow-hidden font-code-md text-code-md" onClick={focusInput}>
      {/* Window Chrome */}
      <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline/20 shrink-0">
        <div className="flex gap-2">
          <div className="status-dot bg-error-red"></div>
          <div className="status-dot bg-warning-amber"></div>
          <div className="status-dot bg-terminal-green"></div>
        </div>
        <div className="font-code-sm text-code-sm text-on-surface-variant opacity-60 select-none pointer-events-none">
          voyager — portfolio ~ bash
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Content */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto p-6 terminal-scroll space-y-4"
      >
        <TerminalBoot />
        
        {booted && (
          <div className="mt-6">
            <TerminalOutput history={history} />
          </div>
        )}
      </div>

      {/* Bottom Section (HintBar + Input) */}
      {booted && (
        <div className="shrink-0 border-t border-outline/20 bg-surface-container-lowest/50 p-6 flex flex-col gap-4">
          <HintBar onCommandClick={(cmd) => {
            handleCommand(cmd);
            focusInput();
          }} />
          <TerminalInput onCommand={handleCommand} inputRef={inputRef} />
        </div>
      )}
    </div>
  );
};

export default Terminal;