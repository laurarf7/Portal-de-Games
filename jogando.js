
function Troca2(){

    palavra= document.getElementsByTagName("strong")
    palavra_digitada= document.getElementById("palavra").value
    

    palavra[0].innerHTML= palavra_digitada
    palavra[1].innerHTML= palavra_digitada
    document.getElementsByTagName("strong")[2].innerHTML= palavra_digitada
    palavra[3].innerHTML= palavra_digitada
    palavra[4].innerHTML= palavra_digitada
    palavra[5].innerHTML= palavra_digitada
   
    
}

