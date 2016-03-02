module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            lineChartOption: null
        }
    },
    created: function () {
        var vm = this;


        vm.lineChartOption = {
            tooltip : {
                trigger: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Num',
                    type:'line',
                    areaStyle: {normal: {}},
                    data: [52, 54, 60, 61, 65, 62, 80, 85, 90, 99, 40, 30, 20, 10, 0]
                }
            ]
        };

        setInterval(function () {
            vm.addChartData();
        }, 1000);
    },
    methods: {
        addChartData: function () {
            var vm = this;
            vm.lineChartOption.xAxis[0].data.push(Math.round(vm.lineChartOption.xAxis[0].data[vm.lineChartOption.xAxis[0].data.length - 1] + 1));
            vm.lineChartOption.xAxis[0].data.shift();
            vm.lineChartOption.series[0].data.push(Math.round(Math.random() * 100));
            vm.lineChartOption.series[0].data.shift();
        }
    }
};