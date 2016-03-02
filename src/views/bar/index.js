module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            barChartOption: {}
        }
    },
    created: function () {
        var vm = this;

        vm.barChartOption = {
            tooltip: {},
            xAxis: {
                data: ['A', 'B', 'C', 'D', 'E']
            },
            yAxis: {},
            series: [
                {
                    name: 'Num',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        }
    }
};