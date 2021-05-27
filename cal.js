function br(){
    var b = document.querySelector("#b").value;
    var u = parseInt(document.querySelector("#u").value);
    var c = parseInt(document.querySelector("#c").value);
    var p = parseInt(document.querySelector("#p").value);
    var brrr
    var b1 = document.querySelector("#b1").value;
    var u1 = parseInt(document.querySelector("#u1").value);
    var c1 = parseInt(document.querySelector("#c1").value);
    var p1 = parseInt(document.querySelector("#p1").value);
    var brrr1
    var op1 = "recomendamos la primera opción"
    var op2 = "recomendamos la segunda opción"
    
    if (b == "1") {
        brrr = (((c*1000) / 100) * u) / (p*u);
    }else if (b == "2") {
        brrr = (((c*750) / 100) * u) / (p*u);       
    }else if (b == "3") {
        brrr = (((c*500) / 100) * u) / (p*u);       
    }else if (b == "4") {
        brrr = (((c*330) / 100) * u) / (p*u);       
    }
        
    if (b1 == "1") {
    brrr1 = (((c1*1000) / 100) * u1) / (p1*u1);
    }else if (b1 == "2") {
        brrr1 = (((c1*750) / 100) * u1) / (p1*u1);       
    }else if (b1 == "3") {
        brrr1 = (((c1*500) / 100) * u1) / (p1*u1);       
    }else if (b1 == "4") {
        brrr1 = (((c1*330) / 100) * u1) / (p1*u1);       
    }  
console.log(brrr)
    if (brrr < brrr1) {
        document.getElementById("r").innerHTML = op2
    }else if (brrr > brrr1) {
        document.getElementById("r").innerHTML = op1
    }

}  

