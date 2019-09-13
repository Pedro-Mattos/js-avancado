class NegociacaoController {


    constructor(){
         // para poder usar referencias a variaveis e permanecer se referindo ao document, e deixar um codigo mais limpo se usa o metodo bind. Se nao utiliza o js nao reconhece a variavel de atalho '$' porque ele nao identifica que se refere ao document.
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
         this._inputQuantidade =  $('#quantidade');
        this._inputValor = $('#valor'); 

    }
    
    
    adiciona(event) {
        event.preventDefault();
       
       //a função split é para partir a string da data recebida da seguinte maneira "ano-mes-dia" em um array com 3 strings, posteriormente a função map , mapeia os arrays e aplica uma funçao sobre o itens e indices, reduzindo em 1 o indice do mês, pois no retorno estava vindo errado com uma data a mais. 

        let data = new Date(...this._inputData.value.split('-').map(function(item, indice) {
                if(indice == 1) {
                    return item - 1;
                }
                return item;
            })
        );
        console.log(data);

        //chama como parametro a data salva da forma correta na let declarada acima e os valores do input quantidade e valor

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
            )
  }
}