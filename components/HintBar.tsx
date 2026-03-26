"use client";

import React from 'react';

interface HintBarProps {
  onCommandClick: (cmd: string) => void;
}

const commands = [
  'whoami',
  'tree skills/',
  'ls experience/',
  'ping contact',
  'cat resume.pdf',
  'ls projects/',
  'soulsync-ai',
  'sheild',
  'smartdash-ai',
  'clear'
];

export const HintBar: React.FC<HintBarProps> = ({ onCommandClick }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-[#161b22] text-sm font-mono mt-4">
      <span className="text-[#8b949e]">hints:</span>
      {commands.map((cmd) => (
        <button
          key={cmd}
          onClick={() => onCommandClick(
            ['soulsync-ai', 'sheild', 'smartdash-ai', 'bits-by-bits'].includes(cmd) 
              ? `open ${cmd}` 
              : cmd
          )}
          className="text-[#e6edf3] bg-[#0d1117] border border-[#30363d] hover:border-[#8b949e] px-4 py-1.5 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-[#79c0ff]"
          aria-label={`Run command ${cmd}`}
        >
          {cmd}
        </button>
      ))}
    </div>
  );
};

export default HintBar;
