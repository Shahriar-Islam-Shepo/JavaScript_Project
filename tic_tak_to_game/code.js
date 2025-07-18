let btn0 = document.getElementById("bt0");
let btn1 = document.getElementById("bt1");
let btn2 = document.getElementById("bt2");
let btn3 = document.getElementById("bt3");
let btn4 = document.getElementById("bt4");
let btn5 = document.getElementById("bt5");
let btn6 = document.getElementById("bt6");
let btn7 = document.getElementById("bt7");
let btn8 = document.getElementById("bt8");
let i=1;


let cmd = document.getElementById("command");
cmd.innerText="o turn";
let re= document.getElementById("bt9")

function turn(){
    if(i%2==1){
        cmd.innerText="O turn";
    }else{
        cmd.innerText="x turn";
    }
}
re.addEventListener("click",()=>{
    i=1;
    btn0.innerText="";
    btn1.innerText="";
    btn2.innerText="";

    btn3.innerText="";
    btn4.innerText="";
    btn5.innerText="";

    btn6.innerText="";
    btn7.innerText="";
    btn8.innerText="";

    cmd.innerText="o turn";

    btn0.setAttribute("style","color:black");
    btn1.setAttribute("style","color:black");
    btn2.setAttribute("style","color:balck");
    btn3.setAttribute("style","color:black");
    btn4.setAttribute("style","color:balck");
    btn5.setAttribute("style","color:balck");
    btn6.setAttribute("style","color:balck");
    btn7.setAttribute("style","color:black");
    btn8.setAttribute("style","color:balck");
    

});

function xwin(){
   if((btn0.innerText=="x")&&(btn1.innerText=="x")&&(btn2.innerText=="x")){
    btn0.setAttribute("style","color:red");
    btn1.setAttribute("style","color:red");
    btn2.setAttribute("style","color:red");
     return true;
   }else if((btn3.innerText=="x")&&(btn4.innerText=="x")&&(btn5.innerText=="x")){
    btn3.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn5.setAttribute("style","color:red");
      return true;
   }else if((btn6.innerText=="x")&&(btn7.innerText=="x")&&(btn8.innerText=="x")){
    btn6.setAttribute("style","color:red");
    btn7.setAttribute("style","color:red");
    btn8.setAttribute("style","color:red");
    return true;
   }else if((btn0.innerText=="x")&&(btn3.innerText=="x")&&(btn6.innerText=="x")){
    btn0.setAttribute("style","color:red");
    btn3.setAttribute("style","color:red");
    btn6.setAttribute("style","color:red");
    return true;
   }else if((btn1.innerText=="x")&&(btn4.innerText=="x")&&(btn7.innerText=="x")){
    btn1.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn7.setAttribute("style","color:red");
    return true;
   }else if((btn2.innerText=="x")&&(btn5.innerText=="x")&&(btn8.innerText=="x")){
    btn2.setAttribute("style","color:red");
    btn5.setAttribute("style","color:red");
    btn8.setAttribute("style","color:red");
     return true;
   }else if((btn0.innerText=="x")&&(btn4.innerText=="x")&&(btn8.innerText=="x")){
    btn0.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn8.setAttribute("style","color:red");
    return true;
   }else if((btn2.innerText=="x")&&(btn4.innerText=="x")&&(btn6.innerText=="x")){
    btn2.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn6.setAttribute("style","color:red");
    return true;
   }else{
    return false;
   }
   
}

function ywin(){
    if((btn0.innerText=="o")&&(btn1.innerText=="o")&&(btn2.innerText=="o")){
    btn0.setAttribute("style","color:red");
    btn1.setAttribute("style","color:red");
    btn2.setAttribute("style","color:red");
        return true;
      }else if((btn3.innerText=="o")&&(btn4.innerText=="o")&&(btn5.innerText=="o")){
    btn3.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn5.setAttribute("style","color:red");
         return true;
      }else if((btn6.innerText=="o")&&(btn7.innerText=="o")&&(btn8.innerText=="o")){
    btn6.setAttribute("style","color:red");
    btn7.setAttribute("style","color:red");
    btn8.setAttribute("style","color:red");
       return true;
      }else if((btn0.innerText=="o")&&(btn3.innerText=="o")&&(btn6.innerText=="o")){
    btn0.setAttribute("style","color:red");
    btn3.setAttribute("style","color:red");
    btn6.setAttribute("style","color:red");
       return true;
      }else if((btn1.innerText=="o")&&(btn4.innerText=="o")&&(btn7.innerText=="o")){
    btn1.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn7.setAttribute("style","color:red");
       return true;
      }else if((btn2.innerText=="o")&&(btn5.innerText=="o")&&(btn8.innerText=="o")){
    btn2.setAttribute("style","color:red");
    btn5.setAttribute("style","color:red");
    btn8.setAttribute("style","color:red");
        return true;
      }else if((btn0.innerText=="o")&&(btn4.innerText=="o")&&(btn8.innerText=="o")){
    btn0.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn8.setAttribute("style","color:red");
       return true;
      }else if((btn2.innerText=="o")&&(btn4.innerText=="o")&&(btn6.innerText=="o")){
    btn2.setAttribute("style","color:red");
    btn4.setAttribute("style","color:red");
    btn6.setAttribute("style","color:red");
       return true;
      }else{
       return false;
      }
}



function  checkwin(){
    if(xwin()){
       cmd.innerText="x win the game";
       i=10;
    }else if(ywin()){
       cmd.innerText="o win the game";
       i=10;
    }else{

    }
}

btn0.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn0.innerText="x";
           }else{
            btn0.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
  
});
btn1.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn1.innerText="x";
           }else{
            btn1.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
    
 });
 btn2.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn2.innerText="x";
           }else{
            btn2.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
  
 });
 btn3.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn3.innerText="x";
           }else{
            btn3.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }

 });
 btn4.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn4.innerText="x";
           }else{
            btn4.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
   
 });
 btn5.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn5.innerText="x";
           }else{
            btn5.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
    
 });
 btn6.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn6.innerText="x";
           }else{
            btn6.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
    
 });
 btn7.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn7.innerText="x";
           }else{
            btn7.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
  
 });
 btn8.addEventListener("click",()=>{
    if(i<10){
        if(i%2==0){
            btn8.innerText="x";
           }else{
            btn8.innerText="o";
           }
           i++;
           turn();
           checkwin();
           
    }else{
        alert("refresh the game");
    }
   
 });