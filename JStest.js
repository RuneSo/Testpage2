alert("Javascript i JStest.js kjører!")


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
            text: "Figur 1: Antall stillinger, ansatte og årsverk i 1601 Trondheim kommune"
        },
        credits: {
            enabled: true,
            text: 'KS/PAI',
            href: 'http://www.ks.no/pai'
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