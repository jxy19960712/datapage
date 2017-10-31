Ext.define('SinoSoft.view.module.home.messages.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'messages-browse',
    requires: [
        'SinoSoft.view.util.imagechoosebydiv.view',
        'SinoSoft.view.module.home.messages.viewmodel',
    ],
    viewModel: 'messages',
    tbar: {
        items: [
            {
                text: '添加',
                handler: function (btn) {
                    var view = btn.ownerCt.ownerCt;
                    var imagechooseview = view.down("imagechoosebydivview");
                    imagechooseview.setValue([
                        'resources/images/user-profile/1.png',
                        'resources/images/user-profile/2.png',
                        'resources/images/user-profile/3.png',
                        'resources/images/user-profile/4.png'
                    ]);
                }
            },
            {
                text: '保存',
                handler: function (btn) {
                    var view = btn.ownerCt.ownerCt;
                    var imagechooseview = view.down("imagechoosebydivview");
                    console.log(imagechooseview.getValue());
                }
            }
        ]
    },
    items: [
        {
            xtype: 'form',
            header: {
                items: [
                    {
                        xtype: 'combo',
                        store: 'files',
                        //queryMode: 'local',
                        displayField: 'text',
                        valueField: 'value',
                        editable: false,
                        store: Ext.create('Ext.data.Store', {
                            data: [{ text: 'A', value: 1 }, { text: 'B', value: 2 }, { text: 'C', value: 3 }, { text: 'D', value: 4 }]
                        }),
                        fieldLabel: '下拉框'
                    },
                ]
            },
            title: '消息1',
            items: [
                //在这里下面 跟上写就行了
                {
                    xtype:'button',
                    text:'aaa'
                },
                {
                    xtype: 'imagechoosebydivview',
                    //value: 'resources/images/user-profile/1.png',
                    single:false,
                },
                {
                    xtype: 'progress',
                    bind: '{value}'
                },
                {
                    xtype: 'slider',
                    width: 200,
                    minValue: 0,
                    maxValue: 1,
                    bind: '{value}',
                    publishOnComplete: false,
                    decimalPrecision: 2
                },
                {
                    xtype: 'progressbar',
                    width: 200,
                    bind: '{value}',
                },
            ],
            buttons: [
                {
                    text: '提交',
                    handler: function (btn) {
                        btn.ownerCt.ownerCt.submit({
                            url:'aaa',
                        });
                    }
                }
            ]
        }
    ]
});
