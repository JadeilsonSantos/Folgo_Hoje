let anoAtual = new Date().getFullYear(); 
let folgaBase = new Date('10/31/2021');
let hoje = new Date();
const umDiaEmMS = 86400000
const texto = document.querySelector('.resultado h3');
const inputData = document.querySelector('.container input');
let ndata;
let diasDeFolga = [];
let lista = document.querySelector(".lista")

const newDataBase = (folgaBase,selectDate) =>{

  let folgaBaseAdd = new Date(folgaBase);
  
    while (folgaBaseAdd <= selectDate){ 

      diasDeFolga.push(folgaBaseAdd.toString());    
      folgaBaseAdd.setDate(folgaBaseAdd.getDate()+8)
    }
    return folgaBaseAdd;
}

const escreverNaLista = (diasDeFolga)=> {

  let dados = document.createElement('li') // cria elemento li
  
  diasDeFolga.forEach(dias => {
    lista = document.querySelector('.lista').appendChild(dados)
      for (let index = 0; index < 4; index++) {

        lista.innerHTML += `| ${(converterDatas(dias, index))} `
      } 
    })
}

const resultadoNoDisplay = (diferencaDatas,dataSelecionada)=> {
  
    if(diferencaDatas > 4 && diferencaDatas <9){
    texto.innerHTML = (`Você estará de FOLGA no dia ${ converterDatas(dataSelecionada) }`)} 
    else{
    texto.innerHTML += (`Você TRABALHARÁ no dia ${converterDatas(dataSelecionada)}`)} 
}

function minhaFolga(e){
    apagar(lista);
    diasDeFolga = [];
    if(inputData.value == "") {texto.innerHTML = ""; return}
  
  const dataSelecionada = e.target.value;
  selectDate = new Date(dataSelecionada)
  
  folgaBaseAdd = newDataBase(folgaBase,selectDate)

  diasDeFolga = setDiaInicialCalendario(diasDeFolga)
  
  let diferencaDatas = Math.floor((folgaBaseAdd - selectDate) / umDiaEmMS)
  
  resultadoNoDisplay(diferencaDatas,selectDate);
 
  escreverNaLista(diasDeFolga);

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

  return `${zeroNaFrente(dia)}/${zeroNaFrente(mes)}/${ano}`
}


