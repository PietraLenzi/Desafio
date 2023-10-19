const vacinas = [];
function agendarVacinas() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const nomeVacina = document.getElementById("nomeVacina").value;
    const dataVacina = document.getElementById("dataVacina").value;

   
    vacinas.push({nome,cpf,dataNascimento,nomeVacina,dataVacina});

 
    document.getElementById("cadastroForm").reset();

   
    alert("Cadastro realizado!");


    listarVacinas();
}


document.getElementById("cadastroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    agendarVacinas();
});

listarVacinas();


function listarVacinas() {
    const listaVacina = document.getElementById("listaVacina");
    listaVacina.innerHTML = "";

    vacinas.forEach(vacina => {
        const listItem = document.createElement("li");
        listItem.textContent = `Nome: ${vacina.nome}, CPF: ${vacina.cpf}, Data de Nascimento: ${vacina.dataNascimento}, Nome da Vacina: ${vacina.nomeVacina}, Data da vacina: ${vacina.dataVacina}`;
        listaVacina.appendChild(listItem);
    });
}