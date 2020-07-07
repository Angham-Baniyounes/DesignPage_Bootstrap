//line
var myChart = document.getElementById("lineChart").getContext('2d');
Chart.defaults.global.defaultFontColor = '#fff';

var myLineChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: ["TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"],
        datasets: [{
            label: "",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                '#108ffb',
            ],
            borderColor: [
                '#ffffff',
            ],
            borderWidth: 2.5,
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Income',
            position: 'bottom',
            fontColor: '#ffffff',
        },
    },
});