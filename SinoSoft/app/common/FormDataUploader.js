/**
 * 使用formdata进行数据和文件提交
 */
Ext.define('SinoSoft.common.FormDataUploader', {
    alternateClassName: 'FormUploaderByAjax', //设置别名是为了方便调用，这样直接config.ip就能获取到变量。
    requires: [
       'SinoSoft.ux.uploadprogress.window'
    ],
    statics: {
        upload: function (options)
        {            
            var url = options.url,//提交路径
                method = 'POST',
                urlparams = options.urlparams || {},//需要加在url上的参数
                params = options.params || {},//需要post提交的参数
                files = options.files || {},//需要提交的文件
                //waitmeg = options.waitmeg || '正在提交...',//
                wrongself = options.wrongself || false,//错误信息是否自己处理
                successhandler = options.success,//
                failurehandler = options.failure,//
                //progresshandler = options.progress,//
                hasfile = files.length > 0,//
                loadedlength = 0,
                begintime = starttime = new Date();
            var upwin = Ext.create('SinoSoft.ux.uploadprogress.window');
            upwin.show();
            url = Ext.urlAppend(url, Ext.Object.toQueryString(urlparams));

            var xhr = new XMLHttpRequest();

            var formData = new FormData();
            for (var key in params) {
                formData.append(key, params[key]);
            }
            for (var key in files) {
                for (var i = 0; i < files[key].length; i++) {
                    //formData.append(key + '_' + i, files[key][i]);
                    formData.append(key, files[key][i]);
                }
            }
            xhr.addEventListener("loadend", function (event) {
                var response = event.target;
                upwin.close();
                if (response.status == 200) {
                    var data = Ext.decode(response.responseText);
                    if (data.success) {
                        if (successhandler) {
                            successhandler(data.data, data.message);
                        }
                    } else {
                        ErrorHandler.handleError({
                            showErrorbySelf: wrongself,
                            onFailure: failurehandler,
                            message: data.message,
                            quiet: false,
                            onSessionMiss: function () {
                                //BD.StopIM();//如果需要在sessdion过期后关闭什么功能在这里写代码
                            }
                        });
                    }
                    
                } else {
                    ErrorHandler.handleError({
                        showErrorbySelf: wrongself,
                        onFailure: failurehandler,
                        message: null,
                        quiet: false
                    });
                }


            }, false);
            xhr.upload.addEventListener("progress", function (event) {
                var loadedadd=event.loaded-loadedlength;
                loadedlength = event.loaded;
                var lasttime = new Date();
                var time = lasttime - starttime;
                var usetime = lasttime - begintime;//已用时
                starttime = lasttime;
                var total = event.total;
                var yu = total - loadedlength;
                var speed = parseFloat(loadedadd / time);//速度毫秒
                var yutime = parseFloat(yu / speed);//剩余时间
                var per = parseFloat(loadedlength / total).toFixed(3);//进度以小数表示
                upwin.updatetext(
                    FormUploaderByAjax.formattime(usetime),
                    FormUploaderByAjax.formattime(yutime),
                    per,
                    FormUploaderByAjax.formatspeed(speed * 1000)
                    );
            }, false);

            xhr.open(method, url, true);
            xhr.send(formData);

        },
        formatspeed: function (speed) {
            var units = ["B/S", "KB/S", "MB/S", "GB/S", "TB/S"];
            var index = 0;
            while (speed > 1024)
            {
                if (index < units.length)
                {
                    speed /= 1024;
                    index++;
                }
                else
                {
                    break;
                }
            }
            speed = speed.toFixed(2);
            return Ext.String.format("{0}{1}", speed, units[index]);
        },
        formattime: function (timespan) {
            var s = timespan / 1000;
            var m = h = d = 0;
            if (s > 59) {
                m = parseInt(s / 60);
                s = parseFloat(s % 60).toFixed(3);
            } else {
                s = s.toFixed(3);
            }
            if (m > 59) {
                h = parseInt(m / 60);
                m = m % 60;
            }
            if (h > 23) {
                d = parseInt(h / 24);
                h = h % 60;
            }

            var str = d > 0 ? (d + "d  ") : "";
            str += (h > 0 ? ((h >= 10 ? h : '0' + h)) : '00') + ":";
            str += (m > 0 ? ((m >= 10 ? m : '0' + m)) : '00') + ':';
            str += s > 0 ? ((s >= 10 ? s : '0' + s)) : '00';
            return str;
        },
    }
});