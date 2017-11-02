/**
 * 统一的错误处理器
 */
Ext.define('SinoSoft.common.ErrorHandler', {
    alternateClassName: 'ErrorHandler', //设置别名是为了方便调用，这样直接config.ip就能获取到变量。
    statics: {
    	handleError: function (option) {
            var _showErrorbySelf = option.showErrorbySelf || false;//是否自己处理错误方法
            var _failure = option.onFailure || undefined;//自己处理错误方法是的错误回调函数
            var _failureType = option.failureType || undefined;//如果是form.submit提交的则需要判断改项
            var _message = option.message || '';//传入的错误提示
            var _sessionmiss = option.onSessionMiss || undefined;//session丢失后需要执行的特殊处理，在login窗口打开之前执行
            var _quiet = false;//静默处理
            if (option.quiet != undefined) {
                _quiet = option.quiet;
            }
            var _emsg = '';
            if (_failureType && _failureType == "connect") {
                _emsg = "服务器连接失败！";
            } else {
                if (Ext.isObject(_message)) {
                    _emsg = "服务器连接失败！";
                } else {
                    var results = _message.split(';');
                    if (results.length == 2) {
                        switch (results[0]) {
                            case '1':
                                _emsg = results[1];//如果session丢失的错误信息不需要服务器传过来，在这里自定义
                                if (Ext.isFunction(_sessionmiss)) {
                                    _sessionmiss();
                                }
                                _quiet=true;
                                if(!SinoSoft.view.main.LoginWindow.isOpen()){
                                    Ext.create({
                                        xtype: 'main.loginwindow',
                                        isReLoad: true
                                    });
                                }
                                break;
                            default:
                                _emsg = results[1];
                                break;

                        }
                    } else {
                        _emsg = "服务器连接失败！";
                    }
                }
            }
            if (_showErrorbySelf) {
                if (Ext.isFunction(_failure)) {
                    _failure(_emsg);
                }
            } else {
                if (!_quiet) {
                    Ext.Msg.alert('提示', _emsg);//如果不使用alert，在这里自定义弹出提示窗
                }
            }
        }
    }
});