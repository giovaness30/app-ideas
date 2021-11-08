
const btnSend = document.querySelector("#send");
const valorInput = document.querySelector("#valorBin");
const resultado = document.querySelector("#resultado");

function bin2dev (binario){

        // Verificações: se não é maior que 8 caracteres ou se não contem 0 ou 1.
        if(binario.length > 8 ) {
            return alert('Valor Binario Muito grande!');
            
        }
    
        if( !binario.includes('10')){
            return alert('Valor não é binario!(Diferente de 0 ou 1)')
            
        };
    
        return Number.parseInt(binario, 2);
    }

btnSend.addEventListener("click", function(e){
    e.preventDefault();

    let valorResultado = bin2dev(valorInput.value);
    
    resultado.innerHTML = (typeof(valorResultado) == "undefined" ? "tente denovo!" : valorResultado) ;
    
    

});




// on terminal
// function bin2dev (binario){

//     // Verificações: se não é maior que 8 caracteres ou se não contem 0 ou 1.
//     if(binario.length > 8 ) {
//         return console.log('Valor Binario Muito grande!');
//     }

//     if( !binario.includes('10')){
//         return console.log('Valor não é binario!(Diferente de 0 ou 1)')
//     };

//     return Number.parseInt(binario, 2);
// }

// console.log(bin2dev('0101'));
// console.log(bin2dev('1001'));
// console.log(bin2dev('asdagh'));