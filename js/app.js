 let dato=document.getElementById('dato');
const submit=document.getElementById('submit');
const conter=document.getElementById('conter');

let saberGenero=(dato)=>{
    valid=["1","2","3","4","5","6","7","8","9"];
    const women= `<h1>Eres mujer</h1>`;
    const men= `<h1>Eres hombre</h1>`;  
     genero=dato.split("");
  
    let knOw=genero[genero.length -1];
    let nEWdato=genero[genero.length];
    //inclides no permite validar que el campo input no tenga numeros :/
    if(dato=="" || valid.includes(knOw)){
       
        alert("ingresa un nombre valido en 'ESPAÑOL'")
           return;
    }if(knOw == "a"){
         conter.innerHTML+=women;
    
      }else{
         conter.innerHTML+=men;
      }

     }
    
     //button the event 'click' "permite enviar el contenido del input"
   submit.addEventListener("click",()=>{
    let dato=document.getElementById('dato').value;
       
       saberGenero(dato);
       dato.value="";
   })
    // Button reload "refresca la pagina"
   const reload=document.getElementById('reload');
        reload.addEventListener("click",()=>{
            window.location.reload(true);
        });

    
