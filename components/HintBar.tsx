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
  'clear'
];

export const HintBar: React.FC<HintBarProps> = ({ onCommandClick }) => {
  return (
    <div className="flex flex-wrap items-center gap-3 font-code-sm text-code-sm">
      <span className="text-on-surface-variant mr-2 py-1">hints:</span>
      {commands.map((cmd) => (
        <button
          key={cmd}
          onClick={() => onCommandClick(
            cmd
          )}
          className="bg-surface-container border border-outline/30 hover:border-primary-container hover:bg-primary-container/10 text-on-surface px-3 py-1 rounded transition-all active:scale-95 font-code-sm text-code-sm"
          aria-label={`Run command ${cmd}`}
        >
          {cmd}
        </button>
      ))}
    </div>
  );
};

export default HintBar;
