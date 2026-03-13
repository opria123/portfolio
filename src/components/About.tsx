import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import parse from 'html-react-parser'
import useGame from '../stores/useGame'
import { Grid } from '@mui/material';

export default function ActionAreaCard() {
  const siteData = useGame((state) => state.siteData);

  return (
    <>
      <Grid className='section' container rowSpacing={2} spacing={2} sx={{ px: { xs: 3, sm: 8 }, py: { xs: 6, sm: 10 }, maxWidth: 1280, mx: 'auto' }}>
        <Grid item xs={12}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            style={{ maxWidth: 800 }}
          >
            {parse(siteData.about.introduction)}
          </motion.p>
        </Grid>
        {siteData.about.cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%", maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.alt}
                  sx={{ objectFit: 'contain', height: 160, p: 2 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {parse(card.body)}
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}