import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Hardcoded project data (will be replaced with database in future)
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Mobile App Development',
      description: 'Building a cross-platform mobile application',
      hardwareSets: [
        { name: 'HWSet1', checkedOut: 50, capacity: 100 },
        { name: 'HWSet2', checkedOut: 30, capacity: 100 }
      ],
      isMember: false
    },
    {
      id: 2,
      name: 'IoT Smart Home',
      description: 'Creating connected devices for home automation',
      hardwareSets: [
        { name: 'HWSet1', checkedOut: 75, capacity: 100 },
        { name: 'HWSet2', checkedOut: 20, capacity: 100 }
      ],
      isMember: true
    },
    {
      id: 3,
      name: 'Robotics Competition',
      description: 'Designing and building autonomous robots',
      hardwareSets: [
        { name: 'HWSet1', checkedOut: 25, capacity: 100 },
        { name: 'HWSet2', checkedOut: 60, capacity: 100 }
      ],
      isMember: false
    }
  ]);

  // Event handler to toggle project membership
  const handleToggleMembership = (projectId) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, isMember: !project.isMember }
        : project
    ));
  };

  return (
    <Container maxWidth="lg" className="projects-container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          My Projects
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
          View and manage your project memberships and hardware checkouts
        </Typography>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              onToggleMembership={handleToggleMembership}
            />
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Projects;
