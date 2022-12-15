const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();   
    let edad = document.querySelector("#numberCard").value
    let isvalid = document.getElementById("isvalid");
    let respuesta = document.getElementById("respuesta");
    let ast = "############"
    let res = edad.slice(12, 16) 
    
    let aqui = edad.split("").map(function(item) {
        return parseInt(item, 10);
    }).reduce(function (acumulador , valorActual){
        acumulador = (acumulador  + valorActual) ;
        return acumulador ;
        
    } );
    console.log(aqui);
    if(aqui % 10 === 0 ){
        isvalid.textContent = `${aqui} Tarjeta Valida` 
        respuesta.textContent = `${ast}${res}`
    }else{
        isvalid.textContent = `${aqui} Tarjeta  Invalida`
        respuesta.textContent = ``
    }
    
    
    

    
  
    
    document.querySelector("#numberCard").value = ""
    





       
    
    

}

