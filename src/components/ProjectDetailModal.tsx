import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Chip,
  Box,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

const tagColors: Record<string, string> = {
  pytorch: '#EE4C2C',
  'deep-learning': '#915EFF',
  cuda: '#76B900',
  python: '#3776AB',
  csharp: '#68217A',
  unity: '#222C37',
  networking: '#00CEA8',
  docker: '#2496ED',
  opencv: '#5C3EE8',
  'computer-vision': '#FF6F00',
  whisper: '#412991',
};

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCard {
  image: string;
  title: string;
  alt: string;
  summary: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

interface ProjectDetailModalProps {
  open: boolean;
  onClose: () => void;
  project: ProjectCard | null;
}

export default function ProjectDetailModal({ open, onClose, project }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#1d1836',
          color: '#fff',
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, pr: 6, fontWeight: 700, fontSize: '1.5rem' }}>
        {project.title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#aaa6c3',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <img
            src={project.image}
            alt={project.alt}
            style={{
              maxWidth: '100%',
              maxHeight: 300,
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </Box>

        <Typography variant="body1" sx={{ color: '#dfd9ff', mb: 2, lineHeight: 1.7 }}>
          {project.summary}
        </Typography>

        <Typography variant="body2" sx={{ color: '#aaa6c3', mb: 3, lineHeight: 1.8 }}>
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={`#${tag}`}
              size="small"
              sx={{
                bgcolor: tagColors[tag] || '#915EFF',
                color: '#fff',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        {project.links.length > 0 && (
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#fff', mb: 1, fontWeight: 600 }}>
              Repositories
            </Typography>
            {project.links.map((link) => (
              <Box key={link.url} sx={{ mb: 1 }}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#00cea8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {link.label}
                  <LaunchIcon sx={{ fontSize: 14 }} />
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', p: 2 }}>
        <Button onClick={onClose} sx={{ color: '#aaa6c3' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
