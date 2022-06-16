var resultado

function nota(nota) {

     localStorage.setItem("resultado", nota)
  

    switch (nota) {
        case "1":
            document.getElementById("1").className = "botaoSelecionado primeiro"
            document.getElementById("2").className = "nota"
            document.getElementById("3").className = "nota"
            document.getElementById("4").className = "nota"
            document.getElementById("5").className = "nota"
            break;

        case "2":

            document.getElementById("1").className = "nota primeiro"
            document.getElementById("2").className = "botaoSelecionado"
            document.getElementById("3").className = "nota"
            document.getElementById("4").className = "nota"
            document.getElementById("5").className = "nota"

            break

        case "3": 
        document.getElementById("1").className = "nota primeiro"
        document.getElementById("2").className = "nota"
        document.getElementById("3").className = "botaoSelecionado"
        document.getElementById("4").className = "nota"
        document.getElementById("5").className = "nota"  
        break


        case "4":
            document.getElementById("1").className = "nota primeiro"
            document.getElementById("2").className = "nota"
            document.getElementById("3").className = "nota"
            document.getElementById("4").className = "botaoSelecionado"
            document.getElementById("5").className = "nota"
        break

        case "5":
            document.getElementById("1").className = "nota primeiro"
            document.getElementById("2").className = "nota"
            document.getElementById("3").className = "nota"
            document.getElementById("4").className = "nota"
            document.getElementById("5").className = "botaoSelecionado"
        break

    }

}


function enviar(){
    window.location.href="obg.html"
    console.log(resultado)
}



function feedback(){


    resultado = localStorage.getItem("resultado")
    document.getElementById("feedback").innerHTML = "You selected " + resultado +" out of 5"
}

feedback()