import React from 'react'
import GalleryList from './GalleryList';

export default function Gallery({imageList, selectedImage, onSelection}) {
    return (
        <div>
            {imageList.map( image => {
                return (
                    <GalleryList 
                    key = {image.index} 
                    index = {image.index}
                    imgSrc = {image.src} 
                    isSelected = {selectedImage === image.index}
                    onSelection = {onSelection}
                    caption = {image.caption}/>
                );
            })}
        </div>
    )
}
