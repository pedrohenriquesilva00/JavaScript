import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao } from '../models/index'
import { logarTempoDeExecucao } from '../helpers/decorators/index'

export class NegociacaoController {
    private _inputData: JQuery
    private _inputQuantidade: JQuery
    private _inputValor: JQuery
    private _negociacoes = new Negociacoes()
    private _negociacoesView = new NegociacoesView('#negociacoesView')
    private _mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoesView.update(this._negociacoes)
    }

    adiciona(event: Event) {

        event.preventDefault()

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(!this._diaUtil(data)) {

            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return 
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, '/')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao)

        this._negociacoesView.update(this._negociacoes)

        this._mensagemView.update('Negociação Adicionada com Sucesso!')  
    }

    private _diaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado, 
}