var Vue = require('vue');
var echarts = require('echarts');

module.exports = {
    deep: true,
    params: ['chart-id'],
    bind: function () {
        var _this = this;

        if (!_this.vm.$echarts) {
            _this.vm.$echarts = {};
        }

        Vue.nextTick(function () {
            _this.instance = echarts.init(_this.el);
            _this.vm.$echarts[_this.params.chartId] = _this.instance;

            _this.resizeEventHandler = function () {
                _this.instance.resize();
            };

            _this.el.addEventListener('resize', _this.resizeEventHandler, false);

            window.onresize = function () {
                _this.el.dispatchEvent(new Event('resize'));
            };
        });
    },
    update: function (val, oldVal) {
        var _this = this;
        var options = val;

        Vue.nextTick(function () {
            _this.instance.setOption(options);
        });
    },
    unbind: function () {
        var _this = this;

        _this.instance.dispose();
        delete _this.vm.$echarts[_this.params.chartId];

        _this.el.removeEventListener('resize', _this.resizeEventHandler, false);
    }
};