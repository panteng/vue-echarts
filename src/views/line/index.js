module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            lineChartOption: {}
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
                    data : ['Mon','Thu','Wed','Tue','Fri','Sat','Sun']
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
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

    }
};