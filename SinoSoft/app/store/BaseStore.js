Ext.define('SinoSoft.store.BaseStore', {
    extend: 'Ext.data.Store',
    alias: 'widget.basestore',
    config: {
        callbackfun: null,
        errorfun:null,
        index: 0,
    },
    proxy: {
        type: 'ajax',
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'count',
            successProperty: 'success',
            messageProperty: 'msg'
        }
    },
    listeners: {
        load: function (store, records, successful, eOpts) {
            if (!successful) {
                if (Ext.isObject(eOpts.error)) {
                    Ext.Msg.alert('提示', '服务器连接失败');
                } else {
                    if (eOpts.error.indexOf(';') == -1) {
                        Ext.Msg.alert('提示', '服务器连接失败');
                    } else {
                        var results = eOpts.error.split(';');
                        switch (results[0]) {
                            case '1':
                                Ext.Msg.alert('提示', results[1]);
                                BD.StopIM();
                                Ext.create({
                                    xtype: 'login',
                                    isReLoad: true
                                });
                                break;
                            default:
                                Ext.Msg.alert('提示', results[1]);
                                break;
                        }
                    }
                }
                var errorfun = store.getErrorfun();
                if (Ext.isFunction(errorfun)) {
                    errorfun(store);
                }
            } else {
                var callbackfun = store.getCallbackfun();
                if (Ext.isFunction(callbackfun)) {
                    callbackfun(store, records);
                }
            }
        }
    }
});