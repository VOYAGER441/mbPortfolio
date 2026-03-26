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
  'production': 'text-[#3fb950]',
  'open-source': 'text-[#79c0ff]',
  'personal': 'text-[#ffa657]',
};

const stackColors = {
  'backend': 'text-[#3fb950] border-[#3fb950]/30',
  'db': 'text-[#d2a8ff] border-[#d2a8ff]/30',
  'devops': 'text-[#ffa657] border-[#ffa657]/30',
  'frontend': 'text-[#79c0ff] border-[#79c0ff]/30',
};

const methodColors = {
  'GET': 'text-[#79c0ff]',
  'POST': 'text-[#3fb950]',
  'PUT': 'text-[#ffa657]',
  'DELETE': 'text-[#ff7b72]',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="my-4 border border-[#30363d] rounded-md bg-[#161b22] p-4 text-sm font-mono overflow-hidden">
      {/* 1. Header Row */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-bold text-[#e6edf3] text-base">{project.name}</span>
        <span className={`${statusColors[project.status]} uppercase text-xs tracking-wider`}>[{project.status}]</span>
      </div>

      {/* 2. Description */}
      <p className="text-[#8b949e] mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* 3. Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, idx) => (
          <span key={idx} className={`px-2 py-0.5 rounded-full text-xs border bg-[#0d1117] ${stackColors[tech.type]}`}>
            {tech.label}
          </span>
        ))}
      </div>

      {/* 4. Stats Row */}
      <div className="flex flex-wrap gap-4 mb-6">
        {project.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col bg-[#0d1117] p-2 rounded border border-[#30363d] min-w-[120px]">
            <span className="text-[#e6edf3] font-bold text-lg">{stat.value}</span>
            <span className="text-[#8b949e] text-xs uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* 5. Architecture Flow */}
      <div className="mb-6">
        <h4 className="text-[#e3b341] mb-2 font-bold uppercase text-xs">Architecture Flow</h4>
        <div className="space-y-3">
          {project.architecture.map((flow, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center text-xs pb-1 gap-2">
              <span className="text-[#8b949e] w-24 shrink-0">{flow.label}</span>
              <div className="flex flex-wrap items-center gap-2">
                {flow.nodes.map((node, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <span className={`px-2 py-1 rounded border border-[#30363d] bg-[#0d1117] ${
                      node.type === 'client' ? 'text-[#3fb950]' :
                      node.type === 'api' ? 'text-[#79c0ff]' :
                      node.type === 'cache' ? 'text-[#e3b341]' :
                      node.type === 'db' ? 'text-[#d2a8ff]' :
                      'text-[#ffa657]'
                    }`}>
                      {node.label}
                    </span>
                    {nIdx < flow.nodes.length - 1 && (
                      <span className="text-[#8b949e] font-bold">→</span>
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
          <h4 className="text-[#e3b341] mb-2 font-bold uppercase text-xs">Key Endpoints</h4>
          <div className="space-y-1 bg-[#0d1117] p-2 rounded border border-[#30363d]">
            {project.endpoints.map((ep, idx) => (
              <div key={idx} className="flex gap-3 text-xs flex-wrap sm:flex-nowrap">
                <span className={`w-14 font-bold ${methodColors[ep.method]}`}>[{ep.method}]</span>
                <span className="text-[#e6edf3] w-auto sm:w-40 shrink-0">{ep.path}</span>
                <span className="text-[#8b949e] truncate">— {ep.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Performance Metrics */}
      <div className="mb-6">
        <h4 className="text-[#e3b341] mb-2 font-bold uppercase text-xs">Performance Metrics</h4>
        <div className="space-y-3">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs">
              <span className="text-[#e6edf3] w-32 shrink-0">{metric.label}</span>
              <div className="flex-1 h-2 bg-[#0d1117] rounded-full overflow-hidden border border-[#30363d]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * idx }}
                  className="h-full"
                  style={{ backgroundColor: metric.color }}
                />
              </div>
              <span className="text-[#8b949e] w-12 text-right">{metric.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Recent Commits */}
      <div className="mb-6">
        <h4 className="text-[#e3b341] mb-2 font-bold uppercase text-xs">Recent Commits</h4>
        <div className="space-y-2 text-xs font-mono">
          {project.commits.map((commit, idx) => (
            <div key={idx} className="flex items-start sm:items-center gap-2 flex-wrap sm:flex-nowrap">
              <span className="text-[#d2a8ff] shrink-0 w-16">{commit.hash}</span>
              <span className="text-[#e6edf3] sm:truncate flex-1 min-w-[200px]">{commit.message}</span>
              <span className="text-[#8b949e] shrink-0 w-full sm:w-auto text-right sm:text-left">({commit.time})</span>
            </div>
          ))}
        </div>
      </div>

      {/* 9. GitHub Link */}
      <div className="flex items-center gap-2 text-[#79c0ff] text-xs mt-4 pt-4 border-t border-[#30363d]">
        <span className="font-bold">→ github:</span>
        <a href={project.github.startsWith('http') ? project.github : `https://${project.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#e6edf3] transition-colors">
          {project.github}
        </a>
        {project.live && (
          <>
            <span className="text-[#8b949e] mx-2">|</span>
            <span className="font-bold">live:</span>
            <a href={project.live.startsWith('http') ? project.live : `https://${project.live}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#e6edf3] transition-colors">
              {project.live}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;