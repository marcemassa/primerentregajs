 let cuotaSocial = prompt("¿Estas al dia con la cuota?")
             if(cuotaSocial === "si") {
             alert("Reserva tu turno");
             } else{
                 alert("Abona cuota y reserva tu turno");
            
             let abonar = prompt("¿Vas a abonar la cuota hoy?")    
                 if(abonar === "si"){
                     alert("Abona la cuota y reserva tu turno");
                    
            
                     let pago = prompt("ingresar metodo de pago");
    
                     if (pago === "efectivo"){
                          alert("Pase por tesoreria");
                     }else{
                
                     while (pago != "efectivo") {
                         switch(pago) {
                             case "debito":
                                 alert("Ingrese datos de su cuenta");
                                 break;
                
                             case "transferencia":
                                 alert("Transfiera a CBU");
                                 break;
                
                                 default:
                                     alert("no se reconoce metodo de pago");
                                     break;
                     }
                     pago = prompt("ingresar metodo de pago");
                    
                   }
                 } 
               
                 }else {
                     alert("Podes reservar abonando como invitado");
                 }
                

              let invitado = prompt("¿Reservas como invitado?") 
              if(invitado === "si"){    
                 alert("Pasa por tesoreria, solo efectivo");

                 }else{
                     alert("No podes reservar");
                 }
             }



             
for(let cancha1 = 8; cancha1 <=18; cancha1++){
     let Jugador = prompt ("Ingrese el nombre del jugador");

     alert(`cancha1 #${cancha1} Jugador: ${Jugador}`);
 }
 alert("No hay mas turnos en cancha 1, pasar a cancha 2")
        

 for(let cancha2 = 8; cancha2 <=18; cancha2++){
    let Jugador = prompt ("Ingrese el nombre del jugador");

    alert(`cancha2 #${cancha2} Jugador: ${Jugador}`);
}
alert("No hay mas turnos en cancha 2")





function sumar(cuota, interes) {
    return cuota + interes;      
}
let resultado = sumar(6500, 500);
   console.log("Importe total a abonar por mora", "=", resultado);