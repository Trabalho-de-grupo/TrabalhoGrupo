var opiniaonavval
var opiniaocompraval
var recomendarval

var garrafaqtd = 0
var garrafanome = "Vinho Monte Velho"
var garrafapreco = 2.49

function login()
{

    if (localStorage.getItem("flag") == "1")
    {
        var x = document.getElementById("iniciar_sessao");
        x.style.display = "none";

        var y = document.getElementById("definicao_conta");
        y.style.display = "inline-block";

    }
}

function sairSessao()
{
    localStorage.setItem("flag", "0")
    localStorage.setItem("quantidade", "0")

    atualizarCarrinho()

    var y = document.getElementById("definicao_conta");
    y.style.display = "none";

    var x = document.getElementById("iniciar_sessao");
    x.style.display = "block";
}

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
    localStorage.setItem("flag", "1")
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

    garrafapreco = (garrafapreco * garrafaqtd).toFixed(2);

    if (garrafaqtd != 0)
    {
        var text = "<tr><th>"
        text += garrafanome + "</th><th>" + garrafaqtd + "</th><th>" + garrafapreco + "€</th></tr>"
        document.getElementById("tabelagarrafa").innerHTML += text
    }
}

function funcaoAparecer() {
    var x = document.getElementById("destaque");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
 function pagamento(){
    localStorage.setItem("quantidade", "0")
    alert("Pagamento Efetuado!!");
    atualizarCarrinho()
 }