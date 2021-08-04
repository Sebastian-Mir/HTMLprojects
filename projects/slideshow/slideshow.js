//insert the links of the images in this array
const slideshowImages = [
    "https://images.unsplash.com/photo-1493548578639-b0c241186eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1602884935770-2305ab2f951f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1601808881948-aa68248b1df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
];
/*The logic used here is that the images go in a loop 1-2-3-1...
changeImage is the function that determines if we go to the next or previous image
action is the variable passed from slideshow.html that tells the function which image to display next
*/
const changeImage = (action) => {
    
    const slideImage = document.getElementById("slideshow-box");
    const imageIndex = slideshowImages.findIndex(imgIndex => imgIndex == slideImage.src);
    if(action == "prev") {
        if(imageIndex == 0) {
            slideImage.src = slideshowImages[slideshowImages.length - 1];
        } else {
            slideImage.src = slideshowImages[imageIndex - 1];
        }
    } else {
        if(imageIndex == (slideshowImages.length - 1)) {
            slideImage.src = slideshowImages[0];
        } else {
            slideImage.src = slideshowImages[imageIndex + 1];
        }
    }
};