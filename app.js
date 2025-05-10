// alert("Bienvenido a PromptConvert, esta app permite convertir ARS a USD.");

// const tasaFija = 1300
// let history = []

// function converCurrency (pesos){
//     return pesos/tasaFija;
// }
// let opcion =""
// while (opcion!=="2"){
//  opcion = prompt(
//      `Elija una opcion:
//         1. Divisa (ARS -> USD)
//         2. Salir`
// );

// switch (opcion){
//     case "1":
//         const ars = prompt("Ingrese Monto en Pesos ARG")
//         break
//         const usd =converCurrency(ars)
//         alert(`${ars} equivalen a ${usd.toFixed(2)}`)
//         history.push ({
//             tipo: "Divisa",
//             entrada:`${ars} ARS`,
//             salida: `${usd.toFixed(2)}`,
//             fecha: new Date().toLocaleString()
//         })
//         break
//     case "2":
//         alert("Saliendo. Gracias por usar mi app :D")
//         break
//     default:
//         alert("Opcion invalida. Intente nuevamente")
// }
// }
// console.log (`Historial de Operaciones: ${history}`)


// app.js


const tasa = 1300;
const historial = [];

function convertir() {
    const ars = parseFloat(prompt("Ingrese cantidad en ARS:"));
    
    if (isNaN(ars)) {
        alert("Ingrese un número válido");
        return;
    }

    const usd = ars/tasa;
    alert(`${ars} ARS = ${usd.toFixed(2)} USD`);

    // Guardar en historial
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

        switch (opcion) {
            case "1": convertir(); break;
            case "2": 
                console.log("Historial completo:", historial); 
                break;
            default: alert("Opción no válida");
        }
    } while (opcion !== "2");
}

menu();