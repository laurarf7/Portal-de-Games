// function personagem1(){
//     fetch("http://localhost:3000/personagens")
// .then(response => {
//     return response.json()
// }).then(personagem1Json => {

//     console.log(personagem1Json)

//     document.getElementById("dados").innerHTML= ""


//         document.getElementById("dados").innerHTML+=

        
//         "<b>Nome:</b>" + personagem1Json[0].nome +
//         "<p> <b>Aparência:</b> "+ personagem1Json[0].aparencia+"</p>" + 
//         "<p> <b>Habilidades:</b> "+ personagem1Json[0].habilidades+"</p>" +  
//         "<p> <b>História:</b> "+ personagem1Json[0].historia+"</p> <br>"  
        

// });

// }

// function personagem2(){
//     fetch("http://localhost:3000/personagens")
// .then(response => {
//     return response.json()
// }).then(personagem2Json => {

//     console.log(personagem2Json)

//     document.getElementById("dados").innerHTML= ""

   
//         document.getElementById("dados").innerHTML+=

        
//         "<b>Nome:</b>" + personagem2Json[1].nome +
//         "<p> <b>Aparência:</b> "+ personagem2Json[1].aparencia+"</p>" + 
//         "<p> <b>Habilidades:</b> "+ personagem2Json[1].habilidades+"</p>" +  
//         "<p> <b>História:</b> "+ personagem2Json[1].historia+"</p> <br>"  
        
        
    
// });

// }


function chama_personagem(posicao){
    fetch("http://localhost:3000/personagens")
.then(response => {
    return response.json()
}).then(personagem1Json => {

    console.log(personagem1Json)

    document.getElementById("dados").innerHTML= ""


        document.getElementById("dados").innerHTML+=

        
        "<b>Nome:</b>" + personagem1Json[posicao].nome +
        "<p> <b>Aparência:</b> "+ personagem1Json[posicao].aparencia+"</p>" + 
        "<p> <b>Habilidades:</b> "+ personagem1Json[posicao].habilidades+"</p>" +  
        "<p> <b>História:</b> "+ personagem1Json[posicao].historia+"</p> <br>" +
        "<p> "+ personagem1Json[posicao].foto+"</p> <br>"

        

});

}