import { useCallback } from 'react';

const availableCommands = [
  'help',
  'whoami',
  'ls projects/',
  'open',
  'cat skills.json',
  'cat resume.pdf',
  'ping contact',
  'ls experience/',
  'echo $availability',
  'ssh github',
  'curl -X GET /api/me',
  'sudo hire-me',
  'clear'
];

export function useAutocomplete() {
  const getAutocomplete = useCallback((input: string) => {
    if (!input) return '';

    // Check for "open " prefix
    if (input.startsWith('open ')) {
      // In a real scenario, this would check against projects data.
      // For now, return a placeholder or handle it in the component.
      return input;
    }

    const matches = availableCommands.filter((cmd) => cmd.startsWith(input));

    if (matches.length === 1) {
      return matches[0];
    }

    return input;
  }, []);

  return { getAutocomplete };
}
