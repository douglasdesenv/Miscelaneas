const modulo1 = (function(){    // Todo o conteúdo do método vem dentro dessa declaração de função. O navegador                          
    'use strict';               //interpreta ela como se fosse uma expressão, já que é uma função anônima.

    function privada1(){
        // Essa função é privada, ou seja, não pode se acessada por outro módulo.
    }

    function publica1(){
        return "Essa é uma função pública.";
    }

    function publica2(x){
        return x * 3; // Outra função pública recebendo parâmetro.
    }

    return {publica1, publica2} // Para tornar a função pública, basta exporta-la como um objeto.

})()