/**
 * Ext.Ajax扩展
 */
Ext.define('SinoSoft.common.AjaxEx', {
    alternateClassName: 'AjaxEx', //设置别名是为了方便调用，这样直接config.ip就能获取到变量。
    statics: {
        doAjax: function (options)
        {
            options.quiet = options.quiet || false;
            if(options.async == undefined) {
                options.async = true;
            }
            //options.async = options.async ? options.async : true;
            if (!options.quiet) {
                Waiting.show(options.meg || '正在查询...', "提示");
            }
            Ext.Ajax.request({
                url: options.url,
                method: options.method,
                params:options.params,
                async: options.async,
                timeout: options.timeout || 30000,
                success: function (response, opts) {
                    if (!options.quiet) {
                        Waiting.close();
                    }
                    var data = Ext.decode(response.responseText);
                    if (data.success) {
                        if (options.success) {
                            options.success(data.data, data.message);
                        }
                    } else {
                        ErrorHandler.handleError({
                            showErrorbySelf: options.wrongself,
                            onFailure: options.failure,
                            message: data.message,
                            quiet: options.quiet,
                            onSessionMiss: function () {
                                //BD.StopIM();//如果需要在sessdion过期后关闭什么功能在这里写代码
                            }
                        });
                    }                    
                },
                failure: function (response, opts) {
                    if (!options.quiet) {
                        Waiting.close();
                    }
                    ErrorHandler.handleError({
                        showErrorbySelf: options.wrongself,
                        onFailure: options.failure,
                        message: null,
                        quiet: options.quiet
                    });
                }
            });
        }
    }
});