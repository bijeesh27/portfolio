import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="container section" style={{ width: '100%' }}>
      <h2 className="section-title">Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1.5rem, 3vw, 2rem)', width: '100%' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
