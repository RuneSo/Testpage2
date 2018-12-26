/* Adresse til json-stat datasettet */
const url="https://data.ssb.no/api/v0/dataset/1066.json?lang=no";
console.log("url er type: " + typeof url);
/* Henter datasettet med jquery get */
$.get(url, function main(obj){
    ds=JSONstat(obj).Dataset(0);
    // alert(ds.Dimension("Tid").id);
        /*jQuery sjekk */
        $(document).ready(function() {
        /* Highcharts kode */ 
            $('#figur2').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Test av APIene til SSB. Detaljomsetningsindeksen siste 13 mnd. '  
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