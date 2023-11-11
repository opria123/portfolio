import { motion } from "framer-motion";

import { styles } from "../styles";
import EarthCanvas from "./Earth";
import { Grid } from "@mui/material";
import parse from 'html-react-parser'
import React from "react";
import useGame from "../stores/useGame";


const Hero = () => {
  const siteData = useGame((state) => state.siteData);

  return (
    <>
      <Grid className="section" container rowSpacing={10} spacing={1}>
        <Grid item xs={12} />
        <Grid item xs={1.5} xl={3} />
        <Grid item xs={5} xl={3} >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {parse(siteData.hero.header)}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {parse(siteData.hero.body)}
            </p>
          </div>
        </Grid>
        <Grid item xs={5} xl={3} >
          <EarthCanvas />
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;