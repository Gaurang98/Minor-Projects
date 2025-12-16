let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const gencompchoice = () => {
    const options=['rock','paper','scissors'];
    const randidx = Math.floor(Math.random()*3); // to print random number between 0 to 2
    return options[randidx];
};

const drawgame = () => {
    console.log("It's a Draw");
    msg.innerText="It's a Draw! Play Again";
    msg.style.backgroundColor="rgb(17, 25, 61)";
}

const showwinner = (userwin, userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win");
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame = (userchoice) => {
    console.log("User choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("Comp choice = ", compchoice);

    if(userchoice === compchoice){
        drawgame();
    } else {
        let userwin =true;
        if(userchoice ==='rock'){
            userwin=compchoice==="paper"?false:true;
        } else if(userchoice==='paper'){
            userwin=compchoice==="scissors"?false:true;
        } else { // userchoice === 'scissors'
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userchoice = choice.id;
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});