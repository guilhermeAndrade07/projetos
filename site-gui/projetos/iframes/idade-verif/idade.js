function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nm = document.getElementById('inome')
    let nscm = document.getElementById('inasc')
    let resultado = document.getElementById('resultado')
}
if (nscm.value.length === 0 || Number(nscm.value) > ano) {
    window.alert('Verifique seu dados!!')
} else {
    let idade = ano - Number(nscm.value)
    
    resultado.innerHTML = `${nm} tem ${idade}`
}