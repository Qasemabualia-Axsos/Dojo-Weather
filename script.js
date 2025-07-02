function showAlert(){
    alert("Loading weather report")
}

function remove(){
    var cookie=document.querySelector(".cookie");
    cookie.remove();
}

var redSpans=document.querySelectorAll("#red");
var blueSpans=document.querySelectorAll("#blue");
function convertTemp(){
    var unit=document.querySelector("#myList").value;
    
    for (let i = 0; i < redSpans.length; i++) {
        
        var redValue= parseInt(redSpans[i].textContent);
        var blueValue= parseInt(blueSpans[i].textContent);
        
        if(unit==="f"){
            redSpans[i].textContent= Math.round(redValue * 9 / 5 + 32) + "°";
            blueSpans[i].textContent=Math.round(blueValue * 9 / 5 + 32) +"°";
        }
        else {
            redSpans[i].textContent=Math.round((redValue-32)*5/9)+"°";
            blueSpans[i].textContent=Math.round((blueValue-32)*5/9)+"°";
        }
    }
}
