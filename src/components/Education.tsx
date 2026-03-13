import * as React from 'react';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Grid, Chip, Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const education = [
  {
    degree: "MSc Computer Science, AI & Machine Learning",
    school: "Western Governors University",
    date: "Oct 2025",
  },
  {
    degree: "BSc Computer Science",
    school: "Bowling Green State University",
    date: "Aug 2017 – May 2019",
  },
];

const certifications = [
  { name: "AWS Certified Machine Learning – Specialty", issuer: "Amazon Web Services", date: "Sep 2025" },
  { name: "MCP Course Unit 3: Automation in Production", issuer: "Hugging Face", date: "Jun 2025" },
  { name: "Deep Reinforcement Learning Course", issuer: "Hugging Face", date: "Apr 2025" },
  { name: "The Reasoning Course – Building AI Models That Reason", issuer: "Hugging Face", date: "Apr 2025" },
  { name: "AI Agents Fundamentals", issuer: "Hugging Face", date: "Apr 2025" },
  { name: "Fundamentals of Accelerated Computing with CUDA C++", issuer: "NVIDIA", date: "Mar 2025" },
  { name: "Machine Learning, Data Science and Generative AI with Python", issuer: "Udemy", date: "Apr 2024" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft", date: "Mar 2024" },
];

export default function Education() {
  return (
    <Grid className='section' container rowSpacing={2} spacing={2} sx={{ px: { xs: 3, sm: 8 }, py: { xs: 6, sm: 10 }, maxWidth: 1280, mx: 'auto' }}>
      <Grid item xs={12}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Credentials</p>
          <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={10} lg={8}>
        {education.map((edu, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
            <SchoolIcon sx={{ color: '#915EFF', mr: 2, mt: 0.5, fontSize: 28 }} />
            <Box>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                {edu.degree}
              </Typography>
              <Typography variant="body2" sx={{ color: '#aaa6c3' }}>
                {edu.school} &mdash; {edu.date}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box sx={{ mt: 4 }}>
          {certifications.map((cert, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <WorkspacePremiumIcon sx={{ color: '#00cea8', mr: 2, mt: 0.5, fontSize: 28 }} />
              <Box>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                  {cert.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#aaa6c3' }}>
                  {cert.issuer} &mdash; {cert.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
