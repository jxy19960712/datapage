Ext.define('SinoSoft.view.module.system.temp.Browse', {
    extend: 'SinoSoft.util.Browse',
    xtype: 'tempbrowse',
    requires: [],
    // controller: 'usercontroller',
    //viewModel:'music',

    layout: {
        type: 'hbox',
        align: 'stretch',
    },
    defaults: {
        frame: true,
        margin: '0 5 0 0',
    },
    tbar: {
        cls: 'Container-section-topbar',
        width: '100%',
        padding: 0,
        height: 45,
        items: [
            {
                cls: 'Container-section-topbar-avatar',
                xtype: 'container',
                height: 45,
                width: 40,
                html: '<i class="iconfont">&#xe600;</i>',
                style: {
                    'color': '#35baf5'
                }
            },
            // {
            //     cls: 'Container-section-topbar-title',
            //     height: 60,
            //     xtype: 'displayfield',
            //     value: '张翰时,男,大方县县委书记,常委',
            // }

            {
                xtype: 'tbtext',
                text: '张翰时,男,大方县县委书记,常委',
                height: 45,
                style: {
                    'line-height': '45px',
                    'font-size': '18px',
                    'color': '#35baf5',
                }
            }
        ]
    },
    items: [
        {
            xtype: 'tabpanel',
            cls: 'Container-section-select2',
            width: '20.6%',
            collapsible: false,
            tabPosition: 'left',
            tabRotation: 0,
            ui: 'navigation',
            defaults: {
                textAlign: 'left',
                bodyPadding: 15
            },
            tbar: {
                height: 50,
                padding: 0,
                cls: 'Container-section-select2-titlebar',
                style: {
                    'border-bottom-width': '1px !important',
                    'border-color': '#dae1e7'
                },
                items: [
                    {
                        cls: 'Container-section-select2-titlebar-icon',
                        xtype: 'container',
                        height: 50,
                        width: 50,
                        html: '<i class="iconfont">&#xe7fb;</i>',
                        style: {
                            'color': '#496278',
                            'line-height':'50px',
                            'text-align':'center',
                            'margin-left':'10px'
                        }
                    },
                    {
                        xtype: 'tbtext',
                        text: '信息集',
                        height: 50,
                        style: {
                            'line-height': '50px',
                            'font-size': '16px',
                            'color': '#496278',
                            'text-indent': '-1em'
                        }
                    }
                ]
            },
            items: [
                {
                    title: '全部信息集',
                    xtype: 'treepanel',
                    store: 'files',
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    }
                    //bind: '{navItems}'
                },
                {
                    title: '按分类查看',
                    xtype: 'treepanel',
                    store: 'files',
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    }
                    //bind: '{navItems}'
                },
                {
                    title: '我的收藏',
                    xtype: 'treepanel',
                    store: 'files',
                    // cls: 'Container-section-select',
                    expanderFirst: false,
                    expanderOnly: false,
                    singleExpand: false,
                    listeners: {
                        //itemclick:'ontreenodeclick'
                    }
                    //bind: '{navItems}'
                },
            ]
        },


        // {
        //     xtype: 'splitter',
        //     collapseTarget: 'prev',
        // },


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
                    'padding': 0,
                    cls: 'Wrapper-headerbar',
                    items: [
                        {
                            cls: 'Wrapper-headerbar-titile-icon',
                            xtype: 'container',
                        },
                        {
                            cls: 'Wrapper-headerbar-titile',
                            xtype: 'label', text: '学位信息集',
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
                            cls: 'Wrapper-headerbar-btn',
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
                    xtype: 'container',
                    cls: 'Wrapper-section',
                    style: {
                        'border-top': 'none'
                    },
                    height: 60,
                    width: '100%',
                    padding: 10,
                    items: [
                        {
                            xtype: 'container',
                            height: 45,
                            width: '100%',
                            padding: 0,
                            style: {
                                'background-color': '#35baf5',
                            },
                            items: [
                                {
                                    xtype: 'tbtext',
                                    text: '学位信息列表',
                                    height: 45,
                                    style: {
                                        'line-height': '45px',
                                        'font-size': '16px',
                                        'color': '#fff',
                                        'text-indent': '1em'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            height: 40,
                            width: '100%',
                            padding: 0,
                            style: {
                                'border': '1px solid #35baf5',
                                'border-bottom': 'none',
                                'background-color': '#f1f1f1'
                            }
                        },
                        {
                            xtype: 'grid',
                            // title: '用户信息',
                            // ui:'light',
                            style: {
                                'border': '1px solid #35baf5',
                                'border-top': 'none'
                            },
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
                                {text: '姓名', dataIndex: 'Name', flex: 1, cls: 'fffffz'},
                                {text: '民族', dataIndex: 'Nation', width: 120,},
                                {text: '性别', dataIndex: 'Sex', width: 120,}
                            ],
                        },
                    ]
                },

                // {
                //     xtype: 'splitter',
                //     collapsible: true,
                //     ignoreHide: true
                // },

                // {
                //     xtype: 'hidetitlegrid',
                //     //title: '用户档案',
                //     flex: 1,
                //     hidden: true,
                //     collapsed: true,
                //     //collapsible: true,
                //     collapseDirection: 'bottom',
                //     sortableColumns: false,
                //     enableColumnHide: false,
                //     enableColumnMove: false,
                //     dockedItems: [
                //         {
                //             xtype: 'toolbar',
                //             items: [
                //                 {xtype: 'label', text: '用户档案'}
                //             ]
                //         },
                //         {
                //             xtype: 'pagingtoolbar',
                //             dock: 'bottom',
                //             displayInfo: true
                //         },
                //     ],
                //     columns: [
                //         {text: '序号', xtype: 'rownumberer'},
                //         {text: '姓名', width: 120,}
                //     ],
                // }
            ]
        }
    ],
    listeners: {
        afterrender: function (view) {
            var me = view;

        }
    }
});
