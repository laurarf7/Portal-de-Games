function recomeca(){

    const numAleatorio = Math.floor(Math.random() * 100) + 1;
const inputUsuario = document.getElementById('numero');
const verificar = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

//tentativa começa no zero e vai somando +1
var tentativas = 0;
//limite de chances são 6
const limiteTentativas = 6;

//adicionar evento
verificar.addEventListener('click', function () {
    //se passar de 6
    if (tentativas >= limiteTentativas) {
        resultado.textContent = `Suas ${limiteTentativas} tentativas acabaram. O número era ${numAleatorio}.`;
        resultado.style.color = 'black';

        
    } else {
        const palpite = parseInt(inputUsuario.value);
        tentativas++;

        if (palpite === numAleatorio) {
            document.getElementById("resultado").innerHTML = `Parabéns! Você acertou em ${tentativas} chances.`;

            resultado.style.color = 'white';
            
        } else if (palpite < numAleatorio) {
            document.getElementById("resultado").innerHTML = "Tente um número maior"
            resultado.style.color = 'orange';
            resultado.style.fontSize = 'larger'
            
        } else {
            document.getElementById("resultado").innerHTML = "Tente um número menor"
            resultado.style.color = 'red';
            resultado.style.fontSize = 'larger'
        }
    }
});



}
recomeca();

