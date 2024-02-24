let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turn0= true;
let newGame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let game = document.querySelector(".opacity")
let reset = document.querySelector(".reset")
let check = true;
let count = 0;


const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

const resetGame= () =>{
    turn0= true;
    game.style.opacity = 1;
    reset.style.opacity = 1;
    enableboxes();
}

const showWinner= (winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    game.style.opacity = 0.2;
    count = 0;
    reset.style.opacity = 0.2;
    disableboxes();
}
const showDraw = () => {
    msg.innerText='Match draw, Play again';
    msgContainer.classList.remove('hide');
    game.style.opacity = 0.2;
    reset.style.opacity = 0.2
    disableboxes();
}

const checkPatterns = () =>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                
                showWinner(pos1Val);
                check = false;
            }
        }
    }
};


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("clicked")
        if(turn0){
            box.style.color = 'green';
            box.innerText="O";
            turn0=false;
        }else{
            box.style.color = "#b0413e"; 
            box.innerText="X";
            turn0=true;
            }
            box.disabled=true;
            count = count+1;
            checkPatterns();
            if(count===9 && check===true)  {
                showDraw();
                count = 0;
            }
            check = true;
    });
});

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


