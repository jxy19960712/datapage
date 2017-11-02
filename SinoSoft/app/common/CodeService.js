/**
 * 缓存
 */
Ext.define('SinoSoft.common.CodeService', {
    alternateClassName: 'CodeService',
    requires: [
         'SinoSoft.common.LocalData',
    ],
    statics: {
        
        initialize: function () {
            AjaxEx.doAjax({
                method: 'POST',
                url: 'system/codeItem/getAllCodeVersion',
                async: true,
                success: function(data){
                    //console.log(data);
                    var codeTypeSet = CodeService.checkVersion(data);
                    //console.log(codeTypeSet);
                    if(codeTypeSet.length != 0) {
                        AjaxEx.doAjax({
                            method: 'POST',
                            url: 'system/codeItem/getCodeSetByType',
                            params: {codeType: Ext.encode(codeTypeSet)},
                            async: true,
                            success: function(data){
                                //console.log(data);
                                                       
                                for(var i=0; i<data.length; i++) {
                                    var itemData = data[i].data;
                                    var standardData = CodeService.getStandardData(itemData);
                                    data[i].data = standardData;
                                }
                                //console.log(data);
                                for(var i=0; i<data.length; i++) {
                                    var obj = data[i];
                                    LocalData.setItem(obj.codeType, obj);
                                }
                            }
                        });
                    }
                }
            });
        },
        getCodeItems: function (codeType) {
            /* 返回的内容 */
            var codeData;
            
            var value = LocalData.getItem(codeType);
            if(value == undefined) {
                var codeTypeSet = [];
                codeTypeSet.push(codeType);
                AjaxEx.doAjax({
                    method: 'POST',
                    url: 'system/codeItem/getCodeSetByType',
                    params: {codeType: Ext.encode(codeTypeSet)},
                    async: true,
                    success: function(data){
                        
                        for(var i=0; i<data.length; i++) {
                            var itemData = data[i].data;
                            var standardData = CodeService.getStandardData(itemData);
                            data[i].data = standardData;
                        }
                        codeData = data;
                        for(var i=0; i<data.length; i++) {
                            var obj = data[i];
                            LocalData.setItem(obj.codeType, obj);
                        }
                    }
                });
            } else {
                codeData = value.data;
            }
            return codeData;
        },
        removeItem: function (codeType) {
            LocalData.removeItem(codeType);
        },
        init: function () {
            LocalData.storage = Ext.util.LocalStorage.get('SinoSoft');
            //LocalData.storage.clear();
            console.log(LocalData.storage);
        },
        //根据从服务器获取的新的数据版本文件计算那些数据需要更新，并返回一个需要更新的key集合
        checkVersion: function (newversion) {//newversion is json array   [{key:'',vision:1}]
            var needupdatekeys = [];
            Ext.each(newversion, function (item) {
                var codeType = item.codeType;
                if (LocalData.data.hasOwnProperty(item.codeType)) {
                    if (LocalData.data[codeType].version != newversion[codeType]) {
                        needupdatekeys.push(codeType);
                    }
                } else {
                    needupdatekeys.push(codeType);
                }
            });
            return needupdatekeys;
        },
        getStandardData: function(data) {
            
            var standardData = [];
            
            for(var i=0; i<data.length; i++) {
                var obj = new Object();
                obj.code = data[i].code;
                obj.name = data[i].name;
                standardData.push(obj);
            }
            
            return standardData;
        }
    }
});
