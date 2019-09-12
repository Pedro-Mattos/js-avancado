class NegociacaoController {


    constructor(){
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data');
         this.inputQuantidade =  $('#quantidade');
        this.inputValor = $('#valor'); 

    }
    
    
    adiciona(event) {
        event.preventDefault();
        // para poder usar referencias a variaveis e permanecer se referindo ao document, e deixar um codigo mais limpo se usa o metodo bind. Se nao utiliza o js nao reconhece a variavel de atalho '$' porque ele nao identifica que se refere ao document.
        

        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);
  }
}