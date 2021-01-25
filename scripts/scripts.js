var opiniaonavval
var opiniaocompraval
var recomendarval

var garrafa

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
    garrafa = document.getElementById("quantidade-garrafa").value;
    alert(garrafa)

}

function comprarAgora()
{
    garrafa = document.getElementById("quantidade-garrafa").value;
    alert(garrafa)
}

function atualizarCarrinho()
{
    
}

function funcaoAparecer() {
    var x = document.getElementById("destaque");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }