var Vue = require('vue');
var echarts = require('echarts');

module.exports = {
    deep: true,
    params: ['loading'],
    paramWatchers: {
        loading: function (val, oldVal) {
            var _this = this;

            if (val === true) {
                _this.instance.showLoading();
            } else {
                _this.instance.hideLoading();
            }
        }
    },
    bind: function () {
        var _this = this;

        Vue.nextTick(function () {
            // init echarts instance
            _this.instance = echarts.init(_this.el);

            // show loading animation
            if (_this.params.loading === true) {
                _this.instance.showLoading();
            }

            // auto resize
            // var resizeEvent = new Event('resize');  ie9,10 no work

            _this.resizeEventHandler = function () {
                _this.instance.resize();
            };

            _this.el.addEventListener('resize', _this.resizeEventHandler, false);

            if(window.attachEvent){
                window.attachEvent('onresize',_this.resizeEventHandler);
            }else{
                window.addEventListener('resize', _this.resizeEventHandler, false);
            }  
        });
    },
    update: function (val, oldVal) {
        var _this = this;
        var options = val;

        Vue.nextTick(function () {
            _this.instance.clear(); // echarts Redraw
            _this.instance.setOption(options);
        });
    },
    unbind: function () {
        var _this = this;

        _this.instance.dispose();

        if(window.attachEvent){
            window.detachEvent('onresize',_this.resizeEventHandler);
        }else {
            window.removeEventListener('resize', _this.resizeEventHandler, false);;
        }
    }
};