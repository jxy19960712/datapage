Ext.define('SinoSoft.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function () {
        waiting.show();
        var view = this.getView();
        view.destroy();
        Ext.fireEvent("initviewport");
        //Ext.create({
        //    xtype: 'mainView'
        //});
        //Ext.getApplication().setDefaultToken("dashboard");
        //this.redirectTo('dashboard', true);
        //下面的代码为参考代码
        //window.localStorage.setItem('LogName', txtloginname.dom.value);
        //window.localStorage.setItem('LogPwd', txtloginpwd.dom.value);
        //var isReLoad = view.getIsReLoad();
        //view.destroy();
        //if (isReLoad) {
        //    if (BD.WorkerInfo.WorkerId == datas.WorkerId) {
        //        BD.WorkerInfo = datas;
        //    } else {
        //        BD.WorkerInfo = datas;
        //        BD.main.destroy();
        //        BD.main = Ext.create({
        //            xtype: 'app-main'
        //        });
        //    }
        //} else {
        //    BD.WorkerInfo = datas;
        //    BD.main = Ext.create({
        //        xtype: 'app-main'
        //    });
        //}
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});