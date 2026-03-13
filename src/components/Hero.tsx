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
      <Grid className="section" container rowSpacing={4} spacing={2} sx={{ px: { xs: 3, sm: 8 }, pt: { xs: 6, sm: 10 }, maxWidth: 1280, mx: 'auto' }}>
        <Grid item xs={12} md={6}>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              {parse(siteData.hero.header)}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {parse(siteData.hero.body)}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
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