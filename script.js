function trocarCor() {
  let carater = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  let cor = '#'
  let txtcor = window.document.getElementById('txtcor')
  var CorGerada = generateColor(carater,cor)
  txtcor.innerText = CorGerada 
  window.document.body.style.background = CorGerada 
}

function generateColor(carater,cor) {
  //Enquanto i menor que 6 i++ (incremento)
  for (let i = 0; i < 6; i++) {
    //r = O comprimento de letters (16), menos 1, vezes um numero aleatorio.
    r = Math.random() * (carater.length -1)
    //"cor" recebe o valor dela mesma, sendo comcatenada com os valores de letters
    cor += carater[r.toFixed(0)];
  }
  //retorna a cor
  return cor;

}
