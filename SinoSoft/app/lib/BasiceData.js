//基础数据
Ext.define('SinoSoft.lib.BasiceData', {
    alternateClassName: 'BD', //设置别名是为了方便调用，这样直接config.ip就能获取到变量。
    statics: {
        GuidCode: null,
        WorkerInfo:null,
        DoAjax: function (options)
        {
            var quiet = false;//静默处理
            if (options.quiet != undefined) {
                quiet = options.quiet;
            }
            Ext.Ajax.setTimeout(options.timeout || 30000);
            if (!quiet) {
                waiting.show();
            }
            Ext.Ajax.request({
                url: options.url,
                method: options.method,
                params:options.params,
                success: function (response, opts) {
                    if (!quiet) {
                        waiting.close();
                    }
                    var data = Ext.decode(response.responseText);
                    if (data.success) {
                        if (options.success) {
                            options.success(data.data, data.msg);
                        }
                    } else {
                        var results = data.msg.split(';');
                        switch (results[0]) {
                            case '1':
                                if (!quiet) {
                                    Ext.Msg.alert('提示', results[1]);
                                }
                                if (options.failure) {
                                    options.failure();
                                }
                                BD.StopIM();
                                Ext.create({
                                    xtype: 'login',
                                    isReLoad:true
                                });
                                break;
                            default:
                                if (!options.wrongself) {
                                    if (!quiet) {
                                        Ext.Msg.alert('提示', results[1]);
                                    }
                                    if (options.failure) {
                                        options.failure();
                                    }
                                } else {
                                    if (options.failure) {
                                        options.failure(results[1]);
                                    }
                                }
                                
                                break;

                        }
                    }                    
                },
                failure: function (response, opts) {
                    if (!quiet) {
                        waiting.close();
                        Ext.Msg.alert("提示", "服务器未开启，请联系管理员");
                    }
                    if (options.failure) {
                        options.failure();
                    }
                }
            });
        },
        formats: ['Y-m-d H:i:s.u', 'Y-m-d H:i:s', 'Y-m-d', 'Y-m-d H:i'],
        GetDate: function (value) {
            if (!Ext.isDate(value)) {
                if (value != null) {
                    if (value.indexOf("/Date") != -1) {
                        value = value.replace("/Date(", "").replace(")/", "");
                        value = new Date(value * 1);
                    } else if (value.indexOf("T") != -1) {
                        if (value == "0001-01-01T00:00:00") {
                            value = null;
                        } else {
                            value = value.replace("T", " ");
                            value = BD.getValueByFormats(value);
                        }
                    }
                }
            }
            return value;
        },
        GetDateFormat: function (value, format) {
            if (!Ext.isDate(value)) {
                if (value != null) {
                    if (value.indexOf("/Date") != -1) {
                        value = value.replace("/Date(", "").replace(")/", "");
                        value = new Date(value * 1);
                    } else if (value.indexOf("T") != -1) {
                        if (value == "0001-01-01T00:00:00") {
                            value = null;
                        } else {
                            value = value.replace("T", " ");
                            value = BD.getValueByFormats(value);
                        }
                    }
                }
            }
            return Ext.Date.format(value, format);
        },
        getValueByFormats: function (value) {
            for (var i = 0; i < BD.formats.length; i++) {
                var a = Ext.Date.parse(value, BD.formats[i]);
                if (a!=null) {
                    return a;
                }
            }
            return null;
        },
        StartIM: function () {
            BD.openmegtimer = Ext.isBoolean(BD.WorkerInfo.SettingsDic["33"]) ? BD.WorkerInfo.SettingsDic["33"] : BD.WorkerInfo.SettingsDic["33"].toLowerCase() == 'true';
            BD.toasts = {};
            if (BD.openmegtimer) {
                BD.task = { //Ext的定时器，每隔1秒刷新store。  
                    run: function () {
                        BD.DoAjax({
                            url: config.url + 'appid=1&method=244&token=' + BD.GuidCode,
                            quiet: true,
                            method: 'Post',
                            params: { needpage: false, readed: false },
                            success: function (datas) {
                                for (var i = 0; i < datas.length; i++) {
                                    var t = Ext.toast({
                                        title: '系统提示',
                                        html: datas[i].Content,
                                        align: 'br',
                                        autoClose: false,
                                        closable: true,
                                        width: 300,
                                        maxWidth: 300,
                                        minWidth: 300,
                                    });
                                    BD.toasts[t.getId()] = t;
                                }
                            },
                            failure: function () {

                            }
                        });

                    },
                    interval: Ext.isNumber(BD.WorkerInfo.SettingsDic["37"]) ? BD.WorkerInfo.SettingsDic["37"] : 10000
                    // 2 second   
                }
                Ext.TaskManager.start(BD.task);//启动定时器
            }
        },
        StopIM:function(){
            if (BD.openmegtimer) {
                Ext.TaskManager.stop(BD.task);//关闭定时器
                for (var t in BD.toasts) {
                    if (BD.toasts[t]) {
                        BD.toasts[t].hide();
                    }
                }
            }
        }
    }
});