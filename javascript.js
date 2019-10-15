document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px" ;
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue" ;
    document.getElementById("box").style.backgroundImage = "none" ;
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.5" ;
});
document.getElementById("button4").addEventListener("click", function (){
    document.getElementById("box").style.backgroundImage = "url('./images/flowers.jpg')";
});
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.borderRadius = "75px";
});
document.getElementById("button6").addEventListener("click", function(){
    document.getElementById("box").style.boxShadow = "15px 15px 5px #aaa";
});

document.getElementById("resetButton").addEventListener("click", function(){
    document.getElementById("box").setAttribute("style", "height:150px; width:150px; background-color:orange; background-image:none; background-size:cover; margin:25px; opacity: 1; border-radius: 0px;box-shadow:none;")
});