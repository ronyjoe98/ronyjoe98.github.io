import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material';
import HardwareSet from './HardwareSet';
import './ProjectCard.css';

const ProjectCard = ({ project, onToggleMembership }) => {
  return (
    <Card className="project-card" elevation={3}>
      <CardContent>
        <div className="project-header">
          <Typography variant="h5" component="h2" gutterBottom>
            {project.name}
          </Typography>
          {project.isMember && (
            <Chip 
              label="Member" 
              color="primary" 
              size="small" 
              className="member-chip"
            />
          )}
        </div>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>

        <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1, fontSize: '1.1rem' }}>
          Hardware Sets
        </Typography>
        
        <div className="hardware-sets">
          {project.hardwareSets.map((hwSet, index) => (
            <HardwareSet 
              key={index}
              name={hwSet.name}
              checkedOut={hwSet.checkedOut}
              capacity={hwSet.capacity}
            />
          ))}
        </div>
      </CardContent>

      <CardActions className="project-actions">
        <Button 
          variant={project.isMember ? "outlined" : "contained"}
          color={project.isMember ? "error" : "primary"}
          onClick={() => onToggleMembership(project.id)}
          fullWidth
        >
          {project.isMember ? 'Leave Project' : 'Join Project'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
