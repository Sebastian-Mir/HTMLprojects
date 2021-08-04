document.addEventListener('click', function(ev){
    const targetId = ev.target.id;
    const targetSymbol = document.getElementById(targetId);
    let targetBody;
    switch(targetId){
        /** How to add a new question with functionality:
         * 
         * add the case option with the name if the FAQ id
         * 
         * obtain the question body using getElementById
         * 
         * evaluate: 
         * if it is open (target.style.color == symbol in red){
         *      contract all the other questions (contractQuestion function)
         * }else{}
         *      If the target is already contracted 
         *      use displayThisQuestion function to show the answer
         * }
         * don't forget the break
        */
        case 'purpose':
            targetBody = document.getElementById("answer-purpose");
            if(targetSymbol.style.color == "red"){
                contractQuestions();
            } else {
                contractQuestions();
                displayThisQuestion(targetBody, targetSymbol);
            }
            break;

        case 'personal-info':
            targetBody = document.getElementById("answer-personal-info");
            if(targetSymbol.style.color == "red"){
                contractQuestions();  
            } else {
                contractQuestions();
                displayThisQuestion(targetBody, targetSymbol);
            }            
            break;

        case 'credits':
            targetBody = document.getElementById("answer-credits");
            if(targetSymbol.style.color == "red"){
                contractQuestions();
            } else {
                contractQuestions();
                displayThisQuestion(targetBody, targetSymbol);
            }
            break;

        case 'copy-code':
            targetBody = document.getElementById("answer-copy-code");
            if(targetSymbol.style.color == "red"){
                contractQuestions();
            } else {
                contractQuestions();
                displayThisQuestion(targetBody, targetSymbol);
            }
            break;

        case 'version':
            targetBody = document.getElementById("answer-version");
            if(targetSymbol.style.color == "red"){
                contractQuestions();
            } else {
                contractQuestions();
                displayThisQuestion(targetBody, targetSymbol);
            }
            break;

        case 'language':
            targetBody = document.getElementById("answer-language");
            if(targetSymbol.style.color == "red"){
                contractQuestions();
            } else {
                contractQuestions();
                displayThisQuestion(targetBody, targetSymbol);
            }
            break;

        default:
            break;
    };
});

const contractQuestions = () => {
    //This function contracts all the question bodies when we click on a new one
    //so that only one question can be open at the time and reduce space.
    const faqBodiesClass = document.querySelectorAll('.faq-body');
    const faqTargetSymbols = document.querySelectorAll('.faq-display');
    for(i = 0; i < faqBodiesClass.length; i++) {
        faqBodiesClass[i].style.display = "none";
        faqTargetSymbols[i].innerHTML = '+';
        faqTargetSymbols[i].style.color = "rgb(34, 34, 248)";

    }
};

const displayThisQuestion = (targetBody, targetSymbol) => {
    //Function to display the body of the selected FAQ
    targetBody.style.display = "block";
    targetSymbol.innerHTML = '-';
    targetSymbol.style.color = "red";
    //simple 3 lines but they were repeated for every question.
    //I think it looks cleaner this way
};