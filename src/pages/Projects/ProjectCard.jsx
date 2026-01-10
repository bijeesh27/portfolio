import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/common/Button';

const ProjectCard = ({ project }) => {
  return (
    <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
          className="project-image"
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--secondary)', marginBottom: '1rem', flex: 1 }}>{project.description}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.techStack.map((tech) => (
            <Badge key={tech} style={{ fontSize: '0.7rem' }}>{tech}</Badge>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
            <Button variant="outline" style={{ width: '100%' }}>Code</Button>
          </a>
          {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
            <Button style={{ width: '100%' }}>Demo</Button>
          </a> */}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
