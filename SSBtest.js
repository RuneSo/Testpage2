<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/series-label.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/drilldown.js"></script>
<script type="text/javascript" src="https://json-stat.org/lib/json-stat.js"></script>

/* Adresse til json-stat datasettet */
const url="https://data.ssb.no/api/v0/dataset/1066.json?lang=no";
console.log("url er type: " + typeof url);
/* Henter datasettet med jquery get */
$.get(url, function main(obj){
    ds=JSONstat(obj).Dataset(0);
    alert(ds.Dimension("Tid").id);
        /*jQuery sjekk */
        $(document).ready(function() {
        /* Highcharts kode */ 
            $('#figur2').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Detaljomsetningsindeksen siste 13 mnd. '  
                },
                /* henter dimensjoner i json-stat datasett. Tips: bruk F12 konsoll */
                xAxis: [
                    {
                        categories: ds.Dimension("Tid").id
                    }
                ],          
                yAxis: {
                    title: {
                        text: 'Indeks'
                    }
                },
                series:[
                    {
                        /* henter navn på serie (ds. label) og serien (ds.value) i datasettet */
                        name: ds.label,
                        data: ds.value}],
            });
        } 
    );  
}
)

