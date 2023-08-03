
const control = document.querySelectorAll("[data-control]");
const statistic = document.querySelectorAll("[data-statistic]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach((element) => {  
    element.addEventListener('click', (evento) => {
       dataManipulation(evento.target.dataset.control, evento.target.parentNode);
       updateStatistic(evento.target.dataset.part);
    });
});


function dataManipulation(operation,controle) {    
    const part = controle.querySelector('.controle-contador');

    if (operation === '+') {
        part.value = parseInt(part.value) + 1;
    } else {
        part.value = parseInt(part.value) - 1;
    }
}

function updateStatistic(peca) {
    console.log(pecas[peca]);

    statistic.forEach((elemento) => {
        console.log(elemento.dataset.statistic);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.statistic]
    })
}