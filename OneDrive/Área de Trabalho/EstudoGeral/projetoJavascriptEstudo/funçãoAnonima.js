(function(x1, x2, operador){ 

    return eval(`${x1} ${operador} ${x2}`);
})(1, 2, "*");






let resultado = calc(1, 2, "*");

console.log(resultado);