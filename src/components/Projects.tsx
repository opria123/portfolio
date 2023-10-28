import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { CardActionArea, Grid } from '@mui/material';

export default function Projects() {
    return (
        <>
            <Grid className='section' container row-spacing={20} spacing={1}>
                <Grid item xs={1.5} />
                <Grid item xs={7}>
                    <motion.div variants={textVariant()}>
                        <p className='{styles.sectionSubText}'>My work</p>
                        <h2 className='{styles.sectionHeadText}'>Projects.</h2>
                    </motion.div>

                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                    >
                        The following are a some projects that I have taken on outside of work,
                        <br />
                        to solve a problem I was seeing in my personal life or learn a new skill.
                    </motion.p>
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={1.5} xl={3} />
                <Grid item xs={3} xl={2}>
                    <Card sx={{ maxWidth: 345, height: "100%" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="../assets/Toledo-Zoo.jpg"
                                alt="toledo zoo"
                                sx={{ objectFit: "contain" }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Turtle recognition
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Worked with the Toledo Zoo on an app that used opencv and python to
                                    do image recognition to identify turtles.
                                    This was an attempt at keeping track of turtle movement.
                                    <br />
                                    <br />
                                    <span className='text-blue'>#python </span>
                                    <span className='text-green'>#swift </span>
                                    <span className='text-yellow'>#opencv </span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3} xl={2}>
                    <a style={{ textDecoration: "none" }} href="https://github.com/opria123/Bot-Cleaner" target="_blank">
                        <Card sx={{ maxWidth: 345, height: "100%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="../assets/discord.png"
                                    alt="discord"
                                    sx={{ objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Discord Bot
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Wrote a Discord bot that would remove messages from other bots and
                                        the commands to trigger them, so that the discrod chats would not
                                        get cluttered with bot messages
                                        <br />
                                        <br />
                                        <span className='text-yellow'>#discord </span>
                                        <span className='text-red'>#nodejs </span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>
                <Grid item xs={3} xl={2}>
                    <a style={{ textDecoration: "none" }} href="https://github.com/opria123/exploding-kittens" target="_blank">
                        <Card sx={{ maxWidth: 345, height: "100%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="../assets/exploding-kittens.png"
                                    alt="exploding kittens"
                                    sx={{ objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Exploding Kittens
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Exploding Kittens is a card game, I have a project that is currently in
                                        progress to make a web version of the card game utilizing web-sockts for multiplayer
                                        <br />
                                        <br />
                                        <span className='text-yellow'>#react </span>
                                        <span className='text-blue'>#nodejs </span>
                                        <span className='text-green'>#exploding-kittens </span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>
            </Grid>
        </>
    );
}