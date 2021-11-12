var anoAtual = new Date().getFullYear(); 
var folgaBase = new Date('11/04/2021');
const umDiaEmMS = 86400000
var texto = document.querySelector('.resultado h3');
var ndata;


function minhaFolga(e){
  
  let lista
  apagar(lista);
  
  const dataSelecionada = e.target.value;
  selectDate = new Date(dataSelecionada)
  
  let diasDeFolga = [];
  let folgaBaseAdd = new Date(folgaBase);
  
  while (folgaBaseAdd <= selectDate){ 
    diasDeFolga.push(folgaBaseAdd.toString());    
    folgaBaseAdd.setDate(folgaBaseAdd.getDate()+8)
  
  }
  
  
  let diferenca = Math.floor((folgaBaseAdd - selectDate) / umDiaEmMS)
  
    if(diferenca > 0 && diferenca <5){
    texto.innerHTML = (`Você estará de FOLGA no dia ${ converterDatas(dataSelecionada) }`)
  } else{
    texto.innerHTML += (`Você TRABALHARÁ nos dia ${converterDatas(dataSelecionada)}`)
  } 
 

  var dados = document.createElement('li') // cria elemento li
  
  diasDeFolga.forEach(dias => {
    lista = document.querySelector('.lista').appendChild(dados)
      for (let index = 4; index < 8; index++) {

        lista.innerHTML += `| ${(converterDatas(dias, index))} `
      } 
    })
}
function apagar(li){
    li = document.querySelector(".lista")
    li.innerHTML = ""
    texto.innerHTML = ""
}

function zeroNaFrente(data){
  return data <10 ? `0${data}`: `${data}` 
}

function setarData(d,i){
  let data = new Date(d)
  ndata = new Date(data)
 ndata.setDate(data.getDate() + i)
return data;
}

function converterDatas(d,i=1){    
  setarData(d,i); 
  let dia = ndata.getDate();
  let mes = ndata.getMonth() + 1;
  let ano = ndata.getFullYear();

  return `${zeroNaFrente(dia)}/${zeroNaFrente(mes)}/${ano}` // aqui altera como vc quer o retorno
}


