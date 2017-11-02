/**
 * 等待窗口
 */
Ext.define('SinoSoft.common.Waiting', {
    alternateClassName: 'Waiting',
    statics: {
        waitingwin: null,
        isShow:false,
        show: function (meg, title) {
            if (!Waiting.isShow) {
                Ext.Msg.wait(meg || '正在查询...', title);
                //waitingwin = Ext.create("SinoSoft.view.share.WaitingWindow");
                Waiting.isShow = true;
            }
        },
        close: function (key) {
            if (Waiting.isShow) {
                Waiting.isShow = false;
                Ext.Msg.hide();
                //waitingwin.close();
            }
        }
    }
});