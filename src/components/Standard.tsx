import { Alert, Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Work from "./Work";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./Contact";


export default function Standard() {

    return (
        <>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Work />
                <Projects/>
                <div className='relative z-0'>
                    <ContactForm/>
                </div>
            </div>
        </>
    );
}