class NegociacaoController {


    constructor() {
        // para poder usar referencias a variaveis e permanecer se referindo ao document, e deixar um codigo mais limpo se usa o metodo bind. Se nao utiliza o js nao reconhece a variavel de atalho '$' porque ele nao identifica que se refere ao document.
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }


    adiciona(event) {

        event.preventDefault();
    
        let helper = new DateHelper();
    
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}