


//array of available colors in strings (not all the colors are included, there are too many)
const colorArray = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkturquoise',
    'darkviolet',
    'darkpink',
    'deepskyblue',
    'dimgray',
    'dodgerblue',
    'firebrick',
    'forestgreen',
    'fuchsia',
    'gold',
    'greenyellow',
    'indigo',
    'lightblue',
    'lawngreen',
    'lightgreen',
    'magenta',
    'lime',
    'maroon',
    'mediumspringgreen',
    'mediumseagreen',
    'navy',
    'mediumvioletred',
    'orangered',
    'purple',
    'seagreen',
    'red',
    'teal',
    'springgreen',
    'tomato',
    'violet',
    'yellowgreen',
    'yellow'

];

const randomSimple = () => {

    /**Notes on randomSimple:
     * 
     * This function selects a random color name (string) from colorArray
     * and uses the color as the background-color of the body (not the header, nav or footer). 
     * It also writes the name of the color in the p tag above the flip button
     * 
     * To include a new color, add the name as a string on the colorArray variable
     * but as the selection is random, it might not appear as often.
     */
    const mainBackground = document.getElementById("main");
    const lblColorName = document.getElementsByClassName("p-background");
    const randomColor = colorArray[Math.floor(Math.random() * (colorArray.length))];
    //returns a random number between 0 and colorArray length
    //floor converts it to int
    
    lblColorName[0].style.color = randomColor;
    lblColorName[1].style.color = randomColor;
    lblColorName[1].innerHTML = randomColor;
    mainBackground.style.backgroundColor = randomColor;

    bodyFlipper.style.backgroundColor = randomCol;
    pBackgroundColor.innerHTML = randomCol;
    pBackgroundColor.style.color = randomCol;
    divColorHeader.style.color = randomCol;

};