let alunos = [
    ['Samuel', 'samuel@email.com', '85 88888888'],
    ['Bruno', 'bruno@email.com', '85 88888888'],
    ['Matheus', 'matheu@email.com', '85 88888888'],
    ['Marcelo', 'marcelo@email.com', '85 88888888'],
];

function novo() {
    pagina_novo.style.display = 'block'; //mostrar
    pagina_listar.style.display = 'none'; //esconder

}

function listar() {
    pagina_listar.style.display = 'block'; //mostrar
    pagina_novo.style.display = 'none'; //enconder


    limpaLista();
    alunos.forEach(function (cadaAluno) {
        tabela_alunos.innerHTML += `
            <tr>
                <td>${cadaAluno[0]}</td>
                <td>${cadaAluno[1]}</td>
                <td>${cadaAluno[2]}</td>
                <td>---</td>
            </tr>
        `;
    });
}


function limpaLista() {
    tabela_alunos.innerHTML = '';
}

function enviar() {
    event.preventDefault();
    alunos.push([`${nome.value}`,`${email.value}`,`${telefone.value}`]);
    listar();
}
