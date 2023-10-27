import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { CardActionArea, Grid } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <>
      <Grid className='section' container row-spacing={20} spacing={1}>
        <Grid item xs={1.5} />
        <Grid item xs={7}>
          <motion.div variants={textVariant()}>
            <p className='{styles.sectionSubText}'>Introduction</p>
            <h2 className='{styles.sectionHeadText}'>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
          >
            I'm a skilled software developer with experience in TypeScript and
            <br />
            JavaScript, and expertise in frameworks like React, Node.js, and Angular
            <br />
            I'm a quick learner and collaborate closely with teamates and buissness partners to
            <br />
            create efficient, scalable, and user-friendly solutions that solve
            <br />
            real-world problems.
          </motion.p>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={1.5} />
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345, height: "100%"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="../assets/web.png"
                alt="web"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience with multiple web development frameworks:
                  <br />
                  <br />
                  React, Angular, Django, PHP
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="../assets/backend.png"
                alt="backend"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Back end
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience with multiple backend development frameworks:
                  <br />
                  <br />
                  SpringBoot, NodeJs, Rails, SQL
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="../assets/conainter.png"
                alt="containers"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Infrastructure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience with Containerization and Infrastructure tools:
                  <br />
                  <br />
                  Drocker, Kubernetes, AWS, Azure, Terraform
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}