import Card from '../../components/ui/Card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description: "Leading a team of 5 developers to build modern web applications using React and Next.js.",
      details: [
        "Architected shared component library used across 3 products",
        "Improved site performance by 40% through code splitting and optimization",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Creative Agency",
      duration: "2021 - 2023",
      description: "Developed responsive websites for various clients ranging from startups to established brands.",
      details: [
        "Collaborated with designers to implement pixel-perfect UIs",
        "Integrated CMS solutions like Contentful and Strapi",
        "Maintained 98% client satisfaction rate"
      ]
    },
    {
       id: 3,
       role: "Junior Developer",
       company: "StartUp Hub",
       duration: "2020 - 2021",
       description: "Assisted in backend development and database management.",
       details: [
         "Built REST APIs using Node.js and Express",
         "Managed database schemas in MongoDB",
         "Participated in agile sprints and daily standups"
       ]
    }
  ];

  return (
    <div className="container section">
      <h2 className="section-title">Experience</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={exp.id} style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative' }}>
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div style={{ position: 'absolute', left: '20px', top: '50px', bottom: '-50px', width: '2px', backgroundColor: 'var(--border)' }}></div>
            )}
            
            {/* Icon/Dot */}
            <div style={{ 
              minWidth: '42px', height: '42px', 
              borderRadius: '50%', backgroundColor: 'var(--primary)', 
              color: 'var(--primary-foreground)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', zIndex: 1
            }}>
              {experiences.length - index}
            </div>
            
            <Card style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--primary)', fontWeight: '500' }}>{exp.company}</h4>
                </div>
                <span style={{ 
                  backgroundColor: 'var(--secondary)', color: '#fff', 
                  padding: '0.25rem 0.75rem', borderRadius: '1rem', 
                  fontSize: '0.875rem', height: 'fit-content'
                }}>
                  {exp.duration}
                </span>
              </div>
              <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>{exp.description}</p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--secondary)' }}>
                {exp.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
