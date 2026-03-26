"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
  id: string;
}

interface TerminalOutputProps {
  history: CommandHistoryItem[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
  return (
    <div className="font-mono text-sm" aria-live="polite">
      {history.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center text-[#3fb950] font-bold mb-2">
            <span>visitor</span>
            <span className="text-[#e6edf3]">@portfolio:~$ </span>
            <span className="text-[#e6edf3] ml-2 font-normal">{item.command}</span>
          </div>
          <div className="text-[#e6edf3] whitespace-pre-wrap">
            {item.output}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TerminalOutput;