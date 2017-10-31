Ext.define('SinoSoft.store.BaseTreeStore', {
    extend: 'Ext.data.TreeStore',
    pageSize: 0,
    config: {
        callbackfun: null
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
            //rootProperty: 'data',
            //totalProperty: 'count',
            //successProperty: 'success',
            //messageProperty: 'msg'
        }
    },
    model: 'SinoSoft.model.ModuleTree',
    root: {
        text: '树根',
        id: '0',
        expanded: true
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

            } else {
                var callbackfun = store.getCallbackfun();
                if (Ext.isFunction(callbackfun)) {
                    callbackfun(store, records);
                }
            }
        }
    }
});
