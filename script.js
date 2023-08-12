let string = "";
let buttons = document.querySelectorAll(".symbol");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      //perfrom the operations actually
      string = eval(string);
      document.querySelector(".display").innerText = string;
      document.querySelector(".display").style.color = "yellow";
    } 
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector(".display").innerText = string;
      document.querySelector(".display").style.color = "";
    }
    else {
      string = string + e.target.innerHTML;
      console.log(string);
      document.querySelector(".display").innerText = string;
    }
  });
});

