let i=0;
let images=[];
let time=1500;

images[0]='images1.jpg';
images[1]='images2.jpg';
images[2]='images3.jpg';
images[3]='images4.jpeg';
images[4]='images5.jpeg';

function changeImg(){
    document.slide.src=images[i];
    if(i<images.length -1){
        i++
    }
    else{i=0;
    }
    setTimeout("changeImg()",time)

}
window.onload=changeImg;




let frame = document.getElementById("frame");
let ol = document.querySelector("ol");

document.getElementById("add-btn").addEventListener("click", add);

function add() {
  let li = document.createElement("li");
  let inp = document.createElement("input");
  let btn = document.createElement("button");
  let input = document.getElementById("add-inp");
  let val = input.value;
  let span = document.createElement("span");
  
  span.textContent = val;
  li.appendChild(inp);
  li.appendChild(span);
  li.appendChild(btn);
  ol.appendChild(li);

  input.value = "";
  input.focus();

  inp.setAttribute("type", "checkbox");
  btn.textContent = "Delete";
  btn.classList.add("delete")

  btn.addEventListener("click", function() {
    ol.removeChild(li);
  })
}


let button=document.querySelector(".button-1")
button.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
});

let button2=document.querySelector(".button-2")
button2.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
})

let button3=document.querySelector(".button-3")
button3.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
});

let button4=document.querySelector(".button-4")
button4.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
})


let button5=document.querySelector(".button-5")
button5.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
});

let button6=document.querySelector(".button-6")
button6.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
});

let button7=document.querySelector(".button-7")
button7.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
});

let button8=document.querySelector(".button-8")
button8.addEventListener("click",function(){
      alert("sorry all details Comming soon!")
})