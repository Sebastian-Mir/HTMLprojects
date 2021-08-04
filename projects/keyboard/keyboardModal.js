let bodyNumber = 1;
const body1 = document.getElementById("body-1");
const body2 = document.getElementById("body-2");
const body3 = document.getElementById("body-3");

const changeModal = (action) => {

    //switch through the bodies of the modal
    switch (bodyNumber) { 
        case 1:
            if(action == 'next'){
                
                body1.style.display = 'none';
                body2.style.display = 'block';
                bodyNumber = 2;
            } else {
                body1.style.display = 'none';
                body3.style.display = 'block';
                bodyNumber = 3;
            }
        break;
        case 2:
            if(action == 'next'){
                
                body2.style.display = 'none';
                body3.style.display = 'block';
                bodyNumber = 3;
            } else {
                body2.style.display = 'none';
                body1.style.display = 'block';
                bodyNumber = 1;
            }  
        break;
        default:
            if(action == 'next'){
                body3.style.display = 'none';
                body1.style.display = 'block';
                bodyNumber = 1;
            } else {
                body3.style.display = 'none';
                body2.style.display = 'block';
                bodyNumber = 2;
            }
        break;
    }    
}