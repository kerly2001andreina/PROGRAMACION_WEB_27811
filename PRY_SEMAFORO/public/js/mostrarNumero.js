console.log("Se cargo el numero ");
var btn_mostrar_numeros=document.getElementById("btn_mostrar_numeros");
var txt_resultado=document.getElementById("txt_resultado");

btn_mostrar_numeros.addEventListener('click',function(event){
    let=numeros= ""; 
    for(let i =1; i<=10; i++){
          
        numeros+= '${i} <br>';
    }
    txt_resultado.innerHTML=numeros;
})

var btn_mostrar=document.getElementById("btn_mostrar");
var txt1=document.getElementById("txt_n1").value;
var txt2=document.getElementById("txt_n2").value;
var res=document.getElementById("txt_resultado");