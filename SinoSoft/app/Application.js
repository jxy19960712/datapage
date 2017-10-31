/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SinoSoft.Application', {
    extend: 'Ext.app.Application',

    name: 'SinoSoft',


    requires: [
        // This will automatically load all classes in the SinoSoft namespace
        // so that application classes do not need to require each other.
        'SinoSoft.*'
        
    ],
    stores: [
        'SinoSoft.store.Files',
        'SinoSoft.store.proxyfiles'
    ],
    //defaultToken: 'page404',
    mainView: 'SinoSoft.view.viewport.viewport',
    launch: function () {
        Ext.getBody().removeCls('launching');
        // Ext.create({
        //     xtype:'login'
        // });

        //-------------



        //Ext.create("SinoSoft.util.WaitingWindow");
        
        //var appPanel = Ext.create('Ext.window.Window', {
        //    title: 'Files',
        //    width: 600,
        //    height: 400,
        //    closable: true,
        //    modal: true,
        //    bodyPadding: 5,

        //    uploadComplete: function (items) {
        //        var output = '已上传文件: <br>';
        //        Ext.Array.each(items, function (item) {
        //            output += item.getFilename() + ' (' + item.getType() + ', '
        //                + Ext.util.Format.fileSize(item.getSize()) + ')' + '<br>';
        //        });

        //        this.update(output);
        //    },
        //});
        //appPanel.syncCheckbox = Ext.create('Ext.form.field.Checkbox', {
        //    inputValue: true,
        //    checked: true
        //});

        //appPanel.addDocked({
        //    xtype: 'toolbar',
        //    dock: 'top',
        //    items: [
        //        {
        //            xtype: 'button',
        //            text: 'Ajax上传',
        //            scope: appPanel,
        //            handler: function () {

        //                var uploadPanel = Ext.create('SinoSoft.util.upload.Panel', {
        //                    uploaderOptions: {
        //                        url: 'external/upload.php'
        //                    },
        //                    filenameEncoder: 'SinoSoft.util.upload.header.Base64FilenameEncoder',
        //                    synchronous: appPanel.syncCheckbox.getValue()
        //                });

        //                var uploadDialog = Ext.create('SinoSoft.util.upload.Dialog', {
        //                    dialogTitle: '上传列表',
        //                    modal: true,
        //                    panel: uploadPanel
        //                });
        //                console.log(this);
        //                this.mon(uploadDialog, 'uploadcomplete', function (uploadPanel, manager, items, errorCount) {
        //                    this.uploadComplete(items);
        //                    if (!errorCount) {
        //                        uploadDialog.close();
        //                    }
        //                }, this);

        //                uploadDialog.show();
        //            }
        //        }, '-', {
        //            xtype: 'button',
        //            text: 'FormData上传',
        //            scope: appPanel,
        //            handler: function () {

        //                var uploadPanel = Ext.create('SinoSoft.util.upload.Panel', {
        //                    uploader: 'SinoSoft.util.upload.uploader.FormDataUploader',
        //                    uploaderOptions: {
        //                        url: 'external/upload_multipart.php'
        //                    },
        //                    filenameEncoder: 'SinoSoft.util.upload.header.Base64FilenameEncoder',
        //                    synchronous: appPanel.syncCheckbox.getValue()
        //                });

        //                var uploadDialog = Ext.create('SinoSoft.util.upload.Dialog', {
        //                    dialogTitle: '上传列表',
        //                    modal: true,
        //                    panel: uploadPanel
        //                });

        //                this.mon(uploadDialog, 'uploadcomplete', function (uploadPanel, manager, items, errorCount) {
        //                    this.uploadComplete(items);
        //                    if (!errorCount) {
        //                        uploadDialog.close();
        //                    }
        //                }, this);

        //                uploadDialog.show();
        //            }
        //        }, '-', {
        //            xtype: 'button',
        //            text: '模拟上传',
        //            scope: appPanel,
        //            handler: function () {

        //                var uploadPanel = Ext.create('SinoSoft.util.upload.Panel', {
        //                    uploader: 'SinoSoft.util.upload.uploader.DummyUploader',
        //                    synchronous: appPanel.syncCheckbox.getValue()
        //                });

        //                var uploadDialog = Ext.create('SinoSoft.util.upload.Dialog', {
        //                    dialogTitle: '上传列表',
        //                    modal: true,
        //                    panel: uploadPanel
        //                });

        //                this.mon(uploadDialog, 'uploadcomplete', function (uploadPanel, manager, items, errorCount) {
        //                    this.uploadComplete(items);
        //                    if (!errorCount) {
        //                        uploadDialog.close();
        //                    }
        //                }, this);

        //                uploadDialog.show();
        //            }
        //        }, '->', appPanel.syncCheckbox, '同步上传'
        //    ]
        //});

        //appPanel.show();


    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
