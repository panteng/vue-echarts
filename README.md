# Vue-Echarts

A custom directive for using [Echarts](http://echarts.baidu.com/) in Vue.js apps.

![banner](https://raw.githubusercontent.com/panteng/vue-echarts/master/banner.jpg)

[Demo](http://panteng.me/demos/vue-echarts)

## Usage

1. Download this repo and copy file `./src/directives/echarts.js` into your project.

2. Register Vue-Echarts as a directive in your `main.js`:

        Vue.directive('echarts', require('./directives/echarts'));  //  your project structure may be different from mine, so feel free to change the path of `echart.js`.
       
3. Echarts need a dom element to draw charts. You can use a `<div>` for that. Make sure you give a proper width and height for this `<div>`.
    
        // template.html
        <div class="chart"></div>
        
        // style.css
        .chart {
            width: 100%;
            height: 400px;
        }

4. Add `v-echarts` directive to this `div` and assign a value to it. This value contains all the options for this echarts instanse. You need to define it in the scope.
 
        // template.html
        <div class="chart" v-echarts="barChartOption"></div>
        
        // index.js
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
        };
        
5. If your charts get data from a server and you want loading effects before data returns, there's a property to do this.

        <div class="chart" v-echarts="barChartOption" :loading="barChartLoading"></div>
    
    set `barChartLoading` to false before you make a ajax call and set `barChartLoading` to true when the ajax call finished.
    
6. Every time you change the value of `barChartOption`, the chart will immediately reflect the change you've made. You can use this way to make real-time charts, combining with socket technologies.

## License

MIT