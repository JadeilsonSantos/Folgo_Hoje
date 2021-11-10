var anoAtual = new Date().getFullYear(); 
var folgaBase = new Date('11/04/2021');
const umDiaEmMS = 86400000
var texto = document.querySelector("#resultado");

const convertDate = () => {
  
  var dataSelecionada = e.target.value;
  selectDate = new Date(dataSelecionada);

    let day = dataSelecionada.getDate();
    let moth = dataSelecionada.getMoth();
    let year = dataSelecionada.getFullYear();

   dataSelecionada = `${day}/${moth}/${year}`

   minhaFolga(e,dataSelecionada,selectDate) 
} 

function minhaFolga(e,dataSelecionada,selectDate){
    
    var diasDeFolga = [];
    var folgaBaseAdd = new Date(folgaBase);
    var i = 0;

      while (folgaBaseAdd <= selectDate) 
      { folgaBaseAdd.setDate(folgaBase.getDate()+i);
        diasDeFolga.push(folgaBaseAdd);
        
        i+=8
      }

      let diferenca = Math.floor((folgaBaseAdd - selectDate) / umDiaEmMS)
      
  
      if(diferenca > 0 && diferenca <5)

      {texto.innerHTML = (`Você estará de FOLGA no dia ${dataSelecionada}`)}

      else{texto.innerHTML = (`Você TRABALHARÁ no dia ${dataSelecionada}`) }

}

