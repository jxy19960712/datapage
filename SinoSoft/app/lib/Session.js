//配置信息
Ext.define('SinoSoft.lib.Session', {
    alternateClassName: 'session',
    statics: {
        setItem: function (key,value) {
            session.data[key] = value;
            window.localStorage.setItem(key, value);
        },
        getItem: function (key) {
            return session.data[key];
        },
        removeItem: function (key) {
            delete session.data[key];
            window.localStorage.removeItem(key);
        },
        data: {},//此处data为一个json对象集合，内部对象结构为:{key:'sex',values:[{text:'男',value:1},{text:'女',value:2}],vision:'0'}
        initSession: function () {
            var keys = window.localStorage.getKeys();
            Ext.each(keys, function (key) {
                session.data[key] = window.localStorage.getItem(key);
            })
        },
        //根据从服务器获取的新的数据版本文件计算那些数据需要更新，并返回一个需要更新的key集合
        checkVision: function (newvision) {//newvision is json array   {key:'',vision:1}
            var needupdatekeys = [];
            Ext.each(newvision, function (item) {
                if (session.data.hasOwnProperty(item.key)) {
                    var key = item.key;
                    if (session.data[key].vision != newvision[key]) {
                        needupdatekeys.push(key);
                    }
                } else {
                    needupdatekeys.push(key);
                }
            });
            return needupdatekeys;
        }
    }
});

