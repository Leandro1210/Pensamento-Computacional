document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault()
    let nome = document.getElementById('nome').value
    let nota1 = parseInt(document.getElementById('nota1').value)
    let nota2 = parseInt(document.getElementById('nota2').value)
    let nota3 = parseInt(document.getElementById('nota3').value)
    let result = Math.round((nota1+nota2+nota3)/3)
    
    let resultado = document.getElementById('resultado')
    let mensagem = document.getElementById('mensagem')

    if(result >= 60){
        mensagem.innerText = `Parabéns, ${nome}! Sua média é ${result}`
    }else{
        mensagem.innerText = `Lamento, ${nome}, sua média é ${result}`
    }
    resultado.style.display = 'block'
})        

