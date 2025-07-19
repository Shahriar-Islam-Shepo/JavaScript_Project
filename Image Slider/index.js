let right = document.querySelector(".fa-arrow-right");
let left = document.querySelector(".fa-arrow-left");
let imagebox=document.querySelectorAll(".ima");
let i=0;

right.addEventListener("click",()=>{
    
    if(i==-1600){
        imagebox.forEach(box => {
        box.setAttribute("style",`transform: translate(${0}px);transition-duration: 2s;`);
    });
    i=0;
    }else{
        i -= 400;
        imagebox.forEach(box => {
        box.setAttribute("style",`transform: translate(${i}px);transition-duration: 2s;`);
    });

    }
});
left.addEventListener("click",()=>{
    if(i==0){
        imagebox.forEach(box => {
        box.setAttribute("style",`transform: translate(${-1600}px);transition-duration: 2s;`);
    });
    i=-1600;
    }else{
        i += 400;
    imagebox.forEach(box => {
        box.setAttribute("style",`transform: translate(${i}px);transition-duration: 2s;`);
    });

    }

    
    
});