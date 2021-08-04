//Obtains the counter value
const counter = document.getElementById("counter-number");
//Function to decrease the count -1, changes the color according to the value
const decreaseCount = () => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    if(counter.innerHTML < 0)
        counter.style.color = "red";
    if(counter.innerHTML == 0)
        counter.style.color = "black";
};
//Reset the count to 0 and color black
const resetCount = () => {
    counter.innerHTML = 0;
    counter.style.color = "black";
};
//Increases the count + 1 and changes the color accordingly
const increaseCount = () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    if(counter.innerHTML > 0)
        counter.style.color = "green";
    if(counter.innerHTML == 0)
        counter.style.color = "black";
};
