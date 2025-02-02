document.addEventListener('DOMContentLoaded', function() {
// armazenando as classes nas variáveis
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const semana = document.getElementById('semana');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const dataAtual = document.querySelector('.dataAtual');


const diasSemana = [
    'Domingo',
    'Segunda-feira', 
    'Terça-feira', 
    'Quarta-feira', 
    'Quinta-feira', 
    'Sexta-feira', 
    'Sábado'
];

const mesesAno = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// uso do setInterval time e também o new Date. 
// pegado o método hours, minutes e seconds.
const relogio = setInterval(function time() {
    let dateToday = new Date();
    
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let weekDay = diasSemana[dateToday.getDay()];
    let day = dateToday.getDate();
    let month = mesesAno[dateToday.getMonth()];
    let year = dateToday.getFullYear();
    
    // condicional para o 0 em hr,min e sec caso < 10
    hr = hr < 10 ? '0' + hr : hr
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec
    day = day < 10 ? '0' + day : day

   // armazenando o tempo e mudando no html
   if (horas) horas.textContent = hr; 
   if (minutos) minutos.textContent = min;
   if (segundos) segundos.textContent = sec;
   if (dataAtual) {
    dataAtual.innerHTML = `${weekDay}, ${day} de ${month} de ${year}`;
}
    
},);
})




   