// Selecio o botão para adicionar eventos
var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event){

    // Previne que a página seja carregada, perdendo os dados do Usuário
    event.preventDefault()

    // Seleciona o formulário
    var form = document.querySelector('#form-adiciona')

    // Extrai as informações do paciente
    var paciente = obtemPaciente(form)

    // Validação das informações inseridas pelos Usuários
    if (!validaPaciente(paciente)) {
        alert('Paciente inválido')
        return
    }

    // Mensagem de erro
    var erros = validaPaciente(paciente)
    if (erros.length > 0) {
        mensagemDeErro(erros)

        return
    }

    addPacienteNaTabela(paciente)

    // Limpa os formulários
    form.reset()
    var ulErro = document.querySelector('#mensagens-erro')
    ulErro.innerHTML = ''
})

function addPacienteNaTabela(paciente) {
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente)

    // Adiciona o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')

    // Define que pacienteTr será filho de tabela-pacientes
    tabela.appendChild(pacienteTr)
}

function mensagemDeErro (erros) {
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function obtemPaciente (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd (dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente (paciente) {

    var erros = []

    if (paciente.nome.length === 0) erros.push('Coloque um Nome')
    if (paciente.peso.length === 0) erros.push('Preencha o campo: Peso')
    if (paciente.altura.length === 0) erros.push('Preencha o campo: Altura')
    if (paciente.gordura.length === 0) erros.push('Preencha o campo: Gordura')
    
    if (!validaPeso(paciente.peso)) erros.push('O Peso é inválido')
    if (!validaAltura(paciente.altura)) erros.push('A Altura é inválida')
    

    return erros
}