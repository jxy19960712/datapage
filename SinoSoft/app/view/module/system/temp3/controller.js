Ext.define('SinoSoft.view.module.system.temp3.controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tempcontroller',
    onPromptClick: function () {
        var win = Ext.create('Ext.window.Window', {
            modal: true,
            title: '学位基本信息',
            renderTo: Ext.getBody(),
            closeAction: 'hide',
            resizable:false,
            draggable:false,
            minimizable:true,
            layout: 'fit',
            width: '62.5%',
            // plain: false,
            items:[
                {
                    xtype: 'panel',
                    width: '100%',
                    cls: 'Wrapper-from',
                    padding: 10,
                    layout: 'column',
                    items: [
                        {
                            layout: 'form',
                            columnWidth: .3333,
                            border: false,
                            padding: 10,
                            items:[
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位证书编号',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位授予国家（地区）',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位授予时间',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位授予单位',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                            ]
                        },
                        {
                            layout: 'form',
                            columnWidth: .3333,
                            border: false,
                            padding: 10,
                            items:[
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位授予单位所在行政区划',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '最高学位标识',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位代码',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                            ]
                        },
                        {
                            layout: 'form',
                            columnWidth: .3333,
                            border: false,
                            padding: 10,
                            items:[
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '第二学位',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '教育类别',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: '学位名称',
                                    maxLength: 100,
                                    style: 'text-align:right'
                                },
                            ]
                        },
                    ]
                },
            ]
        });
        win.show();
    },
    data: {
        value:0.5
    },
});