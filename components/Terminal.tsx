"use client";

import React, { useState, useRef, useEffect } from 'react';
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

    let output: React.ReactNode;
    
    // Check if it's a ping command to simulate delay
    if (cmd.startsWith('ping')) {
      output = <div className="text-[#8b949e]">Pinging...</div>;
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
    <div className="w-full  h-[90vh] sm:h-[80vh] flex flex-col bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden shadow-2xl mx-auto mt-4 sm:mt-10 font-mono text-sm" onClick={focusInput}>
      {/* Window Chrome */}
      <div className="h-10 flex items-center px-4 bg-[#161b22] border-b border-[#30363d] shrink-0 gap-2">
        <div className="flex gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="flex-1 text-center text-[#8b949e] font-mono select-none pointer-events-none">
          voyager — portfolio ~ bash
        </div>
        <div className="w-[52px]" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Content */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-hide"
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
        <div className="shrink-0 bg-[#161b22] border-t border-[#30363d] p-4 flex flex-col gap-4">
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