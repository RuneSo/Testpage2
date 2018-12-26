function logistic() {
    const R = Number(document.getElementById("kompleksR").value);
    const x = Number(document.getElementById("kompleksx0").value);

    logisticdata=[];
    // Pusher inn verdien for periode 0
    logisticdata.push([0,x]);
    // console.log(logisticdata);
    // console.log(logisticdata[0]);
    // console.log(logisticdata[0][1]);
    for (i=0; i<100; i++) {
        // if (i=0) {
        //     let y = R * x * (1-x);
        // } else {
        //     let y = R * y * (1-y);
        // }
        let prevx = logisticdata[i][1];
        let newx = R * prevx * (1-prevx);
        logisticdata.push([i+1, newx])
        // console.log([i+1, newx]);
    };
    // console.log(logisticdata);

    /* Highcharts kode */ 
    $('#figur3').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Utvikling av logistic map.'  
        },
        series:[
            {
                name: "Utvikling",
                data: logisticdata}],
        yAxis: {
            title: {
                text: 'Fraction of carrying capacity.'
            },
            labels: {
                formatter: function () {
                    return Math.round(this.value*1000)/10 + ' %';
                }
            }
        },
        xAxis: {
            labels: {
                text: "Period"
            }
        }
    });




} ;


