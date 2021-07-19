class Model {
    constructor(imageList, selectedImage) {
        this.imageList = imageList;
        this.selectedImage = selectedImage;

        this.getGalleryImages = this.getGalleryImages.bind(this);
        this.getSelectedImage = this.getSelectedImage.bind(this);
        this.getSelectedCaption = this.getSelectedCaption.bind(this);
        this.setSelectedImage = this.setSelectedImage.bind(this);
        this.setSelectedCaption = this.setSelectedCaption.bind(this);
    }

    getGalleryImages() {
        return this.imageList;
    }

    getSelectedImage() {
        return this.selectedImage;
    }

    getSelectedCaption() {
        return this.imageList[this.selectedImage].caption;
    }

    setSelectedImage(indx) {
        this.selectedImage = indx;
    }

    setSelectedCaption(caption) {
        this.imageList[this.selectedImage].caption = caption;
    }

}

export default Model;