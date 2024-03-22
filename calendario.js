// variavel que exibe mes e ano 
const currentDate = document.querySelector(".current-date"),
// variavel seleciona os dias
daysTag = document.querySelector(".days"),
// variavel de avanca e volta o mes
prevNextIcon = document.querySelectorAll(".icons span");

// cria nova data , ano e mes;
let date = new Date(),
// variavel receber o ano atual
currYear = date.getFullYear(),
// variavel receber o mes atual
currMonth = date.getMonth();

// criar uma variavel com todos os meses do ano
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
                "Agosto","Setembro","Outubro","Novembro","Dezembro"]

// abaixo teste de hora , ano e mes atual
// console.log(date, currYear, currMonth)

// Vamos renderizar o projeto no html
const renderCalendar = ()=>{
// variaveis criadas para a manipulação 
let firstDayofMonth = new Date(currYear, currMonth, 1).getDate(),//retorna o dia inicial 1 
 lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),// retorna o 29 dia 
 lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDate(),// retrona 29 
 lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();//retorna 31

let liTag = "" ;

for(let i = firstDayofMonth;  i > 0; i-- ){
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
}

for (let i = 1; i <= lastDateofMonth; i++) {
  
    let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                  && currYear === new Date().getFullYear() ? "active" : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    
}
for (let i = lastDayofMonth; i < 6; i++) {
   
    liTag += `<li class="inactive">${ i - lastDayofMonth + 1}</li>`;
}
     

// aqui instaciamos as variavel a variavel currentDate fazendo o tratamento em html 
currentDate.innerText = `${months[currMonth]} ${currYear}`;
// aqui tratamos o html da variavel dayTag que recebe o valor da variavel litag
daysTag.innerHTML = liTag;
}

renderCalendar();
// essa função adiciona um evento de click nos botoes 

prevNextIcon.forEach(icon =>{
 icon.addEventListener("click",()=>{
        // fazemos uma condicional ternaria 
        // se for true mes -1, se False mes +1 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 ||  currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else {
            date = new Date();

        }
        renderCalendar();
    })
});
