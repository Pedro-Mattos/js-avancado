class ListaNegociacoes {
    constructor () {
        this._negociacoes = []
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
        //conct eu concateno as negociocoes dentro de um array vazio como uma forma de blindar a lista.

    } 
}