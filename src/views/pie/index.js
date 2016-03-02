module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            pieChartOption: {}
        }
    },
    created: function () {
        var vm = this;

        vm.pieChartOption = {
            tooltip : {},
            series : [
                {
                    name:'Num',
                    type:'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'A'},
                        {value:310, name:'B'},
                        {value:274, name:'C'},
                        {value:235, name:'D'},
                        {value:400, name:'E'}
                    ].sort(function (a, b) { return a.value - b.value}),
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
    }
};