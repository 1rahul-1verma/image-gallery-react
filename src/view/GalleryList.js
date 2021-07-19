import React from 'react'
import "./GalleryList.css";

export default function GalleryList({imgSrc,index, caption, isSelected, onSelection}) {
    function handleSelectionChange() {
        console.log("click event");
        onSelection(index);
    }
    return (
    <div className = "gallery-list" data-selected = {isSelected} onClick = {handleSelectionChange}> 
            <img className = "images" src = {imgSrc} alt = "gallery List" />
            <div className = "image-caption"> {caption} </div>
        </div>
    )
}
