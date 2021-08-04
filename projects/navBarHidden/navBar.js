/**Notes on function to display the menu bar*/
const displayMenu = () => {
    /*Obtain the navigation bar, body of the page and the Icon to display them*/
    const navBar = document.getElementsByTagName("nav");
    const article = document.getElementsByTagName("article");
    const navIcon = document.getElementsByClassName("nav-bar-icon");
    /*if the nav bar is not displayed: 
        We increase its width, 
        Decrease the body width (we also use a transition just for fun)
        Rotate the display Icon with an animation
    else (nav bar is displayed)
        hide the nav bar
        open width of the body = 100%
        rotate the nav bar icon
        */
    if(window.getComputedStyle(navBar[0]).display == "none"){
        article[0].style.width = "79%";
        article[0].style.transition = "width 1s";
        navBar[0].style.display = "block";
        navIcon[0].style.transform = "rotate(90deg)";
        navIcon[0].style.transitionDuration = "1s";
    } else {
        article[0].style.width = "100%";
        article[0].style.transition = "width 1s";
        navBar[0].style.display = "none";
        navIcon[0].style.transform = "rotate(0deg)";
        navIcon[0].style.transitionDuration = "1s";
    }
    

};