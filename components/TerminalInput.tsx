"use client";

import React, { useState, useRef, KeyboardEvent } from 'react';

interface TerminalInputProps {
  onCommand: (cmd: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({ onCommand, inputRef }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const localRef = useRef<HTMLInputElement>(null);
  const ref = inputRef || localRef;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim();
      if (trimmed) {
        setHistory(prev => [trimmed, ...prev].slice(0, 50));
      }
      setHistoryIdx(-1);
      onCommand(trimmed);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx < history.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocomplete logic
      const commands = [
        'help',
        'whoami',
        'ls projects/',
        'open projects',
        'open skills',
        'open contact',
        'open systems',
        'open network',
        'open vault',
        'systems',
        'network',
        'vault',
        'cat skills.json',
        'tree skills/',
        'cat experience.json',
        'cat resume.pdf',
        'ping contact',
        'ls experience/',
        'echo $availability',
        'ssh github',
        'curl -X GET /api/me',
        'sudo hire-me',
        'clear'
      ];
      const matches = commands.filter(c => c.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0] + (matches[0] === 'open' ? ' ' : ''));
      }
    }
  };

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <div className="flex items-center gap-3 font-code-md text-code-md cursor-text" onClick={handleClick}>
      <span className="text-terminal-green font-bold whitespace-nowrap">visitor@portfolio:~$</span>
      <div className="relative flex-1 flex items-center">
        <input
          ref={ref}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-on-surface w-full caret-transparent flex-1 z-10 font-code-md text-code-md placeholder:text-on-surface-variant/60"
          aria-label="terminal input"
          placeholder="Type a command..."
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
        {/* Blinking Cursor overlay */}
        {input && (
          <span className="absolute left-0 pointer-events-none text-transparent font-code-md text-code-md" aria-hidden="true">
            {input}
            <span className="inline-block cursor ml-1 translate-y-[2px]" />
          </span>
        )}
        {!input && (
           <span className="absolute left-0 pointer-events-none font-code-md text-code-md">
             <span className="inline-block cursor translate-y-[2px]" />
           </span>
        )}
      </div>
    </div>
  );
};

export default TerminalInput;