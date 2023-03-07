
let btn = document.getElementById("btn");




btn.addEventListener("click",RandomColor);

function RandomColor(){
  
  document.body.style.backgroundColor= "#"+ Math.random().toString(16).slice(2,8);
  
  
}

  
  


