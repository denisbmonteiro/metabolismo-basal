function Calcular() {
    var masculino = document.getElementById('masculino').checked;
    var feminino = document.getElementById('feminino').checked;
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado;

    if (!masculino && !feminino) {
        alert("Selecione o seu sexo!");
        return;
    }

    if (idade === 0 || idade === '') {
        alert("Insira a sua idade!");
        return;
    }

    if (peso === 0 || peso === '') {
        alert("Insira o seu peso!");
        return;
    }

    if (altura === 0 || altura === '') {
        alert("Insira a sua altura!");
        return;
    }

    if (masculino)
        resultado = 66.47 + (13.75 * peso) + (5.003 * altura) - (6.775 * idade);
    else
        resultado = 655.09 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade);

    document.getElementById('lblResultado').innerHTML = resultado.toFixed(2);
    document.querySelector('.resultado').classList.add("active");
}

function Limpar() {
    document.getElementById('masculino').checked = true;
    document.getElementById('feminino').checked = false;
    document.getElementById('idade').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('lblResultado').innerText = 0;
    document.querySelector('.resultado').classList.remove("active");
}