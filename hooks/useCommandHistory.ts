import { useState, useRef, useCallback } from 'react';

export function useCommandHistory(maxHistorySize = 50) {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const currentInputRef = useRef('');

  const addToHistory = useCallback((command: string) => {
    if (command.trim() === '') return;
    setHistory((prev) => {
      const newHistory = [command, ...prev];
      if (newHistory.length > maxHistorySize) {
        newHistory.pop();
      }
      return newHistory;
    });
    setHistoryIndex(-1);
    currentInputRef.current = '';
  }, [maxHistorySize]);

  const navigateHistory = useCallback((direction: 'up' | 'down', currentInput: string) => {
    if (history.length === 0) return currentInput;

    if (historyIndex === -1 && direction === 'up') {
      currentInputRef.current = currentInput;
    }

    let nextIndex = historyIndex;
    if (direction === 'up') {
      nextIndex = Math.min(nextIndex + 1, history.length - 1);
    } else {
      nextIndex = Math.max(nextIndex - 1, -1);
    }

    setHistoryIndex(nextIndex);

    if (nextIndex === -1) {
      return currentInputRef.current;
    }

    return history[nextIndex];
  }, [history, historyIndex]);

  return { history, addToHistory, navigateHistory };
}
