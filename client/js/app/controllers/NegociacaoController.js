class NegociacaoController {
    
    
    adiciona(event) {
        event.preventDefault();
        // para poder usar referencias a variaveis e permanecer se referindo ao document, e deixar um codigo mais limpo se usa o metodo bind. Se nao utiliza o js nao reconhece a variavel de atalho '$' porque ele nao identifica que se refere ao document.
        let $ = document.querySelector.bind(document);

        let inputData = $('#data');
        let inputQuantidade =  $('#quantidade');
        let inputValor = $('#valor'); 

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
  }
}