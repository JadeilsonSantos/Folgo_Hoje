var anoAtual = new Date().getFullYear(); 
var folgaBase = new Date('11/04/2021');
const umDiaEmMS = 86400000
var texto = document.querySelector("#resultado");

/* const convertDate = () => {
  
 //e aí manoo
 //ok

    let day = dataSelecionada.getDate();
    let moth = dataSelecionada.getMoth();
    let year = dataSelecionada.getFullYear();

   dataSelecionada = `${day}/${moth}/${year}`

   minhaFolga(e,dataSelecionada,selectDate) 
}  */

function minhaFolga(e){ 

  let dataSelecionada = e.target.value;

  if (dataSelecionada == "") {texto.innerHTML = 'Resultado';return};
 
  selectDate = new Date(dataSelecionada)
    
    let diasDeFolga = [];
    let folgaBaseAdd = new Date(folgaBase);
    let i = 0;

      while (folgaBaseAdd <= selectDate) 
      { 
        diasDeFolga.push(folgaBaseAdd.toString()); // aqui deve ta retornando sempre a mesma data        
        folgaBaseAdd.setDate(folgaBaseAdd.getDate()+8)
        //i+=8 // aqui faz o incremento da data né? >>> Sim
      }

      let diferenca = Math.floor((folgaBaseAdd - selectDate) / umDiaEmMS)
      
  
      if(diferenca > 0 && diferenca <5)

      {texto.innerHTML = (`Você estará de FOLGA no dia ${ converterDatas(dataSelecionada) }`)}

      else{texto.innerHTML = (`Você TRABALHARÁ no dia ${converterDatas(dataSelecionada)}`) }

      console.log(diferenca)
      console.log(folgaBaseAdd)
      console.log(diasDeFolga);
}

function zeroNaFrente(data){
  return data < 9 ? `0${data}`: `${data}` 
}

function converterDatas(d){    
  let data = new Date(d)
  let ndata = new Date(data)
  ndata.setDate(data.getDate() + 1)
 
  let dia = zeroNaFrente(ndata.getDate())
  let mes = zeroNaFrente(ndata.getMonth() +1)
  let ano = ndata.getFullYear()

  //console.log(`${dia}/${mes}/${ano}`)
  //return ndata
  return `${dia}/${mes}/${ano}` // aqui altera como vc quer o retorno
}

// Vou jogar aqui o codigo
// Testa ai

