class Negociacao {

    //por convenção colocamos underline antes dos atributos que consideramos privados no js
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // funçoes que sao desenvolvidas dentro de uma classe sao chamadas de metodo
    getVolume () {
       return this._quantidade * this._valor ; 
    }

    getQuantidade () {
        return this._quantidade;
    }

    getData () {
        return this._data;
    }

    getValor() {
        return this._valor;
    }




}