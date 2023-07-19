// High-chart

// <style>
// text.highcharts-credits {
//     display: none;
// }
// text.highcharts-title {
//     display: none;
// }
// text.highcharts-axis-title {
//     display: none;
// }
// #container {
//     height: 500px;
//     width: 100%;
// }
// </style>
// <script src="https://code.highcharts.com/highcharts.js"></script>
// <div id="container"></div>


{/* <script> */ }
var Webflow = Webflow || [];
Webflow.push(function () {

    const DATA_URL = 'https://api.syfe.com/portfolios/data?types=GLOBAL_EQUITY_100';

    $(".pre-loading").css("display", "flex");
    loadData();

    async function loadData() {
        const resp = await fetch(DATA_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const fullData = await resp.json();

        console.log('DATA: ', fullData);

        processData(fullData);
        $(".pre-loading").css("display", "none");

    }
    // -------------------------processData(fullData)------------------------------------
    function processData(fullData) {
        let dataDate = [];
        let dataSyfe = [];
        let dataMwi = [];

        $('[updateDate]').text(fullData.GLOBAL_EQUITY_100.updateDate.LAST_PORTFOLIO_NUMBERS_UPDATE_DATE);

        const monthlyPastReturnDatas = fullData.GLOBAL_EQUITY_100.monthlyPastReturnData.slice(-111);

        monthlyPastReturnDatas.forEach(function (monthlyPastReturnData) {


            dataDate.push(monthlyPastReturnData.date);
            dataSyfe.push(monthlyPastReturnData.syfe[15]);
            dataMwi.push(monthlyPastReturnData["MSCI World"]["MSCI World Index"]);

        });

        // -------------------------Highcharts------------------------------------    
        Highcharts.chart('container', {
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                    // minWidth: 700,
                    scrollPositionX: 1
                }
            },
            xAxis: {
                categories: dataDate,
                labels: {
                    overflow: 'justify',
                    formatter: function () {
                        const newDate = new Date(this.value);
                        return newDate.getFullYear();

                    }
                },
                tickInterval: 11,
                crosshair: true
            },
            yAxis: {
                tickWidth: 1,
                crosshair: true,
                lineWidth: 1,
                opposite: true,
                labels: {
                    formatter: function () {
                        return this.value + ' %';
                    }
                }
            },
            tooltip: {
                valueSuffix: ' %',
                borderRadius: 16,
                split: true
            },
            plotOptions: {
                spline: {
                    lineWidth: 3,
                    states: {
                        hover: {
                            lineWidth: 4
                        }
                    },
                    marker: {
                        enabled: false
                    },
                },
            },
            series: [{
                name: 'Core Equity100 Portfolio',
                color: '#235DD1',
                data: dataSyfe

            }, {
                name: 'MSCI World Index',
                color: '#DCDCDC',
                data: dataMwi
            }]
        });
        // -------------------------Highcharts--end------------------------------------  


    }
    // -------------------------processData(fullData)end------------------------------------
});
{/* </script> */ }



const xData = [
    "2014-4-30",
    "2014-5-31",
    "2014-6-30",
    "2014-7-31",
    "2014-8-31",
    "2014-9-30",
    "2014-10-31",
    "2014-11-30",
    "2014-12-31",
    "2015-1-31",
    "2015-2-28",
    "2015-3-31",
    "2015-4-30",
    "2015-5-31",
    "2015-6-30",
    "2015-7-31",
    "2015-8-31",
    "2015-9-30",
    "2015-10-31",
    "2015-11-30",
    "2015-12-31",
    "2016-1-31",
    "2016-2-29",
    "2016-3-31",
    "2016-4-30",
    "2016-5-31",
    "2016-6-30",
    "2016-7-31",
    "2016-8-31",
    "2016-9-30",
    "2016-10-31",
    "2016-11-30",
    "2016-12-31",
    "2017-1-31",
    "2017-2-28",
    "2017-3-31",
    "2017-4-30",
    "2017-5-31",
    "2017-6-30",
    "2017-7-31",
    "2017-8-31",
    "2017-9-30",
    "2017-10-31",
    "2017-11-30",
    "2017-12-31",
    "2018-1-31",
    "2018-2-28",
    "2018-3-31",
    "2018-4-30",
    "2018-5-31",
    "2018-6-30",
    "2018-7-31",
    "2018-8-31",
    "2018-9-30",
    "2018-10-31",
    "2018-11-30",
    "2018-12-31",
    "2019-1-31",
    "2019-2-28",
    "2019-3-31",
    "2019-4-30",
    "2019-5-31",
    "2019-6-30",
    "2019-7-31",
    "2019-8-31",
    "2019-9-30",
    "2019-10-31",
    "2019-11-30",
    "2019-12-31",
    "2020-1-31",
    "2020-2-28",
    "2020-3-31",
    "2020-4-30",
    "2020-5-31",
    "2020-6-30",
    "2020-7-31",
    "2020-8-31",
    "2020-9-30",
    "2020-10-31",
    "2020-11-30",
    "2020-12-31",
    "2021-1-31",
    "2021-2-28",
    "2021-3-31",
    "2021-4-30",
    "2021-5-31",
    "2021-6-30",
    "2021-7-31",
    "2021-8-31",
    "2021-9-30",
    "2021-10-31",
    "2021-11-30",
    "2021-12-31",
    "2022-1-31",
    "2022-2-28",
    "2022-3-31",
    "2022-4-30",
    "2022-5-31",
    "2022-6-30",
    "2022-7-31",
    "2022-8-31",
    "2022-9-30",
    "2022-10-31",
    "2022-11-30",
    "2022-12-31",
    "2023-1-31",
    "2023-2-28",
    "2023-3-31",
    "2023-4-30",
    "2023-5-31",
    "2023-6-30"
]
const s1Data = [
    262.1,
    268.85,
    273.99,
    269.62,
    280.85,
    277.38,
    285.49,
    295.22,
    291.78,
    287.5,
    302.37,
    297.59,
    300.38,
    304.15,
    297.25,
    307.37,
    287.88,
    282.92,
    306.2,
    305.75,
    303.95,
    291.91,
    289.59,
    308.66,
    305.41,
    311.12,
    315.56,
    325.48,
    323.95,
    325.71,
    319.63,
    318.5,
    325.04,
    335.32,
    348.36,
    352.31,
    358.7,
    368.55,
    366.15,
    375.78,
    379.31,
    381.67,
    391.05,
    400.85,
    403.72,
    425.82,
    409.87,
    401.04,
    400.99,
    407.41,
    412.27,
    425.35,
    436.05,
    436.51,
    411.67,
    418.36,
    386.43,
    414.53,
    425.76,
    436.97,
    452.96,
    426.42,
    454.03,
    458.41,
    456.15,
    466.2,
    476.57,
    487.14,
    503.8,
    508.2,
    469.25,
    418.32,
    462.84,
    485.47,
    501.87,
    533.72,
    574.17,
    553.11,
    539.68,
    595.26,
    619.96,
    617.56,
    621.66,
    643.69,
    673.85,
    676.37,
    687.78,
    680.7,
    697.01,
    664.82,
    695.65,
    682.88,
    705.07,
    672.62,
    650.87,
    659.59,
    615.16,
    615.24,
    588.31,
    610.99,
    594.2,
    533.42,
    545.21,
    602.51,
    583.72,
    626.52,
    600.41,
    625.45,
    626.7,
    615.97,
    651.29
]
const s2Data = [
    213.41,
    217.79,
    221.78,
    218.31,
    223.24,
    217.29,
    218.76,
    223.28,
    219.79,
    215.87,
    228.64,
    225.24,
    230.6,
    231.58,
    226.29,
    230.43,
    215.29,
    207.48,
    223.98,
    223,
    219.18,
    206.13,
    204.73,
    218.78,
    222.37,
    223.81,
    221.41,
    230.82,
    231.14,
    232.48,
    228.05,
    231.49,
    237.12,
    242.9,
    249.78,
    252.63,
    256.5,
    262.13,
    263.24,
    269.62,
    270.16,
    276.35,
    281.64,
    287.9,
    291.89,
    307.38,
    294.79,
    288.59,
    292.07,
    294.11,
    294.08,
    303.35,
    307.27,
    309.13,
    286.5,
    289.92,
    268,
    288.96,
    297.81,
    301.96,
    312.82,
    295.03,
    314.6,
    316.25,
    309.96,
    316.71,
    324.86,
    334.08,
    344.22,
    342.23,
    313.43,
    272.15,
    302.09,
    316.87,
    325.4,
    341.09,
    364.04,
    351.64,
    340.94,
    384.67,
    401.13,
    397.25,
    407.58,
    421.42,
    441.2,
    447.79,
    454.62,
    462.89,
    474.57,
    455.07,
    480.98,
    470.6,
    490.85,
    464.98,
    453.22,
    465.66,
    426.98,
    427.3,
    390.29,
    421.27,
    403.66,
    366.14,
    392.43,
    419.72,
    401.89,
    430.33,
    419.98,
    432.96,
    440.55,
    436.5,
    462.9
]
Highcharts.chart('container', {
    chart: {
        type: 'spline',
        scrollPositionX: 1
    },
    title: {
        text: ''
    },

    xAxis: {
        categories: xData,
        labels: {
            overflow: 'justify',
            formatter: function () {
                const newDate = new Date(this.value);
                return newDate.getFullYear();

            }
        },
        tickInterval: 11,
        crosshair: true,
        lineWidth: 0,
        lineColor: 'transparent',

    },
    plotOptions: {
        spline: {
            lineWidth: 3,
            states: {
                hover: {
                    lineWidth: 4,

                }
            },
            marker: {
                enabled: false
            },
        },
    },

    yAxis: {
        title: {
            text: '' // Remove Y-axis title text
        },
        tickWidth: 1,
        crosshair: true,
        lineWidth: 0,
        lineColor: 'transparent',


        opposite: false,
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },
    tooltip: {
        valueSuffix: ' %',
        borderRadius: 16,
        split: true
    },
    legend: {
        enabled: true
    },
    accessibility: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Core Equity100 Portfolio',
        data: s1Data,
        color: '#235DD1',

    }]
});



{/* <div id="container"></div>  */ }
//  <script> 
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        backgroundColor: '#f7f8fc',
        scrollPositionX: 1
    },
    title: {
        text: ''
    },
    tooltip: {
        valueSuffix: ' %',
        borderRadius: 16,
        split: false,

    },
    plotOptions: {
        pie: {
            innerSize: '50%',
            depth: 45,
            dataLabels: {
                enabled: false // Disable data labels
            }
        }
    },
    series: [{
        name: 'Data',
        data: [
            {
                name: 'reit',
                y: 35,
                color: '#01877F'
            },
            {
                name: 'reit+',
                y: 65,
                color: '#2F51C9'
            }
        ]
    }]
})

// </script>
// 