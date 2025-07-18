let arr = Array.from({ length: 20 }, () => Array(20).fill(0));



let direction = [{x:0,y:0}];
let body = [{x:9,y:9}];

function valueInsert(){
  for(let i=0;i<body.length;i++){
    arr[body[i].x][body[i].y]=1;
  }
}
valueInsert();


let box = document.querySelector("#main");
for(let i=1;i<21;i++){
    for(let j=1;j<21;j++){
        let cell = document.createElement("div");
        cell.style.gridRowStart=i;
        cell.style.gridColumnStart=j;
        // cell.style.border="1px solid black";
        box.append(cell);

    }
}

function repaint(){
    let i=0;
    for(let m=0;m<arr.length;m++){
        for(let n=0;n<arr[0].length;n++){
            if(arr[m][n]==1){
                box.children[i].style.backgroundColor="#000027";
            }else if(arr[m][n]==0){
              box.children[i].style.backgroundColor="white";
            }else{
              box.children[i].style.backgroundColor="#eb5e28";
            }
            i++;
        }
    }
}
repaint();


let p=0;
document.addEventListener("keydown",(e)=>{
  
   if(e.key==="ArrowUp"){
     direction[0].x=-1;
     direction[0].y=0;
   }else if(e.key==="ArrowDown"){
    direction[0].x=1;
     direction[0].y=0;

   }else if(e.key==="ArrowRight"){
    direction[0].x=0;
    direction[0].y=1;

   }else if(e.key==="ArrowLeft"){
    direction[0].x=0;
     direction[0].y=-1;
   }else{

   }

   work();



});

// function work(){
//   p=1;
//   setTimeout(()=>{
//       changeBody(direction[0].x,direction[0].y);
   
//       work();
    
//   },500);
  
// }
let timeoutId = null; 

function work() {

  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }

  p = 1;
  timeoutId = setTimeout(() => {
    changeBody(direction[0].x, direction[0].y);
    work(); 
  }, 100);
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let foodPositionx=getRandomInt(0,19);
let foodPositiony=getRandomInt(0,19);
arr[foodPositionx][foodPositiony]=-1;


//box.children[foodPositionx*19+foodPositiony].style.backgroundColor="red";


function chageFood(){
box.children[foodPositionx*19+foodPositiony].style.backgroundColor="white";
arr[foodPositionx][foodPositiony]=0;
foodPositionx=getRandomInt(0,19);
foodPositiony=getRandomInt(0,19);
arr[foodPositionx][foodPositiony]=-1;
box.children[foodPositionx*19+foodPositiony].style.backgroundColor="red";
}
  
function eatFood(){
  let btn = document.getElementById("value");
  let btnvalue = Number(btn.innerText);
      btnvalue++;
      btn.innerText=btnvalue;
      addBodyPart();
      chageFood();
}

function addBodyPart(){
  let len = body.length-1;
  body.push({x:body[len].x,y:body[len].y+1});
}



function changeBody(i,j){
    
    let p =body[0].x+i;
    let q =body[0].y+j;

    if((p<0 || p>19 || q<0 || q>19)){
      let btn = document.getElementById("value");
     // alert(`Your score is : ${btn.innerText}`);
      window.location.reload();
      return;
    }

    if(p===foodPositionx && q===foodPositiony){
      eatFood();
    }

   for(let m=0;m<body.length;m++){
     arr[body[m].x][body[m].y]=0;

      let r=body[m].x;
      let s=body[m].y;
      body[m].x=p;
      body[m].y=q;
      p=r;
      q=s;
   }

   valueInsert();
   repaint();
}
