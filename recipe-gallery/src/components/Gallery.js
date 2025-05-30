// src/Gallery.js
import React, { useState } from 'react';
import { images } from './imageList';

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, images.length - 1));
    };

    const { url, description } = images[currentIndex];

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Recipe Gallery</h2>
            <img src={url} alt={description} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{description}</p>
            <div>
                <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
            </div>
            <p>
                Image {currentIndex + 1} of {images.length}
            </p>
        </div>
    );
}

export default Gallery;
