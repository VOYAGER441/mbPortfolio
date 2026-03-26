import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';
import { skills } from '../../data/skills';
import { contact } from '../../data/contact';
import { experience } from '../../data/experience';

export const parseCommand = (input: string): React.ReactNode => {
  const parts = input.trim().split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
      return React.createElement('div', { className: 'space-y-1' }, [
        React.createElement('div', { key: 'h1', className: 'text-[#e3b341] font-bold mb-2' }, 'Available Commands:'),
        React.createElement('div', { key: 'h2', className: 'grid grid-cols-[150px_1fr] gap-2' }, [
          React.createElement('span', { key: 'c1', className: 'text-[#79c0ff]' }, 'whoami'), React.createElement('span', { key: 'd1', className: 'text-[#8b949e]' }, 'Display developer bio'),
          React.createElement('span', { key: 'c2', className: 'text-[#79c0ff]' }, 'ls projects/'), React.createElement('span', { key: 'd2', className: 'text-[#8b949e]' }, 'List all projects'),
          React.createElement('span', { key: 'ce', className: 'text-[#79c0ff]' }, 'ls experience/'), React.createElement('span', { key: 'de', className: 'text-[#8b949e]' }, 'List work experience'),
          React.createElement('span', { key: 'c3', className: 'text-[#79c0ff]' }, 'open <project>'), React.createElement('span', { key: 'd3', className: 'text-[#8b949e]' }, 'View detailed project card'),
          React.createElement('span', { key: 'ct', className: 'text-[#79c0ff]' }, 'tree skills/'), React.createElement('span', { key: 'dt', className: 'text-[#8b949e]' }, 'Display skills tree'),
          React.createElement('span', { key: 'c4', className: 'text-[#79c0ff]' }, 'cat skills.json'), React.createElement('span', { key: 'd4', className: 'text-[#8b949e]' }, 'Display skills JSON'),
          React.createElement('span', { key: 'cex', className: 'text-[#79c0ff]' }, 'cat experience.json'), React.createElement('span', { key: 'dex', className: 'text-[#8b949e]' }, 'Display experience JSON'),
          React.createElement('span', { key: 'c5', className: 'text-[#79c0ff]' }, 'cat resume.pdf'), React.createElement('span', { key: 'd5', className: 'text-[#8b949e]' }, 'View resume summary'),
          React.createElement('span', { key: 'c6', className: 'text-[#79c0ff]' }, 'ping contact'), React.createElement('span', { key: 'd6', className: 'text-[#8b949e]' }, 'Show contact info'),
          React.createElement('span', { key: 'c7', className: 'text-[#79c0ff]' }, 'clear'), React.createElement('span', { key: 'd7', className: 'text-[#8b949e]' }, 'Clear terminal output'),
        ])
      ]);

    case 'whoami':
      return React.createElement('div', { className: 'space-y-2' }, [
        React.createElement('div', { key: 'w1', className: 'font-bold text-[#e6edf3]' }, `name:        ${profile.name} (aka ${profile.alias})`),
        React.createElement('div', { key: 'w2', className: 'text-[#8b949e]' }, `role:        ${profile.role} — Backend First`),
        React.createElement('div', { key: 'w3', className: 'text-[#8b949e]' }, `company:     ${profile.currentCompany}`),
        React.createElement('div', { key: 'w4', className: 'text-[#8b949e]' }, `location:    ${profile.location}`),
        React.createElement('div', { key: 'w5', className: 'text-[#8b949e]' }, `shipped:     9 apps — AI • Safety • Mobile • News • Blogging`),
        React.createElement('br', { key: 'br1' }),
        ...profile.bio.map((line, i) => React.createElement('div', { key: `bio${i}`, className: 'text-[#e6edf3]' }, line)),
        React.createElement('br', { key: 'br2' }),
        React.createElement('div', { key: 'w6', className: 'text-[#3fb950]' }, '→ open soulsync-ai   → most complex AI project (live)'),
        React.createElement('div', { key: 'w7', className: 'text-[#3fb950]' }, '→ open sheild        → most impactful project'),
        React.createElement('div', { key: 'w8', className: 'text-[#3fb950]' }, '→ open smartdash-ai  → AI + data pipeline project'),
        React.createElement('div', { key: 'w9', className: 'text-[#3fb950]' }, '→ open bits-by-bits  → live full-stack platform')
      ]);

    case 'ls':
      if (args[0] === 'projects/' || args[0] === 'projects') {
        return React.createElement('div', { className: 'space-y-1 font-mono text-sm' }, [
          React.createElement('div', { key: 'l1', className: 'text-[#e6edf3] font-bold mb-2' }, `drwxr-xr-x ${projects.length} projects/`),
          ...projects.map((p, i) => (
            React.createElement('div', { key: `p${i}`, className: 'flex gap-4 items-center' }, [
              React.createElement('span', { key: `p${i}n`, className: 'text-[#d2a8ff] w-32 shrink-0' }, p.id),
              React.createElement('span', { key: `p${i}s`, className: 'text-[#3fb950] w-28 shrink-0 text-xs' }, `[${p.status}]`),
              React.createElement('span', { key: `p${i}d`, className: 'text-[#8b949e] truncate' }, p.description.slice(0, 50) + '...')
            ])
          )),
          React.createElement('br', { key: 'br3' }),
          React.createElement('div', { key: 'l2', className: 'text-[#e3b341] mt-2' }, 'Run \'open <project-name>\' for full showcase')
        ]);
      }
      if (args[0] === 'experience/' || args[0] === 'experience') {
        return React.createElement('div', { className: 'space-y-4 font-mono text-sm' }, [
          React.createElement('div', { key: 'l1', className: 'text-[#e6edf3] font-bold' }, `drwxr-xr-x ${experience.length} experience/`),
          ...experience.map((e, i) => (
            React.createElement('div', { key: `e${i}`, className: 'border-l-2 border-[#30363d] pl-4' }, [
              React.createElement('div', { key: `e${i}hdr`, className: 'flex gap-4 items-center mb-1' }, [
                React.createElement('span', { key: `e${i}n`, className: 'text-[#d2a8ff] font-bold' }, e.id),
                React.createElement('span', { key: `e${i}p`, className: 'text-[#3fb950] text-xs' }, `[${e.period}]`)
              ]),
              React.createElement('div', { key: `e${i}role`, className: 'text-[#e6edf3] mb-1' }, `${e.role} @ ${e.company}`),
              React.createElement('div', { key: `e${i}desc`, className: 'text-[#8b949e] mb-2 text-xs' }, e.description),
              React.createElement('div', { key: `e${i}tech`, className: 'text-[#79c0ff] text-xs mb-2 truncate' }, `tech: ${e.tech.join(', ')}`),
              React.createElement('ul', { key: `e${i}hl`, className: 'list-disc list-inside text-[#8b949e] text-xs space-y-1 ml-2' }, 
                e.highlights.slice(0, 3).map((hl, j) => React.createElement('li', { key: `hl${j}` }, hl))
              )
            ])
          )),
          React.createElement('div', { key: 'l2_exp', className: 'text-[#e3b341] mt-2' }, 'Run \'cat experience.json\' for full details')
        ]);
      }
      return `ls: cannot access '${args[0]}': No such file or directory`;

    case 'tree':
      if (args[0] === 'skills/' || args[0] === 'skills') {
        const renderTree = (title: string, items: { label: string }[], isLastCategory: boolean) => {
          return React.createElement('div', { key: title, className: 'text-[#e6edf3]' }, [
            React.createElement('div', { key: `${title}-dir` }, [
              React.createElement('span', { key: `${title}-branch`, className: 'text-[#8b949e]' }, isLastCategory ? '└── ' : '├── '),
              React.createElement('span', { key: `${title}-name`, className: 'text-[#79c0ff] font-bold' }, `${title}/`)
            ]),
            ...items.map((item, i) => {
              const isLastItem = i === items.length - 1;
              return React.createElement('div', { key: `${title}-${i}` }, [
                React.createElement('span', { key: `${title}-${i}-indent1`, className: 'text-[#8b949e]' }, isLastCategory ? '    ' : '│   '),
                React.createElement('span', { key: `${title}-${i}-indent2`, className: 'text-[#8b949e]' }, isLastItem ? '└── ' : '├── '),
                React.createElement('span', { key: `${title}-${i}-label` }, item.label)
              ]);
            })
          ]);
        };

        return React.createElement('div', { className: 'font-mono text-sm space-y-0' }, [
          React.createElement('div', { key: 'root', className: 'text-[#79c0ff] font-bold' }, 'skills/'),
          renderTree('languages', skills.languages, false),
          renderTree('frontend', skills.frontend, false),
          renderTree('backend', skills.backend, false),
          renderTree('database', skills.database, false),
          renderTree('devops', skills.devops, false),
          renderTree('ai', skills.ai, false),
          renderTree('embedded', skills.embedded, false),
          renderTree('design', skills.design, true),
        ]);
      }
      return `tree: ${args[0] || ''}: No such directory`;

    case 'open':
      if (!args[0]) return 'open: missing argument <project-name>';
      const proj = projects.find(p => p.id === args[0]);
      if (!proj) return `open: project '${args[0]}' not found`;
      // We pass `proj` but force casting to the type expected by ProjectCard.
      // There's a slight type mismatch with the exact union types, but it is structurally valid.
      return React.createElement(ProjectCard, { project: proj as unknown as ProjectCardProps["project"] });

    case 'cat':
      if (args[0] === 'skills.json') {
        const skillsObj = {
          languages: skills.languages.map(s => s.label),
          backend: skills.backend.map(s => s.label),
          frontend: skills.frontend.map(s => s.label),
          database: skills.database.map(s => s.label),
          devops: skills.devops.map(s => s.label),
          ai: skills.ai.map(s => s.label),
          embedded: skills.embedded.map(s => s.label),
          design: skills.design.map(s => s.label)
        };
        return React.createElement('pre', { className: 'text-[#79c0ff]' }, JSON.stringify(skillsObj, null, 2));
      }
      if (args[0] === 'experience.json') {
        const expObj = experience.map(e => ({
          company: e.company,
          role: e.role,
          type: e.type,
          period: e.period,
          location: e.location,
          highlights: e.highlights,
          tech: e.tech
        }));
        return React.createElement('pre', { className: 'text-[#79c0ff]' }, JSON.stringify(expObj, null, 2));
      }
      if (args[0] === 'resume.pdf') {
        return React.createElement('div', { className: 'space-y-2' }, [
          React.createElement('div', { key: 'r1', className: 'font-bold text-[#e6edf3]' }, 'RESUME SUMMARY'),
          React.createElement('div', { key: 'r2', className: 'text-[#3fb950]' }, `Experience: ${profile.role} @ ${profile.currentCompany}`),
          React.createElement('div', { key: 'r3', className: 'text-[#8b949e]' }, ' - ' + profile.bio[0]),
          React.createElement('div', { key: 'r4', className: 'text-[#8b949e]' }, ' - ' + profile.bio[1]),
          React.createElement('br', { key: 'br4' }),
          React.createElement('a', { key: 'a1', href: '/resume.pdf', className: 'text-[#79c0ff] underline' }, 'Download Full PDF')
        ]);
      }
      return `cat: ${args[0]}: No such file or directory`;

    case 'ping':
      if (args[0] === 'contact') {
        return React.createElement('div', { className: 'space-y-1' }, [
          React.createElement('div', { key: 'pc1' }, 'PING contact.dev — sending packets...'),
          React.createElement('div', { key: 'pc2' }, '64 bytes from contact: icmp_seq=1 ttl=64 time=0.3ms'),
          React.createElement('br', { key: 'br5' }),
          React.createElement('div', { key: 'pc3', className: 'grid grid-cols-[100px_1fr] gap-2 ml-4' }, [
            React.createElement('span', { key: 'e1', className: 'text-[#3fb950]' }, 'email'), React.createElement('span', { key: 'e2', className: 'text-[#e6edf3]' }, contact.email),
            React.createElement('span', { key: 'g1', className: 'text-[#3fb950]' }, 'github'), React.createElement('span', { key: 'g2', className: 'text-[#e6edf3]' }, contact.github),
            React.createElement('span', { key: 'l1', className: 'text-[#3fb950]' }, 'linkedin'), React.createElement('span', { key: 'l2', className: 'text-[#e6edf3]' }, contact.linkedin),
          ]),
          React.createElement('br', { key: 'br6' }),
          React.createElement('div', { key: 'pc4', className: 'text-[#e3b341]' }, 'Response time: fast. Open to opportunities: yes.')
        ]);
      }
      return `ping: unknown host ${args[0]}`;

    default:
      return React.createElement('div', null, [
        React.createElement('div', { key: 'nf1', className: 'text-[#ff7b72]' }, `command not found: ${cmd}`),
        React.createElement('div', { key: 'nf2', className: 'text-[#8b949e]' }, 'Type "help" to see available commands.')
      ]);
  }
};
