var btnBuscar = document.querySelector('#buscar-pacientes')

btnBuscar.addEventListener('click', function () {

    // Buscando dados da API
    var xhr = new XMLHttpRequest()
    
    // Abre a conexão
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function () {
        var erroAjax = document.querySelector('#erro-ajax')

        if (xhr.status === 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                addPacienteNaTabela(paciente)
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
