import React from 'react';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    status: 'production' | 'open-source' | 'personal';
    description: string;
    stack: { label: string; type: 'backend' | 'db' | 'devops' | 'frontend' }[];
    stats: { value: string; label: string }[];
    architecture: {
      label: string;
      nodes: { label: string; type: 'client' | 'api' | 'cache' | 'db' | 'queue' }[];
    }[];
    endpoints: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; path: string; description: string }[];
    metrics: { label: string; value: number; color: string }[];
    commits: { hash: string; message: string; time: string }[];
    github: string;
    live?: string;
  };
}

const statusColors = {
  'production': 'text-terminal-green',
  'open-source': 'text-primary-container',
  'personal': 'text-warning-amber',
};

const stackColors = {
  'backend': 'text-terminal-green border-terminal-green/30',
  'db': 'text-secondary border-secondary/30',
  'devops': 'text-warning-amber border-warning-amber/30',
  'frontend': 'text-primary-container border-primary-container/30',
};

const methodColors = {
  'GET': 'text-primary-container',
  'POST': 'text-terminal-green',
  'PUT': 'text-warning-amber',
  'DELETE': 'text-error-red',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="my-6 relative glass-panel scanning-effect p-gutter rounded-lg text-code-sm font-code-md overflow-hidden group">
      <div className="corner-accent tl"></div>
      <div className="corner-accent tr"></div>
      <div className="corner-accent bl"></div>
      <div className="corner-accent br"></div>
      {/* 1. Header Row */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-bold text-on-surface text-base">{project.name}</span>
        <span className={`${statusColors[project.status]} uppercase text-xs tracking-wider`}>[{project.status}]</span>
      </div>

      {/* 2. Description */}
      <p className="text-on-surface-variant mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* 3. Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, idx) => (
          <span key={idx} className={`px-2 py-0.5 rounded-full text-xs border bg-space-void/50 ${stackColors[tech.type]}`}>
            {tech.label}
          </span>
        ))}
      </div>

      {/* 4. Stats Row */}
      <div className="flex flex-wrap gap-4 mb-6">
        {project.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col bg-surface-container-low p-2 rounded border border-outline/20 min-w-[120px]">
            <span className="text-on-surface font-bold text-lg">{stat.value}</span>
            <span className="text-on-surface-variant text-xs uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* 5. Architecture Flow */}
      <div className="mb-6">
        <h4 className="text-warning-amber mb-2 font-bold uppercase text-xs">Architecture Flow</h4>
        <div className="space-y-3">
          {project.architecture.map((flow, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center text-xs pb-1 gap-2">
              <span className="text-on-surface-variant w-24 shrink-0">{flow.label}</span>
              <div className="flex flex-wrap items-center gap-2">
                {flow.nodes.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className={`px-2 py-1 rounded border border-outline/30 bg-surface-container-lowest/70 ${
                      node.type === 'client' ? 'text-terminal-green' :
                      node.type === 'api' ? 'text-primary-container' :
                      node.type === 'cache' ? 'text-warning-amber' :
                      node.type === 'db' ? 'text-secondary' :
                      'text-on-surface-variant'
                    }`}>
                      {node.label}
                    </span>
                    {nIdx < flow.nodes.length - 1 && (
                      <span className="text-on-surface-variant font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. API Endpoints */}
      {project.endpoints.length > 0 && (
        <div className="mb-6">
          <h4 className="text-warning-amber mb-2 font-bold uppercase text-xs">Key Endpoints</h4>
          <div className="space-y-1 bg-surface-container-lowest/70 p-2 rounded border border-outline/20">
            {project.endpoints.map((ep, idx) => (
              <div key={idx} className="flex gap-3 text-xs flex-wrap sm:flex-nowrap">
                <span className={`w-14 font-bold ${methodColors[ep.method]}`}>[{ep.method}]</span>
                <span className="text-on-surface w-auto sm:w-40 shrink-0">{ep.path}</span>
                <span className="text-on-surface-variant truncate">— {ep.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Performance Metrics */}
      <div className="mb-6">
        <h4 className="text-warning-amber mb-2 font-bold uppercase text-xs">Performance Metrics</h4>
        <div className="space-y-3">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs">
              <span className="text-on-surface w-32 shrink-0">{metric.label}</span>
              <div className="flex-1 h-2 bg-surface-container-lowest/70 rounded-full overflow-hidden border border-outline/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * idx }}
                  className="h-full"
                  style={{ backgroundColor: metric.color }}
                />
              </div>
              <span className="text-on-surface-variant w-12 text-right">{metric.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Recent Commits */}
      <div className="mb-6">
        <h4 className="text-warning-amber mb-2 font-bold uppercase text-xs">Recent Commits</h4>
        <div className="space-y-2 text-code-sm font-code-sm">
          {project.commits.map((commit, idx) => (
            <div key={idx} className="flex items-start sm:items-center gap-2 flex-wrap sm:flex-nowrap">
              <span className="text-secondary shrink-0 w-16">{commit.hash}</span>
              <span className="text-on-surface sm:truncate flex-1 min-w-[200px]">{commit.message}</span>
              <span className="text-on-surface-variant shrink-0 w-full sm:w-auto text-right sm:text-left">({commit.time})</span>
            </div>
          ))}
        </div>
      </div>

      {/* 9. GitHub Link */}
      <div className="flex items-center gap-2 text-primary-container text-xs mt-4 pt-4 border-t border-outline/20">
        <span className="font-bold">→ github:</span>
        <a href={project.github.startsWith('http') ? project.github : `https://${project.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-on-surface transition-colors">
          {project.github}
        </a>
        {project.live && (
          <>
            <span className="text-on-surface-variant mx-2">|</span>
            <span className="font-bold">live:</span>
            <a href={project.live.startsWith('http') ? project.live : `https://${project.live}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-on-surface transition-colors">
              {project.live}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;