function myFunction(){
    var a = document.getElementById("myInput1");
    var b = document.getElementById("hide1");
    var c = document.getElementById("hide2");

    if(a.type === 'password'){
      a.type = "text";
      b.style.display = "block";
      c.style.display = "none"; 
    }
    else{
        a.type = "password"
        b.style.display = "none";
        c.style.display = "block"; 
      }
}

const card = document.querySelector(".card");
window.addEventListener("load",function(){
  showPopup();
})

function showPopup(){
  const timeLimit = 5 // seconds;
  let i=0;
  const timer = setInterval(function(){
    i++;
    if (i == timeLimit){
      clearInterval(timer);
      card.classList.add()
    }
    console.log(i)
  },5000)
}