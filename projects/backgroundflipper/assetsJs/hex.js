const randomHex = () => {

    /**Notes on randomHex:
     * 
     * This function selects a random hexadecimal number that represents a color
     * the number is a 6 digit string with characters 0-9 or A-F
     * and uses the number as color for the body (not the header, nav or footer). 
     * It also writes the hexadecimal number in the p tag above the flip button
     * 
     * The numbers are random and a validation was neccessary as the number sometimes
     * only contained 5 characters instead of 6
     */

    let randomColor
    do{
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
    } while (randomColor.length != 6) 
    //sometimes the function returns a 5 digit Hex
    
    
    console.log("#"+randomColor.toString());
    const mainBackground = document.getElementById("main");
    const lblColorName = document.getElementsByClassName("p-background");
    lblColorName[0].style.color = "#" + randomColor.toString();
    lblColorName[1].style.color = "#" + randomColor.toString();
    lblColorName[1].innerHTML = "#" + randomColor.toString();
    mainBackground.style.backgroundColor = "#" + randomColor.toString();
    
}