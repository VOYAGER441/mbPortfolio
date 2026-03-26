"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalBoot: React.FC = () => {
  const [lines, setLines] = useState<number>(0);
  const bootLines = [
    "Initializing portfolio v2.0.0...",
    "Loading modules: [profile] [projects] [skills] [contact]",  
    "Platforms: web • iOS • Android • Micro Controller",
    "✓ All systems operational",
    "",
    "╔═══════════════════════════════════════════════════════╗",
    "║   Welcome to Mainak Banduri's Developer Portfolio     ║",
    "║   Full Stack Developer  •  AI Builder  •  VOYAGER     ║",
    "╚═══════════════════════════════════════════════════════╝",
    "",
    "Type 'help' to see available commands.",
  ];

  useEffect(() => {
    if (lines < bootLines.length) {
      const timer = setTimeout(() => {
        setLines(lines + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [lines, bootLines.length]);

  return (
    <div className="font-mono text-sm whitespace-pre-wrap leading-relaxed mb-4">
      {bootLines.slice(0, lines).map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className={
            line.startsWith('✓') ? 'text-[#3fb950]' :
            line.includes('Initializing') ? 'text-[#3fb950]' :
            line.includes('Type \'help\'') ? 'text-[#8b949e]' :
            'text-[#e6edf3]'
          }
        >
          {line.startsWith('╔') || line.startsWith('╚') ? (
            <span className="text-[#e3b341]">{line}</span>
          ) : line.startsWith('║') ? (
            <>
              <span className="text-[#e3b341]">║</span>
              <span className="text-[#e6edf3]">{line.slice(1, -1)}</span>
              <span className="text-[#e3b341]">║</span>
            </>
          ) : (
            line
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TerminalBoot;
