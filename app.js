const tasa = 1300;
const historial = [];
//funcion para convertir
function convertir() {
    const ars = parseFloat(prompt("Ingrese cantidad en ARS:"));
    
    if (isNaN(ars)) {
        alert("Ingrese un número válido");
        return;
    }

    const usd = ars/tasa;
    alert(`${ars} ARS = ${usd.toFixed(2)} USD`);

    // guardo en historial
    historial.push({
        fecha: new Date().toLocaleTimeString(),
        ars: ars,
        usd: usd.toFixed(2)
    });
}
function menu() {
    let opcion;
    
    do {
        opcion = prompt(
           `Elija una opcion:
            1. Divisa (ARS -> USD)
            2. Salir`
        );


        
    }while(opcion !== "2");


}menu();
