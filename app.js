let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");

let btns = ['yellow', 'red', 'purple', 'green'];

let starter = false;
level = 0;

document.addEventListener("keypress", function(){
   if(starter == false){
    console.log("game start");
    starter = true
    levelUp();
   }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250)
};

function levelUp(){
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`;
    let randIxd = Math.floor(Math.random() * 3);
    let randColor = btns[randIxd];
    let randBtn = document.querySelector(`.${randColor}`);
   
   gameSeq.push(randColor);
   console.log(gameSeq);
    // console.log(randIxd);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){  
        setTimeout(levelUp, 1000);
       }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        higLevel();
        reset();
    }
}


function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns  (userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    starter = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}

function higLevel(){
    currLevel = level.length;
    level = 0;
    if(currLevel > level.length){
        console.log("hightest score");
    }
}