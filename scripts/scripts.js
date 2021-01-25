var opiniaonavval
var opiniaocompraval
var recomendarval

var garrafaqtd = 1
var garrafanome = "Vinho Monte Velho"
var garrafapreco = 5.99

function opiniaonav(avaliacao){
    console.log(avaliacao)
    opiniaoval=avaliacao
}
function opiniaocompra(avaliacao){
    console.log(avaliacao)
    opiniaocompraval=avaliacao
}
function recomendar(avaliacao){
    console.log(avaliacao)
    recomendarval=avaliacao
}

function submeteropiniao(){
    console.log(opiniaoval)
    console.log(opiniaocompraval)
    console.log(recomendarval)
}

function entrar()
{
    console.log("Login com Sucesso");
}

function adicionarCarrinho()
{
    garrafaqtd = document.getElementById("quantidade-garrafa").value;
    localStorage.setItem("quantidade", garrafaqtd)
    atualizarCarrinho()

}

function comprarAgora()
{
    garrafaqtd = document.getElementById("quantidade-garrafa").value;
    localStorage.setItem("quantidade", garrafaqtd)
}

function atualizarCarrinho()
{
    garrafaqtd = localStorage.getItem("quantidade")

    garrafapreco = (garrafapreco * garrafaqtd)

    if (garrafaqtd != null)
    {
        var text = "<tr><th>"
        text += garrafaqtd + "</th><th>" + garrafanome + "</th><th>" + garrafapreco + "€</th></tr>"
        document.getElementById("tabelagarrafa").innerHTML += text
    }
}

