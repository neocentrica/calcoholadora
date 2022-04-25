function br(){
    var b = parseInt(document.querySelector("#b").value);
    var u = parseInt(document.querySelector("#u").value);
    var c = parseInt(document.querySelector("#c").value);
    var p = parseInt(document.querySelector("#p").value);
    var brrr
    var b1 = parseInt(document.querySelector("#b1").value);
    var u1 = parseInt(document.querySelector("#u1").value);
    var c1 = parseInt(document.querySelector("#c1").value);
    var p1 = parseInt(document.querySelector("#p1").value);
    var brrr1
    var op1 = "recomendamos la primera opción"
    var op2 = "recomendamos la segunda opción"
    
    brrr = (((c*b) / 100) * u) / (p*u);
        
    brrr1 = (((c1*b1) / 100) * u1) / (p1*u1);

console.log(brrr)
    if (brrr < brrr1) {
        document.getElementById("r").innerHTML = op2
    }else if (brrr > brrr1) {
        document.getElementById("r").innerHTML = op1
    }

}  

