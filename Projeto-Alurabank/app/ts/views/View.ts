import { logarTempoDeExecucao } from '../helpers/decorators/index'

export abstract class View<T> {
    protected _elemento: JQuery
    private _escapar: boolean

    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor)
        this._escapar = escapar
    }

    @logarTempoDeExecucao(true)
    update(model: T) {

        let template = this.template(model)

        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template)
    }

    abstract template(model: T): string 
}