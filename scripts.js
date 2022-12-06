var displayDiv = document.querySelector("#display");
let valor1 = "";
let valor2 = "";
let operator ="";
let calculo = "";

function press(params) {
    if (operator==="") {
        if (valor1===0) {
            valor1 = `${valor1}`+`${params}`   
        }else{
            valor1 = `${valor1}`+`${params}`     
        }
        displayDiv.innerText =`${valor1}`;
    }else{
        if (valor2===0) {
            valor2 = params
        }else{
            valor2 = `${valor2}`+`${params}`     
        }
        displayDiv.innerText =`${valor2}`;
    }
}

function setOP(params) {
    operator = params
}

function calculate() {
    if (operator==="+") {
        calculo= parseFloat(valor1)+parseFloat(valor2)
    }else if(operator==="-") {
        calculo= parseFloat(valor1)-parseFloat(valor2)
    }else if(operator==="*") {
        calculo= parseFloat(valor1)*parseFloat(valor2)
    }else if(operator==="/") {
        calculo= parseFloat(valor1)/parseFloat(valor2)
    }
    console.log(calculo);
    displayDiv.innerText =`${calculo}`;
    valor1 = calculo
    valor2 = 0
}
function clr(){
    valor1 = "";
    valor2 = "";
    operator ="";
    calculo = 0;
    displayDiv.innerText =`${calculo}`;
}