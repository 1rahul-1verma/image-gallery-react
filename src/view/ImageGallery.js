import React, { Component } from 'react'
import Gallery from './Gallery';
import Display from './Display';
import "./ImageGallery.css"

class ImageGallery extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            imageList : this.props.model.getGalleryImages(),
            selectedImage : this.props.model.getSelectedImage(),
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
    }

    handleSelectionChange(indx) {
        this.props.model.setSelectedImage(indx);
        this.setState({
            selectedImage : indx,
        });
    }

    handleCaptionChange(caption) {
        this.props.model.setSelectedCaption(caption);
        this.setState({
            imageList : this.props.model.getGalleryImages,
        });
    }
    

    render() {
        const imageList = this.state.imageList;
        const selectedImage = this.state.selectedImage;
        return (
            <div className = "flex-container">
                <Gallery 
                imageList = {imageList} 
                selectedImage = {selectedImage}
                onSelection = {this.handleSelectionChange} />
                <Display 
                displayImage = {imageList[selectedImage]} />
            </div>
        )
    }
}

export default ImageGallery;
