const texto = document.querySelector('.resultado h3');
const inputData = document.querySelector('.container input');
let diasEscalaTrabalhando = document.querySelector('#diasTrabalhando');
let diasEscalaDeFolga = document.querySelector('#diasDeFolgas');
let diasTotalEscala;
let anoAtual = new Date().getFullYear(); 
let diaTrabalhoBase = new Date('11/03/2021');
let hoje = new Date();
const umDiaEmMS = 86400000;
let ndata;
let diasDeFolga = [];
let lista = document.querySelector(".lista");

diasEscalaTrabalhando.addEventListener("change",e =>{
  diasEscalaTrabalhando = Number(e.target.value)
  apagar()
  inputData.value = ""
})

diasEscalaDeFolga.addEventListener("change",e =>{

  diasEscalaDeFolga = Number(e.target.value);
  inputData.value = ""
  apagar()

})

function minhaFolga(e){
  apagar();
  diasDeFolga = [];
  if(inputData.value == "") return
  if(diasEscalaTrabalhando.value == "" || diasEscalaDeFolga.value == ""){
    alert('Preencha a Escala')
     inputData.value = "";return
    }

  diasTotalEscala = diasEscalaTrabalhando + diasEscalaDeFolga

  const dataSelecionada = e.target.value;
selectDate = new Date(dataSelecionada)

diaTrabalhoBaseAdd = newDataBase(diaTrabalhoBase,selectDate)

diasDeFolga = setDiaInicialCalendario(diasDeFolga)

  let diferencaDatas = Math.floor((selectDate - diaTrabalhoBase) / umDiaEmMS) + 1

resultadoNoDisplay(selectDate,diferencaDatas);
escreverNaLista(diasDeFolga);

}

const newDataBase = (diaTrabalhoBase,selectDate) =>{

  let diaTrabalhoBaseAdd = new Date(diaTrabalhoBase);
  diaTrabalhoBaseAdd.setDate(diaTrabalhoBase.getDate()+diasEscalaTrabalhando + 1)
  
    while (diaTrabalhoBaseAdd <= selectDate){ 

      diasDeFolga.push(diaTrabalhoBaseAdd.toString());    
      diaTrabalhoBaseAdd.setDate(diaTrabalhoBaseAdd.getDate()+8)
    }
    return diaTrabalhoBaseAdd;
}

const escreverNaLista = (diasDeFolga)=> {

  let dados = document.createElement('li') // cria elemento li
  
  diasDeFolga.forEach(dias => {
    lista = document.querySelector('.lista').appendChild(dados)
      for (let index = 0; index < diasEscalaDeFolga; index++) {

        lista.innerHTML += `| ${(converterDatas(dias, index))} `
      } 
    })
}

const resultadoNoDisplay = (dataSelecionada,diferencaDatas)=> {
  

    if(diferencaDatas % diasTotalEscala > 0 && diferencaDatas % diasTotalEscala <= diasEscalaTrabalhando){
    texto.innerHTML = (`Você TRABALHARÁ no dia ${ converterDatas(dataSelecionada) }`)} 
    
    else{
    texto.innerHTML += (`Você FOLGARÁ no dia ${converterDatas(dataSelecionada)}`)} 
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

function apagar(){
    lista.innerHTML = ""
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
