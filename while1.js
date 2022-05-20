const NUMERO_CORRECTO = 7;
const IMAGEN_GANADORA="/ganadoira.wepp";
const NUMERO_INGRESADO_X_DEF= 1;
//INGRESAMOS VALOR 1 COMO VALOR POR DEFECTO.
let numero_ingresado = NUMERO_INGRESADO_X_DEF
//mientraws num ingr no sea el numero correcto(7)
while (numero_ingresado != NUMERO_CORRECTO ) {
    //instruccion de corte que altera el estado de la condicion
   numero_ingresado=prompt("trata de adivinmar numero");
   //mostrar imnagen ganadora
   if (numero_ingresado == NUMERO_CORRECTO) {
       //llamo id de respuesta
       document.querySelector("#respuesta").innerHTML=`
       <img src=${IMAGEN_GANADORA}> </img>
        <h3>ganastes</h3>
       `
   }
}
