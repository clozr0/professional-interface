var stars1 = document.querySelector("#stars1");
var moon2 = document.querySelector("#moon2");
var mountains3 = document.querySelector("#mountains3");
var mountains4 = document.querySelector("#mountains4");
var river5 = document.querySelector("#river5");
var boat6 = document.querySelector("#boat6");
var logo2 = document.querySelector(".logo2");
window.onscroll = function(){
    var value = scrollY;
    stars1.style.left = value + "px";
    moon2.style.top = value * 3 + "px";
    mountains3.style.top = value * 1 + "px";
    mountains4.style.top = value * 0.5 + "px";
    river5.style.top = value + "px";
    boat6.style.top = value + "px";
    boat6.style.left = value * 3 + "px";
    logo2.style.fontSize = value + "px";
    if(scrollY >= 60){
        logo2.style.fontSize = 40 + "px";
        logo2.style.position = "fixed";
        if(scrollY >= 428){
            logo2.style.display = "none";
        }
        else{
            logo2.style.display = "block";
        };
        if(scrollY >= 149){
            document.querySelector(".main").style.background = "linear-gradient( #376281 , #10001f )"
        }
        else{
            document.querySelector(".main").style.background = "linear-gradient( #200016 , #10001f )"
        };
    };
};
