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
    <div className="font-code-md text-code-md leading-relaxed mb-4">
      {bootLines.slice(0, lines).map((line, idx) => {
        const isInitializing = line.includes('Initializing');
        const isOperational = line.startsWith('✓');
        const isModules = line.startsWith('Loading modules');

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className={
              isOperational || isInitializing
                ? 'text-terminal-green'
                : 'text-on-surface-variant'
            }
          >
            {isModules ? (
              <>
                <span className="text-on-surface-variant">Loading modules: </span>
                <span className="text-primary-container">[profile] [projects] [skills] [contact]</span>
              </>
            ) : (
              line
            )}
          </motion.div>
        );
      })}

      {lines >= bootLines.length && (
        <>
          <div className="holographic-box p-8 my-8 max-w-2xl border-2">
            <h1 className="font-headline-lg text-headline-lg text-primary-container mb-2 tracking-wider">
              Welcome to Mainak Banduri&apos;s Developer Portfolio
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-on-surface-variant opacity-90">
              <span className="flex items-center gap-2">Full Stack Developer</span>
              <span className="opacity-30">•</span>
              <span className="flex items-center gap-2">AI Builder</span>
              <span className="opacity-30">•</span>
              <span className="text-primary-fixed drop-shadow-[0_0_5px_rgba(116,245,255,0.4)]">VOYAGER</span>
            </div>
          </div>
          <div className="text-on-surface-variant">Type &apos;help&apos; to see available commands.</div>
        </>
      )}
    </div>
  );
};

export default TerminalBoot;
