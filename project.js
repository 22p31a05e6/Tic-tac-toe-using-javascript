let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#you");
const compScorepara=document.querySelector("#comp");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText=userscore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorepara.innerText=compscore;
        
        msg.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawgame=()=>{
    
    msg.innerText="game was draw!";
    msg.style.backgroundColor="orange";
}
const playgame=(userChoice)=>{
    
    const compChoice=genCompChoice();
   
    if(userChoice===compChoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin = compChoice ==="paper"?false:true;

        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissors"?false:true;
        
        }
        else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      
        playgame(userChoice);
    });
});