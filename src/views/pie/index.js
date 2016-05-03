var Vue = require('vue');

module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            pieChartOption: null,
            pieChartLoading: false
        };
    },
    created: function () {
        var vm = this;

        vm.pieChartOption = {
            tooltip: {},
            series: [
                {
                    name: 'Num',
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    data: [],
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#555'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#555'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 50,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        vm.loadData();
    },
    methods: {
        loadData: function () {
            var vm = this;
            vm.pieChartLoading = true;
            // simulate ajax calls
            setTimeout(function () {
                vm.pieChartOption.series[0].data = [
                    { value:335, name:'A' },
                    { value:310, name:'B' },
                    { value:274, name:'C' },
                    { value:235, name:'D' },
                    { value:400, name:'E' }
                ].sort(function (a, b) { return a.value - b.value; });
                
                vm.pieChartLoading = false;
            }, 3000);
        }
    }
};