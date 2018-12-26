// alert("Javascript i JStest.js kjører!")

$(function() {
    var myChart = Highcharts.chart('figur1', {
        series: [{
            name: 'Ansatte',
            data: [13258]
        }, {
            name: 'Årsverk',
            data: [12521]
        }, {
            name: 'Stillinger',
            data: [10326]
        }, ],
        chart: {
            type: 'column'
        },
        title: {
            text: "Enkel test av Highcharts"
        },
        credits: {
            enabled: true,
            text: 'RuneSo',
            href: 'https://github.com/RuneSo'
        },
        xAxis: {
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            }
        }
    });
});