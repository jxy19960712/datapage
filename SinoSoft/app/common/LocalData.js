/**
 * 缓存
 */
Ext.define('SinoSoft.common.LocalData', {
    alternateClassName: 'LocalData',
    requires: [
         'Ext.util.LocalStorage',
    ],
    statics: {
        storage:null,
        data:{},
        setItem: function (key, value) {
            LocalData.data[key]=value;
            LocalData.storage.setItem(key,Ext.encode(value));
        },
        getItem: function (key) {
            return LocalData.data[key];
            //return Ext.decode(LocalData.storage.getItem(key));
        },
        removeItem: function (key) {
            delete LocalData.data[key];
            LocalData.storage.removeItem(key);
        },
        init: function () {
            LocalData.storage = Ext.util.LocalStorage.get('SinoSoft');
            var keys=LocalData.storage.getKeys();
            Ext.each(keys,function(key){
                LocalData.data[key]=Ext.decode(LocalData.storage.getItem(key));
            });
            console.log(LocalData.data);
            //LocalData.clear();
            //console.log(LocalData.data);
        },
        clear:function(){
            LocalData.data={};
            LocalData.storage.clear();            
        }
        //根据从服务器获取的新的数据版本文件计算那些数据需要更新，并返回一个需要更新的key集合
        //checkVision: function (newvision) {//newvision is json array   [{key:'',vision:1}]
        //    var needupdatekeys = [];
        //    Ext.each(newvision, function (item) {
        //        if (LocalData.data.hasOwnProperty(item.key)) {
        //            var key = item.key;
        //            if (LocalData.data[key].vision != newvision[key]) {
        //                needupdatekeys.push(key);
        //            }
        //        } else {
        //            needupdatekeys.push(key);
        //        }
        //    });
        //    return needupdatekeys;
        //}
    }
});

