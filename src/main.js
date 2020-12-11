export default class App {
    sumatoriaSerieUno(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
            suma = suma + 1 / i;
        }
        return suma;
    }
    sumatoriaSerieDos(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
            if (i % 2 === 0) {
            suma = suma + 1 / i;
            } else {
            suma = suma - 1 / i;
            }
        }
        return suma;
        }
    esPrimo(numero){
        let i;
        if(numero == 0 | numero == 1 | numero == 4){
            return false;
            }
            for(i=2; i<numero/2; i++){
                if(numero % i == 0){
                    return false;
                }
            }
            return true;
            }
    

}

let app = new App();
console.log(app.sumatoriaSerieUno(10));
console.log("");
console.log(app.sumatoriaSerieDos(10));
console.log("");
console.log(app.esPrimo(3));
console.log(app.esPrimo(4));
console.log("");
