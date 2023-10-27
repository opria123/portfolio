import React from 'react';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

// Create new plugin instance

export default function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


    return (
        <>
            <Viewer
                fileUrl='/Josh-opria-resume.pdf'
            />
        </>
    );
};