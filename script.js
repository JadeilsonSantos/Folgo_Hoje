let anoAtual = new Date().getFullYear(); 
let folgaBase = new Date('10/31/2021');
let hoje = new Date();
const umDiaEmMS = 86400000
const texto = document.querySelector('.resultado h3');
const inputData = document.querySelector('.container input');
let ndata;
let diasDeFolga = [];


function minhaFolga(e){

  let lista;
  apagar(lista);
  
  if(inputData.value == "") {texto.innerHTML = ""; return}
  
  const dataSelecionada = e.target.value;
  selectDate = new Date(dataSelecionada)
  
  let folgaBaseAdd = new Date(folgaBase);
  
    while (folgaBaseAdd <= selectDate){ 

      diasDeFolga.push(folgaBaseAdd.toString());    
      folgaBaseAdd.setDate(folgaBaseAdd.getDate()+8)
      
    }

  diasDeFolga = setDiaInicialCalendario(diasDeFolga)
  
  let diferenca = Math.floor((folgaBaseAdd - selectDate) / umDiaEmMS)
  
    if(diferenca > 4 && diferenca <9){
    texto.innerHTML = (`Você estará de FOLGA no dia ${ converterDatas(dataSelecionada) }`)
  } else{
    texto.innerHTML += (`Você TRABALHARÁ no dia ${converterDatas(dataSelecionada)}`)
  } 
 

  var dados = document.createElement('li') // cria elemento li
  
  diasDeFolga.forEach(dias => {
    lista = document.querySelector('.lista').appendChild(dados)
      for (let index = 0; index < 4; index++) {

        lista.innerHTML += `| ${(converterDatas(dias, index))} `
      } 
    })
}

function setDiaInicialCalendario(folgas){
  let ultimoDiaTrabalho = new Date()
  ultimoDiaTrabalho.setDate(hoje.getDate()-3)


  let folgasAtual = folgas.filter(ret => {
    ret = setarData(ret)
   return ret > ultimoDiaTrabalho;
  })

   return folgasAtual;
   
}

function apagar(li){
    li = document.querySelector(".lista")
    li.innerHTML = ""
    texto.innerHTML = ""
}

function zeroNaFrente(data){
  return data <10 ? `0${data}`: `${data}` 
}

function setarData(d,i=0){
  let data = new Date(d)
  ndata = new Date(data)
 ndata.setDate(data.getDate() + i)
 return ndata;
}

function converterDatas(d,i=1){    
  setarData(d,i); 
  let dia = ndata.getDate();
  let mes = ndata.getMonth() + 1;
  let ano = ndata.getFullYear();

  return `${zeroNaFrente(dia)}/${zeroNaFrente(mes)}/${ano}` // aqui altera como vc quer o retorno
}


