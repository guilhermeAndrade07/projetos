function verificar() {
    var data= new Date()
    var ano = data.getFullYear()
    var nome = document.getElementsById('inome')
    var nscm = document.getElementById('iano')
    var res = document.getElementById('resultado')
    

    if (nscm.value.lenght == ' ' || Number(nscm.value) > ano) {
        window.alert('Verifique seu dados!!')
    } else
        var idade = ano - Number(nscm.value)
        res.innerHTML =  `${nome} tem ${idade} anos de idade`
}