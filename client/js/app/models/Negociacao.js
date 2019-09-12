class Negociacao {

    //por convenção colocamos underline antes dos atributos que consideramos privados no js
    constructor(data, quantidade, valor){

        //programaçao defensiva guardando um objeto dentro de um objeto no caso de data que já é um objeto eu retorno um objeto getDate que é um numero representa a data dentro dele dificultando a alteraçao fora do ambiente interno
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }
    // funçoes que sao desenvolvidas dentro de uma classe sao chamadas de metodo
    // vantagens do get é que vc pode chamar sem usar ()
    get volume () {
       return this._quantidade * this._valor ; 
    }

    get quantidade () {
        return this._quantidade;
    }
    //forma de programaçao defensiva novamente, retronando um objeto dentro de outro no caso date é importante.
    get data () {
        return new Date(this._data.getTime());
    }

    get valor() {
        return this._valor;
    }




}