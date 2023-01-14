let contador = 0
let input = document.querySelector('#input__tafera');
let btnAdd = document.querySelector('#btn__add');
let main = document.querySelector('#area__lista')

function addTarefa() {
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcaTarefa(${contador})" class="item__icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>

            <div onclick="marcaTarefa(${contador})" class="item__nome">
                ${valorInput}
            </div>

            <div class="item__botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`;

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        // ZERAR OS CAMPINHOS
        input.value = "";
        input.focus();

    }
}


function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove();
}

function marcaTarefa(id) {
    var item = document.getElementById (id);
    var classe = item.getAttribute('class');

    if(classe=='item') {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
        
    } else {

        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function (event) {
    // SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
} )


