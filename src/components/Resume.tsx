import React from 'react';
// Core viewer
import { Worker, Viewer } from '@react-pdf-viewer/core';

// Plugins

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Create new plugin instance

export default function Resume() {


    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl="https://raw.githubusercontent.com/opria123/portfolio/main/public/Josh-opria-resume.pdf" />
            </Worker>

        </>
    );
};