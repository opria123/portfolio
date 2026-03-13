import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { CardActionArea, Chip, Box, Grid } from '@mui/material';
import useGame from '../stores/useGame';
import ProjectDetailModal from './ProjectDetailModal';

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

function ProjectCard({ card, onClick }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(145,94,255,0.3)',
                    },
                }}
                onClick={onClick}
            >
                <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <Box
                        sx={{
                            height: 180,
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {card.summary}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {card.tags?.map((tag: string) => (
                                <Chip
                                    key={tag}
                                    label={`#${tag}`}
                                    size="small"
                                    sx={{
                                        bgcolor: tagColors[tag] || '#915EFF',
                                        color: '#fff',
                                        fontSize: '0.7rem',
                                    }}
                                />
                            ))}
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default function Projects() {
    const siteData = useGame((state) => state.siteData);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <Grid className='section' container rowSpacing={2} spacing={2} sx={{ px: { xs: 3, sm: 8 }, py: { xs: 6, sm: 10 }, maxWidth: 1280, mx: 'auto' }}>
                <Grid item xs={12}>
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>My work</p>
                        <h2 className={styles.sectionHeadText}>Projects.</h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        style={{ maxWidth: 800 }}
                    >
                        {siteData.projects.introduction}
                    </motion.p>
                </Grid>
                {siteData.projects.cards.map((card, index) => (
                    <ProjectCard
                        key={index}
                        card={card}
                        onClick={() => setSelectedProject(card)}
                    />
                ))}
            </Grid>
            <ProjectDetailModal
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </>
    );
}