# digital-clock


Aplicação simples com foco em estudos de lógica de Programação. Projeto de Relógio Digital em tempo real na qual possui o horário, minutos e segundos e também a data abaixo.  

## Método Date no Javascript
- Foi utilizado a instância do tipo Date, que representa um momento no tempo.
```
let dateToday = new Date();
    
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let weekDay = diasSemana[dateToday.getDay()];
    let day = dateToday.getDate();
    let month = mesesAno[dateToday.getMonth()];
    let year = dateToday.getFullYear();
```
- Adicionar o 0 ao inicio da contagem de hr,min e sec caso for < 10
```
    hr = hr < 10 ? '0' + hr : hr
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec
    day = day < 10 ? '0' + day : day
```

> Obs: A aplicação não está responsiva, logo, a função do @keyframe para o background-gradient-linear pode não colaborar.

## Instalar a Aplicação
Se você possui o gitbash 
- execute o ``` git clone https://github.com/erikseki/digital-clock.git ```
- Abra a aplicação em seu IDE e compile para visualizar o Relógio.
