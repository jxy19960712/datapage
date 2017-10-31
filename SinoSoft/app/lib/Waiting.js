//配置信息
Ext.define('SinoSoft.lib.Waiting', {
    alternateClassName: 'waiting',
    statics: {
        waitingwin: null,
        isShow:false,
        show: function (key, value) {
            if (!waiting.isShow) {
                waitingwin = Ext.create("SinoSoft.util.WaitingWindow");
                waiting.isShow = true;
            }
        },
        close: function (key) {
            if (waiting.isShow) {
                waiting.isShow = false;
                waitingwin.close();
            }
        }
    }
});