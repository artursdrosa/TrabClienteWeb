
function adicionarObra(nomeObra,nomeAutor,anoObra,periodoObra,tipoObra,descricao) {
    const tabela = document.getElementById("tabelaObras").querySelector("tbody");
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell().innerText = nomeObra;
    novaLinha.insertCell().innerText = nomeAutor;
    novaLinha.insertCell().innerText = anoObra;
    novaLinha.insertCell().innerText = periodoObra || "N/A";
    novaLinha.insertCell().innerText = tipoObra || "N/A";
    const cellAcoes = novaLinha.insertCell();
    const botaoExibirDescricao = document.createElement("button");
    botaoExibirDescricao.innerText = "Ver Descrição";
    botaoExibirDescricao.onclick = () => {
        document.getElementById("popUp").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("descricaoPopUp").innerText = descricao;
    }
    cellAcoes.appendChild(botaoExibirDescricao);
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.onclick = () => {
        if (confirm("Tem certeza que quer excluir essa obra?")) {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        }
    };
    cellAcoes.appendChild(botaoExcluir);
}
    
function fecharPopUp() {
    document.getElementById("popUp").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
    
function adicionaErro(message) {
    document.getElementById("mensagensErro").insertAdjacentHTML('beforeend', `<li>${message}</li>`);
}
    
function validaForm () {
    var valida = true;
    document.getElementById("mensagensErro").innerHTML = "";
    const nomeObra = document.getElementById("nomeObra").value;
    const nomeAutor = document.getElementById("nomeAutor").value;
    const anoObra = document.getElementById("anoObra").value;
    const periodoObra = document.getElementById("periodoObra").value;
    const tipoObra = document.getElementById("tipoObra").value;
    const descricao = document.getElementById("descricao").value;
    if (!nomeObra || nomeObra.length < 6) {
        document.getElementById("nomeObra").style.borderColor = "#ff0000";
        adicionaErro("O nome da obra deve ter pelo menos 6 caracteres!");
        valida = false;
        document.getElementById("nomeObra").value = "";
    } else {
        document.getElementById("nomeObra").style.borderColor = "#444";
    }

    if (!nomeAutor || nomeAutor.length < 10) {
        document.getElementById("nomeAutor").style.borderColor = "#ff0000";
        adicionaErro("O nome do autor deve ter mais de 10 caracteres!");
        valida = false;
        document.getElementById("nomeAutor").value = "";
    } else {
        document.getElementById("nomeAutor").style.borderColor = "#444";
    }

    if (!anoObra || isNaN(anoObra)) {
        if(!anoObra){
            adicionaErro("Preencha o ano da obra!");
        }else{
            adicionaErro("O ano da obra deve ser um número!");
        }
        document.getElementById("anoObra").style.borderColor = "#ff0000";
        valida = false;
        document.getElementById("anoObra").value = "";
    } else {
        document.getElementById("anoObra").style.borderColor = "#444";
    }

    if (!periodoObra) {
        adicionaErro("Selecione o período da obra!");
        document.getElementById("periodoObra").style.borderColor = "#ff0000";
        valida = false;
    } else {
        document.getElementById("periodoObra").style.borderColor = "#444";
    }

    if (!tipoObra) {
        adicionaErro("Selecione o tipo da obra!");
        document.getElementById("tipoObra").style.borderColor = "#ff0000";
        valida = false;
    } else {
        document.getElementById("tipoObra").style.borderColor = "#444";
    }

    if (valida === false) {
        alert("Por favor, preencha os campos obrigatórios.")
        return;
    }

    document.getElementById("nomeObra").value = ""
    document.getElementById("nomeAutor").value = ""
    document.getElementById("anoObra").value = ""
    document.getElementById("periodoObra").value = "vazio"
    document.getElementById("tipoObra").value = "vazio"
    document.getElementById("descricao").value = ""
    
    adicionarObra(nomeObra, nomeAutor, anoObra, periodoObra, tipoObra, descricao);
}