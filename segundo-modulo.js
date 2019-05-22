(function(mod1){ // posso atribuir um namespacing para meu modulo exportado
    'use strict'; 
    
        //Cria evento no botão1 
        const botaoFrase = document.getElementById('btn1');
        botaoFrase.addEventListener('click', funcaoMostraFrase);

        //Cria evento no botão2
        const botaoResultado = document.getElementById('btn2');
        botaoResultado.addEventListener('click', funcaoMostraResultado);

        function funcaoMostraFrase(){
           console.log(mod1.publica1());
        }

        function funcaoMostraResultado(){
            console.log(mod1.publica2(3));
         }

})(modulo1) // preciso referenciar o módulo que estou importando