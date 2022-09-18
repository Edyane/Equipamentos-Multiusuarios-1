var botaoAdicionar = document.querySelector("#adicionar-equipamento");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var equipamento = form.equipamento.value;
    var patrimonio = form.patrimonio.value;
    var data = form.data.value.split('-').reverse().join('-');
    var local = form.local.value;

    var equipamentoTr = document.createElement("tr");

    var equipamentoTd = document.createElement("td");
    var patrimonioTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var localTd = document.createElement("td");

    equipamentoTd.textContent = equipamento;
    patrimonioTd.textContent = patrimonio;
    dataTd.textContent = data;
    localTd.textContent = local;

    equipamentoTr.appendChild(equipamentoTd);
    equipamentoTr.appendChild(patrimonioTd);
    equipamentoTr.appendChild(dataTd);
    equipamentoTr.appendChild(localTd);

    console.log(equipamentoTr);

    var tabela = document.querySelector("#tabela-equipamentos");

    tabela.appendChild(equipamentoTr);    

});