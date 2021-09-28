var ec_bar_r1 = echarts.init(document.getElementById('r1'));

var colors = ['#5470C6', '#91CC75', '#EE6666'];

bar_r1_option = {
    color: colors,
    title: {
        text: 'NBA球员身高统计',
        textStyle: {
            color: '#235894'
            }
        },

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['身高最大值', '身高最小值', '身高平均值']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '身高最大值',
            min: 0,
            max: 3,
            position: 'right',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} m'
            }
        },
        {
            type: 'value',
            name: '身高最小值',
            min: 0,
            max: 3,
            position: 'right',
            offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} m'
            }
        },
        {
            type: 'value',
            name: '身高平均值',
            min: 0,
            max: 3,
            position: 'left',
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} m'
            }
        }
    ],
    series: [
        {
            name: '身高最大值',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '身高最小值',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '身高平均值',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
ec_bar_r1.setOption(bar_r1_option);