import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { about } from "../constants";
import parse from 'html-react-parser'


import { CardActionArea, Grid } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <>
      <Grid className='section' container row-spacing={20} spacing={1}>
        <Grid item xs={1.5} xl={3} />
        <Grid item xs={7}>
          <motion.div variants={textVariant()}>
            <p className='{styles.sectionSubText}'>Introduction</p>
            <h2 className='{styles.sectionHeadText}'>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
          >
            {parse(about.introduction)}
          </motion.p>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={1.5} xl={3} />
        <Grid item xs={3} xl={2}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={about.cards[0].image}
                alt={about.cards[0].alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {about.cards[0].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {parse(about.cards[0].body)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} xl={2}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={about.cards[1].image}
                alt={about.cards[1].alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {about.cards[1].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {parse(about.cards[1].body)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3} xl={2}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={about.cards[2].image}
                alt={about.cards[2].alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {about.cards[2].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {parse(about.cards[2].body)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}