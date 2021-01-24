var opiniaonavval
var opiniaocompraval
var recomendarval
var flag

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
    flag = true
}

if (flag)
{
    document.getElementById("iniciar_sessao").setAttribute("type", "hidden")

} 
