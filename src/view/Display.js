import React from 'react';
import "./Display.css";

export default function Display({displayImage, onCaptionChange}) {
    function handleCaptionChange(event) {
        console.log(event);
    }
    return (
        <div className = "display">
            <img className ="display-image" src = {displayImage.src} alt = "displayImage" />
            <div 
            className = "display-caption" 
            contentEditable = "true" 
            onChange = {handleCaptionChange}> 
                {displayImage.caption} 
            </div>
        </div>
    )
}
