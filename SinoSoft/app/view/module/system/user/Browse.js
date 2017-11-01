Ext.define('SinoSoft.view.module.system.user.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'userbrowse',
    requires: [],
    controller: 'usercontroller',
    //viewModel:'music',

    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    defaults: {
        frame: true,
        margin: '0 5 0 0',
    },
    items: [
        {
            xtype: 'treepanel',
            store: 'files',
            width: '17.6%',
            cls: 'Container-section-select',
            expanderFirst: false,
            expanderOnly: false,
            singleExpand: false,
            listeners: {
                //itemclick:'ontreenodeclick'
            }
            //bind: '{navItems}'
        },
        {
            xtype: 'container',
            cls: 'Container-section-article',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                frame: true,
                margin: '0 0 5 0',
            },
            items: [
                // {
                //     cls: 'Wrapper-titlebar',
                //     xtype: "toolbar",
                //     dock: 'top',
                //     style:'border:0px',
                //     layout: 'column',
                //     items: [
                //         {
                //             cls:'Wrapper-titlebar-btn',
                //             xtype: 'button',
                //             text: '查询',
                //             //handler: function (btn) {
                //             //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                //             //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                //             //}
                //         },
                //     ]
                // },

                {
                    xtype: 'toolbar',
                    //height: 60,
                    'padding': 0,
                    items: [
                        {
                            cls: 'Wrapper-section-titile-icon',
                            xtype: 'container',
                        },
                        {
                            cls: 'Wrapper-section-titile',
                            xtype: 'label', text: '用户信息',
                            style: {
                                'font-weight': 'bold',
                                'font-size': '17px',
                                'font-weight': '400',
                                'color': '#4b6178',
                                'height': '60px',
                                'vertical-align': 'middle',
                                'line-height': '60px',
                            }
                        },
                        {
                            cls: 'Wrapper-titlebar-btn',
                            xtype: 'button',
                            text: '查询',
                            style: {
                                'vertical-align': 'middle',
                                'line-height': '60px',
                            }
                        },
                    ]
                },
                {
                    xtype:'container',
                    height:60,
                    width:'100%',
                    padding:0,
                    style:{
                        // 'background-color':'#f1f1f1'

                    }
                },
                {
                    cls: 'Wrapper-section',
                    xtype: 'grid',
                    // title: '用户信息',
                    // ui:'light',
                    store: {
                        data: [
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'},
                            {Name: 'aaaaaa', Nation: '汉族', Sex: '男'}
                        ]
                    },
                    flex: 1,
                    sortableColumns: false,
                    enableColumnHide: false,
                    enableColumnMove: false,
                    // dockedItems: [
                    //     {
                    //         xtype: 'toolbar',
                    //         //height: 60,
                    //         'padding': 0,
                    //         cls: 'aaaa',
                    //         items: [
                    //             {
                    //                 cls: 'Wrapper-section-titile-icon',
                    //                 xtype: 'container',
                    //             },
                    //             {
                    //                 cls: 'Wrapper-section-titile',
                    //                 xtype: 'label', text: '用户信息',
                    //                 style: {
                    //                     'font-weight': 'bold',
                    //                     'font-size': '17px',
                    //                     'font-weight': '400',
                    //                     'color': '#4b6178',
                    //                     'height': '60px',
                    //                     'vertical-align': 'middle',
                    //                     'line-height': '60px',
                    //                 }
                    //             },
                    //             {
                    //                 cls: 'Wrapper-titlebar-btn',
                    //                 xtype: 'button',
                    //                 text: '查询',
                    //                 style: {
                    //                     'vertical-align': 'middle',
                    //                     'line-height': '60px',
                    //                 }
                    //                 //handler: function (btn) {
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                    //                 //}
                    //             },
                    //             {
                    //                 cls: 'asas',
                    //                 xtype: 'container',
                    //                 // text: '查询',
                    //                 style: {
                    //                     'height': '100px',
                    //                     'width': '100%',
                    //                     'background-color': 'red',
                    //                     'position':'static!important'
                    //                 }
                    //                 //handler: function (btn) {
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').show();
                    //                 //    btn.ownerCt.ownerCt.down('hidetitlegrid').expand();
                    //                 //}
                    //             },
                    //         ]
                    //     },
                    //
                    //
                    //
                    //
                    //     // {
                    //     //     xtype: 'pagingtoolbar',
                    //     //     dock: 'bottom',
                    //     //     displayInfo: true,
                    //     //     cls:'123123'
                    //     // },
                    // ],
                    columns: [
                        {text: '序号', xtype: 'rownumberer'},
                        {text: '姓名', dataIndex: 'Name', flex: 1,cls:'fffffz'},
                        {text: '民族', dataIndex: 'Nation', width: 120,},
                        {text: '性别', dataIndex: 'Sex', width: 120,}
                    ],
                },
                {
                    xtype: 'splitter',
                    collapsible: true,
                    ignoreHide: true
                },
                {
                    xtype: 'hidetitlegrid',
                    //title: '用户档案',
                    flex: 1,
                    hidden: true,
                    collapsed: true,
                    //collapsible: true,
                    collapseDirection: 'bottom',
                    sortableColumns: false,
                    enableColumnHide: false,
                    enableColumnMove: false,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            items: [
                                {xtype: 'label', text: '用户档案'}
                            ]
                        },
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            displayInfo: true
                        },
                    ],
                    columns: [
                        {text: '序号', xtype: 'rownumberer'},
                        {text: '姓名', width: 120,}
                    ],
                }
            ]
        }
    ],
    listeners: {
        afterrender: function (view) {
            var me = view;

        }
    }
});
