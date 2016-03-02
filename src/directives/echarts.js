var Vue = require('vue');
var echarts = require('echarts');

module.exports = {
    deep: true,
    params: ['id', 'option'],
    paramWatchers: {
        option: function (val, oldVal) {
            var _this = this;
            _this.instance.setOption(val);
        }
    },
    bind: function () {
        var _this = this;

        if (!_this.vm.$echarts) {
            _this.vm.$echarts = {};
        }

        Vue.nextTick(function () {
            _this.instance = echarts.init(_this.el);
            _this.instance.setOption(_this.params.option);
            _this.vm.$echarts[_this.params.id] = _this.instance;

            _this.resizeEventHandler = function () {
                _this.instance.resize();
            };

            _this.el.addEventListener('resize', _this.resizeEventHandler, false);

            window.onresize = function () {
                _this.el.dispatchEvent(new Event('resize'));
            };
        });
    },
    unbind: function () {
        var _this = this;

        _this.instance.dispose();
        delete _this.vm.$echarts[_this.params.id];

        _this.el.removeEventListener('resize', _this.resizeEventHandler, false);
    }
};