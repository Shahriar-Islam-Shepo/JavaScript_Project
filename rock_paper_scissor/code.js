function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);

    return Math.floor(Math.random()*(max-min+1))+min;
}

let you=0;
let computer=0;

let you_score=document.getElementById("value1");
let computer_score=document.getElementById("value2");



let icon_rock = document.getElementById("box1");
let icon_paper = document.getElementById("box2");
let icon_scissor = document.getElementById("box3");
let refresh = document.getElementById("btn2");
let commend = document.getElementById("btn1");

icon_rock.addEventListener("click",()=>{
    i=1;
    j=getRandomInt(1,3);
    calculate();
});
icon_paper.addEventListener("click",()=>{
    i=2;
    j=getRandomInt(1,3);
    calculate();
});

icon_scissor.addEventListener("click",()=>{
    i=3;
    j=getRandomInt(1,3);
    calculate();
});

refresh.addEventListener("click",()=>{
    you_score.innerText=0;
    computer_score.innerText=0;
    commend.innerText="Pick your move";
});


function calculate(){
    let m = Number(you_score.innerText);
    let n = Number(computer_score.innerText);
    if(i==j){
       commend.innerText="Match is draw";
       console.log(`${i},${j}`);
    }else{
      if(i==1){
        if(j==2){
            n++;
            commend.innerText="You lose the match";
            console.log(`${i},${j}`);
        }else{
            m++;
            commend.innerText="You won the match";
            console.log(`${i},${j}`);
        }
      }else if(i==2){
        if(j==1){
            m++;
            commend.innerText="You won the match";
            console.log(`${i},${j}`);
        }else{
            n++;
            commend.innerText="You lose the match";
            console.log(`${i},${j}`);
        }
      }else{
        if(j==1){
            n++;
            commend.innerText="You lose the match";
            console.log(`${i},${j}`);
        }else{
            m++;
            commend.innerText="You won the match";
            console.log(`${i},${j}`);
        }
      }
    }

    you_score.innerText=m;
    computer_score.innerText=n;
}


