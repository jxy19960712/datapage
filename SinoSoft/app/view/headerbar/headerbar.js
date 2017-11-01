/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SinoSoft.view.headerbar.headerbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'headerbar',
    cls:'Container-headerbar',
    requires: [
        'SinoSoft.view.headerbar.controller',
    ],

    controller: 'headerbar',
    // items: [
    //     //我是想在这里再加个组件
    //     {
    //         //这里吧样式 背景什么的 全写好
    //         cls:'Container-headerbar-log',
    //         xtype: 'container',
    //         //这第一种
    //         //html:'<div>这里和html dom写法一样</div>'
    //         items:[
    //             {
    //                 cls:'Container-headerbar-log-pic',
    //                 xtype:'container',
    //                 html:'<img src="images/logo.png">'
    //             },
    //             {
    //                 cls:'Container-headerbar-log-txt',
    //                 xtype:'container',
    //                 html:'<h1>毕节智慧组工 ● 干部云</h1>'
    //             },
    //
    //         ]
    //     },
    //     {
    //         cls:'Container-headerbar-btn',
    //         xtype: 'button',
    //         iconCls: 'x-fa fa-navicon',
    //         handler: 'onToggleNavigationSize'
    //     }
    // ]

    items: [
        {
            xtype: 'container',
            reference: 'senchaLogo',
            userCls: 'main-logo',
            cls:'Container-headerbar-log',
            width:250,
            items:[
                {
                    cls: 'Container-headerbar-log-pic',
                    xtype: 'container',
                    html: '<img src="images/logo.png">',
                },
                {
                    cls: 'Container-headerbar-log-txt',
                    xtype: 'container',
                    html: '<h1>毕节智慧组工 ● 干部云</h1>',
                },
            ]
        },
            {
                cls:'Container-headerbar-btn',
                xtype: 'button',
                iconCls: 'x-fa fa-navicon',
                handler: 'onToggleNavigationSize',
            }
    ]

});







//
//
// Ext.define('Admin.view.main.Toolbar', {
//     extend: 'Ext.Toolbar',
//     xtype: 'maintoolbar',
//
//     requires: [
//         'Ext.SegmentedButton'
//     ],
//
//
// });

