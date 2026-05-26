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
        React.createElement('div', { key: 'h1', className: 'text-warning-amber font-bold mb-2' }, 'Available Commands:'),
        React.createElement('div', { key: 'h2', className: 'grid grid-cols-[150px_1fr] gap-2' }, [
          React.createElement('span', { key: 'c1', className: 'text-primary-container' }, 'whoami'), React.createElement('span', { key: 'd1', className: 'text-on-surface-variant' }, 'Display developer bio'),
          React.createElement('span', { key: 'c2', className: 'text-primary-container' }, 'ls projects/'), React.createElement('span', { key: 'd2', className: 'text-on-surface-variant' }, 'List all projects'),
          React.createElement('span', { key: 'ce', className: 'text-primary-container' }, 'ls experience/'), React.createElement('span', { key: 'de', className: 'text-on-surface-variant' }, 'List work experience'),
          React.createElement('span', { key: 'c3', className: 'text-primary-container' }, 'open <project>'), React.createElement('span', { key: 'd3', className: 'text-on-surface-variant' }, 'View detailed project card'),
          React.createElement('span', { key: 'c3b', className: 'text-primary-container' }, 'open <section>'), React.createElement('span', { key: 'd3b', className: 'text-on-surface-variant' }, 'Open projects/skills/contact/systems/network/vault'),
          React.createElement('span', { key: 'ct', className: 'text-primary-container' }, 'tree skills/'), React.createElement('span', { key: 'dt', className: 'text-on-surface-variant' }, 'Display skills tree'),
          React.createElement('span', { key: 'c4', className: 'text-primary-container' }, 'cat skills.json'), React.createElement('span', { key: 'd4', className: 'text-on-surface-variant' }, 'Display skills JSON'),
          React.createElement('span', { key: 'cex', className: 'text-primary-container' }, 'cat experience.json'), React.createElement('span', { key: 'dex', className: 'text-on-surface-variant' }, 'Display experience JSON'),
          React.createElement('span', { key: 'c5', className: 'text-primary-container' }, 'cat resume.pdf'), React.createElement('span', { key: 'd5', className: 'text-on-surface-variant' }, 'View resume summary'),
          React.createElement('span', { key: 'c6', className: 'text-primary-container' }, 'ping contact'), React.createElement('span', { key: 'd6', className: 'text-on-surface-variant' }, 'Show contact info'),
          React.createElement('span', { key: 'c6b', className: 'text-primary-container' }, 'systems | network | vault'), React.createElement('span', { key: 'd6b', className: 'text-on-surface-variant' }, 'Show system, network, vault info'),
          React.createElement('span', { key: 'c7', className: 'text-primary-container' }, 'clear'), React.createElement('span', { key: 'd7', className: 'text-on-surface-variant' }, 'Clear terminal output'),
        ])
      ]);

    case 'whoami':
      return React.createElement('div', { className: 'space-y-2' }, [
        React.createElement('div', { key: 'w1', className: 'font-bold text-on-surface' }, `name:        ${profile.name} (aka ${profile.alias})`),
        React.createElement('div', { key: 'w2', className: 'text-on-surface-variant' }, `role:        ${profile.role} — Backend First`),
        React.createElement('div', { key: 'w3', className: 'text-on-surface-variant' }, `company:     ${profile.currentCompany}`),
        React.createElement('div', { key: 'w4', className: 'text-on-surface-variant' }, `location:    ${profile.location}`),
        React.createElement('div', { key: 'w5', className: 'text-on-surface-variant' }, `shipped:     9 apps — AI • Safety • Mobile • News • Blogging`),
        React.createElement('br', { key: 'br1' }),
        ...profile.bio.map((line, i) => React.createElement('div', { key: `bio${i}`, className: 'text-on-surface' }, line)),
        React.createElement('br', { key: 'br2' }),
        React.createElement('div', { key: 'w6', className: 'text-terminal-green' }, '→ open sheild        → most impactful project (Live)'),
        React.createElement('div', { key: 'w7', className: 'text-terminal-green' }, '→ open soulsync-ai   → most complex AI project '),
        React.createElement('div', { key: 'w8', className: 'text-terminal-green' }, '→ open smartdash-ai  → AI + data pipeline project'),
        React.createElement('div', { key: 'w9', className: 'text-terminal-green' }, '→ open bits-by-bits  → live full-stack platform')
      ]);

    case 'ls':
      if (args[0] === 'projects/' || args[0] === 'projects') {
        return React.createElement('div', { className: 'space-y-1 font-code-sm text-code-sm' }, [
          React.createElement('div', { key: 'l1', className: 'text-on-surface font-bold mb-2' }, `drwxr-xr-x ${projects.length} projects/`),
          ...projects.map((p, i) => (
            React.createElement('div', { key: `p${i}`, className: 'flex gap-4 items-center' }, [
              React.createElement('span', { key: `p${i}n`, className: 'text-secondary w-32 shrink-0' }, p.id),
              React.createElement('span', { key: `p${i}s`, className: 'text-terminal-green w-28 shrink-0 text-xs' }, `[${p.status}]`),
              React.createElement('span', { key: `p${i}d`, className: 'text-on-surface-variant truncate' }, p.description.slice(0, 50) + '...')
            ])
          )),
          React.createElement('br', { key: 'br3' }),
          React.createElement('div', { key: 'l2', className: 'text-warning-amber mt-2' }, 'Run \'open <project-name>\' for full showcase')
        ]);
      }
      if (args[0] === 'experience/' || args[0] === 'experience') {
        return React.createElement('div', { className: 'space-y-4 font-code-sm text-code-sm' }, [
          React.createElement('div', { key: 'l1', className: 'text-on-surface font-bold' }, `drwxr-xr-x ${experience.length} experience/`),
          ...experience.map((e, i) => (
            React.createElement('div', { key: `e${i}`, className: 'border-l-2 border-outline/40 pl-4' }, [
              React.createElement('div', { key: `e${i}hdr`, className: 'flex gap-4 items-center mb-1' }, [
                React.createElement('span', { key: `e${i}n`, className: 'text-secondary font-bold' }, e.id),
                React.createElement('span', { key: `e${i}p`, className: 'text-terminal-green text-xs' }, `[${e.period}]`)
              ]),
              React.createElement('div', { key: `e${i}role`, className: 'text-on-surface mb-1' }, `${e.role} @ ${e.company}`),
              React.createElement('div', { key: `e${i}desc`, className: 'text-on-surface-variant mb-2 text-xs' }, e.description),
              React.createElement('div', { key: `e${i}tech`, className: 'text-primary-container text-xs mb-2 truncate' }, `tech: ${e.tech.join(', ')}`),
              React.createElement('ul', { key: `e${i}hl`, className: 'list-disc list-inside text-on-surface-variant text-xs space-y-1 ml-2' }, 
                e.highlights.slice(0, 3).map((hl, j) => React.createElement('li', { key: `hl${j}` }, hl))
              )
            ])
          )),
          React.createElement('div', { key: 'l2_exp', className: 'text-warning-amber mt-2' }, 'Run \'cat experience.json\' for full details')
        ]);
      }
      return `ls: cannot access '${args[0]}': No such file or directory`;

    case 'tree':
      if (args[0] === 'skills/' || args[0] === 'skills') {
        const renderTree = (title: string, items: { label: string }[], isLastCategory: boolean) => {
          return React.createElement('div', { key: title, className: 'text-on-surface' }, [
            React.createElement('div', { key: `${title}-dir` }, [
              React.createElement('span', { key: `${title}-branch`, className: 'text-on-surface-variant' }, isLastCategory ? '└── ' : '├── '),
              React.createElement('span', { key: `${title}-name`, className: 'text-primary-container font-bold' }, `${title}/`)
            ]),
            ...items.map((item, i) => {
              const isLastItem = i === items.length - 1;
              return React.createElement('div', { key: `${title}-${i}` }, [
                React.createElement('span', { key: `${title}-${i}-indent1`, className: 'text-on-surface-variant' }, isLastCategory ? '    ' : '│   '),
                React.createElement('span', { key: `${title}-${i}-indent2`, className: 'text-on-surface-variant' }, isLastItem ? '└── ' : '├── '),
                React.createElement('span', { key: `${title}-${i}-label` }, item.label)
              ]);
            })
          ]);
        };

        return React.createElement('div', { className: 'font-code-sm text-code-sm space-y-0' }, [
          React.createElement('div', { key: 'root', className: 'text-primary-container font-bold' }, 'skills/'),
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
        return React.createElement('pre', { className: 'text-primary-container' }, JSON.stringify(skillsObj, null, 2));
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
        return React.createElement('pre', { className: 'text-primary-container' }, JSON.stringify(expObj, null, 2));
      }
      if (args[0] === 'resume.pdf') {
        return React.createElement('div', { className: 'space-y-2' }, [
          React.createElement('div', { key: 'r1', className: 'font-bold text-on-surface' }, 'RESUME SUMMARY'),
          React.createElement('div', { key: 'r2', className: 'text-terminal-green' }, `Experience: ${profile.role} @ ${profile.currentCompany}`),
          React.createElement('div', { key: 'r3', className: 'text-on-surface-variant' }, ' - ' + profile.bio[0]),
          React.createElement('div', { key: 'r4', className: 'text-on-surface-variant' }, ' - ' + profile.bio[1]),
          React.createElement('br', { key: 'br4' }),
          React.createElement('a', { key: 'a1', href: '/resume.pdf', className: 'text-primary-container underline' }, 'Download Full PDF')
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
            React.createElement('span', { key: 'e1', className: 'text-terminal-green' }, 'email'), React.createElement('span', { key: 'e2', className: 'text-on-surface' }, contact.email),
            React.createElement('span', { key: 'g1', className: 'text-terminal-green' }, 'github'), React.createElement('span', { key: 'g2', className: 'text-on-surface' }, contact.github),
            React.createElement('span', { key: 'l1', className: 'text-terminal-green' }, 'linkedin'), React.createElement('span', { key: 'l2', className: 'text-on-surface' }, contact.linkedin),
          ]),
          React.createElement('br', { key: 'br6' }),
          React.createElement('div', { key: 'pc4', className: 'text-warning-amber' }, 'Response time: fast. Open to opportunities: yes.')
        ]);
      }
      return `ping: unknown host ${args[0]}`;

    case 'projects':
      return parseCommand('ls projects/');

    case 'skills':
      return parseCommand('tree skills/');

    case 'contact':
      return parseCommand('ping contact');

    case 'systems':
      return React.createElement('div', { className: 'space-y-2' }, [
        React.createElement('div', { key: 's1', className: 'text-terminal-green font-bold' }, 'SYSTEM STATUS: OPERATIONAL'),
        React.createElement('div', { key: 's2', className: 'text-on-surface-variant' }, `operator:    ${profile.name} (${profile.alias})`),
        React.createElement('div', { key: 's3', className: 'text-on-surface-variant' }, `role:        ${profile.role}`),
        React.createElement('div', { key: 's4', className: 'text-on-surface-variant' }, `company:     ${profile.currentCompany}`),
        React.createElement('div', { key: 's5', className: 'text-terminal-green' }, `availability:${profile.availability}`),
        React.createElement('div', { key: 's6', className: 'text-warning-amber' }, `notice:      ${profile.noticePeriod}`),
        React.createElement('div', { key: 's7', className: 'text-on-surface-variant' }, 'Deployments:'),
        ...experience.map((role, i) =>
          React.createElement('div', { key: `s-exp-${i}`, className: 'text-on-surface' }, `- ${role.company} (${role.period})`)
        ),
        React.createElement('div', { key: 's8', className: 'text-on-surface-variant' }, "Run 'ls experience/' for full logs.")
      ]);

    case 'network':
      return React.createElement('div', { className: 'space-y-2' }, [
        React.createElement('div', { key: 'n1', className: 'text-terminal-green font-bold' }, 'NETWORK NODES: VERIFIED'),
        React.createElement('div', { key: 'n2', className: 'text-on-surface-variant' }, `github:    ${contact.github}`),
        React.createElement('div', { key: 'n3', className: 'text-on-surface-variant' }, `linkedin:  ${contact.linkedin}`),
        React.createElement('div', { key: 'n4', className: 'text-on-surface-variant' }, `twitter:   ${contact.twitter}`),
        React.createElement('div', { key: 'n5', className: 'text-on-surface-variant' }, `instagram: ${contact.instagram}`),
        React.createElement('div', { key: 'n6', className: 'text-on-surface-variant' }, `youtube:   ${contact.youtube}`),
        React.createElement('div', { key: 'n7', className: 'text-on-surface-variant' }, `leetcode:  ${contact.leetcode}`),
      ]);

    case 'vault':
      return React.createElement('div', { className: 'space-y-2' }, [
        React.createElement('div', { key: 'v1', className: 'text-terminal-green font-bold' }, 'VAULT INDEX'),
        React.createElement('div', { key: 'v2', className: 'text-on-surface-variant' }, 'resume.pdf — /resume.pdf'),
        React.createElement('div', { key: 'v3', className: 'text-on-surface-variant' }, `projects.manifest — ${projects.length} entries`),
        React.createElement('div', { key: 'v4', className: 'text-primary-container' }, 'Run "projects" to enumerate repositories.'),
      ]);

    default:
      return React.createElement('div', null, [
        React.createElement('div', { key: 'nf1', className: 'text-error-red' }, `command not found: ${cmd}`),
        React.createElement('div', { key: 'nf2', className: 'text-on-surface-variant' }, 'Type "help" to see available commands.')
      ]);
  }
};
