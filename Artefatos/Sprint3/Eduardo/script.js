// Our labels along the x-axis
//6 salários mínimos = 7154,40
var months = [1,2,3,4,5,6,7,8,9,10,11,12];
// For drawing the lines
var fixos = [4200,4200,4200,4200,4200,3000,3000,3000,5100,5100,5100,5100];
var variavel = [1300,900,1300,1300,1300,1200,580,1400,900,600,500,500];
var desnecessario = [500,400,500,500,500,250,400,600,200,200,200,200];
var investimentos = [0,200,200,200,500,2000,2000,2000,0,0,0,0];
var economias = [1000,1300,800,0,0,2000,100,200,200,0,0,0];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { 
        data: fixos,
        label: "fixos",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: variavel,
        label: "variavel",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: desnecessario,
        label: "desnecessario",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: investimentos,
        label: "investimentos",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: economias,
        label: "economias",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});

//gráfico pizza


var ctx1 = document.getElementById("myChart1");
var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: months,
    datasets: [
      { 
        data: fixos,
        label: "fixos",
        backgroundColor: "#3e95cd",
        fill: false
      },
      { 
        data: variavel,
        label: "variavel",
        backgroundColor: "#8e5ea2",
        fill: false
      },
      { 
        data: desnecessario,
        label: "desnecessario",
        backgroundColor: "#3cba9f",
        fill: false
      },
      { 
        data: investimentos,
        label: "investimentos",
        backgroundColor: "#e8c3b9",
        fill: false
      },
      { 
        data: economias,
        label: "economias",
        backgroundColor: "#c45850",
        fill: false
      }
    ]
  }
});